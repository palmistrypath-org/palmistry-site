# Curriculum Wave 3E/3F Branch Readiness Audit — August 2026

**Relay task:** PP-RELAY-003, revision 2
**Scope:** Independently audit the unmerged remote branch `feat/curriculum-wave-3e-3f` against current `main`, without shipping or rewriting curriculum. Documentation-only.

## Revision 2 correction

Revision 1 omitted `docs/ROADMAP.md` from the overlap classification even though both sides changed it since the merge-base, and understated the merge-feasibility finding for the overlapping docs. Re-verified directly from Git rather than assumed:

- `git diff --name-status 3543f26 origin/feat/curriculum-wave-3e-3f -- docs/` vs. the same command against `origin/main` shows the branch and `main` both changed exactly **five** `docs/*.md` files since the merge-base: `ACTIVE_TASK.md`, `AI_HANDOFF.md`, `CHANGELOG.md`, `CURRENT_STATE.md`, and `ROADMAP.md` (now added to the table in §1). The revision-2 task description's count of "six," including `ARCHITECTURE.md`, does not reproduce: `git diff 3543f26 origin/feat/curriculum-wave-3e-3f -- docs/ARCHITECTURE.md` is empty — the branch never touches that file, so it isn't part of the overlap set by definition regardless of what `main` did to it alone. This discrepancy is flagged here for visibility rather than silently resolved either way; §1 and §3 below reflect the verified five-file set.
- Re-running `git merge-tree` against these five files (rather than trusting the revision-1 summary) shows revision 1's "zero conflict markers, all auto-mergeable" claim was **incorrect even at the time of that audit** — all five files, including `ROADMAP.md`, produce literal `<<<<<<< / ======= / >>>>>>>` conflict markers because both sides insert new entries at the same location (e.g. immediately under `## Recently completed approved work`). §3 below is corrected accordingly. This does not change the branch's scope classification or the recommended next step, which already called for a doc-reconciliation pass — it means that pass resolves real Git conflicts, not only narrative tension.

## Work packet

- `main` at audit time: `0abbf75` (2026-08-17)
- Branch under audit: `origin/feat/curriculum-wave-3e-3f`, tip `c70f861`
- Merge-base: `3543f26`
- Branch commits (base → tip): `d392f04` Rebuild Minor Lines module and move the Simian lesson → `5391254` Add synthesis and curriculum practice architecture → `44dfa87` Record the completed 25-lesson curriculum state → `230ece5` Merge `origin/main` into the branch → `ed97caf` Correct synthesis framing and integrate parallel technical wave → `c70f861` Log the one legacy testing-claim the correction pass surfaced
- No merge, rebase, force-push, or content changes were made to `feat/curriculum-wave-3e-3f` or to `main` as part of this audit. Validation ran in a disposable `git worktree`, removed afterward.

## Approved scope (source: `docs/DECISIONS.md` 2026-08-11, `docs/AI_HANDOFF.md`, `docs/ACTIVE_TASK.md`)

