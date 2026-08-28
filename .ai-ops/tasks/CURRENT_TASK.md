# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-058

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Remediate the source-safety defect found by independent Director review after PP-RELAY-058 revision 1 was merged out of band. Keep the already-published Rascettes article, but remove or narrowly rewrite unsupported empirical/scientific wording so every remaining non-editorial claim stays inside the approved Benham evidence boundary.

## Revision history
- Revision 1 created `src/content/blog/beginner/rascettes-palmistry.md` and was merged as PR #105 at head `ac2b6b59ae5fd4f2f557aea73c93f100965576a1` before Director `MERGE_APPROVED` state existed.
- Independent Director review accepted the overall article structure and Benham historical treatment but rejected the sentence asserting that "no consistent relationship between palm markings and outcomes like lifespan has been established." That is a broad empirical/scientific claim not supported by `.ai-ops/evidence/PP-RELAY-058-benham-rascettes-boundary.md` or another approved source in this task.
- This revision is bounded remediation of that defect; it is not authorization to broaden the article or add new evidence-heavy claims.

## Director-verified evidence boundary
Read `.ai-ops/evidence/PP-RELAY-058-benham-rascettes-boundary.md`. Benham supports the historical Rascettes claims already recorded there. The repository safety/editorial policy supports stating Palmistry Path's own non-medical, non-predictive editorial position. It does **not** by itself support a broad empirical claim about what science has or has not established.

## Authorized scope
- Edit `src/content/blog/beginner/rascettes-palmistry.md` only as needed to remove or narrowly rewrite the unsupported empirical sentence and any immediately adjacent wording necessary for grammatical coherence.
- Preferred resolution: state Palmistry Path's editorial/safety position directly (for example, that the site does not use wrist creases to diagnose health or predict lifespan) without making a new scientific-evidence claim.
- Reinspect the complete final article for any equivalent unsupported scientific/historical assertion, unsupported prevalence/consensus language, invented combination reading, or vague anonymous authority; remove/narrow any such wording only if directly necessary to make revision 2 source-safe.
- Update `docs/source-verification-log.md` and `docs/CHANGELOG.md` only as needed to record the remediation accurately. Do not rewrite unrelated history.
- Include `.ai-ops/results/PP-RELAY-058-r2.json`.

## Prohibited scope / source-safety requirements
- Do not add new sources merely to preserve the rejected scientific sentence; the bounded/default fix is to remove or narrow the claim.
- No new medical, health, vitality, lifespan, reproductive, disease, pregnancy, prevalence, consensus, or scientific-evidence claim.
- No new Rascette meanings, combinations, geometry rules, count norms, or stronger-with-degree extrapolations.
- Do not introduce West (1998), Fincham (2005), commercial palmistry pages, or anonymous practitioner consensus.
- Do not change slug, title, article positioning, related lesson, or backlog published status unless required to correct a concrete factual bookkeeping error discovered during this bounded remediation.

## Required v2C source preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/rascettes-palmistry.md` and manually disposition every finding.
2. Manually inspect the complete final article for unsupported prevalence/consensus language, unsupported scientific/historical claims, invented combinations, vague authority, quotation fidelity, and separation of observation vs Benham historical interpretation vs Palmistry Path editorial guidance.
3. Confirm the rejected broad empirical sentence is absent and no equivalent unsourced scientific claim replaces it.
4. Keep the article's safety position framed as Palmistry Path editorial policy rather than an unsupported empirical conclusion.

The durable result must contain `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object for `READY_FOR_REVIEW`.

## Acceptance criteria
- the unsupported broad empirical/scientific lifespan-evidence claim is removed or source-safely narrowed;
- no equivalent unsupported scientific claim remains;
- Benham historical claims remain inside the existing Director evidence boundary;
- Palmistry Path's non-medical/non-predictive safety position remains clear;
- no new unsupported prevalence, consensus, combination, or vague-authority claim is introduced;
- article/bookkeeping changes remain narrowly scoped;
- `npm run build`, `npm run content-audit`, targeted claim-risk audit, and `git diff --check` pass; run broader audits only if the actual changes warrant them;
- no scope drift.

## Explicit no-change / human-gate condition
`NO_CHANGE` is not expected because the unsupported sentence is present on `main`. Return `HUMAN_REQUIRED` only if a genuine new source/editorial decision becomes unavoidable; do not escalate merely to preserve the rejected sentence.

## Durable result contract
Every worker run that passes startup must write `.ai-ops/results/PP-RELAY-058-r2.json` on a pushed `claude/relay-PP-RELAY-058-...` branch before stopping.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit the authorized remediation/docs plus result artifact, push exactly one matching Relay branch, and open exactly one PR to `main` with standard Relay footers for PP-RELAY-058 revision 2. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the result branch containing the artifact and normally do not create a dummy PR.

The result artifact must include `schema_version: 2`, `task_id: "PP-RELAY-058"`, `revision: 2`, `risk_class: "SOURCE_SENSITIVE"`, terminal `result`, concise summary and verification, truthful source-preflight data, execution telemetry, and `human_action` only when a genuine unresolved gate remains.

## Stop condition
After producing the durable terminal result and PR when applicable, stop. Do not merge, choose another task, or broaden scope.