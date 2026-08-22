# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-041

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the Straight vs Curved Head Line companion article only after independently verifying the source basis for every retained straight/sloping interpretation; do not treat the cleaned canonical Head Line lesson itself as proof of legacy meanings.

## Why this revision
Revision 1 is mechanically sound and CI passed, but Director review found that its evidence method conflicts with this task's source boundary. The result/log says no new source research was performed and treats the post-PP-RELAY-040 canonical lesson as the evidence base. The packet explicitly said that lesson is only a map to candidate interpretations, not automatic proof for every legacy statement. In particular, the final article retains a Benham-specific straight-line paraphrase plus sloping/imaginative and strongly-sloping creative/artistic readings without independently establishing the source support for those retained meanings.

## Scope
Primary content scope:
- revise `src/content/blog/beginner/straight-head-line-palmistry.md` only as needed to make every retained straight/sloping palmistry meaning source-verifiable;
- preserve the useful article structure, observational guidance, distinction from length/depth/endpoint, and sound reciprocal links from revision 1.

Supporting scope:
- `docs/source-verification-log.md` for the revision-2 evidence record and claim dispositions;
- `docs/editorial-backlog.md` only if the final publish status/count changes as a direct consequence of this revision;
- `docs/CHANGELOG.md` only as repository convention requires;
- `.ai-ops/results/PP-RELAY-041-r2.json`.

Do not rewrite the canonical Head Line lesson, modify claim-risk tooling, create unrelated articles, or expand into other legacy Head Line source cleanup.

## Revision 2 required remediation
1. Independently verify the source basis for the retained straight-line meaning and the Benham-specific paraphrase. A statement merely appearing in the canonical lesson is not sufficient evidence for this revision.
2. Independently verify the source basis for the retained sloping/curved-line imaginative/intuitive reading and the stronger-sloping creative/artistic sentence. Do not use `general tradition`, `the canonical lesson`, or previous Director acceptance of claim-boundary wording as a substitute for an identifiable approved source.
3. For each retained meaning, record the named source/evidence in `docs/source-verification-log.md` at the level actually verified. If a source supports only a narrower claim, narrow the article accordingly.
4. If the strongly-sloping creative/artistic wording cannot be independently supported, remove it rather than converting it into vague consensus language.
5. Do not add fixed angles/zones/averages, prevalence/frequency claims, monotonic degree rules, invented combinations, IQ/intelligence superiority, diagnosis, deterministic personality, predictive-science, or medical claims.
6. If repository-held/public-domain evidence available to the worker is insufficient for a useful article after this verification pass, return `HUMAN_REQUIRED` with the exact unavailable evidence needed rather than guessing.

## Source boundary
1. The post-PP-RELAY-040 canonical Head Line lesson remains a map to candidate interpretations, not automatic proof.
2. Prefer verified Benham/Cheiro or other approved repository evidence; public-domain primary text may be verified when accessible.
3. Keep observation separate from historical/traditional interpretation and Palmistry Path editorial guidance.
4. No anonymous authority such as `general tradition`, `modern palmists`, `some writers`, `experts`, or equivalent may carry an interpretation without identifiable approved evidence.
5. Do not synthesize path with length, depth, forks, mounts, hand shape, other lines, or endpoints into new combination readings unless that exact combination is independently supported.

## Required source-sensitive preflight
Before `READY_FOR_REVIEW`, inspect the complete final article and explicitly disposition:
- every palmistry meaning against a named approved source/evidence record;
- every prevalence/consensus/frequency claim;
- every scientific or historical assertion;
- every anonymous-authority phrase;
- every quotation for edition-level fidelity;
- every fixed cutoff, average/norm, or stronger-with-degree extrapolation;
- every combination reading;
- observation vs historical interpretation vs Palmistry Path guidance.

Run the targeted claim-risk audit against the final article and manually disposition every finding. A clean heuristic scan is not proof of source sufficiency.

## Acceptance criteria
1. One useful, search-intent-matched Straight vs Curved Head Line companion article remains under the established article conventions.
2. Straight and curved/sloping observations are described comparatively without a fixed zone/angle/average cutoff.
3. Every retained palmistry meaning is independently traceable to identifiable approved evidence, not merely to legacy/canonical prose.
4. The Benham attribution/paraphrase is retained only to the extent independently supported.
5. The sloping/imaginative and any strongly-sloping creative/artistic reading is retained only to the extent independently supported; unsupported portions are removed or narrowed.
6. No unsupported prevalence, consensus, vague authority, scientific/historical, precision/degree, or combination claims remain.
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
Return `NO_CHANGE` only if revision-1 article claims can all be independently verified exactly as written and the revision-2 evidence record demonstrates that verification; do not use prior lesson wording alone as the verification.

Return `HUMAN_REQUIRED` if a useful article requires unavailable source acquisition, unresolved quotation/source fidelity, a new interpretation, or consequential editorial judgment not supportable from approved evidence.

Return `BLOCKED` for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-041-r2.json` on a pushed `claude/relay-PP-RELAY-041-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded Straight vs Curved Head Line companion article after canonical Head Line source-integrity cleanup.
- Revision 2: Director review found revision 1 treated the cleaned canonical lesson as proof despite the packet's explicit map-not-proof rule; require independent named-source verification for every retained straight/sloping interpretation and remove/narrow anything that cannot be established.