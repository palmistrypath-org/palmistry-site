# Decisions - Palmistry Path

Only durable decisions belong here. Newest entries first.

## 2026-08-13 - Corroboration inside the tradition is not evidence about a person
**Decision:** When several features of a hand are read the same way, that repetition increases the theme's **weight within the reading**, and nothing else. It does not make the underlying claim about someone's character better evidenced, more likely true, or established. Synthesis prose must not borrow the vocabulary of empirical support for this: avoid "independent evidence", "proof", "proves", "validated", "empirical", "a real trait", "both are real", "trust it with more confidence", and any phrasing where converging features "confirm" something about the person. Prefer "separate observations", "read the same way", "repeated within the traditional framework", "a better-supported theme within this reading", and "more interpretive weight". A worked reading states what the tradition associates features with, never what the person **is**, and says explicitly that the person remains the authority on whether it resonates.

**Why:** The weighting method is genuinely useful and worth teaching — it is what stops a reader building everything on one striking marking. But it has a specific failure mode: the language of weighing evidence is the language of science, and once a lesson says four features "independently converge" and can therefore be stated "with real confidence", it has quietly described palmistry as a set of measurements corroborating a fact. Four readings drawn from one interpretive system are not four independent measurements; repeating an association does not test it. The first draft of `combining-what-you-see.mdx` made exactly this slide, and it is the most consequential kind of error the site can make, because it is invisible — every individual sentence is hedged, while the overall procedure implies validation.

**Consequences:** Applies to all synthesis and checkpoint prose, and to any future lesson that teaches weighting, corroboration, or whole-hand reading. Review new prose of this kind against the banned-phrase list above, in context rather than mechanically — a phrase appearing inside an explicit negation or a "do not say this" example is correct and should stay. Pairs with the separate rule that declining a historical claim does not license inventing a replacement meaning.

## 2026-08-13 - The practice layer is presentational and stateless, permanently
**Decision:** The curriculum's practice and checkpoint layer is **purely presentational**. `Practice.astro`, `Checkpoint.astro` and `CheckpointItem.astro` carry no JavaScript, no state, no persistence, no localStorage, no backend, no accounts, no score, no pass/fail and no progress tracking. Checkpoint answers are revealed by native `<details>`/`<summary>`, which is keyboard-accessible without any of that. Checkpoints are self-checks, not assessments, and each states plainly that a learner may continue and revisit a lesson with no penalty. **Nothing in the curriculum credentials a learner.**

**Why:** A learning site accretes this kind of machinery by default — a score here, a "lessons completed" badge there — and each addition is individually small. Two things make it the wrong direction here. Palmistry is an interpretive tradition, not a validated body of knowledge, so scoring a learner's answers would imply a correctness the subject cannot support, and a completion credential would imply a qualification that does not exist. Separately, the moment any of it persists state, the site acquires accounts, storage, and a privacy surface it currently does not have. The static, stateless version delivers the pedagogical value — a place to test your own understanding — at none of that cost.

**Consequences:** Applies to all 25 core lessons and to any future lesson. A request for quiz scoring, streaks, completion tracking, badges, certificates, or saved answers is a change to this decision and needs an explicit reversal, not an incremental feature. `ROADMAP.md` keeps progress tracking listed as a long-term direction, and it remains unbuilt on purpose. If a future paid product needs progress state, scope it as its own system rather than by quietly adding persistence to these components.

## 2026-08-13 - Lesson `order` uniqueness is not enforced by the build
**Decision:** Treat per-module `order` uniqueness and sequentiality as a **manual check**, performed whenever a lesson is inserted, moved, or renumbered. Do not assume a green build means the ordering is sound.

**Why:** Lesson URLs derive from the content filename while display position derives from the `order` frontmatter, which is what lets lessons be inserted without renaming files or breaking routes. The cost is that `getStaticPaths` in `learn/[module]/[lesson].astro` sorts by `order` and never checks it: duplicate values sort into an arbitrary stable position and render as two lessons bearing the same number, with no build error, no schema failure, and no audit failure. Wave 3E introduced exactly this collision — the moved Simian lesson and the capstone both sat at `order: 4` — and a full green `build` + `audit:all` + `content-audit` run did not surface it.

