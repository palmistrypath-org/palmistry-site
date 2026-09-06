/**
 * palm.mjs — the shared drawing vocabulary for every Palmistry Path diagram.
 *
 * One wireframe hand (gold contour on black, violet haze, hatched palm), one
 * set of landmarks (major lines, minor lines, mounts, creases), and a small
 * kit of annotation tools (leaders, labels, glow lines, chains, islands,
 * specimen panels). Every plate series — mounts, lines, fingers, hand shapes —
 * draws from this file so the whole site reads as one atlas.
 *
 * Coordinates are "hand space": a 1000×1080 canvas with the hand group
 * translated 40px right. Helpers that place hands elsewhere (compare plates)
 * wrap the same hand-space drawing in a transform.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const W = 1000;
export const H = 1080;

export const GOLD = '#c9a96e';
export const GOLD_LIGHT = '#e0c07e';
export const GOLD_BRIGHT = '#f0cf86';
export const BG = '#07050d';
export const INK = '#8c84a8';
export const VIOLET = '#8a5cf0';
export const FONT = "Cinzel, 'Times New Roman', Georgia, serif";

// Left hand, palm up, thumb on the left. Clockwise from the wrist.
export const HAND = [
	'M 335 1010',
	'C 300 900 290 800 300 690',
	'C 255 655 190 585 162 505',
	'C 146 466 178 432 218 448',
	'C 262 478 315 525 345 562',
	'C 356 545 360 500 365 440',
	'C 360 350 360 250 370 175',
	'C 375 140 445 140 452 175',
	'C 458 260 458 350 462 430',
	'C 466 430 466 430 466 430',
	'C 468 330 470 210 478 125',
	'C 484 90 555 90 560 125',
	'C 566 210 566 330 566 430',
	'C 570 430 570 430 570 430',
	'C 572 340 574 240 580 165',
	'C 585 130 655 130 660 165',
	'C 665 240 665 340 664 435',
	'C 668 445 668 445 668 445',
	'C 672 380 676 320 682 270',
	'C 686 240 742 240 748 275',
	'C 754 340 752 400 740 470',
	'C 720 600 700 750 640 880',
	'C 620 940 610 980 605 1010',
	'C 520 1032 420 1032 335 1010 Z',
].join(' ');

export const CREASES = [
	'M 372 300 C 395 292 430 292 455 300',
	'M 368 220 C 392 212 428 212 452 220',
	'M 470 255 C 500 247 540 247 566 255',
	'M 474 170 C 504 162 542 162 562 170',
	'M 574 290 C 600 282 640 282 664 290',
	'M 578 210 C 604 202 642 202 660 210',
	'M 678 380 C 700 372 730 372 748 380',
	'M 684 320 C 704 312 732 312 748 320',
	'M 232 478 C 258 486 290 508 322 538',
	'M 350 1000 C 470 1010 520 1010 595 1000',
];

// Finger geometry: [outer x, inner x, tip y, base y] and the two crease rows.
export const FINGERS = {
	index: { name: 'Index', planet: 'Jupiter', x0: 362, x1: 460, tip: 152, base: 432, creases: [220, 300] },
	middle: { name: 'Middle', planet: 'Saturn', x0: 470, x1: 566, tip: 102, base: 430, creases: [170, 255] },
	ring: { name: 'Ring', planet: 'Apollo', x0: 574, x1: 664, tip: 142, base: 438, creases: [210, 290] },
	little: { name: 'Little', planet: 'Mercury', x0: 676, x1: 750, tip: 250, base: 470, creases: [320, 380] },
};

// Major lines — the default forms used as landmarks on every plate.
export const LINES = {
	life: 'M 352 535 C 330 650 330 800 430 985',
	heart: 'M 735 545 C 640 562 520 556 425 500',
	head: 'M 355 560 C 450 600 570 650 665 690',
	fate: 'M 520 980 C 525 800 518 620 512 475',
};

// Minor lines, in their classical positions.
export const MINOR = {
	sun: 'M 606 830 C 610 730 613 630 616 545',
	mercury: 'M 470 905 C 560 810 650 690 700 585',
	girdle: 'M 468 470 C 530 428 612 428 674 480',
	marriage: ['M 748 500 L 706 503', 'M 750 522 L 716 524'],
	solomon: 'M 362 520 C 385 548 436 548 464 512',
	via: 'M 555 965 C 615 905 660 860 692 800',
	simian: 'M 355 560 C 470 585 620 572 735 545',
	rascettes: ['M 350 1000 C 470 1010 520 1010 595 1000'],
};

export const MOUNTS = {
	jupiter: { name: 'Jupiter', cx: 405, cy: 495, rx: 46, ry: 40, rot: 0, side: 'left', label: [205, 470] },
	saturn: { name: 'Saturn', cx: 512, cy: 480, rx: 46, ry: 38, rot: 0, side: 'top', label: [512, 62] },
	apollo: { name: 'Apollo', cx: 616, cy: 495, rx: 44, ry: 38, rot: 0, side: 'right', label: [796, 400] },
	mercury: { name: 'Mercury', cx: 702, cy: 533, rx: 38, ry: 38, rot: 0, side: 'right', label: [796, 500] },
	upperMars: { name: 'Upper Mars', cx: 690, cy: 650, rx: 40, ry: 58, rot: -8, side: 'right', label: [796, 640] },
	lowerMars: { name: 'Lower Mars', cx: 372, cy: 600, rx: 38, ry: 42, rot: 0, side: 'left', label: [205, 585] },
	plainMars: { name: 'Plain|of Mars', cx: 522, cy: 705, rx: 84, ry: 74, rot: 0, side: 'right', label: [796, 770] },
	venus: { name: 'Venus', cx: 392, cy: 770, rx: 88, ry: 128, rot: -18, side: 'left', label: [190, 820] },
	luna: { name: 'Luna', cx: 655, cy: 815, rx: 74, ry: 112, rot: 10, side: 'right', label: [796, 900] },
};

/* ── Document scaffolding ─────────────────────────────────────────── */

