# AI Handoff - Palmistry Path

## Before working
1. Read `../AGENTS.md`.
2. If `ACTIVE_TASK.md` is active, read it next.
3. Read only the task-relevant portions of `PRODUCT_VISION.md`, `CURRENT_STATE.md`, recent/relevant `DECISIONS.md`, `ROADMAP.md`, and `ARCHITECTURE.md` as directed by the task.
4. For editorial work, open only relevant sections of the editorial guide/template and any directly relevant specialized planning doc.
5. Search/grep before opening large source/content files.
6. Inspect the actual relevant implementation/content and current Git state.

## Current continuation context
Current focus: none in implementation. Curriculum Wave 3E + 3F is complete and
pushed on `feat/curriculum-wave-3e-3f`, unmerged. Batch 3D is also complete and
pushed on `feat/curriculum-batch-3d-hand-structure`, unmerged. Several branches
may be reviewed together before merge.

**The 25-lesson core curriculum is complete.** Do not treat it as outstanding
work. Totals are Foundations 5, Lines 6, Mounts 8, Minor Lines & Synthesis 6.
Remaining curriculum items in `ROADMAP.md` are P2-or-later polish. **All four of
the curriculum audit's P0s are now closed** — the simian source defect (3B), the
line-quality defect (3C), the absent thumb/fingers material (3D), and the missing
worked example of a complete reading (3F).

Wave 3E + 3F was implemented in an isolated worktree while a Codex agent worked
concurrently in the canonical checkout. The wave deliberately did not touch
`astro.config.mjs`, `src/pages/404.astro`, `src/pages/index.astro`,
`public/images/home/**`, `scripts/audit-content.mjs`, `scripts/audit-images.mjs`,
or `docs/audits/TECHNICAL_REMEDIATION_WAVE_2026-08.md`. It did modify two shared
technical files that were not on that list — `src/indexability.mjs` (one added
noindex path) and `scripts/audit-schema.mjs` (noindex pages exempted from
required-type checks) — so those are the reconciliation candidates if the parallel
branch touched indexability or the audit scripts.

**The wave went through a consolidated review correction pass on 2026-08-13**, after the technical wave merged. Current `origin/main` is merged into the branch. Two error classes were corrected, and both are worth watching for in any future lesson:

1. **Epistemic overclaiming in synthesis prose.** The first draft of `combining-what-you-see.mdx` described converging features as "independent evidence" that could be trusted "with real confidence", and concluded that traits were "real". Corroboration inside a single interpretive tradition is not evidence about a person; repetition earns a theme prominence in the reading, not truth. Recorded in `DECISIONS.md` (2026-08-13) with the phrasing to avoid.
2. **Inventing replacement meanings, and sanitising history.** Declining a strong historical claim does not license installing a gentler universal one — absent sun lines and absent fate lines are now simply recorded as absent. And palmistry's predictive history must not be edited down to match site policy: the capstone had claimed Benham addressed the short-life-line misconception, when Benham in fact divided the life line into periods and read a tasselled ending as death at the indicated age. His caution was about practice, not a rejection of the reading. The limits this course observes are **its own**, justified by unproven reliability, not by the tradition's restraint.

**Three further things from this wave are load-bearing.** First, `advanced/01` now teaches
the Sun and Mercury lines and is titled *The Minor Lines: Sun and Mercury*; it must
not drift back toward promising either line a lesson of its own, because neither
will ever have one. Second, on the Mercury line **Cheiro and Benham are not in
agreement** — Cheiro reads the line's absence as actively favourable, Benham does
not read absence at all — and the historical health claims, including Cheiro dating
death from where the life and health lines meet, are reported unsanitised with the
site's refusal to read a crease for health stated as a separate position. The
rejected medical reading was deliberately **not** replaced with an invented
symbolic one; do not "fix" that gap. Third, on the Sun line Cheiro's severe reading
of absence is his and is not softened, the gentler reading is labelled as ours, and
**Benham must not be credited with reassurance about absence he never gave** — an
error a previous batch already had to correct once.

**The Simian lesson's URL moved**, the one planned change in the target
curriculum. Canonical is `/learn/advanced/simian-line`. The old
`/learn/lines/06-simian-line` still resolves through a static stub at
`src/pages/learn/lines/06-simian-line.astro`, which outranks the dynamic lesson
route and carries the canonical to the new URL, `noindex, follow`, and a
Pagefind-ignored `<main id="main-content">`. Do not delete that stub, and do not
add lesson JSON-LD to it. `npm run audit:indexability` asserts its behaviour on
every build, so a regression will fail the audit rather than pass silently.

