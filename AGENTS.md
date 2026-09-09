# Agent Operating Agreement — Palmistry Path

This repository is the source of truth. Conversation history and brainstorming are secondary.

## Task startup and local sync
At the start of a new implementation task, before reading or changing project files:
1. Inspect `git status`.
2. If the working tree is not clean, stop and report exactly what is modified/untracked. Do not reset, stash, discard, overwrite, or switch branches without explicit approval.
3. `git fetch origin`.
4. `git switch main`.
5. If local `main` can fast-forward normally, `git pull --ff-only`.
6. Verify `origin` is the expected Palmistry Path repository and `origin/main` is the authoritative remote default-branch tip. If the working tree is clean but local `main` cannot fast-forward because it has diverged from `origin/main` or has no merge base, **do not reset, rebase, force-update, delete, or otherwise rewrite local `main`**. Leave local `main` untouched and create the designated new task branch directly from verified `origin/main`. This clean-divergence recovery is an approved non-destructive startup path and does not by itself require human intervention. Stop only if the remote identity/default branch is ambiguous, the tree is dirty, or using the designated task branch would overwrite existing work.
7. Create or switch to the designated task branch from the verified current base (`main` after a normal fast-forward, or `origin/main` under the clean-divergence recovery above).
8. Never begin new work from a stale, previously completed feature branch.

Perform this synchronization automatically. Only ask the user to intervene when Git reports a state that cannot be resolved safely under the normal fast-forward path or the explicit clean-divergence recovery above.

## Progressive disclosure
At the start of meaningful work:
1. Complete the startup/sync steps above.
2. Read this file.
3. If `docs/ACTIVE_TASK.md` says `Status: ACTIVE`, read it, then `docs/AI_HANDOFF.md`.
4. On a fresh session, read only the relevant section(s) of `docs/PRODUCT_VISION.md` when the task may affect user experience, content direction, visual direction, learning structure, monetization, or product scope.
5. Read only relevant sections of `docs/CURRENT_STATE.md`.
6. Search `docs/DECISIONS.md` for relevant recent decisions.
7. Read `docs/ROADMAP.md` only when priority/status matters.
8. Read `docs/ARCHITECTURE.md` only when source navigation, routing, schemas, deployment, or system design matters.
9. For editorial/content work, read the relevant portions of `docs/editorial-style-guide.md` and `docs/article-template.md`; do not bulk-read unrelated roadmaps.
10. Search/grep symbols, slugs, routes, assets, frontmatter fields, and filenames before opening large files. Prefer targeted ranges.

Do not recursively read `docs/` or reread unchanged context “just in case.” Prefer Git diff + targeted surrounding context.

## Authority and scope
- The implementation in the repo is authoritative. If docs disagree with implementation, investigate and correct the docs.
- Discussion or ideas are not authorization to implement. `docs/IDEAS_AND_EXPERIMENTS.md` is a holding area, not an approved backlog.
- Do not silently redesign established systems during a narrow task.
- Inspect the actual implementation before documenting or changing it.

## Corporate execution-integrity and instruction-propagation contract
This persistent instruction surface implements Corporate Brain operating model `2026-09-07.p0.2` (policy hash `a80b24c4fe536a1825aef93ba522ca09af571c13e53075d3e0b37e7fe099da09`) for execution-state truth, instruction propagation, and macro-execution policy.

- **State is a claim; evidence is truth.** Issue creation, assignment, `Next Owner`, Director intake, dispatch request, or equivalent routing intent does not prove execution.
- `TASK_ACCEPTED` / CLAIMED requires a concrete receiver identity and durable run/process identity. CLAIMED is not Working.
- `Working` / RUNNING requires durable acceptance plus explicit start evidence, a current lease, and durable progress evidence. If those facts are absent or expire, project state must remain or return non-Working.
- If an authorized work item has no currently executable consumer, report `WAITING_FOR_WORKER`, `DISPATCH_FAILURE`, or `NO_EXECUTABLE_ROUTE` as appropriate. Never use clipboard instructions, assignment, or a wake request as evidence that work started.
- Preserve exact work-item, branch/commit, source/evidence, approval, and cross-harness identity across handoffs. Palmistry's protected-write/authentication incident and exact-SHA merge-control path remain fail-closed until independently repaired and verified; this file grants no bypass.
- Architecture or policy changes do not automatically propagate to persistent agents, bots, automations, repository instructions, or routines. Long-lived surfaces must be reconciled against the current operating-model version/policy identity. A materially stale persistent surface is `INSTRUCTION_PROPAGATION_DRIFT`; machine-updatable surfaces should be updated through an authorized path, while genuinely manual/UI-only surfaces receive one exact human action only when no authorized update path exists.
- A stale or mismatched instruction surface may preserve in-flight evidence but must not silently claim current-policy eligibility for new work.

### High-capability macro-execution
For substantial coherent product, website, content, software, or systems-development work, prefer a large outcome-oriented execution pass through the best-fit capable harness when it can safely own implementation through internal verification.

- Bundle related implementation, QA, and self-repair work aggressively when continuous context improves throughput or quality; do not split coherent work into micro-tasks merely for management convenience.
- Keep deterministic automation, Corp Ops, event-driven Directors, and lower-cost mechanisms focused on state, routing, monitoring, reconciliation, routine coordination, and other management work.
- Preserve repository ownership, credential/security boundaries, publication/release gates, destructive-action controls, legal/compliance limits, spending controls, and genuine human/device/subjective gates. Macro scope never authorizes crossing them.
- Require durable branch/commit/PR or other resolvable evidence, validation performed, residual blockers/risks, and exact handoff identity from a macro pass before it can be treated as completed execution evidence.
- Route by demonstrated capability, context needs, tool access, cost/ROI, and task type rather than treating any model or vendor as permanent corporate authority.

