# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 3B — Truthful Labelling, Mount Model, and Simian Correction
(2026-08-11), on branch `fix/curriculum-batch-3b`. Pushed, unmerged. Two commits:
the simian source-integrity correction, then the curriculum labelling, mount
model, and prerequisites implementation.

## What shipped
- **Simian (P0-2 closed).** `lines/06-simian-line.mdx` no longer asserts *ekaagra*
  as Hasta Samudrika Shastra doctrine; it carries the Batch 2B framing from the
  twin article. Prevalence reconciled to 1–3% throughout. The same stale
  attribution in `blog/beginner/heart-line.md` was corrected to match.
- **Mount model.** Seven planetary mounts across eight mount regions, Mars in two,
  Plain of Mars separate — applied across lessons, articles, glossary, guide,
  premium-guide, and the print reference. `mounts/01` explains the count once.
  A factual glossary error equating Outer Mars with the Plain of Mars was fixed.
- **Labelling.** Module 4 → "Minor Lines & Synthesis", Intermediate. Module 2 →
  "The Major Lines", Beginner, description no longer promises module 4 content.
  Mounts → Beginner. **No slug or URL changed.**
- **Order clarification.** `foundations/02` states that the course teaches lines
  before full mount assessment though a reading assesses mounts first.
- **Prerequisites removed** from all 22 lessons, the content schema, and
  `ARCHITECTURE.md`. Confirmed zero code consumers before deletion.

## Not implemented — do not assume otherwise
The curriculum is still **22 lessons**, not 25. Not done: the thumb and fingers,
line quality and markings, combining what you see, Practice and Checkpoint
components, the second worked reading, the nails lesson, and the simian lesson's
module move (Batch 3E).

## Durable decisions recorded
`DECISIONS.md` (2026-08-11) carries three new entries: the mount model; teaching
order may differ from the reading procedure; and "a lesson teaches the variable,
the blog covers the specific value" with the 25-lesson target.

## Next action
Batch 3C — add the three approved lessons under the `AGENTS.md` article approval
gate. Start from a clean context.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
