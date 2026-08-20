# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-029

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Complete the remaining approved 3F capstone body work by adding a second worked reading to `src/content/lessons/advanced/combining-what-you-see.mdx` that teaches synthesis through a meaningfully different example, using only interpretations already established in approved repository curriculum evidence.

## Why this task
`docs/ROADMAP.md` identifies the second worked reading in the Advanced capstone as the remaining 3F body revision. The current lesson contains one detailed worked reading. This is a high-value curriculum-completeness task and a good v2C test of the new claim-risk preflight: it requires synthesis without inventing new palmistry meanings or unsupported combination readings.

## Allowed scope
- Inspect `AGENTS.md`, editorial/source policy, the current capstone, and the existing lessons that establish every feature/meaning used in the new example.
- Add one second worked reading that is genuinely different from the first and demonstrates observation, weighting, agreement, contradiction/tension where supported, active/passive comparison only if supported, and bounded synthesis.
- Every interpretive statement must be traceable to an approved existing lesson/source statement. Do not create a new meaning by combining individually supported features.
- Prefer a compact example rather than duplicating the full length of the first worked reading; it should teach a distinct synthesis problem or pattern.
- Preserve the lesson's explicit distinction between interpretive weight inside the palmistry framework and evidence about a real person.
- Update narrowly relevant canonical roadmap/current-state/changelog prose only if needed to mark the 3F capstone body item complete.
- Run `npm run audit:claim-risk -- src/content/lessons/advanced/combining-what-you-see.mdx` and manually adjudicate every finding against approved repository evidence; a clean scan is not proof of sourcing.
- Necessary Relay result/bookkeeping files may be changed.

## Out of scope
- No new palmistry interpretation, prevalence/consensus claim, scientific/historical claim, quotation, or source attribution unless already supported by approved repository evidence and verified in this task.
- Do not use the stale `feat/curriculum-wave-3e-3f` branch as authoritative state or wholesale replay it. It may be inspected only as non-authoritative evidence if useful; write the result deliberately against current `main`.
- Do not alter curriculum ordering, module structure, routing, visual design, monetization, dispatch/merge controls, fast-lane policy, dependencies, or unrelated content.
- Do not resolve the separate Sun/Mercury quote-fidelity 3E issue in this task.

## Source-sensitive preflight requirements
Before `READY_FOR_REVIEW`, inspect the final changed prose for:
1. unsupported prevalence/consensus language (`most`, `many`, `often`, `commonly`, `typically`, `generally`, etc.);
2. unsupported scientific or historical claims;
3. invented combination readings where the combination itself is not supported;
4. vague anonymous authority (`modern palmists`, `some writers`, `experts`, `traditional readers`, etc.);
5. quotation/source-attribution fidelity; and
6. clear separation of observation, historical/traditional interpretation, and Palmistry Path editorial guidance.
Run the targeted claim-risk audit and include its findings plus manual disposition in the durable result. If approved repository evidence is insufficient for a desired interpretation, narrow/omit it rather than guessing. If the task cannot be completed usefully without genuinely new source-heavy interpretation, return `HUMAN_REQUIRED` with the exact evidence/decision needed.

## Acceptance checks
- The capstone contains a second worked reading that is meaningfully different from the first and improves synthesis instruction.
- Every palmistry meaning used in the second example is traceable to current approved repository evidence; result artifact lists the supporting lesson paths/sections for the interpretations used.
- No unsupported combination reading is synthesized from separately supported features.
- The example preserves non-deterministic, framework-bounded language and does not imply repeated traditional associations become evidence about the person.
- `npm run audit:claim-risk -- src/content/lessons/advanced/combining-what-you-see.mdx` is run and every finding in changed prose is manually adjudicated.
- Relevant build/content/audit checks pass, including `npm run build`, `npm run content-audit`, and `npm run audit:all` unless a narrower documented reason makes one inapplicable.
- Canonical docs accurately reflect 3F completion if changed; no unrelated roadmap churn.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-029-r1.json` on a pushed `claude/relay-PP-RELAY-029-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, verification performed, changed paths, tests/checks, supporting repository evidence for each interpretation used, blocker/gate details, and a completed `source_preflight` object covering all six preflight requirements plus the claim-risk audit findings/dispositions.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-029
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
