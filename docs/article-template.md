# Article Template — Palmistry Path

*A reusable starting point and checklist for new blog articles. Fill in the sections below, delete placeholder text, and check every item in the audit checklist before publishing.*

---

## Frontmatter Template

```yaml
---
title: "[Feature] Meaning in Palmistry[: Optional Subtitle]"
description: "[One to two sentences, 140–160 characters. Describe what the reader will learn. No predictive language.]"
pubDate: YYYY-MM-DD
cluster: "[major-lines | mounts | minor-lines | hand-shape | techniques | tradition | myths]"
relatedLesson: "/learn/[module]/[lesson-slug]"   # omit if no lesson exists yet
---
```

**Title conventions:**
- Specific: name the exact feature ("Mount of Jupiter", not just "Jupiter")
- No predictions or promises in the title
- ~60 characters max for the title tag

**Description conventions:**
- Plain language, informational intent
- 140–160 characters
- Describe what the reader learns, not what the palm "reveals"

**Cluster values** (for future grouping and filtering):

| Value | Use for |
|---|---|
| `major-lines` | Heart, head, life, fate, sun/Apollo lines |
| `mounts` | All nine mounts |
| `minor-lines` | Girdle of Venus, Mercury line, marriage lines, etc. |
| `hand-shape` | Hand types, finger shapes, thumb, nails |
| `techniques` | How-to articles, reading methodology |
| `tradition` | Tradition overviews (Western, Indian, Chinese) |
| `myths` | Myth-correction focused articles |

---

## Article Structure

Use this section order. Not every section is required in every article — see notes. Delete any section that does not apply.

---

### Opening paragraph(s)

*Required. 1–3 paragraphs.*

Orient the reader to the feature and why it matters. Do not summarise the article here — give the reader a reason to continue. The opening often notes why this feature is commonly misunderstood, why it is interpretively significant, or how it relates to features the reader may already know.

If this article assumes prior knowledge, add a brief signpost linking to the foundational article(s): "The [overview of the major lines](/blog/beginner/major-lines-overview) provides useful context if you are new to…" — then move on. Do not gate-keep.

---

### Location

*Required for line and mount articles. Optional for technique and tradition articles.*

**Heading:** `## Location` or `## Where to find it`

Describe where the feature sits on the hand, in plain anatomical language. Use reference points a reader can find without a labelled diagram (e.g., "the fleshy elevation immediately below where the first finger meets the palm"). Note any adjacent features for orientation.

---

### Traditional associations

*Required.*

**Heading:** `## What it's traditionally associated with` (or `## Traditional associations` for more advanced articles)

Introduce the feature's core interpretive domain across traditions. Cite at least two named classical sources. Name the tradition you are drawing from explicitly: "Cheiro, in *Palmistry for All*…", "Benham described…", "In Hasta Samudrika Shastra, the area is called…"

Note where traditions agree and where they diverge. Do not synthesise a false consensus.

---

### Reading variations

*Required for line and mount articles. Use sub-headings as needed.*

Cover the most interpretively significant variations. For lines: endpoint, length, depth, curvature, markings (breaks, chains, islands, branches, forks). For mounts: development level (flat, proportionate, overdeveloped, soft vs. firm).

For each variation, give:
1. What it is (briefly)
2. The traditional interpretation, attributed to a source or tradition
3. Any important caveats or points where sources differ

Use `###` sub-headings for major variation categories (e.g., `### The endpoint`, `### Depth and clarity`). Use `**bold lead**` to introduce sub-variations within a section.

**Do not:** make predictive statements. "Is traditionally associated with…" not "means you will…"

---

### Cross-tradition note

*Required when there is genuine cross-tradition content to add. Optional otherwise.*

**Heading:** `## Cross-tradition note: [Tradition name]` (e.g., `## Cross-tradition note: Indian palmistry`)

Two to four paragraphs maximum. Name the concept accurately, give its Sanskrit or Chinese term with a brief gloss, describe what it adds that the primary discussion does not cover, and move on. Do not expand this into a survey of the entire tradition.

Brevity signals confidence. A throwaway dismissal is disrespectful; a long digression is unnecessary. Two accurate sentences are usually enough.

---

### In context

*Required.*

**Heading:** `## [Feature name] in context`

This is the synthesis section. No palmistry feature is read in isolation — explain which other features interact with this one and how. Name specific combinations and what the traditional reading would be. A concrete illustration of how two or three features interact is more useful than abstract generalisation.

This section is where you demonstrate that palmistry is a system, not a list of independent facts.

---

### Common myths

*Required.*

**Heading:** `## Common myths` or `## Common myths and oversimplifications`

List 3–5 myths. Format each as:

**"[The myth, in the form a reader might encounter it.]"** [Correction. What the tradition actually says. Why the myth is wrong or overstated.]

Myths should be drawn from common misconceptions actually in circulation — not invented for the sake of having something to correct. Check popular palmistry sites and FAQ searches to confirm the myths are real.

---

### Frequently asked questions

*Required for most articles. Optional for advanced or specialist articles where the FAQ format does not serve the content.*

**Heading:** `## Frequently asked questions`

3–6 questions. Format:

**[The question as a reader would ask it?]**
[Direct answer in plain prose. Then nuance if needed. Apply the same editorial standards as the rest of the article — no predictive claims, no myths.]

Questions should:
- Reflect genuine search queries
- Correct myths where relevant
- Not introduce claims that were not covered in the article body

---

### What comes next

*Optional. Use for articles that are part of a numbered series, or where there is a natural next article in the learning path.*

**Heading:** `## What comes next`

One or two short paragraphs directing the reader to the next logical step: the next article in a series, the related lesson, or a topic that builds naturally on what this article covered. Keep it navigational, not salesy.

