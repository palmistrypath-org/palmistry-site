# Decisions - Palmistry Path

Only durable decisions belong here. Newest entries first.

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
