# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-057

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Evaluate and, only if approved evidence is sufficient, publish the approved editorial-backlog candidate **The Line of Mars in Palmistry** (`beginner/line-of-mars-palmistry`). Establish the feature's identity, location, and interpretation from named approved sources before drafting, and distinguish it carefully from the existing double-Life-Line topic without inventing a distinction or combination reading.

## Context
`docs/editorial-backlog.md` item 22 identifies this as the next outstanding scored candidate and notes that the Line of Mars is associated with the area inside the Life Line and may be confused with a double Life Line. The backlog is a planning lead, not evidence. Existing lesson/article prose is likewise a map to candidate claims, not automatic proof.

## Authorized scope
- Inspect approved repository-held source records and Tier 1/2 sources available under the editorial policy for explicit Line of Mars evidence.
- If evidence is sufficient, add one bounded article at the repository's normal beginner blog path/slug for `line-of-mars-palmistry`, following the existing article template and style guide.
- Add only directly necessary reciprocal/contextual links from the Life Line pillar/lesson or `double-life-line-meaning` when the final evidence supports the relationship and the link fits naturally.
- Update `docs/editorial-backlog.md`, `docs/source-verification-log.md`, and `docs/CHANGELOG.md` only as directly necessary for the verified result.
- Include `.ai-ops/results/PP-RELAY-057-r1.json`.

Do not alter unrelated palmistry meanings, site design, monetization, SEO/indexing strategy, Relay workflows, fast-lane policy, or other backlog priorities.

## Source-safety requirements
- Independently verify the name `Line of Mars` (and any claimed synonym such as inner Life Line), physical location/course, and every retained interpretation in a named approved source.
- Do not infer a Line-of-Mars meaning by combining separate Mars-mount and Life-Line meanings.
- Do not infer that it is equivalent to, distinct from, or frequently confused with a double Life Line unless that specific relationship is supported; otherwise present only a neutral observational distinction that is mechanically evident from verified definitions.
- Do not invent prevalence/frequency, fixed measurements, stronger-with-degree rules, health/vitality/lifespan/danger claims, protective guarantees, personality claims, event timing, or combinations with mounts/other lines.
- Avoid vague anonymous authority (`modern palmists`, `some writers`, `traditional readers`, etc.).
- Keep observation, named-source historical interpretation, and Palmistry Path editorial guidance visibly separate.
- Quotation marks require verified verbatim wording from the cited edition.
- If source evidence is insufficient for a useful standalone article, do not pad or synthesize. Return `HUMAN_REQUIRED` with the exact missing evidence/gate, or `NO_CHANGE` only if the explicit no-change condition below is met.

## Required v2C source preflight
Before `READY_FOR_REVIEW`, run `npm run audit:claim-risk -- <each changed MD/MDX content file>` and manually disposition every finding. Then explicitly verify:
- prevalence/consensus wording is sourced or removed/narrowed;
- scientific/historical assertions are traceable to approved evidence;
- no invented combination reading appears;
- no vague source attribution appears;
- observation, historical interpretation, and Palmistry Path editorial guidance are separated;
- quotation fidelity is verified;
- safety boundaries are preserved.

The durable result must contain `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object for `READY_FOR_REVIEW`.

## Acceptance criteria
If an article is published:
- the Line of Mars identity/location and every interpretation are independently supported by named approved evidence;
- the article clearly and safely handles the double-Life-Line relationship without unsupported equivalence, prevalence, or synthesis;
- article frontmatter, relatedLesson, internal links, and metadata follow existing conventions;
- `npm run build`, `npm run content-audit`, targeted claim-risk audit, and `git diff --check` pass;
- directly necessary backlog/source/changelog bookkeeping is accurate;
- no scope drift.

If evidence is insufficient, the worker must not publish speculative prose and must return the appropriate durable non-change/gate result.

## Explicit no-change condition
`NO_CHANGE` is valid only if current `main` already contains a published `line-of-mars-palmistry` article satisfying this task's evidence and navigation requirements. Verify actual implementation/history before using this result.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-057-r1.json` on a pushed `claude/relay-PP-RELAY-057-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-057 revision 1. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-057"`, `revision: 1`, `risk_class: "SOURCE_SENSITIVE"`, terminal `result`, concise summary and verification, truthful source-preflight data, execution telemetry, and `human_action` only when a genuine gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.