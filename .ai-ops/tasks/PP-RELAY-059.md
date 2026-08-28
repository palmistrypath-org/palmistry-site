# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-059

## Revision
2

## Risk Class
STANDARD

## Objective
Correct the revision-1 merge-gate design so it can actually function as a required GitHub merge protection without deadlocking legitimate Director-approved Relay merges. Preserve the proven v2B/v2C control plane and implement only the smallest additive/reversible correction.

## Revision history
- Revision 1 correctly identified the out-of-band merge path as direct/manual GitHub merge authority and proposed a required `relay-merge-gate` status check.
- Director review rejected revision 1 because the proposed `pull_request`-only workflow evaluates against the base copy of `state.json` before Director approval, but does not rerun when `MERGE_APPROVED` is later committed to `main`. If made required as proposed, a legitimate Relay PR could remain red forever after approval. The workflow also must expose the exact stable check/status context intended to be required by branch protection; do not assume the workflow filename or display name is the required-check context.

## Authorized scope
- Start from the useful revision-1 root-cause findings and invariant tests, but redesign only the narrow status-publication/trigger mechanism needed to make the protection operational.
- Ensure a Relay PR is non-authorized before Director approval and becomes authorized only after `state.json` on trusted `main` records `MERGE_APPROVED`, matching `approved_pr`, current task ID where applicable, and exact current PR head SHA.
- Ensure the authorization signal is attached to the PR head commit and can be refreshed when `state.json` changes on `main`; a PR-event-only check that never reruns on the Director approval commit is not acceptable.
- Use a stable, explicitly documented required-check/status context. Verify from GitHub Actions/status semantics which context branch protection would actually require rather than assuming a workflow/job name.
- Preserve fail-closed behavior if state is malformed, the PR/head moved, the task mismatches, Relay/credit/autonomous-merge safeguards are not satisfied, or status is anything other than `MERGE_APPROVED`.
- Preserve the existing `relay-automerge.yml` exact-SHA two-pass contract; do not replace it with a new merge engine.
- Update narrowly related tests/docs only as needed.
- Include `.ai-ops/results/PP-RELAY-059-r2.json`.

## Prohibited scope
- Do not redesign dispatch, task selection, risk classes, source review, or the v2C experiment.
- Do not enable fast lane or broaden autonomous-merge authority.
- Do not weaken branch protection, required checks, exact-SHA verification, human gates, or credit guard.
- Do not modify site/product/editorial content.
- Do not require the owner to enable a branch-protection setting until the repository-side signal is proven operational for both pre-approval blocking and post-approval success. If external GitHub settings are still required after that proof, return the exact minimal human action.

## Acceptance criteria
- root-cause evidence from revision 1 remains supported;
- the required merge-gate signal is mechanically tied to the PR head and can transition from blocking to passing after the Director's `MERGE_APPROVED` state commit without mutating the approved PR head;
- READY_FOR_REVIEW/REWORK_REQUIRED and mismatched PR/head/task never authorize merge;
- the exact stable required-check/status context is documented and verified;
- existing Relay dispatch/review and `relay-automerge.yml` behavior remain unchanged except for the bounded additive protection path;
- tests cover pre-approval failure, exact approval success, PR mismatch, head mismatch, task mismatch/malformed state as applicable, and the state-change trigger/publication path;
- relevant checks and `git diff --check` pass;
- no scope drift.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-059-r2.json` on a pushed `claude/relay-PP-RELAY-059-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized fix/docs/tests plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-059 revision 2. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-059"`, `revision: 2`, `risk_class: "STANDARD"`, terminal `result`, concise root-cause/design evidence, summary and verification, execution telemetry, and `human_action` only when a genuine unresolved external gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.