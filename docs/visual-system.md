# Visual System — Palmistry Path

*Established 2026-09-02 on branch `feat/visual-golden-slice`. Implementation in `src/styles/global.css` is authoritative for exact tokens.*

Palmistry Path is one dark, immersive world: **black, gold, and purple**. Text and imagery emerge from shadow; sections flow into each other; every diagram, card, and product shot sits inside the same darkness. This document records the system so it can be propagated to the rest of the site and later into Quick Start Guide 2.0 and related products.

## Non-negotiables
- Dark theme only. No light or washed-out surfaces anywhere.
- Palette is black `#07050d`, gold `#c9a96e` (light `#e0c07e`, bright `#f0cf86`), and violet `#7a48c9` used as haze, glow, and depth — never as a flat fill.
- Strong existing imagery is the anchor: the gold wireframe hands (`public/images/home/*.webp`) and the black/gold/purple lesson plates (`public/images/lessons/lines/*.webp`). Do not flatten them for the sake of consistency; unify the weaker material around them.
- Atmosphere without hype: the visual world is mystical; the writing stays educational and grounded.

## Tokens (`:root` in `global.css`)
| Group | Tokens |
|---|---|
| Ground | `--color-bg` `#07050d`, `--color-bg-elev` `#0d0a1a`, `--color-bg-raised` `#120e22` |
| Gold | `--accent`, `--accent-light`, `--accent-bright`, `--gold-rgb` |
| Purple | `--violet`, `--violet-deep`, `--violet-ink`, `--violet-rgb` |
| Lines | `--hairline` (gold 18%), `--hairline-strong` (gold 38%) |
| Depth | `--box-shadow`, `--glow-gold`, `--glow-violet` |
| Motion | `--ease-out`, `--reveal-duration`, `--reveal-distance` |
| Widths | `--measure` 720px (reading), `--wide` 1080px (layout) |

## Shared vocabulary (classes in `global.css`)
- `.eyebrow` — tracked Cinzel label above a section.
- `.display` — heading with a soft gold halo (the "emerging from dark" treatment). Use on page titles and hero headings only.
- `.divider-star` — hairline with a star at its centre. Replaces the old `✦ · ✦ · ✦` text dividers.
- `.btn-primary` / `.btn-secondary` — gold gradient button, and violet-tinted outline button.
- `.card` — hairline surface with violet wash and gold light on hover.
- `.atmosphere` / `.atmosphere--centre` — purple haze and gold bloom behind a section. Keep the gradients inside the box (they clip at the section edge).
- `.veil-top` / `.veil-bottom` — 160px fades that stitch a full-bleed section into the ground.
- Film grain: `body::before` at 4.5% opacity, fixed, screen-blended.

## Motion (the reference-site translation)
Scroll storytelling is achieved with **progressive reveal**, not parallax gimmicks:
- Add `.reveal` to any element; `src/scripts/reveal.ts` (loaded from `BaseHead`) adds `.is-in` when it enters the viewport. Elements rise 28px, unblur, and fade in over 1.1s with an expo ease.
- Stagger siblings with `style="--reveal-delay: 120ms"` steps of roughly 80–140ms.
- Variants: `.reveal--slow` (hero copy), `.reveal--scale` (imagery), `.reveal--line` (dividers draw from the centre).
- `prefers-reduced-motion` disables all of it; without JS everything is visible. The `html.js` class gates the hidden initial state.
- Pacing rule: each homepage "act" is one idea — hero, the map, the path, the principles, where to begin, the guide. Sections are separated by generous space and a single star divider, never by hard edges.

## Surfaces in the golden slice
| Surface | File | Treatment |
|---|---|---|
| Header | `src/components/Header.astro` | Sticky, blurred black, gold hairline of light beneath; brand mark glows. |
| Footer | `src/components/Footer.astro` | Brand mark, tagline, violet haze rising from the bottom. |
| Homepage | `src/pages/index.astro` | Six acts. Hero uses `home/hero-emergence.webp` (hand emerging from violet nebula) with black sweeping from the left; module cards use the wireframe art dissolving into the card body; the guide is shown as a 3D book. |
| Learn hub | `src/pages/learn/index.astro` | Haze header, module cards with art on the left. |
| Module index | `src/pages/learn/[module]/index.astro` | Haze opening, display title. |
| Lesson | `src/pages/learn/[module]/[lesson].astro` | The module's hand hangs faintly behind the title; drop cap on the lede; gold hairline above each h2 (global `.prose h2::before`). |
| Figure | `src/components/Figure.astro` | Every diagram sits in a "plate": hairline frame, corner registration ticks, vignette, violet bloom. |
| Practice / Checkpoint | `src/components/Practice.astro`, `Checkpoint.astro` | Gold-lit and violet-lit panels respectively. |
| Lesson footer | `src/components/LessonFooter.astro` | Glow button, guide card with the book cover. |
| Blog article | `src/layouts/BlogPost.astro` | Haze opening, display title, star divider, drop cap, lit CTA panel. |
| Guide (lead magnet) | `src/pages/guide.astro` | 3D book hero on nebula, numbered contents cards, lit signup panel. |

