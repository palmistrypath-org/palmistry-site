# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-013

## Revision
1

## Objective
Add an automated validation that fails when two lessons in the same curriculum module share the same `order` value, closing the specific audit gap that previously allowed an Advanced-module order collision to pass all existing checks.

## Why this task is authorized
The audited 3E/3F branch documented a real tooling gap: an earlier branch state had two Advanced lessons with `order: 4`, while `npm run build`, `npm run content-audit`, and `npm run audit:all` all remained green. The collision was corrected manually, but the repository still lacks a guard against recurrence. This is bounded technical validation work with objective pass/fail behavior and no palmistry-content judgment.

## Authorized scope
1. Start from current `main` and inspect the lesson content schema plus existing audit/validation scripts and package scripts.
2. Implement the smallest maintainable automated check that detects duplicate lesson `order` values within the same `module` and exits non-zero with a useful message identifying the conflicting module/order/files.
3. Integrate the check into the existing validation path that best fits repository conventions so ordinary CI catches future collisions. Prefer extending an existing audit rather than creating unnecessary parallel tooling.
4. Add a focused regression fixture/test or equivalent deterministic verification if the current audit architecture supports it cheaply; otherwise demonstrate the failure mode with a temporary/local validation method that is not committed as fake content.
5. Preserve existing validation behavior for valid curriculum content.
6. Update only directly necessary canonical docs required by `AGENTS.md` to record the new guardrail.

## Guardrails
- Do not change lesson content, frontmatter values, module ordering, routes, titles, palmistry meanings, quotations, citations, or source framing merely to exercise the validator.
- Do not touch the source-sensitive Sun/Mercury rewrite, capstone editorial rewrite, unresolved life-line testing phrase, or unrelated Batch 3F content.
- Do not alter deployment, monetization, external services, dependencies, or generated artifacts unless a dependency change is strictly necessary; prefer no dependency changes.
- Keep diagnostics actionable and deterministic.

## Acceptance criteria
- Duplicate `order` values are rejected only when they occur within the same lesson `module`.
- The error clearly identifies enough context to correct the collision.
- Distinct modules may legitimately reuse the same numeric order without failure.
- Current valid curriculum passes the new check.
- Existing CI/audit behavior remains green on current valid content.
- Final diff is bounded to validation/tooling, directly necessary docs, and the Relay result artifact.

## Verification
- Run the new/updated targeted validator against current valid content.
- Demonstrate that a same-module duplicate is detected and returns non-zero without committing fake curriculum data.
- Demonstrate that same order numbers across different modules remain valid.
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all` if the validation is integrated there or if affected by the implementation.
- Run `git diff --check` and inspect the final diff for scope drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-013-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-013-...` branch, and use one terminal result: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-013`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-013-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-013]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
