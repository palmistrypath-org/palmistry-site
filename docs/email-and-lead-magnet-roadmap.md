# Email Segmentation and Lead Magnet Roadmap — Palmistry Path

*Internal planning document. Not for publication. Last updated: 2026-05-28.*

---

## Overview

This document covers the full email strategy for Palmistry Path: how to segment subscribers, what to track in Kit, how to expand the lead magnet suite, how to branch the welcome sequence, what cadence to maintain, how to run the Worksheet Pack launch sequence, and what never to send.

**Platform:** Kit (formerly ConvertKit). All email copy is plain-text style — no HTML formatting, no emojis.

**Tone across all emails:** Educational, calm, grounded. Mystical in atmosphere but not woo-woo. Never salesy. No fake urgency, countdown language, or scarcity claims unless genuinely true.

**Phrasing rules:** Apply site editorial standards throughout — "traditionally associated with," "often interpreted as," "may suggest." Never predict the future. No medical, legal, or financial claims.

---

## 1. Subscriber Segments

Five segments cover the realistic range of Palmistry Path subscribers. Segments are behavioural, not demographic — they describe how someone uses the site and what they want from email.

---

### Curious Beginner

**Who they are:** Just signed up, likely arrived via organic search for something specific — "what does my life line mean," "how to read your palm," "broken heart line meaning." May have little prior exposure to palmistry beyond cultural osmosis. Signed up for the Starter Guide because it felt low-commitment.

**How they behave on the site:** Reads one or two blog posts, probably about major lines. May not have visited the Learn section. Unlikely to have explored mounts or minor lines. Session depth is shallow but they did convert to email.

**What they want from email:** Orientation. A sense that palmistry is learnable, not mystical gatekeeping. Clear, jargon-free explanations. Quick wins — "here is one thing to look for on your hand right now." They want to feel like they understand something they did not before.

**What NOT to send them:** Cross-tradition comparison (too much friction too soon), advanced minor lines content, product offers before trust is built, insider terminology without explanation. Do not pitch the Worksheet Pack until they have engaged with at least one lesson sequence.

---

### Self-Reader

**Who they are:** A returning subscriber who comes back to the site regularly to look something up — checking what a line configuration means, comparing their mounts, revisiting a lesson. Reads their own hand and treats the site as a reference resource. Not necessarily on the beginner track anymore but not pursuing deep study either.

**How they behave on the site:** Higher return visit rate, browses multiple pages per session, likely has bookmarked specific articles. Clicks email links going to specific reference content (line variations, mount descriptions). May have completed parts of the Learn curriculum.

**What they want from email:** New content they can apply immediately to their own hand. Variations and nuances — "what if you have X and Y together." Occasional depth on a topic they already know a little about. Respect for the fact that they are not starting from zero.

**What NOT to send them:** Beginner re-orientation, "what is palmistry" framing, welcome-sequence-style content. They are already engaged readers. Oversimplification is the fastest way to lose them.

---

### Tradition-Focused Learner

**Who they are:** Drawn to palmistry as a cultural and historical subject. Interested in how different traditions classify the same features differently, in Sanskrit terminology, in how Cheiro's system differs from Indian practice. May have an academic or anthropological bent, or simply find the comparative angle more compelling than the "read your own hand" framing.

**How they behave on the site:** Reads cross-tradition sections carefully. Clicks through to articles about Indian or Chinese palmistry specifically. Engages with content that names sources. May reply to emails with questions about historical context.

**What they want from email:** Deep dives on tradition-specific content. Source-cited material. Honest acknowledgment of where traditions disagree rather than synthesised consensus. They notice when you gloss over a real distinction and will disengage if the content feels oversimplified.

**What NOT to send them:** Purely practical "how to read your hand tonight" content with no historical grounding. Product pitches that are purely exercise-driven (the Worksheet Pack is not for them unless it has comparative content). Generic palmistry overviews they have already absorbed.

---

### Worksheet / Practice Learner

**Who they are:** Learns by doing. Wants structure, exercises, and something to work through. May have found the site via the Learn curriculum rather than blog search. Further along the beginner curve and actively trying to build a skill, not just satisfy curiosity.

**How they behave on the site:** Spends time in the Learn section. Completes lessons sequentially. May revisit exercises. Likely to click any link that promises something hands-on. Higher engagement with content that has a clear action to take.

