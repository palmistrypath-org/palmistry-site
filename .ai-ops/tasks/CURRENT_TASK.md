# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-010

## Revision
1

## Objective
Replay the already-audited, source-safe Batch 3F Practice treatment across the five Foundations lessons and add the already-audited end-of-module Checkpoint to the closing Active and Passive Hand lesson, without changing established palmistry content.

## Why this task is authorized
The approved Batch 3F scope includes stateless Practice wrappers for the existing lesson exercises plus module Checkpoints. `src/components/Practice.astro` is already on current `main`, and the independent 3E/3F branch audit classifies the remaining Foundations changes as mechanical Practice wrapping; it specifically verifies the checkpoint added to `foundations/04-active-and-passive-hand.mdx` only recaps material already established earlier in the Foundations module and introduces no new claims. PP-RELAY-009 successfully demonstrated the same audited Practice replay pattern in Advanced. This is a bounded next increment in the approved structured-learning direction.

## Authorized scope
1. Start from current `main`. Inspect the five current Foundations lesson files, `src/components/Practice.astro`, and the audited `feat/curriculum-wave-3e-3f` versions only as evidence.
2. Replay the audited `<Practice>` treatment in all five Foundations lessons around their existing closing hands-on/takeaway material. Preserve the underlying lesson text exactly except for mechanical import/markup changes.
3. Replay the audited Foundations module checkpoint only in the closing lesson `src/content/lessons/foundations/04-active-and-passive-hand.mdx`, including the existing `Checkpoint.astro` / `CheckpointItem.astro` components if they are not yet present on current `main` and only to the extent required by the audited implementation.
4. The checkpoint content must match the audited branch treatment and recap only material already taught earlier in the current Foundations module. Do not invent, expand, or reinterpret any palmistry teaching.
5. Preserve frontmatter, routes, ordering, titles, quotations, source attribution, related-content metadata, and indexability except purely mechanical component imports/markup required by the approved Practice/Checkpoint replay.
6. Update only canonical docs genuinely required by `AGENTS.md` for this shipped learning-structure increment.

## Editorial/source guardrails
- This task is learning-structure replay, not authorization for editorial rewriting.
- Do not change, add, remove, soften, strengthen, or reinterpret palmistry claims.
- Do not change quotations or source attribution.
- Treat `feat/curriculum-wave-3e-3f` as evidence only; do not merge, rebase, or cherry-pick it wholesale.
- If the current Foundations text has drifted so the audited checkpoint no longer strictly recaps established module material, return `HUMAN_REQUIRED` rather than improvising new checkpoint content.

## Explicit non-goals
- No Practice or Checkpoint work outside the Foundations module.
- No Lines, Mounts, or additional Advanced changes.
- No capstone body revision.
- No Sun/Mercury rewrite.
- No changes to Practice/Checkpoint visual design beyond objectively necessary current-main compatibility.
- No SEO/indexability, monetization, ads, email, dependency, deployment, or external-service changes.
- Do not merge the PR or choose the next task.

## Acceptance criteria
- All five Foundations lessons use the existing stateless Practice pattern around the same audited existing exercise/takeaway material.
- The closing Active and Passive Hand lesson contains the audited module checkpoint, using stateless presentational components and only recap material already established in Foundations.
- Lesson prose/frontmatter remains unchanged except required imports/markup and the exact already-audited checkpoint block.
- No new palmistry claims, interpretations, quotations, or source assertions are introduced.
- Routes, module ordering, schemas, and indexability remain unchanged.
- Final diff is bounded to Foundations lesson markup, any required audited Checkpoint component files, directly necessary canonical docs, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because MDX/component rendering changes.
- Run `git diff --check`.
- Inspect the generated Foundations lesson routes as practical, especially the closing module lesson, confirming Practice/Checkpoint disclosures are accessible/native and existing lesson text remains unchanged.
- Compare the relevant final diff against current `main` and the audited branch treatment.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-010-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-010-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-010`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-010-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-010]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
