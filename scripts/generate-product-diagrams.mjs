/**
 * Generate the product suite's palm diagram atlas: finger and thumb plates, hand shapes,
 * active/passive hands, the reading sequence, every major and minor line with
 * its classical variations, and the specimen sheets of line qualities and
 * markings.
 *
 *   node scripts/generate-product-diagrams.mjs
 *
 * Output: products/shared/diagrams/*.svg and products/shared/mounts/*.svg
 * Drawing vocabulary: products/shared/palm.mjs. Variation paths were authored
 * against the earlier schematic hand and are warped onto the engraved hand
 * with remap()/remapPoint() (see palm.mjs), so every variant keeps its
 * teaching geometry relative to the same landmarks.
 */
import { join } from 'node:path';
import {
	BG,
	FINGERS,
	FONT,
	GOLD,
	GOLD_BRIGHT,
	GOLD_LIGHT,
	H,
	HAND,
	INK,
	LINES,
	MINOR,
	MOUNTS,
	W,
	callout,
	caption,
	chained,
	dot,
	glowLine,
	handBody,
	handTexture,
	island,
	numberDisc,
	place,
	pointAt,
	remap,
	remapPoint,
	specimenLine,
	specimenSheet,
	star,
	svg,
	text,
	writePlate,
} from '../products/shared/palm.mjs';

const OUT = join(process.cwd(), 'products', 'shared', 'diagrams');
const MOUNTS_OUT = join(process.cwd(), 'products', 'shared', 'mounts');
const R = remapPoint;
const out = (file, content) => writePlate(OUT, file, content);

/* ── Helpers ──────────────────────────────────────────────────────── */

/** One full-size hand with some lines lit and callouts around it. */
function handPlate({ file, title, dim = Object.keys(LINES), lit = [], extras = '', callouts = [] }) {
	const body = `${place(handBody({ lines: dim }) + lit.map((l) => glowLine(l.d, l)).join('') + extras)}
${callouts.map((c) => callout(c)).join('\n')}`;
	out(file, svg({ title, body }));
}

/**
 * Compare plate: two or three small hands side by side, each with its own
 * line set, captioned beneath. Everything is in hand space and scaled.
 */
function comparePlate({ file, title, hands, scale, h = 720 }) {
	const n = hands.length;
	const s = scale ?? (n === 2 ? 0.5 : 0.44);
	const handW = 650 * s;
	const gap = n === 2 ? 60 : 24;
	const totalW = n * handW + (n - 1) * gap;
	const x0 = (W - totalW) / 2;
	const body = hands
		.map((hnd, i) => {
			const x = x0 + i * (handW + gap) - 118 * s;
			const y = 40;
			const inner =
				handBody({ lines: hnd.dim ?? Object.keys(LINES).filter((k) => !(hnd.lit || []).some((l) => l.key === k)) }) +
				(hnd.lit || []).map((l) => glowLine(l.d, l)).join('') +
				(hnd.extras || '');
			const cx = x0 + i * (handW + gap) + handW / 2;
			const labelY = 40 + 1040 * s + 40;
			return `${place(inner, { x, y, scale: s })}
${caption(cx, labelY, hnd.caption)}
${hnd.sub ? text(cx, labelY + 24, hnd.sub, { anchor: 'middle', size: 14, color: INK, letter: 1, upper: false, italic: true }) : ''}`;
		})
		.join('\n');
	out(file, svg({ title, w: W, h, body }));
}

const lit = (key, d, opts = {}) => ({ key, d: d ?? LINES[key], ...opts });

/* ══════════════════════════════════════════════════════════════════
   FOUNDATIONS
   ══════════════════════════════════════════════════════════════════ */

// The hand as a map: where each family of features lives.
out(
	'hand-map.svg',
	svg({
		title: 'Palm diagram naming the regions a reading works through: fingers, thumb, mounts, major lines, percussion, and wrist.',
		body: `${place(
			handBody() +
				Object.values(MOUNTS)
					.map((m) => `<ellipse cx="${m.cx}" cy="${m.cy}" rx="${m.rx}" ry="${m.ry}" transform="rotate(${m.rot} ${m.cx} ${m.cy})" fill="rgba(201,169,110,0.06)" stroke="${GOLD_LIGHT}" stroke-width="1" stroke-dasharray="2 5" opacity="0.8"/>`)
					.join(''),
		)}
${callout({ at: [772, 150], to: R([600, 175]), label: 'Fingers', sub: 'length, shape, set, lean', side: 'right', emph: true })}
${callout({ at: [150, 440], to: [176, 520], label: 'Thumb', sub: 'read on its own terms', side: 'left', emph: true })}
${callout({ at: [772, 470], to: R([744, 533]), label: 'Mounts', sub: 'the pads beneath the fingers', side: 'right', emph: true })}
${callout({ at: [772, 650], to: R([700, 690]), label: 'Major lines', sub: 'heart, head, life, fate', side: 'right', emph: true })}
${callout({ at: [228, 820], to: R([330, 800]), label: 'Mount of Venus', sub: 'inside the life line', side: 'left', emph: true })}
${callout({ at: [772, 880], to: R([682, 830]), label: 'Percussion', sub: 'the outer edge of the palm', side: 'right', emph: true })}
${callout({ at: [228, 1010], to: R([390, 1004]), label: 'Wrist', sub: 'the rascettes', side: 'left', emph: true })}`,
	}),
);

// Finger names, both sets.
{
	const tips = Object.entries(FINGERS).map(([k, f]) => ({ k, f, x: (f.x0 + f.x1) / 2 + 40, y: f.tip }));
	const body = `${place(handBody())}
${tips
	.map(({ f, x, y }, i) => {
		const ly = 60 + (i % 2) * 28;
		return `${callout({ at: [x, ly + 6], to: [x, y - 6], label: f.name, side: 'top', emph: true, size: 20 })}
${text(x, ly + 30, f.planet, { anchor: 'middle', size: 14, color: INK, letter: 2 })}`;
	})
	.join('\n')}
${callout({ at: [150, 430], to: [168, 522], label: 'Thumb', side: 'left', emph: true, size: 20 })}
${text(150, 456, 'Venus', { anchor: 'end', size: 14, color: INK, letter: 2 })}
${text(500, 1040, 'Anatomical name above · planetary name beneath', { anchor: 'middle', size: 14, color: INK, letter: 2, upper: false, italic: true })}`;
	out('finger-names.svg', svg({ title: 'Palm diagram labelling the thumb and the index, middle, ring, and little fingers with their planetary names Jupiter, Saturn, Apollo, and Mercury.', body }));
}

