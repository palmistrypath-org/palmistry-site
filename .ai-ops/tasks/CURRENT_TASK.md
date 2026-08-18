# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-007

## Revision
2

## Revision note
Revision 1 never reached the Claude worker because the Relay Dispatch gate correctly failed closed: the packet/mirror were missing the gate-required `## Task ID` and `## Revision` sections. Revision 2 repairs only the control-plane packet format. The product task scope and acceptance criteria are unchanged.

## Objective
Remove the remaining blank `relatedArticle` content-audit warnings on current `main` using the smallest source-safe metadata correction.

## Authorized scope
1. Run `npm run content-audit` on current `main` and identify only warnings caused by blank/empty `relatedArticle` metadata.
2. Inspect the affected files and content schema/usage to determine the mechanically correct cleanup. Prefer removing an optional blank field rather than inventing a related article or relationship.
3. Change only the affected blank `relatedArticle` frontmatter/metadata and directly necessary project documentation/result artifact.
4. Run `npm run content-audit` and `npm run build`; use targeted additional validation only if the actual change requires it.
5. If current `main` has no blank `relatedArticle` warnings, return `NO_CHANGE` rather than inventing work.

## Guardrails
- Do not invent or add related-content relationships merely to silence a warning.
- Do not change palmistry meanings, claims, quotations, citations, article/lesson body copy, titles, routes, descriptions, schema semantics, or indexability.
- Do not touch unresolved Gettings quotations, the source-sensitive Sun/Mercury rewrite, or Batch 3F curriculum work.
- Follow `AGENTS.md` editorial/source and Git safety rules.

## Acceptance criteria
- All blank/empty `relatedArticle` warnings present at task start are eliminated through mechanically correct cleanup.
- No unrelated content-audit warnings are opportunistically changed.
- Build and content audit pass at their existing acceptance level.
- Final diff is bounded to the warned metadata, directly necessary docs, and Relay result artifact.

## Verification
- Run baseline `npm run content-audit` and record the warned files/reasons.
- After edits, run `npm run content-audit` again.
- Run `npm run build`.
- Run `git diff --check`.
- Review the final diff for scope drift.

## v2B durable-result contract — REQUIRED
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-007-r2.json`, commit it on a pushed `claude/relay-PP-RELAY-007-...` branch, and use one of these terminal results: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-007`
- `revision`: 2
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-007-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-007]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
