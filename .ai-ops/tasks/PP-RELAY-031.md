# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-031

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Resolve the remaining approved Batch 3E Sun/Mercury quote-fidelity and source-framing issue in `src/content/lessons/advanced/01-minor-lines-overview.mdx` by verifying the existing attributed quotations/claims against approved source evidence, then narrowing or correcting only what the evidence supports.

## Why this task
Current canonical state identifies the Sun/Mercury quote-fidelity rewrite as the only outstanding curriculum item. The audited `feat/curriculum-wave-3e-3f` branch is evidence, not authoritative state: its audit says the proposed Sun/Mercury treatment was source-aware but explicitly could not verify quotation fidelity against the original editions. This task closes that bounded source-integrity gap on current `main` rather than merging or replaying the stale branch wholesale.

## Required evidence-first workflow
1. Inspect the current `advanced/01-minor-lines-overview.mdx`, relevant entries in `docs/source-verification-log.md`, `docs/editorial-style-guide.md`, and the 3E/3F branch audit.
2. Use approved repository-held source material when available. If targeted external lookup is necessary and available, use only source-quality evidence permitted by the editorial source policy (prefer original/primary editions or reliable scans/catalog records). Commercial SEO/astrology sites are discovery aids only and cannot establish quotation fidelity.
3. For every quotation mark in the Sun/Mercury sections, either verify the wording against the cited edition/source and record the evidence, or convert it to a faithful paraphrase without quotation marks. Never guess missing wording.
4. Verify named-attribution claims and prevalence/consensus language in the same focused sections. Narrow/remove anything not supported by approved evidence.
5. Keep historical palmistry claims, present-day Palmistry Path editorial policy, and anatomical/empirical claims clearly separated.
6. If exact quotation/source fidelity cannot be established from available approved evidence and resolving it would require owner-provided material, paid access, credentials, or subjective source judgment, return `HUMAN_REQUIRED` with the exact missing source/evidence rather than guessing.

## Allowed scope
- `src/content/lessons/advanced/01-minor-lines-overview.mdx`, limited to the Sun Line and Mercury Line material plus directly necessary local transitions/takeaway wording.
- `docs/source-verification-log.md` for concise evidence/fidelity records actually established in this task.
- Canonical status/changelog/roadmap/handoff docs only as directly necessary to mark the 3E item resolved if and only if the source-fidelity acceptance checks pass.
- Necessary Relay result/bookkeeping files.
- Source-safe mechanical wording cleanup directly required by verified evidence.

## Out of scope
- Do not wholesale merge, rebase, or copy the stale `feat/curriculum-wave-3e-3f` branch.
- Do not expand into new minor-line lessons, new interpretations, new combination readings, SEO articles, monetization, design, routing, dependencies, or unrelated curriculum changes.
- Do not invent a replacement interpretation when removing an unsupported claim.
- Do not use vague anonymous authority such as `modern palmists`, `some writers`, `experts`, or equivalent unless an approved identifiable source directly supports it.
- Do not introduce unsupported frequency/prevalence claims such as `most`, `many`, `often`, `commonly`, `typically`, `generally`, `rare`, or equivalents.

## Source-sensitive preflight — mandatory before READY_FOR_REVIEW
Run the v2C source-claim preflight against the final changed lesson. Explicitly verify/disposition:
- every quotation for verbatim fidelity or conversion to paraphrase;
- every Cheiro/Benham/Gettings/Fincham attribution retained or added;
- prevalence/consensus/frequency wording;
- scientific/anatomical/historical assertions;
- no invented combination readings or inferred doctrine;
- no vague anonymous authority;
- clear separation of observation, traditional/historical interpretation, and Palmistry Path editorial guidance;
- no medical, legal, financial, deterministic relationship, or predictive-science claim.
Also run `npm run audit:claim-risk -- src/content/lessons/advanced/01-minor-lines-overview.mdx` when supported by the current script interface, and manually disposition each relevant finding. A clean heuristic scan is not proof of sourcing.

## Acceptance checks
- Every quotation retained in the focused Sun/Mercury material has documented fidelity evidence from an approved source; otherwise it is accurately paraphrased without quotation marks.
- Named-source claims in the focused material match the evidence actually reviewed.
- No unsupported prevalence, consensus, scientific/historical, or anonymous-authority claim remains in the focused material.
- No new palmistry meaning or synthetic combination interpretation is introduced.
- `docs/source-verification-log.md` records the source/fidelity outcome compactly enough for later audit.
- If the evidence is sufficient and the curriculum item is resolved, current canonical status docs no longer describe Sun/Mercury quote fidelity as outstanding; historical entries remain historically accurate.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, the targeted claim-risk audit, and `git diff --check` pass (except a claim-risk nonzero result is acceptable only when every finding is manually demonstrated to be a false positive and the command semantics intentionally return nonzero for findings).
- Final diff is bounded to this source-fidelity task.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-031-r1.json` on a pushed `claude/relay-PP-RELAY-031-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and the required completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-031
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
