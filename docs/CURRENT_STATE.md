# Current State — Palmistry Path

Last repo inventory: 2026-08-10. This page summarizes observed implementation; source code remains authoritative.

## Product/site
Palmistry Path is a live-oriented static Astro learning site at `palmistrypath.com`, with a dark atmospheric brand, structured learning path, article library, glossary/search, lead magnet flow, and early paid-product/waitlist groundwork.

## Learning content
The `lessons` collection is implemented across four modules, **25 lessons — the approved core target, complete as of Batch 3F (2026-08-13)**. Module titles and difficulty labels are set in `src/consts.ts`; lesson titles come from frontmatter. Route slugs differ from titles and are stable:

| Slug | Title | Difficulty |
|---|---|---|
| `foundations` | Foundations | Beginner |
| `lines` | The Major Lines | Beginner |
| `mounts` | The Mounts | Beginner |
| `advanced` | Minor Lines & Synthesis | Intermediate |

Batch 3B (2026-08-11) corrected these labels: module 4 previously claimed to be "Advanced Interpretation" at Advanced difficulty while containing four intermediate lessons on minor lines and synthesis. Slugs and lesson URLs were not changed.

**The 25-lesson core target is complete.** All three approved additions shipped: Batch 3C (2026-08-11) added *Line Quality and Markings* as the Lines module's first lesson; Batch 3D (2026-08-13) added *The Thumb and the Fingers* as the fourth Foundations lesson; Batch 3F (2026-08-13) added *Combining What You See* as the fifth lesson of Minor Lines & Synthesis, closing the curriculum audit's last open P0. Remaining curriculum items in `ROADMAP.md` are P2-or-later polish and are **not** part of the 25-lesson core.

