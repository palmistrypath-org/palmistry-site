# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-036

## Revision
3

## Risk Class
SOURCE_SENSITIVE

## Objective
Apply one final bounded source-fidelity correction to the Via Lascivia article from revision 2. Preserve all accepted revision-2 corrections and article structure; remove or narrow the unsupported translation/etymology gloss in the historical-name section.

## Why revision 3 is required
Cumulative Director review of PR #56 found one residual claim outside the controlling evidence boundary: `Via Lascivia — roughly, a path of excess or wanton way`. The approved evidence establishes that Benham connects the historical name to period ideas about surplus energy/appetite/excess, but it does not independently verify a literal or approximate Latin translation of `Via Lascivia`. Revision 1 had already identified an unverified translation gloss as unsafe. Do not reintroduce an etymological/translation claim without independently verified approved evidence.

## Required remediation
- Remove the phrase `roughly, a path of excess or wanton way` or replace it with non-translation wording that stays inside the evidence note, e.g. that Benham connects the historical name with an older excess/surplus-energy reading.
- Inspect the full final article for any equivalent translation, etymology, prevalence, consensus, comparative-strength, medical, or invented-combination overstatement.
- Preserve the revision-2 corrections: Benham-specific naming attribution; no modern prevalence/universality claim; no `just as easily` comparative claim.
- Do not expand scope or add new interpretations.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-036-benham-via-lascivia.md`. Safe boundary remains: Benham recognizes the named line, describes its course, treats it as a sister/chance line in the documented contexts, connects its historical name to period ideas about surplus energy/appetite/excess, and qualifies that a non-sensual hand could express the same surplus energy in other activity. Treat these as historical claims from Benham, not empirical fact.

Hard exclusions remain: medical/allergy diagnosis or meaning; criminality/morality/dangerousness; modern prevalence/rarity or practitioner consensus; empirical validation; an established `allergy line` synonym; invented combination readings; and any literal/approximate translation or etymology of `Via Lascivia` not independently verified from approved evidence.

## Validation
Run at minimum:
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `npm run audit:claim-risk -- src/content/blog/beginner/via-lascivia-palmistry.md`
- `git diff --check`

Manually disposition every claim-risk finding and manually inspect the full final prose for the source-sensitive categories above.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, verify and record that:
1. prevalence/consensus/frequency claims are supported or removed;
2. scientific, medical, historical, translation/etymology, and evidence claims are traceable and correctly scoped;
3. no new combination reading is synthesized;
4. no vague anonymous authority remains unsupported;
5. observation, historical interpretation, and Palmistry Path guidance remain distinct;
6. quotation marks are used only for verified wording or clear labels/search terms;
7. no medical, legal, financial, deterministic relationship, criminality, or predictive-science claim is introduced.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` explicitly addressing the translation/etymology correction.

## Scope
Expected primary changes only:
- `src/content/blog/beginner/via-lascivia-palmistry.md`
- directly necessary tracking/docs carried forward from the unmerged prior revision
- `.ai-ops/results/PP-RELAY-036-r3.json`

Do not change product direction, monetization, SEO/indexing policy, source policy, Relay control-plane logic, dispatch observability, or fast-lane settings.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-036-r3.json` on a pushed `claude/relay-PP-RELAY-036-...` branch distinct from prior revision branches for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`. Non-change terminal outcomes do not require a dummy PR.

For `READY_FOR_REVIEW`, push the revision-3 branch and open exactly one PR targeting `main` with standard Relay task/revision/result footers. Do not merge. Do not select the next task.

## Revision history
- Revision 1: initial Benham-only article; Director found three source-boundary overstatements.
- Revision 2: corrected tradition-wide naming, prevalence/universality, and comparative-strength wording; Director cumulative review found one residual unsupported translation/etymology gloss.
- Revision 3: remove/narrow only that residual translation/etymology claim and re-run full source-sensitive validation.