// Finger phalanges: the three sections of the middle finger.
{
	const f = FINGERS.middle;
	const bands = [
		{ y0: f.tip + 14, y1: f.creases[0], name: 'First phalange', sub: 'the tip · ideas, the mental' },
		{ y0: f.creases[0], y1: f.creases[1], name: 'Second phalange', sub: 'the middle · the practical' },
		{ y0: f.creases[1], y1: f.base, name: 'Third phalange', sub: 'the base · the material' },
	];
	const x0 = f.x0 + 6;
	const x1 = f.x1 - 6;
	const body = `${place(
		handBody() +
			bands
				.map(
					(b, i) =>
						`<rect x="${x0}" y="${b.y0}" width="${x1 - x0}" height="${b.y1 - b.y0}" rx="10" fill="${i === 1 ? 'rgba(138,92,240,0.18)' : 'rgba(224,192,126,0.12)'}" stroke="${GOLD_BRIGHT}" stroke-width="1.2" opacity="0.95"/>`,
				)
				.join(''),
	)}
${bands
	.map((b, i) => callout({ at: [772, [96, 214, 344][i]], to: [x1 + 40 + 4, (b.y0 + b.y1) / 2], label: b.name, sub: b.sub, side: 'right', emph: true }))
	.join('\n')}
${text(500, 1040, 'The same three sections are read on every finger', { anchor: 'middle', size: 14, color: INK, letter: 2, upper: false, italic: true })}`;
	out('finger-phalanges.svg', svg({ title: 'Palm diagram with the middle finger divided into its three phalanges: the first at the tip, the second in the middle, and the third at the base.', body }));
}

// Thumb: two phalanges and the angle of opening.
{
	const body = `${place(
		handBody() +
			// first phalange (tip) and second (below the crease)
			`<ellipse cx="174" cy="546" rx="50" ry="26" transform="rotate(47 174 546)" fill="rgba(224,192,126,0.14)" stroke="${GOLD_BRIGHT}" stroke-width="1.3"/>` +
			`<ellipse cx="246" cy="626" rx="64" ry="32" transform="rotate(47 246 626)" fill="rgba(138,92,240,0.18)" stroke="${GOLD_BRIGHT}" stroke-width="1.3"/>` +
			// angle of opening: arc from thumb axis to index axis, centred on the web
			`<path d="M 212 592 A 128 128 0 0 1 352 560" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1.2" stroke-dasharray="3 5" opacity="0.8"/>`,
	)}
${callout({ at: [150, 440], to: [160, 516], label: 'First phalange', sub: 'the tip · will', side: 'left', emph: true })}
${callout({ at: [150, 700], to: [226, 660], label: 'Second phalange', sub: 'below the joint · logic', side: 'left', emph: true })}
${callout({ at: [150, 860], to: [300, 850], label: 'Mount of Venus', sub: 'sometimes counted as the third', side: 'left' })}
${callout({ at: [772, 640], to: [372, 610], label: 'Angle of opening', sub: 'how far the thumb sits from the hand', side: 'right', emph: true })}`;
	out('thumb-phalanges.svg', svg({ title: 'Palm diagram with the thumb divided into its two phalanges, the first at the tip and the second below the joint, with the angle of opening marked.', body }));
}

// Hand shapes: the master hand warped by palm proportion and finger length.
{
	const BASE = 500; // the webbing line, in hand space
	const CX = 470;
	function warpPath(d, { pw, ph, fl }) {
		const nums = d.match(/-?\d*\.?\d+/g).map(Number);
		const cmds = d.match(/[A-Za-z]/g);
		let i = 0;
		return cmds
			.map((c) => {
				const count = c === 'Z' ? 0 : c === 'C' ? 6 : 2;
				const args = nums.slice(i, i + count);
				i += count;
				if (!count) return c;
				const out = [];
				for (let k = 0; k < args.length; k += 2) {
					const x = CX + (args[k] - CX) * pw;
					const y = args[k + 1] < BASE ? BASE - (BASE - args[k + 1]) * fl : BASE + (args[k + 1] - BASE) * ph;
					out.push(x.toFixed(1), y.toFixed(1));
				}
				return `${c} ${out.join(' ')}`;
			})
			.join(' ');
	}
	function shapedHand(id, sh) {
		const d = warpPath(HAND, sh);
		const up = `translate(${CX} ${BASE}) scale(${sh.pw} ${sh.fl}) translate(${-CX} ${-BASE})`;
		const down = `translate(${CX} ${BASE}) scale(${sh.pw} ${sh.ph}) translate(${-CX} ${-BASE})`;
		return `<clipPath id="${id}"><path d="${d}"/></clipPath>
<clipPath id="${id}u"><rect x="0" y="0" width="${W}" height="${BASE}" transform="${up}"/></clipPath>
<clipPath id="${id}d"><rect x="0" y="${BASE}" width="${W}" height="${H - BASE}" transform="${down}"/></clipPath>
<path d="${d}" fill="url(#skin)"/>
<g clip-path="url(#${id})">
  <g clip-path="url(#${id}u)"><g transform="${up}">${handTexture()}</g></g>
  <g clip-path="url(#${id}d)"><g transform="${down}">${handTexture()}</g></g>
</g>
<path d="${d}" fill="none" stroke="${GOLD}" stroke-width="2.2" opacity="0.95"/>`;
	}
	function schematic(i, cx, { sh, label, sub }) {
		const s = 0.36;
		const x = cx - CX * s;
		const y = 90;
		const palmW = 470 * sh.pw; // approximate palm width in hand space
		const palmY0 = BASE;
		const palmY1 = BASE + (985 - BASE) * sh.ph;
		const fingerTip = BASE - (BASE - 100) * sh.fl;
		const dims = `<g stroke="${GOLD_LIGHT}" stroke-width="2.4" opacity="0.7" fill="none" stroke-dasharray="4 8">
  <path d="M ${CX - palmW / 2 + 30} ${palmY1 + 34} H ${CX + palmW / 2 - 40}"/>
  <path d="M ${CX + palmW / 2 + 30} ${palmY0 + 6} V ${palmY1 - 8}"/>
  <path d="M ${CX + palmW / 2 + 30} ${fingerTip} V ${palmY0 - 14}"/>
