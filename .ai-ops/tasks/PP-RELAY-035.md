# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-035

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Create the approved search-intent article `src/content/blog/beginner/ring-of-solomon-palmistry.md` only if the Ring of Solomon / Ring of Jupiter identification and meanings can be grounded in approved repository-held evidence under Palmistry Path's source policy. The article should answer where the marking is, how to identify it, what named traditions/sources associate it with, and how Palmistry Path frames it non-deterministically, while avoiding invented prevalence, consensus, or combination readings.

## Why this task now
`docs/editorial-backlog.md` lists **The Ring of Solomon in Palmistry** as one of the two remaining unpublished Next 10 articles, with clear search intent, no recorded cannibalization risk, and planned linkage to the Advanced minor-lines lesson and Mount of Jupiter content. The adjacent curriculum/source-integrity cleanup is now substantially complete, making this a bounded test of v2C's improved SOURCE_SENSITIVE workflow.

## Evidence-first requirement
Before drafting substantive meaning claims:
1. Inspect current `main` for existing Ring of Solomon / Ring of Jupiter material, source-verification records, source excerpts, and related Jupiter-mount content.
2. Identify which approved repository-held sources directly support the marking's location/shape/name and each retained interpretation. The backlog's statement that Cheiro covers it and Gettings gives more detail is a lead, not permission to invent wording or assume source access.
3. If repository-held evidence is insufficient to support a complete useful article without acquiring or guessing source material, return `HUMAN_REQUIRED` with the exact missing source/evidence need rather than fabricating or padding the article.
4. Do not use commercial astrology/palmistry SEO sites or unsourced blogs as citation authority. They may not substitute for approved evidence.

## Required article behavior if evidence is sufficient
- Use the intended slug/title from the approved backlog: `ring-of-solomon-palmistry` / **The Ring of Solomon in Palmistry**.
- Explain the marking's location and visual identification clearly enough for a beginner to distinguish it from nearby Jupiter-mount lines only to the extent approved evidence supports that distinction.
- Attribute traditional meanings to identifiable approved sources/traditions rather than stating them as fact.
- Keep observation separate from interpretation and Palmistry Path editorial guidance.
- Use grounded language such as `traditionally associated with`, `interpreted as`, and `may suggest`; no deterministic prediction.
- Link naturally to the relevant Mount of Jupiter content and Advanced minor-lines learning path when those destinations exist and fit the site's current linking patterns.
- Follow the existing article template/frontmatter/content conventions and avoid creating a thin keyword page.
- Update the editorial backlog status/count only if the article is actually shipped and the repository's mechanical count remains consistent.

## Source-sensitive prohibitions
- No invented or unsupported prevalence/frequency language (`common`, `rare`, `often`, `most`, `typically`, etc.).
- No vague anonymous authority such as `modern palmists`, `some writers`, `experts`, or `traditional readers` unless an identifiable approved source supports the exact statement.
- No invented combination readings with Mount of Jupiter development, finger shape, other rings, lines, markings, or hand type unless that specific combination is directly supported in approved evidence.
- No medical, psychological-diagnostic, legal, financial, relationship-outcome, or predictive-science claims.
- No quotation marks unless wording is verified verbatim from the cited edition.
- Do not use the stale `feat/curriculum-wave-3e-3f` branch as authority or wholesale replay it.

## Allowed scope
- New `src/content/blog/beginner/ring-of-solomon-palmistry.md` if source sufficiency is established.
- Directly necessary reciprocal/internal-link edits to existing relevant Ring/Jupiter/minor-lines content, kept minimal and source-neutral.
- `docs/editorial-backlog.md` status/count bookkeeping if the article ships.
- `docs/source-verification-log.md` when necessary to record source evidence/disposition.
- Canonical changelog/current-state/handoff documentation only as directly necessary.
- Required Relay result/bookkeeping files.

## Out of scope
- No Via Lascivia / Allergy Line article in this task.
- No broad rewrite of the Advanced minor-lines lesson or Mount of Jupiter material.
- No new SEO strategy, visual redesign, monetization, lead-capture, or schema work.
- No unrelated source cleanup or backlog reprioritization.

## Mandatory v2C source preflight before READY_FOR_REVIEW
Run the source-claim preflight against the final changed prose and explicitly disposition:
- prevalence/frequency/consensus wording;
- every historical/traditional/source attribution;
- every concrete location/identification claim;
- every substantive Ring of Solomon interpretation;
- any Ring/Jupiter or other combination statement;
- vague anonymous authority;
- quotation fidelity;
- separation of observation, historical interpretation, and Palmistry Path editorial framing;
- deterministic/safety-boundary language.

Also run `npm run audit:claim-risk -- <each changed article/lesson MD/MDX path>` and manually disposition every finding; a clean heuristic scan is not proof of source sufficiency.

## Acceptance checks
- A complete standalone article exists only if approved repository-held evidence supports its substantive identification and interpretation claims.
- Every substantive palmistry meaning can be traced to approved repository evidence or an identifiable approved source represented in the repository's source records.
- No unsupported prevalence/consensus, scientific, psychological, or combination claims are introduced.
- Search intent is distinct from the general minor-lines and Mount of Jupiter pages and the article links into the learning path without cannibalizing them.
- Backlog/count bookkeeping is accurate if the article ships.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, targeted `npm run audit:claim-risk -- ...`, and `git diff --check` pass for changed work.
- Final diff remains bounded to this task and directly necessary documentation/bookkeeping.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-035-r1.json` on a pushed `claude/relay-PP-RELAY-035-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and a completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-035
RELAY_TASK_REVISION: 1
RELAY_RESULT: READY_FOR_REVIEW
