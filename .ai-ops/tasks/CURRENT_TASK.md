# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-057

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Resolve the source-integrity finding from revision 1 without publishing a duplicate article. Reconcile the editorial backlog so **The Line of Mars in Palmistry** is no longer represented as a separate outstanding article topic when current approved evidence and published content identify `Line of Mars`, `inner life line`, `sister line`, and the double-Life-Line feature as the same historical subject.

## Revision history
- Revision 1 correctly returned `HUMAN_REQUIRED` rather than inventing a distinction. Its durable result on `claude/relay-PP-RELAY-057-line-of-mars` established that current published/source-verified repository content already treats Line of Mars as the same sister/inner/double Life Line feature.
- Director review independently confirmed that `src/content/blog/beginner/double-life-line-meaning.md` explicitly identifies Benham's `Line of Mars` with the sister/inner life line. This resolves the gate as a bounded backlog/source-integrity correction rather than an owner SEO/product decision.

## Authorized scope
- Do **not** create `line-of-mars-palmistry` or any other new article/route.
- Re-check current `main` evidence sufficient to establish the duplicate-topic identity, including the published double-Life-Line article, Life Line lesson, and existing source-verification records.
- Update `docs/editorial-backlog.md` only as necessary to mark/reframe the Line of Mars candidate as already covered by the existing `double-life-line-meaning` article rather than a separate outstanding article. Preserve the existing scores/order/history; do not reprioritize unrelated candidates.
- Carry forward or add a concise durable source-verification note in `docs/source-verification-log.md` documenting why a separate Line of Mars article was not published, using named repository-verified Benham/Cheiro evidence already available. Do not add quotations unless their verbatim fidelity is already verified in repository records.
- Update `docs/CHANGELOG.md` only if normal repository convention requires a note for this backlog/source-state reconciliation.
- Include `.ai-ops/results/PP-RELAY-057-r2.json`.

Do not alter published article prose, metadata, redirects, canonicals, indexing, SEO strategy, site design, monetization, Relay workflows, fast-lane policy, or other backlog priorities.

## Source-safety requirements
- The correction must state only what approved evidence supports: the existing repository treats Line of Mars as the same sister/inner/double Life Line subject, not as a separately established feature.
- Do not infer a new distinction, synonym chronology, prevalence/frequency, search-volume conclusion, or cross-tradition consensus.
- Do not turn the revision into an SEO decision about aliases, redirects, metadata, or a second route.
- Avoid vague anonymous authority. Attribute historical identity claims to named verified sources/records where necessary.
- Keep repository editorial disposition separate from historical-source claims.

## Required v2C source preflight
Before `READY_FOR_REVIEW`, run `npm run audit:claim-risk -- <each changed MD/MDX content file>` for any changed content file; if only docs/Relay artifacts change, manually apply the same source-claim checks to the changed source-sensitive prose. Explicitly verify:
- prevalence/consensus wording is sourced or absent;
- historical assertions trace to approved evidence;
- no invented distinction or combination reading appears;
- no vague source attribution appears;
- historical evidence and Palmistry Path editorial disposition remain separate;
- quotation fidelity is preserved;
- safety boundaries are preserved.

The durable result must contain `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object for `READY_FOR_REVIEW`.

## Acceptance criteria
- no `line-of-mars-palmistry` article/route is created;
- the backlog no longer presents Line of Mars as an outstanding separate article when the existing double-Life-Line article already covers that historical feature/name;
- the source-verification record concisely preserves the evidence boundary and duplicate-topic disposition;
- no SEO/indexing/redirect/metadata decision is introduced;
- scores/order and unrelated backlog candidates remain unchanged;
- `npm run build`, `npm run content-audit`, and `git diff --check` pass when applicable under repository rules;
- no scope drift.

## Explicit no-change condition
`NO_CHANGE` is valid only if current `main` already marks the Line of Mars backlog candidate as covered/duplicate and contains an adequate durable source-verification record explaining that disposition. Otherwise perform the bounded documentation correction.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-057-r2.json` on a pushed `claude/relay-PP-RELAY-057-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized docs/bookkeeping plus the result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-057 revision 2. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-057"`, `revision: 2`, `risk_class: "SOURCE_SENSITIVE"`, terminal `result`, concise summary and verification, truthful source-preflight data, execution telemetry, and `human_action` only when a genuine unresolved gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.