export function defs() {
	return `<defs>
  <radialGradient id="haze" cx="50%" cy="48%" r="60%">
    <stop offset="0%" stop-color="#3a2470" stop-opacity="0.55"/>
    <stop offset="55%" stop-color="#1a1030" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#17122a"/>
    <stop offset="100%" stop-color="#0d0a1a"/>
  </linearGradient>
  <radialGradient id="mountGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="${GOLD_LIGHT}" stop-opacity="0.55"/>
    <stop offset="60%" stop-color="${GOLD}" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="violetGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="${VIOLET}" stop-opacity="0.5"/>
    <stop offset="100%" stop-color="${VIOLET}" stop-opacity="0"/>
  </radialGradient>
  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>
  <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
  <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter>
  <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
    <line x1="0" y1="0" x2="0" y2="7" stroke="${GOLD}" stroke-width="0.5" opacity="0.28"/>
  </pattern>
  <pattern id="hatch2" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-52)">
    <line x1="0" y1="0" x2="0" y2="9" stroke="${GOLD}" stroke-width="0.4" opacity="0.16"/>
  </pattern>
  <pattern id="grille" width="8" height="8" patternUnits="userSpaceOnUse">
    <path d="M 0 4 H 8 M 4 0 V 8" stroke="${GOLD_LIGHT}" stroke-width="0.9" opacity="0.8"/>
  </pattern>
  <clipPath id="hand"><path d="${HAND}"/></clipPath>
</defs>`;
}

export function ground(w = W, h = H) {
	return `<rect width="${w}" height="${h}" fill="${BG}"/>
<rect width="${w}" height="${h}" fill="url(#haze)"/>`;
}

export function registration(w = W, h = H) {
	return `<g stroke="${GOLD}" stroke-width="1" opacity="0.45" fill="none">
  <path d="M 28 46 V 28 H 46"/><path d="M ${w - 28} 46 V 28 H ${w - 46}"/>
  <path d="M 28 ${h - 46} V ${h - 28} H 46"/><path d="M ${w - 28} ${h - 46} V ${h - 28} H ${w - 46}"/>
</g>`;
}

