# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-059

## Revision
3

## Risk Class
STANDARD

## Objective
Make the new Relay merge-gate status signal trustworthy as well as refreshable. Preserve the useful revision-2 exact-PR/head/state invariant and push-to-main refresh design, but remove any path by which a worker PR can alter the code/workflow that publishes the required status.

## Revision history
- Revision 1 correctly identified the out-of-band merge path as direct/manual GitHub merge authority, but its pull-request-only status could never refresh after a later Director MERGE_APPROVED state commit.
- Revision 2 added a push-to-main refresh path and a stable `relay-merge-gate` Statuses API context. Director review found a more serious trust defect: the status-writing workflow is itself introduced/executed from the worker PR under `pull_request` with `statuses: write`. A worker branch can therefore modify the workflow logic that emits the supposedly trusted required status. Live PR #108 also demonstrated that the pre-approval gate job failed and published no `relay-merge-gate` status at all on head `d11e4ae46d4b8fbfe15062a8544f41221d389c2f`; the aggregate commit-status endpoint returned zero statuses. PR #108 was closed unmerged.

## Authorized scope
- Preserve the revision-2 invariant: only `MERGE_APPROVED` with matching current task where applicable, exact PR number, exact current head SHA, `relay_enabled: true`, `credit_guard: CONFIRMED_DISABLED`, and `autonomous_merge: true` can publish success.
- Move the PR-side status publication onto a trusted execution path whose workflow/code cannot be supplied or modified by the worker PR being evaluated. `pull_request_target` may be used if implemented according to GitHub's security model, provided the job never checks out, imports, executes, sources, or evaluates code/content from the untrusted PR head.
- The trusted PR-side job may use event metadata for PR number/title/head SHA and may read gate logic/state only from trusted default/base-branch content. Fail closed if trusted gate code is not available yet during bootstrap.
- Preserve the trusted push-to-main refresh path so a later Director `MERGE_APPROVED` state commit republishes the exact same stable `relay-merge-gate` status context for open Relay PR heads.
- Keep the Statuses API context stable and explicitly documented as `relay-merge-gate` unless concrete GitHub semantics require a different bounded mechanism.
- Add/adjust tests that mechanically cover the trust boundary: a PR modifying the gate workflow/script must not gain authority to publish its own success; pre-approval blocks; exact post-approval success; moved head/task/PR mismatch blocks; malformed state fails closed.
- Inspect the failed PR #108 gate run/status evidence and document the bootstrap limitation accurately. Do not claim live pre/post-approval proof unless an actual GitHub run/status demonstrates it.
- Preserve `relay-automerge.yml` and the v2B/v2C dispatch/merge engine except for this bounded additive protection.
- Include `.ai-ops/results/PP-RELAY-059-r3.json`.

## Prohibited scope
- Do not execute or source worker-PR code in a privileged `pull_request_target` or other trusted-context job.
- Do not grant a worker-controlled workflow/token a path to forge the stable required status context.
- Do not redesign dispatch, task selection, risk classes, source review, or the v2C experiment.
- Do not enable fast lane or broaden autonomous-merge authority.
- Do not weaken exact-SHA verification, human gates, credit guard, or branch protection.
- Do not modify site/product/editorial content.
- Do not request owner branch-protection changes until the repository-side signal is installed and there is bounded evidence that the trusted mechanism can publish the intended blocking/success context. If live post-install proof necessarily requires a later Relay PR, say so explicitly rather than overstating proof.

## Acceptance criteria
- the status publisher used for branch protection is controlled only by trusted default/base-branch code, not the PR under evaluation;
- no privileged workflow checks out or executes the PR head;
- pre-approval state publishes/retains a blocking outcome for a Relay PR head;
- a trusted push to `main` changing `state.json` to exact `MERGE_APPROVED` can refresh the same head/context to success;
- READY_FOR_REVIEW/REWORK_REQUIRED and PR/head/task mismatch never authorize merge;
- malformed/missing trusted state or gate code fails closed;
- the exact stable required-check/status context is documented;
- tests cover the trust-boundary and state-transition cases above;
- relevant CI/self-tests and `git diff --check` pass;
- no scope drift.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-059-r3.json` on a pushed `claude/relay-PP-RELAY-059-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized fix/docs/tests plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-059 revision 3. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-059"`, `revision: 3`, `risk_class: "STANDARD"`, terminal `result`, concise trust-boundary/design evidence, summary and verification, execution telemetry, and `human_action` only when a genuine unresolved external gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.