**What they want from email:** Structured sequences. Practice prompts. "This week, look at X on your hand and note Y." Content that functions as a lightweight curriculum extension. They want to feel like they are making progress.

**What NOT to send them:** Passive reading content with no application layer. Historical deep dives without a practical hook. Anything that feels like more information without a way to use it.

**Product fit:** This segment is the primary audience for the $7 Worksheet Pack. Offer it once they have engaged with at least one Learn module. Frame it as structured practice, not a shortcut.

---

### Future Buyer

**Who they are:** Engaged subscriber with a high open rate and a pattern of clicking product-adjacent links — the Worksheet Pack teaser in the welcome sequence, any mention of paid resources. Have not bought yet but the signal pattern says they are close.

**How they behave on the site:** Multiple visits, reads beyond the entry-point content, explores the Learn curriculum. If they clicked the Worksheet Pack link and did not buy, they considered it.

**What they want from email:** Continued value delivery — do not go quiet on them. A clear, low-pressure product mention at the right moment. Specificity about what the product contains and what it helps them do. They do not need urgency tactics; they need enough information to make a low-stakes decision on a $7 purchase.

**What NOT to send them:** High-pressure sequences, artificial scarcity, countdown timers. This audience reads the site because they trust its educational tone — break that tone and you lose the sale and the subscriber.

---

## 2. Tags and Events to Track in Kit

### Sign-Up Source Tags

| Tag | Trigger |
|---|---|
| `source::starter-guide` | Subscribed via the /guide/ opt-in form |
| `source::line-variation` | Subscribed via the Line Variation Checklist (Worksheet 3) opt-in |
| `source::hand-observation` | Subscribed via the Hand Observation Sheet (Worksheet 1) opt-in |
| `source::minor-lines` | Subscribed via the Minor Lines Spotter Sheet opt-in |
| `source::heart-line-guide` | Subscribed via the Heart Line Mini Guide opt-in |
| `source::mounts` | Subscribed via the Mount Identification Worksheet opt-in |
| `source::vocabulary-card` | Subscribed via the Vocabulary Card opt-in |
| `source::blog-inline` | Subscribed via an inline form embedded in a blog post |
| `source::blog-footer` | Subscribed via the footer opt-in on a blog page |
| `source::learn-inline` | Subscribed via an opt-in inside a lesson page |
| `source::homepage` | Subscribed via the homepage hero or footer form |

---

### Behaviour Tags — Content Engagement

Applied when a subscriber clicks a link in an email going to the relevant content category.

| Tag | Trigger |
|---|---|
| `clicked::major-lines` | Clicked any email link going to a heart, head, life, or fate line article |
| `clicked::minor-lines` | Clicked any email link going to a minor lines article |
| `clicked::mounts` | Clicked any email link going to a mount article or the mounts curriculum module |
| `clicked::hand-shapes` | Clicked any email link going to the hand shapes article or foundations module |
| `clicked::cross-tradition` | Clicked any email link going to an Indian, Chinese, or cross-tradition comparison article |
| `clicked::learn-curriculum` | Clicked any email link going to /learn/ or any lesson page |
| `interest::mounts` | Applied after two or more `clicked::mounts` events within 30 days |
| `interest::lines` | Applied after two or more `clicked::major-lines` or `clicked::minor-lines` events within 30 days |
| `interest::traditions` | Applied after two or more `clicked::cross-tradition` events within 30 days |
| `interest::practice` | Applied after clicking a practice prompt or exercise CTA in any email |
| `engaged::high-open-rate` | Applied after opening 4 of the last 5 emails sent |
| `sequence::welcome-complete` | Applied after the 5th welcome email is delivered |

---

### Product Tags — Purchase and Interest

| Tag | Trigger |
|---|---|
| `interest::worksheet-pack` | Clicked the Worksheet Pack link in any email without purchasing |
| `buyer::worksheet-pack` | Completed purchase of the $7 Worksheet Pack (applied via Kit purchase trigger or webhook) |
| `offer-shown::worksheet-pack` | Applied when the Worksheet Pack pitch email is sent — prevents resending the same offer |

---

### Exclusion and Suppression Tags

| Tag | Trigger |
|---|---|
| `suppress::product-pitch` | Applied to subscribers who have been on the list 90+ days without a product click — holds them out of product sequences while keeping them on the newsletter |
| `suppress::beginner-content` | Applied after `interest::lines` and `interest::mounts` are both present — stops routing into beginner orientation emails |
| `bounced::soft` | Applied on second soft bounce — monitor before moving to hard suppression |
| `unsubscribed::product-sequence` | Applied if subscriber unsubscribes from a product sequence but opts to stay on the general list |

