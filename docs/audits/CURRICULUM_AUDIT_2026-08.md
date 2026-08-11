# Palmistry Path — Curriculum and Learning-Path Audit (August 2026)

**Batch:** Remediation Batch 3A
**Date:** 2026-08-11
**Revised:** 2026-08-11, second pass, after independent review
**Branch:** `audit/curriculum-learning-path-3a`
**Status:** **AUDIT ONLY. NO IMPLEMENTATION HAS BEGUN.** Every recommendation
here requires explicit user approval before any lesson, module, route, or
component is changed. No production content was modified by this batch.

**Scope:** the 22 lessons in `src/content/lessons/`, the module configuration in
`src/consts.ts`, the three `/learn` route templates, and the 53-article blog
library insofar as it bears on curriculum gaps.

**Method:** full read of all 22 lesson files, full read of the three `/learn`
templates and `src/content.config.ts`, plus corpus greps for terminology,
markings vocabulary, mount counts, and cross-module dependency direction.
Findings from `SITE_AUDIT_2026-08.md` §5 were treated as hypotheses and
re-verified; where this audit disagrees, it says so.

> ### What the second pass changed
>
> Independent review challenged this audit's central structural recommendation,
> and the challenge was correct. The first pass argued that because the *reading
> procedure* examines mounts before lines, the curriculum must *teach* the
> Mounts module before the Lines module. That inference does not hold, and
> measurement of the actual dependency direction (§7) shows it points the other
> way.
>
> **The existing Lines-before-Mounts module order is correct and is no longer
> proposed for change.** The first pass's P0-1 is retracted. The six-module
> restructure it proposed is withdrawn in favour of the existing four modules
> with corrected titles.
>
> A lean-curriculum test (§8) and an independent competency test (§9) also
> reduced the proposed new lessons from eleven to **three** in the core path.
> The target is now **25 core lessons**, not 33.
>
> One new **P0** was added: a live source-integrity defect in the simian-line
> lesson (§6).

---

## 1. Executive summary

The curriculum is well written, well sourced, and pedagogically serious. Its
prose corrects myths, names disagreements between traditions instead of
flattening them, and refuses predictive framing. That quality is not in question.

After two passes, the structural verdict is narrower and more favourable than
the first pass concluded. **The module architecture is sound.** The order —
Foundations, Lines, Mounts, then minor lines and synthesis — is the right
teaching order, and the evidence for that is in the lessons themselves. What is
wrong is smaller, more specific, and much cheaper to fix than a restructure.

Four things genuinely block a beginner:

1. **Line-quality vocabulary is used everywhere and taught nowhere.** "Chained"
   appears in 9 lesson files, "breaks" in 5, "branches" in 7, "forks" in 4,
   "island" twice — once inside a Benham quotation the learner cannot parse, once
   in the capstone's weighting rule. No lesson defines these as a class. Four
   separate lessons re-derive "deep / faint / chained" independently.

2. **A live source-integrity defect.** `lines/06-simian-line.mdx:84` still
   asserts that *ekaagra* is Hasta Samudrika Shastra doctrine — framing that
   Batch 2B specifically corrected in the twin article, which now states the term
   belongs to yogic literature and its application to the crease is a modern
   cross-tradition reading. The lesson also states 1–3% twice and 1–4% in its
   takeaway. This outranks every structural preference in this document.

3. **The thumb and the fingers are absent.** `phalan` → 0 hits across the corpus;
   `nail` → 1. The capstone's first reading layer names finger proportions.

4. **Synthesis is deferred for 21 lessons and then delivered all at once.** Every
   module tells the learner "you are not yet putting this together"
   (`lines/01:94`, `mounts/01:100`, `advanced/01:77`), and no worked example of a
   complete reading exists anywhere in the course.

Three hypotheses carried into this audit did **not** survive and are retired:

- *"The mounts curriculum is mere memorisation."* It is not. The mount lessons
  teach relative assessment, neighbour comparison, and displacement blending more
  consistently than any other module.
- *"Mounts are invoked before mount anatomy is established."* `foundations/02:65`
  names and locates every mount region before the Lines module runs. The Lines
  module needs mount *location*, which it has; not mount *assessment*, which it
  does not need yet.
- *"The module order is wrong."* Measured dependency runs the other way (§7).

**Headline judgment:** a beginner who completes all 22 lessons in the current
order acquires the concepts in a defensible sequence, but cannot reliably perform
the reading the final lesson asks for — because they were never taught the
vocabulary of line quality, never taught the thumb or fingers, and never once
shown a complete reading performed.

**The fix is three new lessons, ten revisions, one move, and a labelling pass —
not a restructure.**

---

## 2. Current curriculum map

22 lessons, 4 modules, ~44,000 words. All frontmatter verified against source.

