# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-041

## Revision
1

## Risk Class
SOURCE_SENSITIVE

## Objective
Create the next approved Head Line variation article, Straight vs Curved Head Line, using only source-safe interpretations already established and supportable from current repository evidence after the PP-RELAY-040 canonical Head Line cleanup.

## Why this task
The approved editorial backlog lists Article 13, Straight vs Curved Head Line, as the next unshipped Head Line variation after Short and Long Head Line. PP-RELAY-040 has just cleaned the canonical Head Line lesson's slope/path language, making this a useful real-world test of whether the v2C source preflight and precision/degree claim-risk tooling can prevent the avoidable rework seen on PP-RELAY-037/038.

## Scope
Primary content scope:
- create one companion blog article for `straight-head-line-palmistry` (choose the repository-consistent beginner path/filename convention after inspecting adjacent variation articles);
- reciprocal/internal links only where directly necessary to connect the article to the canonical Head Line lesson/article and adjacent Head Line variation cluster.

Supporting scope:
- `docs/editorial-backlog.md` only to mark Article 13 published after the article exists and validations pass;
- `docs/source-verification-log.md` only for concise evidence/disposition notes genuinely needed by this task;
- `docs/CHANGELOG.md` only if repository convention requires it;
- `.ai-ops/results/PP-RELAY-041-r1.json`.

Do not rewrite the canonical Head Line lesson, modify claim-risk tooling, create unrelated articles, or replay stale branch content.

## Source boundary
1. Treat the post-PP-RELAY-040 canonical Head Line lesson as a map to candidate interpretations, not automatic proof for every legacy statement.
2. Prefer already verified Benham/Cheiro or other approved repository evidence. Do not invent or broaden interpretations to fill article length.
3. Keep observation separate from traditional interpretation and Palmistry Path editorial guidance.
4. Do not assert fixed geometric cutoffs, population averages, prevalence/frequency, cross-tradition consensus, or monotonic degree rules unless directly supported by approved evidence.
5. Do not synthesize straight/curved path with length, depth, forks, mounts, hand shape, other lines, or endpoints into new combination readings unless that exact combination is independently supported.
6. No IQ/intelligence superiority, diagnosis, deterministic personality, predictive-science, or medical claims.
7. If repository evidence is insufficient for a useful article without padding or inference, return `HUMAN_REQUIRED` rather than guessing.

## Required source-sensitive preflight
Before `READY_FOR_REVIEW`, inspect the complete final article and explicitly disposition:
- every prevalence/consensus/frequency claim;
- every scientific or historical assertion;
- every anonymous-authority phrase;
- every quotation for edition-level fidelity;
- every fixed cutoff, average/norm, or stronger-with-degree extrapolation;
- every combination reading;
- observation vs historical interpretation vs Palmistry Path guidance.

Run the targeted claim-risk audit against the final article and manually disposition every finding. A clean heuristic scan is not proof of source sufficiency.

## Acceptance criteria
1. One useful, search-intent-matched Straight vs Curved Head Line companion article is created under the repository's established article conventions.
2. Straight and curved/sloping observations are described comparatively without inventing a fixed zone/angle/average cutoff.
3. Every retained palmistry meaning is traceable to approved repository evidence and attributed/framed at the level that evidence supports.
4. No unsupported prevalence, consensus, vague authority, scientific/historical, precision/degree, or combination claims remain.
5. Article clearly distinguishes itself from the broad Head Line article and the Short/Long Head Line companion articles.
6. Internal navigation is useful and non-duplicative; no broken links or orphan condition is introduced.
7. Editorial backlog is updated only after successful implementation/validation.
8. SOURCE_SENSITIVE preflight is complete and truthful.
9. Build/content/link/audit validation passes.

## Validation
Run at minimum:
- `npm run audit:claim-risk -- <new-article-path>`
- `npm run build`
- `npm run content-audit`
- `npm run audit:all`
- `git diff --check`

## No-change / stop conditions
Return `NO_CHANGE` only if the exact Article 13 search-intent companion is already published on current `main` and independently verify that it satisfies the task objective; do not create a duplicate.

Return `HUMAN_REQUIRED` if a useful article requires a new interpretation, unavailable source acquisition, unresolved quotation fidelity, or consequential editorial judgment not supportable from approved repository evidence.

Return `BLOCKED` for a bounded technical blocker that prevents implementation/validation and cannot safely be repaired within scope.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-041-r1.json` on a pushed `claude/relay-PP-RELAY-041-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "SOURCE_SENSITIVE"` and a completed `source_preflight` object covering unsupported prevalence/consensus, scientific/historical claims, combination readings, vague authority, quotation fidelity, precision/degree extrapolation, and observation-vs-interpretation framing.

For `READY_FOR_REVIEW`, open exactly one Relay PR targeting `main` with matching task/revision footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded Straight vs Curved Head Line companion article after canonical Head Line source-integrity cleanup.