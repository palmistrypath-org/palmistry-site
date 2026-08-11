# AI Handoff - Palmistry Path

## Before working
1. Read `../AGENTS.md`.
2. If `ACTIVE_TASK.md` is active, read it next.
3. Read only the task-relevant portions of `PRODUCT_VISION.md`, `CURRENT_STATE.md`, recent/relevant `DECISIONS.md`, `ROADMAP.md`, and `ARCHITECTURE.md` as directed by the task.
4. For editorial work, open only relevant sections of the editorial guide/template and any directly relevant specialized planning doc.
5. Search/grep before opening large source/content files.
6. Inspect the actual relevant implementation/content and current Git state.

## Current continuation context
Current focus: none in implementation. `ACTIVE_TASK.md` is INACTIVE. Batch 3B is
complete and pushed on `fix/curriculum-batch-3b`, unmerged.

Latest completed work: on 2026-08-11 Remediation Batch 3B implemented the first
tranche of the approved curriculum decisions — truthful labelling, the mount
model, and the simian correction. Two commits. The simian source defect (P0-2) is
**fixed**: the lesson no longer asserts *ekaagra* as Hasta Samudrika Shastra
doctrine, the 1–3% / 1–4% contradiction is resolved to 1–3%, and the same stale
attribution in `heart-line.md` was corrected. The mount model is published
sitewide (seven planetary mounts, eight mount regions, Mars in two, Plain of Mars
separate), module 4 is now "Minor Lines & Synthesis" at Intermediate with the
`advanced` slug and all lesson URLs unchanged, and the decorative `prerequisites`
field is gone from all 22 lessons and the schema.

**Not implemented and still pending:** the three new lessons (thumb and fingers,
line quality and markings, combining what you see), Practice and Checkpoint
components, the second worked reading, and the simian lesson's module move
(Batch 3E). Do not treat the 25-lesson target as delivered — the curriculum is
still 22 lessons.

Preceding work: on 2026-08-11 Remediation Batch 3A, the Learning Path &
Curriculum Audit, produced `docs/audits/CURRICULUM_AUDIT_2026-08.md` on branch
`audit/curriculum-learning-path-3a`, revised the same day after independent
review.

**Read the audit's second-pass box before acting on anything in it.** The first
pass argued that because the reading procedure examines mounts before lines, the
curriculum must teach the Mounts module before the Lines module. That inference
was wrong and is retracted. Measured dependency runs the other way: the Mounts
module carries 54 line references and four `##` sections that interpret
line–mount relationships (`mounts/02:74`, `05:24`, `06:26`, `07:47`); the Lines
module carries 22 mount references, all positional landmarks, and no sections —
and `foundations/02:65` already names and locates every mount region before the
Lines module runs. The Lines module needs mount *location*, not mount
*assessment*. **The existing module order is correct and is not proposed for
change.** The six-module restructure is withdrawn.

The audit now proposes four modules and **25 core lessons** — KEEP 11, MOVE 1,
REVISE 10, MERGE 0, ADD 3 — plus 4 optional/later lessons. A lean-curriculum test
folded most first-pass gaps into neighbouring lessons and checkpoints rather than
new lessons, and an independent competency test demoted the sun line and Mercury
line from P0 to P1 (the remedy is revising `advanced/01` so it teaches them, not
adding lessons).

The audit listed four P0s. **The simian source defect is closed by Batch 3B.**
Three remain open: line-quality vocabulary used across nine lesson files and
taught in none; the thumb and fingers absent; and no worked example of a complete
reading. Each is a new lesson and belongs to a later batch.

The eight §17 decisions were settled by the user before Batch 3B. The durable
ones are now recorded in `DECISIONS.md` (2026-08-11): the four-module
architecture is retained; teaching order may differ from the reading procedure;
seven planetary mounts across eight mount regions with Mars in two and the Plain
of Mars separate; the 25-lesson target is approved for later implementation; and
a lesson teaches the variable while the blog covers the specific value. Read
those three entries rather than re-deriving them from the audit.

