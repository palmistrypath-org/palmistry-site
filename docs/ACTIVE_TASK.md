# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 3C — Line Quality and Markings (2026-08-11), on branch
`feat/curriculum-batch-3c-line-quality`. Implemented under the `AGENTS.md`
article approval gate: pre-draft report, user approval, implementation, second
approval, then commit.

## What shipped
- **New lesson.** `src/content/lessons/lines/line-quality-and-markings.mdx`,
  route `/learn/lines/line-quality-and-markings`, `order: 1` — now the first
  lesson of the Lines module. It teaches the observational vocabulary every line
  shares: depth as a continuum, clarity as a separate axis, relative rather than
  absolute depth, clean/chained/broken continuity, clean versus overlapping
  breaks, forks versus branches, islands, and parallel/support lines. Its
  competency is description before interpretation.
- **Core curriculum is now 23 lessons.** The Lines module has 7.
- **No URL changed and no file was renamed.** Lesson routes come from the
  filename, display order from the `order` frontmatter — they are independent.
  The new lesson took an unnumbered filename plus `order: 1`; `lines/01`–`06`
  incremented to 2–7. The 45 inbound links to existing Lines routes are intact.
  `order: 0` is not usable: the module index renders `order` as "Lesson N".
- **Subtractive revisions to `lines/01`–`05`.** The generic depth/faint/chained
  definitions, the relative-depth rule, and the generic break, fork, branch, and
  parallel-line definitions were removed from the four major-line lessons, which
  had quadruplicated them. Each now applies the shared vocabulary rather than
  re-deriving it. `lines/01` also had two statements corrected that became false
  once a lesson preceded it. Net 30 insertions, 36 deletions.
- **Line-specific historical material preserved in full**, including Benham's
  nervous-versus-muscular vitality distinction, the Line of Mars quotations, the
  classical-versus-modern life-line break discussion, and the Batch 2B lifespan
  corrections. A brief physical definition of a tasselled ending was added inside
  the existing Benham passage in `lines/04` without softening the claim.
- **`lines/06-simian-line.mdx` changed in frontmatter `order` only.**

## Islands — the source decision that governs this lesson
Taught as form → verified historical reading → Palmistry Path policy. The Cheiro
(*Palmistry for All*, 1916) and Benham (*The Laws of Scientific Hand Reading*,
1900) health readings are quoted exactly from the Batch 2C-verified record and
are **not** sanitised; the lesson says plainly that Benham is describing health.

The site's own boundary is stated separately as a modern position resting on
evidence. Critically, **no invented modern universal meaning replaces the
historical one.** There is no comparably sourced modern symbolic reading for
islands, and the lesson says so rather than manufacturing one: what replaces the
health claim is method — which line, where along it, how large, the surrounding
line's condition, nearby features, and the other hand. Preserve that asymmetry in
any future edit. Do not let a generic substitute meaning drift back in.

## Not implemented — do not assume otherwise
The curriculum is **23 lessons, not 25**. Still outstanding: The Thumb and the
Fingers (3D), Combining What You See (3F), the `<Practice>` and `<Checkpoint>`
components, the second worked reading, the nails lesson, and the simian lesson's
module move (3E).

## Open follow-ups carried out of this batch
- **Island diagram — visual follow-up, not created.** The repo has no island
  image. A hand-built schematic SVG was assessed and declined: the Lines module's
  figures are ornate generated plates (dark ground, gold linework, hand outlines,
  ornamental frames), and a plain schematic would introduce a conflicting visual
  register as the module's *first* figure. The new lesson ships with no figures
  and teaches the island form in prose by contrast against fork, support line,
  and break. Spec if revisited: one plate showing an island (splits, encloses an
  elongated space, rejoins) beside a fork (splits, no rejoin) and a parallel line
  (alongside, encloses nothing).
- **Simian generic duplication — deferred to 3E.** `lines/06-simian-line.mdx:65`
  still carries a generic chained/faint definition the new lesson now duplicates.
  Batch 3C was explicitly order-only for that file. Fold the cleanup into 3E when
  the lesson moves modules.

## Durable decisions
`DECISIONS.md` was not modified. No new durable decision emerged — the lesson,
blog-split, and curriculum decisions governing this batch were already recorded
on 2026-08-11.

## Next action
**Batch 3D — The Thumb and the Fingers**, plus folding texture and flexibility
into the retitled hand-shape lesson. Then:
- **3E** — Module 4 rebuild: the simian move (and its generic-quality cleanup),
  and revising `advanced/01` so it teaches the sun and Mercury lines.
- **3F** — Synthesis and practice: Combining What You See, the capstone revision,
  `<Practice>`, and module `<Checkpoint>`s.

Do not pull later batches forward. Start from a clean context.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
