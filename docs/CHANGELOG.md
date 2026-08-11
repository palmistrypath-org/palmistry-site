# Changelog - Palmistry Path

Meaningful project-state changes only; Git history remains the detailed implementation record.

## 2026-08-11 - Remediation Batch 3B truthful labelling, mount model, simian correction
- Corrected the live source-integrity defect in `lines/06-simian-line.mdx`, which still asserted *ekaagra* as Hasta Samudrika Shastra doctrine after Batch 2B corrected exactly that framing in the twin article. The lesson now presents *ekāgratā* as genuine yogic/philosophical terminology whose application to the single transverse crease is a modern cross-tradition reading. The same stale attribution in `heart-line.md` was corrected to match, and the file's internal 1–3% / 1–4% prevalence contradiction was resolved to 1–3%.
- Published one mount model across the site: seven planetary mounts occupy eight mount regions, because Mars appears in two distinct areas of the palm. The Plain of Mars is a separate central region, not a raised mount and not a ninth mount. The mounts overview lesson explains the count once; `foundations/02` now names all eight regions explicitly.
- Fixed a factual error in the glossary, which equated the Outer Mount of Mars with the Plain of Mars.
- Made module labelling truthful. Module 4 was titled "Advanced Interpretation" and labelled Advanced while containing four intermediate lessons on minor lines and synthesis; it is now "Minor Lines & Synthesis", Intermediate. The `advanced` slug and every lesson URL are unchanged. Module 2 became "The Major Lines" and no longer promises Sun, Mercury, and Girdle content that lives in module 4. Module difficulty labels now match the lessons they contain.
- Stated briefly in `foundations/02` that the course teaches line reading before full mount assessment even though a complete reading assesses the mounts first — the two orders differ deliberately.
- Removed the decorative `prerequisites` frontmatter field from all 22 lessons and from the content schema. It restated the previous lesson, had zero code consumers, and was never rendered.
- No lesson was added, moved, or renamed; no route changed; no pricing, waitlist, checkout, or product promise was touched.

