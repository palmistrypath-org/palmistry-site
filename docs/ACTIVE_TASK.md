# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 3D — The Thumb and the Fingers, plus the hand-shape lesson's
retitle and texture/flexibility fold-in (2026-08-13), on branch
`feat/curriculum-batch-3d-hand-structure`. Implemented under the new
feature-branch review gate: pre-draft/source plan, user-approved refinements,
implementation, self-review, validation, commit and push. **Not merged.**

## What shipped
- **New lesson.** `src/content/lessons/foundations/thumb-and-fingers.mdx`, route
  `/learn/foundations/thumb-and-fingers`, `order: 4` — now the fourth lesson of
  Foundations. It teaches thumb length against a verified landmark, thumb
  setting, the two thumb sections, resting opening angle, tip-joint flexibility,
  the one-time planetary finger mapping, per-finger comparison landmarks, the
  base arch, resting spacing, and lean. Its competency is accurate structural
  description, with the finger→mount correspondence carried forward to Module 3.
- **Core curriculum is now 24 lessons.** Foundations has 5.
- **`foundations/03-hand-shapes.mdx` retitled** to *Hand Shape, Texture, and
  Flexibility* (route unchanged, duration 8→10) with a new section adding skin
  texture, consistency, and whole-hand flexibility.
- **No URL changed and no file was renamed.** The new lesson took an unnumbered
  filename plus `order: 4`; `04-active-and-passive-hand.mdx` moved to `order: 5`
  and its opening line went from "the last three lessons" to "the last four".
- **Bounded revisions elsewhere.** `foundations/02` had step three compressed, a
  thumb/finger step added (steps renumbered to seven), the "every major hand
  classification system" claim narrowed, "associations across traditions"
  removed, and the Sun/Apollo inversion corrected. `mounts/03-mount-of-jupiter`
  had one forward reference corrected. Both blog articles' `relatedLesson` were
  repointed. `src/consts.ts` module description updated.

## The source decisions that govern these lessons
Verified this batch against the primary texts (Gutenberg #20480; Internet Archive
`lawsscientifich00benhgoog`):

- **Thumb length is Benham's landmark alone.** Held against the side of the hand,
  a thumb of ordinary length reaches about the middle of the index finger's
  *base* segment — with Benham's own caveat that a low or high setting confounds
  the reading. **Cheiro gives no landmark.** Do not reintroduce the ambiguous
  "to or beyond the first joint" wording from the blog; it is in neither author.
- **Will and logic are Benham's names, not Cheiro's.** Benham adopted them "for
  brevity". Cheiro's second-phalange reading in *Palmistry for All* is tact and
  diplomacy. Attribute the framework to Benham alone.
- **Cheiro's thumb quotation is verified verbatim** and used once, framed as his
  weighting of the feature rather than a fact about people.
- **The three-move framing is load-bearing**: proportion → historical reading →
  site boundary, with **no modern replacement meaning installed**. Preserve that
  asymmetry, exactly as with islands in 3C.
- **Finger prominence is not raw length.** The middle finger is longest on almost
  every hand; prominence means departure from Benham's per-finger landmarks.

## The structural rule in the hand-shape lesson
The elemental classification rests on **two inputs and only two** — palm
proportion and finger length relative to palm. Texture, consistency, and
flexibility were added *after* the four types as a separate qualifying layer that
never changes a hand's type, and the lesson states this three times. Do not let
them drift into the classification.

Four related-but-distinct ideas must stay separate across the site: whole-hand
flexibility (`foundations/03`), thumb-tip flexibility (the new lesson), line
quality (`lines/line-quality-and-markings`), and mount firmness (Mounts module).

## Not implemented — do not assume otherwise
The curriculum is **24 lessons, not 25**. Still outstanding: Combining What You
See (3F), the `<Practice>` and `<Checkpoint>` components, the second worked
reading, the simian lesson's module move (3E), and the nails lesson, which
remains a deliberate non-goal.

## Open follow-ups carried out of this batch
- **No figure created.** Foundations has no designed image system by an existing
  recorded decision (`visual-assets-roadmap.md`), so the lesson ships without
  one. Spec if revisited: one plate in the Lines module's ornate register whose
  required discrimination is the thumb's two segments against the fingers' three.
- **Three open defects in `blog/beginner/thumb-meaning-palmistry.md`**, none
  fixed here because blog rewrites were out of scope: the will/logic framework is
  misattributed to Cheiro as well as Benham (line 31); a thumb-length threshold
  appears that is in neither author (line 35); and the unresolved Gettings
  quotation remains (line 29). These are editorial-backlog items.

## Durable decisions
`DECISIONS.md` was not modified for curriculum content — the lesson, blog-split,
and 25-lesson decisions governing this batch were already recorded on 2026-08-11.
The **feature-branch review gate** was added to `AGENTS.md` and mirrored in
`CLAUDE.md`: agents may commit and push task branches without a separate approval
step; merging to `main` still requires explicit user review.

## Next action
**Batch 3E — Module 4 rebuild**: the simian lesson's module move (taking the
generic chained/faint cleanup at `lines/06:65` with it), and revising
`advanced/01` so it teaches the sun and Mercury lines. Then **3F** — synthesis and
practice: Combining What You See, the capstone revision, `<Practice>`, and module
`<Checkpoint>`s.

Do not pull later batches forward. Do not merge 3C or 3D without user review.
Start from a clean context.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
