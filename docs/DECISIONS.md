# Decisions - Palmistry Path

Only durable decisions belong here. Newest entries first.

## 2026-08-28 - Relay merge-gate status is published on both PR events and Director-approval pushes to main (Relay PP-RELAY-059, revision 2)
**Decision:** `.github/workflows/relay-merge-gate.yml` now has two jobs publishing the same commit-status context, `relay-merge-gate` (a Statuses API context, not a check-run name — see `MERGE_GATE_STATUS_CONTEXT` in `scripts/verify-relay-merge-gate.mjs`), for every open `[RELAY ...]` PR against `main`: `gate-pr` on `pull_request` events, reading `.ai-ops/state.json` from the PR's trusted base commit, and the new `gate-refresh` on every `push` to `main` touching `.ai-ops/state.json`, which republishes the status for every currently open Relay PR against the freshly pushed state via the new pure `planRefreshStatuses` function and its I/O wrapper `scripts/publish-relay-merge-gate-status.mjs`. `relay-automerge.yml`, `relay-fastlane.yml`, dispatch, task selection, and risk classes are unchanged.

**Why:** revision 1 (PR #107, closed unmerged) published this status only on PR events. A Director's `MERGE_APPROVED` commit lands on `main` as a `push`, not as a new event on the already-open Relay PR, so revision 1's check would never re-evaluate after approval — if made a required status check as revision 1 proposed, a legitimate Director-approved Relay PR could stay red forever, deadlocking the exact merges Relay depends on. Revision 1's root-cause finding (PP-RELAY-057 PR #104 and PP-RELAY-058 PRs #105/#106 merged to `main` via direct/manual GitHub merge authority, evidenced by `merged_by` and the absence of `relay-automerge.yml`'s forced commit title) and its invariant/fixture tests (`scripts/verify-relay-merge-gate.mjs`, `npm run relay:merge-gate:selftest`) are unchanged and re-verified; only the publication/trigger mechanism was redesigned.

**Consequences:** the signal can now transition from blocking to passing after approval without mutating the approved PR's head SHA, and flips back to blocking if that PR branch receives a further push (a new head was never approved). It remains additive: closing the hole still requires the human owner to (1) add `relay-merge-gate` as a required status check on `main`, and (2) enable "Do not allow bypassing the above settings" including for administrators, since the account that performed the PP-RELAY-057/-058 direct merges has merge rights on `main` and would otherwise be able to bypass a required check it does not hold administrator-exempt status from. No tool available to this Relay worker can read or apply branch-protection settings, so both remain recorded as the exact minimal human action in `.ai-ops/README.md`.

## 2026-08-20 - Orphan-article detection lives in `audit-links.mjs`; the blog index page is excluded as a link source
**Decision:** Detecting blog articles with no meaningful inbound internal link is a check inside `scripts/audit-links.mjs` (`npm run audit`), reusing the link scan it already performs rather than a new standalone script. An article's own page and the `/blog/` listing page do not count as sources of a "meaningful" inbound link: self-links are excluded because they prove nothing about discoverability, and `/blog/` is excluded because it mechanically enumerates every published post regardless of an article's real connectedness — counting it would make the check pass unconditionally and provide false confidence. A page must also be indexable (per `src/indexability.mjs`) to count as a qualifying source or target.

**Why:** The repository already has `audit-links.mjs` verifying that internal links resolve to real targets; it did not verify that published articles are actually reachable through the site's internal link graph. After the recent expansion to 60 published posts, a newly published article that isn't added to any curated link, related-articles cluster, or lesson cross-reference (but is still built and mechanically listed on `/blog/`) would be effectively undiscoverable to a reader following in-content links, while looking "fine" to a naive audit that only checks the listing page. Extending the existing scan was the smallest maintainable integration point and avoids a second full HTML/link-parsing implementation.

**Consequences:** A new article needs at least one real contextual link from another indexable page (homepage, glossary, a lesson's `relatedArticle`, or another post's shared-`cluster` related-articles block) to avoid failing `npm run audit`. Anyone extending internal-link tooling should keep it inside `audit-links.mjs`'s existing scan rather than add a parallel checker, and should preserve the `/blog/` exclusion rationale if the listing page's behavior changes.

## 2026-08-20 - Published-blog-count drift check integrated into `content-audit`; no standalone script
**Decision:** Detecting drift between `docs/editorial-backlog.md`'s documented published-blog-post count and the actual `src/content/blog` collection is a check inside `scripts/audit-content.mjs` (`npm run content-audit`), not a new standalone script or dependency. It parses a narrow, stable `**Published:** N blog posts` marker in the backlog doc and fails closed: both a count mismatch and a missing/unparseable marker block the audit with a documented-versus-actual message.

**Why:** PP-RELAY-025 had to hand-correct a real drift (53 vs. 60) that went undetected for several publishing cycles. `content-audit` already runs on every pull request and push to `main` via `ci.yml` and already computes the actual blog count, so extending it is the smallest maintainable integration point — consistent with the same reasoning applied to lesson `order` uniqueness below. A heuristic prose parser was avoided in favor of one stable marker line the backlog's own "Status" section already uses.

**Consequences:** Anyone changing the backlog's "Status" section must keep the `**Published:** N blog posts` line accurate and in that exact form, or `content-audit` fails with a clear message rather than the count silently drifting again. Anyone extending this guard should keep it inside `audit-content.mjs` rather than introduce a parallel script.

## 2026-08-18 - Lesson `order` uniqueness stays in `content-audit`; no separate validator
**Decision:** Per-module lesson `order` uniqueness is enforced by the existing check in `scripts/audit-content.mjs` and nothing further is added. No new validator script, no test runner, and no committed fixture curriculum. The guard's contract is: duplicate `order` values are blocking only within the same module, distinct modules may reuse the same numeric order, and the error names the module, the order value, and both colliding files.

**Why:** Relay PP-RELAY-013 was authorized to close this as an open tooling gap, on the strength of `docs/audits/CURRICULUM_WAVE_3E_3F_BRANCH_AUDIT_2026-08.md`'s claim that no such check existed anywhere in the pipeline. Inspection showed the check was already present, and byte-identical on `main` and on the audited 3E/3F branch. Reproducing the exact historical Advanced-module `order: 4` pair made `content-audit` exit non-zero with a message naming both files, so the requested behaviour already ships. Adding a second checker would have duplicated a working guard, and the repo declares no test runner, so a fixture harness would have meant new parallel tooling for a check that ordinary CI already exercises on every pull request.

**Consequences:** The audit doc's §2 paragraph and open item 3 are corrected/withdrawn in place so the false premise cannot re-authorize this work. `CURRENT_STATE.md` now states the guard's contract and its CI coverage explicitly. Anyone tempted to add lesson-ordering validation should extend the existing block in `audit-content.mjs` rather than introduce a parallel script. A future genuine gap here — for example gaps or non-contiguous sequences within a module, which is deliberately *not* checked — remains available as separate authorized work.

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
