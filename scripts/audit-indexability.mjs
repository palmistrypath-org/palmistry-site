#!/usr/bin/env node
/**
 * Verifies generated trust/indexability boundaries that are easy to regress:
 * private paid routes are not emitted, noindex utility pages stay out of the
 * sitemap and Pagefind index, AdSense is disabled, and dead paid checkout URLs
 * are not present in built HTML.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { INDEXABILITY_POLICY } from '../src/indexability.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

function collectFiles(dir, predicate, results = []) {
	if (!existsSync(dir)) return results;

	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			collectFiles(full, predicate, results);
		} else if (predicate(full)) {
			results.push(full);
		}
	}

	return results;
}

function distPathForRoute(route) {
	if (route === '/404/') return join(DIST, '404.html');
	return join(DIST, route.replace(/^\//, ''), 'index.html');
}

function readIfExists(path) {
	return existsSync(path) ? readFileSync(path, 'utf8') : '';
}

function routeUrl(route) {
	return `https://palmistrypath.com${route}`;
}

const failures = [];
const htmlFiles = collectFiles(DIST, (file) => file.endsWith('.html'));
const sitemapFiles = collectFiles(DIST, (file) => /sitemap.*\.xml$/.test(file));
const pagefindFiles = collectFiles(join(DIST, 'pagefind'), (file) => statSync(file).isFile());

const allHtml = htmlFiles.map(readIfExists).join('\n');
const allSitemaps = sitemapFiles.map(readIfExists).join('\n');
const allPagefind = pagefindFiles
	.filter((file) => !/\.(wasm|png|jpg|jpeg|webp|gif|ico)$/i.test(file))
	.map(readIfExists)
	.join('\n');

for (const route of INDEXABILITY_POLICY.privatePaths) {
	if (existsSync(distPathForRoute(route))) {
		failures.push(`Private route was emitted: ${route}`);
	}
	if (allSitemaps.includes(routeUrl(route))) {
		failures.push(`Private route appears in sitemap: ${route}`);
	}
	if (allPagefind.includes(route)) {
		failures.push(`Private route appears in Pagefind output: ${route}`);
	}
}

for (const route of INDEXABILITY_POLICY.noindexPaths) {
	const htmlPath = distPathForRoute(route);
	const html = readIfExists(htmlPath);
	if (!html) {
		failures.push(`Expected utility route was not emitted: ${route}`);
		continue;
	}
	if (!/<meta name="robots" content="noindex, follow">/.test(html)) {
		failures.push(`Utility route is missing noindex metadata: ${route}`);
	}
	if (allSitemaps.includes(routeUrl(route))) {
		failures.push(`Noindex utility route appears in sitemap: ${route}`);
	}
	if (allPagefind.includes(route)) {
		failures.push(`Noindex utility route appears in Pagefind output: ${route}`);
	}
}

if (/pagead2\.googlesyndication\.com|adsbygoogle\.js|ca-pub-1942922884645361/.test(allHtml)) {
	failures.push('AdSense script or publisher ID appears in built HTML.');
}

if (/palmistrypath\.gumroad\.com\/l\/complete-reference/.test(allHtml)) {
	failures.push('Dead Gumroad Complete Reference checkout URL appears in built HTML.');
}

if (failures.length) {
	console.error('Indexability/trust audit failed:\n');
	for (const failure of failures) {
		console.error(`  - ${failure}`);
	}
	process.exit(1);
}

console.log('Indexability/trust audit passed.');
