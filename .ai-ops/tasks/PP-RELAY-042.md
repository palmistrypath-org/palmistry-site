# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
6

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the legacy Head Line pillar. Revision 5 fixed the writer's-fork naming/anonymous-authority problem, but cumulative Director review found one residual unsupported population/empirical generalization in the same subsection.

## Revision 6 remediation
Preserve all sound revision-1 through revision-5 corrections. Make only these cumulative corrections in `src/content/blog/beginner/head-line.md`, plus directly necessary verification/log/result updates:

1. In the writer's-fork subsection, the revision-5 wording still states that `The fork does not track writing talent in either direction` and that neither its presence nor absence indicates creative potential. The approved evidence supports Cheiro's historical `dual mentality` interpretation, but does not establish a population-level empirical non-association between this fork and writing/creative talent. Remove or narrow those statements so they are framed as Palmistry Path editorial caution rather than an evidence claim. A safe form is that Palmistry Path does not treat the feature as proof of writing or creative ability; do not assert what population data do or do not show unless approved evidence establishes it.
2. Re-read the complete writer's-fork subsection for directly equivalent empirical, population, prevalence, consensus, naming-history, chronology, or anonymous-authority wording. Remove/narrow any equivalent wording rather than substituting a synonym.
3. Preserve the revision-5 article-local `writer's fork` naming convention, the verified fact that neither Cheiro nor Benham uses that label, the Cheiro-grounded dual-mentality interpretation, the revision-4 IQ/cognitive-ability editorial framing, and all other sound prior cleanup.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r6.json`

Do not create another article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated legacy claims.

## Controlling evidence and boundaries
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` remains controlling for direction/path wording.
- Existing article/lesson prose is a navigation map, not automatic proof.
- Existing source-verification records support only claims they explicitly verify.
- Cheiro's verified writer's-fork material supports the historical dual-mentality interpretation; it does not establish a modern empirical relationship or non-relationship with writing talent across populations.
- Cheiro/Benham non-use of a label does not prove who does use it, how common it is, when it arose, or that another label is an established synonym.
- Do not invent prevalence, consensus, chronology, naming history, population norms, population correlations/non-correlations, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`.
2. Manually inspect the complete final writer's-fork subsection and the revision-4 IQ passages.
3. Confirm all sound revision-1 through revision-5 corrections remain intact.
4. Confirm no statement presents an unsupported empirical/population relationship or non-relationship between the writer's fork and writing/creative talent.
5. Confirm no statement generalizes beyond verified Cheiro/Benham evidence about naming/non-use.
6. Confirm no risky phrase was replaced by an equivalent unsupported synonym.
7. Record concise dispositions in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. All sound revision-1 through revision-5 corrections remain intact.
2. No unsupported population, empirical-association/non-association, comparative-prevalence, ranking, consensus, anonymous-authority, naming-history, or chronology statement remains in the scoped writer's-fork passage.
3. Writing/creative-talent caution is framed as Palmistry Path editorial policy unless a specific approved source directly establishes the stronger claim.
4. Any mention of Cheiro/Benham label usage is limited to what verified evidence establishes.
5. IQ safety wording remains Palmistry Path editorial framing, not tradition-wide consensus.
6. No unsupported fixed norm/default/average or monotonic degree rule is introduced or restored.
7. Direction/path wording remains inside the Director-verified Benham boundary.
8. No new palmistry meaning, prevalence claim, scientific/medical claim, deterministic relationship claim, or combination reading is invented.
9. SOURCE_SENSITIVE preflight is complete and truthful.
10. Required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a material scoped claim cannot be safely removed/narrowed and retaining it requires unavailable evidence or genuine editorial judgment. Routine removal/narrowing is not a human gate.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r6.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, unsupported empirical population claims, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, comparative-prevalence wording, naming/chronology claims, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language.
- Revision 2: removed residual unsupported prevalence/consensus and anonymous-authority language.
- Revision 3: removed residual population/comparative-prevalence claims.
- Revision 4: narrowed unsupported classical-text chronology and tradition-wide IQ consensus claims.
- Revision 5: removed equivalent unsupported anonymous-authority/naming claims still retained in the writer's-fork subsection.
- Revision 6: cumulative review found the remaining writer's-fork talent/creative-potential wording asserted an unsupported population-level empirical non-association; require editorial-policy framing instead.