</g>`;
		return `<g>
  <ellipse cx="${cx}" cy="${y + 300}" rx="150" ry="200" fill="url(#violetGlow)" filter="url(#blur)" opacity="0.55"/>
  <g transform="translate(${x} ${y}) scale(${s})">${shapedHand(`shape${i}`, sh)}${dims}</g>
  ${text(cx, 500, label, { anchor: 'middle', size: 21, color: GOLD_BRIGHT })}
  ${text(cx, 526, sub, { anchor: 'middle', size: 13, color: INK, letter: 1.2, upper: false, italic: true })}
</g>`;
	}
	const cols = [
		{ sh: { pw: 1.2, ph: 0.82, fl: 0.72 }, label: 'Earth', sub: 'square palm · short fingers' },
		{ sh: { pw: 1.2, ph: 0.82, fl: 1.15 }, label: 'Air', sub: 'square palm · long fingers' },
		{ sh: { pw: 0.86, ph: 1.12, fl: 0.72 }, label: 'Fire', sub: 'rectangular palm · short fingers' },
		{ sh: { pw: 0.86, ph: 1.12, fl: 1.15 }, label: 'Water', sub: 'rectangular palm · long fingers' },
	];
	const body = cols.map((c, i) => schematic(i, 140 + i * 240, c)).join('\n') +
		text(500, 60, 'Two measurements: palm shape · finger length against the palm', { anchor: 'middle', size: 15, color: INK, letter: 2, upper: false, italic: true });
	out('hand-shapes.svg', svg({ title: 'Four hands compare the Earth, Air, Fire, and Water hand shapes by palm proportion and finger length.', w: W, h: 580, body }));
}

// Active and passive hands.
comparePlate({
	file: 'active-passive-hands.svg',
	title: 'Two palm diagrams side by side: the passive, non-dominant hand and the active, dominant hand.',
	hands: [
		{ caption: 'Passive hand', sub: 'the non-dominant hand · what is inherited or latent' },
		{ caption: 'Active hand', sub: 'the dominant hand · what is done with it', extras: `<path d="${HAND}" fill="none" stroke="${GOLD_BRIGHT}" stroke-width="3" opacity="0.5"/>` },
	],
});

// The reading sequence.
{
	const steps = [
		{ n: 1, at: [772, 1000], to: R([560, 1012]), label: 'Overall impression', sub: 'size, colour, how the hand is held', side: 'right' },
		{ n: 2, at: [228, 930], to: R([300, 880]), label: 'Hand shape', sub: 'palm proportion, finger length', side: 'left' },
		{ n: 3, at: [228, 690], to: R([318, 690]), label: 'Texture & flexibility', sub: 'skin, consistency, how it bends', side: 'left' },
		{ n: 4, at: [772, 160], to: R([600, 178]), label: 'Thumb & fingers', sub: 'length, phalanges, set', side: 'right' },
		{ n: 5, at: [772, 500], to: R([744, 533]), label: 'Mounts', sub: 'the pads beneath the fingers', side: 'right' },
		{ n: 6, at: [772, 700], to: R([700, 690]), label: 'Major lines', sub: 'heart, head, life, fate', side: 'right' },
		{ n: 7, at: [228, 480], to: R([402, 530]), label: 'Minor lines & markings', sub: 'read last, weighted least', side: 'left' },
	];
	const body = `${place(handBody())}
