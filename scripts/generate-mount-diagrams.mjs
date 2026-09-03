/**
 * Generate the eight mount lesson diagrams as SVG.
 *
 * One hand, drawn once, in the Palmistry Path wireframe language (gold contour
 * on black, violet haze, topographic rings on the highlighted mount). Every
 * diagram shares the same hand and the same landmarks, so the mounts module
 * reads as one plate series rather than eight unrelated pictures.
 *
 *   node scripts/generate-mount-diagrams.mjs
 *
 * Output: public/images/lessons/mounts/*.svg
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public', 'images', 'lessons', 'mounts');
mkdirSync(OUT, { recursive: true });

const W = 1000;
const H = 1080;

const GOLD = '#c9a96e';
const GOLD_LIGHT = '#e0c07e';
const GOLD_BRIGHT = '#f0cf86';
const BG = '#07050d';
const INK = '#8c84a8';

// Left hand, palm up, thumb on the left. Clockwise from the wrist.
const HAND = [
	'M 335 1010',
	'C 300 900 290 800 300 690', // thumb-side palm edge
	'C 255 655 190 585 162 505', // thumb outer edge
	'C 146 466 178 432 218 448', // thumb tip
	'C 262 478 315 525 345 562', // thumb inner edge back to the web
	'C 356 545 360 500 365 440', // palm edge up to the index finger base
	'C 360 350 360 250 370 175', // index outer
	'C 375 140 445 140 452 175', // index tip
	'C 458 260 458 350 462 430', // index inner
	'C 466 430 466 430 466 430',
	'C 468 330 470 210 478 125', // middle outer
	'C 484 90 555 90 560 125', // middle tip
	'C 566 210 566 330 566 430', // middle inner
	'C 570 430 570 430 570 430',
	'C 572 340 574 240 580 165', // ring outer
	'C 585 130 655 130 660 165', // ring tip
	'C 665 240 665 340 664 435', // ring inner
	'C 668 445 668 445 668 445',
	'C 672 380 676 320 682 270', // little outer
	'C 686 240 742 240 748 275', // little tip
	'C 754 340 752 400 740 470', // little inner / percussion top
	'C 720 600 700 750 640 880', // percussion edge
	'C 620 940 610 980 605 1010', // to the wrist
	'C 520 1032 420 1032 335 1010 Z',
].join(' ');

// Finger creases (short arcs) to give the wireframe hand its joints.
const CREASES = [
	// index
	'M 372 300 C 395 292 430 292 455 300',
	'M 368 220 C 392 212 428 212 452 220',
	// middle
	'M 470 255 C 500 247 540 247 566 255',
	'M 474 170 C 504 162 542 162 562 170',
	// ring
	'M 574 290 C 600 282 640 282 664 290',
	'M 578 210 C 604 202 642 202 660 210',
	// little
	'M 678 380 C 700 372 730 372 748 380',
	'M 684 320 C 704 312 732 312 748 320',
	// thumb
	'M 232 478 C 258 486 290 508 322 538',
	// wrist
	'M 350 1000 C 470 1010 520 1010 595 1000',
];

// Major lines — landmarks only, kept quiet on every mount plate.
const LINES = {
	life: 'M 352 535 C 330 650 330 800 430 985',
	heart: 'M 735 545 C 640 562 520 556 425 500',
	head: 'M 355 560 C 450 600 570 650 665 690',
	fate: 'M 520 980 C 525 800 518 620 512 475',
};

// Mount regions. `label` positions are the anchor of the leader line.
const MOUNTS = {
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

function ellipse(m, attrs) {
	return `<ellipse cx="${m.cx}" cy="${m.cy}" rx="${m.rx}" ry="${m.ry}" transform="rotate(${m.rot} ${m.cx} ${m.cy})" ${attrs}/>`;
}

// Topographic rings: concentric ellipses fading outward, like elevation lines.
function topography(m, strength = 1) {
	const rings = [];
	const steps = 4;
	for (let i = steps; i >= 1; i--) {
		const f = i / steps;
		const op = (0.9 - f * 0.55) * strength;
		rings.push(
			ellipse(
				{ ...m, rx: m.rx * f, ry: m.ry * f },
				`fill="none" stroke="${GOLD_LIGHT}" stroke-width="${(1.1 - f * 0.4).toFixed(2)}" opacity="${op.toFixed(2)}" stroke-dasharray="${i % 2 ? '' : '3 4'}"`,
			),
		);
	}
	return rings.join('\n');
}

function leader(m, text, emphasised) {
	const [lx, ly] = m.label;
	const anchor = m.side === 'right' ? 'start' : m.side === 'left' ? 'end' : 'middle';
	// Elbow leader: from label to a point just outside the ellipse.
	let ex, ey;
	if (m.side === 'top') {
		ex = m.cx;
		ey = m.cy - m.ry - 10;
	} else {
		const dir = m.side === 'right' ? 1 : -1;
		ex = m.cx + dir * (m.rx + 8) * Math.cos((m.rot * Math.PI) / 180);
		ey = m.cy;
	}
	const midx = m.side === 'top' ? ex : lx + (m.side === 'right' ? -14 : 14);
	const midy = m.side === 'top' ? ly + 14 : ly;
	const path =
		m.side === 'top'
			? `M ${lx} ${ly + 14} L ${ex} ${ey}`
			: `M ${midx} ${midy} L ${midx + (m.side === 'right' ? -40 : 40)} ${midy} L ${ex} ${ey}`;
	const color = emphasised ? GOLD_BRIGHT : INK;
	const op = emphasised ? 1 : 0.85;
	const size = emphasised ? 21 : 18;
	const parts = text.toUpperCase().split('|');
	const ty = m.side === 'top' ? ly : ly + 7 - (parts.length - 1) * (size * 0.6);
	const tspans = parts.map((t, i) => `<tspan x="${lx}" dy="${i === 0 ? 0 : size * 1.15}">${t}</tspan>`).join('');
	return `
<g opacity="${op}">
  <path d="${path}" fill="none" stroke="${emphasised ? GOLD_LIGHT : INK}" stroke-width="1" stroke-dasharray="2 4" opacity="0.9"/>
  <circle cx="${ex}" cy="${ey}" r="2.6" fill="${emphasised ? GOLD_BRIGHT : INK}"/>
  <text x="${lx}" y="${ty}" text-anchor="${anchor}" font-family="Cinzel, 'Times New Roman', Georgia, serif" font-size="${size}" letter-spacing="2.5" fill="${color}" style="text-transform:uppercase">${tspans}</text>
</g>`;
}

function plate({ file, title, highlight = [], labels = [], showFate = true, dimOthers = true }) {
	const hi = new Set(highlight);
	const labelSet = new Set(labels.length ? labels : highlight);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-labelledby="t">
<title id="t">${title.replace(/\|/g, ' ')}</title>
<defs>
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
    <stop offset="0%" stop-color="#8a5cf0" stop-opacity="0.5"/>
    <stop offset="100%" stop-color="#8a5cf0" stop-opacity="0"/>
  </radialGradient>
  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>
  <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
  <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
    <line x1="0" y1="0" x2="0" y2="7" stroke="${GOLD}" stroke-width="0.5" opacity="0.28"/>
  </pattern>
  <pattern id="hatch2" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-52)">
    <line x1="0" y1="0" x2="0" y2="9" stroke="${GOLD}" stroke-width="0.4" opacity="0.16"/>
  </pattern>
  <clipPath id="hand"><path d="${HAND}"/></clipPath>
</defs>

<!-- ground -->
<rect width="${W}" height="${H}" fill="${BG}"/>
<rect width="${W}" height="${H}" fill="url(#haze)"/>

<!-- registration marks -->
<g stroke="${GOLD}" stroke-width="1" opacity="0.45" fill="none">
  <path d="M 28 46 V 28 H 46"/><path d="M ${W - 28} 46 V 28 H ${W - 46}"/>
  <path d="M 28 ${H - 46} V ${H - 28} H 46"/><path d="M ${W - 28} ${H - 46} V ${H - 28} H ${W - 46}"/>
</g>
<g fill="${GOLD}" opacity="0.7">
  <path d="M 120 140 l 2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" opacity="0.8"/>
  <path d="M 790 200 l 2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" opacity="0.6"/>
  <path d="M 150 960 l 2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" opacity="0.5"/>
  <circle cx="820" cy="1000" r="1.5"/><circle cx="90" cy="320" r="1.2"/><circle cx="840" cy="120" r="1.2"/>
</g>

<g transform="translate(40 0)">
<!-- violet bloom behind the palm -->
<ellipse cx="500" cy="690" rx="330" ry="300" fill="url(#violetGlow)" filter="url(#blur)" opacity="0.9"/>

<!-- the hand -->
<path d="${HAND}" fill="url(#skin)"/>
<g clip-path="url(#hand)">
  <rect width="${W}" height="${H}" fill="url(#hatch)"/>
  <rect width="${W}" height="${H}" fill="url(#hatch2)"/>
</g>
<path d="${HAND}" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.92"/>
<path d="${HAND}" fill="none" stroke="${GOLD_LIGHT}" stroke-width="6" opacity="0.12" filter="url(#softBlur)"/>
<g fill="none" stroke="${GOLD}" stroke-width="1.2" opacity="0.5" stroke-linecap="round">
  ${CREASES.map((d) => `<path d="${d}"/>`).join('\n  ')}
</g>

<!-- major lines: landmarks only -->
<g fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linecap="round" opacity="0.42">
  <path d="${LINES.life}"/>
  <path d="${LINES.heart}"/>
  <path d="${LINES.head}"/>
  ${showFate ? `<path d="${LINES.fate}" stroke-dasharray="1 5" opacity="0.8"/>` : ''}
</g>

<!-- quiet regions -->
<g>
${Object.entries(MOUNTS)
	.filter(([k]) => !hi.has(k))
	.map(([, m]) =>
		ellipse(m, `fill="${dimOthers ? 'rgba(122,72,201,0.06)' : 'rgba(201,169,110,0.07)'}" stroke="${dimOthers ? GOLD : GOLD_LIGHT}" stroke-width="${dimOthers ? 0.9 : 1.3}" stroke-dasharray="2 5" opacity="${dimOthers ? 0.55 : 0.9}"`),
	)
	.join('\n')}
</g>

<!-- highlighted regions -->
<g>
${[...hi]
	.map((k) => {
		const m = MOUNTS[k];
		return `
  ${ellipse({ ...m, rx: m.rx * 1.7, ry: m.ry * 1.7 }, `fill="url(#violetGlow)" filter="url(#blur)" opacity="0.9"`)}
  ${ellipse({ ...m, rx: m.rx * 1.25, ry: m.ry * 1.25 }, `fill="url(#mountGlow)" filter="url(#softBlur)"`)}
  ${ellipse(m, `fill="url(#mountGlow)" opacity="0.9"`)}
  ${topography(m)}
  ${ellipse(m, `fill="none" stroke="${GOLD_BRIGHT}" stroke-width="1.6" opacity="0.95"`)}`;
	})
	.join('\n')}
</g>

</g>
<!-- labels -->
<g transform="translate(40 0)">
${Object.entries(MOUNTS)
	.filter(([k]) => labelSet.has(k))
	.map(([k, m]) => leader(m, m.name, hi.has(k)))
	.join('\n')}
</g>
</svg>
`;
	writeFileSync(join(OUT, file), body, 'utf8');
	console.log('wrote', file);
}

const ALL = Object.keys(MOUNTS);

plate({
	file: 'mounts-overview.svg',
	title: 'Palm diagram locating the seven planetary mounts across eight mount regions, plus the Plain of Mars.',
	highlight: [],
	labels: ALL,
	dimOthers: false,
});
plate({ file: 'mount-of-venus.svg', title: 'Palm diagram with the Mount of Venus highlighted at the base of the thumb.', highlight: ['venus'], labels: ['venus', 'lowerMars', 'luna'] });
plate({ file: 'mount-of-jupiter.svg', title: 'Palm diagram with the Mount of Jupiter highlighted beneath the index finger.', highlight: ['jupiter'], labels: ['jupiter', 'saturn', 'lowerMars'] });
plate({ file: 'mount-of-saturn.svg', title: 'Palm diagram with the Mount of Saturn highlighted beneath the middle finger.', highlight: ['saturn'], labels: ['saturn', 'jupiter', 'apollo'] });
plate({ file: 'mount-of-apollo.svg', title: 'Palm diagram with the Mount of Apollo highlighted beneath the ring finger.', highlight: ['apollo'], labels: ['apollo', 'saturn', 'mercury'] });
plate({ file: 'mount-of-mercury.svg', title: 'Palm diagram with the Mount of Mercury highlighted beneath the little finger.', highlight: ['mercury'], labels: ['mercury', 'apollo', 'upperMars'] });
plate({ file: 'mount-of-luna.svg', title: 'Palm diagram with the Mount of Luna highlighted on the outer base of the palm.', highlight: ['luna'], labels: ['luna', 'upperMars', 'venus'] });
plate({ file: 'mount-of-mars.svg', title: 'Palm diagram with Upper Mars, Lower Mars, and the Plain of Mars highlighted.', highlight: ['upperMars', 'lowerMars', 'plainMars'], labels: ['upperMars', 'lowerMars', 'plainMars'] });
