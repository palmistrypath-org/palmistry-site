# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-042

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the bounded source-integrity cleanup of the legacy Head Line pillar. Revision 1 removed several risky claims but incorrectly retained multiple unsupported prevalence/consensus and anonymous-authority statements that are explicitly inside this task's cleanup categories.

## Revision 2 remediation
Preserve the sound revision-1 edits. Re-read the complete final `src/content/blog/beginner/head-line.md` and remove, narrow to neutral observation, or specifically attribute every remaining unsupported prevalence/ranking/consensus/anonymous-authority claim within this task's categories.

At minimum, explicitly disposition these residual examples from revision 1; do not assume the list is exhaustive:
- `It typically begins...`
- `The head line usually starts...`
- `This is the variation Western palmistry discusses most specifically...` and `the tradition is precise...`
- `It is commonly called the "writer's fork"...`
- `It appears among writers with notable frequency...`
- `Upward branches ... are generally read positively...`
- `A double head line ... is uncommon...`
- FAQ wording `typically at or near the same origin...`
- writer's-fork myth wording `It appears frequently in writers' hands...`
- `the contemporary tradition` as anonymous modern consensus.

These are not out-of-scope simply because the underlying interpretation predates this task. The cleanup category is the unsupported prevalence/consensus/authority wording itself.

Do not broaden into independently re-sourcing every separate Head Line meaning. If the prevalence/consensus qualifier can be removed while preserving a bounded established interpretation, prefer that. If removing the qualifier would materially change or falsely strengthen an interpretation whose source basis is uncertain, narrow to observation or log the separate source issue instead of inventing support.

## Scope
Primary:
- `src/content/blog/beginner/head-line.md`

Supporting only as directly necessary:
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-042-r2.json`

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
2. Manually inspect the complete final article, not only changed lines, for prevalence/ranking/consensus, vague authority, fixed norms, and monotonic degree language.
3. Treat words/phrases such as `typically`, `usually`, `most`, `commonly`, `frequently`, `generally`, `uncommon`, `tradition is precise`, `Western palmistry discusses most`, `contemporary tradition`, and semantic equivalents as requiring evidence or narrowing when they assert frequency/consensus/authority.
4. Disposition every remaining heuristic finding individually and explain why it is source-safe or revise it.
5. Confirm every retained direction/path interpretation stays inside the Director Benham evidence boundary.
6. Confirm no risky phrase was replaced by an equivalent unsupported synonym.
7. Record concise claim-by-claim dispositions in `docs/source-verification-log.md` and the durable result.

A clean heuristic scan is not proof of source sufficiency.

## Acceptance criteria
1. Revision-1 sound corrections remain intact.
2. No unsupported prevalence/ranking/consensus statement remains in the scoped cleanup categories.
3. No unsupported anonymous authority or modernization claim remains in those categories.
4. No unsupported fixed norm/default/average or monotonic degree rule is introduced or retained in those categories.
5. Direction/path wording remains inside the Director-verified Benham boundary.
6. No new palmistry meaning, prevalence claim, scientific/medical claim, deterministic relationship claim, or combination reading is invented.
7. Material source concerns outside these cleanup categories are logged rather than silently expanded.
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
Return `HUMAN_REQUIRED` only if a material scoped claim cannot be safely removed/narrowed and retaining it requires unavailable evidence or genuine editorial judgment. Routine removal/narrowing is not a human gate.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-042-r2.json` on a pushed `claude/relay-PP-RELAY-042-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, unsupported prevalence/consensus, scientific/historical claims where encountered, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: bounded cleanup of legacy Head Line pillar prevalence/consensus, fixed-norm, anonymous-authority, and monotonic degree-scaling language before the next Head Line variation article.
- Revision 2: cumulative Director review found residual unsupported prevalence/consensus and anonymous-authority language in the final pillar; require complete disposition/removal/narrowing of those remaining scoped phrases while preserving sound revision-1 edits.