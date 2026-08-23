# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the legacy Head Line pillar. Revision 2 corrected the Director-listed prevalence/consensus language but still retained several unsupported population/comparative-prevalence statements that fall inside the same authorized cleanup category.

## Revision 3 remediation
Preserve all sound revision-1 and revision-2 corrections. Re-read the complete final `src/content/blog/beginner/head-line.md` and remove or neutralize the remaining unsupported population/comparative-prevalence wording in the scoped cleanup categories.

At minimum, explicitly disposition these residual examples from revision 2; do not assume the list is exhaustive:
- `many people have it without any special literary ability`
- `many capable writers do not have it at all`
- `more common forks and branches`
- FAQ wording `It appears in many hands, not exclusively in writers'.`
- myth wording `It appears across many kinds of hands, not only writers'`

These are prevalence/comparative-prevalence claims even though the claim-risk heuristic may treat some uses of `many` as false positives. The task packet, not the heuristic, controls. Do not retain them merely as a rhetorical way to make a non-exclusivity point. State the bounded editorial point directly instead (for example, that the feature does not establish writing talent or vocation) without asserting how frequently it occurs in any population.

Do not broaden into independently re-sourcing every separate Head Line meaning. If another material prevalence/ranking/consensus statement is found in the final article, remove/narrow it or specifically source it if already supported by approved repository evidence. Material source concerns outside these cleanup categories should still be logged rather than silently expanded.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r3.json`

Do not create the Broken Head Line article, rewrite the canonical lesson, modify claim-risk tooling, or broaden into unrelated articles.

## Controlling evidence and boundaries
- `.ai-ops/evidence/PP-RELAY-041-benham-head-line-direction.md` remains the controlling approved evidence for direction/path: straight-running Head Line -> Benham/practical mentality; sloping toward Luna -> Benham/imagination/departure from purely material thought.
- Existing article/lesson prose is a navigation map, not automatic proof.
- Existing source-verification records may support only claims they explicitly verify.
- Do not convert anonymous authority into a new named attribution unless that exact attribution is verified.
- Do not invent prevalence, population norms, fixed cutoffs, stronger-with-degree rules, scientific claims, medical/clinical claims, or combination readings.
- Keep observation, named historical interpretation, and Palmistry Path editorial policy distinguishable.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/head-line.md`.
2. Manually inspect the complete final article, not only changed lines, for prevalence/ranking/consensus, vague authority, fixed norms, comparative population language, and monotonic degree language.
3. Treat `many`, `more common`, `common`, `frequent`, `typically`, `usually`, `most`, `commonly`, `generally`, `uncommon`, `tradition is precise`, `Western palmistry discusses most`, `contemporary tradition`, and semantic equivalents as requiring evidence or narrowing when they assert population frequency/consensus/authority.
4. Explicitly disposition every revision-3 example above plus every remaining heuristic finding.
5. Confirm every retained direction/path interpretation stays inside the Director Benham evidence boundary.
6. Confirm no risky phrase was replaced by an equivalent unsupported synonym.
7. Record concise claim-by-claim dispositions in `docs/source-verification-log.md` and the durable result.

A clean heuristic scan is not proof of source sufficiency, and a heuristic false-positive classification does not override a Director-identified population claim.

## Acceptance criteria
1. All sound revision-1 and revision-2 corrections remain intact.
2. No unsupported population, comparative-prevalence, ranking, consensus, or anonymous-authority statement remains in the scoped cleanup categories.
3. The writer's-fork corrective point is stated without claiming how common the feature is among writers or the general population.
4. The double-head-line comparison does not rank forks/branches by prevalence unless approved evidence directly supports that comparison.
5. No unsupported fixed norm/default/average or monotonic degree rule is introduced or retained in these categories.
6. Direction/path wording remains inside the Director-verified Benham boundary.
7. No new palmistry meaning, prevalence claim, scientific/medical claim, deterministic relationship claim, or combination reading is invented.
8. Material source concerns outside these cleanup categories are logged rather than silently expanded.
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
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r3.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, comparative-prevalence wording, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language before the next Head Line variation article.
- Revision 2: cumulative Director review found residual unsupported prevalence/consensus and anonymous-authority language; required complete disposition/removal/narrowing while preserving sound revision-1 edits.
- Revision 3: cumulative Director review found residual unsupported population/comparative-prevalence claims (`many...`, `more common...`) that the worker incorrectly treated as heuristic false positives or outside scope; require their removal/neutralization without changing the established meanings.