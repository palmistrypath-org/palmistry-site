# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-050

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved Next 25 article **Intuition Line Meaning in Palmistry** at `src/content/blog/beginner/intuition-line-palmistry.md` as a focused, beginner-readable treatment bounded entirely by the Director-verified Cheiro and Benham evidence. Do not turn historical claims about impressions or clairvoyance into empirical facts, predictions, or proof of psychic ability.

## Why this task now
PP-RELAY-049 was accepted and mechanically merged as iteration 26/50. `docs/editorial-backlog.md` lists the Intuition Line as the next unpublished Next 25 item (#20). Director preflight found that the backlog's proposed Gettings/Fincham naming note is not usable under the repository's evidence policy, but public-domain Cheiro and Benham texts support a narrower, useful article. The controlling evidence file records that safe boundary.

## Scope
Primary:
- `src/content/blog/beginner/intuition-line-palmistry.md`

Supporting only as directly necessary:
- at most two natural reciprocal navigation links from existing content that already discusses minor lines, Luna, or the Intuition Line; inspect `minor-lines-overview.md`, `mount-of-luna.md`, and `m-line-palmistry.md`, but do not rewrite them to force a link
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `docs/CURRENT_STATE.md` only for the minimum article-count/current-state reconciliation required by `AGENTS.md`
- `.ai-ops/results/PP-RELAY-050-r1.json`

Do not modify `.ai-ops/evidence/PP-RELAY-050-cheiro-benham-intuition-line.md`, the task packet, lessons, site code, routing, schemas, or unrelated article prose. If a natural reciprocal link would require a broader rewrite, omit it and document the decision.

## Controlling evidence
Read `.ai-ops/evidence/PP-RELAY-050-cheiro-benham-intuition-line.md` before drafting. It is the complete approved evidence boundary for this task.

Supported at a high level:
- Cheiro and Benham both name the feature **Line of Intuition**.
- Both describe a curved or near-semicircular line on the outer/percussion side between the Luna and Mercury regions, with slightly different directional wording.
- Both distinguish it from the Mercury/Health line (Hepatica); Cheiro notes the markings can run through or alongside one another while remaining distinct.
- Cheiro historically associates the line with sensitivity to impressions/surroundings, presentiments, vivid dreams, inspiration, and intuitive expression.
- Benham historically associates a well-marked line with intuitive impressions and sensitivity in estimating people; his deep-versus-broken degree statement may be named and bounded or omitted.

These are named historical claims, not empirical facts or Palmistry Path predictions.

## Naming correction from the backlog
The approved primary evidence does **not** establish `Line of Clairvoyance`, `Psychic Line`, or another phrase as a verified alternate name. Do not use those phrases as synonyms in the title, description, body, headings, FAQ answers, metadata, or source note. A short FAQ may answer a real search query by saying the approved Cheiro/Benham evidence names it the **Line of Intuition** and does not verify `Line of Clairvoyance` as an alternate historical name. Do not infer that no other tradition or source ever used the phrase.

## Article intent and differentiation
- Primary query: `intuition line palmistry`.
- Filename: `src/content/blog/beginner/intuition-line-palmistry.md`.
- Suggested title: `Intuition Line Meaning in Palmistry` (adjust only if needed while staying accurate and under the title-length guidance).
- Frontmatter: `cluster: "minor-lines"`, `relatedLesson: "/learn/advanced/01-minor-lines-overview"`, publication date `2026-08-25`, and a plain 140–160 character description with no psychic/predictive promise.
- Target length: 900–1,200 words. This narrow evidence boundary controls over the broader default template; do not pad with unsupported variations, cross-tradition claims, or combinations.
- Observation first: explain the outer/percussion-side curve and how Cheiro/Benham distinguish it from the straighter Mercury/Health line before interpretation.
- Keep Cheiro's and Benham's historical readings named and distinguishable, including real differences in location wording.
- Make Palmistry Path policy explicit and separate: the site treats these readings as history/interpretive tradition and does not use the line to validate psychic ability, predict events, or guarantee that an impression is accurate.
- Useful myths/FAQ topics include psychic proof, prediction, absence, look-alike confusion, and the unverified `Line of Clairvoyance` synonym—answered as site policy/evidence limits, not as claims about every palmistry tradition.

## Prohibited claims
- No verified-alias claim for `Line of Clairvoyance`, `Psychic Line`, `Medium Line`, or equivalent.
- No prevalence, rarity, percentage, population norm, `most/many/often/commonly/typically/generally/usual/rare`, or hand-type distribution claim.
- No statement that presence proves psychic, clairvoyant, mediumistic, supernatural, prophetic, diagnostic, empathic, or scientifically validated ability.
- No statement that absence means a person lacks intuition, sensitivity, imagination, or any capacity.
- No claim that a hunch, dream, warning, presentiment, or impression is accurate, reliable, predictive, or actionable as fact.
- No medical, mental-health, nervous-system, sleep, legal, financial, relationship, danger, death, or life-event claim.
- No cross-tradition claim and no Gettings, Fincham, West, Indian, Chinese, or anonymous contemporary-practitioner attribution.
- No combination reading with the Head, Heart, Fate, Mercury, Life, or other lines; mounts; hand/finger shape; stars; crosses; islands; branches; forks; endpoints; or other markings.
- No interpretation for islands, stars, crosses, branches, forks, doubled forms, interruptions, length, exact geometry, direction, or age/timing beyond the bounded location/look-alike distinction in the evidence file.
- No stronger-with-degree rule except Benham's explicit deep-versus-broken historical statement, which must remain attributed and may be omitted.
- Do not infer from source silence that a claim is false or absent across all palmistry traditions.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/intuition-line-palmistry.md` and disposition every finding truthfully.
2. Build a claim-level evidence map for every historical or interpretive statement in the article and any changed navigation prose.
3. Confirm every Cheiro/Benham claim stays within `.ai-ops/evidence/PP-RELAY-050-cheiro-benham-intuition-line.md`.
4. Search the final cumulative prose and documentation for `clairvoyance|clairvoyant|psychic|medium|supernatural|prophetic|empath|rare|seldom|most|many|often|commonly|typically|generally|usually|accurate|reliable|predict` and narrowly disposition every occurrence. Historical terms may remain only when attributed and necessary; no alias, prevalence, proof, or prediction claim may remain.
5. Search for `Gettings|Fincham|West|Indian|Chinese|modern palmists|contemporary practitioners|some writers|experts` and remove any unsupported attribution from the article.
6. Search for combinations with other lines, mounts, hand/finger shapes, signs, islands, stars, crosses, branches, forks, endpoints, length, depth, breaks, timing, or exact geometry; remove them unless explicitly allowed above. If retaining Benham's deep-versus-broken statement, keep it named, historical, and non-empirical.
7. Verify every direct quotation verbatim against the exact public-domain edition and log it; prefer paraphrase.
8. Confirm observation, Cheiro's historical interpretation, Benham's historical interpretation, and Palmistry Path editorial policy remain visibly distinct.
9. Compare the final article with `minor-lines-overview.md`, `mount-of-luna.md`, `mercury-line.md`, and `m-line-palmistry.md` for contradiction and cannibalization; do not silently fix unrelated legacy claims.
10. Verify the article does not present the backlog's unverified copyright-era source note as evidence and does not list any source it did not actually use.

## Acceptance criteria
1. A useful 900–1,200 word beginner article exists at the authorized slug with valid frontmatter and no predictive/psychic promise.
2. Location and Mercury/Health-line distinction are observation-first, internally consistent, and traceable to the controlling evidence.
3. Every historical interpretation is attributed to Cheiro or Benham and stays inside the claim-level evidence map.
4. The article does not claim `Line of Clairvoyance` or another phrase is a verified alternate name.
5. No unsupported prevalence, psychic-proof, accuracy, prediction, absence, cross-tradition, combination, variation, health, danger, or outcome claim remains.
6. Palmistry Path policy is separate from historical wording and does not sanitize what Cheiro or Benham actually claimed.
7. Any reciprocal navigation is natural, non-duplicative, and limited to two short edits; omission is acceptable when no natural slot exists.
8. Backlog/article-count bookkeeping and source verification are accurate and bounded.
9. Required SOURCE_SENSITIVE preflight and project validation pass.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/intuition-line-palmistry.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a useful article still genuinely requires material evidence unavailable under repository policy after using the Director evidence file. Return `BLOCKED` only for a technical blocker that cannot safely be repaired within scope. Return `PAUSED_USAGE_LIMIT` immediately if a usage/credit safeguard triggers.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-050-r1.json` on a pushed `claude/relay-PP-RELAY-050-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object when content has been drafted/reviewed. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.
