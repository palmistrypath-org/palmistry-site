#!/usr/bin/env node
/**
 * submit-indexnow.mjs
 * Reads URLs from the built sitemap and submits them to the IndexNow API.
 * Run manually after deploying new or updated content — never auto-runs during build.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs          # dry run (default)
 *   node scripts/submit-indexnow.mjs --submit  # live submission
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const INDEXNOW_KEY = '0e03c1e644f8dbbb1bc7d0714f70ff7f';
const HOST = 'palmistrypath.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_PATH = resolve(ROOT, 'dist', 'sitemap-0.xml');
const LIVE_SITEMAP_URL = `https://${HOST}/sitemap-0.xml`;

const isDryRun = !process.argv.includes('--submit');

// ── sitemap loading ───────────────────────────────────────────────────────────

async function loadSitemapXml() {
  if (existsSync(SITEMAP_PATH)) {
    console.log(`Reading sitemap from ${SITEMAP_PATH}`);
    return readFileSync(SITEMAP_PATH, 'utf8');
  }
  console.log(`dist/sitemap-0.xml not found — fetching ${LIVE_SITEMAP_URL}`);
  const res = await fetch(LIVE_SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  return res.text();
}

function extractUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    urls.push(m[1].trim());
  }
  return urls;
}

// ── submission ────────────────────────────────────────────────────────────────

async function submit(urls) {
  const body = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });

  return { status: res.status, statusText: res.statusText };
}

// ── main ──────────────────────────────────────────────────────────────────────

const xml = await loadSitemapXml();
const urls = extractUrls(xml);

if (urls.length === 0) {
  console.error('❌  No URLs found in sitemap. Aborting.');
  process.exit(1);
}

console.log(`\nFound ${urls.length} URLs:\n`);
for (const url of urls) {
  console.log(`  ${url}`);
}

if (isDryRun) {
  console.log(`\n✅  Dry run complete — ${urls.length} URL(s) would be submitted.`);
  console.log('    Run with --submit to send to IndexNow.');
  process.exit(0);
}

console.log(`\nSubmitting ${urls.length} URL(s) to IndexNow…`);
const { status, statusText } = await submit(urls);

if (status === 200 || status === 202) {
  console.log(`✅  Submitted successfully (HTTP ${status}).`);
} else if (status === 422) {
  console.error(`❌  Submission rejected (HTTP 422 — URL(s) not belonging to host or invalid key).`);
  process.exit(1);
} else if (status === 429) {
  console.error(`❌  Rate limited (HTTP 429 — too many requests). Wait before retrying.`);
  process.exit(1);
} else {
  console.error(`❌  Unexpected response: HTTP ${status} ${statusText}`);
  process.exit(1);
}