**Watch for one structural trap.** Nothing in the build enforces unique or
sequential `order` values within a module: `getStaticPaths` sorts by `order` and
tolerates duplicates, so a collision renders two lessons with the same number and
still produces a fully green `build`, `audit:all` and `content-audit`. This wave
hit it and caught it only by checking ordering explicitly. Verify module counts and
`order` sequences by hand whenever you insert, move, or renumber a lesson. Recorded
in `DECISIONS.md` (2026-08-13).

**The practice layer is stateless on purpose.** All 25 lessons carry a `Practice`
block and four module-end `Checkpoint`s exist, with answers behind native
`<details>`. There is no JavaScript, state, persistence, localStorage, backend,
account, score, or pass/fail anywhere in them, and nothing credentials a learner.
Adding scoring, streaks, completion tracking or saved answers reverses a durable
decision — see `DECISIONS.md` (2026-08-13) — rather than extending a feature.

**The review model changed during Batch 3D.** Agents may implement, test, commit,
and push on non-`main` task branches without a separate approval step; the branch
is the review surface. **Merging to `main` still requires explicit user review.**
The rule is in `AGENTS.md` under "Feature-branch review gate" and is mirrored in
`CLAUDE.md`. Pause only for an unresolved product/editorial decision, insufficient
source evidence for a material claim, substantial scope expansion, unsafe Git
state, or a conflict with a durable decision.

Latest completed work: on 2026-08-13 Remediation Batch 3D added **The Thumb and
the Fingers** as the fourth Foundations lesson and retitled `foundations/03` to
**Hand Shape, Texture, and Flexibility**. The core curriculum is now **24
lessons**, not 23, and Foundations has **5**. `04-active-and-passive-hand.mdx`
moved to `order: 5` and remains the module's closing lesson; its filename and URL
are unchanged.

**Two source findings from this batch are load-bearing.** First, the thumb-length
landmark now taught is Benham's and only Benham's: the thumb held against the side
of the hand reaches about the middle of the index finger's *base* segment, with
his own caveat that a low or high setting confounds it. **Cheiro gives no landmark
at all** — the "to or beyond the first joint" wording in
`blog/beginner/thumb-meaning-palmistry.md:35` is in neither author. Second, the
**will/logic phalange framework is Benham's, not Cheiro's**; Benham adopted the
two names "for brevity", and Cheiro's second-phalange reading in *Palmistry for
All* is tact and diplomacy, not logic. The blog article attributes it to both,
which is wrong and remains open. Do not let that attribution drift into a lesson.

**The will/reason framing is as erodible as the islands framing.** The lesson
teaches proportion → historical reading → site boundary, states plainly that the
labels are not measurements of intelligence, willpower, self-control, judgement,
or character, and **installs no modern replacement meaning**. Preserve the
asymmetry.

**The two-input rule in the hand-shape lesson is load-bearing.** Texture,
consistency, and whole-hand flexibility were added as a separate qualifying layer
placed *after* the four types, and the lesson says three times that the elemental
classification rests on two observations and only two. A future edit that lets
texture or flexibility become a classification input breaks the system. The four
flexibility/firmness ideas on the site are also deliberately distinct: whole-hand
flexibility (`foundations/03`), thumb-tip flexibility (`foundations/
thumb-and-fingers`), line quality (`lines/line-quality-and-markings`), and mount
firmness (Mounts module).

Deliberately out of the new lesson and not to be added back without a decision:
the clubbed or "murderer's" thumb, fingertip and thumb-tip typologies, the three
phalange zones, knotted-versus-smooth joints, per-finger meaning tables, and
nails. No Indian or Chinese equivalence is claimed anywhere in it.

One visual follow-up was carried out of the batch: **no figure was created**, and
Foundations still has no designed image system per `visual-assets-roadmap.md`. If
revisited, the plate to commission is a combined thumb/finger diagram in the Lines
module's ornate register whose required discrimination is the thumb's two segments
against the fingers' three.

Preceding implementation: on 2026-08-11 Remediation Batch 3C added **Line Quality
and Markings** as the first lesson of the Lines module. The core curriculum is
now **23 lessons**, not 22, and the Lines module has **7**. The lesson teaches
the observational vocabulary shared by every line — depth as a continuum,
clarity as a separate axis, relative rather than absolute depth,
clean/chained/broken continuity, clean versus overlapping breaks, forks versus
branches, islands, and parallel/support lines — and its competency is
description before interpretation. The line-quality vocabulary that four lesson
files previously re-derived is now taught once; the revisions to `lines/01`–`05`
were subtractive (30 insertions against 36 deletions).

