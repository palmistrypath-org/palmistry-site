# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-004

## Revision
1

## Objective
Correct the two already-documented, source-verified thumb-article defects in `src/content/blog/beginner/thumb-meaning-palmistry.md` so the article no longer misattributes Benham's will/logic framework to Cheiro and no longer teaches an unsupported thumb-length threshold.

## Why this task is authorized
`docs/ACTIVE_TASK.md` records these as open editorial-backlog defects carried out of Remediation Batch 3D. The governing source decisions are already durable and source-verified in the repository: (1) will/logic are Benham's names, not Cheiro's; Cheiro's second-phalange treatment is tact/diplomacy, and (2) Benham's ordinary-thumb landmark is about the middle of the index finger's base segment, with setting as a confounder; Cheiro supplies no equivalent landmark. This is bounded source-safe cleanup, not new palmistry research or curriculum invention.

## Authorized scope
- Edit only the minimum article passages needed to correct those two defects.
- Correct wording that attributes the will/logic framework to Cheiro as well as Benham. Preserve the article's educational framing and any verified Cheiro quotation already present; do not imply Cheiro used Benham's terminology.
- Remove the unsupported statement that a long thumb is defined by reaching "to or beyond the first joint" of the index finger.
- If a concrete observational landmark is needed for readability, use only the already-approved Benham landmark recorded in `docs/ACTIVE_TASK.md` and the existing Foundations thumb lesson, including the caveat that high/low thumb setting can confound length comparison. Do not invent or generalize beyond that evidence.
- Make only directly necessary nearby wording adjustments so the corrected paragraphs read coherently.
- Update canonical docs only if required by `AGENTS.md` for this meaningful editorial correction; keep any doc update concise and factual.

## Explicit non-goals
- Do not resolve or rewrite the separate Fred Gettings quotation/source-fidelity issue recorded in `docs/ACTIVE_TASK.md`.
- Do not perform a broad rewrite of the thumb article.
- Do not introduce new palmistry meanings, citations, quotations, source claims, traditions, or interpretive frameworks.
- Do not change lesson/curriculum files, site code, routes, schemas, SEO strategy, monetization, visual design, dependencies, deployment, or Relay control-plane files except the required durable result artifact on the worker branch.
- Do not use or merge the stale `feat/curriculum-wave-3e-3f` branch.
- Do not merge the PR or choose the next task.

## Acceptance criteria
- The article no longer presents will/logic as terminology shared by Cheiro and Benham; Benham attribution is accurate and Cheiro is not falsely credited with that framework.
- The unsupported "reaches to or beyond the first joint" thumb-length threshold is removed.
- Any replacement length landmark is limited to the repository-approved Benham description and caveat.
- The unresolved Gettings quotation remains explicitly outside this task rather than being guessed at.
- No unrelated article sections or product/runtime behavior change.
- Final prose remains aligned with Palmistry Path's educational, non-predictive editorial guardrails.

## Verification
- Inspect the relevant source decisions in `docs/ACTIVE_TASK.md` and the current Foundations thumb lesson before editing; do not rely on memory alone.
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `git diff --check`.
- Review the final diff for source drift, accidental new claims, scope expansion, broken internal links, and unintended metadata changes.

## v2B durable-result contract — REQUIRED
Because the configured Claude cloud Routine may predate Relay v2B, this task packet explicitly requires a durable terminal result.

Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-004-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-004-...` branch, and use one of these terminal results: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-004`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit the article/docs changes plus the result artifact, push one `claude/relay-PP-RELAY-004-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-004]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is therefore valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.