## Imagery and diagrams
- **Hero:** `public/images/home/hero-emergence.webp` (+ `-md`). Generated under art direction (gold engraving hand, violet nebula, black left two-thirds for copy), letterbox trimmed and headroom added.
- **Guide cover:** `public/images/guide/quick-start-cover.webp`. Black cover, gold rules, wireframe hand in a double gold ring on violet nebula. This is the reference for Quick Start Guide 2.0's cover direction.
- **Haze texture:** `public/images/home/haze-nebula.webp`, used as a section backdrop at low opacity behind gradients. Must stay very dark.
- **Mount diagrams:** generated by `scripts/generate-mount-diagrams.mjs` into `public/images/lessons/mounts/*.svg`. One shared hand, gold wireframe contour with hatch texture, violet bloom, topographic gold rings on the highlighted mount, dotted outlines for the quiet regions, Cinzel-style leader labels. Edit the script, not the SVGs. The eight plates are wired into the Mounts lessons via `<Figure>`.
- Rejected during this pass: a light ivory/teal "Editorial Mystic" asset set (`visual-production/`, untracked) — off the dark mandate — and a generated mounts plate with a wood frame and glowing fingertips (off-brief and educationally misleading).

### The palm atlas (2026-09-03)
Every diagram is generated. `scripts/lib/palm.mjs` holds the hand, the landmarks (major lines, minor lines, mounts, finger geometry) and the annotation kit (callouts with leaders, glow lines, chained lines, islands, compare plates, specimen sheets). Two generators use it:

- `scripts/generate-mount-diagrams.mjs` → `public/images/lessons/mounts/*.svg` (8 plates)
- `scripts/generate-palm-diagrams.mjs` → `public/images/diagrams/*.svg` (46 plates: hand map, finger names, phalanges, thumb, hand shapes, active/passive, reading sequence, each major line and its variations, minor lines, line-quality and markings sheets)

Run both after editing; never edit the SVGs. To add a variation, add a path in hand space and a `comparePlate` or `handPlate` call.

### Placing plates
- MDX lessons: `<Figure src="/images/diagrams/x.svg" alt="…" caption="…" />` after the paragraph that introduces the concept. `size="inset"` for a narrower close-up.
- Markdown articles: a standalone image `![alt](/images/diagrams/x.svg "Caption")`; `src/plugins/rehype-figure.mjs` wraps it in the plate. End the title with `{inset}` for the narrow plate.
- Plate styles live in `global.css` under "Figure plates".

### Brand mark and page openings
- `src/components/BrandMark.astro` — the only mark, generated by `scripts/generate-brand-mark.mjs` from hand geometry (never hand-edit the paths; change the geometry and re-run). Props: `size` (px height), `star`. Stroke is set in px per size band; below 28px the head line is omitted.
- Homepage hero below 900px uses the portrait crop `hero-emergence-mobile.webp` above the copy; lengths in that block derive from `--hero-w`, so adjust the crop and the `0.953` aspect together.
- `src/components/PageOpening.astro` — eyebrow, display title, lede, star divider, haze, faint wireframe hand (`art`: foundations | lines | mounts | advanced | palm | none; `compact` for utility pages). Used by every page that is not a lesson or article.

## Propagation checklist
1. Wrap section labels in `.eyebrow`, page titles in `.display`, dividers in `.divider-star`.
2. Add `.reveal` (+ delays) to the first-screen elements and to each card/list item.
3. Put every image in `<Figure>` (MDX) or a titled standalone image (markdown); keep captions in HTML, never in the image. Prefer a generated atlas plate over a new raster.
4. Open non-lesson pages with `<PageOpening>`; use `<BrandMark>` wherever a mark is needed.
5. Give each opening a contained haze (`.atmosphere` or a page-local `::before`) and use the module's wireframe hand as the faint backdrop where a module context exists.
6. Do not introduce new colours. Tint with `rgba(122,72,201,x)` and `rgba(201,169,110,x)` only.
7. Run `npm run build && npm run audit:all && npm run content-audit` after layout work.