---

## 3. Segment-to-Content Matching

| Segment | Newsletter content they want | Lead magnets that suit them | Product offers to show |
|---|---|---|---|
| **Curious Beginner** | Major lines explainers, hand shape overviews, orientation pieces, myth-busting content | Starter Guide (already have it); "Which hand do I read?" one-pager; Vocabulary Card | None until welcome sequence is complete; soft Worksheet Pack mention at end of Email 5 |
| **Self-Reader** | Line variation deep dives, mount combinations, "what if you have X and Y," reference-style content | Quick-reference downloads (line glossary, mount summary card, Minor Lines Spotter Sheet) | Worksheet Pack framed as "a structured way to go deeper on what you already know" — mid-list timing |
| **Tradition-Focused Learner** | Cross-tradition comparison articles, historical framing, Sanskrit terminology, source-cited content | Future tradition-comparison guide or Indian palmistry module preview | Not the Worksheet Pack unless it contains tradition-specific content; hold for a future tradition-focused product |
| **Worksheet / Practice Learner** | Practice prompt emails, lesson extension content, "this week try X," curriculum module announcements | Starter Guide; any practice-focused download; Mount Identification Worksheet | $7 Worksheet Pack — primary offer; send after first `interest::practice` tag is applied; frame as structured practice |
| **Future Buyer** | Continued value delivery across topics they have shown interest in; one calm product mention every 4–6 weeks | No additional lead magnets needed — focus on removing friction to purchase | $7 Worksheet Pack with specifics: what is in it, what it helps them do; one follow-up email if no purchase within 7 days, then return to standard cadence |

---

## 4. Welcome Sequence Branching

The current welcome sequence is linear (5 emails, same for everyone). The branching strategy below personalises Emails 1–3 based on sign-up source, then converges everyone at Email 4.

### Branching Principles

- Kit implementation: one visual automation, triggered on list join, with a tag-check conditional at the entry point routing subscribers into their branch
- Lead magnet delivery is the first email in each branch (Day 0, send immediately)
- Subsequent emails use Kit's delay steps relative to subscribe date, not to previous email open
- Emails 4 and 5 are shared across all branches (see Email 5 notes per branch)
- All branches converge onto the main broadcast list after Email 5 is sent

---

### Branch A — Default (Starter Guide subscribers)

**Trigger:** `source::starter-guide` or no recognised source tag (fallback)

This is the existing 5-email sequence. Described here for reference.

| # | Subject | Send timing |
|---|---|---|
| 1 | Your guide is on its way | Day 0 |
| 2 | Which hand do you read? | Day 3 |
| 3 | What do the lines actually mean? | Day 6 |
| 4 | There's more to a hand than lines | Day 10 |
| 5 | The gap between knowing and seeing | Day 14 |

Email 5 in this branch: standard Worksheet Pack teaser — "seven structured recording sheets for your own practice, $7."

---

### Branch B — Lines-First Branch

**Triggers:** `source::line-variation` or `source::heart-line-guide`

These subscribers arrived via specific line content. They are not absolute beginners. The default sequence's Emails 2 and 3 risk feeling remedial. This branch respects their existing knowledge.

| # | Subject | Send timing |
|---|---|---|
| 1 | Your checklist is attached — and a note on what to do with it | Day 0 |
| 2 | The two hands — and why both matter for line reading | Day 2 |
| 3 | Minor lines, major context — what to check alongside the line you're reading | Day 5 |
| 4 | There's more to a hand than lines *(shared)* | Day 9 |
| 5 | The gap between knowing and seeing *(branch-specific copy)* | Day 14 |

**Email 5 copy note for this branch:** These subscribers already have Worksheet 3. Acknowledge this directly:

> "You already have Worksheet 3 — the line variation checklist. The full Worksheet Pack adds six more: one for each major line and mount group, plus a general observation sheet for recording both hands together. If Worksheet 3 was useful, the rest work the same way."

No urgency language. No "limited time." The framing is: "here is what else exists, in case it is useful."

---

### Branch C — Observation and Practice Branch

**Triggers:** `source::hand-observation` or `source::mounts`

These subscribers opted in at an observational entry point. The default sequence works reasonably well but Emails 2 and 3 can be reordered for better fit.

