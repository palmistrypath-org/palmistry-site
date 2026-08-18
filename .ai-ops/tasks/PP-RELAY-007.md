# PP-RELAY-007 — Blank relatedArticle warning cleanup

Revision: 1

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

## v2B durable-result contract
Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-007-r1.json` on a pushed `claude/relay-PP-RELAY-007-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push the branch, and open exactly one PR to `main` with the standard Relay footer. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact; a dummy PR is not required. Do not merge or choose another task.
