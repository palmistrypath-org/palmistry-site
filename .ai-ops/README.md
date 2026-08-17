# AI Project Ops — Palmistry Path Relay Mode

Relay Mode is a bounded cross-agent orchestration layer for Palmistry Path. GitHub is the durable control plane; conversation history and Claude session transcripts are not authoritative.

## Roles

- **Human owner:** authorizes experiments, controls billing/usage-credit settings, and handles genuine human-only judgments.
- **Director (ChatGPT):** selects one bounded task, writes the task packet, independently reviews Claude's actual result/diff/tests/evidence, maintains Relay metrics, and either issues rework, authorizes merge, advances to the next task, pauses, or completes the experiment.
- **Worker (Claude):** executes exactly one authorized task packet, verifies it, updates project docs, pushes a `claude/` branch, records a durable result artifact, and opens a reviewable PR when files changed. The worker never chooses the next project task and never merges.
- **GitHub Actions:** dispatches the existing Claude Routine and performs only a Director-authorized mechanical squash merge after validating the exact PR/head SHA.

## Source of truth

Read `AGENTS.md` first. Existing project docs remain authoritative for product, editorial, technical, SEO, and current-state decisions. Relay files coordinate who acts next.

- `.ai-ops/state.json` — machine-readable handshake and final dispatch/merge gate.
- `.ai-ops/tasks/<TASK_ID>.md` — immutable task packet for each task ID. Revisions update the same task file with revision history preserved.
- `.ai-ops/tasks/CURRENT_TASK.md` — compatibility mirror for the existing Claude Routine. It must match the packet named by `state.current_task_path` before dispatch.
- `.ai-ops/results/<TASK_ID>-r<REVISION>.json` — worker terminal result committed on the worker branch.
- `.ai-ops/metrics.json` — active-experiment timing/rework bookkeeping maintained by the Director.
- `.ai-ops/archive/` — closed experiment snapshots.
- `.ai-ops/CLAUDE_ROUTINE_PROMPT.md` — standing repository copy of the worker instructions.
- `docs/ACTIVE_TASK.md` — normal in-task memory used according to `AGENTS.md`.

## Active experiment — Relay v2B near-autonomous mode

The initial `relay-pilot-1` completed all three authorized outer iterations and is archived at `.ai-ops/archive/relay-pilot-1.json`.

Relay v2B keeps the proven ChatGPT Director → Claude Worker → independent review architecture while removing avoidable human handoffs. The active budget is **20 accepted iterations**. Reaching the budget means `PILOT_COMPLETE`, not permission for an unbounded loop.

v2B adds four control-plane guarantees:

1. immutable task packets plus `state.json` as the final dispatch commit point;
2. every worker run that passes startup leaves a durable machine-readable terminal result on a pushed Relay branch, even when no PR is appropriate;
3. after independent Director acceptance, `state.json` can authorize one exact PR number + head SHA for mechanical squash merge by GitHub Actions;
4. the Director automatically selects the next bounded approved-roadmap task until the budget or a genuine human/safety gate stops it.

## State machine

Allowed `status` values:

- `DISABLED`
- `READY_FOR_DIRECTOR`
- `READY_FOR_CLAUDE`
- `CLAUDE_RUNNING` (informational only)
- `READY_FOR_REVIEW`
- `REWORK_REQUIRED`
- `MERGE_APPROVED`
- `PAUSED_USAGE_LIMIT`
- `HUMAN_REQUIRED`
- `PILOT_COMPLETE`
- `BLOCKED`

Only one worker task may be live at a time.

## Billing and usage protection — hard rule

Relay may dispatch Claude only when both are true in `state.json`:

- `relay_enabled: true`
- `credit_guard: "CONFIRMED_DISABLED"`

The worker must stop conservatively for an approaching 5-hour limit, weekly/plan-limit warning, any indication that continued work may consume usage credits, or any comparable usage warning. Preserve recoverable work when practical, record `PAUSED_USAGE_LIMIT`, and do not bypass the limit with API/pay-as-you-go credentials.

## Immutable task + dispatch contract

For every new task/revision, the Director must:

1. choose one bounded, reviewable task justified by current approved product/roadmap/docs;
2. create/update `.ai-ops/tasks/<TASK_ID>.md`;
3. update `.ai-ops/tasks/CURRENT_TASK.md` to an exact compatibility mirror of the authorized revision;
4. verify Task ID + Revision match in both files;
5. update metrics/bookkeeping as needed;
6. write `state.json` **last** with matching `current_task_id`, `current_task_revision`, `current_task_path`, cleared stale result/merge fields, and `status: READY_FOR_CLAUDE` (or `REWORK_REQUIRED`).

The `state.json` write is the dispatch commit point. The dispatch workflow independently verifies the immutable packet and mirror before firing Claude.

Every future task packet must explicitly include the v2B durable-result contract so the currently configured Claude Routine remains forward-compatible even if its standing cloud prompt predates v2B.

## Durable worker-result contract

Every worker run that passes startup must leave one terminal result artifact at:

`.ai-ops/results/<TASK_ID>-r<REVISION>.json`