**The insertion mechanism matters for every future lesson.** Lesson URLs derive
from the content filename; display order derives from the `order` frontmatter.
They are independent, so a lesson can be inserted anywhere by setting `order`
alone — no renames, no route changes. Batch 3C used an unnumbered filename with
`order: 1` and incremented `lines/01`–`06` to 2–7, leaving all 45 inbound links
to existing Lines routes intact. Do not renumber filenames to reorder lessons.
`order: 0` is unusable: `learn/[module]/index.astro` renders `order` as "Lesson N".

**The islands framing is load-bearing and easy to erode.** The lesson teaches
form → verified historical reading → site policy. Cheiro (1916) and Benham
(1900) are quoted exactly and their health framing is not softened. Palmistry
Path's boundary is stated separately as a modern position resting on evidence —
and **no invented modern universal meaning replaces the historical one.** There
is no comparably sourced modern symbolic reading for islands; the lesson says so
and substitutes method rather than meaning. Preserve that asymmetry. A future
edit that quietly supplies "islands mean divided energy" as though it were
sourced would reintroduce exactly the error the batch avoided.

Two follow-ups were carried out of the batch deliberately. The **island diagram
was not created** — the repo has none, and a hand-built schematic SVG was
assessed and declined because the Lines module's figures are ornate generated
plates and a plain schematic would introduce a conflicting visual register as
the module's first figure. The new lesson ships with no figures and teaches the
island form by prose contrast against fork, support line, and break. And the
**generic chained/faint duplication at `lines/06-simian-line.mdx:65` remains**,
since 3C was explicitly order-only for that file; fold it into 3E. *(Closed by
Wave 3E: the duplication is gone, and the lesson — now at
`advanced/simian-line.mdx` — applies the Line Quality vocabulary and links to the
lesson that owns it.)*

Preceding implementation: on 2026-08-11 Remediation Batch 3B implemented the first
tranche of the approved curriculum decisions — truthful labelling, the mount
model, and the simian correction. Two implementation commits plus one
documentation/state commit, and a pre-merge review correction. The simian source
defect (P0-2) is
**fixed**: the lesson no longer asserts *ekaagra* as Hasta Samudrika Shastra
doctrine, the 1–3% / 1–4% contradiction is resolved to 1–3%, and the same stale
attribution in `heart-line.md` was corrected. The mount model is published
sitewide (seven planetary mounts, eight mount regions, Mars in two, Plain of Mars
separate), module 4 is now "Minor Lines & Synthesis" at Intermediate with the
`advanced` slug and all lesson URLs unchanged, and the decorative `prerequisites`
field is gone from all 22 lessons and the schema.

Everything that block listed as pending — the combining-what-you-see lesson, the
Practice and Checkpoint components, the worked reading, and the simian module move
— **shipped in Wave 3E + 3F on 2026-08-13.** The curriculum is at 25 lessons and
the core target is complete. See the continuation context at the top of this file.

Preceding work: on 2026-08-11 Remediation Batch 3A, the Learning Path &
Curriculum Audit, produced `docs/audits/CURRICULUM_AUDIT_2026-08.md` on branch
`audit/curriculum-learning-path-3a`, revised the same day after independent
review.

**Read the audit's second-pass box before acting on anything in it.** The first
pass argued that because the reading procedure examines mounts before lines, the
curriculum must teach the Mounts module before the Lines module. That inference
was wrong and is retracted. Measured dependency runs the other way: the Mounts
module carries 54 line references and four `##` sections that interpret
line–mount relationships (`mounts/02:74`, `05:24`, `06:26`, `07:47`); the Lines
module carries 22 mount references, all positional landmarks, and no sections —
and `foundations/02:65` already names and locates every mount region before the
Lines module runs. The Lines module needs mount *location*, not mount
*assessment*. **The existing module order is correct and is not proposed for
change.** The six-module restructure is withdrawn.

The audit now proposes four modules and **25 core lessons** — KEEP 11, MOVE 1,
REVISE 10, MERGE 0, ADD 3 — plus 4 optional/later lessons. A lean-curriculum test
folded most first-pass gaps into neighbouring lessons and checkpoints rather than
new lessons, and an independent competency test demoted the sun line and Mercury
line from P0 to P1 (the remedy is revising `advanced/01` so it teaches them, not
adding lessons).

The audit listed four P0s. **All four are now closed** — the simian source defect
by Batch 3B, the line-quality defect by 3C, the absent thumb/fingers material by
3D, and the missing worked example of a complete reading by 3F, which added
*Combining What You See* with one worked reading on a described hand. The audit's
sun-line/Mercury-line P1 is also closed, by the `advanced/01` revision in 3E
rather than by new lessons, exactly as the competency test recommended.

