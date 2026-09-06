# Digital Product Suite — Palmistry Path

*Canonical specification for the three-product download family. Established 2026-09-06 on branch `feat/product-suite`. Sources live under `products/`; the build is `npm run build:products`.*

## The ladder

| Tier | Product | Role in the funnel | Pages | Format |
|---|---|---|---|---|
| I · Free | **Quick Start Guide** — *Read Your First Palm Tonight* | Lead magnet. Orientation, the first three lines, a ten-minute reading. Intentionally light. | 14 | PDF, US Letter |
| II · Paid | **Palm Reading Practice Journal** — *Look. Describe. Hold It Lightly.* | First purchase. Ten guided observation sheets, full and quick reading templates, reflection, tracker, index. Hands-on. | 42 | PDF, two editions: screen (dark) and print (ivory, ink-conscious) |
| III · Premium | **Palmistry Foundations Handbook** — *The Complete Beginner's Course in Reading the Hand* | Premium. Twenty-five chapters mirroring the 25 site lessons, with every atlas plate, Try it exercises, Key ideas, Across traditions panels, glossary, sources. | ~115 | PDF, US Letter |

The three are numbered I / II / III on their covers, back covers, and in each other's "where next" pages, so any one product sells the other two.

Pricing is not set in this document. The email roadmap (`docs/email-and-lead-magnet-roadmap.md`) assumed a $7 worksheet-pack tier; the Journal now occupies that slot and the Handbook sits above it.

## What is fresh and what is reused

- **Nothing from the legacy Quick Start Guide or `public/images/guide/` is used.** All three products were designed from the current visual system (`docs/visual-system.md` on `feat/visual-golden-slice`).
- **Reused deliberately:** the palm atlas (`scripts/lib/palm.mjs`, copied to `products/shared/palm.mjs`), its 46 generated diagram plates and 8 mount plates, the wireframe module hands (`path-*.webp`) and the haze texture. These are the site's own generated brand assets, so the books and the site share one hand.
- **New:** three cover emblems and a family mark generated from the atlas by `scripts/generate-product-emblems.mjs`; the product design system `products/shared/suite.css`; all product copy.

## Visual system for print

`products/shared/suite.css` is the single stylesheet. It mirrors the site tokens (black `#07050d`, gold `#c9a96e` / `#e0c07e` / `#f0cf86`, violet `#7a48c9` as haze only), Cinzel for display and Lora for text (bundled in `products/shared/fonts/`).

Shared vocabulary, all three products:
- **Cover**: full-bleed nebula, double-rule frame with corner ticks, `PALMISTRY PATH` brand line, tier line, display title, subtitle, emblem, tagline, site. Tier differentiation is structural, not chromatic: Free uses a single frame rule and the single-ring emblem; Journal a dashed inner rule and the ruled-dial emblem; Handbook a heavier double rule, richest nebula, and the double-ring-with-stars emblem.
- **Running heads and folios** via `@page` margin boxes: product name top-left, "Palmistry Path" top-right, `✦ n ✦` bottom-centre.
- **Eyebrow / display h1 / italic lede / star divider** opening on every content page, matching the site's `PageOpening`.
- **Plates**: every diagram sits in a hairline frame with corner registration ticks, violet bloom, italic caption with a star.
- **Panels**: gold-lit (Try it / On your hand / How to use) and violet-lit (Across traditions / The one rule / Hold it lightly).
- **Part openers** (Journal, Handbook): full-bleed nebula, Roman numeral, the module's wireframe hand, chapter list.
- **Back cover**: family mark, tagline, the three-step ladder with the current product highlighted, disclaimer.

Journal-only: writing fields (ruled lines at 0.29in), choice boxes, observation tables, sketch boxes with the faint atlas hand, reference strips of variation plates, compare grid, tracker, index. The print edition swaps the paper variables to ivory and keeps the plates dark.

Handbook-only: chapter openers with haze, `Key ideas` boxes, `worked` reading blocks, reference tables, contents with page numbers, glossary, sources appendix.

## Content rules that were applied

- Editorial voice per `docs/editorial-style-guide.md`: hedged phrasing throughout, no predictions, no medical/legal/financial/relationship claims, traditions named where they differ.
- Handbook chapters were rewritten from the 25 source-verified lessons in `src/content/lessons/`; attributions (Cheiro 1916, Benham 1900, Gettings 1965, West 1998, Fincham 2005) are kept only where the lesson placed them. No prevalence figures were introduced.
- The free guide teaches heart, head, and life only, and explicitly defers the fate line, mounts, and minor lines to the paid tiers.
- The Journal contains no meanings; every interpretive field is a prompt, and every sheet puts description before interpretation.

## File map

```
products/
  shared/        suite.css · palm.mjs · fonts/ · diagrams/ (46) · mounts/ (8) · art/ (emblems, family mark, hands, haze)
  quickstart/    src.html
  journal/       src.html                     (?edition=print switches to the print edition)
  handbook/      src.html · chapters/part1-4  (fragments pulled in by <!-- @include -->)
  dist/          built PDFs + previews/       (gitignored; regenerate with npm run build:products)
scripts/
  generate-product-emblems.mjs   cover emblems + family mark from the atlas
  build-products.mjs             assemble → Chrome print-to-pdf → paint page ground → anchor scan → contents numbers → previews
  lib/pdf-anchors.py · pdf-paint.py · pdf-previews.py   (PyMuPDF helpers)
```

Build requirements: Google Chrome at the default Windows path (or `CHROME=` env), Python 3 with `pymupdf` and `pillow`.

Build notes learned the hard way:
- Chrome's print-to-pdf does not paint `@page` margins, so `pdf-paint.py` lays the ground colour beneath every page afterwards.
- Anything positioned outside the content box (even a pseudo-element haze) makes Chrome shrink the whole document to fit. Keep absolutely positioned decoration inside the column.
- Contents page numbers come from hidden `§anchor§` markers scanned out of the first render; the build re-renders once with the numbers filled in.

## Open items

- Pricing and store listing copy (cover PNGs are emitted to `products/dist/previews/*-cover.png` at 150 dpi for listings).
- Optional: an A4 build (change `@page size`); the Letter layouts have generous margins and print "fit to page" on A4 cleanly.
- Optional: EPUB/reflowable edition of the Handbook. Out of scope for this pass.
- Site wiring: `/guide` should present the new Quick Start Guide and the two paid tiers once merged; that page currently shows the legacy cover.