| # | Subject | Send timing |
|---|---|---|
| 1 | Your sheet is attached — here is how to get the most from it | Day 0 |
| 2 | Before you read the lines — what the shape of the hand can tell you | Day 2 |
| 3 | What do the lines actually mean? *(shared)* | Day 5 |
| 4 | There's more to a hand than lines *(shared)* | Day 9 |
| 5 | The gap between knowing and seeing *(standard copy)* | Day 14 |

**Email 5 copy note for this branch:** Standard Worksheet Pack framing, referencing the observation sheet they already have:

> "The Hand Observation Sheet you downloaded is the starting point. The Worksheet Pack continues from there — seven sheets that take you through each line and mount region with the same structured format."

---

### Branch D — Specific-Interest Branch

**Triggers:** `source::minor-lines`, `source::vocabulary-card`, any other single-topic opt-in

These subscribers have a narrow entry point. They are curious but may not be committed learners yet. A lighter-touch sequence avoids overwhelming them before trust is established.

| # | Subject | Send timing |
|---|---|---|
| 1 | *(Lead magnet delivery — subject varies by magnet)* | Day 0 |
| 2 | How palmistry actually works — the framework behind what you're reading | Day 3 |
| 3 | Three things worth noticing on your own hand this week | Day 7 |
| 4 | There's more to a hand than lines *(shared)* | Day 11 |
| 5 | The gap between knowing and seeing *(standard copy, delayed)* | Day 16 |

The two-day delay on Email 5 gives this lighter-touch subscriber more time before a paid offer appears.

---

### Convergence

All branches converge onto the main broadcast list after Email 5. Source tags are not removed — they remain useful for segmenting future broadcasts (e.g., sending a new minor lines article only to `source::minor-lines` subscribers as a re-engagement gesture).

---

## 5. Lead Magnet Expansion Ideas

Six new lead magnets beyond the current Starter Guide, prioritised by production complexity and audience fit.

---

### LM-1: "The Five Major Lines — Quick Reference Card"

**Format:** Single-page printable PDF reference card

**Target segment:** Complete beginners who landed on a foundational article and want something to keep beside them while they practice

**Entry point:** Foundations module landing page (`/learn/foundations/`) and any major lines introductory article

**Complexity:** Low — content already exists across the curriculum; this is a distillation, not new writing. One designed card with line names, traditional locations, and one-line interpretive note per line.

**Worksheet Pack connection:** Natural gateway. The card tells you what to look for; the Worksheet Pack gives you structured space to record what you find. A single in-card footer note is sufficient: "Ready to go deeper? The full Worksheet Pack gives you seven guided recording sheets."

---

### LM-2: "Minor Lines Spotter Sheet"

**Format:** Single-page illustrated checklist PDF

**Target segment:** Readers who arrived via search for a specific minor line (Mercury line, Girdle of Venus, Via Lascivia, etc.) and are discovering their hand may have several minor lines they have not yet identified

**Entry point:** Any minor lines article — trigger the opt-in after the first two paragraphs or at the article end

**Complexity:** Low-to-medium — requires a clean hand diagram with minor lines labelled and a short checkbox list (present / absent / unclear) for each, plus a short traditional association note per line

**Worksheet Pack connection:** Strong upsell path. Minor lines are not covered in depth in the free worksheets. The Pack's more detailed recording sheets fill that gap directly.

---

### LM-3: "What Your Heart Line Shape May Reveal — A Guided Self-Observation"

**Format:** 2-page mini PDF guide with embedded reflection prompts

**Target segment:** Readers with specific search intent who landed on the heart line article ("curved heart line meaning," "heart line ends under index finger") and want a more personalised frame than a general overview

**Entry point:** The heart line article, positioned mid-article after the variations section

**Complexity:** Low — a small diagram of four or five common heart line termination points and curves, a self-check flow, and two reflection questions per variation. No lengthy prose.

**Worksheet Pack connection:** The mini guide is observation-focused but does not provide a full recording structure. Worksheet 3 (Line Variation Checklist) overlaps here — acknowledge this in the delivery email: "If you already have Worksheet 3, this guide works alongside it."

---

### LM-4: "Reading Your Active and Passive Hand — A Comparison Guide"

**Format:** 2-page PDF guide with side-by-side comparison prompts

**Target segment:** Readers past the absolute beginner stage who have started noticing differences between their hands; also an upgrade offer inside the welcome sequence for subscribers who have been engaging

