# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Resolve the documented life-line empirical-evidence sourcing gap by auditing the lifespan-testing claims in the current Life Line lesson and companion article, then make only the bounded source-safe corrections needed so every scientific/testing assertion is accurately supported and traceable under Palmistry Path's editorial policy.

## Revision note
Revision 1 correctly verified and cited the 1974, 1990, and 2019 studies, but Director review found one freshness-dependent claim that is not safe in 2026: the article calls Lucas et al. (2019) the "most recent peer-reviewed study." Public evidence now includes at least 2025 lifeline/mortality or lifeline-forecasting papers, so that superlative was not established by the worker's source review. Revision 2 is limited to removing or accurately narrowing that freshness claim and making the nearby synthesis explicitly reflect the mixed three-study record already verified. Do not broaden into a literature review of the 2025 papers unless needed merely to avoid a false superlative.

## Authorized scope
1. Re-open only the empirical/testing discussion in `src/content/blog/beginner/life-line.md`, the corrected takeaway in `src/content/lessons/lines/04-life-line.mdx`, and directly related source-log/docs bookkeeping from revision 1.
2. Preserve the verified facts already established for Wilson & Mather (1974), Newrick, Affie & Corrall (1990), and Lucas, Dhugga & Henneberg (2019): 1974 found no significant correlation in 51 cadavers; 1990 found a significant association in 100 consecutive autopsies; 2019 found no significant correlation in 60 donated cadavers.
3. Remove or narrow the phrase `most recent peer-reviewed study` and any equivalent claim that 2019 is the latest study unless a comprehensive, traceable search actually establishes that claim as of 2026. The preferred bounded remedy is to avoid the freshness superlative.
4. Ensure summary language such as `the studies that have tested it find no reliable relationship` cannot be misread as claiming all studies were negative. A concise formulation may say that the limited published results are mixed and do not establish a reliable predictive relationship, provided that wording is supported by the three verified studies.
5. Do not add new palmistry interpretations, new health/lifespan doctrine, new scientific claims about the 2025 papers, or unrelated rewrites.
6. Update `docs/source-verification-log.md` / `docs/CURRENT_STATE.md` only if revision-1 wording there also needs the same correction.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, complete the v2C source-claim preflight from `.ai-ops/V2C_PILOT.md` against the final changed prose. In particular:
- re-check every freshness/superlative phrase (`latest`, `most recent`, `only`, `all`, `no other`, and equivalents);
- keep the three verified study outcomes separate before synthesizing them;
- do not convert two null findings and one positive finding into a claim of unanimous evidence;
- avoid vague `research shows` or `studies prove` language;
- preserve the separation between historical palmistry claims, empirical findings, and Palmistry Path policy.

## Acceptance criteria
- No unsupported claim remains that Lucas et al. (2019) is the most recent/latest peer-reviewed study.
- The empirical paragraph accurately states the mixed results of the three verified studies and does not imply unanimity.
- Any synthesis that says the evidence does not establish a reliable predictive relationship is clearly presented as a conclusion from this limited mixed record, not as a universal claim that every study is negative.
- The verified citations for Wilson & Mather (1974), Newrick et al. (1990), and Lucas et al. (2019) remain traceable and accurate.
- No new medical, deterministic, predictive-science, or palmistry-interpretation claim is introduced.
- Scope remains limited to this residual source-integrity issue and directly necessary bookkeeping.

## Verification
- Search touched files for `latest`, `most recent`, `only`, `all`, `no other`, `test`, `study`, `studies`, `evidence`, `reliable`, `correlation`, `significant`, `peer-reviewed`, `longevity`, `lifespan`, and inspect every material occurrence.
- Reconfirm the three retained study citations/results against traceable source evidence.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete revision-2 diff for source integrity and scope drift.

## Explicit no-change condition
Do not return `NO_CHANGE`: revision 1 contains the unsupported freshness superlative identified above, so a bounded wording correction is required.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r2.json`, commit it on the existing or matching pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 2
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR 40 for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry

For `READY_FOR_REVIEW`, push the bounded revision to the existing PP-RELAY-024 Relay branch/PR #40 and update the PR footer to `RELAY_TASK_REVISION: 2`. For non-change terminal outcomes, push the result artifact and do not create a dummy PR.

## Result
Stop after producing the durable revision-2 result, pushing the Relay branch, and updating PR #40 only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.