${steps
	.map((s) => {
		const [lx, ly] = s.at;
		const dx = s.side === 'right' ? -34 : 34;
		return `${callout({ ...s, at: [lx, ly], emph: true })}${numberDisc(lx + dx, ly, s.n, { r: 16 })}`;
	})
	.join('\n')}`;
	out('reading-sequence.svg', svg({ title: 'Palm diagram with seven numbered callouts showing the order of a reading: overall impression, hand shape, texture, thumb and fingers, mounts, major lines, minor lines and markings.', body }));
}

/* ══════════════════════════════════════════════════════════════════
   MAJOR LINES
   ══════════════════════════════════════════════════════════════════ */

handPlate({
	file: 'major-lines.svg',
	title: 'Palm diagram with the heart, head, life, and fate lines lit and labelled.',
	dim: [],
	lit: [lit('heart'), lit('head', undefined, { color: GOLD_LIGHT }), lit('life', undefined, { color: GOLD_LIGHT }), lit('fate', undefined, { dash: '2 7', width: 2.4, color: GOLD })],
	callouts: [
		{ at: [772, 520], to: R([752, 545]), label: 'Heart line', sub: 'below the fingers, from the percussion', side: 'right', emph: true },
		{ at: [772, 700], to: R([706, 690]), label: 'Head line', sub: 'across the middle of the palm', side: 'right', emph: true },
		{ at: [228, 700], to: R([370, 700]), label: 'Life line', sub: 'arcing around the thumb', side: 'left', emph: true },
		{ at: [228, 940], to: R([560, 940]), label: 'Fate line', sub: 'rising toward the middle finger · often absent', side: 'left', emph: true },
	],
});

// Chinese names for the same three lines.
handPlate({
	file: 'lines-tian-di-ren.svg',
	title: 'Palm diagram labelling the heart line as the Heaven line, the head line as the Human line, and the life line as the Earth line of Chinese palmistry.',
	dim: ['fate'],
	lit: [lit('heart'), lit('head', undefined, { color: GOLD_LIGHT }), lit('life', undefined, { color: GOLD_LIGHT })],
	callouts: [
		{ at: [772, 520], to: R([752, 545]), label: 'Heaven line', sub: 'tian wen · the heart line', side: 'right', emph: true },
		{ at: [772, 700], to: R([706, 690]), label: 'Human line', sub: 'ren wen · the head line', side: 'right', emph: true },
		{ at: [228, 700], to: R([370, 700]), label: 'Earth line', sub: 'di wen · the life line', side: 'left', emph: true },
	],
});

// Each major line, lit alone, with its start and end marked.
const LINE_META = {
	heart: { title: 'Heart line', start: 'Begins at the percussion', end: 'Ends beneath the index or middle finger', startSide: 'right', endSide: 'left' },
	head: { title: 'Head line', start: 'Begins near the life line', end: 'Ends toward the outer palm', startSide: 'left', endSide: 'right' },
	life: { title: 'Life line', start: 'Begins between thumb and index', end: 'Curves toward the wrist', startSide: 'left', endSide: 'right' },
	fate: { title: 'Fate line', start: 'Rises from the base of the palm', end: 'Toward the Mount of Saturn', startSide: 'right', endSide: 'right' },
};
for (const [key, meta] of Object.entries(LINE_META)) {
	const d = LINES[key];
	const p0 = pointAt(d, 0);
	const p1 = pointAt(d, 1);
	const labelFor = (p, side, txt, y) => ({ at: [side === 'right' ? 820 : 200, y ?? p.y], to: [p.x + 40, p.y], label: txt, side });
	const callouts = [];
	if (key === 'heart') {
		callouts.push({ ...labelFor(p0, 'right', 'Begins', 545), sub: meta.start, emph: true });
		callouts.push({ ...labelFor(p1, 'left', 'Ends', 480), sub: meta.end, emph: true });
	} else if (key === 'head') {
		callouts.push({ ...labelFor(p0, 'left', 'Begins', 560), sub: meta.start, emph: true });
		callouts.push({ ...labelFor(p1, 'right', 'Ends', 700), sub: meta.end, emph: true });
	} else if (key === 'life') {
		callouts.push({ ...labelFor(p0, 'left', 'Begins', 520), sub: meta.start, emph: true });
		callouts.push({ ...labelFor(p1, 'right', 'Ends', 985), sub: meta.end, emph: true });
	} else {
		callouts.push({ ...labelFor(p0, 'right', 'Begins', 960), sub: meta.start, emph: true });
		callouts.push({ ...labelFor(p1, 'right', 'Ends', 470), sub: meta.end, emph: true });
	}
	handPlate({
		file: `${key}-line.svg`,
		title: `Palm diagram with the ${meta.title.toLowerCase()} lit, its start and end marked.`,
		dim: Object.keys(LINES).filter((k) => k !== key),
		lit: [lit(key, undefined, key === 'fate' ? { width: 2.8 } : {})],
		extras: dot(p0.x, p0.y, 5) + dot(p1.x, p1.y, 5),
		callouts,
	});
}

/* Heart line variations */
const HEART = {
	endsJupiter: remap('M 735 545 C 640 562 500 548 392 488'),
	endsBetween: remap('M 735 545 C 640 562 520 540 462 468'),
	endsSaturn: remap('M 735 545 C 660 560 590 545 516 498'),
	straight: remap('M 735 545 C 640 550 520 548 420 540'),
	short: remap('M 735 545 C 685 556 630 552 578 536'),
	long: remap('M 735 545 C 640 562 500 552 366 500'),
};
comparePlate({
	file: 'heart-line-endings.svg',
	title: 'Three palm diagrams compare heart lines ending beneath the index finger, between the index and middle fingers, and beneath the middle finger.',
	hands: [
		{ caption: 'Under Jupiter', sub: 'ends beneath the index finger', lit: [lit('heart', HEART.endsJupiter)] },
		{ caption: 'Between', sub: 'ends between index and middle', lit: [lit('heart', HEART.endsBetween)] },
		{ caption: 'Under Saturn', sub: 'ends beneath the middle finger', lit: [lit('heart', HEART.endsSaturn)] },
	],
});
comparePlate({
	file: 'heart-line-curve.svg',
	title: 'Two palm diagrams compare a curved heart line rising toward the fingers with a straight heart line running across the upper palm.',
	hands: [
		{ caption: 'Curved', sub: 'rises toward the fingers', lit: [lit('heart', HEART.endsJupiter)] },
		{ caption: 'Straight', sub: 'runs level across the palm', lit: [lit('heart', HEART.straight)] },
	],
});
comparePlate({
	file: 'heart-line-length.svg',
	title: 'Two palm diagrams compare a long heart line reaching the far side of the palm with a short heart line stopping beneath the ring finger.',
	hands: [
		{ caption: 'Long', sub: 'reaches beneath the index finger', lit: [lit('heart', HEART.long)] },
		{ caption: 'Short', sub: 'stops beneath the ring or middle finger', lit: [lit('heart', HEART.short)] },
	],
});
comparePlate({
	file: 'heart-line-forked.svg',
	title: 'Two palm diagrams compare a heart line with a clean single ending and a heart line that forks at its end.',
	hands: [
		{ caption: 'Single ending', lit: [lit('heart', HEART.endsBetween)] },
		{ caption: 'Forked ending', sub: 'two prongs, toward Jupiter and Saturn', lit: [lit('heart', HEART.endsBetween), lit('heart', remap('M 490 530 C 470 520 440 505 412 490'))] },
	],
});
comparePlate({
	file: 'heart-line-quality.svg',
	title: 'Three palm diagrams compare a clear heart line, a chained heart line made of small linked loops, and a broken heart line with a gap.',
	hands: [
		{ caption: 'Clear', lit: [lit('heart')] },
		{ caption: 'Chained', dim: ['head', 'life', 'fate'], extras: chained(LINES.heart, { r: 7 }) },
		{ caption: 'Broken', dim: ['head', 'life', 'fate'], lit: [lit('heart', remap('M 735 545 C 690 556 640 560 600 558')), lit('heart', remap('M 556 552 C 510 546 465 528 425 500'))] },
	],
});

/* Head line variations */
const HEAD = {
	straight: remap('M 355 560 C 460 588 580 606 700 612'),
	sloping: remap('M 355 560 C 440 620 560 720 640 830'),
	short: remap('M 355 560 C 420 590 480 615 530 630'),
	long: remap('M 355 560 C 460 606 600 662 748 682'),
	separate: remap('M 384 540 C 470 590 580 645 665 690'),
	wideGap: remap('M 408 516 C 480 580 585 645 665 690'),
};
comparePlate({
	file: 'head-line-origin.svg',
	title: 'Three palm diagrams compare head lines that begin joined to the life line, separated from it by a small gap, and separated by a wide gap.',
	hands: [
		{ caption: 'Joined', sub: 'shares its start with the life line', lit: [lit('head'), lit('life', undefined, { color: GOLD_LIGHT, width: 2.2 })] },
		{ caption: 'Separate', sub: 'a small gap between them', lit: [lit('head', HEAD.separate), lit('life', undefined, { color: GOLD_LIGHT, width: 2.2 })] },
		{ caption: 'Wide gap', sub: 'begins well inside the palm', lit: [lit('head', HEAD.wideGap), lit('life', undefined, { color: GOLD_LIGHT, width: 2.2 })] },
	],
});
comparePlate({
	file: 'head-line-path.svg',
	title: 'Two palm diagrams compare a straight head line crossing the palm with a sloping head line that curves down toward the Mount of Luna.',
	hands: [
		{ caption: 'Straight', sub: 'crosses level toward the percussion', lit: [lit('head', HEAD.straight)] },
		{ caption: 'Sloping', sub: 'curves down toward Luna', lit: [lit('head', HEAD.sloping)] },
	],
});
comparePlate({
	file: 'head-line-length.svg',
	title: 'Two palm diagrams compare a long head line reaching the outer palm with a short head line ending beneath the middle finger.',
	hands: [
		{ caption: 'Long', sub: 'reaches toward the percussion', lit: [lit('head', HEAD.long)] },
		{ caption: 'Short', sub: 'stops beneath the middle finger', lit: [lit('head', HEAD.short)] },
	],
});
comparePlate({
	file: 'head-line-forked.svg',
	title: 'Two palm diagrams compare a head line with a single ending and a head line ending in the two-pronged writer’s fork.',
	hands: [
		{ caption: 'Single ending', lit: [lit('head')] },
		{ caption: 'Writer’s fork', sub: 'one prong level, one sloping', lit: [lit('head'), lit('head', remap('M 590 655 C 630 700 655 760 668 810'))] },
	],
});
comparePlate({
	file: 'head-line-quality.svg',
	title: 'Three palm diagrams compare a clear head line, a chained head line, and a broken head line.',
	hands: [
		{ caption: 'Clear', lit: [lit('head')] },
		{ caption: 'Chained', dim: ['heart', 'life', 'fate'], extras: chained(LINES.head, { r: 7 }) },
		{ caption: 'Broken', dim: ['heart', 'life', 'fate'], lit: [lit('head', remap('M 355 560 C 420 588 480 612 520 632')), lit('head', remap('M 566 648 C 600 662 635 676 665 690'))] },
	],
});

/* Life line variations */
const LIFE = {
	wide: remap('M 352 535 C 316 670 336 850 500 990'),
	narrow: remap('M 352 535 C 340 640 336 780 392 960'),
	short: remap('M 352 535 C 335 630 330 720 348 800'),
	sister: remap('M 336 600 C 318 700 320 830 400 950'),
	breakA: remap('M 352 535 C 340 620 330 700 336 760'),
	breakB: remap('M 352 810 C 360 880 385 940 430 985'),
	overlapA: remap('M 352 535 C 338 620 332 700 342 800'),
	overlapB: remap('M 330 740 C 340 850 370 920 430 985'),
	forkPr: remap('M 384 890 C 430 935 500 962 560 976'),
};
comparePlate({
	file: 'life-line-arc.svg',
	title: 'Two palm diagrams compare a wide life-line arc enclosing a large Mount of Venus with a narrow arc that hugs the thumb.',
	hands: [
		{ caption: 'Wide arc', sub: 'a large Mount of Venus', lit: [lit('life', LIFE.wide)] },
		{ caption: 'Narrow arc', sub: 'hugs the base of the thumb', lit: [lit('life', LIFE.narrow)] },
	],
});
comparePlate({
	file: 'life-line-length.svg',
	title: 'Two palm diagrams compare a life line that runs to the wrist with a short life line that ends in the middle of the palm.',
	hands: [
		{ caption: 'Long', sub: 'runs to the wrist', lit: [lit('life')] },
		{ caption: 'Short', sub: 'ends mid-palm · not a lifespan', lit: [lit('life', LIFE.short)] },
	],
});
comparePlate({
	file: 'life-line-double.svg',
	title: 'Two palm diagrams compare a single life line with a life line accompanied by a parallel sister line inside it on the Mount of Venus.',
	hands: [
		{ caption: 'Single', lit: [lit('life')] },
		{ caption: 'Sister line', sub: 'a parallel line inside the arc', lit: [lit('life'), lit('life', LIFE.sister, { color: GOLD_LIGHT, width: 2.2 })] },
	],
});
comparePlate({
	file: 'life-line-break.svg',
	title: 'Two palm diagrams compare a clean break in the life line with a visible gap and an overlapping break where the segments run side by side.',
	hands: [
		{ caption: 'Clean break', sub: 'a visible gap', lit: [lit('life', LIFE.breakA), lit('life', LIFE.breakB)] },
		{ caption: 'Overlapping break', sub: 'the segments run side by side', lit: [lit('life', LIFE.overlapA), lit('life', LIFE.overlapB)] },
	],
});
comparePlate({
	file: 'life-line-forked.svg',
	title: 'Two palm diagrams compare a life line with a single ending and a life line that forks near the wrist, one prong toward the Mount of Luna.',
	hands: [
		{ caption: 'Single ending', lit: [lit('life')] },
		{ caption: 'Terminal fork', sub: 'one prong toward Luna', lit: [lit('life'), lit('life', LIFE.forkPr)] },
	],
});
comparePlate({
	file: 'life-line-quality.svg',
	title: 'Three palm diagrams compare a clear life line, a faint life line, and a chained life line.',
	hands: [
		{ caption: 'Clear', lit: [lit('life')] },
		{ caption: 'Faint', sub: 'thin, easy to lose against the skin', lit: [lit('life', undefined, { width: 1.3, opacity: 0.55, glow: false })] },
		{ caption: 'Chained', dim: ['heart', 'head', 'fate'], extras: chained(LINES.life, { r: 7 }) },
	],
});
// Island on the life line, as an inset-friendly single hand.
handPlate({
	file: 'life-line-island.svg',
	title: 'Palm diagram with an island on the life line: the line splits into a small lens and rejoins.',
	dim: ['heart', 'head', 'fate'],
	lit: [lit('life', remap('M 352 535 C 340 600 332 660 330 700')), lit('life', remap('M 344 860 C 360 910 395 950 430 985'))],
	extras: island(remap('M 330 700 C 328 760 330 810 344 860'), { u0: 0.05, u1: 0.95, width: 12 }),
	callouts: [{ at: [228, 780], to: R([352, 780]), label: 'Island', sub: 'the line splits and rejoins', side: 'left', emph: true }],
});

/* Fate line variations */
handPlate({
	file: 'fate-line-origins.svg',
	title: 'Palm diagram showing four fate-line starting points: the wrist, the Mount of Luna, the life line, and the middle of the palm.',
	dim: ['heart', 'head', 'life'],
	lit: [
		lit('fate', remap('M 520 980 C 525 800 518 620 512 475')),
		lit('fate', remap('M 640 900 C 590 780 540 640 512 475'), { color: GOLD_LIGHT, width: 2.2, dash: '6 6' }),
		lit('fate', remap('M 380 830 C 450 730 500 600 512 475'), { color: GOLD_LIGHT, width: 2.2, dash: '6 6' }),
		lit('fate', remap('M 524 760 C 520 660 516 560 512 475'), { color: GOLD, width: 2.2, dash: '2 6' }),
	],
	extras: dot(...R([520, 980]), 5) + dot(...R([640, 900]), 5, GOLD_LIGHT) + dot(...R([380, 830]), 5, GOLD_LIGHT) + dot(...R([524, 760]), 5, GOLD),
	callouts: [
		{ at: [772, 990], to: R([560, 982]), label: 'From the wrist', side: 'right', emph: true },
		{ at: [772, 900], to: R([680, 900]), label: 'From Luna', sub: 'the outer base of the palm', side: 'right', emph: true },
		{ at: [228, 830], to: R([420, 830]), label: 'From the life line', side: 'left', emph: true },
		{ at: [228, 730], to: R([560, 760]), label: 'From mid-palm', sub: 'a late-starting line', side: 'left', emph: true },
	],
});
handPlate({
	file: 'fate-line-endings.svg',
	title: 'Palm diagram showing three fate-line endpoints: at the head line, at the heart line, and at the Mount of Saturn beneath the middle finger.',
	dim: ['heart', 'head', 'life'],
	lit: [
		lit('fate', remap('M 520 980 C 525 830 520 720 516 640'), { color: GOLD, width: 2.2 }),
		lit('fate', remap('M 516 640 C 515 600 514 575 514 552'), { color: GOLD_LIGHT, width: 2.2, dash: '5 5' }),
		lit('fate', remap('M 514 552 C 513 525 512 500 512 475'), { color: GOLD_BRIGHT, width: 2.2, dash: '2 5' }),
	],
	extras: dot(...R([516, 640]), 5, GOLD) + dot(...R([514, 552]), 5, GOLD_LIGHT) + dot(...R([512, 475]), 5, GOLD_BRIGHT),
	callouts: [
		{ at: [772, 640], to: R([556, 640]), label: 'At the head line', side: 'right', emph: true },
		{ at: [772, 552], to: R([554, 552]), label: 'At the heart line', side: 'right', emph: true },
		{ at: [772, 450], to: R([552, 475]), label: 'At Saturn', sub: 'the full-length line', side: 'right', emph: true },
	],
});
comparePlate({
	file: 'fate-line-presence.svg',
	title: 'Three palm diagrams compare a clear fate line, a faint fragmented fate line, and a palm with no fate line at all.',
	hands: [
		{ caption: 'Clear', lit: [lit('fate', undefined, { width: 2.8 })] },
		{ caption: 'Faint & fragmented', lit: [lit('fate', remap('M 520 980 C 523 920 522 860 521 800'), { width: 1.4, opacity: 0.6, glow: false }), lit('fate', remap('M 518 700 C 517 650 516 610 515 570'), { width: 1.4, opacity: 0.6, glow: false })] },
		{ caption: 'Absent', sub: 'normal, and common', dim: ['heart', 'head', 'life'] },
	],
});
comparePlate({
	file: 'fate-line-forked.svg',
	title: 'Two palm diagrams compare a single fate line and a fate line that forks at its base, with prongs toward Venus and Luna.',
	hands: [
		{ caption: 'Single', lit: [lit('fate', undefined, { width: 2.8 })] },
		{ caption: 'Forked at the base', sub: 'prongs toward Venus and Luna', lit: [lit('fate', remap('M 520 860 C 522 720 516 600 512 475'), { width: 2.8 }), lit('fate', remap('M 520 860 C 490 900 450 940 410 960'), { width: 2.2, color: GOLD_LIGHT }), lit('fate', remap('M 520 860 C 560 900 600 930 640 950'), { width: 2.2, color: GOLD_LIGHT })] },
	],
});
comparePlate({
	file: 'fate-line-broken.svg',
	title: 'Two palm diagrams compare an unbroken fate line and a fate line with a break and a shifted upper segment.',
	hands: [
		{ caption: 'Unbroken', lit: [lit('fate', undefined, { width: 2.8 })] },
		{ caption: 'Broken', sub: 'the upper segment resumes to one side', lit: [lit('fate', remap('M 520 980 C 524 880 522 790 520 720'), { width: 2.8 }), lit('fate', remap('M 540 660 C 536 600 528 540 520 480'), { width: 2.8 })] },
	],
});
comparePlate({
	file: 'fate-line-branches.svg',
	title: 'Two palm diagrams compare upward branches rising from the fate line and downward branches falling from it.',
	hands: [
		{ caption: 'Rising branches', lit: [lit('fate', undefined, { width: 2.8 }), lit('fate', remap('M 519 720 C 545 690 570 665 596 648'), { width: 2, color: GOLD_LIGHT }), lit('fate', remap('M 516 600 C 540 578 560 560 582 548'), { width: 2, color: GOLD_LIGHT })] },
		{ caption: 'Falling branches', lit: [lit('fate', undefined, { width: 2.8 }), lit('fate', remap('M 519 740 C 545 770 568 796 590 820'), { width: 2, color: GOLD_LIGHT }), lit('fate', remap('M 522 860 C 495 890 470 915 448 936'), { width: 2, color: GOLD_LIGHT })] },
	],
});

/* ══════════════════════════════════════════════════════════════════
   MINOR LINES
   ══════════════════════════════════════════════════════════════════ */

handPlate({
	file: 'minor-lines.svg',
	title: 'Palm diagram locating the sun line, Mercury line, Girdle of Venus, marriage lines, Ring of Solomon, and Via Lascivia against the major lines.',
	lit: [
		{ d: MINOR.sun, width: 2.2 },
		{ d: MINOR.mercury, width: 2.2 },
		{ d: MINOR.girdle, width: 2.2 },
		{ d: MINOR.marriage[0], width: 2.2 },
		{ d: MINOR.marriage[1], width: 2.2 },
		{ d: MINOR.solomon, width: 2.2 },
		{ d: MINOR.via, width: 2.2 },
	],
	callouts: [
		{ at: [772, 330], to: R([676, 450]), label: 'Girdle of Venus', sub: 'an arc above the heart line', side: 'right', emph: true },
		{ at: [772, 480], to: R([790, 502]), label: 'Marriage lines', sub: 'on the percussion, above the heart line', side: 'right', emph: true },
		{ at: [772, 590], to: R([656, 545]), label: 'Sun line', sub: 'rises toward the ring finger', side: 'right', emph: true },
		{ at: [228, 480], to: R([402, 520]), label: 'Ring of Solomon', sub: 'curves beneath the index finger', side: 'left', emph: true },
		{ at: [228, 860], to: R([560, 810]), label: 'Mercury line', sub: 'rises toward the little finger', side: 'left', emph: true },
		{ at: [772, 940], to: R([700, 880]), label: 'Via Lascivia', sub: 'low on the Mount of Luna', side: 'right', emph: true },
	],
});

function minorPlate(file, key, title, callouts, extra = {}) {
	handPlate({ file, title, lit: [{ d: MINOR[key], width: 3 }], callouts, ...extra });
}
minorPlate('sun-line.svg', 'sun', 'Palm diagram with the sun line lit, rising up the palm toward the ring finger.', [
	{ at: [772, 560], to: R([656, 545]), label: 'Sun line', sub: 'also the Apollo line', side: 'right', emph: true },
	{ at: [772, 420], to: R([700, 495]), label: 'Mount of Apollo', sub: 'beneath the ring finger', side: 'right' },
]);
minorPlate('mercury-line.svg', 'mercury', 'Palm diagram with the Mercury line lit, running from the base of the palm toward the little finger.', [
	{ at: [228, 880], to: R([560, 810]), label: 'Mercury line', sub: 'also the health or hepatica line', side: 'left', emph: true },
	{ at: [772, 520], to: R([780, 533]), label: 'Mount of Mercury', side: 'right' },
]);
minorPlate('ring-of-solomon.svg', 'solomon', 'Palm diagram with the Ring of Solomon lit, a small arc curving beneath the index finger around the Mount of Jupiter.', [
	{ at: [228, 500], to: R([402, 524]), label: 'Ring of Solomon', sub: 'encloses the Mount of Jupiter', side: 'left', emph: true },
	{ at: [772, 440], to: R([492, 470]), label: 'Mount of Jupiter', side: 'right' },
]);
minorPlate('via-lascivia.svg', 'via', 'Palm diagram with the Via Lascivia lit, a short line low on the Mount of Luna running roughly parallel to the Mercury line.', [
	{ at: [772, 920], to: R([700, 880]), label: 'Via Lascivia', sub: 'low on the Mount of Luna', side: 'right', emph: true },
	{ at: [228, 880], to: R([560, 810]), label: 'Mercury line', sub: 'for comparison', side: 'left' },
], { lit: [{ d: MINOR.via, width: 3 }, { d: MINOR.mercury, width: 1.8, color: GOLD, opacity: 0.6, glow: false }] });
handPlate({
	file: 'marriage-lines.svg',
	title: 'Palm diagram with the marriage or relationship lines lit: short horizontal lines on the outer edge of the palm between the heart line and the little finger.',
	lit: [{ d: MINOR.marriage[0], width: 3 }, { d: MINOR.marriage[1], width: 2.4 }],
	extras: `<circle cx="736" cy="574" r="56" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1" stroke-dasharray="3 5" opacity="0.7"/>`,
	callouts: [
		{ at: [772, 420], to: R([790, 470]), label: 'Marriage lines', sub: 'read on the edge of the hand', side: 'right', emph: true },
		{ at: [772, 600], to: R([776, 545]), label: 'Heart line', sub: 'they sit just above it', side: 'right' },
		{ at: [772, 250], to: R([760, 300]), label: 'Little finger', side: 'right' },
	],
});
comparePlate({
	file: 'girdle-of-venus.svg',
	title: 'Two palm diagrams compare a complete Girdle of Venus, an unbroken arc above the heart line, with a fragmented girdle made of short pieces.',
	hands: [
		{ caption: 'Complete', sub: 'one arc from the first finger gap to the third', lit: [{ key: 'girdle', d: MINOR.girdle, width: 3 }] },
		{ caption: 'Fragmented', sub: 'short, overlapping pieces', lit: [{ key: 'girdle', d: remap('M 468 470 C 500 446 530 436 560 436'), width: 2.6 }, { key: 'girdle', d: remap('M 548 446 C 580 434 616 436 640 450'), width: 2.6 }, { key: 'girdle', d: remap('M 628 442 C 650 452 665 466 674 480'), width: 2.6 }] },
	],
});
comparePlate({
	file: 'simian-line.svg',
	title: 'Two palm diagrams compare separate heart and head lines with a single simian line that crosses the whole palm in their place.',
	hands: [
		{ caption: 'Heart and head', sub: 'two separate lines', lit: [lit('heart'), lit('head', undefined, { color: GOLD_LIGHT })] },
		{ caption: 'Simian line', sub: 'one crease crossing the palm', dim: ['life', 'fate'], lit: [{ key: 'simian', d: MINOR.simian, width: 3.4 }] },
	],
});