export function star(x, y, r = 8, opacity = 0.7) {
	const s = r / 8;
	return `<path transform="translate(${x} ${y}) scale(${s})" d="M 0 -8 l 2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="${GOLD}" opacity="${opacity}"/>`;
}

export function sparkles(w = W, h = H) {
	return `<g>
  ${star(120, 148, 8, 0.8)}${star(w - 210, 208, 6, 0.6)}${star(150, h - 120, 6, 0.5)}
  <g fill="${GOLD}" opacity="0.7"><circle cx="${w - 180}" cy="${h - 80}" r="1.5"/><circle cx="90" cy="320" r="1.2"/><circle cx="${w - 160}" cy="120" r="1.2"/></g>
</g>`;
}

/**
 * The hand itself, in hand space. `lines` controls the major lines:
 *   'dim'  — all four as quiet landmarks (default)
 *   'none' — no lines (the caller draws its own)
 *   array  — only these keys, dim
 */
export function handBody({ lines = 'dim', fateDashed = true, bloom = true, hatch = true } = {}) {
	const keys = lines === 'none' ? [] : Array.isArray(lines) ? lines : Object.keys(LINES);
	return `<g class="hand">
${bloom ? `<ellipse cx="500" cy="690" rx="330" ry="300" fill="url(#violetGlow)" filter="url(#blur)" opacity="0.9"/>` : ''}
<path d="${HAND}" fill="url(#skin)"/>
${hatch ? `<g clip-path="url(#hand)"><rect width="${W}" height="${H}" fill="url(#hatch)"/><rect width="${W}" height="${H}" fill="url(#hatch2)"/></g>` : ''}
<path d="${HAND}" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.92"/>
<path d="${HAND}" fill="none" stroke="${GOLD_LIGHT}" stroke-width="6" opacity="0.12" filter="url(#softBlur)"/>
<g fill="none" stroke="${GOLD}" stroke-width="1.2" opacity="0.5" stroke-linecap="round">
  ${CREASES.map((d) => `<path d="${d}"/>`).join('\n  ')}
</g>
<g fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linecap="round" opacity="0.42">
  ${keys.map((k) => `<path d="${LINES[k]}"${k === 'fate' && fateDashed ? ' stroke-dasharray="1 5" opacity="0.8"' : ''}/>`).join('\n  ')}
</g>
</g>`;
}

/** A bright, lit line — the thing the plate is about. */
export function glowLine(d, { color = GOLD_BRIGHT, width = 3, opacity = 1, dash = '', glow = true } = {}) {
	return `<g fill="none" stroke-linecap="round" stroke-linejoin="round">
  ${glow ? `<path d="${d}" stroke="${color}" stroke-width="${width * 3}" opacity="${0.35 * opacity}" filter="url(#lineGlow)"${dash ? ` stroke-dasharray="${dash}"` : ''}/>` : ''}
  <path d="${d}" stroke="${color}" stroke-width="${width}" opacity="${opacity}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>
</g>`;
}

export function dot(x, y, r = 4, color = GOLD_BRIGHT, opacity = 1) {
	return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${opacity}"/>`;
}

/** A numbered gold disc — for sequence plates. */
export function numberDisc(x, y, n, { r = 17 } = {}) {
	return `<g>
  <circle cx="${x}" cy="${y}" r="${r + 6}" fill="${GOLD_LIGHT}" opacity="0.18" filter="url(#softBlur)"/>
  <circle cx="${x}" cy="${y}" r="${r}" fill="${BG}" stroke="${GOLD_BRIGHT}" stroke-width="1.4"/>
  <text x="${x}" y="${y + r * 0.38}" text-anchor="middle" font-family="${FONT}" font-size="${r * 1.1}" fill="${GOLD_BRIGHT}">${n}</text>
</g>`;
}

