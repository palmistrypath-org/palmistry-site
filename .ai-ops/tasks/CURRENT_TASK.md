# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-043

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Revision note
Revision 1 produced a useful, otherwise bounded article, but Director review found residual unsupported prevalence/subjective-generalization wording despite the completed source preflight. Revision 2 is a narrow remediation against the revision-1 result: remove or neutralize equivalent wording such as “one of the more unsettling things beginners notice” and “get confused with each other constantly,” and keep historical interpretation explicitly bounded to Benham rather than implying a broader practitioner/tradition consensus. Also ensure the gap-size FAQ does not imply review of multiple sources when only Benham is the controlling evidence. Preserve all sound revision-1 structure, safety boundaries, links, and bookkeeping. Do not broaden scope.

## Objective
Publish the approved Next 25 companion article `Broken Head Line Meaning in Palmistry` as a narrowly source-bounded Head Line variation article, using verified classical evidence without importing medical, psychiatric, predictive, prevalence, or unsupported combination claims.

## Why this task now
- `docs/editorial-backlog.md` lists item 14, Broken Head Line, as the next unshipped Head Line variation after short, long, and straight-vs-curved.
- `src/content/blog/beginner/broken-head-line-meaning.md` does not currently exist on `main`.
- The cleaned Head Line pillar and existing short/long/straight companion articles establish the cluster/navigation pattern, but legacy lesson prose is only a map to candidate interpretations, not automatic evidence.

## Scope
Primary:
- create `src/content/blog/beginner/broken-head-line-meaning.md`

Supporting only as directly necessary:
- `src/content/blog/beginner/head-line.md` for one reciprocal internal link if appropriate
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-043-r2.json`

Do not rewrite the canonical Head Line lesson, modify claim-risk tooling, or expand into other Head Line variations.

## Controlling evidence and boundaries
- Treat `src/content/lessons/lines/03-head-line.mdx` and the current Head Line pillar only as maps to candidate claims. Existing prose is not automatic proof.
- William G. Benham, *The Laws of Scientific Hand Reading* (1900), Head Line material is an approved public-domain historical source. Benham explicitly treats breaks as interruptions in the line and associates them in his system with interruption/unsteadiness and lack of concentration/firmness/self-control; he also discusses repair signs such as overlapping ends, sister lines, connecting bars, and squares.
- Benham's same section contains period medical/psychiatric claims (including headaches, illness, insanity, nervous disorder, and age/prediction claims). Those are historical source content but are **not authorized article interpretations** for Palmistry Path and must not be repeated, modernized, implied, or converted into health/mental-health advice.
- A safe article-level historical interpretation is limited to: a visible break is an interruption in the Head Line; in Benham's historical system it was associated with interruption or change in the continuity/stability of thought/concentration. Palmistry Path must frame this as Benham's historical interpretation, not empirical psychology or a tradition-wide consensus.
- If discussing overlapping/repairing formations, describe them only as Benham's historical distinction and avoid stronger-with-gap-size, fate, illness, prognosis, or timing claims unless separately verified and explicitly safe.
- Do not assert that breaks are common/rare, that beginners usually react a certain way, that formations are constantly/frequently confused, that most readers agree, that all traditions share the interpretation, or that a break reliably maps to a real-life event.
- Do not invent combinations with mounts, hand shape, depth, branches, endpoints, the Heart Line, Life Line, or other marks.
- Do not use commercial SEO/palmistry sites as evidence.

## Article intent and differentiation
- Primary search intent: `broken head line meaning` / `broken head line palmistry`.
- Clearly distinguish a **break** (the line stops and resumes after a visible gap) from a **short line** (ends and does not resume) and a **fork** (one line divides into branches without a gap).
- Keep the article practical and observational first: identify the formation before interpreting it.
- Link naturally back to the main Head Line guide and structured lesson; reciprocal link from the pillar is allowed if it improves navigation.
- Avoid fear-based framing. Palmistry Path does not treat a broken Head Line as diagnosis, cognitive impairment, mental illness, danger, or a prediction.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/broken-head-line-meaning.md` and truthfully disposition every finding.
2. Verify every retained historical interpretation against Benham or another explicitly approved named source; do not rely on lesson/pillar repetition as proof.
3. Search the final article for prevalence/consensus/generalization terms (`most`, `many`, `often`, `commonly`, `typically`, `generally`, `usual`, `rare`, `popular`, `constantly`, `frequently`, `one of the more`, `modern palmists`, `traditional readers`, `experts`, and equivalents) and remove/narrow any unsupported usage.
4. Search for medical/psychiatric/predictive terms and confirm none are presented as palmistry-based health, mental-health, danger, lifespan, fate, or event predictions.
5. Confirm no fixed measurement/gap-size cutoff or monotonic `wider break = stronger meaning` rule was introduced.
6. Confirm no new combination reading was synthesized.
7. Keep observation, Benham's named historical interpretation, and Palmistry Path editorial/safety policy clearly distinguishable.
8. Confirm source-count wording is accurate: if Benham is the only approved source used for a statement, do not imply that multiple sources were reviewed.
9. Record concise evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. A useful, beginner-readable `broken-head-line-meaning` companion article exists and serves a distinct variation query without duplicating the Head Line pillar.
2. A break is identified observationally as a visible interruption where the line stops and resumes; short line and fork distinctions are clear.
3. Retained interpretation is limited to named, verified historical evidence and is framed as Benham's historical interpretation or other specifically verified named-source material, not empirical fact or anonymous tradition-wide consensus.
4. No medical, psychiatric, diagnostic, danger, fate, event-timing, lifespan, or deterministic prediction claim is made from the break.
5. No unsupported prevalence/consensus, subjective population generalization, anonymous authority, fixed cutoff, stronger-with-degree rule, or invented combination reading appears.
6. Internal links/navigation are useful and non-duplicative.
7. Editorial backlog/published count is updated only if the article actually ships in the PR.
8. SOURCE_SENSITIVE preflight is complete and truthful, including the revision-2 residual wording checks.
9. Required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/broken-head-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if the article cannot be written to useful beginner depth without a material interpretation that cannot be verified from approved evidence. Do not pad with guesses.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-043-r2.json` on a pushed `claude/relay-PP-RELAY-043-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, prevalence/consensus/generalization wording, scientific/historical claims, vague authority, quotation fidelity, precision/degree extrapolation, medical/psychiatric/predictive framing, combination readings, source-count accuracy, and observation-vs-interpretation-vs-editorial-policy separation.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.