**Entry point:** The active/passive hand article, or as a secondary opt-in on the Foundations module. Can also appear as an in-sequence upgrade in Emails 3–4 of the default welcome branch.

**Complexity:** Low — five major lines covered with two comparison prompts each, active/passive framing throughout (no gendered language)

**Worksheet Pack connection:** Demonstrates why recording both hands matters. The Worksheet Pack's recording sheets have columns for both hands, making the upsell direct: "The Worksheet Pack is designed for exactly this kind of comparative recording."

---

### LM-5: "Mount Identification Worksheet"

**Format:** Single-page worksheet PDF with a labelled hand diagram

**Target segment:** Readers who landed on a mount article (Venus, Jupiter, Saturn, Apollo, Mercury, Moon, Mars) and want to map their own hand's mount development before reading further

**Entry point:** Any mount article or the Mounts module landing page. High-traffic target — individual mount searches ("Venus mount meaning," "flat Jupiter mount") attract specific-intent readers.

**Complexity:** Low — one hand diagram with mount zones marked, a three-column table (Mount / Development: elevated, flat, soft, firm / Notes), brief note on how to assess development by feel and visual prominence

**Worksheet Pack connection:** The Pack's later worksheets go deeper into mount interpretation and cross-referencing with lines. This worksheet is the entry point — it builds vocabulary and practice comfort before the paid content extends it.

---

### LM-6: "The Palmistry Vocabulary Card — 25 Terms Explained Simply"

**Format:** Single printable reference card, front and back

**Target segment:** Readers who bounced between several articles encountering unfamiliar terms (phalanges, radial, ulnar, thenar, dermatoglyphics, etc.); also suited to searchers for "palmistry glossary" or "what does [term] mean in palmistry"

**Entry point:** A glossary article or a terminology sidebar on foundations content; can also be offered as a bonus inside the welcome sequence (Email 2) to all subscribers

**Complexity:** Very low — 25 terms, one-sentence traditional or anatomical definition each, grouped by category (anatomy, line names, quality terms, mount terms). No diagrams required, though a small hand anatomy label diagram would elevate it.

**Worksheet Pack connection:** Indirect — the vocabulary card makes the Worksheet Pack's language accessible. A brief note on the card: "The worksheets in the full Pack use this vocabulary throughout."

---

## 6. Newsletter Cadence

### Pre-Launch (0–250 subscribers)

**Frequency:** Twice monthly, sent on a consistent day.

Resist weekly sends. At this stage trust is still being established. Two quality sends per month signal reliability without exhausting a small audience that did not sign up expecting high volume.

**Content format:**
- Educational standalone pieces — one topic treated with depth: a minor line, a mount, a gesture in reading. Drawn from existing site content or upcoming articles, but written as self-contained email essays, not link-dumps.
- Practice prompts — a short section at the end of each email: "This month, observe one thing on your own hand." No worksheet required. Establishes the practice-first philosophy before the paid product exists.
- Occasional personal notes — brief first-person framing on why a topic matters or how it came up in the site's editorial process. Two or three sentences that feel like a letter, not a broadcast.

**Goals:**
- Build a habit of opening. Name recognition matters more than content volume at this stage.
- Establish the editorial standards (hedged language, cross-tradition notes, no prediction claims) so that when promotional email arrives, it does not feel like a different publication.
- Warm the list toward the practice orientation the Worksheet Pack is built around.

**What to avoid:**
- Weekly sends that thin content quality
- Teaser emails with nothing concrete to offer ("something exciting is coming — stay tuned")
- Repurposing article titles as subject lines verbatim — write for email, not the blog
- Mentioning subscriber counts or growth metrics to the audience

---

### Post-Launch / Early Growth (250–1,000 subscribers)

**Frequency:** Weekly, with one monthly "deeper read" replacing a regular send.

Once the paid product has launched and early customers exist, weekly contact is sustainable and expected.

**Content format:**
- Weekly: short-form educational — one hand feature, one tradition note, one observation prompt. Designed to be read in three minutes.
- Monthly: longer editorial piece — the kind that would work as a blog post. Sent to the full list, not segmented.
- Occasional: reader-submitted observations — invite readers to write in with what they noticed. Feature one per month (with permission). Signals that the site is genuinely interested in its readers' practice.
- Rare: product mention — the Worksheet Pack can appear in a PS line in regular sends or get a standalone email no more than once per quarter once it has been on sale for 30+ days.