/* ══════════════════════════════════════════════════════════════════
   SPECIMEN SHEETS
   ══════════════════════════════════════════════════════════════════ */

const L = (cx, cy) => specimenLine(cx, cy);
out(
	'line-quality.svg',
	specimenSheet({
		title: 'Four close-up examples compare a deep clear line, a thin faint line, a broad shallow line, and a chained line.',
		items: [
			{ label: 'Deep & clear', draw: (cx, cy) => glowLine(L(cx, cy), { width: 3.4 }) },
			{ label: 'Thin & faint', draw: (cx, cy) => glowLine(L(cx, cy), { width: 1.2, opacity: 0.55, glow: false }) },
			{ label: 'Broad & shallow', draw: (cx, cy) => glowLine(L(cx, cy), { width: 8, opacity: 0.35, glow: false, color: GOLD }) + glowLine(L(cx, cy), { width: 2, opacity: 0.4, glow: false, color: GOLD_LIGHT }) },
			{ label: 'Chained', draw: (cx, cy) => chained(L(cx, cy), { r: 7 }) },
		],
	}),
);
out(
	'line-markings.svg',
	specimenSheet({
		title: 'Ten close-up examples of line markings: island, clean break, overlapping break, fork, rising branch, falling branch, cross, star, square, and grille.',
		cols: 5,
		panelW: 178,
		panelH: 196,
		items: [
			{ label: 'Island', draw: (cx, cy) => glowLine(`M ${cx - 62} ${cy + 12} C ${cx - 40} ${cy} ${cx - 30} ${cy - 4} ${cx - 22} ${cy - 5}`, { width: 2.4 }) + glowLine(`M ${cx + 22} ${cy - 5} C ${cx + 30} ${cy - 4} ${cx + 40} ${cy} ${cx + 62} ${cy + 12}`, { width: 2.4 }) + island(`M ${cx - 22} ${cy - 5} L ${cx + 22} ${cy - 5}`, { u0: 0, u1: 1, width: 10 }) },
			{ label: 'Clean break', draw: (cx, cy) => glowLine(`M ${cx - 62} ${cy + 12} C ${cx - 40} ${cy} ${cx - 25} ${cy - 5} ${cx - 12} ${cy - 5}`, { width: 2.4 }) + glowLine(`M ${cx + 12} ${cy - 5} C ${cx + 25} ${cy - 5} ${cx + 40} ${cy} ${cx + 62} ${cy + 12}`, { width: 2.4 }) },
			{ label: 'Overlapping|break', draw: (cx, cy) => glowLine(`M ${cx - 62} ${cy + 16} C ${cx - 40} ${cy + 6} ${cx - 10} ${cy} ${cx + 12} ${cy + 1}`, { width: 2.4 }) + glowLine(`M ${cx - 12} ${cy - 10} C ${cx + 10} ${cy - 12} ${cx + 40} ${cy - 8} ${cx + 62} ${cy + 4}`, { width: 2.4 }) },
			{ label: 'Fork', draw: (cx, cy) => glowLine(L(cx, cy), { width: 2.4 }) + glowLine(`M ${cx + 30} ${cy - 2} C ${cx + 45} ${cy - 10} ${cx + 58} ${cy - 18} ${cx + 68} ${cy - 24}`, { width: 2.2 }) },
			{ label: 'Rising branch', draw: (cx, cy) => glowLine(L(cx, cy), { width: 2.4 }) + glowLine(`M ${cx - 6} ${cy - 5} C ${cx + 4} ${cy - 20} ${cx + 12} ${cy - 32} ${cx + 22} ${cy - 44}`, { width: 1.8, color: GOLD_LIGHT }) },
			{ label: 'Falling branch', draw: (cx, cy) => glowLine(L(cx, cy), { width: 2.4 }) + glowLine(`M ${cx - 6} ${cy - 5} C ${cx} ${cy + 10} ${cx + 8} ${cy + 24} ${cx + 18} ${cy + 38}`, { width: 1.8, color: GOLD_LIGHT }) },
			{ label: 'Cross', draw: (cx, cy) => glowLine(L(cx, cy), { width: 2.4, opacity: 0.55 }) + glowLine(`M ${cx - 14} ${cy - 20} L ${cx + 14} ${cy + 10} M ${cx + 14} ${cy - 20} L ${cx - 14} ${cy + 10}`, { width: 2, color: GOLD_LIGHT }) },
			{ label: 'Star', draw: (cx, cy) => glowLine(L(cx, cy), { width: 2.4, opacity: 0.55 }) + glowLine(`M ${cx - 18} ${cy - 5} L ${cx + 18} ${cy - 5} M ${cx - 9} ${cy - 21} L ${cx + 9} ${cy + 11} M ${cx + 9} ${cy - 21} L ${cx - 9} ${cy + 11}`, { width: 2, color: GOLD_LIGHT }) },
			{ label: 'Square', draw: (cx, cy) => glowLine(`M ${cx - 62} ${cy + 12} C ${cx - 40} ${cy} ${cx - 25} ${cy - 5} ${cx - 14} ${cy - 5}`, { width: 2.4 }) + glowLine(`M ${cx + 14} ${cy - 5} C ${cx + 25} ${cy - 5} ${cx + 40} ${cy} ${cx + 62} ${cy + 12}`, { width: 2.4 }) + `<rect x="${cx - 22}" y="${cy - 24}" width="44" height="38" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1.8"/>` },
			{ label: 'Grille', draw: (cx, cy) => `<ellipse cx="${cx}" cy="${cy - 4}" rx="34" ry="30" fill="url(#grille)" opacity="0.9"/><ellipse cx="${cx}" cy="${cy - 4}" rx="34" ry="30" fill="none" stroke="${GOLD}" stroke-width="1" stroke-dasharray="2 4" opacity="0.6"/>` },
		],
	}),
);

