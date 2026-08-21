# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-035

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Revision 2 note
Revision 1 correctly returned `HUMAN_REQUIRED` because the Claude execution environment could not reach the public-domain primary texts and no repository-held Ring of Solomon evidence existed. The Director independently resolved that environment-specific source-access problem without owner intervention and recorded the verified evidence boundary at `.ai-ops/evidence/PP-RELAY-035-cheiro-ring-of-solomon.md`. That note is now approved repository-held evidence for this task. Gettings (1965) remains unverified and must not be used. Revision 2 should draft only within the verified Cheiro boundary; do not broaden the interpretation to compensate for the narrower evidence base.

## Objective
Create the approved search-intent article `src/content/blog/beginner/ring-of-solomon-palmistry.md` only to the extent the Ring of Solomon identification and meanings are grounded in approved repository-held evidence under Palmistry Path's source policy. The article should answer where the marking is, how cautiously it can be identified, what Cheiro associates it with, and how Palmistry Path frames it non-deterministically, while avoiding invented prevalence, consensus, geometry, or combination readings.

## Why this task now
`docs/editorial-backlog.md` lists **The Ring of Solomon in Palmistry** as one of the two remaining unpublished Next 10 articles, with clear search intent, no recorded cannibalization risk, and planned linkage to the Advanced minor-lines lesson and Mount of Jupiter content. The adjacent curriculum/source-integrity cleanup is now substantially complete, making this a bounded test of v2C's improved SOURCE_SENSITIVE workflow.

## Controlling evidence for revision 2
Read `.ai-ops/evidence/PP-RELAY-035-cheiro-ring-of-solomon.md` before drafting. It records the Director's verification of Cheiro, *Palmistry for All* (1916), Project Gutenberg #20480.

Safe supported boundary:
- Cheiro treats the Ring of Solomon as a named hand marking.
- Cheiro associates it with the Mount of Jupiter and identifies it as mark 8 on Plate XX.
- Cheiro's traditional interpretation connects it with mysticism/occultism and with an aspiration toward mastery/adeptship in those subjects.

Unsupported unless separately established from already-approved repository evidence:
- a precise arc path, exact geometry, prevalence, rarity, or a detailed rule for distinguishing it from all nearby Jupiter lines;
- psychic ability, wisdom, leadership, success, morality, or other expanded traits;
- any combined reading involving Mount of Jupiter development, finger shape, other rings, lines, markings, or hand type;
- any Gettings attribution.

If those bounded Cheiro claims are insufficient to create a useful non-thin article under the existing article template, return `HUMAN_REQUIRED` with the exact remaining evidence need. Do not pad the page with unsupported meanings.

## Required article behavior if evidence is sufficient
- Use the intended slug/title from the approved backlog: `ring-of-solomon-palmistry` / **The Ring of Solomon in Palmistry**.
- State the location conservatively: Cheiro associates/illustrates the mark on the Mount of Jupiter; do not invent an exact geometric path the verified prose does not establish.
- Attribute the traditional interpretation specifically to Cheiro rather than to anonymous palmists or universal tradition.
- Keep observation separate from interpretation and Palmistry Path editorial guidance.
- Use grounded language such as `Cheiro associated`, `traditionally interpreted in Cheiro's system as`, and `may be read within that historical framework`; no deterministic prediction.
- Link naturally to relevant Mount of Jupiter content and the Advanced minor-lines learning path when those destinations exist and fit current linking patterns.
- Follow the existing article template/frontmatter/content conventions and avoid creating a thin keyword page.
- Update editorial backlog status/count only if the article is actually shipped and the repository's mechanical count remains consistent.

## Source-sensitive prohibitions
- No invented or unsupported prevalence/frequency language (`common`, `rare`, `often`, `most`, `typically`, etc.).
- No vague anonymous authority such as `modern palmists`, `some writers`, `experts`, or `traditional readers` unless an identifiable approved source supports the exact statement.
- No invented combination readings with Mount of Jupiter development, finger shape, other rings, lines, markings, or hand type unless that specific combination is directly supported in approved evidence.
- No medical, psychological-diagnostic, legal, financial, relationship-outcome, or predictive-science claims.
- No quotation marks unless wording is independently verified verbatim from the cited edition. Prefer paraphrase from the durable evidence note.
- Do not use the stale `feat/curriculum-wave-3e-3f` branch as authority or wholesale replay it.

## Allowed scope
- New `src/content/blog/beginner/ring-of-solomon-palmistry.md` if source sufficiency is established.
- Directly necessary reciprocal/internal-link edits to existing relevant Ring/Jupiter/minor-lines content, kept minimal and source-neutral.
- `docs/editorial-backlog.md` status/count bookkeeping if the article ships.
- `docs/source-verification-log.md` only if necessary to cross-reference the new durable evidence note; do not duplicate or embellish its claims.
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
- A complete standalone article exists only if the verified Cheiro evidence supports its substantive identification and interpretation claims without padding.
- Every substantive palmistry meaning traces to `.ai-ops/evidence/PP-RELAY-035-cheiro-ring-of-solomon.md` or other already-approved repository evidence.
- No unsupported prevalence/consensus, scientific, psychological, geometry, or combination claims are introduced.
- Search intent is distinct from the general minor-lines and Mount of Jupiter pages and the article links into the learning path without cannibalizing them.
- Backlog/count bookkeeping is accurate if the article ships.
- `npm run build`, `npm run content-audit`, `npm run audit:all`, targeted `npm run audit:claim-risk -- ...`, and `git diff --check` pass for changed work.
- Final diff remains bounded to this task and directly necessary documentation/bookkeeping.

## v2C durable-result contract
For every terminal outcome after startup gate, create `.ai-ops/results/PP-RELAY-035-r2.json` on a pushed `claude/relay-PP-RELAY-035-...` branch. Allowed terminal results are `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, and `PAUSED_USAGE_LIMIT`. A non-change terminal outcome does not require a dummy PR. The result must include `task_id`, `revision`, `risk_class: SOURCE_SENSITIVE`, terminal `result`, verification performed, changed paths, tests/checks, blocker/gate details when applicable, and a completed `source_preflight` object for a changed source-sensitive result.

## PR contract
If changed work is `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with footers:

RELAY_TASK_ID: PP-RELAY-035
RELAY_TASK_REVISION: 2
RELAY_RESULT: READY_FOR_REVIEW
