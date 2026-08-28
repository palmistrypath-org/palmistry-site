# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-060

## Revision
1

## Risk Class
LOW

## Objective
Reconcile stale durable project-state documentation after the completed Relay/curriculum waves, while simultaneously providing the first post-install live exercise of the trusted `relay-merge-gate` signal on an ordinary low-risk Relay PR.

## Authorized scope
- Update `docs/ACTIVE_TASK.md` so it is genuinely disposable/inactive current-task memory rather than a long historical Batch 3D snapshot. Preserve only a concise completion pointer and direct readers to current canonical docs/Git history.
- Update only obviously stale inventory/status metadata in `docs/CURRENT_STATE.md` that can be mechanically verified from current `main` (for example the stale `Last repo inventory` date or similarly explicit state labels). Do not rewrite substantive product/editorial history.
- If needed, make the smallest corresponding `docs/AI_HANDOFF.md` reconciliation so its immediate continuation pointer does not contradict current `main`.
- Do not touch palmistry article/lesson prose, product UX, SEO strategy, monetization, or visual direction.
- Run documentation-appropriate verification: inspect the final diff/cross-links and `git diff --check`; a site build is not required unless runtime files are touched.
- Produce `.ai-ops/results/PP-RELAY-060-r1.json` and one pushed `claude/relay-PP-RELAY-060-...` branch. For READY_FOR_REVIEW, open exactly one PR to `main` with the standard Relay footer.

## Merge-gate live verification requirement
This task is also the first ordinary Relay PR after PP-RELAY-059 installed `.github/workflows/relay-merge-gate.yml` on `main`.

- Do not modify the merge-gate workflow, publisher, verifier, branch protection, dispatch, or auto-merge engine.
- After opening the PR, inspect/report whether the fixed commit-status context `relay-merge-gate` is actually published on the exact PR head while `state.json` remains pre-approval.
- Pre-approval expected outcome is blocking/failure, never success.
- Record the live status evidence in the durable result when observable. If GitHub does not publish the signal because of permissions/event/bootstrap behavior, report that accurately as evidence; do not fabricate success and do not broaden scope to repair it in this task.
- Director review will later determine whether a bounded follow-up or owner branch-protection action is warranted.

## Prohibited scope
- No source-sensitive editorial changes or new palmistry claims.
- No runtime/site-code changes unless strictly necessary to correct a documentation link, and prefer documentation-only correction.
- No fast-lane authorization. LOW risk alone does not authorize fast lane.
- No changes to `.github/workflows/relay-merge-gate.yml`, `scripts/*relay*merge*gate*`, `.ai-ops/state.json`, `.ai-ops/metrics.json`, or Relay engine semantics from the worker branch.
- Do not merge.

## Acceptance criteria
- `docs/ACTIVE_TASK.md` is concise, INACTIVE, and no longer presents 2026-08-13 Batch 3D as current continuation state;
- any `CURRENT_STATE.md`/`AI_HANDOFF.md` edits are narrowly factual and mechanically supported by current `main`;
- no product/editorial/SEO/monetization direction is changed;
- final documentation diff and cross-links are coherent and `git diff --check` passes;
- durable result and branch/PR contract is satisfied;
- the result records live `relay-merge-gate` evidence for the exact PR head when observable, without overstating what was proven.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-060-r1.json` on a pushed `claude/relay-PP-RELAY-060-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized documentation reconciliation plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-060]` and standard Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-060"`, `revision: 1`, `risk_class: "LOW"`, terminal `result`, concise summary, verification including merge-gate live evidence when observable, `source_preflight: null`, execution telemetry, and `human_action` only for a genuine unresolved owner gate.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, modify Relay control files beyond the required result artifact, or broaden scope.