**Consequences:** Any batch that touches lesson ordering should verify module counts and `order` sequences explicitly before committing. If this recurs, the durable fix is a check in the audit suite rather than more careful reading.

## 2026-08-11 - Seven planetary mounts across eight mount regions
**Decision:** The site publishes one mount model. There are **seven planetary mounts** — Jupiter, Saturn, Apollo/Sun, Mercury, Venus, Luna/Moon, and Mars — occupying **eight physical mount regions**, because Mars appears in two distinct areas of the palm (Lower/Inner and Upper/Outer). The **Plain of Mars** is a separate central region between them: read in its own right, but not a raised planetary mount, not an eighth planetary type, and not a ninth mount. The preferred first explanation is "seven planetary mounts occupy eight mount regions, because Mars appears in two distinct areas of the palm"; concise equivalents are fine where space is tight. An unqualified "the eight mounts" is not acceptable where it implies eight planetary types — use "eight mount regions" when the count refers to physical areas.

**Why:** The site previously said "seven" in some places and "eight" in others, and the docs said "nine". Both counts are defensible in isolation — the tradition names seven, a learner's hand shows eight — and the contradiction was invisible until they appeared on the same site. Learners physically find eight rises and read that the tradition has seven; the reconciliation has to be stated rather than left to them. The glossary had also drifted into a genuine error, equating the Outer Mount of Mars with the Plain of Mars.

**Consequences:** Applies to lessons, articles, glossary, guide and premium-guide copy, and the print reference. `mounts/01` carries the one explicit explanation; `foundations/02` names all eight regions so the Lines module has the geography it depends on. `docs/mount-diagram-creative-briefs.md` predates this model and carries a terminology note — its per-diagram specs document artwork already produced, but new label text follows this decision.

## 2026-08-11 - Teaching order may differ from the reading procedure
**Decision:** The acquisition order (Foundations → Major Lines → Mounts → Minor Lines & Synthesis) and the actual reading procedure (overall impression and hand structure → mounts → major lines → minor lines → close) are deliberately different, and the site says so rather than pretending they match. The four-module architecture is retained.

**Why:** Batch 3A's first pass argued the curriculum should teach mounts before lines because a reading examines mounts first, and that inference was retracted on measured dependency: the Mounts module makes heavy interpretive use of lines, while the Lines module needs only mount *location*, which `foundations/02` supplies. Lines are also visually obvious on a first attempt where mount development is not, so teaching lines first gets a learner reading sooner. The only real risk was the site appearing to contradict itself, which one paragraph in `foundations/02` resolves.

**Consequences:** Do not reorder the modules to match the reading procedure. Any future lesson that teaches the reading sequence states the distinction rather than silently re-ordering.

## 2026-08-11 - A lesson teaches the variable; the blog covers the specific value
**Decision:** The core curriculum teaches the general variable — how to assess a mount, how to read line quality, what placement means. The blog covers specific values of that variable — this particular mount, this particular marking. New specific-topic content goes to the blog by default; a lesson is added only when a variable is genuinely untaught. The approved core curriculum target is **25 lessons in four modules**, up from 22, to be implemented in later batches. Nails remain blog-only.

**Why:** Batch 3A's first pass proposed 11 new lessons; a lean-curriculum test and an independent competency test cut that to 3. Most apparent gaps were specific values that belong in articles, or could fold into neighbouring lessons. Without this rule the module count grows with every topic the site covers.

**Consequences:** Governs which of the audit's remaining proposals become lessons. The three approved additions are the thumb and fingers, line quality and markings, and a worked complete reading; Practice and Checkpoint components are approved for a later batch.

