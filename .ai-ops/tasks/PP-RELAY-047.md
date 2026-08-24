# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-047

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved Next 25 companion article **Forked Fate Line Meaning in Palmistry** (`forked-fate-line-meaning`) only if the fork-specific interpretation can be independently grounded in named, approved evidence. The existing Fate Line lesson/article and backlog are a map to the topic, not automatic proof of any fork meaning.

## Why this task now
- PP-RELAY-046 is accepted and merged, bringing the v2C pilot to 23/50.
- `docs/editorial-backlog.md` identifies item 18, Forked Fate Line, as the next unshipped variation article.
- Recent v2C rework shows that legacy lesson prose must not be promoted into a new article without claim-level source verification.

## Scope
Primary when evidence is sufficient:
- `src/content/blog/beginner/forked-fate-line-meaning.md`

Supporting only as directly necessary:
- one or two reciprocal navigation links from the existing Fate Line pillar/lesson when useful
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-047-r1.json`

Do not rewrite the canonical Fate Line lesson/pillar, broaden into broken Fate Line, Fate Line origins/endpoints, or clean unrelated legacy claims.

## Evidence-first requirement
Before drafting interpretive prose:
1. Search approved repository evidence, source-verification records, and named primary/approved sources for **forked Fate Line / Fate Line fork** specifically.
2. For every interpretation you intend to retain, record a claim-level evidence map in `docs/source-verification-log.md` identifying the named source and what it actually supports.
3. Existing Fate Line lesson/article language about branches, breaks, direction changes, Jupiter/Apollo deviations, or general synthesis is **not** evidence for a fork meaning unless the source itself specifically addresses a forked Fate Line.
4. Do not construct a fork reading by combining separately supported Fate Line meanings with Jupiter, Apollo, Saturn, career, success, creativity, ambition, relationships, or other mount/line meanings.
5. If repository-accessible evidence is insufficient to support a useful fork-specific article, return `HUMAN_REQUIRED` with the exact missing source/evidence need rather than inventing or padding an interpretation. Do not create a thin article that merely disguises missing evidence.

## Article intent and differentiation
- Primary query: `forked fate line meaning` / `fate line fork palmistry`.
- Beginner-readable companion to the main Fate Line pillar.
- Open by distinguishing a **fork** (line dividing at an end) from a **branch** (offshoot along the line) and from a **break** (interruption/gap), using only repository-approved observation vocabulary.
- Keep observation separate from interpretation.
- Do not imply that any fork direction is good/bad, stronger/weaker, or more successful unless a named approved source specifically supports that exact claim.
- Calm, non-deterministic framing: Palmistry Path does not treat Fate Line features as fixed destiny, guaranteed career outcomes, wealth forecasts, or event timing.

## Prohibited claims
- No invented fork-specific meaning inferred from legacy Fate Line prose.
- No invented combinations such as `fork toward Jupiter = leadership`, `fork toward Apollo = creative success`, or similar unless the **fork-specific** combination is independently verified in a named approved source.
- No prevalence/rarity claims, population norms, anonymous practitioner consensus, or `common/typical/usual/rare` wording without direct approved evidence.
- No fixed geometric cutoff for what counts as a fork beyond the repository's observation vocabulary.
- No monotonic `larger/wider/deeper fork = stronger meaning` rule without direct source evidence.
- No guaranteed career, success, wealth, relationship, timing, health, danger, or predictive claims.
- No vague claims such as `the tradition says`, `modern palmists believe`, or `classical sources agree` unless the statement is specifically bounded to named verified sources.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/forked-fate-line-meaning.md` if the article is created and truthfully disposition every finding.
2. Verify every retained historical/traditional interpretation against the claim-level evidence map; legacy site prose alone does not qualify.
3. Search final prose for prevalence/consensus/generalization language and remove/narrow unsupported usage.
4. Search for precision/degree language and stronger-with-degree extrapolation.
5. Search for all cross-feature synthesis involving Jupiter, Apollo, Saturn, mounts, other lines, career/success/wealth, and remove anything not fork-specifically verified.
6. Keep direct observation, named historical interpretation, and Palmistry Path editorial guidance clearly distinguishable.
7. Verify any direct quotation verbatim against the cited edition; otherwise paraphrase.
8. Confirm no deterministic prediction, event timing, medical/legal/financial advice, or guaranteed outcome language remains.

## Acceptance criteria
1. If sufficient approved evidence exists, a useful beginner companion article is added at `src/content/blog/beginner/forked-fate-line-meaning.md` and answers the query without exceeding that evidence.
2. Fork/branch/break observation is clearly distinguished without importing unsupported interpretations.
3. Every retained fork-specific interpretation is traceable to a named independently approved source at claim level.
4. No meaning is synthesized from separately supported Fate Line/mount meanings.
5. No unsupported prevalence/consensus, fixed-cutoff, stronger-with-degree, outcome-guarantee, or timing claim appears.
6. Internal navigation and backlog bookkeeping are bounded and accurate.
7. SOURCE_SENSITIVE preflight is complete and truthful; required validation passes.
8. If evidence is insufficient for criteria 1–7, `HUMAN_REQUIRED` is the correct result and must name exactly what evidence/source access is missing; no dummy PR is required.

## Validation
If article/content changes are made, run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/forked-fate-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

For a source-insufficient `HUMAN_REQUIRED` result, verify the evidence search and durable result/branch contract rather than creating speculative content solely to satisfy build validation.

## Stop conditions
Return `HUMAN_REQUIRED` when a useful fork-specific interpretation genuinely requires source evidence/access not available under repository policy. State the exact source or claim that is missing. Return `BLOCKED` only for a bounded technical blocker that cannot safely be repaired within scope. Return `PAUSED_USAGE_LIMIT` immediately if a usage/credit safeguard triggers.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-047-r1.json` on a pushed `claude/relay-PP-RELAY-047-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object when content has been drafted/reviewed. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.