Foundations runs: What Palmistry Is (and Isn't) · How to Read a Palm · Hand Shape, Texture, and Flexibility · The Thumb and the Fingers · Your Active and Passive Hand. The active/passive lesson remains the module's closing transition from single-hand to both-hand work; its file is still `04-active-and-passive-hand.mdx` at `order: 5`.

Lines runs: Line Quality and Markings · The Major Lines: An Overview · Heart · Head · Life · Fate. Minor Lines & Synthesis runs: The Minor Lines: Sun and Mercury · Marriage and Relationship Lines · Girdle of Venus · The Simian Line · Combining What You See · How to Give a Reading. Mounts is unchanged at 8.

Lesson URLs derive from the content filename; display order derives from the `order` frontmatter. The two are independent, so a lesson can be inserted at any position by setting `order` alone, without renaming files or changing routes. Batches 3C, 3D and 3F all used this: each new lesson has an unnumbered filename, neighbouring lessons re-ordered by frontmatter alone. `order: 0` is not usable — `learn/[module]/index.astro` renders `order` directly as "Lesson N".

Because `order` is independent of the filename, **nothing in the build enforces that `order` values are unique or sequential within a module.** `getStaticPaths` sorts by `order` and tolerates duplicates silently, so a collision produces two lessons numbered the same with no build error and no audit failure. Batch 3F hit exactly this. Check module ordering explicitly when inserting or moving a lesson.

Batch 3F also established the curriculum's **practice layer**. `src/components/Practice.astro` marks the hands-on exercise a lesson ends with, and all 25 lessons carry one. `src/components/Checkpoint.astro` with `src/components/CheckpointItem.astro` provides a module-end self-check whose answers open with native `<details>`/`<summary>`; there are exactly four, on the final lesson of each module (Active and Passive Hand, Fate Line, Mars, How to Give a Reading). All three components are purely presentational: **no JavaScript, no state, no persistence, no score, no pass/fail, no progress tracking, and no accounts or backend of any kind.** Nothing in the curriculum credentials a learner.

Observed lesson files cover foundational palmistry concepts, active/passive hand reading, hand shape/texture/flexibility, the thumb and fingers, line-quality vocabulary, the major lines, the simian line, the mounts, the Sun and Mercury lines, marriage/relationship lines, the Girdle of Venus, whole-hand synthesis, and how to give a reading.

### The one deliberate lesson-URL change
The Simian lesson moved from the Lines module to Minor Lines & Synthesis in Batch 3E, which is the single planned existing-lesson URL change in the target curriculum. Canonical route is now `/learn/advanced/simian-line`. The former `/learn/lines/06-simian-line` still resolves, via a hand-written static page at `src/pages/learn/lines/06-simian-line.astro` — static routes take precedence over the dynamic `[module]/[lesson]` route. That stub carries a meta refresh, the canonical pointing at the new URL, `noindex, follow`, and a Pagefind-ignored `<main id="main-content">`, so it is not duplicate indexable content. Its path is listed in `NOINDEX_PATHS` in `src/indexability.mjs`, which keeps it out of the sitemap and makes `npm run audit:indexability` assert all of that on every build. `astro.config.mjs` was deliberately not used for the redirect.

Relatedly, `scripts/audit-schema.mjs` now exempts `noindex` pages from its required-JSON-LD-type checks: a page withheld from the index has nothing to declare, and emitting `LearningResource` on the redirect stub would advertise one lesson at two URLs. The accessibility guardrail in `scripts/audit-accessibility.mjs` was deliberately left unconditional, and the stub was written to satisfy it instead.

Lesson frontmatter no longer carries `prerequisites`; the field was decorative, restated `order`, and had no code consumers. Sequence is expressed by `order` alone.

The published mount model is seven planetary mounts across eight mount regions, with Mars in two regions and the Plain of Mars a separate central region. See `DECISIONS.md` (2026-08-11).

## Blog/reference content
`src/content/blog/` contains a substantial beginner-focused article library covering major/minor lines and variations, hand/finger/nail topics, traditions, myths, books, worksheets, and related search-oriented topics. Intermediate/advanced blog directories currently exist but the observed populated library is concentrated under beginner content.

## Technical baseline from the merged technical wave
The Technical Remediation Wave merged to `main` on 2026-08-13. **`docs/audits/TECHNICAL_REMEDIATION_WAVE_2026-08.md` is the detailed source of truth** for it; only the state that other work needs to know is recorded here.

- **A real 404 recovery page** exists at `src/pages/404.astro`, emitted as `dist/404.html`, `noindex, follow`, and excluded from the sitemap and Pagefind through `/404/` in `NOINDEX_PATHS`.
- **The content audit is no longer blog-only.** `scripts/audit-content.mjs` audits lessons as well as blog posts and validates content relationship routes, rejecting non-local relationships — so a broken `relatedArticle` or `relatedLesson` now fails the audit rather than passing quietly. It currently reports 53 blog posts and 25 lessons with non-blocking legacy warnings.
- **Homepage imagery is WebP**, down from roughly 10.5 MB to roughly 266 KB across five images (~97.5%). `scripts/audit-images.mjs` carries a guardrail asserting referenced homepage rasters stay under 500 KiB, so replacing one with a heavy raster will fail the audit.
- Live host 404 behaviour is unverified until deployment: Astro emits the conventional root `404.html`, and the host must serve it for unmatched routes with an HTTP 404.

`NOINDEX_PATHS` in `src/indexability.mjs` now carries both waves' entries — `/404/` from the technical wave and `/learn/lines/06-simian-line/` from the curriculum wave — alongside `/contact/`, `/guide/thank-you/` and `/search/`, with `/print/complete-reference/` still private. Both behaviours are asserted by `npm run audit:indexability`.

## Sourcing state
Citations follow the four-tier source policy in `editorial-style-guide.md` §5. As of Batch 2B (2026-08-10) no commercial astrology site, SEO content farm, unsourced blog, or general encyclopaedia is cited anywhere in `src/`. The About page source list matches the corpus the content actually cites. The Chinese and Indian tradition articles carry tradition-appropriate sources and state explicitly where a claim reflects contemporary practice rather than classical doctrine.

Historical claims and site policy are kept separate: content reports the predictive readings the classical texts actually contain — lifespan, illness, fortune, marital outcome — and states separately that Palmistry Path does not treat them as reliable. No page claims the tradition rejected a reading it demonstrably made. The Tian/Di/Ren mapping (heart = Heaven, head = Human, life = Earth) is consistent across all articles, lessons, the glossary, and the print reference, and is presented as contemporary Chinese palm-reading terminology rather than traced classical doctrine.

Quotation integrity is settled for the public-domain sources. Batch 2C (2026-08-11) re-inventoried every quotation-marked passage in a paragraph naming Cheiro or Benham — 245 spans, of which 162 were genuine attributions — and matched each against *Palmistry for All*, three scans of *Cheiro's Language of the Hand*, and two of Benham's *Laws of Scientific Hand Reading*. 55 were already exact and 107 were corrected. **No quotation-marked Cheiro or Benham attribution remains that the verification log classifies as unverified.** Where quotation marks now appear against those two authors, the wording is theirs.

Still open: 20 quotations attributed to Gettings (1965), West (1998), and Fincham (2005) cannot be checked, because those editions are in copyright and not text-searchable. They are unchanged and flagged in `editorial-backlog.md`. Batches 3D, 3E and 3F added none.

Batches 3E and 3F introduced **no new quotations at all.** The Sun and Mercury material in `advanced/01` was built from the already Batch-2C-corrected `blog/beginner/sun-line.md` and `blog/beginner/mercury-line.md` rather than from fresh research, so every quotation-marked passage in it was already verified against the public-domain scans. Where those two articles paraphrase Gettings or Fincham, the lesson paraphrases them too and does not promote them to quotations. `combining-what-you-see.mdx` is method rather than source claims and carries no citations; the four checkpoints assert no new claims and confine themselves to vocabulary and method the lessons already teach.

Two source points from `advanced/01` are worth not eroding. On the Sun line, Cheiro's reading of a complete absence is severe — recognition "will be difficult or even impossible to gain" — and is stated as his; Benham does not read the line's absence at all and must not be credited with reassurance he never gave. On the Mercury line, Cheiro reads absence itself as favourable while Benham engages only a line that is present, so the two are **not** in agreement; the historical health claims are reported unsanitised, including Cheiro dating death from where the life and health lines meet, and Palmistry Path's refusal to use a crease as medical information is stated as a separate position.

**Declining a historical claim does not license inventing a replacement.** This is the rule the review pass on Wave 3E/3F had to enforce twice, and it is the easiest one to lose. Where the site rejects a strong historical reading, it says so and stops — it does not install a gentler universal meaning in its place. Concretely: an absent sun line is recorded as absent, with no statement about what it signifies instead; an absent fate line likewise; and the Mercury line's rejected medical reading was not swapped for a symbolic one. A source-specific interpretation of an absence may be reported when it is attributed to the source that makes it, but not offered as a general truth. The same pass also removed a claim that the modern practitioner literature has abandoned the health readings — the site does not need, and has not established, that consensus in order to state its own boundary.

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
