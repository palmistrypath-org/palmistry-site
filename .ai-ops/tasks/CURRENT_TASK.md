# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-055

## Revision
1

## Risk Class
STANDARD

## Objective
Add a bounded mechanical audit that detects when scored editorial-backlog rows drift out of sync with the actual published blog collection, preventing already-published articles from being presented as outstanding or unshipped rows from being marked published.

## Why this task now
PP-RELAY-054 corrected two objectively stale published-status markers in `docs/editorial-backlog.md`. A similar count-drift defect was previously corrected by PP-RELAY-025 and then prevented with `checkPublishedCountDrift` in `scripts/audit-content.mjs`. Published-row drift can cause duplicate task selection, so the next highest-value bounded follow-up is to guard this newly observed failure mode mechanically rather than rely on repeated manual reconciliation.

## Scope
Primary implementation:
- `scripts/audit-content.mjs`

Supporting only as directly necessary:
- `scripts/fixtures/` if a small deterministic fixture is the cleanest test mechanism
- `package.json` only if a dedicated self-test command is genuinely necessary
- `.ai-ops/results/PP-RELAY-055-r1.json`
- `docs/CHANGELOG.md`

Do not edit `docs/editorial-backlog.md` unless validation exposes a new objectively stale marker on current `main`; if that occurs, correct only the mechanically proven marker/count defect and document it.

## Required behavior
1. Inspect the scored article tables in `docs/editorial-backlog.md` and the live blog collection under `src/content/blog/`.
2. Add a narrow audit that can determine, for scored backlog rows with a usable slug, whether publication status is mechanically consistent with the existence/nonexistence of the corresponding live blog article.
3. Fail clearly when a scored row is presented as outstanding even though its corresponding blog article exists, or is presented as published even though the corresponding live article does not exist.
4. Preserve the existing published-count drift check and all existing content-audit behavior.
5. Handle known historical/status wording conventions conservatively. Do not redesign the backlog format or infer publication from prose outside the scored row unless required to parse the row's explicit status marker.
6. If a row cannot be mechanically mapped to a live blog path because its slug/status syntax is ambiguous, fail or warn explicitly rather than guessing; choose the least disruptive behavior that still prevents silent false confidence and document the decision in the result.
7. Demonstrate the new guard with a controlled mismatch test proving that the audit fails when a published row is made to look outstanding (or equivalent deterministic fixture), then restore the repository and show the clean audit passes.

## Acceptance criteria
- `npm run content-audit` passes on clean current `main` plus the worker changes.
- A controlled stale-marker mismatch produces a clear non-zero audit failure identifying the affected slug/row or equivalent actionable context.
- The existing published-count drift safeguard still works and is not weakened.
- No palmistry article/lesson prose, source claims, priority scores, candidate ordering, SEO strategy, routes, canonicals, or indexability behavior changes.
- No broad parser/framework refactor; keep the implementation localized and reviewable.
- `git diff --check` passes.
- If runtime/content files are touched unexpectedly, run the normal validation required by `AGENTS.md`; otherwise a full site build is optional for this tooling/docs-only task.

## Explicit no-change condition
Return `NO_CHANGE` only if the current content audit already enforces scored-row published/unpublished consistency against the live blog collection with an equivalent fail-closed controlled mismatch proof. Include the exact existing implementation/test evidence in the durable result and do not create a dummy PR.

## Boundaries
- This is a tooling/integrity task, not an editorial reprioritization task.
- Do not add, remove, reorder, or rescore backlog candidates.
- Do not draft the next backlog article.
- Do not change Relay dispatch/auto-merge workflows or fast-lane policy.
- Keep fast lane disabled; this STANDARD task requires normal Director review.
- Stop with `HUMAN_REQUIRED` only for a genuine consequential decision that cannot be resolved from repository evidence.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-055-r1.json` on a pushed `claude/relay-PP-RELAY-055-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded implementation/docs plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-055 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-055"`, `revision: 1`, `risk_class: "STANDARD"`, terminal `result`, concise summary and verification, `source_preflight: null`, truthful execution telemetry, and `human_action: null` unless a genuine gate exists.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.