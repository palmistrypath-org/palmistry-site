# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-024

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Resolve the documented life-line empirical-evidence sourcing gap by auditing the lifespan-testing claims in the current Life Line lesson and companion article, then make only the bounded source-safe corrections needed so every scientific/testing assertion is accurately supported and traceable under Palmistry Path's editorial policy.

## Why this task
The v2C pilot is starting from a clean 0/50 state. `docs/CURRENT_STATE.md` and the 3E/3F branch-readiness audit still flag the lesson takeaway phrase `it has not held up under testing` as an open legacy claim. Current `src/content/blog/beginner/life-line.md` now contains a more specific empirical section naming Newrick et al. (1990), Wilson and Mather (1974), and Lucas et al. (2019), while its source footer explicitly lists only Lucas et al. This is a bounded trust/source-integrity task and an appropriate first `SOURCE_SENSITIVE` v2C test because it does not require inventing any palmistry meaning.

## Authorized scope
1. Inspect `src/content/lessons/lines/04-life-line.mdx` and `src/content/blog/beginner/life-line.md` for concrete empirical/testing claims about life-line length, lifespan/longevity, or reliability.
2. Verify each named study/result and each summary phrase (`tested`, `testing`, `studies`, `evidence`, `reliable relationship`, `significant correlation`, `no correlation`, `peer-reviewed`, and equivalent) against approved/traceable source evidence available to the repository workflow.
3. Correct only what verification requires: add accurate source identification where a claim is supported but under-cited; narrow/remove a claim where support is insufficient; and keep the historical Cheiro/Benham claims distinct from modern empirical evidence and Palmistry Path policy.
4. Do not add new palmistry interpretations, new lifespan-reading doctrine, medical advice, or broader scientific claims.
5. Do not rewrite unrelated life-line variation content. If an adjacent sentence must change only to keep the corrected evidence paragraph coherent, keep the edit minimal.
6. Update `docs/CURRENT_STATE.md` and other canonical docs only as needed to close or accurately restate the existing documented open item.
7. If verifying a material study/result requires inaccessible paid/copyright source material or human source acquisition and the claim cannot be safely narrowed from available evidence, return `HUMAN_REQUIRED` rather than guessing.

## Source-sensitive preflight — REQUIRED
Before `READY_FOR_REVIEW`, complete the v2C source-claim preflight from `.ai-ops/V2C_PILOT.md` against the final changed prose. In particular:
- inspect every scientific/testing assertion for traceable evidence;
- do not convert a limited study result into a universal statement;
- do not infer consensus from a small study set;
- do not use vague authority such as `research shows` or `studies prove` without identifiable support;
- keep historical palmistry claims, empirical findings, and Palmistry Path editorial policy clearly separated;
- verify quotation fidelity for any quotation-marked source language touched by this task.

## Acceptance criteria
- Every concrete empirical/testing claim in the changed Life Line lesson/article is traceable to a source that actually supports the stated scope.
- Named studies are identified accurately enough for a reader/editor to trace them; source footer/citation treatment is internally consistent with the repository editorial policy.
- No unsupported `testing has shown`, `studies find`, consensus, prevalence, or universal reliability language remains in the touched evidence discussion.
- The final wording does not imply that palmistry has scientific predictive validity; it may accurately report historical palmistry claims and the results/limits of actual empirical tests.
- No new medical, lifespan-prediction, deterministic, or newly synthesized palmistry interpretation is introduced.
- The existing open-item documentation is closed or restated truthfully based on what was actually verified.
- Changes remain bounded to the evidence/sourcing issue plus required canonical-doc bookkeeping.

## Verification
- Compare the final lesson evidence language against the companion article's empirical section and the actual cited/verified sources, not merely against one another.
- Search touched files for `test`, `testing`, `study`, `studies`, `research`, `evidence`, `reliable`, `correlation`, `significant`, `peer-reviewed`, `longevity`, `lifespan`, `predict`, `modern`, `contemporary`, `most`, `many`, `generally`, `typically`, `consensus`, and inspect every material occurrence.
- Confirm source/footer details for every named scientific study retained.
- Run `npm run build`, `npm run content-audit`, `npm run audit:all`, and `git diff --check`.
- Inspect the complete final diff for source integrity and scope drift.

## Explicit no-change condition
Return `NO_CHANGE` only if independent source verification establishes that the current lesson/article claims are already accurate, adequately traceable under repository policy, and the documented open item is already obsolete without requiring a repository correction. If the only needed change is canonical-doc reconciliation of an already-resolved issue, make that bounded correction rather than returning `NO_CHANGE`.

## v2C durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-024-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-024-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 2
- `task_id`: `PP-RELAY-024`
- `revision`: 1
- `risk_class`: `SOURCE_SENSITIVE`
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `source_preflight`: completed compact v2C preflight object for source-sensitive changed work
- `human_action`: exact action only when applicable, otherwise `null`
- `execution`: truthful compact execution telemetry; do not invent model names, token counts, hidden reasoning, or subagent activity.

For `READY_FOR_REVIEW`, commit the bounded change plus result artifact, push the matching `claude/relay-PP-RELAY-024-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-024]` and matching revision-1 Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion.

## Result
Stop after producing the durable revision-1 result, pushing the Relay branch, and opening the single Relay PR only when the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.