The eight §17 decisions were settled by the user before Batch 3B. The durable
ones are now recorded in `DECISIONS.md` (2026-08-11): the four-module
architecture is retained; teaching order may differ from the reading procedure;
seven planetary mounts across eight mount regions with Mars in two and the Plain
of Mars separate; the 25-lesson target is approved for later implementation; and
a lesson teaches the variable while the blog covers the specific value. Read
those three entries rather than re-deriving them from the audit.

Preceding implementation: on 2026-08-11 Remediation Batch 2C, Quotation Integrity, closed the quotation backlog Batch 2B opened. Every quotation-marked passage in a paragraph naming Cheiro or Benham was re-inventoried from source and matched against the six public-domain scans: 245 spans, 162 of them genuine attributions, 55 already exact, 107 corrected, zero left unverified. Beyond wording, it corrected five attributions that carried claims the sources do not make, one wrong work (Cheiro on Mars is in *Language of the Hand*, not *Palmistry for All*), and one of Batch 2B's own replacement quotations, which turned out to come from a reader's letter printed in Cheiro's book rather than from Cheiro.

The rule worth carrying forward is in `DECISIONS.md` (2026-08-11): a quotation is verified only when the source is saying it about the feature the article attributes it to. Fourteen passages in this batch matched the corpus and were still wrong, mostly short phrases sitting under the wrong feature. Do not treat an exact string match as a check.

Preceding implementation: on 2026-08-10 Remediation Batch 2B, Source Integrity & Editorial Trust, established the four-tier source policy in `editorial-style-guide.md` §5, added the permanent task startup/local sync rule to `AGENTS.md`, stripped all weak and encyclopaedia citations from the corpus, re-sourced the Chinese and Indian tradition articles, corrected the audit's flagged factual claims, fixed the highest-risk unverifiable quotations, and regenerated the About page source list.

A pre-merge correction pass on 2026-08-10 fixed a contradiction introduced by Batch 2B: the branch had established from the primary texts that Cheiro and Benham read the life line for length of life, then published content claiming the tradition never did. The rule that prevents a repeat is in `DECISIONS.md` and `editorial-style-guide.md` §5.2 — describe the historical claims accurately, state the site's own boundary separately, never sanitise the sources to match policy. Apply it to any future myth-correction, not just lifespan.

Remaining sourcing risk: **20 quotations attributed to Gettings (1965), West (1998), and Fincham (2005) have never been verified**, because those editions are in copyright and could not be text-searched. They are untouched and flagged in `editorial-backlog.md`. There is nothing to do about them without the books; the open question is editorial — whether to keep quoting sources the site cannot check. Every quotation-marked attribution to Cheiro or Benham covered by Batch 2C is now verified or corrected; this does not imply that every unquoted paraphrase elsewhere in the corpus has been independently source-checked.

Preceding implementation: on 2026-08-10 Remediation Batch 2A, Accessibility & UX Safety, added global skip navigation, shared focus-visible styling, main-content targets, focused text-contrast/opacity fixes, learner-facing alt text for Lines lesson Figures, larger practical lesson/header targets, accessible labels/status semantics for the Starter Guide and waitlist forms, a search browse fallback, `/learn` module-card headings, and a focused accessibility audit.

Known follow-up: after explicit approval during Batch 2A, `npm audit --omit=dev` completed and reported 4 production vulnerabilities: 1 low, 1 moderate, and 2 high. The remaining fix path is `npm audit fix --force`, which would install Astro 7.2.0 and sharp 0.35.3 as a breaking upgrade path. Do not force that migration without explicit approval.

Key current implementation facts are summarized in `CURRENT_STATE.md` and `ARCHITECTURE.md`; verify source before relying on them for a change.

## Immediate next action
Await the user's review and merge of `feat/curriculum-batch-3c-line-quality` and
`feat/curriculum-batch-3d-hand-structure`, or their next Palmistry Path
objective. **Do not merge either unprompted** — both are pushed and unmerged, and
3D builds on 3C.

The remaining phases: **3E** is the module 4 rebuild — the simian lesson's module
move (take the generic chained/faint cleanup at `lines/06:65` with it) and
revising `advanced/01` so it teaches the sun and Mercury lines; **3F** is
synthesis and practice — Combining What You See, the capstone revision,
`<Practice>`, and module `<Checkpoint>`s. Do not pull later batches forward and do
not reorder modules.

New-lesson work runs under the `AGENTS.md` article workflow and feature-branch
review gate: pre-draft report, write to file, self-review, validation, then commit
and push to the task branch. Merging still needs the user. Start from a clean
context if possible (`/clear`), reconstructing from Git plus targeted canonical
docs rather than chat history.
