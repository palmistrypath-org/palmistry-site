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
`audit/curriculum-learning-path-3a`. **It is an audit. No curriculum change has
been implemented and none is authorized.** Nothing in `src/` was touched.

The finding that drives the rest: the course teaches an observation order in
`foundations/02-how-to-read-a-palm.mdx` (impression → shape → texture → mounts →
major lines → minor lines), restates it in the capstone
`advanced/04-how-to-give-a-reading.mdx:25-33`, and then contradicts it with its
own module sequence, which runs Lines before Mounts. Alongside that: line-quality
vocabulary (chained, breaks, forks, branches, islands) is used across nine lesson
files and taught in none; the thumb, the fingers, the sun line, and the Mercury
line have no lesson despite the capstone depending on them; and no worked example
of a complete reading exists anywhere in the 22 lessons.

The audit proposes a six-module target curriculum (KEEP 8, MOVE 5, REVISE 8,
MERGE 1, ADD 11) and eight named decisions in §18 that must be settled before any
implementation batch begins. The recommended first batch is 3B — structure and
labelling only, no new lesson prose. Note that §18 D3 (seven mounts or eight)
touches paid-product copy, and that the audit overturns the August site audit's
§5 claim that sequencing and prerequisites are correct; where the two disagree,
Batch 3A re-verified against the current tree and §20 records the evidence.

Preceding implementation: on 2026-08-11 Remediation Batch 2C, Quotation Integrity, closed the quotation backlog Batch 2B opened. Every quotation-marked passage in a paragraph naming Cheiro or Benham was re-inventoried from source and matched against the six public-domain scans: 245 spans, 162 of them genuine attributions, 55 already exact, 107 corrected, zero left unverified. Beyond wording, it corrected five attributions that carried claims the sources do not make, one wrong work (Cheiro on Mars is in *Language of the Hand*, not *Palmistry for All*), and one of Batch 2B's own replacement quotations, which turned out to come from a reader's letter printed in Cheiro's book rather than from Cheiro.

The rule worth carrying forward is in `DECISIONS.md` (2026-08-11): a quotation is verified only when the source is saying it about the feature the article attributes it to. Fourteen passages in this batch matched the corpus and were still wrong, mostly short phrases sitting under the wrong feature. Do not treat an exact string match as a check.

Preceding implementation: on 2026-08-10 Remediation Batch 2B, Source Integrity & Editorial Trust, established the four-tier source policy in `editorial-style-guide.md` §5, added the permanent task startup/local sync rule to `AGENTS.md`, stripped all weak and encyclopaedia citations from the corpus, re-sourced the Chinese and Indian tradition articles, corrected the audit's flagged factual claims, fixed the highest-risk unverifiable quotations, and regenerated the About page source list.

A pre-merge correction pass on 2026-08-10 fixed a contradiction introduced by Batch 2B: the branch had established from the primary texts that Cheiro and Benham read the life line for length of life, then published content claiming the tradition never did. The rule that prevents a repeat is in `DECISIONS.md` and `editorial-style-guide.md` §5.2 — describe the historical claims accurately, state the site's own boundary separately, never sanitise the sources to match policy. Apply it to any future myth-correction, not just lifespan.

Remaining sourcing risk: **20 quotations attributed to Gettings (1965), West (1998), and Fincham (2005) have never been verified**, because those editions are in copyright and could not be text-searched. They are untouched and flagged in `editorial-backlog.md`. There is nothing to do about them without the books; the open question is editorial — whether to keep quoting sources the site cannot check. Every quotation-marked attribution to Cheiro or Benham covered by Batch 2C is now verified or corrected; this does not imply that every unquoted paraphrase elsewhere in the corpus has been independently source-checked.

Preceding implementation: on 2026-08-10 Remediation Batch 2A, Accessibility & UX Safety, added global skip navigation, shared focus-visible styling, main-content targets, focused text-contrast/opacity fixes, learner-facing alt text for Lines lesson Figures, larger practical lesson/header targets, accessible labels/status semantics for the Starter Guide and waitlist forms, a search browse fallback, `/learn` module-card headings, and a focused accessibility audit.

Known follow-up: after explicit approval during Batch 2A, `npm audit --omit=dev` completed and reported 4 production vulnerabilities: 1 low, 1 moderate, and 2 high. The remaining fix path is `npm audit fix --force`, which would install Astro 7.2.0 and sharp 0.35.3 as a breaking upgrade path. Do not force that migration without explicit approval.

Key current implementation facts are summarized in `CURRENT_STATE.md` and `ARCHITECTURE.md`; verify source before relying on them for a change.

## Immediate next action
Await the user's decisions on `docs/audits/CURRICULUM_AUDIT_2026-08.md` §18, or
their next Palmistry Path objective. Do not begin any curriculum implementation
without those approvals — in particular, do not reorder modules, add lessons, or
change the mount count on the strength of the audit alone. Start the next task
from a clean context if possible (`/clear`), reconstructing from Git plus
targeted canonical docs rather than chat history.