---

### Sources note

*Required. Place at the very end of the article, after all sections.*

No heading. Italicised. Format:

```
*Sources consulted: Cheiro, Palmistry for All (1916); William G. Benham, The Laws of Scientific Hand Reading (1900); Fred Gettings, The Book of the Hand (1965); Peter West, The Complete Illustrated Guide to Palmistry (1998).*
```

Include only sources actually consulted for the article. Add secondary sources after the primary four where relevant, naming the author and work. Do not cite general web pages as sources unless the specific practitioner and their named work are being cited.

---

## Full Article Skeleton

Copy this and fill in:

```markdown
---
title: ""
description: ""
pubDate: YYYY-MM-DD
cluster: ""
relatedLesson: ""
---

[Opening: orient reader, note what is commonly misunderstood, signpost prerequisites if relevant.]

## Where to find it

[Location on hand, anatomical description, adjacent features for orientation.]

## What it's traditionally associated with

[Core interpretive domain, cited to named sources and traditions. Note agreement or disagreement between traditions.]

## [Reading variations heading — customise per article type]

### [Sub-heading: e.g., The endpoint]

**[Sub-variation label]** — [Traditional interpretation, attributed.]

**[Sub-variation label]** — [Traditional interpretation, attributed.]

### [Sub-heading: e.g., Length]

[Discussion.]

## Cross-tradition note: [Tradition]

[Two to four paragraphs. Name concept, brief gloss, what it adds, move on.]

## [Feature name] in context

[Synthesis section. How this feature reads with adjacent features. Concrete illustration.]

## Common myths

**"[Myth one.]"** [Correction.]

**"[Myth two.]"** [Correction.]

**"[Myth three.]"** [Correction.]

## Frequently asked questions

**[Question one?]**
[Answer.]

**[Question two?]**
[Answer.]

**[Question three?]**
[Answer.]

## What comes next

[Optional. Navigate reader to next article or lesson.]

---

*Sources consulted: [List sources in order of citation weight.]*
```

---

## FAQ Structure Reference

```markdown
## Frequently asked questions

**Where is the [feature name] on the palm?**
[Anatomical location, plain language.]

**What does a [variation] [feature] mean?**
[Direct traditional interpretation. Note if tradition disagrees internally.]

**Does [feature] [common predictive claim]?**
[Correction. What it actually reflects in the tradition.]

**Can [feature] [related myth query]?**
[Clear answer. Cite tradition or named source where helpful.]
```

---

## Sources Section Pattern

Standard format (place at foot of article, no heading, italic):

```
*Sources consulted: Cheiro, Palmistry for All (1916); William G. Benham, The Laws of Scientific Hand Reading (1900); Fred Gettings, The Book of the Hand (1965); Peter West, The Complete Illustrated Guide to Palmistry (1998).*
```

If additional sources were consulted, append them after the primary four:

```
*Sources consulted: Cheiro, Palmistry for All (1916); William G. Benham, The Laws of Scientific Hand Reading (1900); Fred Gettings, The Book of the Hand (1965); Peter West, The Complete Illustrated Guide to Palmistry (1998); Lori Reid, The Art of Hand Reading (1996); [Practitioner Name], "[Article Title]."*
```

Omit sources from the list if they were not actually used. Do not list sources for prestige — only sources that contributed to the article's content.

---

## Internal Link Checklist

Before publishing, confirm:

- [ ] The article links to the relevant **major lines overview** or **mounts overview** if it covers an individual line or mount
- [ ] The article links to **How to Read a Palm** if it is beginner-level content that assumes some foundational context
- [ ] `relatedLesson` is set in frontmatter if a corresponding lesson exists
- [ ] No page is linked to more than once
- [ ] Anchor text is descriptive ("the overview of the major lines") not generic ("this article", "click here")
- [ ] Links in the opening signpost are to genuinely necessary foundational articles — not to every loosely related piece
- [ ] No link opens to an article that does not yet exist (check the file path)

---

## Audit Checklist Before Publishing

Run through this list before marking any article ready to commit.

### Content

- [ ] Every claim traces to a named tradition or named classical source
- [ ] No predictive language ("will," "predicts," "reveals your future")
- [ ] No medical claims
- [ ] No relationship count claims (number of marriages, relationships, children)
- [ ] No lifespan claims (the life line does not indicate how long you will live)
- [ ] Cross-tradition content names the tradition accurately and uses correct terminology
- [ ] Genuine disagreement between traditions is named and presented, not synthesised away
- [ ] Common myths section addresses myths that are actually in circulation
- [ ] FAQ answers apply the same standards as the main body

### Frontmatter

- [ ] `title` is specific, under ~60 characters for the tag, and contains no predictive language
- [ ] `description` is 140–160 characters, plain, and accurately describes the article
- [ ] `pubDate` is set to the publication date (YYYY-MM-DD)
- [ ] `cluster` is set to the appropriate value
- [ ] `relatedLesson` is set if a lesson exists; omitted otherwise

### Structure

- [ ] Article opens with orientation, not a definition
- [ ] Heading hierarchy is correct: `##` for major sections, `###` for sub-sections, `####` only if genuinely needed
- [ ] No H1 in the body (the `title` frontmatter field provides the H1)
- [ ] Sources note is present at the foot of the article, italicised, no heading
- [ ] Word count is appropriate: 800–1,200 words for focused articles; 1,200–2,000 words for comprehensive feature articles; no padding

### Internal links

- [ ] All items on the internal link checklist above are complete

### Voice

- [ ] Tone matches the site: educational, grounded, curious, atmospheric but not woo-woo
- [ ] No salesy language, no false urgency
- [ ] No invented social proof