**What to avoid:**
- A welcome sequence so long that new subscribers receive promotional email before a single non-promotional send
- Treating the launch sequence as a repeating quarterly funnel
- Inconsistent editorial voice across segments

---

### Mature List (1,000+ subscribers)

**Frequency:** Weekly, consistent. No increase in frequency.

Frequency creep is a fast way to train readers to stop opening. The brand is calm and educational; additional volume does not improve that signal.

**What changes:**
- New product development email — a single email per new product (future worksheet packs, a paid course module) to the full list. Not a sequence every time — sequences are for launches.
- Annual reader survey — one email per year asking what topics readers want covered. Short, no gamification, no prize. Treat responses as editorial input.
- Segment: curriculum track — readers who clicked lesson content get occasional curriculum-progress nudges. Readers who only open article emails do not.

**What stays the same:**
- Hedged, educational language in every email — no exceptions for "just a quick note" sends
- One clear purpose per email — never combine a launch announcement with an educational essay
- The PS as the only acceptable location for soft product mentions in non-promotional sends

---

## 7. Product Launch Sequence — Worksheet Pack

Five-email sequence. Build on the structure in `worksheet-pack-spec.md` Section 8, developed in full here.

---

### Email 1 — Plant the Idea

**Subject:** Something I've been putting together for you  
**Preheader:** It started as a note to myself about how I actually learn palmistry.  
**Send timing:** 10 days before launch

**Content direction:**
- Open with the problem the sheets solve: palmistry is taught as a list of meanings to memorise, and that is not how reading hands actually works. Personal, not a product pitch.
- Describe how the worksheet concept came from the site's own practice-first philosophy — the same orientation already present in the newsletter's observation prompts.
- Give a concrete example of what one sheet asks: compare the texture of your own palm to three reference descriptions, notice where the descriptions fall short.
- Close with "I'll share more about it next week" — not a countdown, not a link, not a CTA.

**Do not say:** "You're going to love this" — or any variation of audience-emotion prediction.

---

### Email 2 — Build the Case

**Subject:** Why I stopped trying to memorise the heart line  
**Preheader:** Observation is a skill. Memorisation just delays it.  
**Send timing:** 6 days before launch

**Content direction:**
- Lead with a genuine editorial claim: the reason most people plateau in palmistry is that they move from definition to definition without building a stable observational baseline.
- Draw a contrast between two approaches — rote association vs. structured observation — without being preachy. One short paragraph each.
- Reference a specific thing the worksheets ask readers to do, without naming the product yet: "tracking the same feature on ten different hands before reading anything about what it's supposed to mean."
- End with a light forward reference: one of the sheets is coming in the next email, free, no strings.

**Do not say:** "Most palmistry teachers won't tell you this" — or any variant of manufactured insider knowledge.

---

### Email 3 — Free Sheet

**Subject:** Here's one of the worksheets — no strings  
**Preheader:** Worksheet 1: Hand observation. A one-page practice sheet, yours to keep.  
**Send timing:** 3 days before launch

**Content direction:**
- Very short intro — one paragraph. The sheet is the email. Do not over-explain it.
- Deliver the download link clearly and early. Do not make the reader scroll for it.
- Brief note on how to use it: "Work through it once on your own hand before reading the notes at the bottom. The order matters."
- One line at the end acknowledging the rest of the pack exists: "The full set covers seven features. I'm releasing the complete pack on [day]. Details then."

**Do not say:** "This is just a taste of what's inside" — that framing is transactional. The sheet is a complete thing, not a sample.

---

### Email 4 — Launch

**Subject:** The Worksheet Pack is ready — seven sheets, $7  
**Preheader:** Printable, practical, and designed for self-study.  
**Send timing:** Launch day

**Content direction:**
- State the offer in the first three lines: seven practice sheets, $7, here is the link. Do not make the reader hunt.
- List the seven worksheet topics plainly — what each one covers, one line each. No benefit-stacking language, no superlatives.
- One paragraph on who this is for: "People who want to move from reading definitions to making their own observations. Not beginners who have not touched palmistry yet, and not advanced readers who have already built a practice."
- Single CTA, repeated once at the top and once at the bottom. No urgency language, no price-anchoring, no "limited time."

**Do not say:** "This won't be available forever" or any scarcity framing — the product has no artificial limit and the audience will remember.

---

### Email 5 — Soft Close

