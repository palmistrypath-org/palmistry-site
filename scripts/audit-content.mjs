#!/usr/bin/env node
/**
 * Source-level content integrity checks for the blog and lesson collections.
 *
 * This complements the generated-site link, image, schema, indexability, and
 * accessibility audits. It intentionally focuses on frontmatter, collection
 * relationships, and route/order invariants that can be checked before build.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = resolve(ROOT, 'src', 'content', 'blog');
const LESSONS_DIR = resolve(ROOT, 'src', 'content', 'lessons');

const DESCRIPTION_MAX = 170;
const VALID_BLOG_SUBFOLDERS = new Set(['beginner', 'intermediate', 'advanced']);
const VALID_DIFFICULTIES = new Set(['beginner', 'intermediate', 'advanced']);
const BLOG_REQUIRED_FIELDS = ['title', 'description', 'pubDate'];
const LESSON_REQUIRED_FIELDS = [
	'title',
	'description',
	'module',
	'moduleTitle',
	'order',
	'pubDate',
	'difficulty',
	'duration',
];

function collectMarkdown(dir, results = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			collectMarkdown(full, results);
		} else if (/\.mdx?$/i.test(entry)) {
			results.push(full);
		}
	}
	return results;
}

/**
 * Parse the simple scalar frontmatter fields used by this audit. Astro remains
 * the authority for full YAML/schema validation during the build.
 */
function parseFrontmatter(content) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return {};

	const result = {};
	for (const line of match[1].split(/\r?\n/)) {
		const scalar = line.match(/^(\w[\w-]*):\s*(.*)$/);
		if (!scalar) continue;

		const key = scalar[1];
		let value = scalar[2].trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		result[key] = value;
	}
	return result;
}

function getBody(content) {
	const match = content.match(/^---\r?\n[\s\S]*?\r?\n---([\s\S]*)$/);
	return match ? match[1] : content;
}

function slashPath(path) {
	return path.replaceAll('\\', '/');
}

function sourcePath(file) {
	return slashPath(relative(ROOT, file));
}

function normalizeRoute(route) {
	const pathname = new URL(route, 'https://palmistrypath.com').pathname;
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function routeFromSource(file, collectionDir, prefix) {
	const contentId = slashPath(relative(collectionDir, file)).replace(/\.mdx?$/i, '');
	return normalizeRoute(`${prefix}/${contentId}`);
}

function requireFields(frontmatter, fields, file, errors) {
	for (const field of fields) {
		if (frontmatter[field] === undefined || !frontmatter[field].trim()) {
			errors.push(`[${sourcePath(file)}] Missing required field: ${field}`);
		}
	}
}

function checkDescription(frontmatter, file, findings, severity) {
	if (!frontmatter.description) return;
	if (frontmatter.description.length > DESCRIPTION_MAX) {
		findings.push(
			`[${sourcePath(file)}] description is ${frontmatter.description.length} chars (SEO target ${DESCRIPTION_MAX}; ${severity}): "${frontmatter.description.slice(0, 60)}…"`,
		);
	}
}

function checkDuplicateTitle(frontmatter, file, titlesSeen, label, errors) {
	if (!frontmatter.title) return;
	const key = frontmatter.title.trim().toLowerCase();
	if (titlesSeen.has(key)) {
		errors.push(
			`[${sourcePath(file)}] Duplicate ${label} title (same as ${titlesSeen.get(key)}): "${frontmatter.title}"`,
		);
	} else {
		titlesSeen.set(key, sourcePath(file));
	}
}

const blogFiles = collectMarkdown(BLOG_DIR).sort();
const lessonFiles = collectMarkdown(LESSONS_DIR).sort();
const blogRoutes = new Map();
const lessonRoutes = new Map();
const errors = [];
const warnings = [];

for (const file of blogFiles) {
	const route = routeFromSource(file, BLOG_DIR, '/blog');
	const routeKey = route.toLowerCase();
	if (blogRoutes.has(routeKey)) {
		errors.push(
			`[${sourcePath(file)}] Duplicate generated blog route ${route} (same as ${blogRoutes.get(routeKey)})`,
		);
	} else {
		blogRoutes.set(routeKey, sourcePath(file));
	}
}

for (const file of lessonFiles) {
	const route = routeFromSource(file, LESSONS_DIR, '/learn');
	const routeKey = route.toLowerCase();
	if (lessonRoutes.has(routeKey)) {
		errors.push(
			`[${sourcePath(file)}] Duplicate generated lesson route ${route} (same as ${lessonRoutes.get(routeKey)})`,
		);
	} else {
		lessonRoutes.set(routeKey, sourcePath(file));
	}
}

console.log('Auditing source content integrity:');
console.log(`  - ${blogFiles.length} blog post(s) in src/content/blog/`);
console.log(`  - ${lessonFiles.length} lesson(s) in src/content/lessons/\n`);

const blogTitles = new Map();
const lessonTitles = new Map();
const lessonOrders = new Map();
const BAD_BLOG_LINK_RE =
	/\(\/blog\/(?!(beginner|intermediate|advanced)\/)[^)]*\)/g;

