# AI Handoff - Palmistry Path

## Before working
1. Read `../AGENTS.md`.
2. If `ACTIVE_TASK.md` is active, read it next.
3. Read only the task-relevant portions of `PRODUCT_VISION.md`, `CURRENT_STATE.md`, recent/relevant `DECISIONS.md`, `ROADMAP.md`, and `ARCHITECTURE.md` as directed by the task.
4. For editorial work, open only relevant sections of the editorial guide/template and any directly relevant specialized planning doc.
5. Search/grep before opening large source/content files.
6. Inspect the actual relevant implementation/content and current Git state.

## Current continuation context
Current focus: none in implementation. `ACTIVE_TASK.md` is INACTIVE. An audit is
awaiting the user's decisions.

Latest completed work: on 2026-08-11 Remediation Batch 3A, the Learning Path &
Curriculum Audit, produced `docs/audits/CURRICULUM_AUDIT_2026-08.md` on branch
`audit/curriculum-learning-path-3a`, revised the same day after independent
review. **It is an audit. No curriculum change has been implemented and none is
authorized.** Nothing in `src/` was touched.

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

The four P0s are: line-quality vocabulary used across nine lesson files and
taught in none; **a live source-integrity defect in
`lines/06-simian-line.mdx:84`**, which still asserts *ekaagra* as Hasta Samudrika
Shastra doctrine after Batch 2B corrected exactly that framing in the twin
article (`blog/beginner/simian-line.md:43`), plus a 1–3% / 1–4% contradiction
inside the same file; the thumb and fingers absent; and no worked example of a
complete reading. The simian defect is recorded, not fixed — it is assigned to
Batch 3E and may be pulled forward as a standalone micro-batch (decision D4).

Eight decisions in §17 must be settled before any implementation batch begins.
D3 adopts a seven-mounts/eight-regions model — "seven mounts across eight
regions, because Mars occupies two" — rather than replacing "eight" with "seven"
everywhere; it touches paid-product copy. Recommended first batch is 3B,
labelling and the mount model, config and copy only.

Preceding implementation: on 2026-08-11 Remediation Batch 2C, Quotation Integrity, closed the quotation backlog Batch 2B opened. Every quotation-marked passage in a paragraph naming Cheiro or Benham was re-inventoried from source and matched against the six public-domain scans: 245 spans, 162 of them genuine attributions, 55 already exact, 107 corrected, zero left unverified. Beyond wording, it corrected five attributions that carried claims the sources do not make, one wrong work (Cheiro on Mars is in *Language of the Hand*, not *Palmistry for All*), and one of Batch 2B's own replacement quotations, which turned out to come from a reader's letter printed in Cheiro's book rather than from Cheiro.

The rule worth carrying forward is in `DECISIONS.md` (2026-08-11): a quotation is verified only when the source is saying it about the feature the article attributes it to. Fourteen passages in this batch matched the corpus and were still wrong, mostly short phrases sitting under the wrong feature. Do not treat an exact string match as a check.

Preceding implementation: on 2026-08-10 Remediation Batch 2B, Source Integrity & Editorial Trust, established the four-tier source policy in `editorial-style-guide.md` §5, added the permanent task startup/local sync rule to `AGENTS.md`, stripped all weak and encyclopaedia citations from the corpus, re-sourced the Chinese and Indian tradition articles, corrected the audit's flagged factual claims, fixed the highest-risk unverifiable quotations, and regenerated the About page source list.

A pre-merge correction pass on 2026-08-10 fixed a contradiction introduced by Batch 2B: the branch had established from the primary texts that Cheiro and Benham read the life line for length of life, then published content claiming the tradition never did. The rule that prevents a repeat is in `DECISIONS.md` and `editorial-style-guide.md` §5.2 — describe the historical claims accurately, state the site's own boundary separately, never sanitise the sources to match policy. Apply it to any future myth-correction, not just lifespan.

Remaining sourcing risk: **20 quotations attributed to Gettings (1965), West (1998), and Fincham (2005) have never been verified**, because those editions are in copyright and could not be text-searched. They are untouched and flagged in `editorial-backlog.md`. There is nothing to do about them without the books; the open question is editorial — whether to keep quoting sources the site cannot check. Every quotation-marked attribution to Cheiro or Benham covered by Batch 2C is now verified or corrected; this does not imply that every unquoted paraphrase elsewhere in the corpus has been independently source-checked.

Preceding implementation: on 2026-08-10 Remediation Batch 2A, Accessibility & UX Safety, added global skip navigation, shared focus-visible styling, main-content targets, focused text-contrast/opacity fixes, learner-facing alt text for Lines lesson Figures, larger practical lesson/header targets, accessible labels/status semantics for the Starter Guide and waitlist forms, a search browse fallback, `/learn` module-card headings, and a focused accessibility audit.

Known follow-up: after explicit approval during Batch 2A, `npm audit --omit=dev` completed and reported 4 production vulnerabilities: 1 low, 1 moderate, and 2 high. The remaining fix path is `npm audit fix --force`, which would install Astro 7.2.0 and sharp 0.35.3 as a breaking upgrade path. Do not force that migration without explicit approval.

Key current implementation facts are summarized in `CURRENT_STATE.md` and `ARCHITECTURE.md`; verify source before relying on them for a change.

## Immediate next action
Await the user's decisions on `docs/audits/CURRICULUM_AUDIT_2026-08.md` §17, or
their next Palmistry Path objective. Do not begin any curriculum implementation
without those approvals — in particular, do not add lessons or change the mount
count on the strength of the audit alone, and do not reorder the modules at all.
The one item that is unambiguously a defect rather than a proposal is the simian
lesson's stale *ekaagra* framing (P0-2); it still needs approval to fix, but the
correction itself is settled and requires no new research. Start the next task
from a clean context if possible (`/clear`), reconstructing from Git plus
targeted canonical docs rather than chat history.
