# Active Task

Status: INACTIVE

## Last completed (2026-09-03)
Visual refinement pass on `feat/visual-golden-slice`: `BrandMark` replaces the circular emblem; generated palm atlas (46 plates) plus in-flow plates in every lesson and article; `PageOpening` on all secondary pages. Not merged; owner review pending. See `docs/visual-system.md` and the 2026-09-03 changelog entry. Exact next action if approved: merge, then Open Graph images and Quick Start Guide 2.0 per the checklist.

## Previously completed (2026-09-02)
Visual golden slice on branch `feat/visual-golden-slice` — dark black/gold/purple system across homepage, Learn hub, module index, lesson template, guide page, blog layout, header/footer, plus generated mount diagram plates. Not merged; owner review pending. See `docs/visual-system.md` and the 2026-09-02 changelog entry. Exact next action if approved: propagate per the checklist in `docs/visual-system.md` (about, glossary, blog index, search, 404, legal pages), then Quick Start Guide 2.0.

## Previously completed
Remediation Batch 3D — The Thumb and the Fingers, plus the hand-shape lesson's
retitle and texture/flexibility fold-in (2026-08-13), on branch
`feat/curriculum-batch-3d-hand-structure`. Implemented under the new
feature-branch review gate: pre-draft/source plan, user-approved refinements,
implementation, self-review, validation, commit and push. **Merged into `main`
via PR #11**, along with Batches 3A–3C (PRs #8–#10) and the Technical
Remediation Wave (PR #12: accessible 404 page, expanded content-integrity
checks, homepage image WebP optimization) — confirmed on `main` as of
2026-08-16.

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
**Superseded 2026-08-18 (Relay PP-RELAY-014):** the curriculum reached the
approved **25-lesson target** with Relay PP-RELAY-008's *Combining What You
See* (2026-08-18), and Relay PP-RELAY-009 through PP-RELAY-012 (2026-08-18)
shipped `<Practice>` across Foundations, Lines, Mounts, and three of
Advanced's six lessons, plus `<Checkpoint>` across Foundations, Lines, and
Mounts — see `CURRENT_STATE.md` and `CHANGELOG.md`. Still outstanding: the
capstone body revision (the second worked reading), the Sun/Mercury
quote-fidelity rewrite in `advanced/01-minor-lines-overview.mdx`, and the
nails lesson, which remains a deliberate non-goal. The simian lesson's
module move (3E) was implemented (Relay PP-RELAY-005, 2026-08-17) —
see `CHANGELOG.md`.

## Open follow-ups carried out of this batch
- **No figure created.** Foundations has no designed image system by an existing
  recorded decision (`visual-assets-roadmap.md`), so the lesson ships without
  one. Spec if revisited: one plate in the Lines module's ornate register whose
  required discrimination is the thumb's two segments against the fingers' three.
- **Two of three open defects in `blog/beginner/thumb-meaning-palmistry.md` are
  now fixed** (Relay PP-RELAY-004, 2026-08-17, merged into `main` via PR #17):
  the will/logic
  framework no longer attributes Benham's naming to Cheiro (Cheiro's own
  second-phalange reading is now described as tact/diplomacy), and the
  unsupported "reaches to or beyond the first joint" thumb-length threshold was
  replaced with the same Benham base-segment landmark and setting caveat used in
  the Foundations thumb lesson. **The unresolved Gettings quotation remains**,
  explicitly out of scope for that task and still an open editorial-backlog
  item.

## Durable decisions
`DECISIONS.md` was not modified for curriculum content — the lesson, blog-split,
and 25-lesson decisions governing this batch were already recorded on 2026-08-11.
The **feature-branch review gate** was added to `AGENTS.md` and mirrored in
`CLAUDE.md`: agents may commit and push task branches without a separate approval
step; merging to `main` still requires explicit user review.

## Next action

**Superseded 2026-08-20 (Relay PP-RELAY-031).** Everything below is historical.
Batch 3F was closed by Relay PP-RELAY-029 and Batch 3E's Sun/Mercury item by
Relay PP-RELAY-031, both 2026-08-20, so no approved curriculum batch item is
outstanding and the `feat/curriculum-wave-3e-3f` branch has no remaining scope
to contribute. See `CURRENT_STATE.md`, `CHANGELOG.md`, and `AI_HANDOFF.md`.

The simian lesson's module move (3E) is **now implemented** as a fresh bounded
replay against `main` (Relay PP-RELAY-005, 2026-08-17), not by merging the
stale branch below. What remains of Batch 3E is **revising `advanced/01`** so
it teaches the sun and Mercury lines (source-fidelity-sensitive, still
unimplemented). Then **3F** — synthesis and practice: Combining What You See,
the capstone revision, `<Practice>`, and module `<Checkpoint>`s.

A branch named `feat/curriculum-wave-3e-3f` still exists on the remote
(unmerged, no PR opened) with 3E/3F progress, independently audited (Relay
PP-RELAY-003, 2026-08-17, revision 2) —
`docs/audits/CURRICULUM_WAVE_3E_3F_BRANCH_AUDIT_2026-08.md`. Its Simian Line
portion is now superseded by the PP-RELAY-005 replay above and should not be
pulled from the branch. Its remaining scope — the Sun/Mercury rewrite and all
3F work — is unaffected: the branch passes `build`/`content-audit`/`audit:all`
and merges cleanly against current `main` for curriculum/runtime files, but
five docs files (`ACTIVE_TASK.md`, `AI_HANDOFF.md`, `CHANGELOG.md`,
`CURRENT_STATE.md`, `ROADMAP.md`) produce real Git conflict markers, not just
narrative drift, and the new Cheiro/Benham quotations in
`advanced/01-minor-lines-overview.mdx` still need a source-fidelity spot-check
(no web access in the audit). The audit does not authorize merging the
branch.

Do not pull later batches forward. 3C and 3D are now merged (see above); apply
the same no-unprompted-merge discipline to whatever branch carries 3E/3F.
Start from a clean context.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
