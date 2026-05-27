#!/usr/bin/env node
/**
 * audit-content.mjs
 * Validates every blog post in src/content/blog/ against editorial standards:
 *
 *   1. Required frontmatter fields: title, description, pubDate
 *   2. relatedLesson field present (expected on all blog posts)
 *   3. No duplicate titles across the collection
 *   4. description ≤ 170 characters (SEO meta description limit)
 *   5. No accidental /blog/<slug> links that are missing the subfolder segment
 *      (valid paths: /blog/beginner/…, /blog/intermediate/…, /blog/advanced/…)
 *
 * Exits 0 if all checks pass, 1 if any errors are found.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = resolve(__dirname, '..', 'src', 'content', 'blog');

// Valid subfolder names (skill levels)
const VALID_SUBFOLDERS = new Set(['beginner', 'intermediate', 'advanced']);

// ── helpers ───────────────────────────────────────────────────────────────────

/** Recursively collect all .md / .mdx files under a directory. */
function collectMarkdown(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectMarkdown(full, results);
    } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Parse the YAML frontmatter block from a Markdown file.
 * Returns a plain object of key → raw string value (unquoted).
 * Only handles the simple scalar fields this audit needs.
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const block = match[1];
  const result = {};

  for (const line of block.split(/\r?\n/)) {
    // Match `key: value` or `key: "value"` or `key: 'value'`
    const m = line.match(/^(\w[\w-]*):\s*(.+)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    result[key] = val;
  }

  return result;
}

/**
 * Return the body of the file (everything after the closing --- of frontmatter).
 */
function getBody(content) {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---([\s\S]*)$/);
  return match ? match[1] : content;
}

// ── main ──────────────────────────────────────────────────────────────────────

const files = collectMarkdown(BLOG_DIR);
console.log(`Auditing ${files.length} blog post(s) in src/content/blog/…\n`);

const errors = [];
const titlesSeen = new Map(); // title → first file that used it

// Regex: matches markdown links /blog/<something> where <something> does NOT
// start with a valid subfolder.
const BAD_BLOG_LINK_RE =
  /\(\/blog\/(?!(beginner|intermediate|advanced)\/)[^)]*\)/g;

for (const filePath of files.sort()) {
  const relPath = relative(BLOG_DIR, filePath);
  const content = readFileSync(filePath, 'utf8');
  const fm = parseFrontmatter(content);
  const body = getBody(content);

  // ── 1. Required fields ──────────────────────────────────────────────────
  for (const field of ['title', 'description', 'pubDate']) {
    if (!fm[field] || !fm[field].trim()) {
      errors.push(`[${relPath}] Missing required field: ${field}`);
    }
  }

  // ── 2. relatedLesson presence ───────────────────────────────────────────
  if (!fm['relatedLesson'] || !fm['relatedLesson'].trim()) {
    errors.push(`[${relPath}] Missing relatedLesson field`);
  }

  // ── 3. Duplicate titles ─────────────────────────────────────────────────
  if (fm['title']) {
    const normTitle = fm['title'].trim().toLowerCase();
    if (titlesSeen.has(normTitle)) {
      errors.push(
        `[${relPath}] Duplicate title (same as ${titlesSeen.get(normTitle)}): "${fm['title']}"`
      );
    } else {
      titlesSeen.set(normTitle, relPath);
    }
  }

  // ── 4. Description length ───────────────────────────────────────────────
  if (fm['description']) {
    const len = fm['description'].length;
    if (len > 170) {
      errors.push(
        `[${relPath}] description is ${len} chars (max 170): "${fm['description'].slice(0, 60)}…"`
      );
    }
  }

  // ── 5. Accidental /blog/<slug> links (missing subfolder) ────────────────
  let match;
  BAD_BLOG_LINK_RE.lastIndex = 0;
  while ((match = BAD_BLOG_LINK_RE.exec(body)) !== null) {
    // Extract the URL from the match (strip leading `(` and trailing `)`)
    const url = match[0].slice(1, -1);
    errors.push(
      `[${relPath}] Accidental /blog/<slug> link — missing subfolder (beginner/intermediate/advanced): ${url}`
    );
  }
}

// ── report ────────────────────────────────────────────────────────────────────

if (errors.length === 0) {
  console.log(`✅  Content audit passed — all ${files.length} posts are valid.`);
  process.exit(0);
} else {
  console.error(`❌  Content audit failed — ${errors.length} error(s) found:\n`);
  for (const e of errors) {
    console.error(`  ${e}`);
  }
  process.exit(1);
}
