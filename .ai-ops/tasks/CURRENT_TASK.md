# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
10

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the bounded cumulative source-integrity cleanup of the legacy Head Line pillar against current `main`, preserving the sound revision-9 cumulative cleanup while removing the final directly equivalent unsupported popularity/anonymous-authority comparisons found in Director review.

## Revision 10 remediation
Revision 9 correctly removed the explicit writer's/lawyer's-fork naming-popularity and naming-rationale claims and recast the flagged tradition-wide statements. Cumulative Director review found two directly equivalent unsupported popularity comparisons still present in the article:

1. In the main writer's-fork section, remove or evidence-bound: `Cheiro's own reading of the fork was narrower than the popular version`.
2. In the myths section, remove or evidence-bound: `Cheiro's reading of the writer's fork was narrower than the popular idea suggests`.
3. Do not replace either phrase with `common`, `usual`, `modern`, `widely known`, `often`, `typically`, `popularly`, or any equivalent unsupported prevalence/usage/consensus wording.
4. It is safe to state Cheiro's verified `dual mentality` interpretation directly as Cheiro's reading and separately state Palmistry Path's editorial policy that the fork is not treated as proof of writing/creative ability.
5. Preserve the sound cumulative revision-9 cleanup, the Director-verified Benham direction boundary, the verified Cheiro quotation, and the existing Palmistry Path IQ/vocation/mental-health editorial-policy framing.
6. Do not broaden into re-sourcing unrelated Head Line interpretations. If a separate material source issue outside these final residual phrases is noticed, record it for a later bounded task rather than expanding this revision.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r10.json`

Do not create another article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated legacy claims.

## Controlling evidence and boundaries
- Current `main` is the authority for the starting baseline. Prior PP-RELAY-042 PRs are unmerged remediation history only.
- Revision 9 PR #73 is unmerged; reconstruct the cumulative sound cleanup against actual current `main` rather than assuming PR #73 landed.
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` controls straight/practical and sloping-toward-Luna/imagination wording.
- Cheiro's verified writer's-fork material supports the historical `dual mentality` interpretation; it does not establish a competing interpretation as popular/common/usual or establish label prevalence, synonym usage, naming history, chronology, or population associations.
- Existing source-verification records support only claims they explicitly verify.
- Do not invent prevalence, consensus, chronology, naming history, population norms, population correlations/non-correlations, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md` against the final article and truthfully disposition every finding.
2. Manually inspect every writer's-fork mention (main section, FAQ, myths) for unsupported naming/usage/popularity/synonym/rationale or competing-popularity claims.
3. Search the final article for `popular`, `common`, `usual`, `modern`, `widely`, `often`, `typically`, `sometimes`, `known as`, `tradition`, `classical`, and equivalent wording; retain only named-source, directly supported, or clearly Palmistry Path editorial statements.
4. Confirm no risky phrase is replaced by an equivalent unsupported synonym.
5. Confirm writer's-fork vocation/talent caution remains editorial policy rather than a population claim.
6. Confirm IQ/cognitive-ability and mental-health cautions remain Palmistry Path editorial policy rather than tradition-wide consensus claims.
7. Record concise evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. The final cumulative diff contains the sound revision-9 cleanup plus only the bounded revision-10 residual corrections.
2. Neither `narrower than the popular version` nor `narrower than the popular idea suggests`, nor an equivalent unsupported prevalence/consensus comparison, remains.
3. Cheiro's writer's-fork interpretation is presented only as Cheiro's verified reading, without asserting that an alternative reading is popular/common/usual.
4. Direction/path wording remains inside the Director-verified Benham boundary.
5. Writer's-fork interpretation does not exceed the specifically verified Cheiro evidence; writing/creative/vocation caution remains Palmistry Path editorial policy.
6. IQ and mental-health safety wording remains Palmistry Path editorial framing, not exhaustive historical/tradition-wide claims.
7. No new palmistry meaning, prevalence claim, naming-history claim, scientific/medical claim, deterministic relationship claim, population correlation/non-correlation, or combination reading is invented.
8. SOURCE_SENSITIVE preflight is complete and truthful.
9. Required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a material residual scoped claim cannot be safely removed/narrowed and retaining it requires unavailable evidence or genuine editorial judgment. Routine removal/narrowing is not a human gate.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r10.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, naming/usage/chronology, population claims, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, medical/clinical framing, and observation-vs-interpretation-vs-editorial-policy separation.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revisions 1-6: successive bounded source-integrity cleanup passes on prevalence/consensus, population, naming, empirical non-association, and anonymous-authority wording.
- Revision 7: exposed the unmerged-baseline control-plane problem.
- Revision 8: rebuilt the cumulative cleanup against actual current `main`.
- Revision 9: removed residual writer's-fork naming/usage/rationale and anonymous tradition-wide statements; Director review found two directly equivalent unsupported `popular` comparisons still present.
- Revision 10: final bounded removal/narrowing of those two residual popularity comparisons.