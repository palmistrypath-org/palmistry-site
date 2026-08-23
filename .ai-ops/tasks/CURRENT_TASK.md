# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-044

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Publish the approved Next 25 companion article `Long Heart Line Meaning in Palmistry` as a narrowly source-bounded Heart Line variation article, using verified classical evidence without importing medical, predictive, prevalence, fixed-cutoff, or unsupported combination claims.

## Revision 2 remediation
Revision 1 produced an otherwise useful article and passed CI, but Director review found residual source-boundary violations that must be corrected before merge:
- The identification/FAQ wording defines "long" using a finger-zone threshold such as `well past the territory below the index finger`. The authorized packet explicitly prohibits a fixed finger-zone/midpoint cutoff. Keep identification comparative only: the line travels conspicuously far across the upper palm relative to the hand being observed. Benham's entire-hand example may remain as a named historical extreme, not a modern threshold.
- The article says Benham's reading is `not ... a view shared across palmistry traditions as a whole`. That is itself an unsupported tradition-wide negative-consensus claim. Replace it with evidence-bounded wording: this article establishes only Benham's reading and does not claim broader consensus either way.
- Review the endpoint-separation wording for equivalent overreach. It is safe to say length and endpoint are separate observations; do not make an unsupported categorical claim that a line can be "long" while ending in every listed endpoint position unless specifically established by approved evidence.
- Preserve all sound revision-1 work, source attribution, safety exclusions, reciprocal navigation, and bookkeeping. Do not broaden scope.

## Why this task now
- PR #76 / PP-RELAY-043 revision 2 is verified merged at the exact Director-approved head SHA, bringing the v2C pilot to 20 accepted iterations.
- `docs/editorial-backlog.md` lists item 15, Long Heart Line, as the next unshipped line-variation article after Broken Head Line.
- `src/content/blog/beginner/long-heart-line-meaning.md` does not exist on current `main`.
- The existing Heart Line lesson and pillar are maps to candidate concepts only; legacy prose is not automatic source proof.

## Scope
Primary:
- create `src/content/blog/beginner/long-heart-line-meaning.md`

