# Digital Product Suite — Palmistry Path

*Canonical specification for the three-product download family. Established 2026-09-06 on branch `feat/product-suite`. Sources live under `products/`; the build is `npm run build:products`.*

## The ladder

| Tier | Product | Role in the funnel | Pages | Format |
|---|---|---|---|---|
| I · Free | **Quick Start Guide** — *Read Your First Palm Tonight* | Lead magnet. Orientation, the first three lines, a ten-minute reading. Intentionally light. | 14 | PDF, US Letter |
| II · Paid | **Palm Reading Practice Journal** — *Look. Describe. Hold It Lightly.* | First purchase. Ten guided observation sheets, full and quick reading templates, reflection, tracker, index. Hands-on. | 42 | PDF, two editions: screen (dark) and print (ivory, ink-conscious) |
| III · Premium | **Palmistry Foundations Handbook** — *The Complete Beginner's Course in Reading the Hand* | Premium. Twenty-five chapters mirroring the 25 site lessons, with every atlas plate, Try it exercises, Key ideas, Across traditions panels, glossary, sources. | 143 | PDF, US Letter |

The three are numbered I / II / III on their covers, back covers, and in each other's "where next" pages, so any one product sells the other two.

Pricing is not set in this document. The email roadmap (`docs/email-and-lead-magnet-roadmap.md`) assumed a $7 worksheet-pack tier; the Journal now occupies that slot and the Handbook sits above it.

## What is fresh and what is reused

