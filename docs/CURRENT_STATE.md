# Current State — Palmistry Path

Last repo inventory: 2026-08-09. This page summarizes observed implementation; source code remains authoritative.

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

## Discovery/navigation
Implemented:
- Blog index + dynamic article routes
- Learn index + module + lesson routes
- Glossary
- Pagefind search
- Sitemap
- RSS
- robots.txt
- structured-data behavior in layouts/components
- Bing/indexing support assets/scripts

## Email/lead magnet/products
Implemented in the repo:
- Starter Guide landing page
- thank-you/download flow
- Palmistry Starter Guide PDFs under `public/downloads/`
- premium-guide page
- email/waitlist form on the premium-guide page

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
- `npm run content-audit`
- IndexNow dry-run/submission scripts

No separate unit-test runner or linter is declared in `package.json`; Astro build plus the project audit scripts are the main automated validation layer.

## Agent/documentation state
As of 2026-08-09, the repo is being migrated from a monolithic `PROJECT.md` startup model to the same progressive-disclosure agent operating system used across the user’s other AI-assisted projects. `AGENTS.md` and the canonical wiki/handoff pages are the new source of workflow context; `PROJECT.md` is retained as a compatibility pointer.

## Known verification boundaries
This inventory was derived from repository contents/configuration rather than a local production build in this session. Future implementation tasks should validate the affected runtime behavior using the commands in `AGENTS.md`.