Supporting only as directly necessary:
- `src/content/blog/beginner/heart-line.md` for one reciprocal internal link if appropriate
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-044-r2.json`

Do not rewrite the canonical Heart Line lesson, modify claim-risk tooling, or expand into other Heart Line variations.

## Controlling evidence and boundaries
- Treat `src/content/lessons/lines/02-heart-line.mdx` and the current Heart Line pillar only as maps to candidate claims. Existing prose is not automatic proof.
- Director-verified public-domain evidence from William G. Benham, *The Laws of Scientific Hand Reading* (1900), Line of Heart chapter establishes that Benham treats Heart Line **length** as an interpretive variable. In the length passage, he explicitly associates a Heart Line crossing the entire hand with excessive affective/sentimental emphasis and allowing sentiment to guide decisions. This is historical palmistry evidence, not empirical psychology.
- A safe article-level interpretation may therefore say, with explicit attribution, that **Benham associated a very extended Heart Line with stronger or more dominant sentimental/affective emphasis**. Keep this historical and qualitative.
- Benham's surrounding Heart Line material also contains period medical, mortality, event-timing, moralizing, jealousy, and deterministic relationship claims. Those are **not authorized** for this article and must not be repeated, modernized, implied, or converted into advice.
- Do not turn Benham's extreme `crosses the entire hand` example into a fixed modern measurement rule, population average, finger-zone rule, or cutoff for what counts as long.
- Do not infer that a longer line means greater capacity to love, better relationships, superior empathy, emotional maturity, or a stronger personality unless a specifically approved source directly supports that exact claim.
- Do not use the existing lesson's phrase `broad and sustained emotional engagement` as proof unless independently verified against an approved named source during this task.
- Do not assert prevalence (`common`, `rare`, `typical`, `most`, `many`), tradition-wide consensus or non-consensus, or anonymous authority.
- Do not invent combinations with endpoints, depth, chains, forks, branches, mounts, hand shape, the Head Line, or other features.
- Do not use commercial SEO/palmistry sites as evidence.

## Article intent and differentiation
- Primary search intent: `long heart line meaning` / `long heart line palmistry`.
- Keep identification comparative and observational: describe a line that travels conspicuously far across the upper palm relative to the hand being observed. Do not define a fixed centimeter, finger-zone, midpoint, or population-average threshold unless separately verified and explicitly authorized.
- Differentiate **length** from **endpoint**: they are separate observations. Do not collapse endpoint meanings into length meanings, and do not use endpoint position to create an unsupported definition of `long`.
- Link naturally to the main Heart Line guide and structured lesson; a reciprocal link from the pillar is allowed if useful.
- Avoid fear-based or relationship-deterministic framing. Palmistry Path presents the interpretation as historical tradition, not diagnosis or predictive science.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/long-heart-line-meaning.md` and truthfully disposition every finding.
2. Verify every retained palmistry interpretation against Benham or another explicitly approved named source; do not rely on lesson/pillar repetition as proof.
3. Search the final article for prevalence/consensus/generalization terms (`most`, `many`, `often`, `commonly`, `typically`, `generally`, `usual`, `rare`, `popular`, `modern palmists`, `traditional readers`, `experts`, and equivalents) and remove/narrow unsupported usage.
4. Search for fixed-cutoff/precision language (`average`, `normal`, `midpoint`, `central zone`, finger-zone boundaries such as `past/below the index finger`, exact measurements, `the longer...the more`, `very long means stronger`, and equivalents). Retain only what the named source directly establishes and keep Benham's entire-hand example historical rather than normative.
5. Search for negative-consensus wording (`not shared across traditions`, `the tradition does not`, `palmists do not agree`, and equivalents). Do not make either positive or negative tradition-wide claims without approved evidence.
6. Confirm the article does not convert line length into a claim about intelligence, mental health, medical condition, relationship outcome, moral character, or predictive event.
7. Confirm length and endpoint are kept conceptually separate; no endpoint meaning is presented as a length meaning and no unsupported endpoint-position generalization defines `long`.
8. Confirm no new combination reading was synthesized.
9. Keep observation, named historical interpretation, and Palmistry Path editorial/safety policy clearly distinguishable.
10. Record concise evidence/disposition notes in `docs/source-verification-log.md` and the durable result.

## Acceptance criteria
1. A useful, beginner-readable `long-heart-line-meaning` companion article exists and serves a distinct variation query without duplicating the Heart Line pillar.
2. Identification is observational/comparative and does not invent a fixed cutoff, finger-zone threshold, or population norm.
3. Every retained interpretation is grounded in a specifically named approved source and framed historically, not as empirical psychology or anonymous consensus.
4. The article does not equate length with relationship success, capacity to love, empathy, morality, health, danger, or prediction.
5. Length is clearly distinguished from endpoint, depth/clarity, chains, forks, branches, and other variables; no unsupported combination reading is introduced.
6. No unsupported prevalence/consensus or non-consensus, vague authority, precision/degree extrapolation, or stronger-with-degree rule appears.
7. Internal links/navigation are useful and non-duplicative.
8. Editorial backlog/published count is updated only if the article actually ships in the PR.
9. SOURCE_SENSITIVE preflight is complete and truthful.
10. Required validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/long-heart-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a useful article cannot be produced within the verified evidence boundary and additional source acquisition or genuine editorial judgment is required. Do not pad with guesses.

Return `BLOCKED` only for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-044-r2.json` on a pushed `claude/relay-PP-RELAY-044-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering claim-level source verification, prevalence/consensus/generalization wording, scientific/historical claims, vague authority, quotation fidelity, precision/degree extrapolation, medical/predictive framing, combination readings, endpoint-vs-length separation, and observation-vs-interpretation-vs-editorial-policy separation.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.