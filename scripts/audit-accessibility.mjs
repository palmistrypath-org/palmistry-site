#!/usr/bin/env node
/**
 * Focused accessibility guardrails for Batch 2A.
 *
 * This intentionally checks only high-signal regressions: the global skip link
 * and main target in generated HTML, plus prompt-like lesson Figure alt text.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const LESSONS_DIR = resolve(ROOT, 'src', 'content', 'lessons');

const failures = [];

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

const htmlFiles = collectFiles(DIST, (file) => file.endsWith('.html'));

for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	const rel = relative(DIST, file);
	const mainTargets = html.match(/<main\b[^>]*\bid="main-content"/g) ?? [];

	if (!html.includes('href="#main-content"') || !html.includes('Skip to main content')) {
		failures.push(`[${rel}] Missing global skip link.`);
	}

	if (mainTargets.length !== 1) {
		failures.push(`[${rel}] Expected exactly one <main id="main-content"> target; found ${mainTargets.length}.`);
	}
}

const promptLanguage =
	/\b(should|prompt|creative brief|image-generation|generator|render(?:ed)?|clean typeface|visual style|composition|lighting|camera)\b/i;

const lessonFiles = collectFiles(LESSONS_DIR, (file) => file.endsWith('.mdx') || file.endsWith('.md'));

for (const file of lessonFiles) {
	const rel = relative(ROOT, file);
	const content = readFileSync(file, 'utf8');
	const figureCalls = content.matchAll(/<Figure\b[^>]*>/g);

	for (const match of figureCalls) {
		const tag = match[0];
		if (!/\balt=/.test(tag)) {
			failures.push(`[${rel}] Figure is missing an alt attribute.`);
			continue;
		}

		const altMatch = tag.match(/\balt=(["'])(.*?)\1/s);
		if (!altMatch) {
			failures.push(`[${rel}] Figure alt attribute is not a simple quoted string.`);
			continue;
		}

		const alt = altMatch[2];
		if (promptLanguage.test(alt)) {
			failures.push(`[${rel}] Figure alt appears to contain prompt or creative-brief language: "${alt.slice(0, 90)}"`);
		}
	}
}

if (failures.length) {
	console.error('Accessibility audit failed:\n');
	for (const failure of failures) {
		console.error(`  - ${failure}`);
	}
	process.exit(1);
}

console.log('Accessibility audit passed.');