/* ── Labels and leaders ───────────────────────────────────────────── */

export function text(x, y, str, { anchor = 'start', size = 18, color = INK, letter = 2.5, italic = false, upper = true, opacity = 1 } = {}) {
	const parts = String(str).split('|');
	const tspans = parts
		.map((t, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * 1.2}">${escape(upper ? t.toUpperCase() : t)}</tspan>`)
		.join('');
	return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${FONT}" font-size="${size}" letter-spacing="${letter}" fill="${color}" opacity="${opacity}"${italic ? ' font-style="italic"' : ''}>${tspans}</text>`;
}

/** Small-caps body caption under a compare hand (not uppercase, gentler). */
export function caption(x, y, str, { size = 17, color = GOLD_LIGHT, anchor = 'middle' } = {}) {
	return text(x, y, str, { anchor, size, color, letter: 2, upper: true });
}

/**
 * Elbow leader from a label anchor to a target point.
 * side: which side of the target the label sits on ('left' | 'right' | 'top' | 'bottom').
 */
export function leader([lx, ly], [tx, ty], { side = 'right', emph = false, stub = 40, dotR = 2.6 } = {}) {
	let path;
	if (side === 'top' || side === 'bottom') {
		path = `M ${lx} ${ly} L ${tx} ${ty}`;
	} else {
		const dir = side === 'right' ? -1 : 1;
		const sx = lx + dir * 14;
		path = `M ${sx} ${ly} L ${sx + dir * stub} ${ly} L ${tx} ${ty}`;
	}
	const color = emph ? GOLD_LIGHT : INK;
	return `<g opacity="${emph ? 1 : 0.85}">
  <path d="${path}" fill="none" stroke="${color}" stroke-width="1" stroke-dasharray="2 4" opacity="0.9"/>
  <circle cx="${tx}" cy="${ty}" r="${dotR}" fill="${emph ? GOLD_BRIGHT : INK}"/>
</g>`;
}

/**
 * Label + leader in one call. `at` is the label anchor; `to` is the point on
 * the hand. Handles multi-line labels (split on |) and side-based anchoring.
 */
export function wrap(str, max) {
	const s = String(str);
	if (s.includes('|') || s.length <= max) return s;
	const mid = s.length / 2;
	let best = -1;
	for (let i = 0; i < s.length; i++) if (s[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
	return best < 0 ? s : s.slice(0, best) + '|' + s.slice(best + 1);
}

export function callout({ at, to, label: rawLabel, side = 'right', emph = false, size, sub: rawSub }) {
	const [lx, ly] = at;
	const anchor = side === 'right' ? 'start' : side === 'left' ? 'end' : 'middle';
	const sz = size ?? (emph ? 19 : 16);
	const label = side === 'top' || side === 'bottom' ? String(rawLabel) : wrap(rawLabel, 12);
	const sub = rawSub ? wrap(rawSub, 26) : rawSub;
	const lines = String(label).split('|').length;
	let ty;
	if (side === 'top') ty = ly - (lines - 1) * sz * 1.2;
	else if (side === 'bottom') ty = ly + sz;
	else ty = ly + 7 - (lines - 1) * (sz * 0.6);
	const leadFrom = side === 'top' ? [lx, ly + 10] : side === 'bottom' ? [lx, ly - 4] : [lx, ly];
	const color = emph ? GOLD_BRIGHT : INK;
	return `<g>
${leader(leadFrom, to, { side, emph })}
${text(lx, ty, label, { anchor, size: sz, color })}
${sub ? text(lx, ty + sz * 1.05 + (lines - 1) * sz * 1.2, sub, { anchor, size: 13, color: INK, letter: 1.5, upper: false, italic: true, opacity: 0.9 }) : ''}
</g>`;
}

/* ── Path geometry ────────────────────────────────────────────────── */

/** Parse an "M x y C … L …" path into cubic segments [[p0,p1,p2,p3], …]. */
export function parsePath(d) {
	const tokens = d.match(/[MCLZ]|-?\d*\.?\d+/g) || [];
	const segs = [];
	let cur = null;
	let i = 0;
	const num = () => parseFloat(tokens[i++]);
	while (i < tokens.length) {
		const t = tokens[i++];
		if (t === 'M') {
			cur = [num(), num()];
		} else if (t === 'C') {
			const p1 = [num(), num()];
			const p2 = [num(), num()];
			const p3 = [num(), num()];
			segs.push([cur, p1, p2, p3]);
			cur = p3;
		} else if (t === 'L') {
			const p3 = [num(), num()];
			const p1 = [cur[0] + (p3[0] - cur[0]) / 3, cur[1] + (p3[1] - cur[1]) / 3];
			const p2 = [cur[0] + (2 * (p3[0] - cur[0])) / 3, cur[1] + (2 * (p3[1] - cur[1])) / 3];
			segs.push([cur, p1, p2, p3]);
			cur = p3;
		}
	}
	return segs;
}

function cubic([p0, p1, p2, p3], t) {
	const mt = 1 - t;
	const a = mt * mt * mt;
	const b = 3 * mt * mt * t;
	const c = 3 * mt * t * t;
	const d = t * t * t;
	return [a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]];
}

/** Sample n points evenly by arc length along the path. Each point: {x, y, angle}. */
export function samplePath(d, n = 60) {
	const segs = parsePath(d);
	const raw = [];
	for (const s of segs) for (let k = 0; k <= 48; k++) raw.push(cubic(s, k / 48));
	const cum = [0];
	for (let k = 1; k < raw.length; k++) cum.push(cum[k - 1] + Math.hypot(raw[k][0] - raw[k - 1][0], raw[k][1] - raw[k - 1][1]));
	const total = cum[cum.length - 1];
	const out = [];
	for (let k = 0; k < n; k++) {
		const target = (total * k) / (n - 1);
		let j = cum.findIndex((c) => c >= target);
		if (j <= 0) j = 1;
		const a = raw[j - 1];
		const b = raw[j];
		const span = cum[j] - cum[j - 1] || 1;
		const f = (target - cum[j - 1]) / span;
		out.push({ x: a[0] + (b[0] - a[0]) * f, y: a[1] + (b[1] - a[1]) * f, angle: (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI });
	}
	return out;
}

/** The point and tangent at arc-length fraction u (0–1). */
export function pointAt(d, u) {
	const pts = samplePath(d, 201);
	return pts[Math.max(0, Math.min(200, Math.round(u * 200)))];
}

/** A sub-path between arc-length fractions u0 and u1, as a polyline path. */
export function subPath(d, u0, u1) {
	const pts = samplePath(d, 201);
	const i0 = Math.round(u0 * 200);
	const i1 = Math.round(u1 * 200);
	return 'M ' + pts.slice(i0, i1 + 1).map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ');
}

/** A chained line: small linked loops along the path instead of one stroke. */
export function chained(d, { r = 6, color = GOLD_BRIGHT, opacity = 0.95, width = 1.6 } = {}) {
	const pts = samplePath(d, 400);
	const total = pts.length;
	const step = Math.max(2, Math.round((r * 1.6 * (total - 1)) / lengthOf(pts)));
	const out = [];
	for (let k = 0; k < total; k += step) {
		const p = pts[k];
		out.push(`<ellipse cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" rx="${r}" ry="${(r * 0.62).toFixed(1)}" transform="rotate(${p.angle.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)})"/>`);
	}
	return `<g fill="none" stroke="${color}" stroke-width="${width}" opacity="${opacity}">${out.join('')}</g>`;
}

function lengthOf(pts) {
	let l = 0;
	for (let k = 1; k < pts.length; k++) l += Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y);
	return l;
}

/** An island: the line splits into a lens between u0 and u1 and rejoins. */
export function island(d, { u0 = 0.4, u1 = 0.6, width = 9, color = GOLD_BRIGHT } = {}) {
	const pts = samplePath(d, 201);
	const i0 = Math.round(u0 * 200);
	const i1 = Math.round(u1 * 200);
	const upper = [];
	const lower = [];
	for (let k = i0; k <= i1; k++) {
		const p = pts[k];
		const u = (k - i0) / (i1 - i0);
		const off = width * Math.sin(Math.PI * u);
		const a = (p.angle * Math.PI) / 180;
		const nx = -Math.sin(a);
		const ny = Math.cos(a);
		upper.push(`${(p.x + nx * off).toFixed(1)} ${(p.y + ny * off).toFixed(1)}`);
		lower.push(`${(p.x - nx * off).toFixed(1)} ${(p.y - ny * off).toFixed(1)}`);
	}
	return `<g fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round">
  <path d="M ${upper.join(' L ')}"/><path d="M ${lower.join(' L ')}"/>
</g>`;
}

/* ── Composition ──────────────────────────────────────────────────── */

/** Wrap hand-space drawing in a placed, scaled (and optionally mirrored) group. */
export function place(inner, { x = 40, y = 0, scale = 1, mirror = false } = {}) {
	const m = mirror ? ` translate(${W} 0) scale(-1 1)` : '';
	return `<g transform="translate(${x} ${y}) scale(${scale})${m}">${inner}</g>`;
}

/** Full document. */
export function svg({ title, w = W, h = H, body, marks = true }) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="t">
<title id="t">${escape(title)}</title>
${defs()}
${ground(w, h)}
${marks ? registration(w, h) : ''}
${marks ? sparkles(w, h) : ''}
${body}
</svg>
`;
}

export function escape(s) {
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function writePlate(outDir, file, content) {
	mkdirSync(outDir, { recursive: true });
	writeFileSync(join(outDir, file), content, 'utf8');
	console.log('wrote', file);
}

/**
 * Specimen sheet: a grid of small panels, each showing one line quality or
 * marking on a short stretch of line, labelled beneath. Used for the
 * "what to look for" close-ups that every line lesson and article shares.
 */
export function specimenSheet({ items, cols = 4, panelW = 226, panelH = 210, gutter = 14, pad = 34, title }) {
	const rows = Math.ceil(items.length / cols);
	const w = pad * 2 + cols * panelW + (cols - 1) * gutter;
	const h = pad * 2 + rows * panelH + (rows - 1) * gutter;
	const panels = items.map((it, i) => {
		const c = i % cols;
		const r = Math.floor(i / cols);
		const x = pad + c * (panelW + gutter);
		const y = pad + r * (panelH + gutter);
		const cx = x + panelW / 2;
		const cy = y + panelH / 2 - 22;
		const lines = String(it.label).split('|');
		return `<g>
  <rect x="${x}" y="${y}" width="${panelW}" height="${panelH}" rx="4" fill="#0d0a1a" stroke="${GOLD}" stroke-opacity="0.28"/>
  <rect x="${x + 8}" y="${y + 8}" width="${panelW - 16}" height="${panelH - 16}" rx="2" fill="none" stroke="${GOLD}" stroke-opacity="0.12"/>
  <ellipse cx="${cx}" cy="${cy}" rx="${panelW * 0.42}" ry="${panelH * 0.32}" fill="url(#violetGlow)" filter="url(#softBlur)" opacity="0.5"/>
  ${it.draw(cx, cy)}
  ${text(cx, y + panelH - 30 - (lines.length - 1) * 16, it.label, { anchor: 'middle', size: 14, color: GOLD_LIGHT, letter: 2 })}
</g>`;
	});
	return svg({ title, w, h, marks: false, body: panels.join('\n') });
}

/** The reference stroke used inside specimen panels. */
export function specimenLine(cx, cy, { x0 = -74, x1 = 74, lift = 14 } = {}) {
	return `M ${cx + x0} ${cy + lift} C ${cx + x0 * 0.4} ${cy - lift * 0.6} ${cx + x1 * 0.4} ${cy - lift * 0.6} ${cx + x1} ${cy + lift}`;
}
