# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
8

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the legacy Head Line pillar against the **actual current text on `main`**. Revisions 1-7 exposed a control-plane baseline error: none of revisions 1-6 was merged, so revision 7 correctly found that `main` still contains the original pre-cleanup article rather than a cumulative post-revision baseline.

## Revision 8 remediation
This revision supersedes the incorrect cumulative-baseline assumption. Treat current `main` as the only starting-text authority. Prior PP-RELAY-042 revision branches/results may be used only as review/remediation history; do not assume their edits exist on `main` and do not copy claims merely because an unmerged revision retained them.

Reconstruct the complete bounded cleanup in `src/content/blog/beginner/head-line.md` in one reviewable pass:

1. Run the claim-risk audit against the untouched current-main article and disposition **every finding** against approved repository evidence and the boundaries below. Revision 7 observed 26 findings (25 prevalence/consensus and 1 precision/degree finding); use the live scan result as authoritative if the count differs.
2. Remove or neutralize unsupported prevalence, consensus, ranking, population-frequency, anonymous-authority, naming-history, chronology, fixed-norm/default/average, and monotonic stronger-with-degree wording. Do not replace a risky phrase with an equivalent synonym.
3. Bring direction/path wording inside `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md`: Benham supports straight/practical and sloping-toward-Luna/imagination. Do not retain unsupported `the steeper/wider/longer, the more` rules, fixed geometric cutoffs, or empirical-correlation claims.
4. Remove or narrow clinical/medical framing and any assertion that historical wording did or did not carry forward into a broad contemporary tradition unless specifically verified. Palmistry Path editorial safety framing may be stated directly.
5. For the writer's-fork passages (main subsection, FAQ, myths, and any other mention):
   - keep only evidence-bounded historical interpretation already verified in repository records (including Cheiro's `dual mentality` framing where directly supported);
   - do not assert population association or non-association with writers, writing talent, creative ability, or vocation;
   - do not assert prevalence, naming popularity, synonym usage, chronology, or anonymous modern authority beyond specifically verified evidence;
   - phrase vocation/talent cautions as Palmistry Path editorial policy (for example, Palmistry Path does not treat the feature as proof of writing or creative ability).
6. Keep IQ/cognitive-ability safety wording as Palmistry Path editorial policy, not an exhaustive claim about what `the tradition` says.
7. Preserve established interpretations only when they are directly supported by approved repository evidence. If a legacy claim inside the scoped risk categories lacks support, remove/narrow it rather than expanding scope into new source research or inventing a replacement meaning.
8. Do not broaden into a wholesale re-source or rewrite of every Head Line interpretation outside the scoped risk categories. If you discover a separate material source issue outside these categories, record it for a future bounded task rather than silently expanding this one.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r8.json`

Do not create another article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated legacy claims.

## Controlling evidence and boundaries
- Current `main` is the sole authority for starting text.
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` controls the verified straight/practical and sloping-toward-Luna/imagination direction boundary.
- Existing article/lesson prose is a navigation map, not automatic proof.
- Existing source-verification records support only claims they explicitly verify.
- Cheiro's verified writer's-fork material supports the historical dual-mentality interpretation; it does not establish a modern empirical relationship or non-relationship with writing vocation, writing talent, or creative ability across populations.
- Cheiro/Benham non-use of a label does not prove who does use it, how common it is, when it arose, or that another label is an established synonym.
- Do not invent prevalence, consensus, chronology, naming history, population norms, population correlations/non-correlations, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md` before and after editing and record concise dispositions for every final finding.
2. Manually inspect the complete final article, not only scanner hits, for equivalent unsupported prevalence/consensus, population association/non-association, anonymous authority, naming/chronology, empirical/scientific, precision/degree, medical/clinical, and combination-reading claims.
3. Specifically inspect the starting-point, curvature/endpoint, writer's-fork, double-head-line, FAQ, myths, and cross-feature synthesis passages that contained residual risk in prior reviews.
4. Confirm writer's-fork vocation/talent caution is editorial policy rather than a population claim.
5. Confirm IQ/cognitive-ability caution is editorial policy rather than a tradition-wide consensus claim.
6. Confirm no risky phrase was replaced by an equivalent unsupported synonym.
7. Record concise evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. The cleanup is applied to current `main` in one cumulative reviewable diff; no acceptance criterion depends on an unmerged prior revision having landed.
2. Every final claim-risk finding is dispositioned truthfully against approved evidence or identified as a harmless heuristic match with a concrete reason.
3. No unsupported population, empirical association/non-association, prevalence, comparative prevalence, ranking, consensus, anonymous-authority, naming-history, chronology, fixed-norm/default/average, or monotonic degree-scaling statement remains within the scoped categories.
4. Direction/path wording remains inside the Director-verified Benham boundary.
5. Writer's-fork naming and interpretation do not exceed specifically verified evidence; writing/creative/vocation caution is Palmistry Path editorial policy, not a population claim.
6. IQ safety wording is Palmistry Path editorial framing, not an exhaustive historical/tradition-wide claim.
7. Unsupported clinical/medical framing and broad claims about contemporary-practice continuity are removed/narrowed.
8. No new palmistry meaning, prevalence claim, scientific/medical claim, deterministic relationship claim, population correlation/non-correlation, or combination reading is invented.
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
Return `HUMAN_REQUIRED` only if a material scoped claim cannot be safely removed/narrowed and retaining it requires unavailable evidence or genuine editorial judgment. Routine removal/narrowing and reconstruction of the already-authorized cleanup against current `main` are not human gates.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r8.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, unsupported empirical population claims, vocation/talent association or non-association claims, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, comparative-prevalence wording, naming/chronology claims, medical/clinical framing, and observation-vs-interpretation-vs-editorial-policy separation.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language.
- Revision 2: removed residual unsupported prevalence/consensus and anonymous-authority language.
- Revision 3: removed residual population/comparative-prevalence claims.
- Revision 4: narrowed unsupported classical-text chronology and tradition-wide IQ consensus claims.
- Revision 5: removed equivalent unsupported anonymous-authority/naming claims still retained in the writer's-fork subsection.
- Revision 6: reframed the main writer's-fork talent/creative-potential wording from unsupported empirical non-association to Palmistry Path editorial policy.
- Revision 7: attempted an article-wide writer's-fork consistency pass, but correctly returned `HUMAN_REQUIRED` after discovering that revisions 1-6 had never merged and the packet's assumed baseline did not exist on `main`.
- Revision 8: repairs the control-plane baseline error by explicitly authorizing one cumulative cleanup against actual current `main`, while preserving the original bounded source-integrity objective.