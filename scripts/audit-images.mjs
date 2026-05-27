#!/usr/bin/env node
/**
 * audit-images.mjs
 *
 * Builds awareness of image health in the dist/ output:
 *   1. Scans every HTML file for <img src>, <img srcset>, <source src>,
 *      and <meta property="og:image" content> URLs.
 *   2. Resolves local and palmistrypath.com URLs to filesystem paths
 *      and verifies they exist in dist/.
 *   3. Reports any placeholder.jpg usage that is not on the approved list.
 *
 * Exits 0 on success, 1 if any missing images or unapproved placeholders
 * are found.
 *
 * Usage:  node scripts/audit-images.mjs
 *
 * ── Approved placeholder pages ───────────────────────────────────────────────
 * Add dist-relative HTML paths here (e.g. '/blog/about/index.html') if a page
 * intentionally uses placeholder.jpg and you want the audit to allow it.
 * Currently empty: the visual-assets-roadmap confirms all placeholder.jpg
 * Figure blocks were removed in May 2026.
 */

const APPROVED_PLACEHOLDER_PAGES = [
  // '/learn/some-module/some-lesson/index.html',
];

// The placeholder file path as it appears in image URLs (root-relative).
const PLACEHOLDER_PATH = '/images/lessons/placeholder.jpg';

// ---------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const SITE_ORIGIN = 'https://palmistrypath.com';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

/**
 * Given a URL string found in an HTML attribute, return the root-relative
 * path it refers to, or null if it cannot / should not be checked locally.
 *
 * Rules:
 *   - https://palmistrypath.com/foo  →  /foo
 *   - /foo                           →  /foo  (root-relative, leave as-is)
 *   - foo/bar                        →  null  (relative — handled separately)
 *   - https://other.com/…            →  null  (skip external)
 *   - data:, blob:, mailto:, tel:    →  null  (skip non-HTTP)
 *   - #fragment                      →  null  (skip anchor-only)
 *   - /pagefind/…                    →  null  (pagefind runtime, skip)
 */
