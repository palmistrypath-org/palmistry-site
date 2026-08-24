# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-047

## Revision
2

## Risk Class
SOURCE_SENSITIVE

## Objective
Produce the approved Next 25 companion article **Forked Fate Line Meaning in Palmistry** (`forked-fate-line-meaning`) using only the Director-verified Cheiro evidence boundary in `.ai-ops/evidence/PP-RELAY-047-cheiro-fate-line-branch.md` plus any additional independently verified approved evidence. The article must not promote the existing unverified terminal-fork prose from `fate-line-branches-meaning.md` into new content.

## Revision 2 note
Revision 1 correctly returned `HUMAN_REQUIRED` because Claude's environment could not access primary texts and the repository had no fork-specific verified evidence. The Director independently verified Cheiro's *Palmistry for All* (1916) and added `.ai-ops/evidence/PP-RELAY-047-cheiro-fate-line-branch.md`. That evidence resolves the access gate for one specific lower/base divided Fate Line form. Proceed within that narrow boundary; do not infer unsupported top/terminal fork meanings.

## Scope
Primary when the bounded evidence supports a useful article:
- `src/content/blog/beginner/forked-fate-line-meaning.md`

Supporting only as directly necessary:
- one or two reciprocal navigation links from existing Fate Line content when useful
- `docs/editorial-backlog.md` published count/status after the article is actually added
- `docs/source-verification-log.md`
- `docs/CHANGELOG.md`
- `.ai-ops/results/PP-RELAY-047-r2.json`

Do not rewrite the canonical Fate Line lesson/pillar or clean unrelated legacy claims. The sibling `fate-line-branches-meaning.md` contains an unverified terminal-fork claim; do not copy it as evidence and do not expand this task into a full cleanup of that article.

## Controlling evidence boundary
Read `.ai-ops/evidence/PP-RELAY-047-cheiro-fate-line-branch.md` before drafting.

Verified from Cheiro:
- Cheiro explicitly describes a Fate Line configuration with one branch on the Mount of Venus and another on the Mount of Moon.
- In Cheiro's historical system, he associates that specific Venus/Moon divided configuration with romance/passion strongly influencing career or life direction.

This evidence supports discussing a **specific lower/base branching or fork-like form**. It does not establish a general meaning for every Fate Line fork.

## Article intent and differentiation
- Primary query: `forked fate line meaning` / `fate line fork palmistry`.
- Beginner-readable companion to the main Fate Line pillar.
- Clearly distinguish a fork/division from a branch/offshoot and a break/gap using repository-approved observation vocabulary.
- Explain that Palmistry Path currently has verified classical evidence for one specific lower/base divided Fate Line form, while the evidence packet does not verify a terminal/top-fork meaning.
- Keep observation, Cheiro's historical interpretation, and Palmistry Path editorial guidance clearly separate.
- Calm, non-deterministic framing: no fixed destiny, guaranteed career outcomes, wealth forecasts, or event timing.

## Prohibited claims
- No terminal/top fork meaning unless independently verified in a named approved source and logged at claim level.
- No synthesized `fork toward Jupiter = leadership`, `Apollo = creative success`, Mercury/Saturn/wealth/two careers/recognition meanings from separate mount or Fate Line evidence.
- No generalization of Cheiro's Venus/Moon interpretation to all forks.
- No prevalence/rarity, population norms, anonymous consensus, fixed geometry, monotonic stronger-with-width/depth rules, or good/bad rankings without direct evidence.
- No medical, legal, financial, relationship-outcome, danger, or timing predictions.
- No vague `the tradition says`, `modern palmists believe`, or `classical sources agree` wording unless specifically bounded to verified named sources.

## Required SOURCE_SENSITIVE preflight
Before `READY_FOR_REVIEW`:
1. Run `npm run audit:claim-risk -- src/content/blog/beginner/forked-fate-line-meaning.md` if the article is created and disposition every finding truthfully.
2. Map every retained interpretive claim to `.ai-ops/evidence/PP-RELAY-047-cheiro-fate-line-branch.md` or another independently verified approved source recorded in `docs/source-verification-log.md`.
3. Search final prose for unsupported prevalence/consensus/generalization language.
4. Search for precision/degree and stronger-with-degree extrapolation.
5. Search every mention of Jupiter, Apollo, Mercury, Saturn, mounts, two careers, success, recognition, wealth, timing, or outcomes and remove anything not fork-specifically verified.
6. Do not treat legacy `fate-line-branches-meaning.md` terminal-fork prose as evidence.
7. Verify any direct quotation verbatim; otherwise paraphrase.
8. Confirm observation, named historical interpretation, and Palmistry Path policy remain distinguishable.

## Acceptance criteria
1. A useful beginner article is added at `src/content/blog/beginner/forked-fate-line-meaning.md` without exceeding the verified evidence boundary.
2. The article accurately explains the specific verified lower/base Venus/Moon divided Fate Line configuration and attributes its historical meaning to Cheiro.
3. The article explicitly avoids assigning an unverified meaning to terminal/top forks or other mount-directed forks.
4. Fork/branch/break observation is clearly distinguished without unsupported interpretation.
5. Every retained interpretation is traceable to named approved evidence at claim level.
6. No unsupported synthesis, prevalence/consensus, cutoff, degree-scaling, guaranteed outcome, or timing language remains.
7. Internal navigation/backlog bookkeeping is bounded and accurate.
8. SOURCE_SENSITIVE preflight and required validation pass.
9. If even this bounded evidence cannot support a useful article without padding, return `HUMAN_REQUIRED` with the exact additional evidence needed rather than inventing content.

## Validation
If article/content changes are made, run at minimum:
- `npm run audit:claim-risk -- src/content/blog/beginner/forked-fate-line-meaning.md`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## Stop conditions
Return `HUMAN_REQUIRED` only if a useful article still genuinely requires evidence unavailable under repository policy. Return `BLOCKED` only for a technical blocker that cannot safely be repaired within scope. Return `PAUSED_USAGE_LIMIT` immediately if a usage/credit safeguard triggers.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-047-r2.json` on a pushed `claude/relay-PP-RELAY-047-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a truthful completed `source_preflight` object when content has been drafted/reviewed. For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.