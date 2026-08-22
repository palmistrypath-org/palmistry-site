# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-041

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the Straight vs Curved Head Line companion article using the Director-verified Benham evidence boundary in `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md`, without reusing the canonical lesson as proof or adding unsupported degree/consensus claims.

## Why this revision
Revision 2 returned `HUMAN_REQUIRED` only because Claude's environment could not reach the needed public-domain primary text. The Director independently verified Benham's *The Laws of Scientific Hand Reading* (1900) and recorded a durable evidence note. That evidence supports a narrow straight-line/practical association and a sloping-to-Moon/imagination association, but does not support a monotonic “steeper = more creative/artistic” rule. This resolves the source-access gate without owner action.

## Scope
Primary content scope:
- revise `src/content/blog/beginner/straight-head-line-palmistry.md` only as needed to conform to the Director evidence note;
- preserve useful revision-1 structure, observational guidance, separation from length/depth/endpoint, and sound reciprocal links.

Supporting scope:
- `docs/source-verification-log.md` for revision-3 claim dispositions referencing the Director evidence note;
- `docs/editorial-backlog.md` only if final publish status/count changes directly;
- `docs/CHANGELOG.md` only as repository convention requires;
- `.ai-ops/results/PP-RELAY-041-r3.json`.

Do not rewrite the canonical Head Line lesson, modify claim-risk tooling, create unrelated articles, or expand into other legacy Head Line cleanup.

## Revision 3 required remediation
1. Use `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` as the controlling source evidence for the retained direction/path meanings.
2. A straight-running Head Line may be historically attributed to Benham as associated with practical mentality/thinking. Keep the wording narrow and non-deterministic.
3. A Head Line sloping toward the Mount of Moon/Luna may be historically attributed to Benham as associated with imagination and a departure from purely practical/material thought. Keep the wording narrow and non-deterministic.
4. Do **not** state or imply a monotonic rule such as “the steeper the slope, the more creative/artistic/imaginative.” Benham's examples of writers/poets do not establish that degree rule.
5. If the revision-1 strongly-sloping creative/artistic sentence cannot be rewritten within the narrow Benham evidence, remove it.
6. Do not add fixed angles/zones/averages, prevalence/frequency claims, vague consensus, IQ/intelligence superiority, invented combinations, diagnosis, deterministic personality, predictive-science, or medical claims.
7. Do not carry forward Benham's historical clinical/insanity language; it is unnecessary to this article.

## Source boundary
1. The Director evidence note is approved repository evidence for this revision.
2. The post-PP-RELAY-040 canonical Head Line lesson remains a map to candidate interpretations, not proof.
3. Keep observation separate from Benham's historical interpretation and Palmistry Path editorial guidance.
4. No anonymous authority such as `general tradition`, `modern palmists`, `some writers`, `experts`, or equivalent may carry an interpretation.
5. Do not synthesize path with length, depth, forks, mounts, hand shape, other lines, or endpoints into new combination readings.

## Required source-sensitive preflight
Before `READY_FOR_REVIEW`, inspect the complete final article and explicitly disposition:
- every palmistry meaning against the Director Benham evidence note or another independently verified approved source;
- every prevalence/consensus/frequency claim;
- every scientific or historical assertion;
- every anonymous-authority phrase;
- every quotation for edition-level fidelity;
- every fixed cutoff, average/norm, or stronger-with-degree extrapolation;
- every combination reading;
- observation vs historical interpretation vs Palmistry Path guidance.

Run the targeted claim-risk audit against the final article and manually disposition every finding. A clean heuristic scan is not proof of source sufficiency.

## Acceptance criteria
1. One useful, search-intent-matched Straight vs Curved Head Line companion article remains under established article conventions.
2. Straight and curved/sloping observations are comparative without a fixed zone/angle/average cutoff.
3. Every retained interpretation is traceable to the Director Benham evidence note or another identifiable approved source.
4. Straight/practical and sloping/imagination associations are attributed at the level Benham actually supports.
5. No unsupported stronger-with-degree creative/artistic rule remains.
6. No unsupported prevalence, consensus, vague authority, scientific/historical, precision/degree, or combination claim remains.
7. Article remains distinct from the broad Head Line guide and Short/Long companions; navigation remains useful and non-duplicative.
8. SOURCE_SENSITIVE preflight is complete and truthful, with claim-by-claim source disposition recorded durably.
9. Build/content/link/audit validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/straight-head-line-palmistry.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## No-change / stop conditions
Return `NO_CHANGE` only if the revision-1 article already conforms exactly to the Director evidence boundary and the revision-3 log demonstrates that claim by claim.

Return `HUMAN_REQUIRED` only if a useful article still requires source evidence beyond the Director note and other approved evidence that cannot be obtained safely; do not re-gate the Benham direction claims already verified by the Director.

Return `BLOCKED` for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-041-r3.json` on a pushed `claude/relay-PP-RELAY-041-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded Straight vs Curved Head Line companion article after canonical Head Line source-integrity cleanup.
- Revision 2: required independent named-source verification because revision 1 treated canonical lesson prose as proof.
- Revision 3: Director independently obtained Benham evidence after Claude's source-access gate; authorize narrow straight/practical and sloping/imagination associations, while prohibiting unsupported stronger-with-degree creative/artistic extrapolation.
