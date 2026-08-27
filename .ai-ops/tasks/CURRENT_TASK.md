# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-055

## Revision
2

## Risk Class
STANDARD

## Objective
Complete the scored editorial-backlog published-status drift guard so malformed or ambiguous scored rows cannot be silently skipped, while preserving the otherwise sound revision-1 implementation.

## Revision history
- Revision 1 added `checkPublishedRowDrift` and correctly detected published/outstanding mismatches for rows matching the expected scored-row syntax.
- Revision 2 is a bounded remediation: cumulative Director review found that the single regex only matches already-well-formed scored rows, so a malformed scored row whose slug/status syntax no longer matches can be skipped entirely. That violates the fail-closed requirement for ambiguous/unparseable scored rows.

## Scope
Primary implementation:
- `scripts/audit-content.mjs`

Supporting only as directly necessary:
- small deterministic fixture/self-test support if needed
- `.ai-ops/results/PP-RELAY-055-r2.json`
- `docs/CHANGELOG.md`

Do not change palmistry content, backlog scores/order/priorities, SEO strategy, routes, canonicals, indexability, Relay workflows, or fast-lane policy.

## Required remediation
1. Preserve revision 1's correct published-vs-outstanding comparison for valid scored rows.
2. Ensure the audit first recognizes every scored article row independently of whether its slug cell is perfectly parseable, then validates/extracts the slug/status fields.
3. A malformed/empty/ambiguous scored-row slug or equivalent row syntax that prevents safe mapping to a live article must produce an explicit warning or, preferably for scored rows, a non-zero fail-closed audit error. It must not disappear merely because the strict extraction regex failed to match.
4. Preserve the existing published-count drift guard and all other content-audit behavior.
5. Add a controlled proof that deliberately corrupting a scored row's slug/status syntax is surfaced by the audit, then restore and show the clean audit passes.
6. Keep the change localized; no broad parser/framework refactor.

## Acceptance criteria
- `npm run content-audit` passes on the clean repository plus revision-2 changes.
- Controlled valid-row status mismatches still fail clearly in both published→outstanding and outstanding→published directions, or equivalent deterministic evidence proves both behaviors remain intact.
- A controlled malformed/ambiguous scored row that would not satisfy revision 1's strict extraction regex is explicitly surfaced rather than silently skipped.
- Existing `checkPublishedCountDrift` remains intact.
- `git diff --check` and `node --check scripts/audit-content.mjs` pass.
- No scope drift.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-055-r2.json` on a pushed `claude/relay-PP-RELAY-055-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the bounded implementation/docs plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with the standard Relay footers for PP-RELAY-055 revision 2. For non-change terminal outcomes, push the result branch and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-055"`, `revision: 2`, `risk_class: "STANDARD"`, terminal `result`, concise summary and verification, `source_preflight: null`, truthful execution telemetry, and `human_action: null` unless a genuine gate exists.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.