#!/usr/bin/env node
/**
 * audit-links.mjs
 * Scans every HTML file in dist/ for internal href/src references
 * and verifies each referenced path exists on disk.
 * Exits 1 if any broken references are found.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');

// ── helpers ───────────────────────────────────────────────────────────────────

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
      }
    }
  }
}

// ── report ────────────────────────────────────────────────────────────────────

if (broken.length === 0) {
  console.log('✅  No broken internal links or missing local assets found.');
  process.exit(0);
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

  process.exit(1);
}