## 2026-08-11 - Verifying a quotation means checking the subject, not the string
**Decision:** A quotation counts as verified only when the source is saying it *about the feature the article attributes it to*. Finding the words somewhere in the right book is not sufficient and does not license quotation marks. The same test applies to the speaker: wording reproduced inside a source — a quoted letter, an epigraph, a passage the author is themselves citing — is not that author's sentence and may not be attributed to them.

**Why:** Batch 2C found fourteen passages that matched the corpora and were still wrong. "The love nature" is Cheiro's, about the heart line, and was used for the Mount of Venus. "The strength of the constitution" and "nervous energy" are Benham's, about the life line, and were used for Venus and for nails. Worse, Batch 2B's own replacement quotation for the active/passive hand — "the left hand is what you are, constitutionally" — is genuinely in *Cheiro's Language of the Hand*, but sits inside a reader's letter signed "Speranus" whose writer attributes it to cheiromants generally. An exact-match check certified all of these. Short quotations are the highest-risk category, because a common phrase will match something.

**Consequences:** Quotation checks must retrieve surrounding context, not just a hit. Prefer a longer quotation that carries its own subject over a three-word fragment. When a check is delegated, the worker returns the source's sentence and what it describes, and the adjudication happens against that. Recorded in `source-verification-log.md` under Batch 2C.

## 2026-08-10 - Historical description is separate from editorial policy
**Decision:** Content must keep two things apart and may not collapse them. *Historical description* reports what the sources actually say, including predictive claims about lifespan, death, illness, wealth, and status, and including the dating systems built for them. *Editorial policy* is Palmistry Path's own boundary: we do not predict those things and do not present historical predictive claims as reliable. Where the two differ, the page says they differ and why. No article may state that the tradition "never" made a claim the primary texts demonstrably make.

**Why:** Batch 2B established from the primary texts that Cheiro reads the life line to "foretell the length of life from natural causes" and divides it into seven-year periods, that Benham dates the line in six-year divisions and reads a tasselled ending as death at the indicated age, and that the *Bṛhat Saṃhitā* reads palm marks for kingship, wealth, and longevity — and then published content asserting the opposite. Sanitising the tradition to match the site's safety boundary is a factual error, and on a site whose differentiator is traceability it is the most damaging kind.

**Consequences:** Recorded in `editorial-style-guide.md` §5.2 and §11. Myth-corrections must be grounded in the evidence and the modern literature, never in a false claim about what the historical writers taught. The same rule governs relationship, health, and fortune claims, not only lifespan.

## 2026-08-10 - Four-tier source policy and quotation integrity
**Decision:** All citations sit in one of four tiers, defined in `editorial-style-guide.md` §5: primary/historical source texts; serious secondary and scholarly works; targeted reputable factual references; and discovery-only weak sources. Tier 4 material — commercial astrology sites, SEO content farms, unsourced blogs, listicles, aggregators, AI summaries — may be used to find leads but is never cited, never named as an authority, and never appears in a source footer. Wikipedia and general encyclopaedias are discovery aids: follow them to the underlying source and cite that. Claims presented as Chinese or Indian tradition require tradition-appropriate sources; a Western bibliography does not support a tradition-internal claim. Quotation marks mean verbatim wording verified in the cited edition; anything else is paraphrased without quotation marks.

**Why:** The site's differentiator is that its claims can be traced. The August 2026 audit found nine articles citing content farms alongside Cheiro and Benham, two tradition articles carrying a byte-identical Western bibliography, and an About page listing books the corpus never cites. Verification during Batch 2B then found that most author-attributed quotations could not be located in the texts they were credited to. A stated hierarchy is what prevents each of these from recurring.

**Consequences:** The style guide no longer permits citing named commercial practitioners as authorities, which was the rule that produced the problem. Articles that cannot reach a tradition-appropriate source must say the claim reflects contemporary practice, or drop it. Quotation-level work must be verifiable before publication; `docs/source-verification-log.md` is the durable record. The 78 outstanding attributions this decision created were resolved by Batch 2C on 2026-08-11.

