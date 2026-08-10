# Decisions - Palmistry Path

Only durable decisions belong here. Newest entries first.

## 2026-08-10 - Four-tier source policy and quotation integrity
**Decision:** All citations sit in one of four tiers, defined in `editorial-style-guide.md` §5: primary/historical source texts; serious secondary and scholarly works; targeted reputable factual references; and discovery-only weak sources. Tier 4 material — commercial astrology sites, SEO content farms, unsourced blogs, listicles, aggregators, AI summaries — may be used to find leads but is never cited, never named as an authority, and never appears in a source footer. Wikipedia and general encyclopaedias are discovery aids: follow them to the underlying source and cite that. Claims presented as Chinese or Indian tradition require tradition-appropriate sources; a Western bibliography does not support a tradition-internal claim. Quotation marks mean verbatim wording verified in the cited edition; anything else is paraphrased without quotation marks.

**Why:** The site's differentiator is that its claims can be traced. The August 2026 audit found nine articles citing content farms alongside Cheiro and Benham, two tradition articles carrying a byte-identical Western bibliography, and an About page listing books the corpus never cites. Verification during Batch 2B then found that most author-attributed quotations could not be located in the texts they were credited to. A stated hierarchy is what prevents each of these from recurring.

**Consequences:** The style guide no longer permits citing named commercial practitioners as authorities, which was the rule that produced the problem. Articles that cannot reach a tradition-appropriate source must say the claim reflects contemporary practice, or drop it. Quotation-level work must be verifiable before publication; `docs/source-verification-log.md` is the durable record and carries the 78 outstanding unverified attributions.

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
