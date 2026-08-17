# Relay Task Packet

Status: AUTHORIZED

## Task ID
PP-RELAY-005

## Revision
1

## Objective
Replay the already-approved, independently audited Batch 3E **Simian Line module move** onto current `main` as a fresh bounded implementation, preserving the old lesson URL through a safe redirect and updating only directly affected navigation/indexability references. Do not merge, rebase, or wholesale copy the stale `feat/curriculum-wave-3e-3f` branch.

## Why this task is authorized
`docs/ACTIVE_TASK.md` names Batch 3E as the next approved curriculum action. Relay PP-RELAY-003 independently audited the stale 3E/3F branch and verified that the Simian Line move itself is within approved scope, source-safe, and technically clean: the lesson moves from Lines to Advanced, the generic line-quality self-reference is replaced by the existing Line Quality and Markings cross-reference, the old URL is preserved with a `noindex, follow` redirect/canonical, and affected internal links/indexability/schema handling are updated. This task deliberately isolates that mechanically reviewable subset and excludes the source-fidelity-sensitive Sun/Mercury rewrite and all 3F synthesis/practice work.

## Authorized scope
- Start from current `main`; inspect the current lesson ordering and current references before editing.
- Move `src/content/lessons/lines/06-simian-line.mdx` to the Advanced module as `src/content/lessons/advanced/simian-line.mdx` without broad content rewriting.
- Update frontmatter/module placement so the moved Simian lesson is an Advanced-module intermediate lesson after the three existing minor-line lessons. Preserve unique positive integer lesson order within the module. If required to avoid a collision on current `main`, make the smallest mechanical order adjustment to the existing capstone lesson; do not otherwise rewrite it.
- In the moved Simian lesson, remove the now-false self-reference that line-quality distinctions were taught in the same module and replace it with a concise cross-reference to the existing `line-quality-and-markings` lesson. Do not change the established palmistry interpretation or source framing.
- Preserve the old `/learn/lines/06-simian-line/` URL with a minimal redirect/stub to `/learn/advanced/simian-line/` that is `noindex, follow`, canonicalizes to the new route, is excluded from Pagefind/sitemap behavior according to existing project patterns, and does not falsely require lesson schema.
- Update directly affected module descriptions and internal links/references to point to the new Simian lesson route. Search the repository rather than relying only on the stale branch's historical file list.
- Update indexability/schema audit allowlists only as required for the redirect behavior.
- Update canonical project docs concisely to record that PP-RELAY-004 is now merged and this bounded 3E Simian move is the current/shipped change as appropriate. Reconcile against current `main`; do not copy stale 3E/3F branch docs wholesale.

## Explicit non-goals
- Do not revise `advanced/01-minor-lines-overview.mdx` to add/rewrite Sun or Mercury line content; its quote-fidelity spot-check remains a separate source-sensitive item.
- Do not add `Combining What You See`, `<Practice>`, `<Checkpoint>`, synthesis architecture, or other Batch 3F work.
- Do not resolve the separate Fred Gettings quotation issue or the legacy `life-line` testing-claim wording.
- Do not introduce new palmistry meanings, citations, quotations, source claims, or interpretations.
- Do not merge/rebase/cherry-pick the stale `feat/curriculum-wave-3e-3f` branch wholesale. It may be consulted only as audited evidence; implement deliberately against current `main`.
- Do not change monetization, visual direction, dependencies, deployment, account settings, or unrelated SEO behavior.
- Do not merge the PR or select the next task.

## Acceptance criteria
- The canonical Simian lesson lives at `/learn/advanced/simian-line/` and is categorized in the Advanced module with a unique valid order.
- The existing Advanced lessons retain a coherent, collision-free order after the move.
- `/learn/lines/06-simian-line/` continues to resolve through a safe redirect/stub with correct noindex/canonical/Pagefind/sitemap behavior.
- No unintended internal references still point to the old lesson URL except the intentional redirect/indexability machinery.
- The moved lesson's line-quality cross-reference is truthful after the module move and introduces no new palmistry claims.
- Existing content-audit order uniqueness and route/reference checks pass.
- No Sun/Mercury rewrite or 3F content/practice work is pulled into this task.
- Canonical docs accurately reflect current `main` and do not reintroduce stale branch narrative.

## Verification
- Run `npm run build`.
- Run `npm run content-audit`.
- Run `npm run audit:all`.
- Run `git diff --check`.
- Search for references to `/learn/lines/06-simian-line` and `06-simian-line` and confirm remaining uses are intentional redirect/indexability references only.
- Review the final diff for order collisions, broken route/schema/indexability behavior, source/editorial drift, scope expansion, and stale-doc reintroduction.

## v2B durable-result contract — REQUIRED
Because the configured Claude cloud Routine may predate Relay v2B, this task packet explicitly requires a durable terminal result.

Every worker run that passes startup must create `.ai-ops/results/PP-RELAY-005-r1.json`, commit it on a pushed `claude/relay-PP-RELAY-005-...` branch, and use one of these terminal results: `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

Minimum artifact fields:
- `schema_version`: 1
- `task_id`: `PP-RELAY-005`
- `revision`: 1
- `result`: one allowed terminal result
- `summary`: concise outcome
- `pr_number`: PR number for `READY_FOR_REVIEW`, otherwise normally `null`
- `verification`: concise verification evidence
- `human_action`: exact action only when applicable, otherwise `null`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one `claude/relay-PP-RELAY-005-...` branch, and open exactly one PR to `main` with title prefix `[RELAY PP-RELAY-005]` and matching Relay footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and do not create a dummy PR merely to signal completion. Absence of a PR is therefore valid for non-change terminal outcomes.

## Result
Stop after producing the durable result, pushing the Relay branch, and opening a PR only if the result is `READY_FOR_REVIEW`. Do not merge and do not select subsequent work.