Preceding implementation: on 2026-08-11 Remediation Batch 2C, Quotation Integrity, closed the quotation backlog Batch 2B opened. Every quotation-marked passage in a paragraph naming Cheiro or Benham was re-inventoried from source and matched against the six public-domain scans: 245 spans, 162 of them genuine attributions, 55 already exact, 107 corrected, zero left unverified. Beyond wording, it corrected five attributions that carried claims the sources do not make, one wrong work (Cheiro on Mars is in *Language of the Hand*, not *Palmistry for All*), and one of Batch 2B's own replacement quotations, which turned out to come from a reader's letter printed in Cheiro's book rather than from Cheiro.

The rule worth carrying forward is in `DECISIONS.md` (2026-08-11): a quotation is verified only when the source is saying it about the feature the article attributes it to. Fourteen passages in this batch matched the corpus and were still wrong, mostly short phrases sitting under the wrong feature. Do not treat an exact string match as a check.

Preceding implementation: on 2026-08-10 Remediation Batch 2B, Source Integrity & Editorial Trust, established the four-tier source policy in `editorial-style-guide.md` §5, added the permanent task startup/local sync rule to `AGENTS.md`, stripped all weak and encyclopaedia citations from the corpus, re-sourced the Chinese and Indian tradition articles, corrected the audit's flagged factual claims, fixed the highest-risk unverifiable quotations, and regenerated the About page source list.

A pre-merge correction pass on 2026-08-10 fixed a contradiction introduced by Batch 2B: the branch had established from the primary texts that Cheiro and Benham read the life line for length of life, then published content claiming the tradition never did. The rule that prevents a repeat is in `DECISIONS.md` and `editorial-style-guide.md` §5.2 — describe the historical claims accurately, state the site's own boundary separately, never sanitise the sources to match policy. Apply it to any future myth-correction, not just lifespan.

Remaining sourcing risk: **20 quotations attributed to Gettings (1965), West (1998), and Fincham (2005) have never been verified**, because those editions are in copyright and could not be text-searched. They are untouched and flagged in `editorial-backlog.md`. There is nothing to do about them without the books; the open question is editorial — whether to keep quoting sources the site cannot check. Every quotation-marked attribution to Cheiro or Benham covered by Batch 2C is now verified or corrected; this does not imply that every unquoted paraphrase elsewhere in the corpus has been independently source-checked.

Preceding implementation: on 2026-08-10 Remediation Batch 2A, Accessibility & UX Safety, added global skip navigation, shared focus-visible styling, main-content targets, focused text-contrast/opacity fixes, learner-facing alt text for Lines lesson Figures, larger practical lesson/header targets, accessible labels/status semantics for the Starter Guide and waitlist forms, a search browse fallback, `/learn` module-card headings, and a focused accessibility audit.

Known follow-up: after explicit approval during Batch 2A, `npm audit --omit=dev` completed and reported 4 production vulnerabilities: 1 low, 1 moderate, and 2 high. The remaining fix path is `npm audit fix --force`, which would install Astro 7.2.0 and sharp 0.35.3 as a breaking upgrade path. Do not force that migration without explicit approval.

Key current implementation facts are summarized in `CURRENT_STATE.md` and `ARCHITECTURE.md`; verify source before relying on them for a change.

## Immediate next action
Await the user's review and merge of `fix/curriculum-batch-3b`, or their next
Palmistry Path objective. Do not merge it unprompted.

The natural next batch is 3C: add the three approved lessons — the thumb and
fingers, line quality and markings, and combining what you see (a worked complete
reading) — taking the core curriculum from 22 to 25. That is new-article work and
needs the `AGENTS.md` approval gate: pre-draft report, write to file, user
approval, then validation and commit. Do not reorder modules, and do not move the
simian lesson; that move is Batch 3E. Start from a clean context if possible
(`/clear`), reconstructing from Git plus targeted canonical docs rather than chat
history.
