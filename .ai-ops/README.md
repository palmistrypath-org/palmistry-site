# AI Project Ops — Palmistry Path Relay Mode

Relay Mode is a bounded cross-agent orchestration layer for Palmistry Path. GitHub is the durable control plane; conversation history and Claude session transcripts are not authoritative.

## Roles

- **Human owner:** authorizes experiments, controls billing/usage-credit settings, and handles genuine human-only judgments.
- **Director (ChatGPT):** selects one bounded task, assigns its risk class, writes the task packet, independently reviews Claude's actual result/diff/tests/evidence, maintains Relay metrics, and either issues rework, authorizes merge, advances to the next task, pauses, or completes the experiment.
- **Worker (Claude):** executes exactly one authorized task packet, verifies it, updates project docs, pushes a `claude/` branch, records a durable result artifact, and opens a reviewable PR when files changed. The worker never chooses the next project task and never merges.
- **GitHub Actions:** dispatches the existing Claude Routine and performs only a Director-authorized mechanical squash merge after validating the exact PR/head SHA.

## Source of truth

Read `AGENTS.md` first. Existing project docs remain authoritative for product, editorial, technical, SEO, and current-state decisions. Relay files coordinate who acts next.

- `.ai-ops/state.json` — machine-readable handshake and final dispatch/merge gate.
- `.ai-ops/tasks/<TASK_ID>.md` — immutable task packet for each task ID. Revisions update the same task file with revision history preserved.
- `.ai-ops/tasks/CURRENT_TASK.md` — compatibility mirror for the existing Claude Routine. It must match the packet named by `state.current_task_path` before dispatch.
- `.ai-ops/results/<TASK_ID>-r<REVISION>.json` — worker terminal result committed on the worker branch.
- `.ai-ops/metrics.json` — active-experiment timing/rework bookkeeping maintained by the Director.
- `.ai-ops/archive/` — closed experiment snapshots/summaries.
- `.ai-ops/CLAUDE_ROUTINE_PROMPT.md` — standing repository copy of the worker instructions.
- `.ai-ops/V2C_PILOT.md` — controlling additions for the current 50-accepted-iteration v2C pilot.
- `docs/ACTIVE_TASK.md` — normal in-task memory used according to `AGENTS.md`.

## Active experiment — Relay v2C bounded expansion

Relay v2B completed **20 accepted iterations** with 20 autonomous merges, 15 first-pass acceptances, five tasks requiring rework, six total rework revisions, zero human gates, and zero usage-limit events. Its completion summary is archived at `.ai-ops/archive/relay-v2b-completion.json` and the full historical record remains available in Git history.

Relay v2C is an incremental expansion, not a rewrite. The active budget is **50 accepted iterations**. Reaching the budget means `PILOT_COMPLETE`, not permission for an unbounded loop.

v2C preserves the proven v2B control plane and adds:

1. explicit task risk classes (`LOW`, `STANDARD`, `SOURCE_SENSITIVE`);
2. a mandatory worker source-claim preflight for source-sensitive work;
3. richer Director telemetry for rework/blocker categories and performance by risk class;
4. conservative fast-lane policy: low risk does not automatically mean fast-lane eligible; exact allowlisting is still required;
5. a fresh 50-accepted-iteration measurement window before any unbounded production decision.

The existing dispatch and exact-SHA auto-merge workflows remain unchanged at v2C launch unless a concrete bounded defect is discovered.

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

## v2C risk classification

Every active task packet must contain a `## Risk Class` heading followed by exactly one value:

- `LOW` — narrow, mechanically verifiable work with little semantic/editorial judgment.
- `STANDARD` — normal objectively reviewable work requiring full Director review.
- `SOURCE_SENSITIVE` — source/claim-sensitive palmistry or editorial work requiring full Director review plus the source-claim preflight in `.ai-ops/V2C_PILOT.md`.

`LOW` is not automatic permission for fast-lane merge. During the 50-run pilot, a task must also be explicitly allowlisted in `.ai-ops/fastlane.json` with exact task ID, revision, and allowed paths. `SOURCE_SENSITIVE` tasks are never fast-lane eligible during this pilot.

### Claim-risk preflight aid (PP-RELAY-028)

`scripts/audit-claim-risk.mjs` is a bounded heuristic scanner that helps a worker catch risky wording in changed prose before the manual source-claim preflight above, targeting the avoidable rework patterns from PP-RELAY-024 (unsupported prevalence/consensus language, vague anonymous-authority attribution, strong unsupported empirical-overstatement claims).

- Targeted/opt-in use only: `npm run audit:claim-risk -- <file> [file...]` against explicitly supplied changed MD/MDX content. It is **not** wired into `audit:all` or the build, and does not scan the whole repo.
- Deterministic self-test with fixtures under `scripts/fixtures/claim-risk/`: `npm run audit:claim-risk:selftest`.
- A worker doing `SOURCE_SENSITIVE` work should run it against the files it changed as an aid before the source-claim preflight in `.ai-ops/CLAUDE_ROUTINE_PROMPT.md`, not instead of it.
- **This is a review-prompt aid, not a source-validity check.** A match does not mean wording is wrong, and no match does not mean a claim is sourced or safe. It never rewrites prose and never approves/rejects content; approved repository evidence and Director/human review remain the only authority on whether a claim is safe to publish.

## Immutable task + dispatch contract

For every new task/revision, the Director must:

1. choose one bounded, reviewable task justified by current approved product/roadmap/docs;
2. assign the appropriate v2C risk class;
3. create/update `.ai-ops/tasks/<TASK_ID>.md`;
4. update `.ai-ops/tasks/CURRENT_TASK.md` to an exact compatibility mirror of the authorized revision;
5. verify Task ID + Revision + Risk Class match in both files;
6. update metrics/bookkeeping as needed;
7. write `state.json` **last** with matching `current_task_id`, `current_task_revision`, `current_task_path`, cleared stale result/merge fields, and `status: READY_FOR_CLAUDE` (or `REWORK_REQUIRED`).

The `state.json` write is the dispatch commit point. The dispatch workflow independently verifies the immutable packet and mirror before firing Claude.

Every task packet must retain this exact parser-compatible identity structure near the top:

`# Relay Task Packet`

`Status: AUTHORIZED`

`## Task ID`

`<exact task id>`

`## Revision`

`<integer revision>`

and must explicitly include the durable-result contract below.

### Worker checkout recovery

Claude Code may reuse a persistent checkout whose clean local `main` has diverged from, or has no merge base with, the current `origin/main` after Relay/Director history changes. This is a known control-plane condition, not permission for a destructive cleanup.

When the tree is clean and the expected remote/default branch are unambiguous, the worker may leave local `main` untouched and create the new designated task branch directly from verified `origin/main`, as specified in `AGENTS.md` and `.ai-ops/CLAUDE_ROUTINE_PROMPT.md`. The worker must not reset, rebase, force-update, delete, or overwrite local `main` merely to satisfy startup. The fallback should be recorded in the terminal result's execution notes. A dirty tree, ambiguous remote identity/default branch, or collision with existing task work still fails closed.

### Dispatch acknowledgement status

`.github/workflows/relay-dispatch.yml` publishes commit status context `relay-dispatch/claude-routine` on the `state.json` dispatch commit. `pending` means the workflow reached the routine call, `success` means the Claude Routine endpoint returned HTTP 2xx and accepted the dispatch request, and `failure` means the request failed or was rejected. This is transport acknowledgement only: it does not prove the worker completed startup or produced a branch/result/PR. Durable worker completion remains the result artifact/branch contract below.

## Durable worker-result contract

Every worker run that passes startup must leave one terminal result artifact at:

`.ai-ops/results/<TASK_ID>-r<REVISION>.json`

on a pushed `claude/relay-<TASK_ID>-...` branch.

Minimum v2C schema:

```json
{
  "schema_version": 2,
  "task_id": "PP-RELAY-000",
  "revision": 1,
  "risk_class": "STANDARD",
  "result": "READY_FOR_REVIEW",
  "summary": "concise outcome",
  "pr_number": null,
  "verification": [],
  "source_preflight": null,
  "human_action": null,
  "execution": {}
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

For `SOURCE_SENSITIVE`, the result artifact must also contain the compact source-preflight object required by `.ai-ops/V2C_PILOT.md` and `.ai-ops/CLAUDE_ROUTINE_PROMPT.md`.

## Worker completion contract

For each task Claude must:

1. confirm `state.current_task_path` exists and Task ID/Revision/Risk Class match across `state.json` where applicable, the immutable packet, and `CURRENT_TASK.md`;
2. refuse work if Relay is disabled, the credit guard is not confirmed, the task/revision already has a terminal result, another matching Relay PR is open, or accepted iterations reached the budget;
3. follow `AGENTS.md` and `CLAUDE.md`, including progressive disclosure, Git safety, editorial/source guardrails, and risk-based validation;
4. implement only the authorized scope;
5. run practical task/project verification;
6. inspect the final diff for regressions, accessibility/responsive issues when relevant, SEO/content-model impact when relevant, unnecessary complexity, and editorial/product drift;
7. for `SOURCE_SENSITIVE`, complete the source-claim preflight against the final changed prose;
8. update canonical docs as required;
9. write the durable result artifact including risk/telemetry fields;
10. commit and push one `claude/relay-<task-id>-...` branch;
11. if and only if the result is `READY_FOR_REVIEW`, open one PR targeting `main` with title prefix `[RELAY <task-id>]` and the standard Relay footer;
12. stop without merging or selecting the next task.

## Director review contract

The Director must inspect the actual result artifact and, for changed work, the actual PR diff/patch, relevant implementation/content, project docs, checks/tests/evidence, edge cases, and scope drift rather than trusting the worker summary.

- `NO_CHANGE`: independently verify the task's explicit no-change condition, record it, do not increment accepted iterations, then select a different task.
- Accepted `READY_FOR_REVIEW`: when `autonomous_merge` is true and no human gate applies, set `status: MERGE_APPROVED`, `approved_pr`, and the exact 40-character `approved_head_sha`.
- Rejected `READY_FOR_REVIEW`: issue bounded remediation for the same task as revision + 1, classify the rework reason(s), and set `REWORK_REQUIRED`.
- `BLOCKED`: classify the blocker and retry only when the technical remedy is safe, bounded, and unambiguous.
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

## Fast-lane policy

The event-driven fast lane remains an optional acceleration layer for explicitly preauthorized `LOW` tasks only. `.ai-ops/fastlane.json` must identify the exact task/revision and exact allowed paths. During initial v2C rollout the fast lane starts disabled and should be re-enabled only after a Director intentionally allowlists a suitable task or short bounded chain.

A risk label alone never broadens allowed paths or permits semantic/content work to skip Director review.

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

v2C metrics additionally record task risk class and categorized rework/blocker reasons so the 50-run reassessment can compare first-pass and failure rates by risk class.

Every user-visible Relay update must end with exactly one action-status line:

- `No human action needed.`
- or `Human action required:` followed immediately by the concrete action needed.
