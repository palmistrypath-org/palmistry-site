# Claude Code — Palmistry Path

`AGENTS.md` is the shared operating policy. Follow it first. Do not reread the entire repo or wiki at session start.

## Small-studio model
Use the least expensive model that can reliably handle the task.

- **Opus — Director:** product/editorial judgment, architecture, difficult debugging, high-risk SEO/content-model changes, delegation, synthesis, final quality review.
- **Sonnet — Lead engineer/editor:** normal implementation planning, routine debugging, focused code/content work, standard code review.
- **Haiku — Scout/verifier:** bounded searches, inventories, locating files/slugs/assets, docs audits, checklists, mechanical verification.
- **Codex — Independent technical reviewer:** prefer as an external second set of eyes for meaningful code/architecture changes when independent review is useful. Do not duplicate the same exploratory work in both systems without a reason.

Escalate when uncertainty or downstream risk justifies it. Do not push product judgment or high-risk decisions to a cheaper worker just to save tokens.

## Token discipline
- Search/grep first; targeted ranges second; whole large files only when necessary.
- Do not bulk-read `docs/`, content collections, or source directories.
- Do not reread unchanged docs during the same bounded task.
- For review, inspect the Git diff first, then relevant surrounding code/content.
- Read only recent/relevant decisions and roadmap sections.
- Old debugging attempts, superseded plans, logs, worker reasoning, and exploration are disposable once conclusions are captured in repo docs/Git.
- Keep worker prompts minimal and worker reports concise.

## `/clear` and `/compact`
- After a meaningful task reaches a stable boundary—validated, canonical docs/handoff updated, and committed/pushed when permitted—recommend `/clear` before the next substantial task.
- A fresh session should reconstruct from Git + repo docs, not chat history.
- Use `/compact` only when continuing the **same unfinished substantial task** and losing live context would be wasteful.
- Before compacting, ensure `docs/ACTIVE_TASK.md` contains the objective, authorized scope, approved decisions, involved files/systems, current state, unresolved risks/test gaps, and exact next action.
- Compaction should preserve facts, not historical exploration.

## Editorial workflow
For new or materially rewritten articles, preserve the approval gate in `AGENTS.md`: concise pre-draft report → write to file → user approval → validation/commit/push. Never print the entire article to chat unless the user explicitly asks.

Primary established Western references include Cheiro (1916), Benham (1900), Gettings (1965), West (1998), and Fincham (2005). Use targeted research only when needed; never invent meanings or attributions. For detailed voice, structure, tradition handling, and content rules, read only the relevant sections of `docs/editorial-style-guide.md` and `docs/article-template.md`.

Voice: educational, grounded, curious, respectful, and atmospheric without becoming woo-woo.

## Development commands
```bash
npm run dev
npm run build
npm run preview
npm run audit
npm run audit:images
npm run audit:schema
npm run audit:all
npm run content-audit
```

Use the risk-based validation matrix in `AGENTS.md`; do not run every command for every tiny documentation edit.

## Project-specific rules
- Inspect implementation before proposing changes.
- Preserve established systems unless the task explicitly changes them.
- Treat `docs/IDEAS_AND_EXPERIMENTS.md` as non-authoritative brainstorming.
- Keep the repo understandable to a fresh Claude/Codex session without chat history.
- `PROJECT.md` is a compatibility pointer only; canonical project context lives under `docs/`.