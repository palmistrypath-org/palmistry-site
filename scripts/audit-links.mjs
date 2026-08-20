#!/usr/bin/env node
/**
 * audit-links.mjs
 * Scans every HTML file in dist/ for internal href/src references
 * and verifies each referenced path exists on disk.
 * Also verifies that every published blog article route is reachable
 * from at least one meaningful inbound internal link on another
 * indexable page, so newly published articles cannot silently become
 * orphaned from the site's navigational/link graph.
 * Exits 1 if any broken references or orphaned articles are found.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { isNoindexPath, isPrivatePath } from '../src/indexability.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');

// The blog listing page (/blog/) mechanically enumerates every published
// article by design, so counting it as an inbound link source would make
// the orphan check always pass and create false confidence. It is excluded
// as a link *source* here; it is still scanned for broken links above.
const NON_MEANINGFUL_LINK_SOURCES = new Set(['/blog/index.html']);

// ── helpers ───────────────────────────────────────────────────────────────────

/** Convert a dist-relative HTML file path to the site route it serves. */
function routeFromRelFile(relFile) {
  if (relFile === '/404.html') return '/404/';
  return relFile.replace(/index\.html$/, '');
}

/** A source page only counts toward discoverability if it is itself indexable. */
function isIndexableRoute(route) {
  return !isNoindexPath(route) && !isPrivatePath(route);
}

/** Recursively collect all .html files under a directory. */
function collectHtml(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectHtml(full, results);
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

/** Return true if a URL string is internal (not external, not a fragment-only, not mailto/tel). */
function isInternal(url) {
  if (!url) return false;
  if (url.startsWith('#')) return false;
  if (/^(https?:|mailto:|tel:|data:)/i.test(url)) return false;
  // Ignore pagefind / search API paths (built by pagefind, not Astro)
  if (url.startsWith('/pagefind/')) return false;
  return url.startsWith('/') || (!url.includes('://') && !url.startsWith('//'));
}

/**
 * Resolve an internal URL to the absolute filesystem path it should exist at.
 * Handles:
 *   - /path/to/page       → dist/path/to/page/index.html  OR  dist/path/to/page  (file)
 *   - /path/to/file.ext   → dist/path/to/file.ext
 *   - relative urls relative to the HTML file's own directory
 */
function resolvePath(url, htmlFile) {
  // Strip hash fragment and query string
  const clean = url.split('#')[0].split('?')[0];
  if (!clean) return null;

  let abs;
  if (clean.startsWith('/')) {
    abs = join(DIST, clean);
  } else {
    // Relative URL — resolve against the HTML file's directory
    abs = resolve(dirname(htmlFile), clean);
  }

  // If the path has no extension (no dot in the last segment), it's a page.
  const lastSeg = abs.split('/').pop();
  if (!lastSeg.includes('.')) {
    // Try /index.html, then the path itself (could be a directory listing)
    if (existsSync(join(abs, 'index.html'))) return join(abs, 'index.html');
    if (existsSync(abs)) return abs;
    // Return the index.html path so the error message is clear
    return join(abs, 'index.html');
  }

  return abs;
}

// ── main ──────────────────────────────────────────────────────────────────────

const htmlFiles = collectHtml(DIST);
console.log(`Scanning ${htmlFiles.length} HTML files in dist/…\n`);

// Regex patterns to extract href and src values from HTML attributes.
// Matches both single- and double-quoted values.
const ATTR_RE = /(?:href|src|action|srcset)=["']([^"']+)["']/gi;

const broken = [];
const checked = new Set();
/** Map of target relFile → Set of source relFiles linking to it (meaningful, non-self). */
const inboundLinks = new Map();

for (const htmlFile of htmlFiles) {
  const content = readFileSync(htmlFile, 'utf8');
  const relFile = htmlFile.replace(DIST, '');
  let match;

  while ((match = ATTR_RE.exec(content)) !== null) {
    const raw = match[1].trim();

    // srcset can contain multiple URLs separated by commas + descriptors
    const urls = raw.includes(' ') && raw.includes(',')
      ? raw.split(',').map(s => s.trim().split(' ')[0])
      : [raw];

    for (const url of urls) {
      if (!isInternal(url)) continue;

      const key = `${relFile}::${url}`;
      if (checked.has(key)) continue;
      checked.add(key);

      const target = resolvePath(url, htmlFile);
      if (!target) continue;

      if (!existsSync(target)) {
        broken.push({ file: relFile, url, target: target.replace(DIST, '') });
        continue;
      }

      const targetRelFile = target.replace(DIST, '');
      if (targetRelFile === relFile) continue; // self-link
      if (NON_MEANINGFUL_LINK_SOURCES.has(relFile)) continue;
      // A link only counts toward discoverability if its source page is
      // itself indexable; a noindex/private page cannot rescue an
      // otherwise orphaned article from the navigational link graph.
      if (!isIndexableRoute(routeFromRelFile(relFile))) continue;

      if (!inboundLinks.has(targetRelFile)) inboundLinks.set(targetRelFile, new Set());
      inboundLinks.get(targetRelFile).add(relFile);
    }
  }
}

// ── orphaned blog article detection ─────────────────────────────────────────

const orphans = [];
for (const htmlFile of htmlFiles) {
  const relFile = htmlFile.replace(DIST, '');

  // Individual blog article pages live at /blog/<slug.../index.html;
  // the listing page itself (/blog/index.html) is not an article.
  if (!relFile.startsWith('/blog/') || relFile === '/blog/index.html') continue;
  if (!relFile.endsWith('/index.html')) continue;

  const route = routeFromRelFile(relFile);
  if (!isIndexableRoute(route)) continue;

  const inbound = inboundLinks.get(relFile);
  if (!inbound || inbound.size === 0) {
    orphans.push(route);
  }
}

// ── report ────────────────────────────────────────────────────────────────────

if (broken.length === 0) {
  console.log('✅  No broken internal links or missing local assets found.');
} else {
  console.error(`❌  Found ${broken.length} broken reference(s):\n`);

  // Group by source file for readability
  const byFile = {};
  for (const b of broken) {
    if (!byFile[b.file]) byFile[b.file] = [];
    byFile[b.file].push(b);
  }

  for (const [file, refs] of Object.entries(byFile)) {
    console.error(`  ${file}`);
    for (const r of refs) {
      console.error(`    href/src: ${r.url}`);
      console.error(`    missing:  ${r.target}`);
    }
    console.error('');
  }
}

if (orphans.length === 0) {
  console.log('✅  No orphaned blog articles found (every article has a meaningful inbound internal link).');
} else {
  console.error(`❌  Found ${orphans.length} orphaned blog article route(s) with no meaningful inbound internal link:\n`);
  for (const route of orphans) {
    console.error(`    ${route}`);
  }
  console.error('');
}

process.exit(broken.length === 0 && orphans.length === 0 ? 0 : 1);
