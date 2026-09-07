/**
 * Cover emblems for the Palmistry Path digital product suite.
 *
 * Three emblems, one per tier, all drawn from the same palm atlas
 * (products/shared/palm.mjs) so the covers are unmistakably one family
 * while the tier is legible at thumbnail size:
 *
 *   quickstart  — a single hairline ring; the three first lines lit softly.
 *   journal     — a ruled ring of tick marks (the observer's dial); four lines lit,
 *                 with observation markers at the line ends.
 *   handbook    — a double ring with a ring of stars; every line lit, the mounts
 *                 rendered as topography, crescent moon. The richest of the three.
 *
 * Output: products/shared/art/emblem-<tier>.svg. Run: node scripts/generate-product-emblems.mjs
 * Never hand-edit the SVGs; change this file and re-run.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	HAND, LINES, MINOR, MOUNTS, GOLD, GOLD_LIGHT, GOLD_BRIGHT, VIOLET,
	defs, handBody, glowLine, star, dot,
} from '../products/shared/palm.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '../products/shared/art');
mkdirSync(outDir, { recursive: true });

const SIZE = 1000;
const C = 500; // ring centre
// Hand space bounds: x 146–754, y 90–1032. Scale and centre it inside the ring.
const HAND_CX = 450, HAND_CY = 561, SCALE = 0.74, HAND_TARGET_CY = 528;
const place = (inner) =>
	`<g transform="translate(${C} ${HAND_TARGET_CY}) scale(${SCALE}) translate(${-HAND_CX} ${-HAND_CY})">${inner}</g>`;

function ring(r, { width = 1.6, opacity = 0.75, dash = '' } = {}) {
	return `<circle cx="${C}" cy="${C}" r="${r}" fill="none" stroke="${GOLD}" stroke-width="${width}" opacity="${opacity}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function ticks(r, n, { len = 10, width = 1.2, opacity = 0.6, every = 1 } = {}) {
	const out = [];
	for (let i = 0; i < n; i++) {
		const a = (i / n) * Math.PI * 2;
		const l = i % every === 0 ? len * 1.9 : len;
		const x0 = C + Math.cos(a) * r, y0 = C + Math.sin(a) * r;
		const x1 = C + Math.cos(a) * (r - l), y1 = C + Math.sin(a) * (r - l);
		out.push(`<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}"/>`);
	}
	return `<g stroke="${GOLD}" stroke-width="${width}" opacity="${opacity}">${out.join('')}</g>`;
}

function starRing(r, n) {
	const out = [];
	for (let i = 0; i < n; i++) {
		const a = (i / n) * Math.PI * 2 - Math.PI / 2;
		const x = C + Math.cos(a) * r, y = C + Math.sin(a) * r;
		out.push(i % 6 === 0 ? star(x, y, 7, 0.85) : `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8" fill="${GOLD}" opacity="0.6"/>`);
	}
	return `<g>${out.join('')}</g>`;
}

function topography(m, strength = 1) {
	const rings = [];
	for (let i = 1; i <= 3; i++) {
		const k = 0.42 + i * 0.26;
		rings.push(`<ellipse cx="${m.cx}" cy="${m.cy}" rx="${m.rx * k}" ry="${m.ry * k}" transform="rotate(${m.rot} ${m.cx} ${m.cy})" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1" opacity="${(0.55 - i * 0.13) * strength}"/>`);
	}
	return `<g>${rings.join('')}</g>`;
}

function crescent(x, y, r) {
	return `<g transform="translate(${x} ${y})" fill="${GOLD}" opacity="0.8"><path d="M 0 ${-r} A ${r} ${r} 0 1 0 0 ${r} A ${r * 0.72} ${r * 0.72} 0 1 1 0 ${-r} Z"/></g>`;
}

function haloBloom(strength) {
	return `<circle cx="${C}" cy="${C + 20}" r="330" fill="url(#violetGlow)" filter="url(#blur)" opacity="${strength}"/>`;
}

function doc(title, body) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}" role="img" aria-label="${title}">
${defs()}
${body}
</svg>
`;
}

const lineEnd = (d) => {
	// last coordinate pair of a path
	const nums = d.match(/-?\d+(\.\d+)?/g).map(Number);
	return [nums[nums.length - 2], nums[nums.length - 1]];
};

const emblems = {
	quickstart: doc('Quick Start Guide emblem: a hand within a single gold ring, the heart, head, and life lines lit.', [
		haloBloom(0.7),
		ring(430, { width: 1.4, opacity: 0.7 }),
		place([
			handBody({ lines: ['fate'], bloom: false }),
			glowLine(LINES.heart, { width: 3, opacity: 0.85 }),
			glowLine(LINES.head, { width: 3, opacity: 0.85 }),
			glowLine(LINES.life, { width: 3, opacity: 0.85 }),
		].join('\n')),
		star(790, 190, 9, 0.85),
		`<circle cx="230" cy="800" r="2" fill="${GOLD}" opacity="0.6"/>`,
	].join('\n')),

	journal: doc('Practice Journal emblem: a hand within a ruled ring of tick marks, the four major lines lit and marked at their ends.', [
		haloBloom(0.8),
		ring(432, { width: 1.4, opacity: 0.75 }),
		ticks(432, 96, { len: 9, width: 1.1, opacity: 0.55, every: 8 }),
		ring(400, { width: 0.8, opacity: 0.35, dash: '2 8' }),
		place([
			handBody({ lines: 'none', bloom: false }),
			glowLine(LINES.heart, { width: 3, opacity: 0.9 }),
			glowLine(LINES.head, { width: 3, opacity: 0.9 }),
			glowLine(LINES.life, { width: 3, opacity: 0.9 }),
			glowLine(LINES.fate, { width: 2.4, opacity: 0.8, dash: '2 7' }),
			...['heart', 'head', 'life'].map((k) => { const [x, y] = lineEnd(LINES[k]); return dot(x, y, 6, GOLD_BRIGHT, 0.95) + `<circle cx="${x}" cy="${y}" r="14" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1.2" opacity="0.7"/>`; }),
		].join('\n')),
		star(792, 176, 9, 0.85),
		star(206, 300, 6, 0.6),
	].join('\n')),

	handbook: doc('Foundations Handbook emblem: a hand within a double gold ring and a ring of stars, every line lit and the mounts drawn as topography, with a crescent moon.', [
		haloBloom(1),
		ring(432, { width: 2.2, opacity: 0.9 }),
		ring(414, { width: 1, opacity: 0.6 }),
		starRing(470, 36),
		place([
			handBody({ lines: 'none', bloom: false }),
			...Object.values(MOUNTS).filter((m) => m.name !== 'Plain|of Mars').map((m) => topography(m, 0.9)),
			glowLine(LINES.heart, { width: 3.2, opacity: 0.95 }),
			glowLine(LINES.head, { width: 3.2, opacity: 0.95 }),
			glowLine(LINES.life, { width: 3.2, opacity: 0.95 }),
			glowLine(LINES.fate, { width: 2.6, opacity: 0.85 }),
			glowLine(MINOR.sun, { width: 2, opacity: 0.7, color: GOLD_LIGHT }),
			glowLine(MINOR.mercury, { width: 1.8, opacity: 0.6, color: GOLD_LIGHT }),
		].join('\n')),
		crescent(262, 262, 26),
		star(770, 196, 10, 0.9),
		star(214, 700, 7, 0.65),
		star(760, 760, 6, 0.6),
	].join('\n')),
};

for (const [name, content] of Object.entries(emblems)) {
	writeFileSync(resolve(outDir, `emblem-${name}.svg`), content);
	console.log(`wrote emblem-${name}.svg`);
}

// Small family mark for running heads and back covers: the hand contour only.
const mark = doc('Palmistry Path hand mark.', [
	`<g transform="translate(${C} ${C}) scale(0.62) translate(${-HAND_CX} ${-HAND_CY})">`,
	`<path d="${HAND}" fill="none" stroke="${GOLD}" stroke-width="5" opacity="0.95"/>`,
	`<g fill="none" stroke="${GOLD}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"><path d="${LINES.heart}"/><path d="${LINES.head}"/><path d="${LINES.life}"/></g>`,
	'</g>',
	star(800, 160, 22, 0.9),
].join('\n'));
writeFileSync(resolve(outDir, 'family-mark.svg'), mark);
console.log('wrote family-mark.svg');
void VIOLET;
