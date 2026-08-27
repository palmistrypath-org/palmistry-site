# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-052

## Revision
1

## Risk Class
STANDARD

## Objective
Audit and repair contextual internal-link coverage from the published Minor Lines overview pillar to the site's currently published minor-line and related advanced-marking companion articles. Improve discovery/navigation without changing palmistry meanings, source claims, SEO/indexing strategy, or page structure.

## Why this task now
PP-RELAY-051 completed the same bounded cluster-navigation audit for the four major-line pillars and found one real discoverability gap. The approved roadmap prioritizes strengthening discovery/navigation around trustworthy content, and Palmistry Path now has a substantially expanded set of minor-line/advanced-marking search-entry articles. Before commissioning more source-heavy content, verify that the existing Minor Lines pillar provides useful contextual routes into the companions that actually belong to that cluster.

## Scope
Primary hub file:
- `src/content/blog/beginner/minor-lines-overview.md`

Audit against currently published companion articles that are genuinely part of the Minor Lines / advanced-markings cluster, discovering exact current filenames/slugs from repository state. Candidate topics include, where actually published and contextually appropriate:
- Sun / Apollo Line
- Mercury / Health Line
- Marriage / Relationship Lines
- Girdle of Venus
- Ring of Solomon
- Via Lascivia
- Intuition Line
- any other currently published minor-line companion that the repository's own lesson/backlog/current content clearly places in this cluster

Supporting only as directly necessary:
- `docs/CHANGELOG.md`
- `docs/CURRENT_STATE.md` only if canonical current-state wording materially changes
- `.ai-ops/results/PP-RELAY-052-r1.json`

Do not edit companion article prose, lessons, source-verification/evidence files, editorial backlog priorities, site code, routing, schemas, indexability rules, fast-lane policy, or unrelated docs.

## Required audit method
1. Enumerate the currently published articles that genuinely belong to the Minor Lines / advanced-markings cluster using actual repository content and existing curriculum/backlog relationships; do not force unrelated markings into the cluster merely because they are advanced topics.
2. For each in-scope companion, determine whether `minor-lines-overview.md` already contains a meaningful contextual link to it. Generic blog-index/footer/related-widget links do not count.
3. Add only genuinely missing contextual links. Prefer linking existing neutral words/phrases in the relevant line description. If no suitable phrase exists, add at most one short navigation sentence per genuinely missing topic, without introducing a new interpretation.
4. Do not duplicate existing contextual links.
5. Preserve existing palmistry meaning/source framing verbatim except for the minimum punctuation/grammar needed to insert links.
6. Keep anchors descriptive and natural; do not keyword-stuff.
7. Record a compact durable-result audit table listing each candidate companion, whether it was considered in-scope or out-of-scope for this cluster, and for in-scope companions whether it was `already linked` or `link added`.

## Acceptance criteria
- Every currently published companion that is clearly part of the Minor Lines / advanced-markings cluster has at least one meaningful contextual inbound link from `minor-lines-overview.md`, unless a specific documented cannibalization/navigation reason makes that inappropriate.
- Any changed article diff is navigation-only: no new palmistry interpretation, prevalence/consensus statement, source attribution, historical/scientific assertion, health/relationship prediction, or SEO/indexing change.
- No duplicate contextual links are added where a suitable link already exists.
- No companion article or lesson prose is edited.
- `npm run build` passes.
- `npm run content-audit` passes.
- Run the repository's targeted link/orphan audit used by `audit:all`.
- `npm run audit:all` passes.
- `git diff --check` passes.

## Explicit no-change condition
Return `NO_CHANGE` if independent inspection proves that every currently published in-scope Minor Lines / advanced-markings companion already has meaningful contextual inbound navigation from `minor-lines-overview.md` and no repair is warranted. Include the full candidate/in-scope audit evidence in the durable result; do not create a dummy PR.

## Boundaries
- This is a navigation/internal-link task, not a content rewrite or cluster-rearchitecture task.
- Do not change legacy interpretations merely because source-sensitive prose looks imperfect; record a separate follow-up candidate if needed.
- Do not create new articles, rename/reclassify existing articles, change titles/slugs, or alter canonicals/indexability.
- Do not use stale feature branches as authoritative state.
- Keep the fast lane disabled; this STANDARD task requires normal Director review.
- Stop with `HUMAN_REQUIRED` only for a genuine consequential decision that cannot be resolved from current approved repository evidence. Routine cluster-membership and anchor-context decisions that are clear from the current curriculum/backlog are autonomous.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-052-r1.json` on a pushed `claude/relay-PP-RELAY-052-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded changes plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-052 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

The result artifact must include:
- `schema_version: 2`
- `task_id: "PP-RELAY-052"`
- `revision: 1`
- `risk_class: "STANDARD"`
- the terminal `result`
- concise summary and verification
- `source_preflight: null`
- truthful execution telemetry
- a compact candidate/in-scope companion-link audit inventory/evidence
- `human_action: null` unless a genuine gate exists

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.