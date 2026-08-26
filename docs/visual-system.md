# Editorial Mystic Visual System

Status: locked 2026-08-25. This document controls future visual integration unless a later recorded decision explicitly replaces it.

## Direction

Editorial Mystic balances roughly 70% clean editorial structure, 20% warm mystical atmosphere, and 10% premium decorative detail. Pages use warm ivory/parchment, muted teal, warm sand, charcoal, restrained gold, readable serif typography, refined illustrated hands, and clean educational overlays. Celestial accents stay subtle and decorative.

The site is educational. Visual atmosphere must never imply prediction, turn a traditional interpretation into a factual claim, or reduce readability.

## Tokens

Canonical CSS variables live in `src/styles/global.css`.

| Role | Token | Value / rule |
|---|---|---|
| Page background | `--color-parchment`, `--color-bg` | `#f8f3e9` |
| Warm brand ivory | `--color-ivory`, header background | `#f2e8d5` |
| Card/surface | `--color-surface` | `#fffaf1` |
| Muted surface | `--color-surface-muted` | `#eee2d0` |
| Primary text | `--color-charcoal`, `--color-text` | `#2b2b2b` |
| Secondary text | `--color-text-secondary` | `#514c45` |
| Muted text | `--color-text-muted` | `#6a6259` |
| Brand teal | `--color-teal` | `#5f8a91` (decorative/non-small-text use) |
| Accessible teal/link/CTA | `--color-teal-dark`, `--accent` | `#315e65` |
| Teal hover | `--color-teal-deep`, `--accent-light` | `#244c52` |
| Warm sand | `--color-sand` | `#c7b299` |
| Decorative gold | `--color-gold` | `#d4af37` |
| Gold text | `--color-gold-ink` | `#8a6512` |
| Border/divider | `--color-border` | `#d8cbb7` |
| Strong border | `--color-border-strong` | `#bea982` |
| Focus ring | `--focus-ring` | `#176d7b`, 3px plus light halo |

Use semantic variables. Do not scatter palette hex values into components. The source reference sheet contains generated hex labels; the implementation above is the verified, contrast-aware token set.

## Typography and layout

- Cinzel remains the display/navigation face and Lora remains the reading face.
- Headings are charcoal, not gold. Teal and gold signal hierarchy in eyebrows, rules, numbering, and small accents.
- Body text remains on plain light surfaces; never place long prose directly over artwork.
- Cards use borders and low warm shadows rather than dark translucent panels.
- Decorative art uses `alt=""` when it adds atmosphere only. Informative diagrams receive meaningful alt text and visible captions/legends.

## Homepage rules

- The primary hero is `homepage/hero-final-desktop-16x9-v1.png` with the 9:16 mobile source supplied through `<picture>`.
- Headline, supporting copy, and both CTAs are real HTML. The image is not an instructional diagram even though it contains small line labels.
- The four module cards map to Beginner, Major Lines, Mounts, and Deeper Lessons artwork in `src/pages/index.astro`.
- The Quick Start Guide promotion uses its own 1:1 artwork below the fold and loads lazily.
- Do not substitute Hero C for the primary hero without a new decision.

## Article and category heroes

`src/components/EditorialHero.astro` is the only reusable hero layout. `src/data/visuals.ts` owns mappings.

- Exact pillar articles use the eight category headers: Life Line, Head Line, Heart Line, Fate Line, Mounts, Signs & Markings, Beginner Palmistry, and Minor Lines.
- Other articles map by the existing `cluster` field to one of five templates: beginner/how-to, comparison/FAQ, major line, mount, or sign/marking.
- Titles, descriptions, dates, and category labels are HTML. Do not bake new article titles into images.
- Desktop places copy in the artwork's intentional negative space. Mobile stacks the image above copy so text never crosses the illustration.
- A new category should extend the central mapping, not add a one-off hero to content files.

## Diagram A rules

`src/components/PalmDiagram.astro` is the primary educational diagram system.

- Use the clean Diagram A images under `public/images/editorial-mystic/diagrams/`.
- Labels, number markers, mount highlights, legends, and captions are real HTML/CSS overlays. Meaning is never communicated through color alone.
- The seven named mounts occupy nine teaching regions in the site model: Jupiter, Saturn, Apollo, Mercury, Venus, Luna, Lower Mars, Upper Mars, and the Plain of Mars.
- Single-mount lessons use the unlabeled base plus dynamic overlays. The fixed generated single-mount example is not reused across different mounts.
- The all-lines diagram uses a visible text legend. Individual line diagrams use a visible line label and caption.
- Diagram B or legacy dark plates may appear only as secondary detailed comparisons when no Diagram A equivalent exists. Their generated text must be independently checked; never treat baked labels as source evidence.

## Guide and product rules

- Both strong Quick Start Guide covers are retained. Option A is the current site preview; option B remains an approved alternate for the Guide 2.0 rebuild.
- Interior guide/product images are layout references, not finished pages. Placeholder bars, generated labels, and small icons must be replaced with real document text and verified vector/icon components.
- The known practice-reading palm-tree-like icon must not ship. Use the established line-hand/vector treatment during the workbook rebuild.
- This integration does not rebuild the PDF. See `docs/visual-asset-manifest.md` for the prepared/deferred boundary.

## Source and production workflow

1. Put new Claude/Higgsfield high-resolution outputs in a local `visual-production/<family>/` source pack. This directory is intentionally Git-ignored because it is large and may contain exploration/reference work.
2. Inventory every source in `docs/visual-asset-manifest.md`, including pixel dimensions, baked text, defects, and intended use.
3. Verify visual meaning and all generated words/icons. Never trust generated text, hex codes, labels, or symbols automatically.
4. Create optimized WebP/AVIF derivatives under `public/images/editorial-mystic/<family>/`; keep source dimensions/aspect metadata in the manifest.
5. Integrate through a reusable component and central data mapping. Avoid unique page-level markup when a content type or cluster can own the variant.
6. Supply width/height, responsive behavior, eager loading only for above-the-fold images, lazy loading below the fold, meaningful alt text for informative images, and empty alt text for decoration.
7. Run build, content/image/link/schema/accessibility audits, then inspect representative desktop and mobile routes for crop, overlap, contrast, stretching, and broken assets.

Do not restart visual exploration or generate replacement art while the locked source family can satisfy the implementation.
