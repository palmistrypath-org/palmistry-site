# Current State — Palmistry Path

Last repo inventory: 2026-08-10. This page summarizes observed implementation; source code remains authoritative.

## Product/site
Palmistry Path is a live-oriented static Astro learning site at `palmistrypath.com`, with a dark atmospheric brand, structured learning path, article library, glossary/search, lead magnet flow, and early paid-product/waitlist groundwork.

## Learning content
The `lessons` collection is implemented across four modules:
- Foundations
- Lines
- Mounts
- Advanced

Observed lesson files cover foundational palmistry concepts, active/passive hand reading, hand shapes, major lines, individual line lessons, the mounts, minor lines, marriage/relationship lines, the Girdle of Venus, and how to give a reading.

## Blog/reference content
`src/content/blog/` contains a substantial beginner-focused article library covering major/minor lines and variations, hand/finger/nail topics, traditions, myths, books, worksheets, and related search-oriented topics. Intermediate/advanced blog directories currently exist but the observed populated library is concentrated under beginner content.

## Sourcing state
Citations follow the four-tier source policy in `editorial-style-guide.md` §5. As of Batch 2B (2026-08-10) no commercial astrology site, SEO content farm, unsourced blog, or general encyclopaedia is cited anywhere in `src/`. The About page source list matches the corpus the content actually cites. The Chinese and Indian tradition articles carry tradition-appropriate sources and state explicitly where a claim reflects contemporary practice rather than classical doctrine.

Open: 78 author-attributed quotations, concentrated in the mount articles and mount lessons, could not be verified against the public-domain primary texts and still carry quotation marks. They are inventoried in `source-verification-log.md` and need a dedicated editorial pass.

## Discovery/navigation
Implemented:
- Blog index + dynamic article routes
- Learn index + module + lesson routes
- Glossary
- Pagefind search
- Global skip-to-main navigation and shared keyboard focus styling
- Sitemap
- RSS
- robots.txt
- structured-data behavior in layouts/components
- Bing/indexing support assets/scripts

Utility/private indexability policy is explicit: `/guide/thank-you/`, `/search/`, and placeholder `/contact/` are built but marked `noindex`, excluded from sitemap, and excluded from Pagefind. `/print/complete-reference/` is treated as private paid-product generation content and is not emitted as a public route.

## Email/lead magnet/products
Implemented in the repo:
- Starter Guide landing page
- thank-you/download flow
- Palmistry Starter Guide PDFs under `public/downloads/`
- premium-guide page in waitlist-only state
- email/waitlist form on the premium-guide page

The Complete Reference is not currently offered for purchase. The paid checkout URL is intentionally empty until a working product URL exists, and the Complete Reference PDF-generation source is preserved outside public Astro routes under `src/private/`.

## Advertising/privacy state
Google AdSense is temporarily disabled by leaving `ADSENSE_PUB_ID` empty in `src/consts.ts`. No replacement advertising or analytics system is active.

Specialized email and lead-magnet planning docs remain in `docs/`.

## Visual assets
The repo contains homepage path imagery, lesson line imagery, mount SVG diagrams, OG assets, and specialized visual-asset/creative-brief docs.

## Quality tooling
Available scripts include:
- `npm run build`
- `npm run audit`
- `npm run audit:images`
- `npm run audit:schema`
- `npm run audit:all`
- `npm run audit:accessibility`
- `npm run content-audit`
- IndexNow dry-run/submission scripts

No separate unit-test runner or linter is declared in `package.json`; Astro build plus the project audit scripts are the main automated validation layer.

The accessibility audit checks generated pages for the global skip link and exactly one `main#main-content` target, and checks lesson `Figure` alt text for prompt-like language.

## Agent/documentation state
As of 2026-08-09, the repo is being migrated from a monolithic `PROJECT.md` startup model to the same progressive-disclosure agent operating system used across the user’s other AI-assisted projects. `AGENTS.md` and the canonical wiki/handoff pages are the new source of workflow context; `PROJECT.md` is retained as a compatibility pointer.

## Known verification boundaries
This inventory is based on repository state and local validation, not live production observation. Future implementation tasks should validate the affected runtime behavior using the commands in `AGENTS.md`.
