# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-036

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Rework the approved search-intent article `src/content/blog/beginner/via-lascivia-palmistry.md` from revision 1 into a strictly source-safe revision 2. Preserve the useful Benham-grounded structure and medical-safety framing, but remove three Director-identified overstatements before publication.

Revision 1 is visible in PR #54 (`claude/relay-PP-RELAY-036-via-lascivia`). Use it as a draft/reference only. Start revision 2 from current `main`; do not merge or cherry-pick PR #54 wholesale.

## Why revision 2 is required
Director review of the actual revision-1 article and the controlling evidence found three narrow source-boundary issues despite passing CI and the worker preflight:

1. The opening says the article explains what the line is "actually called in the classical Western tradition." The controlling evidence verifies Benham, not tradition-wide consensus. Narrow this to Benham/a classical Western source rather than implying the whole tradition uses one established name.
2. The article says "Not every hand carries a Via Lascivia." The evidence explicitly prohibits modern prevalence/rarity claims. Remove this prevalence/universality assertion. You may retain, with direct attribution, the separately verified fact that Benham elsewhere treats the Via Lascivia more as a chance line than a fixed minor line, without converting that into a modern frequency claim.
3. The article says Benham's non-sensual-hand qualification means the same surplus energy could "just as easily" be expressed in other activity. The approved evidence supports only that it *could* be expressed in other activity. Remove the comparative-strength phrase "just as easily" or equivalent unless independently supported.

Inspect the full final article for equivalent wording, not only these exact sentences.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-036-benham-via-lascivia.md` before editing.

Safe supported boundary:
- Benham recognizes a named line called the Via Lascivia.
- Benham treats it as a sister line to the Line of Mercury in the dedicated section, while elsewhere saying he regards it more as a chance line than a fixed minor line.
- Benham gives a specific slanting course from the inside/base of the Mount of Moon toward the lower portion of the upper Mount of Moon near the percussion.
- Benham's historical explanation of the name connects it to period ideas about surplus energy/appetite/excess, and he explicitly qualifies that the same energy need not be expressed sexually in a non-sensual hand type.
- Palmistry Path may describe those statements as historical palmistry claims only, not empirical fact.

Hard exclusions unless separately established from already-approved repository evidence:
- any medical/diagnostic claim about allergies, sensitivities, digestion, liver, stomach, illness, health, vitality, or disease;
- any claim that the Via Lascivia reliably indicates allergy or that "allergy line" is an established classical synonym;
- criminality, dangerousness, morality, rape, murder, arson, or other harmful/deterministic period claims;
- modern prevalence/rarity, modern practitioner consensus, empirical validation, or psychological fact;
- invented combination readings involving the Mercury line, Moon mount, hand type, other lines, mounts, or markings.

Treat "allergy line" only as a search term/question and state that the verified classical source reviewed for this task does not establish a medical allergy meaning.

## Required article shape
Preserve the useful revision-1 shape where source-safe:
- concise identification/location guidance attributed to Benham;
- a historical-name/meaning section clearly labeled as source-attributed;
- a grounded Palmistry Path section separating historical interpretation from evidence and medical reality;
- a short FAQ directly answering whether this is really an "allergy line" without making medical claims;
- natural links to the advanced minor-lines lesson and relevant Mercury/Moon content where they genuinely fit;
- existing site CTA conventions without introducing a new offer or conversion strategy.

Do not pad the article with unsupported traits. A shorter evidence-complete article is preferred to speculative completeness.

## Validation
Run all article/content validation required by `AGENTS.md`, including at minimum:
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `npm run audit:claim-risk -- src/content/blog/beginner/via-lascivia-palmistry.md`
- `git diff --check`

Manually disposition every claim-risk finding in the final changed article. Also manually search the final prose for tradition-wide/consensus phrasing and any direct or implied frequency/universality wording because revision 1 demonstrated that the heuristic scanner may not catch those forms.

## SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`, inspect the final changed prose and verify:
1. every prevalence/consensus/frequency claim is directly supported or removed/narrowed;
2. every scientific, medical, historical, or evidence claim is traceable to approved evidence and correctly scoped;
3. no independently supported meanings have been combined into a new reading;
4. no vague anonymous authority such as "modern palmists," "some writers," "experts," or equivalent remains unsupported;
5. observation, historical/traditional interpretation, and Palmistry Path editorial/medical-safety guidance remain visibly distinct;
6. quotation marks are used only for independently verified verbatim wording or clearly as labels/search terms rather than source quotations;
7. no medical, legal, financial, deterministic relationship, criminality, or predictive-science claim is introduced.

The durable result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object that explicitly addresses the three Director rework findings above.

## No-change / human gate
Do not return `NO_CHANGE`: revision 1 requires the bounded corrections above and is not on `main`.

Return `HUMAN_REQUIRED` only if a load-bearing claim cannot be made safely from the controlling evidence and resolving it genuinely requires inaccessible/copyright source material or owner judgment. Do not use a human gate merely because Gettings or another preferred source is unavailable; reduce scope to the verified Benham boundary.

## Scope
Expected primary changes:
- `src/content/blog/beginner/via-lascivia-palmistry.md`
- directly necessary editorial backlog/current-state/changelog/handoff updates carried forward from revision 1
- `.ai-ops/results/PP-RELAY-036-r2.json`

Do not materially rewrite unrelated Mercury/Moon/minor-line articles merely to create reciprocal links. Do not change product direction, monetization, SEO/indexing policy, source policy, Relay control-plane logic, startup recovery, dispatch observability, or fast-lane settings.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-036-r2.json` on a pushed `claude/relay-PP-RELAY-036-...` branch distinct from the revision-1 branch.

Allowed terminal results:
- `READY_FOR_REVIEW`
- `BLOCKED`
- `HUMAN_REQUIRED`
- `PAUSED_USAGE_LIMIT`

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push the revision-2 branch, and open exactly one PR targeting `main` with the standard Relay task/revision/result footers. For other terminal results, push the result branch and normally do not create a dummy PR.

Do not merge. Do not select the next task.

## Revision history
- Revision 1: authorized the initial Benham-only article. Worker returned `READY_FOR_REVIEW` in PR #54 with passing CI. Director review found the three bounded source-scope issues listed above, so revision 1 was not accepted for merge.
- Revision 2: narrows only those source/consensus/prevalence statements and re-runs the full SOURCE_SENSITIVE validation; no expansion of article scope is authorized.
