# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-027

## Revision
2

## Risk Class
STANDARD

## Revision note
Revision 2 is bounded remediation for Director review of revision 1. The orphan detector correctly filters target articles for indexability, but it currently records inbound links from any built page. Fix only this gap so a link counts toward discoverability only when its source page is itself indexable under the repository's existing indexability policy. Preserve the accepted `/blog/` source exclusion and self-link exclusion. Add or demonstrate a controlled case proving that a noindex/private source link does not rescue an otherwise orphaned article.

## Objective
Add a bounded internal-link discoverability audit that identifies published blog article routes with no meaningful inbound internal link from another indexable site page, so newly published content cannot silently become orphaned from the site's navigational/link graph.

## Why this task
The repository already has a strong broken-link audit, but it verifies that links point to existing targets rather than whether published articles are actually discoverable through inbound internal links. After the recent editorial expansion to 60 published posts, preventing orphaned articles is a high-value, mechanically reviewable SEO hygiene improvement and a useful STANDARD v2C task.

## Allowed scope
- Inspect the built-site structure and existing `scripts/audit-links.mjs`, content collections, and audit command wiring.
- Implement the smallest maintainable audit for published blog article routes that have zero meaningful inbound internal links from other indexable site pages.
- Exclude self-links and clearly non-content/system surfaces where counting them would create false confidence; document any bounded exclusions in code or concise canonical docs.
- For revision 2, ensure the source page of a counted inbound link is indexable under the existing `src/indexability.mjs` policy; noindex/private source pages must not count.
- Preserve the deliberate `/blog/` listing-page exclusion as a source and the self-link exclusion unless objective evidence shows either is incorrect.
- Prefer extending existing link-audit tooling or its already-required audit path rather than adding an unused standalone tool.
- Emit actionable failures naming orphaned article route(s).
- Prove the detector with a controlled/synthetic orphan condition or equivalent deterministic fixture/test that is fully restored and not committed as content damage.
- For revision 2, additionally prove that an inbound link from a noindex/private source does not satisfy the orphan check.
- Update narrowly relevant tooling documentation only when needed.
- Necessary Relay result/bookkeeping files may be changed.

## Out of scope
- Do not add or rewrite palmistry article prose merely to make the audit pass. If existing orphaned articles are discovered, report them in the result and either fix only straightforward contextual/internal navigation links that do not change palmistry meanings, or return a bounded blocker if resolving them would require semantic/source-sensitive editorial work.
- No keyword strategy, indexing-policy changes, sitemap redesign, external SEO research, monetization, visual redesign, deployment, or fast-lane changes.
- Do not require every article to meet an arbitrary link-count threshold; this task is about zero meaningful inbound links, not link-density optimization.
- Do not redesign the overall audit architecture or add dependencies unless objectively necessary.
- Do not broaden revision 2 into unrelated link-audit refactoring.

## Acceptance checks
- Existing valid internal links continue to be checked for broken targets.
- Every published/indexable blog article is evaluated for at least one meaningful inbound internal link from another indexable site page under clearly defined rules.
- Self-links alone do not satisfy the check.
- `/blog/` listing-page links do not satisfy the check under the existing approved rationale.
- A link whose source page is noindex/private does not satisfy the check.
- A controlled orphan condition fails with an actionable route/path message, and normal repository state passes after restoration or after only bounded source-safe link fixes.
- A controlled noindex/private-source condition demonstrates that non-indexable sources cannot mask an orphan.
- `npm run build`, the directly affected link/audit command, and `npm run audit:all` pass on final state.
- Final diff contains no unrelated content rewrite, SEO strategy change, or refactor.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-027-r2.json` on a pushed `claude/relay-PP-RELAY-027-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: STANDARD`, terminal `result`, verification performed, changed paths, tests/checks, discovered orphan routes if any, and any blocker/gate details. `source_preflight` may be null because this is not SOURCE_SENSITIVE.

## PR contract
If changed work is `READY_FOR_REVIEW`, update the single existing Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-027
RELAY_TASK_REVISION: 2
RELAY_RESULT: READY_FOR_REVIEW
