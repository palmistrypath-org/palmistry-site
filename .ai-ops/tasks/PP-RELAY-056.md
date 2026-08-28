# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-056

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Resolve the Teacher's Square candidate safely after revision 1 established insufficient approved evidence for a standalone article. **Do not publish the article.** Reconcile the editorial backlog/status so `teachers-square-palmistry` is explicitly deferred/source-unverified, and record the verified Director evidence boundary without inventing a Teacher's-Square interpretation.

## Revision note
Revision 1 returned `HUMAN_REQUIRED` only because Claude could not access Tier 1/2 sources. The Director independently checked Cheiro's searchable 1916 primary text and accessible Benham evidence and recorded `.ai-ops/evidence/PP-RELAY-056-teachers-square-source-boundary.md`. That evidence does not establish `Teacher's Square` as a Cheiro/Benham term or a teaching-specific square-on-Jupiter meaning. This is therefore a bounded source-integrity rework, not a genuine owner gate.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-056-teachers-square-source-boundary.md` before changing anything.

The controlling conclusion is:
- Cheiro's verified 1916 text contains no `teacher` occurrence and treats the square generally as a Mark of Preservation; the checked Jupiter material does not name or interpret a Teacher's Square.
- Benham's verified Jupiter material says a square can strengthen a mount, but the checked evidence does not name a Teacher's Square or assign teaching aptitude to a Jupiter square.
- Modern commercial/SEO pages claiming otherwise are discovery aids only and are not approved citation authority.

## Authorized scope
- **Do not create** `teachers-square-palmistry` article prose.
- Update `docs/editorial-backlog.md` only as needed to mark this candidate clearly as deferred/source-unverified so it is not treated as ready-to-publish from the existing note.
- Preserve its historical score/order unless the backlog format requires a neutral status marker; do not reprioritize unrelated candidates.
- Update `docs/source-verification-log.md` only if needed to record the Director evidence conclusion in the repository's normal format.
- Update `docs/CHANGELOG.md` only if normal project policy requires it for this durable editorial-state correction.
- Include `.ai-ops/results/PP-RELAY-056-r2.json`.

Do not change palmistry meanings, Jupiter content, square-marking content, Ring of Solomon content, SEO/indexing strategy, routes, canonicals, monetization, Relay workflows, or fast-lane policy.

## Source-safety requirements
- Do not transform Benham's generic `square strengthens a mount` rule plus Jupiter's separate qualities into a synthesized teaching meaning.
- Do not claim exhaustive historical absence beyond what the evidence note establishes. Use wording such as `not verified in the approved evidence checked for this task`, not `no historical source ever used this term`.
- Do not quote modern commercial/SEO sources as authority.
- Do not invent prevalence, exact geometry, chronology, consensus, teaching aptitude, intelligence, empathy, patience, leadership, communication, or career-success meanings.

## Required v2C preflight
Before `READY_FOR_REVIEW`:
- verify the backlog/status wording accurately reflects `source-unverified/deferred` rather than a false historical conclusion;
- verify no new Teacher's-Square interpretation or anonymous consensus claim was introduced;
- run appropriate docs/content validation for the files actually changed;
- run `git diff --check`.

The durable result must contain `risk_class: "SOURCE_SENSITIVE"` and a truthful `source_preflight` object.

## Acceptance criteria
- No Teacher's Square article is added.
- The backlog no longer presents the candidate as source-ready on the strength of an unverified Benham note.
- The durable repository record points to the Director evidence boundary and clearly states that the current approved evidence is insufficient for the named teaching-specific feature.
- No unrelated backlog scores/priorities or palmistry claims change.
- Required validation for changed files passes.
- No scope drift.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-056-r2.json` on a pushed `claude/relay-PP-RELAY-056-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded docs/status correction plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-056 revision 2. For non-change terminal outcomes, push the result branch and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-056"`, `revision: 2`, `risk_class: "SOURCE_SENSITIVE"`, terminal `result`, concise summary and verification, truthful source-preflight data, execution telemetry, and `human_action` only when a genuine gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.