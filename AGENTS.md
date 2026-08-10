# Agent Operating Agreement — Palmistry Path

This repository is the source of truth. Conversation history and brainstorming are secondary.

## Task startup and local sync
At the start of a new implementation task, before reading or changing project files:
1. Inspect `git status`.
2. If the working tree is not clean, stop and report exactly what is modified/untracked. Do not reset, stash, discard, overwrite, or switch branches without explicit approval.
3. `git fetch origin`.
4. `git switch main`.
5. `git pull --ff-only`.
6. Verify `main` is clean, current with `origin/main`, and that `origin` is the expected Palmistry Path repository.
7. Create or switch to the designated task branch.
8. Never begin new work from a stale, previously completed feature branch.

Perform this synchronization automatically. Only ask the user to intervene when Git reports a state that cannot be resolved safely without their decision.

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

## Palmistry editorial guardrails
- Palmistry Path is educational, not a fortune-telling or predictive-science service.
- Never invent palmistry meanings or source attributions. Citations follow the four-tier source policy in `docs/editorial-style-guide.md` §5; commercial astrology sites, SEO content farms, and unsourced blogs are discovery aids only and are never cited.
- Quotation marks mean verified verbatim wording from the cited edition. Otherwise paraphrase.
- Prefer grounded phrasing such as “traditionally associated with,” “often interpreted as,” and “may suggest.”
- Note real disagreements between traditions; do not manufacture consensus.
- Do not make medical, legal, financial, or relationship-advice claims from palmistry.
- Historical gender conventions may be described accurately; practical instruction defaults to active/passive or dominant/non-dominant hand framing unless the historical distinction materially changes the interpretation.
- For article/lesson work, the detailed editorial guides in `docs/` are controlling.

## Article approval workflow
For a new or materially rewritten article unless the user explicitly overrides this workflow:
1. Give a concise pre-draft report only: intended sources, genuine editorial flags, target word count, and preview path/URL when known.
2. Write the article directly to the file; do not dump the full article into chat.
3. Do not commit/push the article until the user explicitly approves it.
4. After approval, run the relevant validation, update durable docs if needed, then commit/push.
5. Recommend `/clear` before starting the next article.

## Git safety
- Check status/branch before editing.
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
11. Commit coherent code/content + docs together when the task’s approval workflow permits it.
12. Report what changed, tests run, remaining risks, Git status, commit hash, and push status.

Documentation maintenance is part of done. If no canonical docs were affected, report `Wiki impact: none`.

## Cross-agent review
Inspect the actual diff first, then only the necessary surrounding implementation. Never trust another agent’s summary without verification. Check correctness, regressions, accessibility/responsive UX when relevant, SEO/content-model impact when relevant, unnecessary complexity, and product/editorial drift.