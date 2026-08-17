#!/usr/bin/env node
/**
 * audit-schema.mjs
 *
 * Validates JSON-LD structured data in the built dist/ output.
 *
 * Checks performed:
 *   1. Every <script type="application/ld+json"> block is valid JSON.
 *   2. Blog post pages include both Article and BreadcrumbList schemas.
 *   3. Lesson pages include both LearningResource and BreadcrumbList schemas.
 *
 * Page classification:
 *   Blog post  — dist path matches /blog/<category>/<slug>/index.html
 *                (depth ≥ 3 segments after dist, starts with blog/)
 *   Lesson     — dist path matches /learn/<module>/<lesson>/index.html
 *                (depth ≥ 3 segments after dist, starts with learn/)
 *   Other      — listing pages, home, etc. — no required-type checks
 *
 * Exits 0 with a clear summary on success.
 * Exits 1 with errors printed to stderr on failure.
 *
 * Usage: node scripts/audit-schema.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { INDEXABILITY_POLICY } from '../src/indexability.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const NOINDEX_ROUTES = new Set(INDEXABILITY_POLICY.noindexPaths);

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
 * Classify a dist-relative path into a page type.
 *
 * /blog/beginner/heart-line/index.html  → 'blog-post'
 * /blog/index.html                       → 'other'
 * /learn/lines/02-heart-line/index.html  → 'lesson'
 * /learn/lines/index.html                → 'other'
 * /index.html                            → 'other'
 *
 * Routes on the noindex allowlist (`src/indexability.mjs`) are always 'other',
 * even under /blog or /learn — e.g. a noindex redirect stub left at a lesson's
 * old URL is not required to carry lesson schema.
 */
function classifyPage(relPath) {
  // Normalise to forward-slash, no leading slash
  const p = relPath.replace(/\\/g, '/').replace(/^\//, '');
  const parts = p.split('/');

  const route = `/${p.replace(/index\.html$/, '')}`;
  if (NOINDEX_ROUTES.has(route)) {
    return 'other';
  }

  if (parts[0] === 'blog' && parts.length >= 4) {
    // blog / <category> / <slug> / index.html
    return 'blog-post';
  }
  if (parts[0] === 'learn' && parts.length >= 4) {
    // learn / <module> / <lesson> / index.html
    return 'lesson';
  }
  return 'other';
}

/**
 * Extract all JSON-LD blocks from an HTML string.
 * Returns an array of { raw: string, parsed: object|null, error: string|null }.
 */
function extractJsonLd(html) {
  const results = [];
  const RE = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const m of html.matchAll(RE)) {
    const raw = m[1].trim();
    try {
      results.push({ raw, parsed: JSON.parse(raw), error: null });
    } catch (e) {
      results.push({ raw, parsed: null, error: e.message });
    }
  }
  return results;
}

/** Return the set of @type values present in a list of parsed JSON-LD objects. */
function typeSet(blocks) {
  const types = new Set();
  for (const b of blocks) {
    if (!b.parsed) continue;
    const t = b.parsed['@type'];
    if (typeof t === 'string') types.add(t);
    if (Array.isArray(t)) t.forEach((v) => types.add(v));
  }
  return types;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!existsSync(DIST)) {
  console.error('❌  dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = collectHtml(DIST);
console.log(`Scanning ${htmlFiles.length} HTML files for JSON-LD…\n`);

const invalidJson = [];   // { file, error, snippet }
const missingTypes = [];  // { file, pageType, required, found }

let blogPostCount = 0;
let lessonCount = 0;

for (const htmlFile of htmlFiles) {
  const content = readFileSync(htmlFile, 'utf8');
  const relFile = htmlFile.replace(DIST, '');
  const pageType = classifyPage(relFile);

  const blocks = extractJsonLd(content);

  // 1. Check all blocks are valid JSON
  for (const block of blocks) {
    if (block.error) {
      invalidJson.push({
        file: relFile,
        error: block.error,
        snippet: block.raw.slice(0, 120).replace(/\n/g, ' '),
      });
    }
  }

  // 2. Check required schema types for classified pages
  const validBlocks = blocks.filter((b) => b.parsed !== null);
  const types = typeSet(validBlocks);

  if (pageType === 'blog-post') {
    blogPostCount++;
    const required = ['Article', 'BreadcrumbList'];
    const missing = required.filter((t) => !types.has(t));
    if (missing.length > 0) {
      missingTypes.push({ file: relFile, pageType, required, found: [...types], missing });
    }
  } else if (pageType === 'lesson') {
    lessonCount++;
    const required = ['LearningResource', 'BreadcrumbList'];
    const missing = required.filter((t) => !types.has(t));
    if (missing.length > 0) {
      missingTypes.push({ file: relFile, pageType, required, found: [...types], missing });
    }
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

let exitCode = 0;

if (invalidJson.length === 0) {
  console.log('✅  All JSON-LD blocks are valid JSON.');
} else {
  exitCode = 1;
  console.error(`❌  Found ${invalidJson.length} invalid JSON-LD block(s):\n`);
  for (const item of invalidJson) {
    console.error(`  ${item.file}`);
    console.error(`    Error:   ${item.error}`);
    console.error(`    Snippet: ${item.snippet}…`);
    console.error('');
  }
}

if (missingTypes.length === 0) {
  console.log(
    `✅  Schema types present: ${blogPostCount} blog post(s) have Article + BreadcrumbList; ` +
    `${lessonCount} lesson(s) have LearningResource + BreadcrumbList.`
  );
} else {
  exitCode = 1;
  console.error(`\n❌  Found ${missingTypes.length} page(s) missing required JSON-LD type(s):\n`);
  for (const item of missingTypes) {
    console.error(`  ${item.file}  [${item.pageType}]`);
    console.error(`    Required: ${item.required.join(', ')}`);
    console.error(`    Missing:  ${item.missing.join(', ')}`);
    console.error(`    Present:  ${item.found.join(', ') || '(none)'}`);
    console.error('');
  }
}

process.exit(exitCode);
