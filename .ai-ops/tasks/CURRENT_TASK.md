# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-012

## Revision
1

## Objective
Replay the already-audited, source-safe Batch 3F Practice treatment across the eight current Mounts lessons and add the already-audited end-of-module Checkpoint to the closing Mount of Mars lesson, without changing established palmistry content.

## Why this task is authorized
The approved Batch 3F direction includes stateless Practice wrappers around existing lesson exercises and end-of-module Checkpoints. Foundations and Lines have now shipped this same bounded learning-structure pattern through PP-RELAY-010 and PP-RELAY-011. Current `main` contains eight Mounts lessons from `01-mounts-overview.mdx` through `08-mount-of-mars.mdx`. The audited `feat/curriculum-wave-3e-3f` branch may be used only as evidence for the previously reviewed Mounts Practice/Checkpoint treatment.

## Authorized scope
1. Start from current `main`. Inspect all eight current Mounts lesson files, existing `Practice.astro`, `Checkpoint.astro`, and `CheckpointItem.astro`, and the audited branch versions only as evidence.
2. Replay only the audited `<Practice>` treatment around each Mounts lesson's existing closing hands-on/takeaway material. Preserve underlying lesson prose exactly except for mechanical imports/markup.
3. Replay the audited Mounts module checkpoint only in the closing lesson `src/content/lessons/mounts/08-mount-of-mars.mdx`, using the existing stateless Checkpoint components.
4. Before adding the checkpoint, verify every prompt/answer strictly recaps material already established in the current Mounts module and matches the audited branch treatment. If that cannot be established mechanically from repository evidence, return `HUMAN_REQUIRED` rather than improvising.
5. Preserve frontmatter, routes, ordering, titles, quotations, source attribution, related-content metadata, and indexability except purely mechanical component imports/markup required by this replay.
6. Update only canonical docs genuinely required by `AGENTS.md` for this shipped learning-structure increment.

## Editorial/source guardrails
- This is learning-structure replay, not authorization for editorial rewriting.
- Do not change, add, remove, soften, strengthen, or reinterpret palmistry claims.
- Do not change quotations or source attribution.
- Treat `feat/curriculum-wave-3e-3f` as evidence only; do not merge, rebase, or cherry-pick it wholesale.
- Do not touch the separately source-sensitive Sun/Mercury rewrite or any other unresolved source-framing item.

## Explicit non-goals
- No Practice or Checkpoint work outside the Mounts module.
- No Foundations, Lines, or Advanced changes.
- No capstone body revision.
- No Sun/Mercury editorial rewrite.
- No changes to Practice/Checkpoint visual design.
- No SEO/indexability, monetization, ads, email, dependency, deployment, or external-service changes.
- Do not merge the PR or choose the next task.

## Acceptance criteria
- All eight current Mounts lessons use the existing stateless Practice pattern around the same audited existing exercise/takeaway material.
- `mounts/08-mount-of-mars.mdx` contains the audited Mounts module checkpoint using existing stateless presentational components and only recap material already established in Mounts.
- Lesson prose/frontmatter remains unchanged except required imports/markup and the exact already-audited checkpoint block.
- No new palmistry claims, interpretations, quotations, or source assertions are introduced.
- Routes, module ordering, schemas, and indexability remain unchanged.
- Final diff is bounded to Mounts lesson markup, directly necessary canonical docs, and the Relay result artifact.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` because MDX/component rendering changes.
- Run `git diff --check`.
- Inspect generated Mounts lesson routes as practical, especially Mount of Mars, confirming Practice/Checkpoint disclosures are accessible/native and existing lesson text remains unchanged.
- Compare the relevant final diff against current `main` and the audited branch treatment.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-012-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-012-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-012`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-012-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-012]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
