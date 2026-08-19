# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the Life Line empirical-evidence sourcing correction by fixing the two residual testing summaries in `src/content/lessons/lines/04-life-line.mdx` so the lesson no longer implies a uniformly negative study record or a broader testing conclusion than the verified evidence supports.

## Revision note
Revision 2 correctly removed the unsupported `most recent peer-reviewed study` claim and corrected the article plus closing lesson takeaway to describe the verified three-study record as mixed. Director review found two residual scientific/testing summaries earlier in the same lesson: (1) `the studies ... find no reliable relationship`, which can imply all verified studies were negative even though Newrick et al. (1990) found a significant association; and (2) `the practice has not survived testing`, which is broader than the verified evidence. Revision 3 is limited to correcting those two residual summaries and directly necessary bookkeeping. Do not broaden the task.

## Authorized scope
1. Edit only the two residual empirical/testing sentences in `src/content/lessons/lines/04-life-line.mdx` plus directly necessary `docs/source-verification-log.md` / `docs/CURRENT_STATE.md` bookkeeping.
2. Preserve the verified study record: Wilson & Mather (1974), 51 cadavers, no significant correlation; Newrick, Affie & Corrall (1990), 100 consecutive autopsies, significant association; Lucas, Dhugga & Henneberg (2019), 60 donated cadavers, no significant correlation.
3. Replace/narrow the sentence ending `the studies covered in the life line article find no reliable relationship between the line and how long anyone lives` so it accurately reflects a limited mixed record that does not establish a reliable predictive relationship.
4. Replace/narrow `the practice has not survived testing` so it does not claim a comprehensive or unanimous empirical verdict. Keep Palmistry Path's policy that this lesson does not teach lifespan prediction.
5. Do not add new studies, new historical claims, new palmistry meanings, health/lifespan doctrine, or unrelated rewrites.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, complete the v2C source-claim preflight from `.ai-ops/V2C_PILOT.md` against the final changed prose. Re-check all empirical/testing statements in the touched lesson for unanimity, comprehensiveness, freshness, prevalence/consensus, vague authority, and claim-type separation.

## Acceptance criteria
- The lesson no longer says or implies that all verified studies found no relationship.
- The lesson no longer says the lifespan-dating practice categorically `has not survived testing` unless that exact breadth is established by approved evidence.
- The limited three-study record is accurately represented as mixed and not establishing a reliable predictive relationship.
- Historical palmistry claims, empirical findings, and Palmistry Path teaching policy remain clearly separated.
- No new medical, deterministic, predictive-science, or palmistry-interpretation claim is introduced.
- Scope remains limited to the two residual sentences and directly necessary bookkeeping.

## Verification
- Search the touched lesson for `test`, `testing`, `study`, `studies`, `evidence`, `reliable`, `correlation`, `significant`, `predict`, `lifespan`, `length of life`, `latest`, `most recent`, `all`, `only`, `modern literature`, and inspect every material occurrence.
- Reconfirm the retained three-study facts against the already-verified source record.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete revision-3 diff for source integrity and scope drift.

## Explicit no-change condition
Do not return `NO_CHANGE`: the two residual lesson sentences identified above require bounded correction.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r3.json`, commit it on the existing/matching pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 3
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR 40 for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry

For `READY_FOR_REVIEW`, push the bounded revision to the existing PP-RELAY-024 Relay branch/PR #40 and update the PR footer to `RELAY_TASK_REVISION: 3`. For non-change terminal outcomes, push the result artifact and do not create a dummy PR.

## Result
Stop after producing the durable revision-3 result, pushing the Relay branch, and updating PR #40 only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.