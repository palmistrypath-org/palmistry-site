# Palmistry Path — Curriculum and Learning-Path Audit (August 2026)

**Batch:** Remediation Batch 3A
**Date:** 2026-08-11
**Branch:** `audit/curriculum-learning-path-3a`
**Status:** **AUDIT ONLY. NO IMPLEMENTATION HAS BEGUN.** Every recommendation
in this document requires explicit user approval before any lesson, module,
route, or component is changed. No production content was modified by this
batch.

**Scope:** the 22 lessons in `src/content/lessons/`, the module configuration in
`src/consts.ts`, the three `/learn` route templates, and the 53-article blog
library insofar as it bears on curriculum gaps.

**Method:** full read of all 22 lesson files (bounded workers), full read of the
three `/learn` templates and `src/content.config.ts`, plus direct corpus greps
for terminology, markings vocabulary, mount counts, and cross-module references.
Findings from the August site audit (`SITE_AUDIT_2026-08.md` §5) were treated as
hypotheses and re-verified against the current tree; where this audit disagrees
with that one, it says so explicitly.

---

## 1. Executive summary

The curriculum is well written, well sourced, and pedagogically serious. Its
prose does things most palmistry material does not: it corrects myths, names
disagreements between traditions instead of flattening them, and refuses
predictive framing. That quality is not in question here.

The problem is structural, and it is sharper than the previous audit concluded.
The August site audit stated that "sequencing, prerequisites, and difficulty
progression are all correct" and that the problems were about visibility and
duplication. **That conclusion does not survive inspection.** The curriculum
teaches an explicit observation order in Lesson 2, restates the same order in
Lesson 22, and then violates it with its own module sequence in between.

Three findings drive everything else:

1. **The course contradicts its own doctrine on reading order.**
   `foundations/02-how-to-read-a-palm.mdx` teaches a six-step sequence —
   impression → hand shape → texture/flexibility → **mounts** → **major lines**
   → minor lines. `advanced/04-how-to-give-a-reading.mdx` restates it as a
   five-layer sequence with the same ordering. The modules run
   Foundations → **Lines** → **Mounts** → Advanced. A learner is told twice that
   mounts precede lines and is then taught lines first.

2. **The vocabulary of line quality is used everywhere and taught nowhere.**
   "Chained" appears in 9 lesson files, "breaks" in 5, "forks" in 4, "branches"
   in 7, "sister line" and "tasselled" in the life-line lesson, "island" twice —
   once inside a Benham quotation the learner has no way to parse, once in the
   capstone. No lesson defines these as a class of observation. The learner
   accumulates the vocabulary by exposure or not at all.

3. **The capstone's first layer depends on material the course never teaches.**
   Layer 1 of "How to Give a Reading" is hand form and texture including
   **finger proportions**. There is no lesson on the fingers, no lesson on the
   thumb, no lesson on nails, and no lesson on texture or flexibility beyond
   seven lines inside Foundations 02. `phalan` returns zero hits across the
   entire lesson corpus; `nail` returns one.

Two hypotheses from the prior audit did **not** hold up and should be retired:

- *"The mounts curriculum is mere memorisation."* It is not. The mount lessons
  teach relative assessment, neighbour comparison, and displacement blending
  more consistently than any other module. The real mounts problem is template
  sameness and a missing consolidation lesson, not absent method.
- *"Mounts are invoked before mount anatomy is established."* Foundations 02
  §Step four names and locates all mount regions before the Lines module runs.
  The vocabulary is pre-seeded. What is missing is mount *assessment* skill at
  the point the Lines module asks the learner to read endpoints by mount
  territory.

The recommended fix is **not** a naive swap of the Lines and Mounts modules —
each references the other, so swapping moves the problem rather than solving it.
The recommendation is a six-module structure that separates *the map of the hand*
from *reading the lines*, teaches line quality before line meaning, and turns
"Advanced" from a bin of omitted fundamentals into a genuine synthesis and
practice module.

**Headline judgment:** a beginner who completes all 22 lessons in the order the
site presents them can describe features competently but cannot reliably perform
the reading the final lesson asks for — because two of that lesson's five layers
were never taught, and the sequence in which the learner acquired the other
three is the reverse of the one the lesson instructs them to use.

---

## 2. Current curriculum map

22 lessons, 4 modules, ~44,000 words. All frontmatter verified against source.