- **Nothing from the legacy Quick Start Guide or `public/images/guide/` is used.** All three products were designed from the current visual system (`docs/visual-system.md` on `feat/visual-golden-slice`).
- **Reused deliberately:** the palm atlas vocabulary (`products/shared/palm.mjs`, a fork of the site's `scripts/lib/palm.mjs`) and the haze texture. The atlas's line, mount and finger geometry is the same teaching content as the site's plates.
- **Engraved instructional hand (2026-09-06 finishing pass):** the schematic wireframe hand was replaced by a traced, anatomically believable hand. One reference hand was generated with Higgsfield (`gpt_image_2`, flat orthographic left hand, palm up, no palm lines, gold engraving on black); its silhouette was traced into the atlas coordinate space as the new `HAND` path and the same image, tinted, is clipped inside the outline as shading (`products/shared/hand-texture.jpg`, embedded once per plate). Lines, mounts, minor lines and finger landmarks were refit to the new anatomy by hand; every variation path in the generator (`scripts/generate-product-diagrams.mjs`) was authored against the old hand and is warped onto the new one through a thin-plate spline (`remap()` / `remapPoint()` in `palm.mjs`), so the teaching geometry stays consistent across all 46 diagram plates and 8 mount plates. The hand-shapes plate warps the master hand by palm proportion and finger length instead of drawing rectangles. Regenerate with `node scripts/generate-product-diagrams.mjs`; the site's own plates on other branches are unaffected.
- **New:** three cover emblems and a family mark generated from the atlas by `scripts/generate-product-emblems.mjs`; the product design system `products/shared/suite.css`; all product copy.
- **Generated editorial art (2026-09-06 refinement):** 43 images in `products/shared/art/gen/`, made with Higgsfield (`gpt_image_2`) against the site hero as a style reference and documented in `products/shared/art/gen/PROMPTS.md`. They carry the atmosphere; the atlas plates are kept only where they teach. This trades reproducibility-from-repo for visual quality, deliberately.

## Visual system for print

`products/shared/suite.css` is the single stylesheet. It mirrors the site tokens (black `#07050d`, gold `#c9a96e` / `#e0c07e` / `#f0cf86`, violet `#7a48c9` as haze only), Cinzel for display and Lora for text (bundled in `products/shared/fonts/`).

Shared vocabulary, all three products:
- **Cover**: full-bleed generated art per tier, dark veil top and bottom for type, double-rule frame with corner ticks, `PALMISTRY PATH` brand line, tier line, display title, subtitle, the tier emblem reduced to a small seal above the tagline. Tier differentiation is in the art and the frame: I a single hand and single rule; II the field journal with instruments and a dashed inner rule; III the hand inside an armillary sphere, heavier double rule, larger corner ornaments.
- **Running heads and folios** via `@page` margin boxes: product name top-left, "Palmistry Path" top-right, `✦ n ✦` bottom-centre.
- **Scene pages** (`.scene-page`, `@page scene`): single-page sections whose banner art bleeds off the top edge with the text padded back into the column. Used for the Guide's welcome, ten-minute reading, sample reading and where-next pages, the Journal's welcome, and the Handbook's appendix C. Must fit on one page.
- **Eyebrow / display h1 / italic lede / star divider** opening on every content page, matching the site's `PageOpening`.
- **Plates**: every atlas diagram sits in a hairline frame with corner registration ticks, violet bloom, italic caption with a star.
- **Panels**: gold-lit (Try it / On your hand / How to use) and violet-lit (Across traditions / The one rule / Hold it lightly).
- **Part openers** (Journal, Handbook): full-bleed generated scene, veil gradient, Roman numeral and title at the top, chapter list at the foot.
- **Back cover**: hand-shaped constellation art in the upper half, then the three-step ladder shown as miniature covers with the current product highlighted, and the disclaimer.

Journal-only: writing fields (ruled lines at 0.29in), choice boxes, observation tables, sketch boxes with the faint atlas hand, reference strips of variation plates, compare grid, tracker, index. The print edition swaps the paper variables to ivory and keeps the plates dark.

Handbook-only: title page with an engraved frontispiece plate; every chapter opens with a framed 21:9 art band (`.chapter-art`) above the eyebrow, title and lede; `Key ideas` boxes, `worked` reading blocks, reference tables, contents with page numbers, glossary, sources appendix.

## Content rules that were applied

- Editorial voice per `docs/editorial-style-guide.md`: hedged phrasing throughout, no predictions, no medical/legal/financial/relationship claims, traditions named where they differ.
- Handbook chapters were rewritten from the 25 source-verified lessons in `src/content/lessons/`; attributions (Cheiro 1916, Benham 1900, Gettings 1965, West 1998, Fincham 2005) are kept only where the lesson placed them. No prevalence figures were introduced.
- The free guide teaches heart, head, and life only, and explicitly defers the fate line, mounts, and minor lines to the paid tiers.
- The Journal contains no meanings; every interpretive field is a prompt, and every sheet puts description before interpretation.

## File map

```
products/
  shared/        suite.css · palm.mjs · hand-texture.jpg · fonts/ · diagrams/ (46) · mounts/ (8) · art/ (emblems, family mark, haze) · art/gen/ (43 generated scenes + PROMPTS.md)
  quickstart/    src.html
  journal/       src.html                     (?edition=print switches to the print edition)
  handbook/      src.html · chapters/part1-4  (fragments pulled in by <!-- @include -->)
  dist/          built PDFs + previews/       (gitignored; regenerate with npm run build:products)
scripts/
  generate-product-emblems.mjs   cover emblems + family mark from the atlas
  generate-product-diagrams.mjs  the 46 diagram plates + 8 mount plates on the engraved hand
  build-products.mjs             assemble → Chrome print-to-pdf → paint page ground → anchor scan → contents numbers → previews
  lib/pdf-anchors.py · pdf-paint.py · pdf-previews.py   (PyMuPDF helpers)
```

Build requirements: Google Chrome at the default Windows path (or `CHROME=` env), Python 3 with `pymupdf` and `pillow`.

Build notes learned the hard way:
- Chrome's print-to-pdf does not paint `@page` margins, so `pdf-paint.py` lays the ground colour beneath every page afterwards.
- Anything positioned outside the content box (even a pseudo-element haze) makes Chrome shrink the whole document to fit. Keep absolutely positioned decoration inside the column.
- Contents page numbers come from hidden `§anchor§` markers scanned out of the first render; the build re-renders once with the numbers filled in.
- Scene pages have no top margin, so anything after the banner must fit the page; when one spills, shrink the banner (`figure.scene { height }`) rather than the text.
- Pagination QA: a page-fill scan (text and image extents per page via PyMuPDF) is the fast way to find spill pages in the Handbook; pages under half full are acceptable only where the next page opens a chapter or part.

## Open items

- The Handbook's part-opener chapter lists and the appendix ladder cards reference page counts in prose ("fourteen pages"); keep them in step if page counts change.

- Pricing and store listing copy (cover PNGs are emitted to `products/dist/previews/*-cover.png` at 150 dpi for listings).
- Optional: an A4 build (change `@page size`); the Letter layouts have generous margins and print "fit to page" on A4 cleanly.
- Optional: EPUB/reflowable edition of the Handbook. Out of scope for this pass.
- Site wiring: `/guide` should present the new Quick Start Guide and the two paid tiers once merged; that page currently shows the legacy cover.
