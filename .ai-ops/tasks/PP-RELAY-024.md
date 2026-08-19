# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
4

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the Life Line empirical-evidence sourcing correction by removing the final unsupported inference between published life-line-length/lifespan studies and the older writers' formal year-dating schemes.

## Revision note
Revision 3 correctly changed the lesson's broad/unanimous testing summaries to a limited mixed-study record. Director review found one residual inference in `src/content/lessons/lines/04-life-line.mdx`: `the limited published testing on life-line length and lifespan does not support it`, where `it` refers to older writers' formal year-dating schemes. The verified studies test life-line length against lifespan; they do not directly test whether particular locations along the line correspond to particular ages/events. Revision 4 is limited to removing or narrowing that inference and directly necessary bookkeeping. Do not broaden the task.

## Authorized scope
1. Edit only the sentence in `src/content/lessons/lines/04-life-line.mdx` beginning `What this lesson will not have you do is count years along the line` plus directly necessary `docs/source-verification-log.md` / `docs/CURRENT_STATE.md` bookkeeping.
2. Preserve the verified three-study record: Wilson & Mather (1974), 51 cadavers, no significant correlation; Newrick, Affie & Corrall (1990), 100 consecutive autopsies, significant association; Lucas, Dhugga & Henneberg (2019), 60 donated cadavers, no significant correlation.
3. Do not claim those length-vs-lifespan studies directly validate or invalidate the historical year-dating schemes.
4. Preserve the historical fact that older writers used formal dating schemes and Palmistry Path's editorial policy that this lesson does not teach lifespan/year prediction.
5. Prefer a clean separation such as: older writers used formal dating schemes; this lesson does not teach them. If empirical context is retained nearby, scope it only to life-line length vs. lifespan.
6. Do not add new studies, historical claims, palmistry meanings, health/lifespan doctrine, or unrelated rewrites.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, complete the v2C source-claim preflight from `.ai-ops/V2C_PILOT.md` against the final changed prose. Re-check every empirical/testing statement in the touched paragraph for what the cited studies actually tested, and ensure no evidence is used to support a different claim by implication.

## Acceptance criteria
- The lesson no longer implies that life-line-length/lifespan studies directly tested or disproved the historical year-dating schemes.
- The limited three-study record remains accurately represented as mixed and not establishing a reliable relationship between line length and lifespan.
- Historical palmistry claims, empirical findings, and Palmistry Path teaching policy remain clearly separated.
- No new medical, deterministic, predictive-science, or palmistry-interpretation claim is introduced.
- Scope remains limited to the one residual inference and directly necessary bookkeeping.

## Verification
- Search the touched lesson for `test`, `testing`, `study`, `studies`, `evidence`, `support`, `dating`, `years`, `predict`, `lifespan`, and `length of life`; inspect every material occurrence.
- Reconfirm that the retained three studies concern life-line length/lifespan rather than formal line-position dating schemes.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete revision-4 diff for source integrity and scope drift.

## Explicit no-change condition
Do not return `NO_CHANGE`: the residual evidence-to-dating-scheme inference requires bounded correction.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r4.json`, commit it on the existing/matching pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 4
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR 40 for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry

For `READY_FOR_REVIEW`, push the bounded revision to the existing PP-RELAY-024 Relay branch/PR #40 and update the PR footer to `RELAY_TASK_REVISION: 4`. For non-change terminal outcomes, push the result artifact and do not create a dummy PR.

## Result
Stop after producing the durable revision-4 result, pushing the Relay branch, and updating PR #40 only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.