# Relay Task Packet
Status: AUTHORIZED

## Task ID
PP-RELAY-039

## Revision
1

## Risk Class
STANDARD

## Objective
Improve the targeted `audit:claim-risk` preflight so SOURCE_SENSITIVE editorial work is more likely to flag unsupported precision/comparison language before Director review, especially the exact patterns that caused avoidable rework in PP-RELAY-037 and PP-RELAY-038.

## Why this task
The v2C pilot has now accepted 15 iterations. Recent Head Line companion tasks exposed a repeatable tooling gap: the current heuristic catches prevalence, anonymous authority, and strong empirical overstatement, but it does not prompt review for unsupported fixed/average cutoffs or stronger-with-degree extrapolations such as `farther than average`, fixed palm-zone thresholds, or `very long ... indicates more` wording. This task improves the preflight aid rather than weakening Director review or changing source policy.

## Scope
Expected primary changes:
- `scripts/audit-claim-risk.mjs`;
- deterministic fixtures under `scripts/fixtures/claim-risk/` as needed;
- directly necessary package/docs comments if the new category needs explanation;
- `.ai-ops/results/PP-RELAY-039-r1.json`.

Do not change Relay dispatch/auto-merge workflows, editorial meanings, published palmistry prose, SEO strategy, fast-lane policy, or source policy.

## Required behavior
Add a narrow heuristic review category for unsupported precision / degree extrapolation in editorial prose. It should prompt review for patterns materially similar to the failures already observed, including where practical:
- comparative population norms such as `farther than average`, `longer than average`, `shorter than average`, or equivalent average-based cutoffs;
- fixed geometric/anatomical certainty phrasing when used as a definitional cutoff, such as `ending before the central zone` / `reaches the central zone`, without attempting to understand every legitimate anatomical sentence;
- stronger-with-degree extrapolation patterns such as `very long ... indicates`, `the longer ... the more`, `the shorter ... the less`, or equivalent monotonic scaling language.

Keep the tool explicitly heuristic: findings are review prompts, not proof a sentence is wrong. A clean scan must not be presented as source validation.

Avoid broad regexes that would flood ordinary prose with obvious false positives. Prefer a small set of high-signal patterns tied to observed Relay failures.

## Acceptance criteria
1. Existing claim-risk categories and CLI behavior remain intact.
2. A new clearly named category flags deterministic risky fixtures for average/fixed-cutoff/degree-scaling language.
3. Neutral observational wording such as `compare how far the line travels across this palm` is not flagged by the new category.
4. Existing self-test fixtures continue to pass, and new fixtures exercise both positive and negative cases.
5. Output still includes file/line/category/context and still explains that findings require evidence review rather than automatic rejection.
6. No published palmistry content is changed by this task.
7. No dispatch, merge, fast-lane, billing, or human-gate behavior changes.

## Validation
Run at minimum:
- `npm run audit:claim-risk:selftest`
- targeted scans against the new risky and neutral fixtures
- `npm run build`
- `npm run content-audit`
- `git diff --check`

If the implementation changes package wiring or broader audit integration, run the directly affected audit as well. Do not wire this heuristic into `audit:all` unless that is already current behavior; this task is about improving the targeted preflight, not making it a global blocking gate.

## No-change / stop conditions
Return `NO_CHANGE` only if current `main` already contains equivalent high-signal checks plus deterministic tests for average/fixed-cutoff/degree-scaling wording. Document the exact existing coverage in the durable result.

Return `BLOCKED` if the improvement cannot be made without an unbounded parser/refactor or destabilizing the existing audit behavior. Do not redesign the tooling framework.

## Durable result contract
Every worker run that passes startup must leave `.ai-ops/results/PP-RELAY-039-r1.json` on a pushed `claude/relay-PP-RELAY-039-...` branch for `READY_FOR_REVIEW`, `NO_CHANGE`, `BLOCKED`, `HUMAN_REQUIRED`, or `PAUSED_USAGE_LIMIT`.

The result must include `risk_class: "STANDARD"` and `source_preflight: null` unless source preflight is explicitly needed by the worker for some bounded reason.

For `READY_FOR_REVIEW`, commit implementation/docs plus the result artifact, push one Relay branch, and open exactly one PR targeting `main` with matching Relay footers. Non-change terminal outcomes do not require a dummy PR. Do not merge and do not select the next task.

## Revision history
- Revision 1: initial bounded v2C claim-risk precision/degree heuristic improvement.