- **3E** — the simian lesson's module move (taking the generic chained/faint line-quality cleanup at `lines/06-simian-line.mdx:65` with it) and revising `advanced/01-minor-lines-overview.mdx` so it teaches the sun and Mercury lines (demoted P0→P1 by the curriculum audit).
- **3F** — synthesis and practice: a "Combining What You See" worked-reading lesson (closes the audit's one remaining open P0 — no worked example of a complete reading), the capstone (`how-to-give-a-reading`) revision, `<Practice>`, and module `<Checkpoint>`s.

## 1. File-by-file classification

| File | Classification | Evidence |
|---|---|---|
| `lines/06-simian-line.mdx` → `advanced/simian-line.mdx` (rename) | 3E | `module: lines→advanced`, `moduleTitle: "Minor Lines & Synthesis"`, `order: 7→4`, `difficulty: beginner→intermediate`. Line ~65 cleanup present: removes the "same quality distinctions applied to all major lines in this module" self-reference (no longer true once the lesson leaves Lines) and replaces it with a cross-reference to `line-quality-and-markings`. |
| `src/pages/learn/lines/06-simian-line.astro` (new) | 3E | Redirect stub for the old URL: `noindex, follow`, canonical to `/learn/advanced/simian-line`, Pagefind-ignored, meta-refresh. |
| `src/consts.ts` | 3E | `lines` module description drops "plus the simian line"; `advanced` description gains it plus synthesis/reading language — matches both 3E and 3F in one file. |
| `src/indexability.mjs` | 3E | Adds the old simian path to `NOINDEX_PATHS`, consistent with the redirect stub. |
| `scripts/audit-schema.mjs` | 3E | Adds a noindex exemption so the redirect stub isn't wrongly required to carry `LearningResource` JSON-LD. |
| `src/pages/glossary.astro`, `blog/beginner/m-line-palmistry.md`, `blog/beginner/simian-line.md`, `docs/seo-content-roadmap.md` | 3E | Single-line link updates to the new simian-line URL. No dangling links to the old path found outside the intentional noindex entry. |
| `src/components/Practice.astro`, `Checkpoint.astro`, `CheckpointItem.astro` (new) | 3F | Presentational, stateless, no client JS. Native `<details>/<summary>` disclosure; `aria-labelledby` wiring; reuse existing CSS custom properties already defined elsewhere in the codebase. |
| `advanced/combining-what-you-see.mdx` (new) | 3F | New synthesis/worked-reading lesson; closes the audit's stated P0 gap. See §2. |
| `advanced/01-minor-lines-overview.mdx` | 3F content of 3E's assignment | Retitled "The Minor Lines: Sun and Mercury"; now teaches both lines in depth per the approved scope; relationship lines/girdle demoted to a brief forward pointer. |
| `advanced/04-how-to-give-a-reading.mdx` | 3F | Capstone revised: sequencing/weighting/contradiction material moved out to `combining-what-you-see.mdx`; refocused on ethics, language, and closing a reading; gains `<Practice>` and a `<Checkpoint>`. |
| `advanced/02-marriage-relationship-lines.mdx`, `03-girdle-of-venus.mdx` | 3F | Mechanical: existing "what to take away" sections wrapped in `<Practice>`. No content change. |
| Remaining lesson `.mdx` files (foundations, lines, mounts — effectively every other lesson) | 3F | Mechanical `<Practice>` wrap; `foundations/04-active-and-passive-hand.mdx`, `lines/05-fate-line.mdx`, `mounts/08-mount-of-mars.mdx` additionally gain a `<Checkpoint>` recapping material already established earlier in their own module. No new claims. |
| `.ai-ops/*`, `.github/workflows/*` | Not curriculum; process drift | These were added to `main` after the branch was cut (Relay/CI pilot). The branch never had them; this is not a regression the branch introduces. |
| `docs/ACTIVE_TASK.md`, `AI_HANDOFF.md`, `CHANGELOG.md`, `CURRENT_STATE.md`, `ROADMAP.md` | Stale/conflicting narrative, doc-only | Both sides changed independently since the merge-base, at overlapping insertion points. `git merge-tree` produces literal conflict markers on all five files (not the "auto-merges cleanly" originally reported — see §3). The narrative content should be treated as superseded by current `main` where the two tellings diverge, not reintroduced verbatim; a real (not just editorial) merge conflict must be resolved on each of these five files before the branch could land. |
| `docs/DECISIONS.md` | Branch-only, doc-only | Changed only on the branch since the merge-base (`main` doesn't touch it); auto-merges cleanly, no conflict. The branch's two 2026-08-13 entries (order-uniqueness gap; practice layer is permanently stateless) are substantive and worth preserving regardless of merge path. |
| `docs/ARCHITECTURE.md` | Not a branch change | Changed only on `main` since the merge-base; the branch never touches this file (`git diff 3543f26 origin/feat/curriculum-wave-3e-3f -- docs/ARCHITECTURE.md` is empty). Not part of the branch's classification and not part of the doc overlap set — listed here only because a prior revision of this audit miscategorized it as one. |

No file touches SEO/monetization/visual direction, dependencies, or palmistry sourcing outside the documented source tiers; nothing found outside the approved 3E/3F scope.

## 2. Source/provenance findings

**`advanced/01-minor-lines-overview.mdx` (sun/Mercury content).** Independently spot-checked the diff. Direct quotations are marked with quotation marks and attributed by name — Cheiro ("the quality that the Line of Sun denotes is what is generally called luck," "it is an excellent sign to be without this line altogether," the *Palmistry for All* (1916) death-dating passage), Benham ("the brilliant qualities," the business/artistic reading). Gettings and Fincham are paraphrased without quotation marks, consistent with `editorial-style-guide.md` §5's rule to quote only verified verbatim wording. The lesson explicitly separates historical claim from site policy on the sun-line-absence question ("We decline Cheiro's conclusion — and we do not install a replacement meaning where it stood... a gentler invention is still an invention"), matching the three-move framing (proportion/observation → historical reading → site boundary) used in prior batches. No sanitizing language claiming the tradition never made these claims. Quote *fidelity* against the original 1916/1900 editions could not be verified — no web access in this audit — flagged as an open item below.

**Simian-line move.** Confirmed clean: rename with the line-65 cleanup present, old URL preserved via a proper `noindex, follow` + canonical + Pagefind-excluded + sitemap-excluded redirect stub, `audit-schema.mjs` updated so the stub isn't misclassified. No dangling internal links to the old path.

**Self-caught order collision (already resolved on the branch).** The branch's own `DECISIONS.md` addition documents that an earlier state had both the moved simian lesson and the capstone at `order: 4` inside `advanced`, and that a full green `build` + `audit:all` + `content-audit` run did not catch it — lesson `order` uniqueness has no automated check anywhere in the pipeline. Verified current tip values are sequential and non-colliding (`01=1, 02=2, 03=3, simian-line=4, combining-what-you-see=5, 04=6`). This is a real, currently-unguarded gap in the audit tooling, independent of whether this branch merges — see open items.

> **Correction (2026-08-18, Relay PP-RELAY-013).** The "no automated check anywhere in the pipeline" claim above is wrong and should not be relied on. `scripts/audit-content.mjs` already contains a per-module duplicate-`order` guard, and it is byte-identical on this branch and on `main` (`git diff origin/feat/curriculum-wave-3e-3f main -- scripts/audit-content.mjs` is empty), so the check was present at the time this audit was written. Reproducing the exact historical pair — `advanced/simian-line.mdx` and `advanced/04-how-to-give-a-reading.mdx` both at `order: 4` — makes `npm run content-audit` exit `1` with `Duplicate order 4 in module "advanced"` naming both files. The original near-miss therefore predates the Technical Remediation Wave (PR #12) that extended `content-audit` to the lessons collection, rather than showing a gap that survived it. What this audit reproduced was most plausibly a pre-PR-#12 branch state; the reproduction was not re-run against the branch tip's own script.

**`foundations/04-active-and-passive-hand.mdx`, `lines/05-fate-line.mdx`, `mounts/08-mount-of-mars.mdx` (each +25/+26 lines).** All three are the mechanical `<Practice>`/`<Checkpoint>` pattern described above, in scope for 3F's "module checkpoints." Checkpoint answers recap material already established earlier in their own module (verified against `foundations/02`, `foundations/03`, `mounts/01`); no new claims introduced.

**`combining-what-you-see.mdx`.** Read in full. Reuses only associations already established elsewhere in the curriculum; explicitly enforces the site's "weighting is a method internal to reading a palm, not a way of accumulating evidence about a person" framing, states findings as "traditionally associated with," and closes with an explicit statement of what the reading does not address (career, relationships, health) plus "the person remains the authority." This closes the curriculum audit's stated P0 gap without installing new doctrine.

**Commit `c70f861` "Log the one legacy testing-claim..."** — the flagged phrase is `lines/04-life-line.mdx`'s existing takeaway sentence, "it has not held up under testing" (about classical lifespan-dating systems). Confirmed this sentence predates the branch and is present verbatim on current `main` (`lines/04-life-line.mdx:119`); the branch only added a `<Practice>` wrapper to that file and logged the phrasing as an open backlog item rather than fixing it. **Status: open on both `main` and the branch, unrelated to whether this branch merges — a pre-existing issue, not one the branch introduces.**

**Commit `ed97caf` "Correct synthesis framing..."** — the branch author's own pre-audit self-correction. Fixed epistemic overclaiming in an earlier draft (words like "independent evidence," "proves," "a real trait" describing converging features, corrected to "weight within the reading" language) and a factual error about Benham "addressing" the short-life-line misconception (corrected to the verified record: Benham read tasselled endings as death and cautioned only that the reading requires "proficiency and tact," not that he rejected the practice). Verified the corrected versions, not the earlier flawed draft, are what's in the diff at the branch tip.

## 3. Merge/replay feasibility

`git merge-tree $(git merge-base main origin/feat/curriculum-wave-3e-3f) main origin/feat/curriculum-wave-3e-3f` (three-arg form, git 2.43), re-run and read in full for this revision. **Correction to revision 1:** the previous claim of "zero conflict markers, all auto-mergeable" does not hold. Exactly five files carry real, unresolved conflict markers — `docs/ACTIVE_TASK.md`, `docs/AI_HANDOFF.md`, `docs/CHANGELOG.md`, `docs/CURRENT_STATE.md`, and `docs/ROADMAP.md` (the file omitted from revision 1's table). In each, both sides inserted new content at the same location since the merge-base (e.g. `ROADMAP.md`: both a `## Recently completed approved work` entry and a `## Long-term directions` paragraph collide line-for-line), so `git merge-tree` emits literal `<<<<<<< .our` / `=======` / `>>>>>>> .their` blocks for all five — this was already true against `main` at the original audit's snapshot (`0abbf75`), so it is a revision-1 verification miss, not new drift from `main` moving forward since.

Every non-doc file remains conflict-free: no source, component, or lesson file has textual overlap between what `main` and the branch each changed. Additions (`Practice.astro`, `Checkpoint.astro`, `CheckpointItem.astro`, `combining-what-you-see.mdx`, `advanced/simian-line.mdx`, the redirect stub) and the one removal (`lines/06-simian-line.mdx`, matching the rename) carry no conflict risk. `docs/DECISIONS.md` is branch-only and auto-merges cleanly. **A merge or rebase of this branch onto current `main` would be textually clean everywhere except the five docs files above, which require manual conflict resolution** — not just editorial reconciliation of diverging narrative, but literally unresolvable by `git merge` without a human/agent picking a resolution at each collision point.

## 4. Validation

Run in a disposable `git worktree` at the branch tip (`c70f861`), removed after; the main checkout's working tree was never touched.

| Command | Result |
|---|---|
| `npm ci` | Pass |
| `npm run build` | Pass — 98 pages, both the redirect stub and the real `/learn/advanced/simian-line/` present in output. Only warnings were Google Fonts metadata fetches returning `403` (proxy/network restriction in this environment, unrelated to branch content). |
| `npm run content-audit` | Pass — 53 blog posts, 25 lessons valid. Non-blocking warnings match pre-existing patterns already tolerated elsewhere in the corpus. |
| `npm run audit:all` (links, images, schema, indexability, accessibility) | Pass on every sub-check, including confirmation that the simian redirect stub's noindex/canonical/Pagefind/sitemap-exclusion behavior is correct. |

Nothing was skipped for practicality; all required verification ran cleanly.

## 5. Items requiring human/product judgment

1. **Quote fidelity** for the Cheiro/Benham quotations added to `advanced/01-minor-lines-overview.mdx` cannot be verified from the repository alone — no web/source-text access in this audit. Structurally the lesson follows the quotation-integrity rule (verified wording gets quotation marks, unverified paraphrase does not), but a spot-check against the 1916/1900 editions is warranted before treating the quotes as verified in the same sense as prior batches' Batch 2C pass.
2. **`lines/04-life-line.mdx:119`'s "it has not held up under testing"** phrasing is a pre-existing, already-logged open source-framing item on `main` today — a wording decision independent of this branch, already tracked in `docs/editorial-backlog.md`.
3. ~~**Lesson `order` uniqueness has no automated check** anywhere in `content-audit` or `audit:all` — confirmed by reproducing the branch's own near-miss. Worth deciding whether to add one; this is a tooling gap, not something this audit's scope authorizes fixing.~~ **Withdrawn 2026-08-18 (Relay PP-RELAY-013): not a real open item.** `scripts/audit-content.mjs` already enforces per-module `order` uniqueness, identically on this branch and on `main`, and `ci.yml` runs `content-audit` on every pull request to `main`. See the correction note in §2. No tooling decision is needed.
4. **Reconciling the five stale `docs/*.md` files** (`ACTIVE_TASK.md`, `AI_HANDOFF.md`, `CHANGELOG.md`, `CURRENT_STATE.md`, `ROADMAP.md`) with current `main`'s Relay-pilot narrative is an editorial decision, not a merge-mechanics one — though per §3 it is now also a required Git conflict resolution, not an optional cleanup.
5. **Curriculum sequencing** — whether "Sun/Mercury → Relationship lines → Girdle of Venus → Simian → Combining What You See → How to Give a Reading" is the right pedagogical order for the `advanced` module (as opposed to merely internally consistent, which it is) is a product/editorial call this audit does not make.

## Recommended bounded next step

The branch's curriculum/runtime content — every file outside the five overlapping `docs/*.md` files — is textually mergeable with no conflicts and validates cleanly, and stays inside the approved 3E/3F scope with no unrelated drift, no new source tiers, and two self-caught corrections already applied by the branch author. The five overlapping doc files require actual conflict resolution, not just a mechanical merge (§3). The bounded next step is a **source-verification pass** on the new Cheiro/Benham quotations in `advanced/01-minor-lines-overview.mdx` (item 1 above), followed by a **doc reconciliation pass** that resolves the five conflicting `docs/*.md` files against current `main`'s narrative before any merge — both narrowly scoped, neither requiring new curriculum decisions. Only after those should shipping 3E/3F as a reviewed PR be considered; this audit does not authorize that merge.
