# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-016

## Revision
1

## Objective
Run the second low-risk Relay fast-lane smoke step to prove automatic task-to-task chaining after the prior Relay PR merges.

## Authorized scope
1. Create exactly `.ai-ops/archive/fastlane-smoke-016.txt` containing a short line that identifies `PP-RELAY-016` and states that the chained fast-lane smoke step completed.
2. Create the required durable result artifact `.ai-ops/results/PP-RELAY-016-r1.json`.
3. Open a Relay PR using the normal v2B contract.

## Guardrails
- Fast Lane: ELIGIBLE — preauthorized low-risk smoke task.
- Do not modify any file other than the two authorized paths above.
- Do not modify `state.json`, `fastlane.json`, `CURRENT_TASK.md`, workflows, application code, content, docs, dependencies, configuration, deployment, or external services.
- Do not merge the PR and do not select subsequent work.

## Acceptance criteria
- The marker file exists and identifies PP-RELAY-016.
- The result artifact reports `READY_FOR_REVIEW` with `human_action: null`.
- The PR diff contains exactly the marker file and the result artifact.

## Verification
- Run `git diff --check`.
- Confirm changed paths are exactly `.ai-ops/archive/fastlane-smoke-016.txt` and `.ai-ops/results/PP-RELAY-016-r1.json`.

## v2B durable-result contract — REQUIRED
Create `.ai-ops/results/PP-RELAY-016-r1.json` with `schema_version: 1`, `task_id: PP-RELAY-016`, `revision: 1`, one allowed terminal `result`, a concise `summary`, `pr_number`, `verification`, and `human_action`. For success use `READY_FOR_REVIEW` and `human_action: null`.

## Result
Stop after producing the durable result and opening/updating the Relay PR. Do not merge and do not select subsequent work.