on a pushed `claude/relay-<TASK_ID>-...` branch.

Minimum schema:

```json
{
  "schema_version": 1,
  "task_id": "PP-RELAY-000",
  "revision": 1,
  "result": "READY_FOR_REVIEW",
  "summary": "concise outcome",
  "pr_number": null,
  "verification": [],
  "human_action": null
}
```

Allowed `result` values:

- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push the branch, and open exactly one PR to `main`. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

Absence of a PR is therefore not evidence that Claude stalled. The Director must look for the matching Relay branch/result artifact and dispatch/workflow evidence.

## Worker completion contract

For each task Claude must:

1. confirm `state.current_task_path` exists and Task ID/Revision match across `state.json`, the immutable packet, and `CURRENT_TASK.md`;
2. refuse work if Relay is disabled, the credit guard is not confirmed, the task/revision already has a terminal result, another matching Relay PR is open, or accepted iterations reached the budget;
3. follow `AGENTS.md` and `CLAUDE.md`, including progressive disclosure, Git safety, editorial/source guardrails, and risk-based validation;
4. implement only the authorized scope;
5. run practical task/project verification;
6. inspect the final diff for regressions, accessibility/responsive issues when relevant, SEO/content-model impact when relevant, unnecessary complexity, and editorial/product drift;
7. update canonical docs as required;
8. write the durable result artifact;
9. commit and push one `claude/relay-<task-id>-...` branch;
10. if and only if the result is `READY_FOR_REVIEW`, open one PR targeting `main` with title prefix `[RELAY <task-id>]` and the standard Relay footer;
11. stop without merging or selecting the next task.

## Director review contract

The Director must inspect the actual result artifact and, for changed work, the actual PR diff/patch, relevant implementation/content, project docs, checks/tests/evidence, edge cases, and scope drift rather than trusting the worker summary.

- `NO_CHANGE`: independently verify the task's explicit no-change condition, record it, do not increment accepted iterations, then select a different task.
- Accepted `READY_FOR_REVIEW`: when `autonomous_merge` is true and no human gate applies, set `status: MERGE_APPROVED`, `approved_pr`, and the exact 40-character `approved_head_sha`.
- Rejected `READY_FOR_REVIEW`: issue bounded remediation for the same task as revision + 1 and set `REWORK_REQUIRED`.
- `BLOCKED`: retry only when the technical remedy is safe, bounded, and unambiguous.
- `HUMAN_REQUIRED`: preserve the exact gate/action and stop.
- `PAUSED_USAGE_LIMIT`: stop dispatching until the owner explicitly reauthorizes after the usage/credit situation is safe.

After GitHub reports an authorized PR merged, the Director verifies that exact merge landed on `main`, updates metrics exactly once, increments accepted iterations exactly once, clears merge fields, and either selects the next task or completes the experiment.

## Mechanical auto-merge contract

`.github/workflows/relay-automerge.yml` may squash-merge only when all of these are true:

- Relay enabled and credit guard confirmed;
- `autonomous_merge: true`;
- `status: MERGE_APPROVED`;
- `approved_pr` is a positive integer;
- `approved_head_sha` is a full commit SHA;
- the live PR is open, non-draft, targets `main`, its head exactly matches the approved SHA, its title identifies the current Relay task, and its body contains matching Relay footers.

The workflow does not choose tasks, approve work, bypass checks/human gates, or broaden scope. It fails closed.

## Task-selection autonomy

The Director should continue the approved Palmistry Path direction with as little human intervention as safely possible. It may autonomously choose and authorize bounded technical fixes, accessibility improvements, SEO hygiene, internal-link/navigation improvements, tooling/tests/audits, low-risk conversion polish, source-safe editorial cleanup, and implementation of already-approved roadmap items when correctness is objectively reviewable.

Prefer meaningful progress over documentation churn or invented busywork. Check current implementation/history before selecting a task so completed work is not duplicated.

## Human gates — use sparingly

Stop for the owner before:

- deployment, release, production publishing, domain, account, secret, credential, or paid-service actions;
- spending or enabling paid usage;
- major architecture/product/brand/UX-direction changes;
- materially changing monetization or lead-capture strategy;
- major visual redesign or subjective design choices with materially different user-facing outcomes;
- high-risk SEO/indexing changes with uncertain downstream effects;
- new or materially rewritten source-heavy palmistry content when source sufficiency, quotation fidelity, interpretation, or curriculum positioning cannot be resolved from approved sources and durable decisions;
- destructive/irreversible migrations;
- any action whose correctness cannot reasonably be verified from available evidence.

Normal implementation ambiguity is not a human gate. Make the best evidence-grounded bounded decision and document it.

## Metrics and user notifications

Maintain `.ai-ops/metrics.json` after meaningful result discovery, review, rework, no-change completion, merge approval, final merge, human gate, usage-limit event, or technical blocker. Use GitHub timestamps when available and `null` rather than guessing.

Every user-visible Relay update must end with exactly one action-status line:

- `No human action needed.`
- or `Human action required:` followed immediately by the concrete action needed.
