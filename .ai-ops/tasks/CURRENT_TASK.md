# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
9

## Risk Class
SOURCE_SENSITIVE

## Objective
Finish the bounded source-integrity cleanup of the legacy Head Line pillar against current `main`, preserving the sound cumulative revision-8 cleanup while removing the small set of residual naming-history, popularity/usage, and anonymous tradition-wide claims found in Director review.

## Revision 9 remediation
Revision 8 correctly rebuilt the cleanup from actual `main` and removed the large majority of unsupported prevalence, degree-scaling, clinical, combination-reading, and vague-authority claims. Do **not** restart or broaden the task. Modify only the residual source-boundary statements below and directly equivalent wording found in the same focused pass:

1. **Writer's-fork naming/usage claim:** remove or evidence-bound the sentence saying that in the "popular Western tradition" the feature is known as the "writer's fork" and "sometimes" the "lawyer's fork." The controlling packet already states that Cheiro/Benham non-use does not establish who uses either label, how common either label is, synonym status, chronology, or naming popularity. Do not substitute an equivalent unsupported usage claim.
2. **Writer's-fork naming rationale:** remove or narrow "The interpretation behind the name..." unless the repository evidence directly verifies the naming rationale. It is safe to present Cheiro's verified `dual mentality` interpretation as Cheiro's reading without explaining why a later popular label arose.
3. **Tradition-wide/anonymous-authority claims:** remove or narrow the residual broad statements "this variation carries close traditional attention ... the tradition is precise," "the popular pairing of long with intelligent is a simplification the tradition does not support," "the classical reading is of transformation rather than catastrophe," and "the tradition distinguishes type of thinking, not its worth." Recast only as named-source interpretation or Palmistry Path editorial framing when supported; do not replace them with equivalent anonymous consensus wording.
4. Preserve the accepted revision-8 removals/narrowings, the Director-verified Benham direction boundary, the verified Cheiro `dual mentality` quotation, and the explicit Palmistry Path IQ/vocation/mental-health editorial-policy framing.
5. Do not broaden into re-sourcing unrelated Head Line interpretations. If a separate material source issue outside these residual categories is noticed, record it for a later bounded task rather than expanding this revision.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r9.json`

Do not create another article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated legacy claims.

## Controlling evidence and boundaries
- Current `main` is the authority for the starting baseline; revision 8 PR #72 is unmerged and may be used only as remediation history. Reconstruct revision 9 from `main` while carrying forward the sound revision-8 edits in the new branch.
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` controls straight/practical and sloping-toward-Luna/imagination wording.
- Existing source-verification records support only claims they explicitly verify.
- Cheiro's verified writer's-fork material supports the historical `dual mentality` interpretation; it does not establish modern writer/lawyer label prevalence, synonym usage, naming history, chronology, or population associations.
- Cheiro/Benham non-use of a label does not prove who uses it, how common it is, when it arose, or that another label is an established synonym.
- Do not invent prevalence, consensus, chronology, naming history, population norms, population correlations/non-correlations, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md` against the final article and truthfully disposition every finding.
2. Manually inspect every writer's-fork mention (main section, FAQ, myths) for unsupported naming/usage/popularity/synonym/rationale claims.
3. Search the final article for broad anonymous-authority formulations including `tradition`, `traditional attention`, `classical`, `popular`, `writers`, `commonly`, `sometimes`, `known as`, and equivalent wording; retain only named-source, directly supported, or clearly Palmistry Path editorial statements.
4. Confirm revision-8 writer's-fork vocation/talent caution remains editorial policy rather than a population claim.
5. Confirm IQ/cognitive-ability and mental-health cautions remain Palmistry Path editorial policy rather than tradition-wide consensus claims.
6. Confirm no risky phrase is replaced by an equivalent unsupported synonym.
7. Record concise evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. The final cumulative diff contains the sound revision-8 cleanup plus only the bounded revision-9 residual corrections.
2. No unsupported claim remains that the writer's/lawyer's-fork labels are popular, common, occasional, synonymous, chronologically established, or named for a particular rationale unless specifically verified by approved evidence.
3. The four Director-flagged residual anonymous tradition-wide claims are removed, named-source bounded, or explicitly reframed as Palmistry Path editorial policy without equivalent replacement wording.
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
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r9.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, naming/usage/chronology, population claims, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, medical/clinical framing, and observation-vs-interpretation-vs-editorial-policy separation.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language.
- Revision 2: removed residual unsupported prevalence/consensus and anonymous-authority language.
- Revision 3: removed residual population/comparative-prevalence claims.
- Revision 4: narrowed unsupported classical-text chronology and tradition-wide IQ consensus claims.
- Revision 5: removed equivalent unsupported anonymous-authority/naming claims still retained in the writer's-fork subsection.
- Revision 6: reframed the main writer's-fork talent/creative-potential wording from unsupported empirical non-association to Palmistry Path editorial policy.
- Revision 7: attempted an article-wide writer's-fork consistency pass, then correctly exposed the unmerged-baseline control-plane problem.
- Revision 8: repaired that baseline problem and rebuilt the complete cleanup against actual current `main`; Director review found a small residual set of naming/usage and anonymous tradition-wide claims.
- Revision 9: bounded final pass for those residual writer's-fork naming/usage/rationale and anonymous tradition-wide statements.