## 2026-08-11 - Remediation Batch 2C quotation integrity
- Closed the 78-item quotation backlog from Batch 2B. Re-inventorying from source found 245 quotation-marked passages inside paragraphs naming Cheiro or Benham, of which 162 were genuine attributions: 55 already exact, 107 corrected, none left unverified.
- Corrected five attributions that carried a claim the source does not make: Benham does not read an absent Mercury/health line as a sign of a sound constitution (that is Cheiro's reading); Benham offers no reassurance about a missing Sun Line, and Cheiro says close to the opposite; Benham reads a fate line from Luna as help from one of the opposite sex, not from "the public"; Benham argues for "affection" over "union" rather than against it; and "writer's fork" is in neither author.
- Corrected the wrong work on Mars: Cheiro's mount-by-mount treatment is in *Cheiro's Language of the Hand*, not *Palmistry for All*.
- Corrected the Batch 2B replacement quotation for the active/passive hand. The wording is in *Language of the Hand* but belongs to a reader's letter signed "Speranus", not to Cheiro. Cheiro states the principle himself in *Palmistry for All*, and that is now quoted.
- Re-attributed the sister line: "great vitality and power of resistance to illness" is Cheiro's, not Benham's, though Benham does treat the line and his own wording now carries the point.
- Recorded that fourteen passages matched the corpus and were still wrong, most of them short phrases attached to the wrong feature — string match is not verification.

## 2026-08-10 - Batch 2B final consistency sweep
- Removed leftover prose that still contradicted the corrected life-line framing further down the same pages: the empirical section's appeal to the classical writers, the "does not count out years" claim, the Short and Broken variation framings, and the short/broken FAQs.
- Rewrote the life-line lesson's break section as classical (Benham illness/accident, Cheiro danger of death) versus modern practice versus Palmistry Path policy, and updated the figure captions to match.
- Corrected the same class of claim in `short-life-line-meaning.md`, `broken-life-line-meaning.md`, `m-line-palmistry.md`, `palmistry-myths.md`, and `heart-line.md`.
- Qualified the *Jeevan Rekha*/*prana* framing as modern Hindi terminology, and replaced "standard in current practice" for the Tian/Di/Ren line mapping with wording tied to the material actually consulted.
- Corrected the style guide's "Taoist" description of *Tian Di Ren* and its unverified claim that relationship predictions are not grounded in any major classical tradition.

## 2026-08-10 - Batch 2B pre-merge correction pass
- Corrected the life-line historical framing across nine content files, the glossary, and the print reference. Cheiro and Benham both read the life line for length of life and both supplied dating systems; the site no longer claims the tradition rejected lifespan reading. Palmistry Path's non-predictive stance is now presented as a modern editorial position resting on evidence.
- Added a durable editorial rule separating historical description from Palmistry Path's own boundary, so the tradition is never sanitised to match site policy.
- Re-audited the Chinese article: removed line-variation interpretations that rested only on Tier 4 material, reframed remaining line readings as contemporary practice, corrected the "interpretive, not prophetic" claim, and stopped claiming the lifespan reading was absent from the classical teaching of either tradition.
- Re-audited the Indian article: removed the claim that no Indian tradition predicts outcomes with certainty (the *Bṛhat Saṃhitā* is openly predictive), and marked the karmic fate-line reading, mount correspondences, joint chart/hand practice, and per-formation meanings as contemporary practice or removed them.
- Fixed two Tian/Di/Ren mapping errors in the Lines lessons and standardised the mapping and its source status across all occurrences.
- Softened the About page sourcing claim to match the four-tier policy, and stated that describing the tradition honestly means reporting predictive claims the site does not endorse.

## 2026-08-10 - Remediation Batch 2B source integrity and editorial trust
- Added a permanent task startup/local sync procedure to `AGENTS.md` so agents fetch, update `main`, and branch without manual user intervention.
- Replaced the editorial style guide's source section with a four-tier source policy, plus rules for tradition-specific sourcing, quotation integrity, and encyclopaedia handling. Removed the prior allowance for citing commercial astrology sites.
- Removed every commercial astrology blog, SEO content farm, and unsourced blog from citations and body prose across nine articles, and deleted the editorial vouching for a commercial palmistry blogger.
- Replaced Wikipedia and Britannica body-prose attributions with the underlying sources they summarise.
- Gave the Chinese and Indian tradition articles tradition-appropriate sourcing (Kohn 1986, Smith 1991, Zysk 2016, Varāhamihira), corrected `san cai` from "Taoist" to classical Chinese cosmology, removed the Vedic-scripture framing, and marked the modern Hindi *rekha* names and the Heaven/Human/Earth mapping as contemporary practice rather than classical doctrine.
- Corrected or qualified factual claims that failed verification: Romani arrival dating, the caduceus, simian line prevalence, "every inhabited continent", the *ekāgratā* attribution, and Cheiro biography inconsistencies.
- Verified 92 author-attributed quotations against the public-domain primary texts; corrected the highest-risk failures, including the life-line lifespan quotation used in five places and the claim that Cheiro and Benham read life-line breaks as transition markers.
- Regenerated the About page source list from the corpus the site actually cites.
- Added `docs/source-verification-log.md` as the durable record of what was verified and what remains open.

## 2026-08-10 - Remediation Batch 2A accessibility and UX safety
- Added global skip-to-main navigation and a shared `:focus-visible` treatment.
- Added reliable `main#main-content` targets across public layouts/pages.
- Improved muted-text contrast by reducing opacity stacking in shared navigation, footer, lesson, blog, guide, and waitlist surfaces.
- Replaced Lines lesson Figure prompt-style alt text with learner-facing descriptions.
- Increased practical lesson-path and header navigation target sizes while preserving the visual design.
- Added visible email labels, described-by relationships, and live/status semantics to the Starter Guide and Complete Reference waitlist forms.
- Added browse fallback content on `/search/` and changed `/learn/` module card titles from paragraphs to headings.
- Added a focused accessibility audit for skip-link/main-target and prompt-like Figure alt regressions.

## 2026-08-10 - Remediation Batch 1 trust and technical safety
- Put the Complete Reference into waitlist-only state and removed the dead paid checkout URL from user-facing flows.
- Preserved the Complete Reference PDF source outside public Astro routing so `/print/complete-reference/` is no longer emitted.
- Temporarily disabled AdSense by leaving the publisher ID empty.
- Added centralized sitemap/Pagefind/noindex policy for private and utility routes.
- Added a generated-output audit for private route exposure, sitemap/Pagefind exclusions, AdSense script emission, and the dead Gumroad checkout URL.
- Applied conservative dependency remediation with `npm audit fix`; remaining advisories require a breaking Astro/sharp upgrade path.

## 2026-08-09 - Agent operating-system migration
- Added shared `AGENTS.md` workflow with progressive disclosure, Git safety, risk-based validation, active-task memory, definition of done, and cross-agent review rules.
- Reworked `CLAUDE.md` around Opus/Sonnet/Haiku routing, Codex independent review, token discipline, and `/clear`/`/compact` boundaries while preserving the established article approval workflow.
- Replaced monolithic `PROJECT.md` startup behavior with a compatibility pointer.
- Added canonical wiki pages for product vision, current state, architecture, roadmap, decisions, ideas, handoff, and active task.
- Preserved existing specialized editorial, SEO, email, visual, launch, and worksheet documents as targeted references.
- Replaced the Astro starter README with a Palmistry Path-specific project README.

No runtime/site behavior was intentionally changed by this migration.