**Subject:** A thought on what practice actually looks like  
**Preheader:** Not a sales email. A reflection on why structured observation is hard.  
**Send timing:** 3 days after launch

**Content direction:**
- Write as if the launch has already happened and you are moving on — because you are. This is not a "last chance" email.
- Reflect honestly on the difficulty of building a consistent palmistry practice: the tendency to skip steps, to read about hands instead of looking at them, to collect more knowledge without integrating what is already there. Personal experience, not coaching.
- One brief paragraph acknowledging the pack exists and linking it, framed as: "For anyone who found last week's email useful and has not had a chance to look yet."
- Close on something forward-looking: the next article or lesson in the curriculum, a topic you are researching, what is coming to the site. Signal that the publication continues on its own terms.

**Do not say:** "This is your last chance" — or anything implying the product disappears. It does not. Do not imply it does.

---

## 8. What Not to Send

### Content That Violates Editorial Standards

- Emails making medical claims about palmistry features. This includes framing certain lines as indicating "health tendencies," "constitutional strength," or "vitality markers" in ways that could influence health decisions.
- Subject lines or preheaders that imply predictive ability: "What your lifeline says about your future," "Read your heart line to understand your relationships."
- Any email that synthesises a false consensus across traditions. If Western and Indian palmistry classify a feature differently, the email either notes the disagreement or covers one tradition accurately and names it. Never: "All traditions agree that..."
- Emails that quote Cheiro as though his early 20th-century frameworks are current practice without the brief historical framing the site's editorial standards require.
- Content that attributes palmistry meanings without a source. "Some practitioners associate X with Y" is not enough. Name the tradition or text.

---

### Email Tactics That Clash with the Brand

- Countdown timers in any email, including launch sequences. The Worksheet Pack has no expiry. Any urgency framing is false.
- Scarcity language of any kind: "Only a few spots left," "selling out fast," "high demand." Digital products do not sell out.
- Re-engagement sequences framed as "We miss you" or "Are you still interested?" If subscribers are inactive, a single honest note asking whether they want to stay is acceptable. A drip sequence is not.
- Open-loop subject lines designed to create anxiety: "I need to tell you something," "This is important," "Can I be honest with you?" These exploit attention and are inconsistent with the brand's calm tone.
- PS lines that introduce a new product pitch not mentioned in the body. The PS is for soft reminders of things already discussed, not reveals.
- Multi-email hard-sell sequences. The launch sequence ends after Email 5. There is no follow-up to the follow-up.

---

### Audience-Trust Issues

- Import, purchase, or seed the list with any contacts who did not explicitly opt in to Palmistry Path emails. No partner swaps, no cross-promotions that add subscribers without direct consent.
- Subject lines that misrepresent the email's content: a subject that implies a personal reply when it is a broadcast. "Re: your question about the heart line" sent to 800 people is deceptive.
- Segment the list in ways that produce meaningfully different editorial voices — one segment gets the calm, educational Palmistry Path, another gets a pushier promotional version. The voice is consistent across all sends.
- Report open rates or subscriber milestones to the audience as social proof: "Thousands of readers already know this." The site does not use its own growth as a credibility signal.
- Send automated emails that are written to sound like they were triggered by something the reader just did when they were not.

---

### Product-Specific Limits — Worksheet Pack

When promoting the Worksheet Pack, never:

- Claim it will "transform" or "accelerate" someone's palmistry practice. Educational materials support practice; they do not guarantee outcomes.
- Imply the worksheets contain secret or proprietary knowledge unavailable elsewhere. They are structured practice tools, not a revelation.
- Use before/after framing: "Before I started using these sheets / After six weeks." The brand does not use testimonial structures.
- Price-anchor against other palmistry products or courses: "Other courses charge $200 for less." The $7 price is stated plainly; it needs no comparison to justify it.
- Describe the worksheets as "suitable for all levels" — they are designed for beginners to early-intermediate learners. Name the actual intended audience accurately.
- Send more than one follow-up email after the launch sequence closes. Readers who wanted it bought it. Readers who did not have made their decision.

---

## Related Documents

- `docs/email-welcome-sequence.md` — the full 5-email default welcome sequence (copy and Kit setup notes)
- `docs/worksheet-pack-spec.md` — Worksheet Pack product specification (launch criteria, worksheet briefs, distribution)
- `docs/seo-content-roadmap.md` — content pipeline that feeds lead magnet entry points
