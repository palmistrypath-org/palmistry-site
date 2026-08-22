# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-041

## Revision
4

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the Straight vs Curved Head Line companion article within the Director-verified Benham direction evidence boundary, removing the last unsupported cross-feature interpretation found during cumulative revision-3 review.

## Why this revision
Revision 3 correctly grounded the article's direction/path meanings in `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md`, removed unsupported degree/prevalence/consensus claims, completed the source preflight, and produced a reviewable PR. Cumulative Director review found one remaining source-boundary leak: the `Path in context` section says depth/clarity is an observation about `focus and concentration`. Revision 3's approved evidence establishes only Head Line direction/path meanings; it does not establish that separate depth/clarity interpretation. The task's acceptance contract requires every retained interpretation to be traceable to the Director evidence note or another independently verified approved source.

A second narrow wording check is also required: if the phrase saying Benham regarded direction as `one of its more telling features` is not directly established in the Director evidence note, remove/narrow that embellishment rather than extending the historical claim.

## Scope
Primary content scope:
- `src/content/blog/beginner/straight-head-line-palmistry.md` only as needed for the revision-4 remediation.

Supporting scope:
- `docs/source-verification-log.md` for revision-4 claim disposition;
- `docs/editorial-backlog.md` and `docs/CHANGELOG.md` only if directly necessary to keep the revision internally consistent;
- `.ai-ops/results/PP-RELAY-041-r4.json`.

Do not rewrite the canonical Head Line lesson, modify claim-risk tooling, create unrelated articles, or expand into the separate legacy `blog/beginner/head-line.md` degree-scaling cleanup.

## Revision 4 required remediation
1. Remove or neutralize the statement that Head Line depth/clarity signifies `focus and concentration` unless an independently verified approved source already in the repository directly supports that interpretation and is explicitly identified in the durable source disposition. The simplest acceptable fix is to say depth/clarity is a separate feature covered elsewhere, without assigning it a meaning here.
2. Review `William G. Benham ... read the direction of the head line as one of its more telling features.` If `one of its more telling features` is not directly established by the Director evidence note, narrow it to a factual attribution such as `Benham associated Head Line direction with different mental tendencies.`
3. Preserve the accepted revision-3 evidence boundary: straight-running Head Line → Benham/practical mentality; sloping toward Luna → Benham/imagination/departure from purely material thought; writer/poet examples may be historical illustrations only, not a degree rule.
4. Preserve the prohibition on fixed angles/zones/averages, prevalence/frequency, vague consensus, IQ/intelligence superiority, invented combinations, deterministic personality, clinical/medical language, and stronger-with-degree creative/artistic extrapolation.
5. Do not introduce a replacement interpretation merely to fill removed prose.

## Source boundary
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` is the controlling evidence for direction/path meanings.
- The canonical Head Line lesson is terminology/navigation context, not proof.
- Any additional retained interpretation must identify a separately approved, independently verified repository source; otherwise remove/narrow it.
- Keep observation, historical interpretation, and Palmistry Path editorial guidance distinguishable.

## Required source-sensitive preflight
Before `READY_FOR_REVIEW`, inspect the complete final article and explicitly disposition every palmistry meaning, prevalence/consensus claim, historical/scientific assertion, anonymous-authority phrase, quotation, fixed cutoff/average/degree extrapolation, and combination reading. Run the targeted claim-risk audit and manually disposition every finding. A clean heuristic scan is not proof of source sufficiency.

## Acceptance criteria
1. The article remains useful and search-intent matched.
2. All direction/path interpretations remain within the Director Benham evidence boundary.
3. No unsupported depth/clarity meaning remains in this article.
4. No unsupported `more telling feature` historical embellishment remains.
5. No unsupported prevalence, consensus, vague authority, scientific/historical, precision/degree, or combination claim remains.
6. Navigation and the already-accepted revision-3 structure remain intact unless directly necessary for remediation.
7. SOURCE_SENSITIVE preflight is complete and truthful with claim-by-claim disposition recorded durably.
8. Build/content/link/audit validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/straight-head-line-palmistry.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## No-change / stop conditions
Return `NO_CHANGE` only if the revision-3 article already contains no unsupported cross-feature interpretation or historical embellishment and the revision-4 log demonstrates that claim by claim.

Return `HUMAN_REQUIRED` only if retaining a material claim requires source evidence beyond the Director note and approved evidence that cannot safely be obtained. Removing/narrowing the two identified residual phrases does not require a human gate.

Return `BLOCKED` for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-041-r4.json` on a pushed `claude/relay-PP-RELAY-041-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded Straight vs Curved Head Line companion article after canonical Head Line source-integrity cleanup.
- Revision 2: required independent named-source verification because revision 1 treated canonical lesson prose as proof.
- Revision 3: Director independently obtained Benham evidence after Claude's source-access gate; authorized narrow straight/practical and sloping/imagination associations while prohibiting unsupported degree extrapolation.
- Revision 4: cumulative Director review found one residual unsupported depth/clarity interpretation and one potentially unsupported historical embellishment; remediation is limited to removing/narrowing those phrases while preserving revision-3 work.