# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-053

## Revision
1

## Risk Class
STANDARD

## Objective
Reconcile stale inventory/framing language in the published Minor Lines overview after the companion-link expansion, without changing palmistry meanings or source claims.

## Why this task now
PP-RELAY-052 added contextual links to Ring of Solomon, Via Lascivia, and Intuition Line and explicitly noted that the overview still contains legacy framing centered on only four dedicated minor-line articles. Current `main` now routes to seven named minor-line/advanced-marking companions, while the opening, FAQ, and closing repeatedly describe the page as a map of only four. This is a bounded documentation/content-consistency repair discovered by the accepted navigation audit.

## Scope
Primary file:
- `src/content/blog/beginner/minor-lines-overview.md`

Supporting only as directly necessary:
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-053-r1.json`

## Required method
1. Inspect current `main` and identify statements whose numeric/inventory framing became stale because the article now links additional named minor markings beyond the original Sun Line, Mercury Line, marriage/relationship lines, and Girdle of Venus.
2. Reconcile only the stale inventory/navigation framing. Prefer neutral wording such as distinguishing the four lines discussed in depth from additional named markings linked later, rather than inventing a new taxonomy or asserting that exactly seven markings define a canonical set.
3. Preserve all existing palmistry interpretations, prevalence claims, historical/source attributions, health/relationship statements, and source footer verbatim unless a tiny grammatical adjustment is strictly necessary to make the inventory wording coherent.
4. Do not expand the article with new meanings or new companion topics.
5. Keep the existing PP-RELAY-052 links intact.

## Acceptance criteria
- The article no longer misleadingly implies that only four dedicated minor-line/advanced-marking companion articles exist on the site.
- The four in-depth sections remain accurately described as the four features covered in depth by this overview; additional linked markings are framed as additional named companions, not silently promoted into the same taxonomy.
- No palmistry interpretation, source attribution, prevalence/consensus claim, scientific/historical claim, health claim, SEO/indexing behavior, title, slug, or page structure is materially changed.
- Existing contextual links remain intact.
- `npm run build` passes.
- `npm run content-audit` passes.
- `npm run audit:all` passes.
- `git diff --check` passes.

## Explicit no-change condition
Return `NO_CHANGE` only if current `main` already contains internally consistent inventory/framing language after PP-RELAY-052 and no stale four-only wording remains. Include exact inspected passages in the durable result; do not create a dummy PR.

## Boundaries
- This is a wording/inventory consistency task, not a source-sensitive rewrite.
- Do not fix other legacy source-sensitive wording noticed during inspection; record it as a follow-up candidate instead.
- Do not edit companion articles, lessons, evidence/source-verification files, editorial priorities, code, schemas, routing, canonicals, or indexability.
- Keep the fast lane disabled; this STANDARD task requires normal Director review.
- Stop with `HUMAN_REQUIRED` only for a genuine consequential decision that cannot be resolved from current repository evidence.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-053-r1.json` on a pushed `claude/relay-PP-RELAY-053-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded changes plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-053 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-053"`, `revision: 1`, `risk_class: "STANDARD"`, terminal `result`, concise summary and verification, `source_preflight: null`, truthful execution telemetry, and `human_action: null` unless a genuine gate exists.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.