for (const file of blogFiles) {
	const content = readFileSync(file, 'utf8');
	const frontmatter = parseFrontmatter(content);
	const body = getBody(content);

	requireFields(frontmatter, BLOG_REQUIRED_FIELDS, file, errors);
	checkDuplicateTitle(frontmatter, file, blogTitles, 'blog', errors);
	checkDescription(frontmatter, file, errors, 'blocking for blog posts');

	if (!frontmatter.relatedLesson?.trim()) {
		errors.push(`[${sourcePath(file)}] Missing relatedLesson field`);
	} else {
		const target = normalizeRoute(frontmatter.relatedLesson);
		if (!lessonRoutes.has(target.toLowerCase())) {
			errors.push(
				`[${sourcePath(file)}] relatedLesson does not resolve to a lesson route: ${frontmatter.relatedLesson}`,
			);
		}
	}

	BAD_BLOG_LINK_RE.lastIndex = 0;
	for (const match of body.matchAll(BAD_BLOG_LINK_RE)) {
		const url = match[0].slice(1, -1);
		errors.push(
			`[${sourcePath(file)}] Accidental /blog/<slug> link — missing subfolder (${[...VALID_BLOG_SUBFOLDERS].join('/')}): ${url}`,
		);
	}
}

for (const file of lessonFiles) {
	const content = readFileSync(file, 'utf8');
	const frontmatter = parseFrontmatter(content);
	const relativeLessonPath = slashPath(relative(LESSONS_DIR, file));
	const directoryModule = relativeLessonPath.split('/')[0];

	requireFields(frontmatter, LESSON_REQUIRED_FIELDS, file, errors);
	checkDuplicateTitle(frontmatter, file, lessonTitles, 'lesson', errors);
	checkDescription(frontmatter, file, warnings, 'non-blocking for legacy lessons');

	if (frontmatter.module && frontmatter.module !== directoryModule) {
		errors.push(
			`[${sourcePath(file)}] module "${frontmatter.module}" does not match top-level content directory "${directoryModule}"`,
		);
	}

	if (frontmatter.order?.trim()) {
		const order = Number(frontmatter.order);
		if (!Number.isInteger(order) || order < 1) {
			errors.push(
				`[${sourcePath(file)}] order must be a positive integer; received "${frontmatter.order}"`,
			);
		} else {
			const orderKey = `${directoryModule}:${order}`;
			if (lessonOrders.has(orderKey)) {
				errors.push(
					`[${sourcePath(file)}] Duplicate order ${order} in module "${directoryModule}" (same as ${lessonOrders.get(orderKey)})`,
				);
			} else {
				lessonOrders.set(orderKey, sourcePath(file));
			}
		}
	}

	if (frontmatter.difficulty && !VALID_DIFFICULTIES.has(frontmatter.difficulty)) {
		errors.push(
			`[${sourcePath(file)}] Invalid difficulty "${frontmatter.difficulty}" (expected beginner, intermediate, or advanced)`,
		);
	}

	if (frontmatter.duration?.trim()) {
		const duration = Number(frontmatter.duration);
		if (!Number.isFinite(duration) || duration <= 0) {
			errors.push(
				`[${sourcePath(file)}] duration must be a positive number; received "${frontmatter.duration}"`,
			);
		}
	}

	if (frontmatter.relatedArticle !== undefined) {
		if (!frontmatter.relatedArticle.trim()) {
			warnings.push(
				`[${sourcePath(file)}] relatedArticle is blank; optional legacy value ignored`,
			);
		} else {
			const target = normalizeRoute(frontmatter.relatedArticle);
			if (!blogRoutes.has(target.toLowerCase())) {
				errors.push(
					`[${sourcePath(file)}] relatedArticle does not resolve to a blog route: ${frontmatter.relatedArticle}`,
				);
			}
		}
	}
}

if (warnings.length) {
	console.log(`Content audit warnings — ${warnings.length} non-blocking condition(s):\n`);
	for (const warning of warnings) console.log(`  ${warning}`);
	console.log('');
}

if (errors.length) {
	console.error(`Content audit failed — ${errors.length} error(s) found:\n`);
	for (const error of errors) console.error(`  ${error}`);
	process.exit(1);
}

console.log(
	`Content audit passed — ${blogFiles.length} blog post(s) and ${lessonFiles.length} lesson(s) are valid.`,
);
