# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
6

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the Life Line evidence-sourcing correction by making the cumulative lifespan-evidence framing internally consistent: the verified three-study record may support only that a reliable relationship between life-line length and lifespan has not been established, not that the historical claim has been disproved, that all modern literature/practitioners reject it, or that those studies validate a separate modern transition interpretation.

## Revision note
Revision 5 correctly removed the two specifically flagged rejection/anonymous-consensus statements and named Fincham, Gettings, and West in the directly touched passages. Cumulative Director review still found nearby statements in the same Life Line article/lesson that repeat the underlying problem: broad `has not held up` / `modern literature` / `contemporary practitioners` conclusions, and wording that says Palmistry Path follows the modern short-line or break interpretation `on the evidence` even though the verified studies test only life-line length versus lifespan and do not test transition readings or break meanings. Revision 6 is a bounded consistency cleanup of those directly related lifespan-evidence conclusions; do not broaden into a general rewrite of life-line meanings.

## Authorized scope
1. In `src/content/blog/beginner/life-line.md`, inspect and narrowly revise the directly related lifespan-evidence conclusion language, including materially equivalent occurrences of:
   - `Empirically, that reading has not held up`;
   - `What has changed is the modern literature` / broad modern-consensus wording;
   - `Palmistry Path follows the modern position` when its rationale is presented as empirical proof rather than site policy plus the limited mixed evidence;
   - `Palmistry Path follows the modern reading, on the evidence set out above` in the short-line section, because the lifespan studies do not validate the separate transition interpretation;
   - the closing/FAQ framing that says lifespan prediction `has not survived` / `has not held up` or that `contemporary practitioners` as a whole have moved away from it.
2. In `src/content/lessons/lines/04-life-line.mdx`, narrowly revise directly related evidence/consensus overstatements, especially:
   - the break section sentence claiming `the readings above have no demonstrated reliability, and the modern literature has abandoned them`, because the verified length-vs-lifespan studies do not directly test break-as-illness/death readings;
   - any nearby wording that presents the limited lifespan studies as empirical validation of a modern transition interpretation rather than only as insufficient support for reliable lifespan prediction.
3. Preserve the verified three-study record unchanged: Wilson & Mather (1974), 51 cadavers, no significant correlation; Newrick, Affie & Corrall (1990), 100 consecutive autopsies, significant association; Lucas, Dhugga & Henneberg (2019), 60 donated cadavers, no significant correlation.
4. Preserve accurate historical attribution to Cheiro/Benham and Palmistry Path's editorial policy that it does not teach lifespan, illness, injury, or death prediction.
5. Named later-source positions may be retained only where the repository/source record actually supports those named authors. Do not turn a few named sources into a comprehensive claim about `modern literature`, `contemporary practitioners`, or `modern practice`.
6. Do not add new studies, new palmistry meanings, new medical/health doctrine, new prevalence claims, or unrelated rewrites. Existing life-line interpretation material outside the directly related evidence/consensus problem is out of scope for this revision.
7. Update only directly necessary `docs/source-verification-log.md` / `docs/CURRENT_STATE.md` bookkeeping.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, complete the v2C source-claim preflight against the **cumulative PR**, not only the revision-6 hunk. Specifically verify that:
- every lifespan-evidence conclusion is scoped to what the three studies actually tested: life-line length versus lifespan;
- the mixed record is described as not establishing a reliable predictive relationship, not as disproving/rejecting the historical claim;
- the evidence is not used to validate the separate modern transition interpretation of a short or broken line;
- no broad anonymous `modern literature`, `contemporary practitioners`, `modern practitioners`, `some writers`, or equivalent consensus wording remains in the directly related lifespan-evidence passages unless directly grounded;
- historical doctrine, empirical findings, named-source positions, and Palmistry Path editorial policy remain clearly separated.

## Acceptance criteria
- The cumulative PR contains no directly related statement that the verified mixed three-study record `has disproved`, `rejected`, `has not survived`, or `has not held up` as a stronger empirical conclusion than the evidence supports.
- The limited lifespan studies are not cited as validation for modern short-line/break transition meanings or other palmistry interpretations they did not test.
- Directly related modern-practice wording uses named sources or explicit Palmistry Path policy rather than unsupported broad consensus framing.
- The three verified study results remain accurate and unchanged.
- Historical doctrine, empirical findings, named-source positions, and site policy are clearly separated.
- No new medical, deterministic, predictive-science, prevalence, or palmistry-interpretation claim is introduced.
- Scope remains limited to residual lifespan-evidence/consensus consistency and necessary bookkeeping.

## Verification
- Search both touched files for `held up`, `survived`, `reject`, `disprove`, `modern literature`, `modern practice`, `modern practitioner`, `contemporary practitioner`, `evidence`, `studies`, `reliable`, `predict`, `lifespan`, `length of life`, `transition`, `break`, and inspect every material occurrence in the directly related passages.
- Reconfirm that the three retained studies concern life-line length versus lifespan, not year-position dating, short-line transition meanings, or break meanings.
- Inspect the cumulative PR from `main...HEAD`, not only revision 6, for source integrity and internal consistency.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.

## Explicit no-change condition
Do not return `NO_CHANGE`: cumulative PR review identified residual overstatement/consensus/evidence-scope wording that requires bounded correction.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r6.json`, commit it on the existing/matching pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 6
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR 40 for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry

For `READY_FOR_REVIEW`, push the bounded revision to the existing PP-RELAY-024 Relay branch/PR #40 and update the PR footer to `RELAY_TASK_REVISION: 6`. For non-change terminal outcomes, push the result artifact and do not create a dummy PR.

## Result
Stop after producing the durable revision-6 result, pushing the Relay branch, and updating PR #40 only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.