These corporate control-plane rules supplement, and do not weaken, Palmistry Path's source-sensitive editorial rules, feature-branch review gate, Git safety rules, or human/reserved authority boundaries below.

## Palmistry editorial guardrails
- Palmistry Path is educational, not a fortune-telling or predictive-science service.
- Never invent palmistry meanings or source attributions. Citations follow the four-tier source policy in `docs/editorial-style-guide.md` §5; commercial astrology sites, SEO content farms, and unsourced blogs are discovery aids only and are never cited.
- Quotation marks mean verified verbatim wording from the cited edition. Otherwise paraphrase.
- Prefer grounded phrasing such as “traditionally associated with,” “often interpreted as,” and “may suggest.”
- Note real disagreements between traditions; do not manufacture consensus.
- Do not make medical, legal, financial, or relationship-advice claims from palmistry.
- Historical gender conventions may be described accurately; practical instruction defaults to active/passive or dominant/non-dominant hand framing unless the historical distinction materially changes the interpretation.
- For article/lesson work, the detailed editorial guides in `docs/` are controlling.

## Feature-branch review gate
The task branch is the review surface. Main is the gate.

- Agents may implement, test, commit, and push work on non-`main` task branches without a separate user approval step.
- **Pushing a feature branch is not approval to merge.** Never merge to `main`; it stays protected by independent user/ChatGPT review.
- Pause mid-task only for: an unresolved product/editorial decision, source evidence insufficient for a material claim, scope that would need to expand substantially, an unsafe or unresolved Git state, or a conflict with an approved durable decision. Minor wording choices and routine source-safe editing are not pause conditions.
- For source-heavy editorial work a pre-draft/source plan is still appropriate, but approve related items as one work packet rather than one approval per file.
- Prefer coherent work waves of 2–3 substantial objectives. Keep independently reviewable work in separate commits or branches.
- Parallel agents must use non-overlapping files or isolated worktrees/branches.
- Several completed branches/PRs may be reviewed together before merge.

## Article workflow
For a new or materially rewritten article, unless the user explicitly overrides this workflow:
1. Give a concise pre-draft report only: intended sources, genuine editorial flags, target word count, and preview path/URL when known.
2. Write the article directly to the file; do not dump the full article into chat.
3. Self-review against the editorial guardrails, run the relevant validation, update durable docs, then commit and push to the task branch under the feature-branch review gate above.
4. Recommend `/clear` before starting the next article.

## Git safety
- Check status/branch before editing.
- Never merge a task branch into `main` without explicit user approval.
- Never overwrite another agent’s uncommitted work.
- Do not use destructive Git operations just to clean the tree.
- Keep commits small, coherent, and reviewable; do not mix unrelated refactoring into a requested change.
- Commit only intended files.
- Use separate branches/worktrees for simultaneous agents; never let two agents edit the same checkout concurrently.
- Do not commit generated build/cache artifacts.

## Worker/subagent context
- Give workers a bounded objective plus the minimum relevant paths/symbols/context.
- Workers should not reread the whole wiki.
- Worker reports should contain concise conclusions, evidence/file locations, risks, and recommendations—not long transcripts.
- Prefer one implementation owner unless isolated branches/worktrees make parallel edits safe.

## Testing by change type
Use the cheapest validation that reliably covers the change.

**Wiki/agent-doc-only change**
- Review diff and cross-links. A site build is not required unless runtime files were touched.

**Article/lesson/content change**
- `npm run build`
- `npm run content-audit`
- Run the targeted link/image/schema audit when the change can affect that area; use `npm run audit:all` when broad content/layout/metadata behavior changed.

**Site code/layout/routing/schema change**
- `npm run build`
- `npm run audit:all`
- `npm run content-audit`
- Inspect the affected routes visually when presentation changed.

**SEO/indexing/deployment change**
- Run the relevant audit/script plus `npm run build`; inspect generated/output behavior as practical.

Do not run expensive unrelated checks purely by habit, but do not skip checks that cover the risk introduced by the change.

## Active task memory
`docs/ACTIVE_TASK.md` is disposable current-task memory for multi-call, compaction, or multi-session work. Keep only:
- current objective
- authorized scope
- approved decisions
- involved files/systems
- current implementation state
- unresolved risks/test gaps
- exact next action

Replace stale state instead of appending history. When complete, set `Status: INACTIVE` and reduce it to a short completion pointer. Durable history belongs in canonical docs and Git.

## Definition of done
For a meaningful approved change:
1. Implement the requested change.
2. Run practical tests appropriate to the risk.
3. Inspect obvious regressions.
4. Update `CURRENT_STATE.md` if project state changed.
5. Add a dated `CHANGELOG.md` entry for meaningful shipped/project-state changes.
6. Update `DECISIONS.md` for meaningful product/technical/process decisions.
7. Update `ROADMAP.md` if status/priorities changed.
8. Update `ARCHITECTURE.md` if structure materially changed.
9. Update `AI_HANDOFF.md` with unresolved risks and immediate continuation context.
10. Update/mark `ACTIVE_TASK.md` inactive.
11. Commit coherent code/content + docs together and push the task branch. Do not merge.
12. Report what changed, tests run, remaining risks, Git status, commit hash, and push status.

Documentation maintenance is part of done. If no canonical docs were affected, report `Wiki impact: none`.

## Cross-agent review
Inspect the actual diff first, then only the necessary surrounding implementation. Never trust another agent’s summary without verification. Check correctness, regressions, accessibility/responsive UX when relevant, SEO/content-model impact when relevant, unnecessary complexity, and product/editorial drift.