/* ══════════════════════════════════════════════════════════════════
   MOUNTS
   ══════════════════════════════════════════════════════════════════ */

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

function mountPlate({ file, title, highlight = [], labels = [], dimOthers = true }) {
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

	writePlate(MOUNTS_OUT, file, svg({ title: title.replace(/\|/g, ' '), body }));
}

const ALL = Object.keys(MOUNTS);

mountPlate({
	file: 'mounts-overview.svg',
	title: 'Palm diagram locating the seven planetary mounts across eight mount regions, plus the Plain of Mars.',
	highlight: [],
	labels: ALL,
	dimOthers: false,
});
mountPlate({ file: 'mount-of-venus.svg', title: 'Palm diagram with the Mount of Venus highlighted at the base of the thumb.', highlight: ['venus'], labels: ['venus', 'lowerMars', 'luna'] });
mountPlate({ file: 'mount-of-jupiter.svg', title: 'Palm diagram with the Mount of Jupiter highlighted beneath the index finger.', highlight: ['jupiter'], labels: ['jupiter', 'saturn', 'lowerMars'] });
mountPlate({ file: 'mount-of-saturn.svg', title: 'Palm diagram with the Mount of Saturn highlighted beneath the middle finger.', highlight: ['saturn'], labels: ['saturn', 'jupiter', 'apollo'] });
mountPlate({ file: 'mount-of-apollo.svg', title: 'Palm diagram with the Mount of Apollo highlighted beneath the ring finger.', highlight: ['apollo'], labels: ['apollo', 'saturn', 'mercury'] });
mountPlate({ file: 'mount-of-mercury.svg', title: 'Palm diagram with the Mount of Mercury highlighted beneath the little finger.', highlight: ['mercury'], labels: ['mercury', 'apollo', 'upperMars'] });
mountPlate({ file: 'mount-of-luna.svg', title: 'Palm diagram with the Mount of Luna highlighted on the outer base of the palm.', highlight: ['luna'], labels: ['luna', 'upperMars', 'venus'] });
mountPlate({ file: 'mount-of-mars.svg', title: 'Palm diagram with Upper Mars, Lower Mars, and the Plain of Mars highlighted.', highlight: ['upperMars', 'lowerMars', 'plainMars'], labels: ['upperMars', 'lowerMars', 'plainMars'] });

console.log('product diagrams done');
