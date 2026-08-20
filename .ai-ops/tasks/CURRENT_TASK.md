# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
5

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the Life Line evidence-sourcing correction by removing the remaining broad inference that the verified mixed three-study record itself “rejects” the historical lifespan claim, and by narrowing directly related anonymous modern-literature consensus wording in the already-touched empirical discussion.

## Revision note
Revision 4 correctly separated the historical year-dating schemes from studies that only tested life-line length versus lifespan. Director review of the cumulative PR found two residual article statements that still overstate what a mixed record can establish: `What rejects it is the evidence above` and `What has not survived is the claim itself ... the modern practitioner literature ... rejects the lifespan mapping`. The cumulative lesson/article also uses broad `modern literature` language where named sources are available. Revision 5 is a final bounded cleanup of those directly related evidence/consensus statements only.

## Authorized scope
1. In `src/content/blog/beginner/life-line.md`, revise only the empirical-conclusion paragraph immediately after `## A note on the empirical question` and the FAQ answer `Does the life line predict how long I will live?` as needed to:
   - state that the three verified studies are mixed and do not establish a reliable predictive relationship;
   - avoid saying that the mixed evidence itself “rejects” or disproves the historical claim;
   - replace anonymous/broad `modern practitioner literature` consensus framing with named-source or Palmistry Path policy wording already supported in the repository.
2. In `src/content/lessons/lines/04-life-line.mdx`, if directly necessary for consistency, narrow only the sentence beginning `The modern literature broke with that` so it refers to the named later sources used by the lesson rather than implying comprehensive modern consensus.
3. Preserve the verified three-study record unchanged: Wilson & Mather (1974), 51 cadavers, no significant correlation; Newrick, Affie & Corrall (1990), 100 consecutive autopsies, significant association; Lucas, Dhugga & Henneberg (2019), 60 donated cadavers, no significant correlation.
4. Preserve the historical fact that Cheiro/Benham used lifespan/year-dating readings and Palmistry Path's editorial policy that it does not teach lifespan prediction.
5. Do not add new studies, palmistry meanings, health/lifespan doctrine, modern-practice prevalence claims, or unrelated rewrites.
6. Update only directly necessary `docs/source-verification-log.md` / `docs/CURRENT_STATE.md` bookkeeping.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, complete the v2C source-claim preflight against the final cumulative changed prose. Specifically verify that:
- a mixed evidence record is described as not establishing a reliable predictive relationship, not as disproving/rejecting the historical claim;
- no anonymous `modern literature`, `modern practitioners`, `some writers`, or equivalent consensus wording remains in the directly touched empirical passages unless directly grounded;
- historical palmistry claims, empirical findings, named later-source positions, and Palmistry Path editorial policy remain clearly separated.

## Acceptance criteria
- The cumulative PR no longer says or implies that the verified mixed three-study record disproves or “rejects” the historical lifespan claim.
- Directly touched modern-practice wording uses named sources or site-policy language rather than unsupported broad consensus framing.
- The three verified study results remain accurate and unchanged.
- Historical doctrine, empirical findings, and Palmistry Path policy are clearly separated.
- No new medical, deterministic, predictive-science, prevalence, or palmistry-interpretation claim is introduced.
- Scope remains limited to these residual evidence/consensus statements and necessary bookkeeping.

## Verification
- Search the touched article/lesson passages for `reject`, `disprove`, `survived`, `modern literature`, `modern practitioner`, `studies`, `evidence`, `reliable`, `predict`, `lifespan`, and `length of life`; inspect every material occurrence in the directly touched passages.
- Reconfirm that the three retained studies concern life-line length versus lifespan and that their record is mixed.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete revision-5 diff and cumulative PR for source integrity and scope drift.

## Explicit no-change condition
Do not return `NO_CHANGE`: the residual overstatement/consensus wording requires bounded correction.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r5.json`, commit it on the existing/matching pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 5
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR 40 for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry

For `READY_FOR_REVIEW`, push the bounded revision to the existing PP-RELAY-024 Relay branch/PR #40 and update the PR footer to `RELAY_TASK_REVISION: 5`. For non-change terminal outcomes, push the result artifact and do not create a dummy PR.

## Result
Stop after producing the durable revision-5 result, pushing the Relay branch, and updating PR #40 only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.