## 2026-08-10 - Automatic task startup and local sync
**Decision:** At the start of an implementation task an agent inspects `git status`, and — if the tree is clean — fetches, switches to `main`, fast-forwards, verifies the remote and upstream state, and creates or switches to the designated task branch. A dirty tree stops the task and is reported; nothing is reset, stashed, or discarded without approval.

**Why:** The user was manually synchronising `main` between tasks, and new work risked starting from a stale completed feature branch.

**Consequences:** Recorded once in `AGENTS.md` under "Task startup and local sync"; the progressive-disclosure list points at it rather than repeating it.

## 2026-08-10 - Accessibility baseline for Batch 2A
**Decision:** Keep accessibility remediation systemic and minimal: a global skip link targets `main#main-content`, shared `:focus-visible` styling handles keyboard indication, compact lesson/header controls use larger practical targets, and lesson Figure alt text must describe learner-relevant visual information rather than image-generation briefs.

**Why:** The approved Batch 2A scope prioritizes keyboard access, readable functional text, usable touch targets, and assistive-technology clarity without redesigning the Palmistry Path visual identity.

**Consequences:** Public pages using the header should expose exactly one `main#main-content` target. `npm run audit:accessibility` is part of `audit:all` and guards against missing skip targets and prompt-like lesson Figure alt text.

## 2026-08-10 - Trust and indexability boundaries for Batch 1
**Decision:** Keep the Complete Reference waitlist-only until a working paid checkout exists; do not expose its PDF-generation source as a public Astro route; temporarily disable AdSense; and centralize utility/private indexability rules in `src/indexability.mjs`.

**Why:** The approved trust/technical remediation batch prioritizes truthful product state, paid-content safety, privacy consistency, and intentional sitemap/Pagefind coverage over broader redesign or monetization changes.

**Consequences:** The Complete Reference source lives under `src/private/` for future authoring/PDF generation. `/guide/thank-you/`, `/search/`, and placeholder `/contact/` are noindex and excluded from sitemap/Pagefind. Legal pages remain public and sitemap-eligible.

## 2026-08-09 - Adopt progressive-disclosure agent operating system
**Decision:** Replace the "read one monolithic project file every session" workflow with shared `AGENTS.md` plus targeted canonical docs under `docs/`.

**Why:** Reduce context/token waste, context rot, repeated reading, and cross-agent inconsistency while preserving durable project knowledge in the repo.

**Consequences:** `PROJECT.md` remains only as a compatibility pointer. Agents read task-relevant docs rather than recursively loading the wiki.

## 2026-08-09 - Repository is the source of truth
**Decision:** Agents must inspect current implementation before documenting, planning, or changing it. Repo state outranks chat summaries and stale planning docs.

**Why:** Palmistry Path already has significant implementation and historical planning; assuming old state creates drift.

## 2026-08-09 - Preserve specialized domain docs
**Decision:** Existing editorial, SEO, email, launch, visual, and worksheet documents remain in place beneath a new canonical navigation layer rather than being rewritten into one large master document.

**Why:** They contain useful deep context but are too large/specialized for every-session loading.

## 2026-08-09 - Keep article approval gate
**Decision:** New/materially rewritten articles use a pre-draft report, are written directly to the repo file, and are not committed/pushed until the user explicitly approves them unless the user explicitly overrides the workflow.

**Why:** This preserves the established editorial review loop while allowing code/site tasks to use normal coherent commit practices.

## 2026-08-09 - Risk-based validation
**Decision:** Validation is selected by change type. Docs-only work does not require a site build; content work uses build/content audits and targeted audits; code/layout/schema changes use the broader automated audit suite and practical visual review when relevant.

**Why:** Maintain quality without wasting tokens/time on unrelated checks.

## 2026-08-09 - Small-studio model routing
**Decision:** Claude work uses Opus as director/high-risk decision maker, Sonnet as normal lead executor/editor, and Haiku as bounded scout/verifier. Codex is preferred as an independent technical reviewer where a second implementation perspective adds value.

**Why:** Match model cost/capability to task risk while preventing worker-context bloat.
