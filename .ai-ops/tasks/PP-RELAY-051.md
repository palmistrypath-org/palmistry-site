# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-051

## Revision
1

## Risk Class
STANDARD

## Objective
Audit and repair contextual internal-link coverage from the four major-line pillar articles to their currently published variation/absence companion articles. Improve discoverability and cluster navigation without changing palmistry interpretations, source claims, SEO/indexing strategy, or page structure.

## Why this task now
PP-RELAY-050 completed the approved Next 25 article sequence and brought the live blog inventory to 72 posts. The approved roadmap calls for strengthening discovery/navigation around trustworthy content and for routing specific search-intent pages into the underlying concept/lesson. The repository already has an orphan-page audit, but that only proves some indexable inbound link exists; it does not guarantee that major-line pillar pages provide useful contextual routes into their variation companions. This bounded audit improves the completed content library before selecting another source-heavy article.

## Scope
Primary pillar files only unless the no-change condition applies:
- `src/content/blog/beginner/life-line.md`
- `src/content/blog/beginner/head-line.md`
- `src/content/blog/beginner/heart-line.md`
- `src/content/blog/beginner/fate-line.md`

Audit against the currently published companion articles in those four clusters, including the recent Relay additions and already-existing variation/absence pages. Discover the exact current filenames/slugs from repository state; do not assume a stale backlog slug.

Supporting only as directly necessary:
- `docs/CHANGELOG.md`
- `docs/CURRENT_STATE.md` only if canonical current-state wording materially changes
- `.ai-ops/results/PP-RELAY-051-r1.json`

Do not edit companion article prose, lessons, source-verification records, editorial backlog priorities, site code, routing, schemas, indexability rules, fast-lane policy, or unrelated docs.

## Required audit method
1. Enumerate the published companion pages for Life, Head, Heart, and Fate Line from the actual blog collection and current filenames.
2. For each companion, determine whether the corresponding pillar already contains a meaningful contextual link to it. Existing generic blog-index, footer, related-content widget, self-link, or lesson-only navigation does not substitute for a contextual pillar-to-companion link.
3. Add only genuinely missing contextual links. Prefer linking existing neutral words/phrases in relevant variation, FAQ, myth, or next-step prose. If no suitable existing phrase exists, add one short navigation sentence that identifies the companion topic without introducing a new interpretation.
4. Do not duplicate an existing contextual link merely to satisfy the audit.
5. Preserve all existing palmistry meanings and source framing verbatim except for the minimum punctuation/grammar needed to insert a link.
6. Keep anchor text descriptive and natural; do not keyword-stuff or create repetitive exact-match blocks.
7. Record a compact audit table in the durable result listing each companion checked and `already linked` or `link added`.

## Acceptance criteria
- Every currently published Life/Head/Heart/Fate variation or absence companion that belongs to one of the four pillar clusters has at least one meaningful contextual inbound link from its corresponding pillar, unless a specific documented cannibalization/navigation reason makes that inappropriate.
- Any changed pillar diff is navigation-only: no new palmistry interpretation, prevalence/consensus statement, source attribution, historical/scientific assertion, medical/relationship prediction, or SEO/indexing change.
- No duplicate contextual links are added where a suitable one already exists.
- No companion article or lesson prose is edited.
- `npm run build` passes.
- `npm run content-audit` passes.
- `npm run audit:links` passes if that script exists; otherwise run the repository's targeted link audit used by `audit:all`.
- `npm run audit:all` passes.
- `git diff --check` passes.

## Explicit no-change condition
Return `NO_CHANGE` if independent inspection proves that all currently published companion articles in the four major-line clusters already have meaningful contextual inbound links from their corresponding pillar and no navigation repair is warranted. A `NO_CHANGE` result must include the audited companion inventory/evidence; do not create a dummy PR.

## Boundaries
- This is a navigation/internal-link task, not a content rewrite.
- Do not change interpretations merely because legacy prose looks imperfect; source-sensitive cleanup must be a separate task.
- Do not add new companion topics, create new articles, change titles/slugs, or alter canonicals/indexability.
- Do not use the stale `feat/curriculum-wave-3e-3f` branch as authoritative state.
- Keep the fast lane disabled; this STANDARD task requires normal Director review.
- Stop with `HUMAN_REQUIRED` only for a genuine consequential decision that cannot be resolved from current approved repository evidence. Routine anchor/context choices are autonomous.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-051-r1.json` on a pushed `claude/relay-PP-RELAY-051-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded changes plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-051 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

The result artifact must include:
- `schema_version: 2`
- `task_id: "PP-RELAY-051"`
- `revision: 1`
- `risk_class: "STANDARD"`
- the terminal `result`
- concise summary and verification
- `source_preflight: null`
- truthful execution telemetry
- a compact companion-link audit inventory/evidence
- `human_action: null` unless a genuine gate exists

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.