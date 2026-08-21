# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-034

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Audit and correct the remaining empirical/anatomical assertions in the opening and general-method sections of `src/content/lessons/advanced/01-minor-lines-overview.mdx` so anatomical, developmental, prevalence, and aging claims are either supported by approved repository evidence or narrowed into observation/editorial guidance without inventing new palmistry meanings.

## Why this task
PP-RELAY-033 closed the claim-risk heuristic findings in this canonical lesson, but cumulative Director review of current `main` shows the heuristic does not cover several adjacent empirical/anatomical statements. Examples include claims about major lines being anchored in fetal folding/flexion, minor lines being influenced by constitution or habitual movement, virtually universal heart-line prevalence, a `normal range` of minor-line density, and aging/movement producing specific palm markings. Because future minor-line articles will rely on this lesson, closing these evidence-boundary gaps is higher value than expanding the cluster immediately. This task also provides a useful v2C test of whether source preflight catches claims that the heuristic scanner misses.

## Required evidence-first workflow
1. Inspect the opening through `How to read minor lines without overweighting them` and inventory empirical/anatomical/developmental/prevalence claims, including claims not flagged by `audit:claim-risk`.
2. For each such claim, search approved repository evidence and source-verification records first. Do not infer scientific/anatomical support from palmistry sources or from general plausibility.
3. Retain a claim only when the repository holds evidence appropriate to that claim. Otherwise narrow/remove it or restate it as direct observation/Palmistry Path editorial method where that is accurate.
4. Keep historical/traditional palmistry interpretation explicitly separate from empirical anatomy and from Palmistry Path guidance.
5. Do not replace removed empirical claims with new traditional meanings, prevalence estimates, medical implications, or vague authority.
6. Run the targeted claim-risk audit as a supplement, not as proof of completeness, and manually disposition its findings in the touched passages.

## Allowed scope
- `src/content/lessons/advanced/01-minor-lines-overview.mdx`, limited to empirical/anatomical/developmental/prevalence wording in the opening/general-method sections and directly necessary local transitions.
- `docs/source-verification-log.md` for concise evidence dispositions.
- Canonical current-state/changelog/handoff docs only as directly necessary to record the completed audit.
- Necessary Relay result/bookkeeping files.

## Out of scope
- Do not create Via Lascivia, Ring of Solomon, or other planned articles.
- Do not materially rewrite the named-source Sun, Mercury, relationship-line, or Girdle interpretations unless a directly adjacent empirical claim must be separated from them.
- Do not add new palmistry meanings, combination readings, medical interpretations, prevalence estimates, or scientific claims.
- Do not wholesale replay or merge `feat/curriculum-wave-3e-3f`.
- Do not use vague authority such as `modern palmists`, `some writers`, `experts`, or equivalents as a substitute for evidence.

## Source-sensitive preflight — mandatory before READY_FOR_REVIEW
Explicitly verify/disposition:
- every empirical/anatomical/developmental/prevalence assertion in the scoped passages, including claims the heuristic does not flag;
- all prevalence/frequency/consensus wording in edited passages;
- every scientific/anatomical/historical assertion edited or retained there;
- every named-source attribution edited or relied upon;
- no invented combination reading or replacement interpretation;
- no vague anonymous authority;
- clear separation of direct observation/anatomy, historical interpretation, and Palmistry Path editorial guidance;
- quotation fidelity for any quotation retained or introduced;
- no medical, legal, financial, deterministic relationship, or predictive-science claim.

## Acceptance checks
- Durable result contains a per-claim inventory/disposition for the scoped empirical/anatomical/developmental/prevalence statements, not merely the heuristic findings.
- Unsupported claims are removed/narrowed rather than made more specific.
- No new palmistry meaning is introduced to fill removed empirical wording.
- `docs/source-verification-log.md` compactly records materially relevant evidence dispositions.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx`, and `git diff --check` are run; any remaining heuristic findings in touched passages are manually dispositioned.
- Final diff remains bounded to this audit and directly necessary documentation/bookkeeping.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-034-r1.json` on a pushed `claude/relay-PP-RELAY-034-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, the manual empirical/anatomical claim inventory and dispositions, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and a completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-034
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