function toLocalPath(url) {
  if (!url) return null;
  const trimmed = url.trim().split('?')[0].split('#')[0];
  if (!trimmed) return null;
  if (/^(data:|blob:|mailto:|tel:)/i.test(trimmed)) return null;
  if (trimmed.startsWith('#')) return null;
  if (trimmed.startsWith(SITE_ORIGIN)) {
    const path = trimmed.slice(SITE_ORIGIN.length) || '/';
    if (path.startsWith('/pagefind/')) return null;
    return path;
  }
  if (/^https?:\/\//i.test(trimmed)) return null; // other external domain
  if (trimmed.startsWith('//')) return null; // protocol-relative external
  if (trimmed.startsWith('/')) {
    if (trimmed.startsWith('/pagefind/')) return null;
    return trimmed;
  }
  // Relative URL — skip (not enough context to resolve reliably here; the
  // link audit already handles relative hrefs on pages that use them)
  return null;
}

/** Resolve a root-relative path to an absolute filesystem path in dist/. */
function distPath(rootRelative) {
  const clean = rootRelative.split('?')[0].split('#')[0];
  return join(DIST, clean);
}

// ---------------------------------------------------------------------------
// Extract image URLs from an HTML string
// ---------------------------------------------------------------------------

/**
 * Returns an array of raw URL strings found in image-bearing attributes within
 * the given HTML content.
 *
 * Extracts:
 *   <img src="...">
 *   <img srcset="url 1x, url2 2x">  (each individual URL)
 *   <source src="...">
 *   <source srcset="...">
 *   <meta property="og:image" content="...">
 *   <meta property="twitter:image" content="...">
 */
function extractImageUrls(html) {
  const urls = [];

  // <img src>, <source src>
  const SRC_RE = /<(?:img|source)\b[^>]+\bsrc=["']([^"']+)["'][^>]*>/gi;
  for (const m of html.matchAll(SRC_RE)) {
    urls.push(m[1]);
  }

  // <img srcset>, <source srcset>
  const SRCSET_RE = /<(?:img|source)\b[^>]+\bsrcset=["']([^"']+)["'][^>]*>/gi;
  for (const m of html.matchAll(SRCSET_RE)) {
    // srcset format: "url descriptor, url descriptor, …"
    for (const part of m[1].split(',')) {
      const rawUrl = part.trim().split(/\s+/)[0];
      if (rawUrl) urls.push(rawUrl);
    }
  }

  // <meta property="og:image" content="...">
  // <meta property="twitter:image" content="...">
  const META_RE = /<meta\b[^>]+\bproperty=["'](?:og:image|twitter:image)["'][^>]+\bcontent=["']([^"']+)["'][^>]*>/gi;
  for (const m of html.matchAll(META_RE)) {
    urls.push(m[1]);
  }
  // Also handle reversed attribute order: content first, then property
  const META_RE2 = /<meta\b[^>]+\bcontent=["']([^"']+)["'][^>]+\bproperty=["'](?:og:image|twitter:image)["'][^>]*>/gi;
  for (const m of html.matchAll(META_RE2)) {
    urls.push(m[1]);
  }

  return urls;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!existsSync(DIST)) {
  console.error('❌  dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = collectHtml(DIST);
console.log(`Scanning ${htmlFiles.length} HTML files in dist/ for image references…\n`);

const missing = [];       // { file, url, distPath }
const placeholders = [];  // { file, url }
const checked = new Set();

for (const htmlFile of htmlFiles) {
  const content = readFileSync(htmlFile, 'utf8');
  const relFile = htmlFile.replace(DIST, '');
  const rawUrls = extractImageUrls(content);

  for (const raw of rawUrls) {
    const localPath = toLocalPath(raw);
    if (!localPath) continue;

    const key = localPath; // deduplicate across pages by path (same asset = same file)
    const pageKey = `${relFile}::${localPath}`;
    if (checked.has(pageKey)) continue;
    checked.add(pageKey);

    const fsPath = distPath(localPath);

    // 1. Check existence
    if (!existsSync(fsPath)) {
      missing.push({ file: relFile, url: raw, resolved: localPath });
    }

    // 2. Check for placeholder.jpg usage
    if (localPath.toLowerCase().endsWith('placeholder.jpg')) {
      const isApproved = APPROVED_PLACEHOLDER_PAGES.some(
        (approved) => relFile === approved || relFile.startsWith(approved)
      );
      if (!isApproved) {
        placeholders.push({ file: relFile, url: raw });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

let exitCode = 0;

if (missing.length === 0) {
  console.log('✅  No missing images found.');
} else {
  exitCode = 1;
  console.error(`❌  Found ${missing.length} missing image(s):\n`);

  // Group by page
  const byFile = {};
  for (const m of missing) {
    (byFile[m.file] ??= []).push(m);
  }
  for (const [file, items] of Object.entries(byFile)) {
    console.error(`  ${file}`);
    for (const item of items) {
      console.error(`    src/content: ${item.url}`);
      console.error(`    missing at:  ${item.resolved}`);
    }
    console.error('');
  }
}

if (placeholders.length === 0) {
  console.log('✅  No unapproved placeholder.jpg usage found.');
} else {
  exitCode = 1;
  console.error(`\n⚠️   Found ${placeholders.length} unapproved placeholder.jpg reference(s):\n`);

  const byFile = {};
  for (const p of placeholders) {
    (byFile[p.file] ??= []).push(p);
  }
  for (const [file, items] of Object.entries(byFile)) {
    console.error(`  ${file}`);
    for (const item of items) {
      console.error(`    url: ${item.url}`);
    }
    console.error('');
  }

  console.error(
    '  To approve a placeholder, add the page path to APPROVED_PLACEHOLDER_PAGES in scripts/audit-images.mjs'
  );
}

process.exit(exitCode);
