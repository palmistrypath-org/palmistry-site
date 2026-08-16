# Current State — Palmistry Path

Last repo inventory: 2026-08-16. This page summarizes observed implementation; source code remains authoritative.

## Product/site
Palmistry Path is a live-oriented static Astro learning site at `palmistrypath.com`, with a dark atmospheric brand, structured learning path, article library, glossary/search, lead magnet flow, and early paid-product/waitlist groundwork.

## Learning content
The `lessons` collection is implemented across four modules, 24 lessons. Module titles and difficulty labels are set in `src/consts.ts`; lesson titles come from frontmatter. Route slugs differ from titles and are stable:

| Slug | Title | Difficulty |
|---|---|---|
| `foundations` | Foundations | Beginner |
| `lines` | The Major Lines | Beginner |
| `mounts` | The Mounts | Beginner |
| `advanced` | Minor Lines & Synthesis | Intermediate |

Batch 3B (2026-08-11) corrected these labels: module 4 previously claimed to be "Advanced Interpretation" at Advanced difficulty while containing four intermediate lessons on minor lines and synthesis. Slugs and lesson URLs were not changed.

The approved target is 25 core lessons. **Two of the three additions are implemented.** Batch 3C (2026-08-11) added *Line Quality and Markings* as the Lines module's first lesson, taking the curriculum from 22 to 23 and the Lines module to 7. Batch 3D (2026-08-13) added *The Thumb and the Fingers* as the fourth Foundations lesson, taking the curriculum to 24 and Foundations to 5. The remaining addition — Combining What You See (3F) — is not implemented.

Foundations now runs: What Palmistry Is (and Isn't) · How to Read a Palm · Hand Shape, Texture, and Flexibility · The Thumb and the Fingers · Your Active and Passive Hand. The active/passive lesson remains the module's closing transition from single-hand to both-hand work; its file is still `04-active-and-passive-hand.mdx` at `order: 5`.

Lesson URLs derive from the content filename; display order derives from the `order` frontmatter. The two are independent, so a lesson can be inserted at any position by setting `order` alone, without renaming files or changing routes. Batches 3C and 3D both used this: each new lesson has an unnumbered filename, neighbouring lessons re-ordered by frontmatter alone, and every existing lesson URL is unchanged. `order: 0` is not usable — `learn/[module]/index.astro` renders `order` directly as "Lesson N".

Observed lesson files cover foundational palmistry concepts, active/passive hand reading, hand shapes, major lines, individual line lessons, the mounts, minor lines, marriage/relationship lines, the Girdle of Venus, and how to give a reading.

Lesson frontmatter no longer carries `prerequisites`; the field was decorative, restated `order`, and had no code consumers. Sequence is expressed by `order` alone.

The published mount model is seven planetary mounts across eight mount regions, with Mars in two regions and the Plain of Mars a separate central region. See `DECISIONS.md` (2026-08-11).

## Blog/reference content
`src/content/blog/` contains a substantial beginner-focused article library covering major/minor lines and variations, hand/finger/nail topics, traditions, myths, books, worksheets, and related search-oriented topics. Intermediate/advanced blog directories currently exist but the observed populated library is concentrated under beginner content.

## Sourcing state
Citations follow the four-tier source policy in `editorial-style-guide.md` §5. As of Batch 2B (2026-08-10) no commercial astrology site, SEO content farm, unsourced blog, or general encyclopaedia is cited anywhere in `src/`. The About page source list matches the corpus the content actually cites. The Chinese and Indian tradition articles carry tradition-appropriate sources and state explicitly where a claim reflects contemporary practice rather than classical doctrine.

Historical claims and site policy are kept separate: content reports the predictive readings the classical texts actually contain — lifespan, illness, fortune, marital outcome — and states separately that Palmistry Path does not treat them as reliable. No page claims the tradition rejected a reading it demonstrably made. The Tian/Di/Ren mapping (heart = Heaven, head = Human, life = Earth) is consistent across all articles, lessons, the glossary, and the print reference, and is presented as contemporary Chinese palm-reading terminology rather than traced classical doctrine.

Quotation integrity is settled for the public-domain sources. Batch 2C (2026-08-11) re-inventoried every quotation-marked passage in a paragraph naming Cheiro or Benham — 245 spans, of which 162 were genuine attributions — and matched each against *Palmistry for All*, three scans of *Cheiro's Language of the Hand*, and two of Benham's *Laws of Scientific Hand Reading*. 55 were already exact and 107 were corrected. **No quotation-marked Cheiro or Benham attribution remains that the verification log classifies as unverified.** Where quotation marks now appear against those two authors, the wording is theirs.

Still open: 20 quotations attributed to Gettings (1965), West (1998), and Fincham (2005) cannot be checked, because those editions are in copyright and not text-searchable. They are unchanged and flagged in `editorial-backlog.md`. Batch 3D added none.

Batch 3D's primary-source pass on the thumb surfaced three defects in `blog/beginner/thumb-meaning-palmistry.md`, none of them fixed in that batch and all open: it attributes the will/logic phalange framework to Cheiro as well as Benham, when the framework is Benham's and Cheiro's second-phalange reading in *Palmistry for All* is tact and diplomacy rather than logic; it states a thumb-length threshold ("to or beyond the first joint") found in neither author and inconsistent with Benham's actual landmark; and it still carries the unresolved Gettings quotation. The lessons attribute the framework to Benham alone.

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
- Accessible custom 404 page (`src/pages/404.astro`, emitted as `dist/404.html`), `noindex, follow`, excluded from sitemap and Pagefind

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
The repo contains homepage path imagery, lesson line imagery, mount SVG diagrams, OG assets, and specialized visual-asset/creative-brief docs. The homepage hero and four module-path images are WebP (converted from PNG in the 2026-08 technical remediation wave), a ~97% byte reduction; the superseded PNGs were removed.

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

No separate unit-test runner or linter is declared in `package.json`; Astro build plus the project audit scripts are the main automated validation layer. `content-audit` discovers and validates both the blog (53 posts) and lessons (24) collections, including lesson module/order/difficulty/duration checks and cross-collection `relatedLesson`/`relatedArticle` route resolution.

The accessibility audit checks generated pages for the global skip link and exactly one `main#main-content` target, and checks lesson `Figure` alt text for prompt-like language.

## Agent/documentation state
As of 2026-08-09, the repo is being migrated from a monolithic `PROJECT.md` startup model to the same progressive-disclosure agent operating system used across the user’s other AI-assisted projects. `AGENTS.md` and the canonical wiki/handoff pages are the new source of workflow context; `PROJECT.md` is retained as a compatibility pointer.

## Known verification boundaries
This inventory is based on repository state and local validation, not live production observation. Future implementation tasks should validate the affected runtime behavior using the commands in `AGENTS.md`.