| # | Module | Lesson | Dur | Difficulty | Advances practical reading ability? |
|---|---|---|---|---|---|
| 1 | Foundations | What Palmistry Is (and Isn't) | 6 | beginner | Framing only — correctly so |
| 2 | Foundations | How to Read a Palm | 8 | beginner | **Yes — the method spine of the course** |
| 3 | Foundations | Hand Shapes | 8 | beginner | Yes |
| 4 | Foundations | Your Active and Passive Hand | 7 | beginner | Yes |
| 5 | Lines | The Major Lines: An Overview | 7 | beginner | Yes — orientation |
| 6 | Lines | The Heart Line | 10 | beginner | Yes |
| 7 | Lines | The Head Line | 10 | beginner | Yes |
| 8 | Lines | The Life Line | 10 | beginner | Yes |
| 9 | Lines | The Fate Line | 9 | beginner | Yes |
| 10 | Lines | The Simian Line | 8 | beginner | Partial — a rare configuration |
| 11 | Mounts | The Mounts: An Overview | 8 | beginner | Yes |
| 12–18 | Mounts | Venus, Jupiter, Saturn, Apollo, Mercury, Luna, Mars | 8–9 | beginner | Yes, with diminishing returns |
| 19 | Advanced | The Minor Lines: An Overview | 7 | intermediate | Partial — names four, teaches none |
| 20 | Advanced | The Marriage and Relationship Lines | 9 | intermediate | Yes |
| 21 | Advanced | The Girdle of Venus | 8 | intermediate | Yes |
| 22 | Advanced | How to Give a Reading | 12 | intermediate | **Yes — the capstone** |

**Module configuration** (`src/consts.ts:28-57`) declares four modules with
difficulty labels Beginner / Beginner–Intermediate / Intermediate / Advanced.
**No lesson in the corpus carries `difficulty: advanced`.** Twenty-two lessons
are labelled beginner (18) or intermediate (4).

**Schema** (`src/content.config.ts:20-36`): required `title`, `description`,
`module`, `moduleTitle`, `order`, `pubDate`, `difficulty`, `duration`; optional
`prerequisites`, `relatedArticle`, `heroImage`.

**What the routes actually render:**

- `src/pages/learn/index.astro` — module cards, numbered `1.`–`4.`; no
  prerequisites, no `relatedArticle`.
- `src/pages/learn/[module]/index.astro` — lessons sorted by `order`; difficulty
  badge and duration per lesson; prev/next module links.
- `src/pages/learn/[module]/[lesson].astro` — breadcrumb, "Lesson N of M",
  `LessonPath` outline, `LessonFooter` prev/next, and `relatedArticle` rendered
  conditionally as "Want more depth? Read the full article →".

**`prerequisites` is never rendered anywhere.** No gate, no warning, no display.
Its values are also uninformative: all 21 non-first lessons list exactly one
prerequisite, and in every case it is the immediately preceding lesson. The field
encodes the reading order and nothing more.

---

## 3. What currently works well

These are load-bearing strengths. Remediation must not damage them.

1. **Foundations 02 is an unusually good method lesson.** It establishes a full
   observation sequence, pre-seeds mount and line vocabulary, and explicitly
   forbids interpretation until the whole hand has been seen
   (`foundations/02:84, 93-101`). It is the best single artefact in the
   curriculum, and it is the evidence base for most of this audit's sequencing
   findings.
2. **Observation-before-interpretation discipline is consistent and real.**
   Every module contains variants of "You are not yet interpreting"
   (`lines/01:94`, `mounts/01:100`, `advanced/01:77`). This is genuine
   pedagogy, not filler.
3. **The mount lessons teach comparison, not lookup.** `mounts/01:30` fixes
   relative assessment as the rule; `mounts/03:36` compares Jupiter to Saturn;
   `mounts/06:85-95` walks three whole-upper-palm configurations. This is the
   most methodologically mature stretch of the course and the prior audit
   under-read it.
4. **Myth correction is built in, not bolted on.** The life-line lesson opens by
   dismantling the lifespan myth (`lines/04:22`); the fate-line lesson opens with
   "Absence is normal" (`lines/05:20`); the relationship-lines lesson leads with
   the naming problem.
5. **The capstone's ethics section is excellent and should be protected.**
   `advanced/04:68-80` draws the observation/prediction line precisely, forbids
   diagnosis, and handles sensitive domains carefully. Whatever restructuring
   happens, this material survives intact.
6. **Cross-tradition handling is honest.** The heart-line Saturn-endpoint
   divergence between Western and Indian readings (`lines/02:72`) is presented as
   unresolved rather than reconciled — exactly the editorial posture `AGENTS.md`
   requires.
7. **Every lesson already ends with a hands-on prompt.** The practice layer is
   not absent, as the prior audit's §5.6 implied. It is present, unlabelled, and
   structurally inconsistent — which is a much cheaper problem to fix.

---

## 4. Learner-blocking problems

Ordered by severity. All confirmed against the current tree.

### 4.1 The module sequence contradicts the course's own taught reading order (P0)

| Source | Order taught |
|---|---|
| `foundations/02` §Steps one–six | impression → shape → **texture/flexibility** → **mounts** → **major lines** → minor lines |
| `advanced/04:25-33` | hand form & texture → **mounts** → **major lines** → minor lines → close |
| Actual module order (`consts.ts:28-57`) | Foundations → **Lines** → **Mounts** → Advanced |

The learner is instructed twice that mounts precede lines, and taught in the
opposite order. This is not a matter of taste between two defensible sequences;
it is an internal contradiction in the product. Either the doctrine is wrong or
the structure is. The doctrine is right — mounts are terrain and are read
tactilely, lines are inscribed on that terrain and are interpreted by reference
to it.

**Consequence in practice:** the Lines module reads line endpoints by mount
territory before mount assessment is taught. `lines/02:68-72` reads the heart
line's three endpoints as "under the mount of Jupiter", "between Jupiter and
Saturn", "under the mount of Saturn". `lines/03:46` reads head-line slope toward
the Mount of Luna. `lines/05` reads fate-line origin at Luna and terminus at the
Saturn mount. Mount names total 17 hits in `lines/04` and 14 in `lines/05`.
The learner has the *names* from Foundations 02 but not the *skill* — they cannot
yet judge whether the Jupiter mount those endpoints point at is developed or
flat, which `lines/02:98` explicitly tells them changes the reading.

### 4.2 Line quality and markings are used across the corpus and taught nowhere (P0)

Per-file counts across `src/content/lessons/`:

| Term | Files | Notes |
|---|---|---|
| chained | 9 | heart, head, life, fate, simian, Venus, girdle, relationship, capstone |
| breaks | 5 | overview, head, life, fate, Mercury |
| branches | 7 | incl. two Foundations lessons |
| forks | 4 | heart, head, overview, relationship |
| crosses | 3 | head, life, relationship — plus a Cheiro cross quotation at `mounts/06:61` |
| island | 2 | `lines/04:26` (inside a Benham quotation), `advanced/04:40` |
| tasselled | 1 | `lines/04:26`, inside the same quotation |
| sister line | 1 | `lines/04:78-82`, defined in place |
| grille / triangle / star / quadrangle | 0 | never used |

Each major-line lesson re-teaches "deep / faint / chained" locally
(`lines/02:42`, `lines/03:52`, `lines/04:52`, `lines/05:62`) in near-identical
language. The concept is therefore taught four times, partially, inside
line-specific contexts, and never once as a transferable class of observation.

The `island` case is the clearest failure. At `lines/04:26` the learner reads
that Benham "reads islands as periods of delicacy and breaks as illness or
accident" — a quotation containing two undefined technical terms — and at
`advanced/04:40` is asked to weigh "a well-formed, island-free head line". The
term is never defined in the course. `blog/beginner/islands-on-palm-lines.md`
defines it thoroughly and no lesson links to it.

**Correction to the prior audit:** §5.9 reported "line markings are never taught"
on the basis of a single `island` grep hit. The truth is worse and more specific:
markings vocabulary is used pervasively and distributed across nine files with no
systematic instruction anywhere.

### 4.3 The thumb, the fingers, and nails are absent, and the capstone depends on them (P0)

Corpus greps: `phalan` → **0 hits**; `nail` → **1 hit**; `finger proportion` →
**1 hit**; `thumb` → 81 hits, essentially all positional ("inside the life line",
"at the thumb's base") rather than instructional.

`advanced/04:25-33` makes finger proportions and skin quality **layer one** of
the reading. Foundations 02 §Step two teaches the palm-to-finger ratio purely as
an input to hand-shape classification and explicitly defers: "You'll study hand
shapes in depth in the next lesson." The fingers themselves are never studied.

This is a substantive omission, not a sequencing gap:

- Benham and Cheiro — the site's two most-cited and now source-verified authors —
  weight the thumb heavily.
- d'Arpentigny's finger classification underpins the very hand-shape system
  Foundations 03 teaches.
- The Mount of Venus lesson is bounded by the thumb throughout.
- Every mount at the finger bases is located *by its finger*.

Full blog articles exist for all three (`thumb-meaning-palmistry.md`,
`finger-shapes-palmistry.md`, `nails-in-palmistry.md`) and no lesson's
`relatedArticle` points at any of them.

### 4.4 The Advanced module names four minor lines and teaches two (P0)

`advanced/01-minor-lines-overview.mdx:38-66` introduces four minor lines under
`### ` subheadings: the sun line, the mercury line, the relationship lines, the
girdle of Venus. Lessons 02 and 03 then teach the last two. **The sun line and
the Mercury line never get a lesson.**

They are, however, introduced *by name and location* inside the Mounts module —
`mounts/05:26` ("This is the **sun line** — also called the Apollo line") and
`mounts/06:28` ("the **Mercury line** — also called the Health Line or, in older
texts, the Hepatica"). So the course introduces them twice and teaches them zero
times, then the capstone lists them among the minor lines to read
(`advanced/04:25-33`) and uses "a short sun line" as a worked weighting example
(`advanced/04:40`).

Both have full blog articles (`sun-line.md`, `mercury-line.md`).

### 4.5 There is no worked example of a reading anywhere in the course (P1)

`advanced/04` is roughly 4,100 words of instruction about how to conduct a
reading. It contains illustrative feature *pairings* — a strong fate line with a
developed Saturn mount and a Saturn-pointing head line (`advanced/04:42-46`); an
expressive emotional register against a restrained fate line (`:48-56`) — but no
end-to-end reading of a single described hand. The learner is told what
synthesis is and shown fragments of it, never a complete instance.

This is the difference between a learner who understands the method and one who
can execute it.

---

## 5. Sequencing and prerequisite findings

Only meaningful learner-friction cases are listed. Trivial cross-references are
deliberately excluded.

| # | Concept encountered before adequate teaching | Where encountered | Where taught | Sev |
|---|---|---|---|---|
| 5.1 | Mount **assessment** (prominence, firmness, displacement) needed to read line endpoints | `lines/02:68-72`, `lines/03:46`, `lines/05:38-84` | `mounts/01` — one module later | P0 |
| 5.2 | "Chained" as a line-quality class | `lines/02:42` (lesson 6 of 22) | Never — re-derived locally in 4 lessons | P0 |
| 5.3 | "Island", "tasselled" | `lines/04:26`, inside a Benham quotation | Never | P0 |
| 5.4 | "Island-free" as a weighting criterion | `advanced/04:40` (final lesson) | Never | P0 |
| 5.5 | Finger proportions as a reading layer | `advanced/04:25-33` | Never (ratio only, as a hand-shape input) | P0 |
| 5.6 | Skin texture and flexibility as a reading layer | `advanced/04:25-33` | `foundations/02:51-59` only — ~7 lines, never revisited | P1 |
| 5.7 | The sun line and the Mercury line | `mounts/05:26`, `mounts/06:28`, `advanced/01:43-54`, `advanced/04:40` | Never | P0 |
| 5.8 | "Cross" as a marking, in a Cheiro quotation on dishonesty | `mounts/06:61` | Never | P1 |
| 5.9 | "Percussion edge" | `mounts/01:16`, `lines/01:25` | Defined inline at `lines/02:24` and `mounts/06:14` — after first use | P2 |
| 5.10 | Active/passive framework used for comparison | `foundations/02:25` | `foundations/04` — two lessons later | P2 — acceptable, Lesson 2 defines it inline |

**On 5.10 and the "comparison before framework" hypothesis:** this one is fine.
Foundations 02 defines active/passive inline at first use and Foundations 04
gives it full treatment. Not a defect.

**On the `prerequisites` field (P1):** all 21 non-first lessons declare exactly
one prerequisite, always the immediately preceding lesson. The field therefore
carries no information the `order` field does not already carry, cannot express
the genuine cross-module dependencies documented above, and is not rendered in
any of the three `/learn` templates. It is currently decorative.

---

## 6. Curriculum completeness

Classification with reasoning. "CORE" means a beginner cannot perform the reading
`advanced/04` describes without it.

| Concept | Class | Current state | Reasoning |
|---|---|---|---|
| Palm vs whole hand | CORE | Taught (`foundations/02:53`) | Adequate |
| Hand shape | CORE | Taught (`foundations/03`) | Adequate; the elemental system is the frame everything else sits in |
| Texture / flexibility | **CORE** | ~7 lines in `foundations/02:51-59` | Layer 1 of the capstone. Under-taught relative to its declared weight |
| Dominant / non-dominant hands | CORE | Taught (`foundations/04`) | Adequate and well handled |
| **Thumb** | **CORE** | **Absent** | Heavily weighted in both primary sources; bounds the Venus mount; blog article exists |
| **Individual fingers** | **CORE** | **Absent** | Locate four of the seven mounts; underpin the hand-shape system; named in capstone layer 1 |
| **Finger proportions** | **CORE** | Ratio only, as a shape input | Named explicitly in capstone layer 1 |
| Phalanges | OPTIONAL | Absent (0 hits) | Belongs inside a fingers/thumb lesson, not as its own |
| **Nails** | OPTIONAL | Absent (1 hit) | Real in the Indian tradition, but the highest medical-claim risk on the site. Blog article already carries the disclaimer. Blog-primary; lesson only if the user wants completeness |
| Mounts | CORE | Taught well, 8 lessons | Strongest module methodologically |
| Major lines | CORE | Taught well, 6 lessons | Adequate |
| Minor lines | CORE | 2 of 4 taught | Sun line and Mercury line missing |
| **Line quality: depth, clarity** | **CORE** | Re-derived locally in 4 lessons | Needs one transferable lesson |
| **Line quality: chaining, breaks, forks, branches** | **CORE** | Used in 9 files, taught nowhere | Same |
| **Markings: islands** | **CORE** | Used twice, taught nowhere | Appears in a source quotation and in the capstone's weighting rule |
| Markings: crosses, stars, grilles, triangles, squares | OPTIONAL / ADVANCED | Crosses used once in a quotation; the rest absent | A beginner does not need these. Blog articles exist (`crosses-stars-palmistry.md`) |
| Comparison between both hands | CORE | Taught (`foundations/04:50-68`) | Adequate |
| **Combining multiple features** | **CORE** | Asserted repeatedly; demonstrated once, briefly | Every lesson ends by saying features combine; one passage shows how |
| **Contradiction handling** | CORE | Taught (`advanced/04:48-56`) | **Genuinely good** — keep verbatim |
| How much weight to give a sign | CORE | Taught (`advanced/04:36-47`) | Good, but uses undefined vocabulary ("island-free") |
| Responsible / non-predictive interpretation | CORE | Taught (`advanced/04:68-80`) plus throughout | Best-handled topic on the site |
| **How to conduct a complete reading** | CORE | Instructed, never demonstrated | No worked example exists |

**Verdict on the thumb/fingers/nails question the batch was asked to adjudicate:**
thumb and fingers are **CORE and currently missing** — this is the largest content
gap in the curriculum. Nails are **OPTIONAL** and should stay blog-primary unless
the user wants full coverage, both because the beginner reading sequence does not
require them and because they carry the sharpest medical-drift risk on the site.

---

## 7. Foundations analysis

**Current:** what palmistry is → how to read a palm → hand shapes → active and
passive hand.

**Assessment:** the strongest module, and the one that most nearly does its job.
Lesson 02 is the method spine of the entire course and should be treated as
canonical when resolving any sequencing dispute.

**Problems:**

1. **Lesson 02 promises a sequence the course does not follow.** Its six steps
   are correct; the modules that follow reorder them. Lesson 02 is right and the
   structure is wrong.
2. **Hand shape sits in Foundations but is a hand-structure topic.** It is the
   first genuinely observational subject in the course and it is stranded
   between the framing lessons and the interpretive modules.
3. **Texture and flexibility get one step and never return.** Declared layer 1 of
   the capstone; taught in seven lines at `foundations/02:51-59`.
4. **Ordering nit:** active/passive is used at `foundations/02:25` and taught at
   Lesson 04. Moving Lesson 04 to position 3 would remove the gap at no cost.

**Recommendation:** narrow Foundations to framing and method — what palmistry is,
how to read a palm, active and passive hand — and move hand shape into a new
hand-structure module alongside the missing thumb, fingers, and texture material.

---

## 8. Lines analysis

**Current:** overview → heart → head → life → fate → simian.

**What works:** the four major-line lessons are the most complete individual
teaching artefacts on the site. Each opens with a myth correction or a
normalising statement, walks a consistent five-variable structure, and closes
with cross-tradition divergence handled honestly.

**Answers to the questions this batch was asked:**

- **Should line quality be taught before individual line interpretation?**
  **Yes, decisively.** Four lessons currently re-derive "deep / faint / chained"
  independently (`lines/02:42`, `03:52`, `04:52`, `05:62`) in near-identical
  language. One lesson teaching depth, clarity, chaining, breaks, forks,
  branches, islands, and sister lines as a transferable class would remove that
  quadruplication *and* close findings 4.2, 5.2, 5.3, and 5.4 at once. This is
  the single highest-leverage new lesson in the audit.
- **Do variations and markings need a dedicated lesson?** Yes — the same one.
  Beginner-relevant markings (island, chain, break, fork, branch, sister line)
  belong in it. Crosses, stars, grilles, and triangles stay blog-only.
- **Does the major-line order make sense?** Yes. Heart → head → life → fate is
  sound: heart and head are the two most visible lines, the head line's origin
  depends on the life line's, and the fate line is the one that may be absent.
  Keep it.
- **Does the simian line belong where it sits?** No. It is a *configuration* of
  the heart and head lines, not a fifth major line — a 1–3% variant occupying the
  final slot of the core module. It depends on heart and head, so it cannot move
  earlier, but it should move to a minor-lines-and-special-configurations module.
  Its current slot is precisely where the line-quality lesson should sit.
- **Does the module teach methodology or memorisation?** Methodology, and better
  than expected. Each lesson ends with "Holding the observations together"
  (`lines/02:94`, `03:102`, `04:108`, `05:102`) explicitly refusing isolated
  reading. The gap is not method — it is that the learner is asked to hold
  observations together using a vocabulary nobody taught them.

---

## 9. Mounts analysis

**Current:** overview → Venus → Jupiter → Saturn → Apollo → Mercury → Luna →
Mars. Eight lessons, seven mounts, ~35% of curriculum words.

**Correction to the prior audit.** §5.11 characterised this module as drifting
"from taught method toward mount-by-mount lookup." Re-inspection does not support
that as stated. The module teaches comparison persistently:

- `mounts/01:30` — "relative height compared to the other mounts on the same
  hand, not against some fixed standard"
- `mounts/01:86-88` — scan the whole terrain before focusing on any single mount
- `mounts/03:36`, `04:30`, `05:14` — each mount explicitly sized against named
  neighbours
- `mounts/06:85-95` — three complete upper-palm configurations worked through
- Displacement-as-blending taught consistently (`01:34`, `03:64`, `04:62`,
  `05:60`, `06:66`)

This is the most methodologically mature material in the course. The real
problems are narrower:

1. **Template sameness (P2, confirmed).** Lessons 03–06 share a near-identical
   skeleton: Finding it precisely → Assessing the mount → The core quality → How
   development is read → Displacement toward [neighbour] → What other traditions
   say → Looking at [mount] in context. Venus and Saturn deviate slightly; Luna
   simplifies; Mars is genuinely different. Four consecutive lessons on one
   template is where a learner's attention goes flat.
2. **Mount count is stated three different ways (P1, confirmed).**
   - Curriculum: **seven** — `mounts/01:3`, `:38`, `:108`;
     `blog/beginner/mounts-overview.md:99`; `pages/blog/index.astro:43`
   - Foundations: Plain of Mars plus "upper and lower Mars regions" —
     `foundations/02:65`
   - Product and marketing: **eight** — `consts.ts:47`; `guide.astro:452`;
     `guide/thank-you.astro:291`; `premium-guide.astro:13`, `:352`;
     `private/print/complete-reference.astro:321`, `:554`, `:785`;
     `blog/beginner/printable-palmistry-worksheets.md:69`

   The eight-count presumably splits Upper and Lower Mars. The curriculum
   presents Mars as one mount in two zones plus a connective plain
   (`mounts/08:14`, `:75-76`). A learner comparing the free course against the
   paid guide meets a direct numerical contradiction — and mount count is exactly
   the fact they would use to check that the two match.
3. **Mars is handled well (question answered).** `mounts/08` covers Lower Mars,
   Upper Mars, and the Plain of Mars in separate sections and states the unusual
   status explicitly at `:14`. It is the best-differentiated lesson in the module.
   No change needed beyond aligning the count.
4. **The module has no consolidation lesson.** Each lesson compares its own mount
   to its neighbours, but nothing at the end asks the learner to read the mount
   landscape as a whole. `mounts/06:85-95` does this for the upper palm only, and
   does it well enough to serve as the model.
5. **The module introduces two minor lines it does not teach** — the sun line at
   `mounts/05:26` and the Mercury line at `mounts/06:28`. See finding 4.4.

**Is overview-plus-individual-lessons still the right design?** Yes, with one
addition. The overview establishes the method; the individual lessons apply it.
What is missing is the closing move. Recommend keeping all eight lessons —
they are newly source-verified by Batch 2C and rewriting them would discard that
work — and adding a landscape-reading lesson at the end. Compressing 03–06 into
fewer lessons is a legitimate P2/LATER option but is **not** recommended now.

---

## 10. Advanced analysis

**Is "Advanced" actually advanced? No.** Every one of its four lessons carries
`difficulty: intermediate`, while `consts.ts:55` labels the module "Advanced". No
lesson anywhere in the corpus is marked advanced.

More substantively, the module is three different things wearing one label:

| Lesson | What it actually is |
|---|---|
| 01 Minor Lines: An Overview | An **orientation** listing four lines, two of which never get taught |
| 02 Marriage and Relationship Lines | A **standard feature lesson**, no harder than the heart line |
| 03 Girdle of Venus | A **standard feature lesson** |
| 04 How to Give a Reading | The **capstone** — synthesis, weighting, contradiction, ethics |

Lessons 02 and 03 are not advanced material. They are minor-line lessons that
happen to sit in the last module. Lesson 04 is a genuine capstone doing an
enormous amount of work alone.

**Is "How to Give a Reading" doing too much? Yes.** In roughly 4,100 words it
carries: the five-layer reading sequence, the weighting rule, contradiction
handling, language discipline, the ethical posture, and the limits of the system.
Any one of the first three could support its own lesson. And it does all of this
in the final 12 minutes of a 22-lesson course, after the learner has had no
opportunity to practise combining anything.

**Should practice start earlier? Yes — and this is the module's core defect.**
Every prior lesson ends with a variant of "you are not yet putting this together."
`mounts/01:100`, `lines/01:94`, `advanced/01:77` all defer synthesis. The learner
defers for 21 lessons and then meets all of it at once.

**Should material move earlier?** Yes:

- The five-layer reading sequence (`advanced/04:25-33`) duplicates Foundations 02
  and belongs *there* as the course's declared method, with the capstone
  referring back to it rather than restating it.
- The weighting rule (`:36-47`) is a general interpretive principle that would
  serve the learner from the Lines module onward.

**What should genuinely advanced study mean for Palmistry Path?** Not more
features. Advanced should mean *harder judgment*: reconciling contradictory
features, weighing tradition against tradition where they disagree, recognising
where the system runs out, handling a real person's expectations, and reading
hands that do not fit the taxonomy. `advanced/04:82-92` already gestures at this.
That is the seed of a real advanced module — but it is a later concern, not part
of fixing the beginner path.

---

## 11. Practice and application analysis

**Correction to the prior audit.** §5.6 stated "the curriculum has no practice
layer." It has one — it is simply invisible.

**What exists:**

| Form | Where | Quality |
|---|---|---|
| Named exercise sections | All 4 Foundations lessons + `mounts/01`, `lines/01`, `advanced/01` | Good — "Before the next lesson", "What you're not doing yet" |
| Unlabelled trailing prompts | All Lines lessons, `mounts/02-08`, `advanced/02-03` | Substantively fine, structurally invisible |
| Compare-your-hands exercise | `foundations/02:107`, `foundations/04:50-68` | Present and good |
| Cumulative practice | `mounts/05:75-81`, `mounts/06:84-95` | The two best examples on the site |
| Scenario reflection | `mounts/06:85-95` — three configurations | The model to generalise |

**What is missing:**

| Gap | Severity |
|---|---|
| Any worked "read this hand" example, anywhere | P1 |
| Module-level checkpoints | P1 |
| Identify-the-feature activities (name what you see) | P2 |
| Common-error correction inside the course | P2 — `blog/beginner/palmistry-beginner-mistakes.md` exists |
| Cumulative practice across modules, not just within one | P1 |
| Any practice artefact the learner keeps | P2 |
| A recognisable, consistently styled practice element | P1 — the cheapest high-value fix on this list |

### Recommended practice architecture

Deliberately minimal, appropriate to a static Astro site. **No accounts, no
progress tracking, no server state, no PDF pipeline.**

1. **A `<Practice>` MDX component.** One shared component, used to wrap the
   end-of-lesson prompts that already exist in all 22 lessons. Purely
   presentational. This makes the practice layer visible without writing a single
   word of new curriculum content, and it is the highest ratio of learner benefit
   to implementation cost in this entire audit.
2. **A `<Checkpoint>` component at the end of each module.** Three to five
   self-check prompts with disclosure-revealed answers (`<details>`, no
   JavaScript). Self-assessed, unscored, unstored.
3. **Two to three worked readings** in the synthesis module, as *described*
   hands — "a square palm with short fingers, a firm Venus mount, a straight
   heart line ending under Saturn…" — walked through the five layers to a
   responsible closing statement. Described hands need no photography and no
   generated imagery, and they let the writer control exactly which features are
   in play.
4. **A per-module observation page**, styled for printing with CSS only, listing
   what to record for each feature with columns for active and passive hand. No
   PDF generation. `docs/worksheet-pack-spec.md` already specifies the content.
5. **Optional, LATER:** a single interactive identify-the-feature exercise on one
   diagram. Only if 1–4 land well.

Explicitly **not** recommended: progress tracking, accounts, quiz scoring,
streaks, localStorage state, or anything requiring a backend.

---

## 12. Blog versus curriculum role

53 articles, all under `src/content/blog/beginner/`. The `advanced/` and
`intermediate/` directories exist but are empty.

**Recommended division of labour — one rule:**

> **A lesson teaches the *variable*. A blog article covers a specific *value* of
> that variable.**

The lessons teach that a line has depth, clarity, breaks, forks, and islands, and
what those classes of observation mean. The blog answers "what does a *broken*
life line mean", "what does a *forked* head line mean", "what does a *chained*
heart line mean" — the long-tail questions people actually search.

This rule is already ~70% true structurally, and it resolves the duplication
concern in §5.8 of the site audit without requiring the larger "curriculum or
article farm" decision to be settled first. It is compatible with either answer.

**Where the current relationship is broken:**

| Problem | Evidence | Action |
|---|---|---|
| **Foundational instruction stranded in the blog.** The thumb, fingers, nails, islands, and beginner mistakes exist only as articles | `thumb-meaning-palmistry.md` (two phalanges, length, set, flexibility), `finger-shapes-palmistry.md` (relative length, knotted/smooth, phalange zones), `nails-in-palmistry.md`, `islands-on-palm-lines.md`, `palmistry-beginner-mistakes.md` | Promote the substance into lessons; keep the articles as depth |
| **Lessons never link outward.** Zero `/blog/` links in any lesson body across all 22 files; only the single frontmatter `relatedArticle` pointer | Corpus grep | Add a "go deeper" link block per lesson |
| **The variation articles are orphaned from the course.** `broken-life-line-meaning`, `forked-head-line-meaning`, `chained-heart-line-meaning`, `short-life-line-meaning`, `double-life-line-meaning`, `no-fate-line-meaning`, `heart-line-ending-meaning`, `fate-line-branches-meaning` are exactly the depth layer the line lessons need — and no line lesson links to any of them | Corpus grep | These become the "go deeper" targets |
| **Terminology splits between layers.** Lessons use active/passive (24 + 16 hits); the SEO variant articles use dominant/non-dominant exclusively | Corpus grep; site audit §5.4 | One cross-walk sentence in the active/passive lesson |
| **Two lessons have no article partner** | `advanced/01`, `advanced/04` — `relatedArticle: ""` | Cosmetic; ignore or fill |

**Not recommended:** converting the blog into lessons, or building parallel
lesson coverage for every article. The 53-article library is a genuine asset in
its current role.

---

## 13. Recommended target curriculum

Six modules, 33 lessons: 22 existing (8 kept as-is, 5 moved, 8 revised, 1
merged away) and 11 new.

The design principles, in priority order:

1. Teach the hand's **terrain** before the marks inscribed on it — which is what
   Foundations 02 and the capstone both already instruct.
2. Teach the **vocabulary of line quality** before any line is interpreted.
3. Give **synthesis and practice** their own module instead of one 4,100-word
   lesson at the end.
4. **Reuse existing lessons wherever possible.** Batch 2C source-verified this
   corpus; rewriting it would discard that work.

### Module 1 — Foundations (3 lessons)
1. What Palmistry Is (and Isn't) — *existing, KEEP*
2. How to Read a Palm — *existing, REVISE* (make the six-step sequence the
   course's declared spine and align the module order to it)
3. Your Active and Passive Hand — *existing, MOVE* (position 4 → 3)

### Module 2 — The Structure of the Hand (5 lessons)
4. Hand Shapes — *existing, MOVE from Foundations*
5. Texture and Flexibility — **NEW**
6. The Thumb — **NEW**
7. The Fingers — **NEW** (relative length, set, smooth and knotted, the three
   phalange zones)
8. The Nails — **NEW, conditional on user decision** (see §18)

### Module 3 — The Mounts (9 lessons)
9. The Mounts: An Overview — *existing, REVISE* (settle the mount count)
10–16. Venus, Jupiter, Saturn, Apollo, Mercury, Luna, Mars — *existing, KEEP ×7*
17. Reading the Mount Landscape — **NEW** (generalise `mounts/06:85-95` to the
    whole palm; the module's missing closing move)

### Module 4 — Reading the Lines (6 lessons)
18. Line Quality and Markings — **NEW** — *depth, clarity, chaining, breaks,
    forks, branches, islands, sister lines. **This lesson comes first.***
19. The Major Lines: An Overview — *existing, REVISE*
20. The Heart Line — *existing, REVISE*
21. The Head Line — *existing, REVISE*
22. The Life Line — *existing, REVISE*
23. The Fate Line — *existing, REVISE*

*(Revisions to 20–23 are subtractive: remove the locally re-derived depth/clarity
teaching now handled by lesson 18, and add "go deeper" links to the variation
articles. Not rewrites.)*

### Module 5 — Minor Lines and Special Configurations (5 lessons)
24. The Sun Line — **NEW**
25. The Mercury Line — **NEW**
26. The Marriage and Relationship Lines — *existing, MOVE*
27. The Girdle of Venus — *existing, MOVE*
28. The Simian Line — *existing, MOVE from Lines*

*`advanced/01-minor-lines-overview` is **MERGED** into this module's introduction
— once the sun and Mercury lines have their own lessons, its remaining job is
framing, which the module landing page can carry.*

### Module 6 — Putting It Together (5 lessons)
29. Combining Features — **NEW** (weighting and contradiction, lifted from
    `advanced/04:36-56` and expanded)
30. Worked Reading: Hand One — **NEW**
31. Worked Reading: Hand Two — **NEW**
32. How to Give a Reading — *existing, REVISE* (sheds the five-layer restatement
    and the weighting material; keeps and foregrounds the ethics section)
33. Common Mistakes and How to Correct Them — **NEW** (built on
    `blog/beginner/palmistry-beginner-mistakes.md`)

### On the Mounts-before-Lines question

The batch asked specifically whether mounts should precede lines. **Yes — but not
by swapping the two existing modules.** A naive swap fails because the mount
lessons themselves reference lines: Venus↔life line, Apollo↔sun line, Luna↔head
line, Saturn↔fate line. Swapping moves the prerequisite inversion rather than
removing it.

What resolves it is the split above: mounts are taught as **terrain** (Module 3,
where the line references are incidental orientation cues, exactly as Foundations
02 already treats them), and lines are taught as **interpretation** (Module 4,
where mount assessment is now genuinely in hand). This is the ordering both
Foundations 02 and the capstone already instruct.

---

## 14. Proposed module outcomes

Stated as abilities, not topics.

**Module 1 — Foundations.** By the end, the learner can explain what palmistry
does and does not claim, work through a complete six-step observation of a hand
without interpreting anything, and identify which of their hands is active and
which is passive and why the comparison matters.

**Module 2 — The Structure of the Hand.** By the end, the learner can classify a
hand by elemental shape, assess its texture and flexibility, evaluate the thumb's
length, set, and flexibility, judge finger length and set relative to the palm,
and state what this structural baseline changes about how any line on that hand
will later be read.

**Module 3 — The Mounts.** By the end, the learner can locate all seven mount
regions and the Plain of Mars, assess each for prominence, firmness, and
displacement, compare their relative development across a single hand, identify
which two or three dominate, and use mount balance as supporting context rather
than reading any mount in isolation.

**Module 4 — Reading the Lines.** By the end, the learner can name and identify
the qualities any line may carry — depth, clarity, chaining, breaks, forks,
branches, islands, sister lines — apply that vocabulary to the four major lines,
read each line's path, length, and endpoint by mount territory, and describe how
one line's quality changes what a neighbouring line suggests.

**Module 5 — Minor Lines and Special Configurations.** By the end, the learner
can identify the sun line, Mercury line, relationship lines, girdle of Venus, and
the simian and Sydney configurations; explain why the absence of any minor line
is unremarkable; and qualify a major-line reading with minor-line evidence
without letting the minor evidence override it.

**Module 6 — Putting It Together.** By the end, the learner can conduct a
complete reading through all five layers in order, weigh features by how much of
the hand they account for, name a genuine contradiction rather than resolving it
falsely, deliver observations in non-predictive language, recognise the most
common beginner errors in their own practice, and state plainly where the system
runs out.

---

## 15. Keep / Move / Revise / Merge / Add matrix

All 22 existing lessons accounted for exactly once, by primary disposition.

| Existing lesson | Disposition | Destination | Note |
|---|---|---|---|
| `foundations/01-what-palmistry-is` | **KEEP** | M1 L1 | No change |
| `foundations/02-how-to-read-a-palm` | **REVISE** | M1 L2 | Make the six-step order canonical; forward-reference each module |
| `foundations/03-hand-shapes` | **MOVE** | M2 L1 | Content unchanged |
| `foundations/04-active-and-passive-hand` | **MOVE** | M1 L3 | Reorder within module; add dominant/non-dominant cross-walk |
| `lines/01-major-lines-overview` | **REVISE** | M4 L2 | Now follows the line-quality lesson |
| `lines/02-heart-line` | **REVISE** | M4 L3 | Subtractive: drop local depth/clarity teaching; add depth links |
| `lines/03-head-line` | **REVISE** | M4 L4 | Same |
| `lines/04-life-line` | **REVISE** | M4 L5 | Same; the Benham islands/tassels quotation now has a referent |
| `lines/05-fate-line` | **REVISE** | M4 L6 | Same |
| `lines/06-simian-line` | **MOVE** | M5 L5 | Content unchanged |
| `mounts/01-mounts-overview` | **REVISE** | M3 L1 | Settle the mount count sitewide |
| `mounts/02-mount-of-venus` | **KEEP** | M3 L2 | |
| `mounts/03-mount-of-jupiter` | **KEEP** | M3 L3 | |
| `mounts/04-mount-of-saturn` | **KEEP** | M3 L4 | |
| `mounts/05-mount-of-apollo` | **KEEP** | M3 L5 | Add forward pointer to the new sun-line lesson |
| `mounts/06-mount-of-mercury` | **KEEP** | M3 L6 | Add forward pointer to the new Mercury-line lesson |
| `mounts/07-mount-of-luna` | **KEEP** | M3 L7 | |
| `mounts/08-mount-of-mars` | **KEEP** | M3 L8 | |
| `advanced/01-minor-lines-overview` | **MERGE** | M5 intro | Framing survives as the module landing copy |
| `advanced/02-marriage-relationship-lines` | **MOVE** | M5 L3 | Content unchanged |
| `advanced/03-girdle-of-venus` | **MOVE** | M5 L4 | Content unchanged |
| `advanced/04-how-to-give-a-reading` | **REVISE** | M6 L4 | Sheds layers/weighting; ethics section preserved verbatim |

**Totals: KEEP 8 · MOVE 5 · REVISE 8 · MERGE 1 · ADD 11** (22 existing + 11 new = 33).

### New lessons, by priority

| # | New lesson | Module | Priority | Rationale |
|---|---|---|---|---|
| 1 | Line Quality and Markings | M4 L1 | **P0** | Closes findings 4.2, 5.2, 5.3, 5.4 and removes quadruplicated teaching |
| 2 | The Thumb | M2 | **P0** | Finding 4.3; heavily weighted in both primary sources |
| 3 | The Fingers | M2 | **P0** | Finding 4.3; named in capstone layer 1 |
| 4 | The Sun Line | M5 | **P0** | Finding 4.4; introduced twice, taught never |
| 5 | The Mercury Line | M5 | **P0** | Finding 4.4; same |
| 6 | Worked Reading: Hand One | M6 | **P1** | Finding 4.5 |
| 7 | Combining Features | M6 | **P1** | Relieves the overloaded capstone |
| 8 | Texture and Flexibility | M2 | **P1** | Capstone layer 1, currently seven lines |
| 9 | Worked Reading: Hand Two | M6 | **P2** | Second instance; a contrasting hand |
| 10 | Reading the Mount Landscape | M3 | **P2** | The mounts module's missing closing move |
| 11 | Common Mistakes | M6 | **P2** | Blog article already provides the substance |
| — | The Nails | M2 | **LATER** | Conditional — see §18 |

---

## 16. P0 / P1 / P2 recommendations

### P0 — curriculum correctness / learner-blocking

| # | Recommendation | Evidence |
|---|---|---|
| P0-1 | Resolve the reading-order contradiction: restructure so the hand's terrain precedes line interpretation, matching Foundations 02 and the capstone | §4.1 |
| P0-2 | Add a Line Quality and Markings lesson, placed before any individual line | §4.2 |
| P0-3 | Add Thumb and Fingers lessons | §4.3 |
| P0-4 | Add Sun Line and Mercury Line lessons | §4.4 |
| P0-5 | Fix the `island` / `tasselled` references so they land after the vocabulary is taught (falls out of P0-2 automatically) | §4.2, 5.3, 5.4 |

### P1 — substantial learning improvement

| # | Recommendation | Evidence |
|---|---|---|
| P1-1 | Add at least one worked end-to-end reading | §4.5 |
| P1-2 | Standardise practice into a `<Practice>` component across all 22 lessons | §11 |
| P1-3 | Split the capstone: weighting and contradiction into their own lesson; ethics stays and leads | §10 |
| P1-4 | Settle the mount count — seven or eight — and apply it across all 9 surfaces | §9.2 |
| P1-5 | Either render `prerequisites` or replace it with a meaningful cross-module dependency field | §5 |
| P1-6 | Fix module difficulty labels in `consts.ts` to match lesson frontmatter | §2 |
| P1-7 | Fix the Lines module description, which promises Sun, Mercury, and Girdle content held elsewhere | `consts.ts:40-41` |
| P1-8 | Add a Texture and Flexibility lesson | §6 |
| P1-9 | Add module-end `<Checkpoint>` self-checks | §11 |

### P2 — polish

| # | Recommendation |
|---|---|
| P2-1 | Add a mount-landscape consolidation lesson |
| P2-2 | Add "go deeper" blog links to every lesson (lessons currently link outward zero times) |
| P2-3 | Add one cross-walk sentence reconciling active/passive with dominant/non-dominant |
| P2-4 | Add a Common Mistakes lesson |
| P2-5 | Add a second worked reading |
| P2-6 | Add printable per-module observation pages (CSS print styles, no PDF pipeline) |

### LATER — valuable, unnecessary now

- A Nails lesson (pending the §18 decision).
- Compressing mounts 03–06 to reduce template sameness. Defer: the content is
  newly source-verified and the sameness is a P2 experience issue, not a
  correctness one.
- A genuinely advanced module — contradictory hands, tradition-versus-tradition
  judgment, the limits of the system. Requires the beginner path to be sound
  first.
- Any interactive identify-the-feature exercise.

---

## 17. Recommended implementation batches

Derived from the evidence, sequenced so each batch is independently shippable and
independently reversible. Names reflect content, not a preset scheme.

**Batch 3B — Structure and truthful labelling.** *No new lesson prose.*
Module reordering and re-slugging, `consts.ts` difficulty labels and
descriptions, the mount-count decision applied across all 9 surfaces, and either
rendering `prerequisites` or replacing it. Highest correctness-per-token in the
programme, and it exposes any routing or redirect risk before any writing
begins. Requires `npm run build`, `npm run audit:all`, `npm run content-audit`,
and a redirect check if any lesson URL changes.

**Batch 3C — The line-quality lesson.** One new lesson, plus the subtractive
revisions to the four major-line lessons that it makes possible. Deliberately
alone in its own batch: it is the single highest-leverage change in the audit,
it touches five files, and it should be reviewed on its own merits.

**Batch 3D — The missing hand-structure lessons.** Thumb, Fingers, and the Module
2 assembly (including the moved hand-shapes lesson). Texture and Flexibility if
scope allows. Source-heavy work — Benham and Cheiro on the thumb, d'Arpentigny on
the fingers — and should follow the editorial approval workflow in `AGENTS.md`
per lesson.

**Batch 3E — The missing minor lines.** Sun Line and Mercury Line lessons, the
Module 5 assembly, the simian-line move, and folding the minor-lines overview
into the module introduction.

**Batch 3F — Synthesis and practice.** The capstone split, Combining Features,
the first worked reading, and the `<Practice>` component rollout across all
lessons. The `<Practice>` component could ship earlier and independently if a
quick visible win is wanted.

**Batch 3G — Polish.** Mount landscape lesson, the blog "go deeper" link layer,
terminology cross-walk, Common Mistakes, second worked reading, checkpoints,
observation pages.

**Recommended first batch: 3B.** It is docs-and-config-shaped rather than
content-shaped, it makes the site tell the truth about itself immediately, it
requires no editorial approval cycle, and every later batch assumes the structure
it establishes.

---

## 18. Explicit decisions requiring user approval

Nothing proceeds until these are settled.

| # | Decision | Recommendation | Consequence if deferred |
|---|---|---|---|
| D1 | **Adopt the six-module structure**, or keep four and patch in place? | Adopt six | Everything downstream depends on this |
| D2 | **Is the curriculum permitted to grow from 22 to ~33 lessons?** | Yes — 5 of the 11 are P0 gaps | The P0 gaps cannot be closed without new lessons |
| D3 | **Seven mounts or eight?** Curriculum says seven, all product surfaces say eight, Foundations 02 implies a third framing | Recommend **seven named mounts, Mars in two zones** — matching the curriculum and the classical sources — and correct the product surfaces. This touches paid-product copy | The free course and the paid guide contradict each other on a checkable fact |
| D4 | **Do module URLs change?** Reordering can be display-only, or slugs can be renumbered | Display-order only; keep existing slugs and lesson URLs | Renumbering means redirects and SEO risk for no learner benefit |
| D5 | **Nails: lesson, or blog-only?** | Blog-only for now — highest medical-drift risk on the site, and not required by the beginner reading sequence | Low stakes either way |
| D6 | **Compress mounts 03–06?** | **No.** Newly source-verified; sameness is P2 | None — this is the safe default |
| D7 | **Adopt the "lesson teaches the variable, blog covers the value" rule?** | Yes | Without a rule, lesson↔blog duplication keeps recurring |
| D8 | **Is the `<Practice>` / `<Checkpoint>` component work in scope?** It is site-code, not content | Yes — it is the cheapest learner-visible improvement available | The practice layer stays invisible |

**Related but explicitly out of scope for this batch:** site audit §5.8 asks
whether the site is a curriculum or an article library with a curriculum attached.
This audit's D7 rule is compatible with either answer and does not pre-empt it.

---

## 19. Things deliberately NOT recommended

- **Swapping the Lines and Mounts modules directly.** Each references the other;
  a swap relocates the prerequisite inversion instead of removing it. §13.
- **Rewriting the mount lessons.** Batch 2C source-verified them on 2026-08-11.
  Rewriting discards that work to solve a P2 experience problem.
- **Converting blog articles into lessons wholesale.** The 53-article library
  earns its place as the reference and long-tail layer. Only the five stranded
  *foundational* topics get promoted.
- **Progress tracking, accounts, quiz scoring, or streaks.** Out of scope by
  instruction and unnecessary for the practice architecture proposed.
- **A PDF or worksheet-generation pipeline.** CSS print styling achieves the same
  learner outcome at a fraction of the cost.
- **Any new imagery or diagram generation.** The worked readings use *described*
  hands specifically so no artwork is required.
- **Building a genuinely advanced module now.** Premature while the beginner path
  has P0 gaps.
- **Deleting any existing lesson.** Every one of the 22 has a destination in the
  target curriculum; one is merged, none is removed.
- **Touching the August audit reports, the byline decision, the Gettings/West/
  Fincham copyright-quotation question, or Batch 2B/2C source remediation.** All
  out of scope by instruction and untouched by this batch.

---

## 20. Appendix — evidence and file locations

**Curriculum sources**
- `src/content/lessons/` — 22 `.mdx` files across `foundations/` (4), `lines/` (6),
  `mounts/` (8), `advanced/` (4)
- `src/content.config.ts:20-36` — lessons collection schema
- `src/consts.ts:28-57` — `MODULES` configuration
- `src/pages/learn/index.astro`, `src/pages/learn/[module]/index.astro`,
  `src/pages/learn/[module]/[lesson].astro` — the three route templates
- `src/content/blog/beginner/` — 53 articles; `blog/advanced/` and
  `blog/intermediate/` are empty

**Key passages cited**
| Location | What it establishes |
|---|---|
| `foundations/02:32-91` | The six-step observation sequence — the course's method spine |
| `foundations/02:65` | All mount regions named and located, before the Lines module |
| `foundations/02:51-59` | The entirety of texture and flexibility teaching |
| `foundations/02:93-101` | Synthesis principle: no feature carries fixed meaning in isolation |
| `advanced/04:25-33` | The capstone's five-layer reading order |
| `advanced/04:36-47` | The weighting rule; "island-free head line" at `:40` |
| `advanced/04:48-56` | Contradiction handling |
| `advanced/04:68-80` | The ethical posture — protect verbatim |
| `lines/02:68-72` | Heart-line endpoints read by mount territory |
| `lines/04:26` | Benham quotation containing undefined "islands" and "tasselled" |
| `lines/02:42`, `03:52`, `04:52`, `05:62` | Depth/clarity re-derived four times |
| `mounts/01:30`, `:86-88` | Relative-assessment method |
| `mounts/06:85-95` | Best cumulative practice on the site — the model for §11 |
| `mounts/05:26`, `mounts/06:28` | Sun line and Mercury line introduced but never taught |
| `mounts/08:14`, `:75-76` | Mars as one mount in two zones plus the Plain |
| `advanced/01:38-66` | Four minor lines named; two taught |

**Corpus grep results** (`src/content/lessons/`, 2026-08-11)
- `phalan` → 0 · `nail` → 1 · `finger proportion` → 1 · `grille`/`triangle`/
  `quadrangle`/`star` (as a marking) → 0
- `island` → 2 (`lines/04:26`, `advanced/04:40`) · `tassel` → 1
- `chained` → 32 across 9 files · `breaks` → across 5 files · `branches` →
  across 7 files · `forks` → across 4 files
- `thumb` → 81, positional rather than instructional
- `active hand` → 24 · `passive hand` → 16 · `dominant hand` → 10 ·
  `non-dominant` → 3
- Mount-name references inside `lines/`: `04` → 17, `05` → 14, `02` → 6,
  `01` → 4, `03` → 3
- `/blog/` links in lesson bodies → 0 (frontmatter `relatedArticle` only)

**Seven-versus-eight mounts, all surfaces**
- Seven: `lessons/mounts/01:3,38,108`; `blog/beginner/mounts-overview.md:99`;
  `pages/blog/index.astro:43`; `blog/beginner/cheiro-palmistry-books.md:44`
- Eight: `consts.ts:47`; `pages/guide.astro:452`;
  `pages/guide/thank-you.astro:291`; `pages/premium-guide.astro:13,352`;
  `private/print/complete-reference.astro:321,554,785`;
  `blog/beginner/printable-palmistry-worksheets.md:69`
- Third framing: `foundations/02:65` (Plain of Mars plus upper/lower regions)

**Blog articles bearing on curriculum gaps**
- Thumb: `thumb-meaning-palmistry.md` — phalanges, length, set, flexibility
- Fingers: `finger-shapes-palmistry.md` — relative length, knotted/smooth,
  phalange zones, planetary associations
- Nails: `nails-in-palmistry.md` — shape, texture, moons, medical disclaimer
- Markings: `islands-on-palm-lines.md`, `crosses-stars-palmistry.md`
- Minor lines: `sun-line.md`, `mercury-line.md`
- Practice: `palmistry-beginner-mistakes.md`,
  `printable-palmistry-worksheets.md`, `palmistry-chart-for-beginners.md`
- Line variations (the "go deeper" layer): `broken-life-line-meaning.md`,
  `short-life-line-meaning.md`, `double-life-line-meaning.md`,
  `forked-life-line-meaning.md`, `forked-head-line-meaning.md`,
  `forked-heart-line-meaning.md`, `broken-heart-line-meaning.md`,
  `chained-heart-line-meaning.md`, `heart-line-ending-meaning.md`,
  `no-fate-line-meaning.md`, `fate-line-branches-meaning.md`,
  `marriage-line-forked-broken-meaning.md`, `m-line-palmistry.md`

**Prior-audit findings re-verified in this batch**
- Confirmed: §5.1 (difficulty labels), §5.2 (Lines description),
  §5.3 (no outbound links), §5.4 (terminology split), §5.5 (mount count),
  §5.7 (two lessons without `relatedArticle`), §5.10 (thumb/fingers/nails absent)
- **Corrected:** §5.6 — a practice layer exists in every lesson; it is unlabelled,
  not missing
- **Corrected:** §5.9 — markings are not merely "never taught"; the vocabulary is
  used across nine files with no systematic instruction
- **Corrected:** §5.11 — the mounts module does teach comparison method; the
  defect is template sameness and a missing consolidation lesson
- **Overturned:** §5's header claim that "sequencing, prerequisites, and
  difficulty progression are all correct." Sequencing contradicts the course's
  own taught order (§4.1); `prerequisites` is decorative (§5); no lesson is
  marked advanced while a module claims to be (§2)

---

*End of audit. No implementation has begun. All recommendations in §13–§17
require the approvals listed in §18.*
