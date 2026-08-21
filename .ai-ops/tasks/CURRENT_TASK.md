# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-036

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Create the approved search-intent article `src/content/blog/beginner/via-lascivia-palmistry.md` within a strict source-safe boundary. Answer what the Via Lascivia is in classical palmistry, where Benham places it, how he historically framed its name/interpretation, and why Palmistry Path does not treat palm markings as medical evidence. Address the search phrase “allergy line” cautiously without endorsing an unsupported medical or historical equivalence.

## Why this task now
`docs/editorial-backlog.md` shows this as the sole remaining unpublished item in the approved Next 10. PP-RELAY-035 is now merged, so this is the highest-priority outstanding editorial gap. The Director independently verified a usable public-domain Benham evidence boundary before dispatch so the worker does not have to guess or stall on inaccessible sources.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-036-benham-via-lascivia.md` before drafting.

Safe supported boundary:
- Benham recognizes the Via Lascivia and describes it in relation to the Line of Mercury/Mount of Moon area.
- Benham gives a specific slanting course from the inside/base of the Mount of Moon toward the lower portion of the upper Mount of Moon near the percussion.
- Benham’s historical explanation of the name connects it to period ideas about surplus energy/appetite/excess, and he explicitly qualifies that the same energy need not be expressed sexually in a non-sensual hand type.
- Palmistry Path may describe those statements as historical palmistry claims only, not empirical fact.

Hard exclusions unless separately established from already-approved repository evidence:
- any medical/diagnostic claim about allergies, sensitivities, digestion, liver, stomach, illness, health, vitality, or disease;
- any claim that the Via Lascivia reliably indicates allergy or that “allergy line” is an established classical synonym;
- criminality, dangerousness, morality, rape, murder, arson, or other harmful/deterministic period claims;
- modern prevalence/rarity, modern practitioner consensus, empirical validation, or psychological fact;
- invented combination readings involving the Mercury line, Moon mount, hand type, other lines, mounts, or markings.

If existing approved repository evidence independently establishes a safe non-medical use of the “allergy line” alias, cite and distinguish that evidence explicitly. Otherwise, treat “allergy line” only as a search term/question and state that the verified classical source reviewed for this task does not establish a medical allergy meaning.

## Required article shape
Keep the article useful but proportionate to the evidence. Include, as support allows:
- concise identification/location guidance attributed to Benham;
- a historical-name/meaning section clearly labeled as traditional/source-attributed;
- a grounded Palmistry Path section separating historical interpretation from evidence and medical reality;
- a short FAQ that can directly answer whether this is really an “allergy line” without making medical claims;
- natural links to the advanced minor-lines lesson and relevant Mercury/Moon content where they genuinely fit;
- existing site CTA conventions without introducing a new offer or conversion strategy.

Do not pad the article with unsupported traits merely to reach a standard length. A shorter evidence-complete article is preferred to speculative completeness.

## Validation
Run all article/content validation required by `AGENTS.md`, including at minimum:
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `npm run audit:claim-risk -- src/content/blog/beginner/via-lascivia-palmistry.md`
- `git diff --check`

Manually disposition every claim-risk finding in the changed article.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, inspect the final changed prose and verify:
1. every prevalence/consensus/frequency claim is directly supported or removed/narrowed;
2. every scientific, medical, historical, or evidence claim is traceable to approved evidence and correctly scoped;
3. no independently supported meanings have been combined into a new reading;
4. no vague anonymous authority such as “modern palmists,” “some writers,” “experts,” or equivalent remains unsupported;
5. observation, historical/traditional interpretation, and Palmistry Path editorial/medical-safety guidance remain visibly distinct;
6. quotation marks are used only for independently verified verbatim wording;
7. no medical, legal, financial, deterministic relationship, criminality, or predictive-science claim is introduced.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object.

## No-change / human gate
Return `NO_CHANGE` only if the target article already exists on current `main` and materially satisfies this task’s explicit evidence-safe search intent after independent verification.

Return `HUMAN_REQUIRED` only if a load-bearing claim or article requirement cannot be satisfied from the controlling evidence and resolving it genuinely requires inaccessible/copyright source material or owner judgment. Do not use a human gate merely because Gettings or another preferred source is unavailable; reduce scope to the verified Benham boundary when that still yields a useful article.

## Scope
Expected primary changes:
- `src/content/blog/beginner/via-lascivia-palmistry.md`
- directly necessary editorial backlog/current-state/changelog/handoff updates
- `.ai-ops/results/PP-RELAY-036-r1.json`

Do not materially rewrite unrelated Mercury/Moon/minor-line articles merely to create reciprocal links. Do not change product direction, monetization, SEO/indexing policy, source policy, Relay control-plane logic, or fast-lane settings.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-036-r1.json` on a pushed `claude/relay-PP-RELAY-036-...` branch.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `NO_CHANGE`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push the branch, and open exactly one PR targeting `main` with the standard Relay task/revision/result footers. For `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`, push the branch containing the result artifact and normally do not create a dummy PR.

Do not merge. Do not select the next task.
