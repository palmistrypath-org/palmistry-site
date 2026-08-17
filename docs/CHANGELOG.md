# Changelog - Palmistry Path

Meaningful project-state changes only; Git history remains the detailed implementation record.

## 2026-08-16 - CI validation workflow (Relay PP-RELAY-002)
- Added `.github/workflows/ci.yml`, a general-purpose validation workflow that runs on pull requests targeting `main` and on pushes to `main`. It checks out the repo, installs Node 22 dependencies from the committed lockfile with `npm ci`, and runs `npm run build`, `npm run content-audit`, and `npm run audit:all` (link, image, schema, indexability, and accessibility audits). Permissions are `contents: read`; runs are grouped and cancelled per PR/ref to avoid wasting resources on superseded pushes.
- Ordinary PRs and pushes to `main` now get the same build/audit coverage the Relay pilot already used for its own dispatched tasks; previously only `.github/workflows/relay-dispatch.yml` existed, and it only fires the Relay routine on `.ai-ops/state.json` changes.
- `relay-dispatch.yml` was not modified.
- No dependency, content, or runtime behavior changed; verified locally with a clean `npm ci` followed by `npm run build`, `npm run content-audit`, and `npm run audit:all`, all passing.

## 2026-08-16 - Documentation reconciliation (Relay PP-RELAY-001)
- Reconciled `CURRENT_STATE.md`, `ACTIVE_TASK.md`, and `AI_HANDOFF.md` against verified `main` history: Curriculum Batches 3A–3D (PRs #8–#11) and the Technical Remediation Wave (PR #12) were previously documented as pushed-but-unmerged and are confirmed merged into `main` as of this date.
- Added the Technical Remediation Wave (accessible 404 page, expanded blog+lesson `content-audit` coverage, homepage PNG→WebP conversion) to `ROADMAP.md` and `CURRENT_STATE.md`; it had not previously been recorded in canonical state docs.
- Noted that `feat/curriculum-wave-3e-3f` exists on the remote unmerged and unreviewed; not treated as shipped.
- No runtime, content, or SEO behavior changed.

## 2026-08-13 - Remediation Batch 3D the thumb and the fingers
- Added **The Thumb and the Fingers** as the fourth lesson of Foundations (`src/content/lessons/foundations/thumb-and-fingers.mdx`, route `/learn/foundations/thumb-and-fingers`). It teaches the structural pass the course previously walked past: thumb length against a source-verified landmark, thumb setting, the two thumb sections, resting opening angle, tip-joint flexibility, the one-time planetary finger mapping, per-finger comparison landmarks, base arch, resting spacing, and lean. The core curriculum is now **24 lessons**; Foundations has **5**.
- The new lesson carries an unnumbered filename with `order: 4`; `04-active-and-passive-hand.mdx` moved to `order: 5` and remains the Foundations closing lesson. **No file renamed and no URL changed.**
- **Thumb length is now taught from a verified landmark.** Benham (1900) gives it: a thumb of ordinary length reaches about the middle of the index finger's base segment, with the thumb held against the side of the hand — plus his own caveat that a low or high setting confounds the measurement. Cheiro gives no landmark at all; the ambiguous "reaches to or beyond the first joint" wording in the blog is not his and is not reproduced.
- **Will and reason are taught in three separated moves**: the physical proportion, then the historical reading, then the site's boundary. Benham's own framing is quoted — he adopted the two names "for brevity" — and the lesson states plainly that they are traditional labels for a proportion, not measurements of anyone's intelligence, willpower, self-control, judgement, or character. **No invented modern meaning replaces the historical one.**
- Deliberately out of core: the clubbed or "murderer's" thumb and all sensational variants, thumb-tip and fingertip typologies, the three phalange zones, knotted-versus-smooth joints, per-finger meaning tables, finger flexibility as a separate test, and nails. Nails carry a one-sentence boundary that does not imply a future lesson. No Indian or Chinese equivalence is claimed; the lesson states that the will/reason frame and the planetary finger names are Western constructions.
- **Finger prominence is not raw length.** The middle finger is longest on almost every hand, so the lesson teaches each finger against Benham's own per-finger landmarks and defines prominence as departure from those, not as being longer than a neighbour.
- Retitled `foundations/03-hand-shapes.mdx` to **Hand Shape, Texture, and Flexibility** (route unchanged, duration 8→10) and added skin texture, consistency under pressure, and whole-hand flexibility as a **separate qualifying layer placed after the four types**. The elemental classification still rests on two inputs and only two; the section says so explicitly and states that these observations never change a hand's type. Boundaries are stated on the page: texture is not line quality, consistency is not mount firmness, whole-hand flexibility is not the thumb-tip joint.
- Added the historical clarification that d'Arpentigny (1843) supplied the earlier Western shape typology, that the four-element framing came later, and that **Cheiro and Benham did not use the system this lesson teaches**.
- Revised `foundations/02-how-to-read-a-palm.mdx`: step three compressed to an observation prompt now that lesson 3 teaches the interpretations; a new thumb/finger step added so the course's own reading sequence no longer omits a layer it teaches (steps renumbered to seven); the claim that palm-to-finger ratio is "the foundation of every major hand classification system" narrowed to what the repo supports; "associations across traditions" removed; and the Sun/Apollo inversion corrected to match the Mounts module.
- Corrected the forward reference in `mounts/03-mount-of-jupiter.mdx`, which pointed at "the finger lessons that follow" — after 3D that lesson exists and precedes the Mounts module.
- Repointed `relatedLesson` in `thumb-meaning-palmistry.md` and `finger-shapes-palmistry.md` to the new lesson. The new lesson's `relatedArticle` is the finger article, chosen because it carries no quotation-marked source passages; the thumb article's unresolved Gettings quotation remains a separate backlog item.
- Adopted the **feature-branch review gate**: agents may implement, test, commit, and push on task branches without a separate approval step. Merging to `main` still requires explicit user review. Recorded in `AGENTS.md` and `CLAUDE.md`.

## 2026-08-11 - Remediation Batch 3C line quality and markings
- Added **Line Quality and Markings** as the first lesson of the Lines module (`src/content/lessons/lines/line-quality-and-markings.mdx`, route `/learn/lines/line-quality-and-markings`). It teaches the observational vocabulary shared by every line — depth as a continuum, clarity as a separate axis, relative rather than absolute depth, clean/chained/broken continuity, clean versus overlapping breaks, forks versus branches, islands, and parallel/support lines — and teaches description before interpretation. The core curriculum is now **23 lessons**; the Lines module has **7**.
- The new lesson carries an unnumbered filename. Lesson URLs derive from the filename while display order derives from the `order` frontmatter, so the new lesson takes `order: 1` and the six existing Lines lessons increment to 2–7 with **no file renamed and no URL changed**. The 45 inbound links to the existing Lines routes are unaffected.
- Made the four major-line lessons subtractive rather than additive. The generic depth/faint/chained definitions, the relative-depth rule, and the generic break, fork, branch, and parallel-line definitions were removed from `lines/02`–`05`, which had quadruplicated them; each lesson now applies the shared vocabulary to its own line instead of re-deriving it. Net 30 insertions against 36 deletions.
- Kept all line-specific historical and source material intact, including Benham's nervous-versus-muscular vitality distinction on the life line, the Line of Mars quotations, the classical-versus-modern life-line break discussion, and the Batch 2B lifespan corrections. Added a brief physical definition of a tasselled ending inside the existing Benham passage in `lines/04` without softening the mortality claim it reports.
- Islands are taught as form, then the verified Cheiro (1916) and Benham (1900) health readings quoted exactly, then Palmistry Path's own boundary. **No invented modern universal meaning replaces the historical reading** — the site's contemporary position is stated as methodological (which line, where, how large, surrounding condition, neighbouring features, other hand), and the asymmetry is stated openly on the page.
- Deliberately out of scope for the new lesson: crosses, stars, grilles, triangles, squares, tasselled endings, and the line-specific variables of length, arc, slope, and endings. The lesson states both boundaries explicitly.
- No new inline "go deeper" linking convention was introduced; the lesson uses `relatedArticle` only. No figure was removed — each existing plate carries its line's name in the artwork and retains line-specific teaching value. `lines/06-simian-line.mdx` changed in frontmatter `order` only.

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
