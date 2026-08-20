# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
7

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the Life Line evidence-sourcing correction by removing the residual anonymous modern-practice consensus wording that revision 6's own cumulative preflight identified but incorrectly treated as out of scope. Preserve the verified mixed three-study record and all already-corrected evidence boundaries.

## Revision note
Revision 6 correctly fixed the remaining evidence-to-interpretation and overbroad empirical conclusions. Director review of the cumulative PR found one final acceptance mismatch: the result preflight explicitly notes that phrases such as `Modern practitioners read it instead as marking...` and `Contemporary practitioners read it as marking...` remain. The revision-6 packet expressly required that directly related modern-practice wording use named sources or Palmistry Path policy rather than unsupported broad consensus framing. Revision 7 is limited to those residual short-line/break modern-consensus phrases and directly equivalent wording in the same passages.

## Authorized scope
1. In `src/content/blog/beginner/life-line.md`, narrowly replace the directly related anonymous `Modern practitioners...` short-line wording with either accurately named later sources already supported by the repository or explicit Palmistry Path editorial framing. Do not create a broader consensus claim.
2. In `src/content/lessons/lines/04-life-line.mdx`, narrowly replace the directly related anonymous `In contemporary practice...` / `Contemporary practitioners...` short-line or break wording with accurately named supported sources or explicit Palmistry Path editorial framing.
3. Inspect directly equivalent `modern practice`, `modern practitioners`, `contemporary practice`, `contemporary practitioners`, `some writers`, or equivalent anonymous-authority wording in those short-line/break passages only. Correct it when it functions as an unsupported consensus claim.
4. Preserve unchanged the verified study record: Wilson & Mather (1974), 51 cadavers, no significant correlation; Newrick, Affie & Corrall (1990), 100 consecutive autopsies, significant association; Lucas, Dhugga & Henneberg (2019), 60 donated cadavers, no significant correlation.
5. Preserve accurate Cheiro/Benham historical attribution and Palmistry Path's policy not to predict lifespan, illness, injury, or death.
6. Do not add studies, meanings, health doctrine, prevalence claims, combination readings, or unrelated rewrites. Do not broaden into a general audit of every traditional interpretation in the files.
7. Update only directly necessary `docs/source-verification-log.md` / `docs/CURRENT_STATE.md` bookkeeping.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, inspect the cumulative PR and verify:
- no anonymous `modern literature`, `modern practitioners`, `contemporary practitioners`, `modern practice`, `contemporary practice`, `some writers`, or equivalent broad consensus wording remains in the directly related short-line/break lifespan-evidence passages unless directly grounded;
- named later-source positions are used only where repository evidence supports those authors;
- the three-study evidence remains scoped only to life-line length versus lifespan and is not used to validate transition/break meanings;
- historical doctrine, empirical findings, named-source positions, and Palmistry Path editorial policy remain distinct;
- no new prevalence, scientific, medical, deterministic, or palmistry-meaning claim is introduced.

## Acceptance criteria
- The residual anonymous modern-practice consensus phrases identified above are removed, narrowed, or replaced by supported named attribution/site policy.
- No directly related broad modern-consensus wording remains in the short-line/break passages.
- The verified three-study record and its mixed conclusion remain accurate and unchanged.
- The lifespan studies are not presented as validating short-line or break transition meanings.
- No new source-integrity problem or scope drift is introduced.

## Verification
- Search both touched files for `modern literature`, `modern practice`, `modern practitioner`, `contemporary practice`, `contemporary practitioner`, `some writers`, `experts`, `consensus`, `evidence`, `studies`, `transition`, and `break`; inspect material occurrences in the directly related short-line/break passages.
- Inspect cumulative `main...HEAD`, not only revision 7.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.

## Explicit no-change condition
Do not return `NO_CHANGE`: cumulative review identified residual anonymous consensus wording that violates the revision-6 acceptance contract.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r7.json`, commit it on the existing/matching pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`. Non-change terminal outcomes do not require a dummy PR.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 7
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR 40 for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry

For `READY_FOR_REVIEW`, push the bounded revision to the existing PP-RELAY-024 Relay branch/PR #40 and update the PR footer to `RELAY_TASK_REVISION: 7`.

## Result
Stop after producing the durable revision-7 result, pushing the Relay branch, and updating PR #40 only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.