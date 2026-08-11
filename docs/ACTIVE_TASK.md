# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 3A, Learning Path & Curriculum Audit (2026-08-11, revised the
same day after independent review), on branch
`audit/curriculum-learning-path-3a`. Audit and planning only — **no curriculum
change was implemented and none is authorized.** Nothing under `src/` was
touched.

Deliverable: `docs/audits/CURRICULUM_AUDIT_2026-08.md`.

## What the second pass changed
The first pass argued the curriculum should teach Mounts before Lines because the
reading procedure examines mounts first. That inference was wrong and is
retracted. Measured dependency runs the other way: the Mounts module carries 54
line references and four `##` sections that interpret line–mount relationships
(`mounts/02:74`, `05:24`, `06:26`, `07:47`), while the Lines module carries 22
mount references, all positional, and no sections — and `foundations/02:65`
already supplies the mount geography the Lines module needs. **The existing
module order is correct.** The six-module restructure is withdrawn.

A lean-curriculum test and an independent competency test cut the proposed new
lessons from 11 to 3. Target is now **25 core lessons in 4 modules** (KEEP 11,
MOVE 1, REVISE 10, MERGE 0, ADD 3), plus 4 optional/later lessons.

## P0 items
1. Line quality and markings — used across 9 lesson files, taught in none.
2. **`lines/06-simian-line.mdx:84` still asserts *ekaagra* as Hasta Samudrika
   Shastra doctrine**, framing Batch 2B corrected in the twin article
   (`blog/beginner/simian-line.md:43`). Same file states 1–3% at `:24` and `:34`,
   1–4% at `:106`. Recorded only — not fixed on this branch. Assigned to Batch
   3E; may be pulled forward as a micro-batch (decision D4).
3. Thumb and fingers absent (`phalan` → 0 hits) — one new lesson.
4. No worked example of a complete reading anywhere in 22 lessons.

## Blocking
Eight decisions in §17 require approval before any batch starts. D3 (the
seven-mounts/eight-regions model) touches paid-product copy. Recommended first
batch is 3B — labelling and the mount model, config and copy only — unless the
user pulls the simian correction forward first.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
