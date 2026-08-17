# AI Project Ops — Palmistry Path Relay Mode

Relay Mode is a bounded cross-agent orchestration layer for Palmistry Path. GitHub is the durable control plane; conversation history is not authoritative.

## Roles

- **Human owner:** authorizes the pilot, controls billing/usage-credit settings, and approves decisions that remain explicitly human-gated.
- **Director (ChatGPT):** selects one bounded task, writes the task packet, independently reviews Claude's actual diff/tests/evidence, and either requests bounded rework, autonomously merges an accepted low/medium-risk Relay PR when all merge conditions pass, pauses, or escalates to the human owner.
- **Worker (Claude):** executes exactly one authorized task packet, verifies it, updates project docs as required by `AGENTS.md`, pushes a `claude/` branch, opens one reviewable PR, and stops. The worker never chooses the next project task and never merges.

## Source of truth

Read `AGENTS.md` first. Existing project docs remain authoritative for product, editorial, technical, SEO, and current-state decisions. Relay files only coordinate who acts next.

- `.ai-ops/state.json` — tiny machine-readable handshake.
- `.ai-ops/tasks/CURRENT_TASK.md` — disposable, bounded task packet from the Director.
- `.ai-ops/CLAUDE_ROUTINE_PROMPT.md` — standing instructions for the Claude cloud Routine.
- `docs/ACTIVE_TASK.md` — existing in-task memory used according to `AGENTS.md`.

## State machine

Allowed `status` values:

- `DISABLED` — Relay cannot dispatch work.
- `READY_FOR_DIRECTOR` — Director may inspect state and write the next task.
- `READY_FOR_CLAUDE` — exactly one authorized task is waiting for Claude.
- `CLAUDE_RUNNING` — informational; worker has started.
- `READY_FOR_REVIEW` — Claude has produced a PR/result for Director inspection.
- `REWORK_REQUIRED` — Director rejected the result and issued bounded remediation.
- `PAUSED_USAGE_LIMIT` — Claude detected/encountered a plan limit or usage warning; do not start more work.
- `HUMAN_REQUIRED` — a judgment/action outside autonomous authority is required.
- `PILOT_COMPLETE` — Relay pilot is finished.
- `BLOCKED` — technical or environmental blocker prevents progress.

Only one Relay worker task may be live at a time.

## Billing and usage protection — hard rule

Relay may dispatch Claude only when the human has disabled Claude usage credits and the repository state explicitly reflects that fact:

- `relay_enabled: true`
- `credit_guard: "CONFIRMED_DISABLED"`

If either value differs, automated dispatch is forbidden.

The worker must stop conservatively if it sees an approaching plan/session/weekly usage-limit warning or any indication that continued work may consume usage credits. Preserve recoverable work when practical, report the stop, and do not start additional implementation. Do not work around limits with API/pay-as-you-go credentials.

## Palmistry Path pilot budget

This pilot remains intentionally bounded:

- maximum outer iterations: `3`
- one authorized task per worker run
- `autonomous_merge: true`
- Relay PRs may be merged by the Director only after independent review of the actual diff, relevant implementation/content, and verification evidence; required checks must pass, the reviewed PR head must not have changed, scope must remain within the authorized task, and no human gate may apply
- Claude never merges its own Relay PR
- prefer low-to-medium-risk, objectively verifiable technical/SEO-hygiene/accessibility/tooling tasks for the pilot
- no autonomous deployment or production release
- no secrets or credential changes
- no new paid services
- no destructive or irreversible migrations
- no major architecture redesign
- no major visual redesign
- no new or materially rewritten article/lesson unless a task packet explicitly authorizes it
- no high-risk SEO/indexing strategy change unless a task packet explicitly authorizes it
- no invented palmistry meanings, citations, quotations, or source claims
- no human-only visual/editorial judgment masquerading as deterministic verification

The Director may end the pilot earlier.

## Worker completion contract

For each task Claude must:

1. Confirm the task ID in `CURRENT_TASK.md` matches `state.json`.
2. Refuse to work if Relay is disabled, the credit guard is not confirmed, the task is already completed, the iteration budget is exhausted, or another Relay PR already covers the same task/revision.
3. Follow `AGENTS.md` and `CLAUDE.md`, including progressive disclosure, Git safety, editorial guardrails, and risk-based validation.
4. Implement only the authorized scope in `CURRENT_TASK.md`.
5. Run practical verification required by the task and by `AGENTS.md` for the change type.
6. Inspect the final diff for regressions, unnecessary complexity, editorial/SEO drift, and scope creep.
7. Update normal project docs as required by `AGENTS.md`.
8. Commit coherent changes.
9. Push a `claude/relay-<task-id>-<short-slug>` branch.
10. Open exactly one PR targeting `main` with title prefix `[RELAY <task-id>]`.
11. Include a concise machine-readable footer in the PR body:

   `RELAY_TASK_ID: <task-id>`

   `RELAY_TASK_REVISION: <revision>`

   `RELAY_RESULT: READY_FOR_REVIEW | BLOCKED | HUMAN_REQUIRED | PAUSED_USAGE_LIMIT`

12. Stop. Do not merge and do not select or begin the next task.

## Director review and merge contract

The Director must inspect the actual PR diff, relevant implementation/content, and verification evidence rather than trusting the worker summary.

- If accepted and `autonomous_merge` is `true`: confirm required checks pass, confirm the PR head has not changed since review, confirm the change stays within the authorized task, confirm no human gate applies, then merge to `main` and advance Relay state.
- If any autonomous-merge condition is not satisfied: do not merge until the condition is resolved or escalate to `HUMAN_REQUIRED` when human judgment is necessary.
- If rejected: write a bounded remediation revision; do not silently broaden scope.
- If human judgment is required: set `HUMAN_REQUIRED` and stop.
- If the iteration budget is exhausted: set `PILOT_COMPLETE` or `HUMAN_REQUIRED`; do not continue automatically.

## Human gates for this pilot

Routine Director-reviewed merges to `main` are not a human gate. Stop for the human before:

- deployment, release, or production publishing actions,
- secrets, credentials, or account access changes,
- spending or enabling paid usage,
- major architecture/product-scope changes,
- major visual/brand redesign,
- materially changing monetization or lead-capture strategy,
- creating or materially rewriting source-heavy palmistry content when source sufficiency or interpretation requires editorial judgment,
- high-risk SEO/indexing changes with uncertain downstream effects,
- destructive or irreversible migrations,
- any action whose correctness cannot be reasonably verified from available objective evidence.
