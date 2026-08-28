# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-059

## Revision
1

## Risk Class
STANDARD

## Objective
Diagnose and apply the smallest reversible fix for the concrete v2C control-plane defect demonstrated by PP-RELAY-057 PR #104 and PP-RELAY-058 PRs #105/#106: Relay worker PRs can merge to `main` before the Director has written `MERGE_APPROVED` with the exact PR/head SHA. Preserve the proven v2B/v2C dispatch model; do not redesign the Relay engine.

## Authorized scope
- Inspect the repository's Relay workflow/routine instructions, GitHub Actions, merge automation, branch/ruleset configuration that is readable from the repository, and recent PR history to identify the mechanism that allowed these out-of-band merges.
- Implement only a bounded, additive/reversible repository-side guard if the defect and fix are unambiguous. The preferred invariant is: worker completion may push/open a PR, but no worker/routine path may merge unless `state.json` already records `status: MERGE_APPROVED`, the matching `approved_pr`, and the exact current `approved_head_sha`.
- Update Relay documentation/tests only as needed to make that invariant mechanically verifiable and prevent regression.
- Preserve the one-worker-task-at-a-time rule, credit guard, source-sensitive review, existing Director exact-SHA two-pass merge contract, and 50-accepted-iteration budget.
- Include `.ai-ops/results/PP-RELAY-059-r1.json`.

## Prohibited scope
- Do not redesign dispatch, task selection, risk classes, source review, or the v2C experiment.
- Do not enable the fast lane or broaden autonomous-merge authority.
- Do not weaken branch protection, required checks, exact-SHA verification, human gates, or the credit guard.
- Do not modify site/product/editorial content.
- Do not change external repository/account settings unless the existing repository-side configuration clearly proves that such a change is required; if the only safe fix requires external GitHub settings authority not available to the worker, return `HUMAN_REQUIRED` with the exact setting/action rather than guessing.

## Acceptance criteria
- root cause for the out-of-band merge path is identified with concrete repository/PR evidence;
- the smallest safe reversible fix is implemented when repository-side and unambiguous, otherwise the exact unresolved external gate is reported;
- a regression check demonstrates that READY_FOR_REVIEW/REWORK_REQUIRED cannot itself authorize merge and that MERGE_APPROVED must match both PR number and exact head SHA;
- existing normal Relay dispatch/review behavior remains unchanged;
- relevant tests/checks and `git diff --check` pass;
- no scope drift.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-059-r1.json` on a pushed `claude/relay-PP-RELAY-059-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized fix/docs/tests plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-059 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-059"`, `revision: 1`, `risk_class: "STANDARD"`, terminal `result`, concise root-cause evidence, summary and verification, execution telemetry, and `human_action` only when a genuine unresolved gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.