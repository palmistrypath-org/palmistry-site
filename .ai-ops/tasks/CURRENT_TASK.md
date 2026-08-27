# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-054

## Revision
1

## Risk Class
STANDARD

## Objective
Mechanically reconcile stale published-status markers in `docs/editorial-backlog.md` against the actual published blog collection and recent accepted Relay history, without changing editorial priorities or creating new content.

## Why this task now
The accepted PP-RELAY-053 cleanup closed a stale inventory-framing defect in a published article. The canonical editorial backlog itself still contains contradictory status surfaces: its status paragraph records Via Lascivia and Ring of Solomon as shipped, while their Next 10 table rows remain unstruck/unmarked as if still outstanding. Similar drift can cause the Director to duplicate already-shipped work. Before selecting more source-sensitive articles, perform one bounded mechanically verifiable backlog-status reconciliation against current `main`.

## Scope
Primary file:
- `docs/editorial-backlog.md`

Supporting only as directly necessary:
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-054-r1.json`

## Required method
1. Inspect the current published blog collection under `src/content/blog/` and the backlog's scored tables/status prose.
2. Cross-check recent accepted Relay history where a row's shipped status is ambiguous.
3. Correct only objectively stale published/unpublished markers, slugs, and directly related count/status prose in `docs/editorial-backlog.md`.
4. Do not change priority scores, reorder candidates, alter strategic recommendations, add/remove candidate ideas, or reinterpret an item's editorial value.
5. Do not edit any article/lesson prose or source claims.
6. If a row cannot be resolved mechanically from current repository state/history, leave it unchanged and mention it in the durable result rather than guessing.

## Acceptance criteria
- Every corrected published-status marker is corroborated by an actual published blog file and/or accepted merged Relay history.
- No already-published item remains presented as clearly outstanding where the contradiction is mechanically verifiable.
- No unshipped item is marked published without a corresponding live blog file.
- Published-count/status prose remains consistent with the repository's current content audit/inventory evidence.
- No priority score, ordering, editorial recommendation, SEO strategy, palmistry meaning, source claim, route, canonical, or indexability behavior changes.
- `npm run content-audit` passes.
- `git diff --check` passes.
- A full site build is optional because this is documentation-only; run it only if the worker touches runtime/content files, which is outside normal scope.

## Explicit no-change condition
Return `NO_CHANGE` if a mechanical comparison shows the backlog's published/unpublished markers, slugs, and current count/status prose are already internally consistent with the live blog collection and accepted Relay history. Include the verification evidence in the durable result and do not create a dummy PR.

## Boundaries
- Documentation/status reconciliation only.
- Do not use this task to select or draft the next article.
- Do not resolve the separate copyright-era quotation issue or vague-attribution editorial issue.
- Do not modify `docs/ROADMAP.md`, product direction, monetization, SEO strategy, or backlog scoring.
- Keep the fast lane disabled; this STANDARD task requires normal Director review.
- Stop with `HUMAN_REQUIRED` only for a genuine consequential decision that cannot be resolved from repository evidence.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-054-r1.json` on a pushed `claude/relay-PP-RELAY-054-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded changes plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-054 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-054"`, `revision: 1`, `risk_class: "STANDARD"`, terminal `result`, concise summary and verification, `source_preflight: null`, truthful execution telemetry, and `human_action: null` unless a genuine gate exists.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.