| # | Module | Lesson | Dur | Difficulty |
|---|---|---|---|---|
| 1 | Foundations | What Palmistry Is (and Isn't) | 6 | beginner |
| 2 | Foundations | How to Read a Palm | 8 | beginner |
| 3 | Foundations | Hand Shapes | 8 | beginner |
| 4 | Foundations | Your Active and Passive Hand | 7 | beginner |
| 5 | Lines | The Major Lines: An Overview | 7 | beginner |
| 6 | Lines | The Heart Line | 10 | beginner |
| 7 | Lines | The Head Line | 10 | beginner |
| 8 | Lines | The Life Line | 10 | beginner |
| 9 | Lines | The Fate Line | 9 | beginner |
| 10 | Lines | The Simian Line | 8 | beginner |
| 11 | Mounts | The Mounts: An Overview | 8 | beginner |
| 12–18 | Mounts | Venus, Jupiter, Saturn, Apollo, Mercury, Luna, Mars | 8–9 | beginner |
| 19 | Advanced | The Minor Lines: An Overview | 7 | intermediate |
| 20 | Advanced | The Marriage and Relationship Lines | 9 | intermediate |
| 21 | Advanced | The Girdle of Venus | 8 | intermediate |
| 22 | Advanced | How to Give a Reading | 12 | intermediate |

**Module configuration** (`src/consts.ts:28-57`) declares difficulty labels
Beginner / Beginner–Intermediate / Intermediate / Advanced. **No lesson carries
`difficulty: advanced`.** Twenty-two lessons are beginner (18) or intermediate (4).

**Schema** (`src/content.config.ts:20-36`): required `title`, `description`,
`module`, `moduleTitle`, `order`, `pubDate`, `difficulty`, `duration`; optional
`prerequisites`, `relatedArticle`, `heroImage`.

**What the routes render:** module cards at `/learn`; lesson lists with difficulty
and duration at `/learn/[module]`; breadcrumb, "Lesson N of M", `LessonPath`
outline, `LessonFooter` prev/next, and a conditional `relatedArticle` link at
`/learn/[module]/[lesson]`.

**`prerequisites` is never rendered anywhere,** and its values are uninformative:
all 21 non-first lessons declare exactly one prerequisite, always the immediately
preceding lesson. The field duplicates `order` and nothing more.

---

## 3. What currently works well

Load-bearing strengths. Remediation must not damage these.

1. **`foundations/02-how-to-read-a-palm.mdx` is an unusually good method lesson.**
   It establishes a full observation sequence, pre-seeds mount and line
   vocabulary, and forbids interpretation until the whole hand is seen
   (`:84`, `:93-101`).
2. **Observation-before-interpretation discipline is real and consistent.**
3. **The mount lessons teach comparison, not lookup.** `mounts/01:30` fixes
   relative assessment as the rule; `mounts/03:36` sizes Jupiter against Saturn;
   `mounts/06:85-95` walks three complete upper-palm configurations.
4. **Myth correction is built in.** `lines/04:22` dismantles the lifespan myth;
   `lines/05:20` opens with "Absence is normal."
5. **The capstone's ethics section is excellent.** `advanced/04:68-80` draws the
   observation/prediction line precisely and forbids diagnosis. Preserve verbatim.
6. **Cross-tradition handling is honest** — the heart-line Saturn divergence
   (`lines/02:72`) is left unresolved rather than reconciled.
7. **Every lesson already ends with a hands-on prompt.** The practice layer
   exists; it is unlabelled, not missing.
8. **The module order is correct** (§7). This is a strength, not a defect.

---

## 4. Learner-blocking problems

### 4.1 Line quality and markings are used across the corpus and taught nowhere (P0)

| Term | Files | Notes |
|---|---|---|
| chained | 9 | heart, head, life, fate, simian, Venus, girdle, relationship, capstone |
| breaks | 5 | overview, head, life, fate, Mercury |
| branches | 7 | including two Foundations lessons |
| forks | 4 | heart, head, overview, relationship |
| crosses | 3 | plus a Cheiro cross quotation at `mounts/06:61` |
| island | 2 | `lines/04:26` (inside a Benham quotation), `advanced/04:40` |
| tasselled | 1 | `lines/04:26`, same quotation |
| sister line | 1 | `lines/04:78-82`, defined in place |
| grille / triangle / star / quadrangle | 0 | never used |

Each major-line lesson re-teaches "deep / faint / chained" locally
(`lines/02:42`, `03:52`, `04:52`, `05:62`) in near-identical language. The concept
is taught four times, partially, and never as a transferable class.

The clearest failure: at `lines/04:26` the learner reads that Benham "reads
islands as periods of delicacy and breaks as illness or accident" — a quotation
containing two undefined technical terms — and at `advanced/04:40` is asked to
weigh "a well-formed, island-free head line."
`blog/beginner/islands-on-palm-lines.md` defines it thoroughly; no lesson links
to it.

*Correction to site audit §5.9,* which reported markings "never taught" on the
basis of one grep hit. The vocabulary is used pervasively across nine files with
no systematic instruction anywhere.

### 4.2 The simian-line lesson carries stale pre-Batch-2B source framing (P0)

Confirmed by direct comparison. This is a live content-integrity defect, not a
structural preference, and it is the only P0 here that concerns something the
site currently states incorrectly.

| | Current text |
|---|---|
| `lines/06-simian-line.mdx:84` | "In Hasta Samudrika Shastra, this configuration carries the term *ekaagra* — single-pointed, undivided attention." |
| `blog/beginner/simian-line.md:43` (post-Batch-2B) | The term "belongs to yogic and philosophical literature rather than to the classical hand-reading texts, and its application to the single crease appears to be a modern cross-tradition reading rather than a doctrine that can be traced to *Hasta Samudrika Shastra* itself." |

The article explicitly warns that presenting it as ancient doctrine "would be
overstating what the sources support" — which is what the lesson does. Batch 2B
corrected the article and did not carry the correction into the lesson.

Two further internal inconsistencies in the same file:

- **Prevalence:** `:24` and `:34` state "one to three percent"; the takeaway at
  `:106` states "one to four percent."
- **Transliteration:** the lesson uses *ekaagra*; the article uses *ekāgratā*.

**Not fixed in this branch, by instruction.** Assigned to **Batch 3E**, which
moves and revises this lesson. If the user prefers, it can be pulled forward as a
standalone micro-batch ahead of everything else — it is a small, self-contained
edit to one file, and it is the only item in this audit where the site currently
says something its own sourcing policy contradicts.

**This does not reopen Indian sourcing.** The correct framing already exists in
the article; the fix is to carry it across. The target curriculum below does not
describe the simian lesson as source-settled.

### 4.3 The thumb and the fingers are absent (P0)

Corpus greps: `phalan` → **0**; `nail` → **1**; `finger proportion` → **1**;
`thumb` → 81, essentially all positional ("inside the life line", "at the thumb's
base") rather than instructional.

`foundations/02:42-48` teaches the palm-to-finger ratio purely as an input to
hand-shape classification and defers: "You'll study hand shapes in depth in the
next lesson." The fingers themselves are never studied. Full blog articles exist
(`thumb-meaning-palmistry.md`, `finger-shapes-palmistry.md`) and no lesson's
`relatedArticle` points at either.

Independent competency justification is in §9 — this is core on its own merits,
not merely because the capstone mentions it.

### 4.4 Synthesis is deferred for 21 lessons, then delivered at once (P0)

`advanced/04` is ~4,100 words carrying six jobs: the five-layer sequence, the
weighting rule, contradiction handling, language discipline, the ethical posture,
and the limits of the system. It contains illustrative feature *pairings*
(`:42-46`, `:48-56`) but **no end-to-end reading of a single described hand.**

Meanwhile every prior module defers: `lines/01:94`, `mounts/01:100`,
`advanced/01:77` all say the learner is not yet combining anything. They defer for
21 lessons and then meet all of it in the final 12 minutes.

### 4.5 The Advanced module names four minor lines and teaches two (P1 — demoted)

`advanced/01:38-66` introduces four minor lines under `###` subheadings — sun
line, mercury line, relationship lines, girdle of Venus. Lessons 02 and 03 teach
the last two. The sun line and Mercury line are also introduced *by name and
location* in the Mounts module (`mounts/05:26`, `mounts/06:28`) and used as a
weighting example in the capstone (`advanced/04:40`).

**Demoted from P0 to P1 in the second pass.** §9 finds that neither is required
for a minimum competent reading — both are *minor* lines, which the course's own
rule says "qualify major lines; never override them." The defect is that the
course introduces them twice and teaches them zero times. That is an integrity
problem with a cheap remedy: revise `advanced/01` so its four subsections
actually teach rather than name. No new lessons.

---

## 5. Sequencing and prerequisite findings

| # | Concept encountered before adequate teaching | Where | Where taught | Sev |
|---|---|---|---|---|
| 5.1 | "Chained" as a line-quality class | `lines/02:42` | Never — re-derived locally 4× | P0 |
| 5.2 | "Island", "tasselled" | `lines/04:26`, in a Benham quotation | Never | P0 |
| 5.3 | "Island-free" as a weighting criterion | `advanced/04:40`, final lesson | Never | P0 |
| 5.4 | Finger proportions as a reading layer | `advanced/04:25-33` | Never | P0 |
| 5.5 | The sun line and the Mercury line | `mounts/05:26`, `06:28`, `advanced/01:43-54`, `04:40` | Named, never taught | P1 |
| 5.6 | Skin texture and flexibility as a reading layer | `advanced/04:25-33` | `foundations/02:51-59` only — ~7 lines | P1 |
| 5.7 | "Cross" as a marking, in a Cheiro quotation on dishonesty | `mounts/06:61` | Never | P1 |
| 5.8 | "Percussion edge" | `mounts/01:16`, `lines/01:25` | Defined inline at `lines/02:24` — after first use | P2 |
| 5.9 | Active/passive framework | `foundations/02:25` | `foundations/04` | **Not a defect** — defined inline at first use |
| 5.10 | Mount *location* for line endpoints | `lines/02:68-72` etc. | `foundations/02:65` — **before** the Lines module | **Not a defect** — see §7 |

**Retired from the first pass:** the claim that mount *assessment* is needed to
read line endpoints. §7 shows the Lines module needs mount geography only, and
Foundations 02 supplies it.

**On `prerequisites` (P1):** the field duplicates `order`, cannot express genuine
cross-module dependencies, and is rendered by none of the three templates. Either
render it meaningfully or remove it.

---

## 6. Mount count — the model to publish

The site currently states the count three different ways, and the fix is **not**
to replace every "eight" with "seven." Both numbers are defensible; neither is
currently defined.

**Recommended model:**

- **Seven planetary mounts** — the named types: Jupiter, Saturn, Apollo (Sun),
  Mercury, Venus, Luna (Moon), and Mars.
- **Eight mount regions** — the areas a learner physically locates and presses.
  Six mounts occupy one region each; **Mars occupies two**: Lower (Inner) Mars
  inside the life line, and Upper (Outer) Mars on the percussion edge.
- **The Plain of Mars** is a central hollow between the two Mars regions. It is
  **not** a raised mount and **not** an additional planetary mount. It is a
  region, assessed differently from the mounts around it.

**The public formula:** *"Seven mounts across eight regions — because Mars
occupies two."*

**Usage rule:**

| Context | Say |
|---|---|
| Naming the planetary set | "the seven mounts" |
| Instructing physical assessment | "eight mount regions" / "eight areas to assess" |
| First mention in any surface | Introduce Mars's dual position immediately |
| Never | "eight mounts", unqualified |

This resolves the contradiction without making either existing surface simply
wrong, and it pre-empts the learner who reads "seven mounts" and then counts
eight raised areas on their own palm — which is precisely what the current copy
invites.

**Surfaces to align** (9 locations):
- Says seven: `lessons/mounts/01:3,38,108`; `blog/beginner/mounts-overview.md:99`;
  `pages/blog/index.astro:43`
- Says eight: `consts.ts:47`; `pages/guide.astro:452`;
  `pages/guide/thank-you.astro:291`; `pages/premium-guide.astro:13,352`;
  `private/print/complete-reference.astro:321,554,785`;
  `blog/beginner/printable-palmistry-worksheets.md:69`
- Third framing: `foundations/02:65` (Plain of Mars plus upper/lower regions)

`mounts/01` should carry the reconciling sentence; `mounts/08:14` already states
Mars's dual position correctly and needs no change.

---

## 7. Teaching order versus reading order — the decisive analysis

The first pass treated this as axiomatic: because `foundations/02` and
`advanced/04:25-33` both instruct *mounts before lines* during a reading, the
curriculum must teach mounts before lines. **That inference is wrong.** A
procedure's execution order and the order in which its component skills are best
acquired are different things, and here they genuinely differ.

### The measured dependency runs opposite to the first pass's assumption

| Direction | References | Dedicated `##` sections | Kind of dependency |
|---|---|---|---|
| Lines module → mounts | 22 (`04`:8, `05`:7, `02`:3, `01`:2, `03`:2, `06`:0) | **0** | *Location only* — "under the mount of Jupiter", "sloping toward Luna" |
| Mounts module → lines | 54 (`02`:12, `06`:10, `07`:8, `05`:7, `03`:5, `01`:4, `04`:4, `08`:4) | **4** | *Interpretation* — whole sections reading line–mount relationships |

The four sections are `mounts/02:74` "Venus alongside the heart line",
`mounts/05:24` "The sun line", `mounts/06:26` "The Mercury line", and
`mounts/07:47` "The head line and Luna."

Teaching the Mounts module first would require a learner to work through "Venus
alongside the heart line" and "The head line and Luna" before any line has been
taught. The current order requires only that they know where Jupiter sits — which
`foundations/02:65` already tells them, naming and locating every mount region
before the Lines module begins.

**Does the learner need mount *development* skill to read line endpoints?** No.
`lines/02:68-72` asks only *where* the line terminates relative to a named
territory. The one place development matters is the forward-looking synthesis
note at `lines/02:98` ("reads differently on a hand with a well-developed mount of
Venus"), which is explicitly deferred, not an instruction to act on now.

### The three architectures compared

| Criterion | A. Mounts-first | B. Lines-first (current) | C. Hybrid map-first |
|---|---|---|---|
| Prerequisite integrity | **Poor** — 54 line refs and 4 line sections arrive untaught | Good — 22 refs, location only, supplied by `foundations/02:65` | **Best** — same as B, with geography made explicit |
| Beginner cognitive load | High — relative, calibrated tactile judgment first | Moderate | Moderate |
| Visual/tactile difficulty | **Hardest first** — mount development is a comparative tactile judgment needing calibration across many hands | Easier first — lines are visually discriminable | Easier first |
| Motivation / early payoff | **Poor** — ~72 min of pad-pressing before the feature learners came for | Good | Good |
| Circular dependency | Made worse | Present but one-directional and shallow | Resolved by an explicit geography section |
| Revision cost to existing lessons | **High** — mount lessons would need line references stripped or forward-referenced | **Zero** | Low — one revision to `foundations/02` |
| Honesty about reading order | Implicit | Currently unstated | **Stated explicitly** |

### Conclusion

**Adopt Architecture C, which preserves the existing module order.**

Concretely, C = B plus two cheap revisions:

1. **Promote the mount geography in `foundations/02:65`** from a buried paragraph
   inside Step four to a labelled section with a palm diagram — guaranteeing the
   vocabulary the Lines module relies on.
2. **State the distinction explicitly**, in `foundations/02` and again in the
   capstone: *you learn these skills in one order and perform them in another,
   and here is why.* Lines are learned first because they are visible and
   discriminable; mounts are read first in an actual reading because they are the
   terrain the lines sit on.

That second point converts the first pass's "the course contradicts itself" into
something better: a course that teaches the difference between learning a skill
and executing a procedure. Most instructional material never makes that explicit.

**The final reading order does not change.** It remains impression → hand form
and texture → mounts → major lines → minor lines → close, exactly as
`foundations/02` and `advanced/04:25-33` already state.

---

## 8. The lean-curriculum test

Applied to every new lesson the first pass proposed. The question in each case:
*does this need a standalone lesson, or can the competency be taught cleanly
inside a neighbouring lesson or checkpoint?*

| First-pass proposal | Verdict | Where the competency goes instead |
|---|---|---|
| Texture and Flexibility | **Fold** | Into `foundations/03-hand-shapes`, retitled **Hand Shape, Texture, and Flexibility**. Both are whole-hand structural qualities assessed in the same pass; ~7 lines of existing material does not carry a lesson |
| The Thumb / The Fingers (2 lessons) | **Merge to 1** | One lesson, **The Thumb and the Fingers**. The core competency — judge thumb length, set, and flexibility; judge finger length and set relative to the palm — is bounded and fits one lesson at ~14KB, within the range of existing lessons (`mounts/06` is 18.2KB). Phalange zones, knotted vs smooth, and planetary finger associations are enrichment → the two existing blog articles |
| Reading the Mount Landscape | **Fold** | Into a revised `mounts/01` closing section plus a module checkpoint. `mounts/06:85-95` already models the move for the upper palm; generalising it is a revision, not a lesson |
| Common Mistakes | **Fold** | Into the Module 4 checkpoint, supported by the existing `blog/beginner/palmistry-beginner-mistakes.md` |
| Combining Features + Worked Reading One (2 lessons) | **Merge to 1** | One lesson, **Combining What You See**: the weighting rule and contradiction handling lifted from `advanced/04:36-56`, followed immediately by one worked reading. Principle then demonstration, in one place, is better than two lessons |
| Worked Reading Two | **Defer** | LATER. One excellent worked reading proves the model first |
| The Nails | **Defer** | Blog-primary. Not required by the beginner reading sequence, and the highest medical-drift risk on the site |
| Line Quality and Markings | **Keep standalone** | The one unambiguous case. It is the transferable vocabulary that four lessons currently quadruplicate, and folding it into any single line lesson would tie it to that line |
| The Sun Line / The Mercury Line | **Fold** | Into a revised `advanced/01-minor-lines-overview`, whose four subsections should teach rather than name. See §9 |

**Result: eleven proposed new lessons reduce to three.**

---

## 9. Independent competency test — what is actually P0

The first pass's reasoning was partly circular: *the capstone mentions X,
therefore X must be a lesson.* The alternative remedy — *the capstone is
over-scoped, so narrow it* — was never tested. Applying it independently:

**Question asked of each:** *is this required for the minimum competent basic
reading Palmistry Path promises — judged by learner competency, not by whether
classical authors cover it or the capstone names it?*

| Topic | Verdict | Independent reasoning |
|---|---|---|
| **Thumb** | **CORE** | Independent of the capstone: it is the most physically prominent feature of the hand, it bounds the Mount of Venus (already core), and a reading that says nothing about it has a hole the person being read will notice. Not core merely because Benham weights it |
| **Individual fingers** | **CORE (as competency, not as its own lesson)** | The palm-to-finger ratio is *already* taught as the basis of hand shape; the incremental competency is finger set and relative length. Modest on its own, but cheap alongside the thumb, and four of the seven mounts are located by their fingers. Folded into the Thumb and Fingers lesson |
| **Finger proportions** | **CORE** | Same lesson. Also the one capstone-layer-1 item with no other home |
| **Phalanges** | OPTIONAL | Belongs inside the fingers material at most; depth to `finger-shapes-palmistry.md` |
| **Sun Line** | **NOT core — P1** | It is a *minor* line by the course's own rule ("minor lines qualify major lines; never override them", `advanced/01`), and the capstone's own weighting rule says minor features do not carry primary weight. A competent basic reading is possible without it. The defect is that the course introduces it twice and teaches it zero times — integrity, not competency. **Remedy: revise `advanced/01` to teach it, not a new lesson** |
| **Mercury Line** | **NOT core — P1** | Same reasoning. Additionally carries the sharpest medical-drift risk of the four minor lines, which is an argument for teaching it *carefully in one place* rather than expanding it |
| **Nails** | OPTIONAL | Real in the Indian tradition, not required by the reading sequence, highest medical-claim risk. Blog-primary |

**Is the capstone over-scoped?** Partly, and it is worth saying plainly. Its layer
1 lists "size, shape, finger proportions, skin quality, flesh elasticity." Once
texture and flexibility are folded into the hand-shape lesson and the thumb and
fingers have a lesson, layer 1 is fully supported and no narrowing is needed. But
its layer-4 use of "a short sun line" as a weighting example
(`advanced/04:40`) should either follow a revised `advanced/01` that teaches the
sun line, or be swapped for an example drawn from taught material. Narrowing was
a live alternative here and remains the fallback if D2 is declined.

### Revised P0 set

| # | P0 | Change from first pass |
|---|---|---|
| P0-1 | Line quality and markings taught nowhere while used across 9 files | Unchanged, now ranked first |
| P0-2 | Simian lesson carries stale pre-Batch-2B *ekaagra* framing and a 1–3% / 1–4% internal contradiction | **New** |
| P0-3 | Thumb and fingers absent | Retained, reasoning made independent; scope reduced from 2 lessons to 1 |
| P0-4 | No worked example of a complete reading; synthesis deferred 21 lessons | Promoted from P1 |

**Retired from P0:**

- *Module reorder* — **retracted entirely** (§7).
- *Sun line and Mercury line as new lessons* — demoted to P1, remedy is revision.
- *"island-free" undefined reference* — resolved automatically by P0-1.

---

## 10. Foundations, Lines, Mounts, and Advanced — module notes

**Foundations.** The strongest module. `foundations/02` is the method spine and
should be treated as canonical in any sequencing dispute. Two gaps: texture and
flexibility get seven lines and never return; the mount geography that the Lines
module depends on is buried inside Step four rather than labelled.

**Lines.** The four major-line lessons are the most complete teaching artefacts on
the site. Order (heart → head → life → fate) is sound and should not change: heart
and head are the most visible, the head line's origin depends on the life line's,
and the fate line is the one that may be absent. The module's one real defect is
that it re-derives line quality four times instead of teaching it once, first.

The **simian line** is a configuration of the heart and head lines, not a fifth
major line — a 1–3% variant currently occupying the final slot of the core module,
which is exactly where the line-quality lesson belongs. It moves to Module 4. It
requires the §4.2 source correction regardless of whether it moves.

**Mounts.** *Correction to site audit §5.11,* which called this module
mount-by-mount lookup. It is the most methodologically mature material on the
site (`mounts/01:30`, `:86-88`; `mounts/03:36`; `mounts/06:85-95`). Real defects:
template sameness across lessons 03–06, the mount-count model, and no closing
consolidation — the last of which is a revision to `mounts/01`, not a lesson.
**Compressing 03–06 is not recommended**: the content was source-verified by Batch
2C on 2026-08-11 and the sameness is a P2 experience issue.

**Advanced — is it advanced? No.** All four lessons carry
`difficulty: intermediate` while `consts.ts:55` labels the module "Advanced." More
substantively it is three different things under one label: an orientation that
names four minor lines and teaches two; two standard feature lessons no harder
than the heart line; and a capstone doing an enormous amount of work alone. The
module needs an honest title and a redistributed capstone, not new material.

**What genuinely advanced study should mean later:** harder judgment — reconciling
contradictory features, weighing tradition against tradition, recognising where
the system runs out, handling a real person's expectations.
`advanced/04:82-92` already gestures at this. It is a LATER concern.

---

## 11. Practice and application

*Correction to site audit §5.6,* which stated the curriculum has no practice
layer. It has one; it is invisible.

**Exists:** named exercise sections in all 4 Foundations lessons plus
`mounts/01`, `lines/01`, `advanced/01`; unlabelled trailing prompts in every other
lesson; compare-your-hands work at `foundations/02:107` and `foundations/04:50-68`;
genuine cumulative practice at `mounts/05:75-81` and `mounts/06:84-95`.

**Missing:** any worked reading (P0, §4.4); module checkpoints (P1); cumulative
practice across modules rather than within one (P1); a recognisable, consistently
styled practice element (P1 — the cheapest high-value fix in this audit).

### Recommended practice architecture

Minimal, appropriate to a static Astro site. **No accounts, no progress tracking,
no server state, no PDF pipeline.**

1. **A `<Practice>` MDX component** wrapping the end-of-lesson prompts that
   already exist in all 22 lessons. Purely presentational. Makes the practice
   layer visible without writing any new curriculum content — the highest
   benefit-to-cost ratio in this document.
2. **A `<Checkpoint>` component** at each module's end: three to five self-check
   prompts with `<details>` disclosure answers. No JavaScript, unscored,
   unstored. This is also where the folded competencies from §8 live — mount
   landscape scanning, common mistakes.
3. **One worked reading** inside *Combining What You See*, using a **described**
   hand — no photography, no generated imagery, and full control over which
   features are in play.
4. **Per-module observation pages** styled for print with CSS only.
   `docs/worksheet-pack-spec.md` already specifies the content.

Explicitly **not** recommended: progress tracking, accounts, quiz scoring,
streaks, localStorage state, or anything requiring a backend.

---

## 12. Blog versus curriculum role

53 articles, all under `src/content/blog/beginner/`. The `advanced/` and
`intermediate/` directories are empty.

**Proposed rule:**

> **A lesson teaches the *variable*. A blog article covers a specific *value* of
> that variable.**

Lessons teach that a line has depth, clarity, breaks, forks, and islands. The blog
answers "what does a *broken* life line mean", "what does a *forked* head line
mean" — the long-tail questions people search. This is already ~70% true
structurally, and it is compatible with either answer to site audit §5.8's
larger "curriculum or article library" question, which it does not pre-empt.

**Where the relationship is broken:**

| Problem | Evidence | Action |
|---|---|---|
| Foundational instruction stranded in the blog | `thumb-meaning-palmistry.md`, `finger-shapes-palmistry.md`, `islands-on-palm-lines.md`, `palmistry-beginner-mistakes.md` | Promote the core competency into lessons; articles remain the depth layer |
| Lessons never link outward | **0** `/blog/` links in any lesson body; only the frontmatter `relatedArticle` | Add a "go deeper" block per lesson |
| Variation articles orphaned | `broken-life-line-meaning`, `forked-head-line-meaning`, `chained-heart-line-meaning`, and 10 more | These become the "go deeper" targets |
| Terminology split | Lessons use active/passive (24 + 16 hits); SEO variant articles use dominant/non-dominant exclusively | One cross-walk sentence in `foundations/04` |

**Not recommended:** converting the blog into lessons, or building parallel lesson
coverage for every article.

---

## 13. Recommended target curriculum

**Four modules. 25 core lessons.** The existing module slugs and every existing
lesson URL are preserved except the simian move — so no redirects beyond that one
file.

### Module 1 — Foundations (5 lessons)

| # | Lesson | Disposition |
|---|---|---|
| 1 | What Palmistry Is (and Isn't) | KEEP |
| 2 | How to Read a Palm | REVISE — label the mount-geography section; state acquisition-vs-execution order |
| 3 | Hand Shape, Texture, and Flexibility | REVISE — absorb texture/flexibility, retitle |
| 4 | The Thumb and the Fingers | **ADD** |
| 5 | Your Active and Passive Hand | KEEP — renumbered 4→5 |

### Module 2 — The Lines (6 lessons)

| # | Lesson | Disposition |
|---|---|---|
| 6 | Line Quality and Markings | **ADD** — placed first |
| 7 | The Major Lines: An Overview | REVISE |
| 8 | The Heart Line | REVISE |
| 9 | The Head Line | REVISE |
| 10 | The Life Line | REVISE |
| 11 | The Fate Line | REVISE |

*Revisions to 8–11 are subtractive: remove the locally re-derived depth/clarity
teaching now handled by lesson 6, and add "go deeper" links. Not rewrites.*

### Module 3 — The Mounts (8 lessons)

| # | Lesson | Disposition |
|---|---|---|
| 12 | The Mounts: An Overview | REVISE — mount model (§6); landscape-scanning close |
| 13–19 | Venus, Jupiter, Saturn, Apollo, Mercury, Luna, Mars | KEEP ×7 |

### Module 4 — Minor Lines and Synthesis (6 lessons)

*Module retitled from "Advanced Interpretation"; slug `advanced` unchanged;
difficulty corrected to Intermediate.*

| # | Lesson | Disposition |
|---|---|---|
| 20 | The Minor Lines | REVISE — subsections must **teach** the sun and Mercury lines, not name them |
| 21 | The Marriage and Relationship Lines | KEEP |
| 22 | The Girdle of Venus | KEEP |
| 23 | The Simian Line | **MOVE** from Lines + **REVISE** (§4.2 source correction — mandatory) |
| 24 | Combining What You See | **ADD** — weighting, contradiction, and one worked reading |
| 25 | How to Give a Reading | REVISE — sheds weighting/contradiction to lesson 24; ethics section preserved verbatim and foregrounded |

### Counts

**Module totals:** 5 + 6 + 8 + 6 = **25** ✓

**Existing 22 lessons, each counted exactly once:**

| Disposition | Count | Lessons |
|---|---|---|
| KEEP | **11** | `foundations/01`, `foundations/04`, `mounts/02`–`08` (7), `advanced/02`, `advanced/03` |
| MOVE (changes module) | **1** | `lines/06-simian-line` → Module 4 (also revised) |
| REVISE | **10** | `foundations/02`, `foundations/03`, `lines/01`–`05` (5), `mounts/01`, `advanced/01`, `advanced/04` |
| MERGE | **0** | — (the first pass's merge of `advanced/01` is retracted; §9) |
| | **22** ✓ | |

**ADD (core): 3** — The Thumb and the Fingers; Line Quality and Markings;
Combining What You See.

**Core target: 22 + 3 = 25 lessons.** ✓ Matches module totals.

### Optional / later expansion — NOT in the 25

| Item | Priority | Condition |
|---|---|---|
| The Nails | LATER | Only if the user wants completeness (D5) |
| Reading the Mount Landscape (standalone) | LATER | Only if the `mounts/01` revision + checkpoint prove insufficient |
| Worked Reading: Second Hand | P2 | After the first worked reading proves the model |
| Common Mistakes and Corrections (standalone) | P2 | Only if the Module 4 checkpoint proves insufficient |

**Optional total: 4 lessons.** Maximum if every option is later adopted: **29**.
A genuinely advanced fifth module is a separate future question and is not
counted here.

---

## 14. Module outcomes

Stated as abilities, not topics. One per module in the recommended structure.

**Module 1 — Foundations.** By the end, the learner can explain what palmistry
does and does not claim, work through a complete six-step observation without
interpreting anything, classify a hand by elemental shape and assess its texture
and flexibility, evaluate the thumb's length, set, and flexibility and the
fingers' length and set relative to the palm, name and locate all eight mount
regions, and identify which of their hands is active and which is passive.

**Module 2 — The Lines.** By the end, the learner can name and identify the
qualities any line may carry — depth, clarity, chaining, breaks, forks, branches,
islands, sister lines — apply that vocabulary to the four major lines, read each
line's path, length, and endpoint by mount territory, and describe how one line's
quality changes what a neighbouring line suggests.

**Module 3 — The Mounts.** By the end, the learner can locate all eight mount
regions and the Plain of Mars, assess each for prominence, firmness, and
displacement, compare their relative development across a single hand, identify
which two or three dominate, and use mount balance as supporting context rather
than reading any mount in isolation.

**Module 4 — Minor Lines and Synthesis.** By the end, the learner can identify
the four minor lines and the simian and Sydney configurations, qualify a
major-line reading with minor-line evidence without letting it override, weigh
features by how much of the hand they account for, name a genuine contradiction
rather than resolving it falsely, conduct a complete reading through all five
layers in the order an actual reading uses, deliver observations in
non-predictive language, and state plainly where the system runs out.

---

## 15. P0 / P1 / P2 recommendations

### P0 — curriculum correctness / learner-blocking

| # | Recommendation | §  |
|---|---|---|
| P0-1 | Add **Line Quality and Markings** as Module 2's first lesson; make the four major-line revisions subtractive | 4.1 |
| P0-2 | **Correct the simian lesson**: carry the Batch 2B *ekāgratā* framing across from the article, and reconcile 1–3% / 1–4% | 4.2 |
| P0-3 | Add **The Thumb and the Fingers** to Foundations | 4.3, 9 |
| P0-4 | Add **Combining What You See** — weighting, contradiction, and one worked reading | 4.4 |

### P1 — substantial learning improvement

| # | Recommendation | § |
|---|---|---|
| P1-1 | Publish and apply the seven-mounts/eight-regions model across all 9 surfaces | 6 |
| P1-2 | Revise `advanced/01` so it **teaches** the sun and Mercury lines | 4.5, 9 |
| P1-3 | Fold texture and flexibility into the hand-shape lesson | 8 |
| P1-4 | Retitle Module 4; fix all module difficulty labels to match frontmatter | 10 |
| P1-5 | Fix the Lines module description, which promises Sun, Mercury, and Girdle content held elsewhere | `consts.ts:40-41` |
| P1-6 | Label the mount-geography section in `foundations/02` and state the acquisition-vs-execution distinction | 7 |
| P1-7 | Standardise practice into a `<Practice>` component across all lessons | 11 |
| P1-8 | Add module-end `<Checkpoint>` self-checks | 11 |
| P1-9 | Either render `prerequisites` meaningfully or remove it | 5 |

### P2 — polish

| # | Recommendation |
|---|---|
| P2-1 | Add "go deeper" blog links to every lesson (currently zero outbound links) |
| P2-2 | Cross-walk active/passive with dominant/non-dominant in `foundations/04` |
| P2-3 | Printable per-module observation pages (CSS print styles, no PDF pipeline) |
| P2-4 | Second worked reading; standalone Common Mistakes lesson if needed |

### LATER

- A Nails lesson (D5).
- Compressing mounts 03–06 — deferred; content is newly source-verified.
- A genuinely advanced module: contradictory hands, tradition-versus-tradition
  judgment, the limits of the system.
- Any interactive identify-the-feature exercise.

---

## 16. Recommended implementation batches

Sequenced so each is independently shippable and reversible.

**Batch 3B — Truthful labelling and the mount model.** *Config and copy only; no
new lesson prose.* Module 4 retitle, all module difficulty labels, the Lines
module description, the seven-mounts/eight-regions model applied to all 9
surfaces plus the reconciling sentence in `mounts/01`, and the `prerequisites`
decision. No editorial approval cycle required. Validation: `npm run build`,
`npm run audit:all`, `npm run content-audit`.

**Batch 3C — Line Quality and Markings.** One new lesson plus the subtractive
revisions to `lines/01`–`05`. Deliberately alone: it is the highest-leverage
change in the audit and touches six files.

**Batch 3D — The Thumb and the Fingers.** One new lesson, plus folding texture
and flexibility into the retitled hand-shape lesson. Source-heavy — Benham and
Cheiro on the thumb, d'Arpentigny on the fingers — and follows the `AGENTS.md`
article approval workflow.

**Batch 3E — Module 4 rebuild.** **Carries the P0-2 simian source correction**
(§4.2) together with the simian move; plus the `advanced/01` revision so it
teaches the sun and Mercury lines.

> **Note:** P0-2 is a live content-integrity defect and the only item where the
> site currently states something its own sourcing policy contradicts. It is a
> small, self-contained edit to one file. **If the user prefers, pull it forward
> as a standalone micro-batch ahead of 3B.**

**Batch 3F — Synthesis and practice.** *Combining What You See* (weighting,
contradiction, one worked reading), the capstone revision, the `<Practice>`
component rollout, and module `<Checkpoint>`s. `<Practice>` can ship earlier and
independently if a quick visible win is wanted.

**Batch 3G — Polish.** Blog "go deeper" link layer, terminology cross-walk,
observation pages, and any optional lessons the user elects.

**Recommended first batch: 3B** — unless the user wants P0-2 pulled forward, in
which case that micro-batch goes first. 3B needs no editorial approval, makes the
site tell the truth about itself immediately, and every later batch assumes the
labelling it establishes.

---

## 17. Decisions requiring user approval

| # | Decision | Recommendation |
|---|---|---|
| D1 | **Keep the existing four modules** with corrected titles, rather than the six-module restructure the first pass proposed? | **Yes** — §7 and §8 both point this way, and it avoids URL churn |
| D2 | **Approve 3 new core lessons** (Thumb and Fingers; Line Quality and Markings; Combining What You See), taking the curriculum from 22 to **25**? | Yes — these are the four P0s |
| D3 | **Adopt the seven-mounts / eight-regions model** and apply it across 9 surfaces, including paid-product copy? | **Yes** — §6. Defines the model rather than replacing one number with another |
| D4 | **Pull the P0-2 simian correction forward** as a micro-batch ahead of 3B? | User's call — it is small, and it is the only live source-integrity defect |
| D5 | **Nails: lesson or blog-only?** | Blog-only — not required by the reading sequence, highest medical-drift risk |
| D6 | **Compress mounts 03–06?** | **No** — newly source-verified; sameness is P2 |
| D7 | **Adopt "lesson teaches the variable, blog covers the value"?** | Yes — §12 |
| D8 | **Are `<Practice>` / `<Checkpoint>` components in scope?** They are site code, not content | Yes — cheapest learner-visible improvement available |

**Retired from the first pass's decision list:** the six-module question (folded
into D1) and the module-URL question (moot — only the simian lesson changes
module).

**Related but out of scope:** site audit §5.8's "curriculum or article library"
question. D7 is compatible with either answer.

---

## 18. Things deliberately NOT recommended

- **Reordering the modules.** Retracted in the second pass. Measured dependency
  (§7) shows the Mounts module depends on Lines far more heavily than the reverse
  — 54 references and four dedicated sections against 22 positional references
  and none. The existing order is correct.
- **The six-module restructure** proposed in the first pass. Withdrawn.
- **Rewriting the mount lessons.** Batch 2C source-verified them on 2026-08-11.
- **Converting blog articles into lessons wholesale.** Only the stranded
  *foundational* competencies are promoted.
- **Progress tracking, accounts, quiz scoring, or streaks.**
- **A PDF or worksheet-generation pipeline.** CSS print styling suffices.
- **Any new imagery.** The worked reading uses a *described* hand.
- **Building a genuinely advanced module now.**
- **Deleting any existing lesson.** All 22 have a destination; none is removed,
  and after the second pass none is merged away either.
- **Reopening Indian sourcing for the simian correction.** The correct framing
  already exists in `blog/beginner/simian-line.md:43`; the fix carries it across.
- **Touching the August audit reports, the byline decision, the
  Gettings/West/Fincham copyright question, or Batch 2B/2C source remediation.**

---

## 19. Appendix — evidence and file locations

**Sources**
- `src/content/lessons/` — 22 `.mdx` files: `foundations/` (4), `lines/` (6),
  `mounts/` (8), `advanced/` (4)
- `src/content.config.ts:20-36` — lessons schema
- `src/consts.ts:28-57` — `MODULES` configuration
- `src/pages/learn/index.astro`, `learn/[module]/index.astro`,
  `learn/[module]/[lesson].astro`
- `src/content/blog/beginner/` — 53 articles; `blog/advanced/` and
  `blog/intermediate/` are empty

**Key passages**

| Location | Establishes |
|---|---|
| `foundations/02:32-91` | The six-step observation sequence — the method spine |
| `foundations/02:65` | All mount regions named and located, before the Lines module |
| `foundations/02:51-59` | The entirety of texture and flexibility teaching |
| `advanced/04:25-33` | The capstone's five-layer reading order |
| `advanced/04:36-47` | The weighting rule; "island-free head line" at `:40` |
| `advanced/04:48-56` | Contradiction handling |
| `advanced/04:68-80` | The ethical posture — preserve verbatim |
| `lines/02:68-72` | Heart-line endpoints read by mount *territory* (location, not development) |
| `lines/02:98` | The one place mount development matters — explicitly deferred |
| `lines/04:26` | Benham quotation containing undefined "islands" and "tasselled" |
| `lines/02:42`, `03:52`, `04:52`, `05:62` | Depth/clarity re-derived four times |
| `lines/06:84` | **P0-2** — *ekaagra* asserted as Hasta Samudrika Shastra doctrine |
| `lines/06:24`, `:34` vs `:106` | **P0-2** — 1–3% twice, 1–4% in the takeaway |
| `blog/beginner/simian-line.md:43` | The corrected post-Batch-2B framing to carry across |
| `mounts/01:30`, `:86-88` | Relative-assessment method |
| `mounts/02:74`, `05:24`, `06:26`, `07:47` | Four mount-lesson sections *about lines* — §7's decisive evidence |
| `mounts/06:85-95` | Best cumulative practice on the site; model for the `mounts/01` close |
| `mounts/08:14`, `:75-76` | Mars as one mount in two zones plus the Plain |
| `advanced/01:38-66` | Four minor lines named; two taught |

**Dependency measurement** (`grep -rcioE`, 2026-08-11)
- Line-name references inside `mounts/`: `02`:12, `06`:10, `07`:8, `05`:7, `03`:5,
  `01`:4, `04`:4, `08`:4 — **54 total**, plus **4** dedicated `##` sections
- Mount-name references inside `lines/`: `04`:8, `05`:7, `02`:3, `01`:2, `03`:2,
  `06`:0 — **22 total**, **0** dedicated sections, all positional

**Corpus greps** (`src/content/lessons/`, 2026-08-11)
- `phalan` → 0 · `nail` → 1 · `finger proportion` → 1 ·
  `grille`/`triangle`/`quadrangle`/`star` (as a marking) → 0
- `island` → 2 (`lines/04:26`, `advanced/04:40`) · `tassel` → 1
- `chained` → 32 across 9 files · `breaks` → 5 files · `branches` → 7 files ·
  `forks` → 4 files
- `thumb` → 81, positional rather than instructional
- `active hand` → 24 · `passive hand` → 16 · `dominant hand` → 10 ·
  `non-dominant` → 3
- `/blog/` links in lesson bodies → 0 (frontmatter `relatedArticle` only)

**Seven versus eight mounts, all surfaces**
- Seven: `lessons/mounts/01:3,38,108`; `blog/beginner/mounts-overview.md:99`;
  `pages/blog/index.astro:43`; `blog/beginner/cheiro-palmistry-books.md:44`
- Eight: `consts.ts:47`; `pages/guide.astro:452`;
  `pages/guide/thank-you.astro:291`; `pages/premium-guide.astro:13,352`;
  `private/print/complete-reference.astro:321,554,785`;
  `blog/beginner/printable-palmistry-worksheets.md:69`
- Third framing: `foundations/02:65`

**Blog articles bearing on curriculum gaps**
- Thumb: `thumb-meaning-palmistry.md` · Fingers: `finger-shapes-palmistry.md` ·
  Nails: `nails-in-palmistry.md`
- Markings: `islands-on-palm-lines.md`, `crosses-stars-palmistry.md`
- Minor lines: `sun-line.md`, `mercury-line.md`
- Practice: `palmistry-beginner-mistakes.md`,
  `printable-palmistry-worksheets.md`, `palmistry-chart-for-beginners.md`
- Variation depth layer (13): `broken-life-line-meaning.md`,
  `short-life-line-meaning.md`, `double-life-line-meaning.md`,
  `forked-life-line-meaning.md`, `forked-head-line-meaning.md`,
  `forked-heart-line-meaning.md`, `broken-heart-line-meaning.md`,
  `chained-heart-line-meaning.md`, `heart-line-ending-meaning.md`,
  `no-fate-line-meaning.md`, `fate-line-branches-meaning.md`,
  `marriage-line-forked-broken-meaning.md`, `m-line-palmistry.md`

**Prior-audit findings re-verified**
- Confirmed: §5.1 (difficulty labels), §5.2 (Lines description), §5.3 (no
  outbound links), §5.4 (terminology split), §5.5 (mount count), §5.7 (two
  lessons without `relatedArticle`), §5.10 (thumb/fingers/nails absent)
- **Corrected:** §5.6 — a practice layer exists in every lesson, unlabelled
- **Corrected:** §5.9 — markings vocabulary is used across nine files with no
  systematic instruction, not merely absent
- **Corrected:** §5.11 — the mounts module does teach comparison method
- **Partly upheld:** §5's claim that sequencing is correct. The *module order* is
  correct, as §5 said and as this audit's first pass wrongly disputed.
  `prerequisites` is nonetheless decorative, and no lesson is marked advanced
  while a module claims to be

**Second-pass corrections to this audit's own first pass**
- P0-1 (module reorder) — **retracted**; §7
- Six-module target — **withdrawn**; replaced by four modules, 25 core lessons
- ADD count — 11 → **3 core** (+4 optional); §8
- MERGE of `advanced/01` — **retracted**; §9
- Sun line and Mercury line — P0 → **P1**, remedy is revision; §9
- Simian source-integrity defect — **added as P0-2**; §4.2
- Totals reconciled: KEEP 11 + MOVE 1 + REVISE 10 + MERGE 0 = 22 existing;
  + ADD 3 = **25 core**

---

*End of audit. No implementation has begun. All recommendations in §13–§16
require the approvals in §17.*
