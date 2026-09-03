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
 * Drawing vocabulary: scripts/lib/palm.mjs (shared with the palm atlas).
 */
import { join } from 'node:path';
import { GOLD, GOLD_BRIGHT, GOLD_LIGHT, MOUNTS, callout, handBody, place, svg, writePlate } from './lib/palm.mjs';

const OUT = join(process.cwd(), 'public', 'images', 'lessons', 'mounts');

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

function mountCallout(m, emph) {
	const [lx, ly] = m.label;
	let to;
	if (m.side === 'top') to = [m.cx + 40, m.cy - m.ry - 10];
	else {
		const dir = m.side === 'right' ? 1 : -1;
		to = [m.cx + 40 + dir * (m.rx + 8) * Math.cos((m.rot * Math.PI) / 180), m.cy];
	}
	return callout({ at: [lx + 40, ly], to, label: m.name, side: m.side, emph });
}

function plate({ file, title, highlight = [], labels = [], dimOthers = true }) {
	const hi = new Set(highlight);
	const labelSet = new Set(labels.length ? labels : highlight);

	const regions = `<g>
${Object.entries(MOUNTS)
	.filter(([k]) => !hi.has(k))
	.map(([, m]) =>
		ellipse(m, `fill="${dimOthers ? 'rgba(122,72,201,0.06)' : 'rgba(201,169,110,0.07)'}" stroke="${dimOthers ? GOLD : GOLD_LIGHT}" stroke-width="${dimOthers ? 0.9 : 1.3}" stroke-dasharray="2 5" opacity="${dimOthers ? 0.55 : 0.9}"`),
	)
	.join('\n')}
</g>
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
</g>`;

	const body = `${place(handBody() + regions)}
${Object.entries(MOUNTS)
	.filter(([k]) => labelSet.has(k))
	.map(([k, m]) => mountCallout(m, hi.has(k)))
	.join('\n')}`;

	writePlate(OUT, file, svg({ title: title.replace(/\|/g, ' '), body }));
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
