# Visual Assets Roadmap — Palmistry Path

Last updated: 2026-08-25. The visual direction is locked as Editorial Mystic; see `visual-system.md` and `visual-asset-manifest.md`.

## Current state

| Surface | State | Notes |
|---|---|---|
| Global brand/theme | Editorial Mystic implemented | Central light-theme tokens in `src/styles/global.css`; warm ivory/parchment, charcoal, teal, sand, restrained gold. |
| Homepage | Locked production system implemented | Desktop/mobile hero, four learning-path cards, and guide promo use optimized WebP assets with real HTML copy/CTAs. |
| Blog/article heroes | Reusable system implemented | `EditorialHero.astro` plus `src/data/visuals.ts` maps exact pillars and article clusters without frontmatter duplication. |
| Category/module headers | Reusable system implemented | Eight category variants cover the four major lines, Mounts, Signs & Markings, Beginner Palmistry, and Minor Lines; module indexes reuse controlled variants. |
| Lines lessons | Diagram A primary; legacy detail plates secondary | The overview and each major-line lesson now lead with clean Diagram A assets and real legends/captions. Dark legacy plates remain only where they show detailed variations not supplied in Diagram A. |
| Mounts lessons | Diagram A implemented | The previous temporary schematic plan is superseded. Overview and all seven named-mount lessons use the clean palm base with real numbered/HTML/CSS overlays. |
| Foundations / Advanced | Header art available; lesson figures still selective | Module headers use locked category art. Additional instructional figures require a content-specific brief, not generic filler. |
| Quick Start Guide | Site-side preparation complete | Both approved covers retained; option A is live on `/guide/`. Interior assets remain layout references for Guide 2.0 rather than finished PDF pages. |
| Social previews | Editorial Mystic templates integrated | Category/default, lesson, and guide metadata use optimized templates; article pages use mapped article/category hero art. |

## Prepared but not yet surfaced

- Diagram A callout-ready base, left-hand mirror, and fixed single-mount example.
- Three guide-promotion alternatives and Quick Start Guide cover option B.
- Generic article social template; current pages use more specific mapped article artwork.

These are intentionally available under `public/images/editorial-mystic/` for controlled future use. A placement should serve a real route or approved exercise; availability alone is not authorization.

## Deferred source work

- Quick Start Guide 2.0 interior rebuild: replace all placeholder blocks with real document text, rebuild diagrams/labels as vectors or document-native elements, and validate the final PDF.
- Product/workbook concepts: not approved for implementation in this task.
- Practice-reading header defect: replace any palm-tree-like generated icon with the established line-hand/vector treatment during the workbook rebuild.
- Legacy line-detail plates: commission Diagram A equivalents only when preserving the detailed comparison content; do not remove a useful teaching figure merely to eliminate the older style.

## Next approved visual work when prioritized

1. Rebuild Quick Start Guide 2.0 from the retained covers and interior layout references.
2. Convert the highest-value legacy line-variation plates into Diagram A, beginning with comparisons that currently depend on baked generated text.
3. Add purpose-built Foundation/Advanced diagrams only where the lesson requires a visual discrimination.

Do not restart brand exploration. Future work extends the locked system through the workflow in `visual-system.md`.
