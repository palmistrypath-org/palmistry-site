# Active Task

Status: INACTIVE

## Last completed
Remediation Batch 3A, Learning Path & Curriculum Audit (2026-08-11), on branch
`audit/curriculum-learning-path-3a`. Audit and planning only — **no curriculum
change was implemented and none is authorized.** Nothing under `src/` was
touched; the only files changed are the new audit report and this handoff pair.

Deliverable: `docs/audits/CURRICULUM_AUDIT_2026-08.md`. It maps all 22 lessons,
audits the learner journey from zero knowledge to a basic responsible reading,
and proposes a six-module target curriculum (KEEP 8, MOVE 5, REVISE 8, MERGE 1,
ADD 11).

Driving finding: the course teaches an observation order in
`foundations/02-how-to-read-a-palm.mdx` and restates it at
`advanced/04-how-to-give-a-reading.mdx:25-33` — mounts before lines — then
contradicts it with a module sequence that runs Lines before Mounts. Supporting
P0s: line-quality vocabulary used across nine lesson files and taught in none;
thumb, fingers, sun line, and Mercury line missing while the capstone depends on
them; no worked reading example anywhere.

The audit corrects four findings from `SITE_AUDIT_2026-08.md` §5 and overturns
its claim that sequencing and prerequisites are correct. Evidence is in §20.

## Blocking
Eight decisions in §18 of the audit require user approval before any
implementation batch starts. D3 (seven mounts or eight) touches paid-product
copy. Recommended first batch is 3B — structure and labelling only, no new
lesson prose.

Start the next task by reading `../AGENTS.md`, then this file and `AI_HANDOFF.md`.
