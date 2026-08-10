# Palmistry Path — Full Site Audit (August 2026)

**Auditor:** Claude (Opus), independent pass
**Date:** 2026-08-09
**Branch:** `audit/claude-full-site`
**Status:** Audit only. No production file was modified. No imagery was generated.

> This audit was produced **without reading, searching for, or coordinating with** the separate Codex technical audit, in order to preserve an independent second opinion. Where the two disagree, treat the disagreement as signal.

## Method and evidence basis

- **Rendered** 16 page states in a real Chromium browser against `npm run dev`, at 1440px and 676px widths, plus computed-style/layout measurement at a true 375px mobile viewport.
- **Measured** rather than assumed: contrast ratios, tap targets, image box sizes, prose measure, and document heights were read from the live DOM.
- **Built** the site (`npm run build`, 94 pages, clean) and ran `npm run audit`, `audit:images`, `audit:schema`, `content-audit` — all pass.
- **Inventoried** all 22 lessons and all 53 blog posts (frontmatter, headings, word counts) and the full `public/images` + `public/downloads` asset tree.
- **One** narrowly targeted external verification was performed (identified inline at 8.1); no other web research was done.

**Rendered sample:** `/`, `/learn`, `/learn/lines`, `/learn/lines/02-heart-line` (top, figure, footer), `/learn/mounts/02-mount-of-venus`, `/blog`, `/blog/beginner/life-line` (top and footer), `/glossary`, `/search`, `/about`, `/guide`, `/guide/thank-you`, `/premium-guide` (hero and waitlist).

**Severity:** P0 Critical · P1 High · P2 Medium · P3 Low
**Confidence:** Confirmed · Likely · Needs Verification
**Type:** code · content · UX/layout · visual assets · research · documentation

### Second-pass addendum (2026-08-09, later session)

A second independent Claude pass was run over the same commit. It reproduced this report's findings on the duplicate 25.9 MB PDFs, the shared Kit form ID, the bypassable email gate, the ~11 MB of homepage PNGs, the orphaned mounts SVGs, the alt-text-as-prompt problem, the module/lesson difficulty mismatch, and the unrendered `prerequisites` — independently, before reading this document. It also **independently re-verified the P0 at 3.1**: `curl -L https://palmistrypath.gumroad.com/l/complete-reference` returns **HTTP 404** with no redirect.

That pass surfaced findings this report did not contain. They are added in place, using new numbers at the end of the relevant sections so that no existing cross-reference is renumbered: **8.11–8.13** (source provenance — the most significant addition), **5.9–5.11** (curriculum topic gaps), **4.14**, and **13.6–13.7**.

One correction to a claim *not* made here but worth recording, because it was tested and is false: **there is no thin content in the blog.** Measured on body text with frontmatter stripped, the shortest of the 53 posts is `girdle-of-venus.md` at 1,310 words; the next three are 1,320 / 1,391 / 1,431. An automated word count that reported ~269 words for `palmistry-beginner-mistakes.md` was counting frontmatter only and is wrong. No post needs expanding on length grounds.

---

## 1. Executive summary

Palmistry Path is a **genuinely good product with a broken storefront and an unfinished visual system.**

The editorial core is the strongest thing here and it is not close. The curriculum is real: 22 lessons, 2,450–3,400 words each, in a correct pedagogical order, with hands-on second-person instruction ("hold your hand palm-up," "trace it now") that no competitor SEO article layer replicates. The hedging discipline — "traditionally associated with," "often interpreted as" — holds across 75 content files with only three mild lapses. The site actively debunks the two myths that drive most palmistry traffic (life line = lifespan, marriage lines = number of relationships). `advanced/04-how-to-give-a-reading.mdx` is an exemplary ethics document. Cross-tradition handling is careful and explicitly refuses to manufacture consensus. The lesson reading experience at desktop is well-crafted.

What has decayed is everything wrapped around that core. The single paid CTA — surfaced in the footer of all 94 pages — **points at a Gumroad URL that returns HTTP 404**, on a page that simultaneously charges $14 and says the product is "in final preparation." The privacy policy states the site uses no advertising networks while Google AdSense auto-ads run on every page including that policy. The `/contact` page's entire content is "Contact details coming soon." The About page lists five primary sources, two of which (Altman, Gile & Lenard) are cited nowhere in 75 content files, while the two most-cited sources (West, 52 files; Fincham, 40 files) are omitted — on a site whose whole differentiator is sourcing integrity.

The visual system is three incompatible systems pretending to be one: the Lines module has elaborate AI-generated poster art with instructional text baked into raster pixels and unhedged claims printed on the image; the Mounts module has eight orphaned placeholder SVGs that no page references; Foundations and Advanced have no imagery at all; and 53 blog posts have zero images. Meanwhile the homepage ships ~10.5 MB of PNGs that render at 38% opacity or are invisible behind an overlay.

**Overall health: strong content, weak product surface.** Nothing here requires rewriting the curriculum. Most of the highest-severity findings are small, bounded fixes to trust-critical surfaces — a broken link, a false privacy claim, a contradictory sales page, a missing contact address. The larger structural questions (lesson/article duplication, visual asset strategy) are real but are judgment calls, not emergencies.

**One qualification added by the second pass**, because it cuts against the paragraph above. The editorial *writing* is as disciplined as this summary claims. The *sourcing* is not, and the two were initially assessed as one thing. Nine articles cite commercial astrology blogs and SEO content farms in the same undifferentiated list as Cheiro and Benham; the Chinese and Indian tradition articles carry a Western-only bibliography identical to the Western article's; and `heart-line.md:57` vouches in body prose for a commercial palmistry blogger as someone "who reads the classical texts closely." Combined with the About page naming two books the content never cites (3.4), the site's central differentiator — that its claims are traceable — is the thing least able to survive a reader actually checking. That reframes §8 from "strongest dimension, minor caveats" to "strongest writing, weakest evidence chain," and it belongs in the first tier of work alongside the trust fixes, not in a research backlog. See 8.11–8.13.

---

## 2. What is currently strong

Recording this explicitly so it is not accidentally "fixed."

| # | Strength | Evidence |
|---|---|---|
| S1 | **Editorial hedging discipline is exceptional and consistent.** Site-wide use of "traditionally associated with" / "may suggest" / "often interpreted as," exactly as the style guide prescribes. Only three mild lapses found across 75 files. | Sampled across all 22 lessons + 12 high-risk blog posts |
| S2 | **Traditions are kept genuinely distinct, and disagreement is allowed to stand.** | `lessons/lines/01-major-lines-overview.mdx:90` "the interpretive systems built around them are distinct traditions, not competing translations of one truth"; `lessons/mounts/01-mounts-overview.mdx:94`; `blog/beginner/western-palmistry-basics.md:73` |
| S3 | **The site self-audits at least one attribution it cannot confirm** rather than quietly asserting it — rare and commendable. | `lessons/lines/05-fate-line.mdx:55` |
| S4 | **Ethical framing of readings is exemplary** and should be the model the rest of the site is measured against. | `lessons/advanced/04-how-to-give-a-reading.mdx` |
| S5 | **Lesson sequencing is correct and continuous.** Prev/next chains across all 22 lessons in true curriculum order (foundations → lines → mounts → advanced), not alphabetical. Prerequisites form a clean chain with no dangling slugs. | `src/pages/learn/[module]/[lesson].astro:35-40` sorts by `MODULES.findIndex` |
| S6 | **Lesson page UX is well-built**: breadcrumb, "Lesson 2 of 6 in The Lines," difficulty · duration, progress rail, next/prev, related-article aside. | Rendered `/learn/lines/02-heart-line` |
| S7 | **Lessons teach observation, not lookup.** Embodied second-person instruction is absent from every blog counterpart — this is real pedagogy, not reformatted article copy. | All 22 lessons |
| S8 | **Glossary is a genuine asset** — definitions plus cross-links into both lessons and articles. | Rendered `/glossary` |
| S9 | **Blog index information architecture is good**: 10 named clusters, counts, jump-chips with working anchors. | Rendered `/blog`; anchors `#major-lines` etc. verified in `dist/blog/index.html` |
| S10 | **Forms degrade without JavaScript.** Both signup forms keep a real `action` and `method`, so a JS failure still subscribes. | `guide.astro:503-504`, `premium-guide.astro:446-447` |
| S11 | **Landmarks, heading hierarchy, and link text are sound.** One `h1` per page, labelled `nav` landmarks, no "click here" links, `alt` is a required prop on `Figure`. | `Header.astro:6-7`, `Footer.astro:5,8`, `Figure.astro:2-8` |
| S12 | **Build and all four repo audits pass cleanly.** 94 pages, no broken internal links, no missing images, valid JSON-LD on 53 articles + 22 lessons. | `npm run build`, `audit:all`, `content-audit` |
| S13 | **Body typography is well-judged**: 20px Lora on a 720px measure (~60–68 characters) at desktop, dropping to 18px below 720px. Base text contrast is 13.9:1. | `global.css:29,33-38,140-143` |
| S14 | **Mobile layout has no horizontal overflow** at 375px, and nav tap targets measure 113×51px. | Measured at 375px viewport |
| S15 | **The most-cited sources are the right ones.** Cheiro (72 files), Benham (66), Gettings (66), West (52), Fincham (40) — era-appropriate and voice-consistent throughout. | `grep` across `src/content/` |

---

## 3. Highest-risk problems

These are the findings that damage trust, mislead a buyer, or make a legal claim that is not true. They are listed in the order I would fix them.

### 3.1 — The paid product link is dead (P0)
**Area:** Conversion · **Confidence:** Confirmed · **Type:** code
`PREMIUM_GUIDE_URL` in `src/consts.ts:18` resolves to `https://palmistrypath.gumroad.com/l/complete-reference`, which returns **HTTP 404**. This link is the target of both `$14` CTAs on `/premium-guide`, the upsell on `/guide/thank-you:294`, and the "Complete Reference" link in the **footer of all 94 pages**.
**Direction:** Either publish the Gumroad product, or set `PREMIUM_GUIDE_URL` to empty and let `/premium-guide` fall back to waitlist-only until it exists. Do not leave a priced CTA pointing at a 404.

### 3.2 — `/premium-guide` contradicts itself about whether the product exists (P0)
**Area:** Conversion · **Confidence:** Confirmed · **Type:** content
The same page states, above the fold: **"$14 · One-time purchase — PDF, yours to keep"** with a CTA and "Secure checkout. Instant PDF download." Further down (`premium-guide.astro`, "Get notified when it's available") it states: **"The Complete Reference is in final preparation. Leave your email and we'll send you a link the moment it's ready — plus an early-access discount."** Immediately beneath that waitlist form sits a *second* $14 buy button.
A visitor cannot tell whether the product is purchasable. Worse, someone who joins the waitlist *for an early-access discount* is then shown a full-price button. Combined with 3.1, a motivated buyer's best case is confusion and their likely case is a 404.
**Direction:** Pick one state — presell, waitlist, or on sale — and make the whole page express it.

### 3.3 — The privacy policy makes a false statement about advertising (P0)
**Area:** Trust / legal · **Confidence:** Confirmed · **Type:** content
`src/pages/privacy.astro:48-49`: *"We do not use analytics services, advertising networks, or tracking pixels."* And at line 78: *"Palmistry Path does not set tracking or analytics cookies."*
Google AdSense is live sitewide — `ADSENSE_PUB_ID` is set in `consts.ts:13` and `BaseHead.astro:31-34` injects the auto-ads script into **every page, including `/privacy` itself**. AdSense is an advertising network that sets cookies and performs behavioural tracking. The policy still reads "Last updated: May 2026," predating AdSense activation (commit `fdad29c`).
**Direction:** Rewrite the advertising and cookie sections to describe AdSense accurately, and update the date. This is also an AdSense programme-policy expectation, not only an ethical one.

### 3.4 — The About page's sourcing claim does not match the site's actual sourcing (P1)
**Area:** Accuracy / trust · **Confidence:** Confirmed · **Type:** content
`src/pages/about.astro` "Sources" lists: Cheiro *Language of the Hand* (1894), Benham (1900), Gettings (1965), **Nathaniel Altman (1995)**, **Gile & Lenard (1999)** — and closes with *"Where a claim cannot be traced to a tradition or source, it is not included."*

Measured against the corpus:

| Source | Listed on About | Files citing it |
|---|---|---|
| Cheiro | yes (as 1894 *Language of the Hand*) | 72 — but the content cites *Palmistry for All* (1916) |
| Benham | yes | 66 |
| Gettings | yes | 66 |
| **West** | **no** | **52** |
| **Fincham** | **no** | **40** |
| **Altman** | **yes** | **0** |
| **Gile & Lenard** | **yes** | **0** |

The public bibliography names two books that appear nowhere in 75 content files, omits the two most-cited modern sources, and cites the wrong Cheiro title/edition. On a site whose core differentiator is sourcing integrity, this is the most damaging single inconsistency I found.
**Direction:** Regenerate the About sources list from what the content actually cites.

### 3.5 — `/contact` is a live, ad-serving page that says "coming soon" (P1)
**Area:** Trust · **Confidence:** Confirmed · **Type:** content
`src/pages/contact.astro:69-78`: *"A dedicated contact address is being set up… Contact details coming soon. Check back shortly."* The page is indexable and carries auto-ads. The privacy page and the signup caveat both direct users to "contact us using the address below" — there is no address. A site that collects emails and (intends to) sell a product has no working contact route.
**Direction:** Publish any working address, even a forwarding alias, and remove the placeholder notice.

### 3.6 — There is no author anywhere (P1)
**Area:** Trust / SEO · **Confidence:** Confirmed · **Type:** content + code
Zero occurrences of author/byline/credential language across `about.astro` and `contact.astro`. The `Article` JSON-LD on every blog post has **no `author` property** (`dist/blog/beginner/life-line/index.html` — `"author"` count: 0); only a `publisher` Organization. For an interpretive subject where the pitch is "grounded, honest, sourced," anonymity undercuts the pitch, and the missing schema property weakens the structured-data signal.
**Direction:** Decide whether the site has a named voice. If yes, add a byline and `author` to the schema. If deliberately anonymous, say so explicitly on About and explain why — silence reads as absence.

---

## 4. UX and navigation

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 4.1 | **No skip link exists anywhere on the site.** Keyboard and screen-reader users tab through 6–7 nav links on every page load. No `main` has an `id` target either. | `grep` for `skip`/`skip-link` across `src/` and `public/`: zero matches. `Header.astro:6-30` | P1 | Confirmed | code |
| 4.2 | **No 404 page.** `src/pages/404.astro` does not exist; `dist/404.html` is not generated. Any mistyped or retired URL yields the host default — no nav, no search, no route back. | Verified absent after build | P2 | Confirmed | code |
| 4.3 | **Homepage "Browse by topic" chips are mislabelled affordances.** Chips read "Lines / Hand Shape / Mounts / Traditions / Markings / Relationships" but each links to a *single article*, not a topic listing. The correct destinations already exist as anchors on `/blog`. | `index.astro` hrefs → `/blog/beginner/major-lines-overview/` etc.; `dist/blog/index.html` has `id="major-lines"`, `id="hand-shape"`, … | P2 | Confirmed | UX/layout |
| 4.4 | **`/learn` is a four-card dead stop.** It shows only four module cards — no lesson count, no total duration, no "start here" primary CTA, no indication of the 22 lessons behind it, no resume affordance. The page's one descriptive sentence is set as tiny uppercase letterspaced text. | Rendered `/learn`; `learn/index.astro:38-45,143-157` | P2 | Confirmed | UX/layout |
| 4.5 | **Module cards on `/learn` are not headings.** The four module titles are `<p class="module-title">`, so the page exposes exactly one heading (the `h1`). Screen-reader users get no navigable structure for the site's primary IA. | `learn/index.astro:149-151` | P2 | Confirmed | code |
| 4.6 | **`/search` is a visually unfinished page.** An `h1`, a search input, then nothing — footer floats mid-viewport with dead space beneath. No suggested queries, no popular topics, no browse-by-cluster fallback, no empty/zero-results guidance. | Rendered `/search` at 1440px | P2 | Confirmed | UX/layout |
| 4.7 | **Blog posts lack the navigational furniture lessons have.** No breadcrumb, no cluster/topic label, no reading time — just date, title, body. A Google visitor gets no sense of where they've landed in a structure. | Rendered `/blog/beginner/life-line`; `breadcrumb` present on lessons, absent on `BlogPost.astro` | P2 | Confirmed | UX/layout |
| 4.8 | **Blog index card descriptions truncate mid-word.** Visible on the rendered page: "what science obs…", "a more careful, synthesis…", "versus what". Character-count truncation, not word-boundary. | Rendered `/blog` | P2 | Confirmed | UX/layout |
| 4.9 | **The final lesson of the whole curriculum says "Module complete."** `LessonFooter` falls back to "Module complete / You've finished this module / Explore what's next →" only at `i === sorted.length-1`, i.e. after `advanced/04-how-to-give-a-reading` — the end of the entire path. There is no completion moment and no onward step. | `LessonFooter.astro:33-42`; `[lesson].astro:73-80` | P3 | Confirmed | content |
| 4.10 | **Module transitions are silent.** Moving from `foundations/04` to `lines/01` shows a generic "Next" block with no "You've finished Foundations" marker, despite modules being an explicit ordered concept. | `LessonFooter.astro:23-32` | P3 | Confirmed | UX/layout |
| 4.11 | **`prerequisites` frontmatter is populated on all 22 lessons, validated by the schema, and never rendered.** Zero references in `src/pages/learn/` or `src/components/`. A returning learner cannot see what a lesson assumes. | `content.config.ts:32`; `grep prerequisites src/pages/learn/ src/components/` → no matches | P2 | Confirmed | code |
| 4.12 | **No progress or resume mechanism of any kind.** The lesson "progress rail" is a static position indicator, not visited-state. A returning learner has no way to answer "where was I?" other than memory. | `LessonPath.astro`; no storage APIs in `src/` | P2 | Confirmed | UX/layout |
| 4.13 | **"✦ Lesson complete ✦" renders unconditionally**, with `aria-label="Lesson complete"` on the region, on every lesson regardless of whether the reader did anything. It states a status that is not true. | `LessonFooter.astro:17-21` | P3 | Confirmed | UX/layout |
| 4.14 | **Internal links mix trailing-slash and non-trailing-slash forms, sometimes for the same route on the same page.** The homepage links to both `/guide` (twice) and `/guide/`. Legal and product routes carry a slash (`/privacy/`, `/terms/`, `/disclaimer/`, `/contact/`, `/premium-guide/`); learn, blog, glossary and search routes do not (`/learn`, `/glossary`, `/search`, `/blog/beginner/…`). `astro.config.mjs` sets no `trailingSlash` policy, so the dev server tolerates both. On a host that canonicalises one form, every link in the other form becomes a redirect hop — including the `/guide` conversion CTA, and the post-signup `window.location.href = '/guide/thank-you/'` at `guide.astro:562`. | `curl -s localhost:4321/ \| grep -oE 'href="/[^"]*"' \| sort \| uniq -c`; `astro.config.mjs` has no `trailingSlash` key | P3 | Confirmed | code |

**Mobile / desktop / touch.** Measured at a true 375px viewport: no horizontal overflow, body 18px, nav links 113×51px, headings fluid via `clamp()`. Mobile nav is a plain reflowed grid with no JS and no focus trap — a good, robust choice. Prose measure at 375px is ~34 characters, narrower than ideal but within normal phone behaviour (P3). The mobile breakpoint set (720 / 600 / 480 / 380) is coherent. **Desktop is the better-served experience**, largely because of 6.2 below.

---

## 5. Learning experience

The curriculum is the site's strongest asset and is structurally sound. Sequencing, prerequisites, and difficulty progression are all correct. The problems are about *visibility* and *duplication*, not about order.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 5.1 | **Module difficulty labels contradict the lessons beneath them, visibly on one screen.** `/learn/lines` renders a header reading "BEGINNER – INTERMEDIATE" above a lesson list where **every one of the six lessons is labelled "Beginner."** Same pattern on `/learn/mounts` (header "INTERMEDIATE", all eight lessons `beginner`) and `/learn/advanced` (header "ADVANCED", all four lessons `intermediate`). The labels are hardcoded in `MODULES`; the truth is in each lesson's frontmatter. | `consts.ts:35,42,49,56` vs. lesson `difficulty` fields; rendered `/learn/lines` | P1 | Confirmed | content |
| 5.2 | **The Lines module promises content it does not contain.** Its description — "and the key minor lines: Sun, Mercury, Girdle of Venus, and more" — appears on the homepage, `/learn`, and `/learn/lines`. Those topics live in the **Advanced** module (`advanced/01-minor-lines-overview`, `advanced/03-girdle-of-venus`). The Lines module's six lessons are overview, heart, head, life, fate, simian. | `consts.ts:40-41`; rendered `/learn/lines` shows the promise directly above the contradicting lesson list | P1 | Confirmed | content |
| 5.3 | **The curriculum never links outward into the article layer.** Lessons reach the blog only through the single `relatedArticle` frontmatter pointer to their twin. No lesson body links to the deep variant articles (`short-life-line-meaning`, `broken-heart-line-meaning`, …) even where directly on-topic. The reverse is rich: articles link liberally into multiple lessons. The link graph is one-directional. | Cross-checked across 20 lesson files and 6 article pairs | P2 | Confirmed | content |
| 5.4 | **Terminology diverges between the curriculum and the deep article layer.** Lessons use "active / passive hand" as canonical (25 occurrences, anchored by a dedicated lesson). Four sampled SEO-variant articles (`short-life-line-meaning`, `broken-life-line-meaning`, `broken-heart-line-meaning`, `forked-heart-line-meaning`) use **only** "dominant / non-dominant" and never cross-walk to "active/passive." A learner who completes the track meets an un-glossed second vocabulary for the same concept. | Term counts across `src/content/` | P2 | Confirmed | content |
| 5.5 | **"Seven mounts" vs "eight mounts."** The *curriculum* consistently says seven (`lessons/mounts/01-mounts-overview.mdx:3,38,108`; `blog/beginner/mounts-overview.md:99`; `blog/index.astro:43`). Every *product and marketing* surface says eight (`consts.ts:48` → homepage + `/learn` + `/learn/mounts`; `guide.astro:441`; `guide/thank-you.astro:290`; `premium-guide.astro:13`; `print/complete-reference.astro:785`; `blog/printable-palmistry-worksheets.md:69`). This is exactly the number a learner would use to check whether the paid guide matches the free lessons. | As cited | P2 | Confirmed | content |
| 5.6 | **The curriculum has no practice layer.** Lessons instruct observation but there is no worksheet, no self-check, no "compare your two hands" artefact in the product — the only such asset is a 25 MB PDF behind (or beside) an email form. | `docs/worksheet-pack-spec.md` describes one; nothing is implemented | P2 | Confirmed | UX/layout |
| 5.7 | Advanced module lessons `01-minor-lines-overview` and `04-how-to-give-a-reading` have no `relatedArticle` — the only two lessons with no article partner. Not a defect, but it makes the 1:1 pairing rule inconsistent. | Lesson inventory | P3 | Confirmed | content |
| 5.9 | **Line markings are never taught, yet the final lesson assumes them.** `advanced/04-how-to-give-a-reading.mdx:40` instructs the reader to weigh "a well-formed, **island-free** head line." "Island" appears in **no other lesson** — a full-corpus grep of `src/content/lessons/` returns exactly this one hit. Stars, grilles, triangles, and crosses as line markings are never introduced either (the only `star`/`square` hits in lessons are unrelated: square *palm shape*, and one incidental use). A learner reaching the capstone meets undefined vocabulary in the middle of the site's synthesis instruction. Dedicated articles exist (`islands-on-palm-lines.md`, `crosses-stars-palmistry.md`) but no lesson links to them. | `grep -rn '\bisland' src/content/lessons/` → 1 hit, at `advanced/04:40` | P2 | Confirmed | content |
| 5.10 | **The thumb, fingers, and nails are absent from the curriculum entirely.** No lesson covers them; the 22 lessons are 4 foundations + 6 lines + 8 mounts + 4 advanced, with no hand-structure module beyond hand *shape*. The thumb is mentioned only in passing (mostly as a landmark for locating the life line) and never taught as a subject. This is a substantive omission rather than a sequencing gap: the thumb is weighted heavily in Benham and Cheiro — the site's two most-cited sources — and d'Arpentigny's finger classification underpins the hand-shape system the Foundations module *does* teach. Full articles exist for all three (`thumb-meaning-palmistry.md`, `finger-shapes-palmistry.md`, `nails-in-palmistry.md`) and are orphaned from `/learn`: no lesson's `relatedArticle` points at any of them. A learner who completes all 22 lessons never encounters them. | Lesson directory listing; `grep -rc '\bthumb\b' src/content/lessons/`; `relatedArticle` values across 22 lessons | P1 | Confirmed | content |
| 5.11 | **The Mounts module is the largest and the least differentiated.** 8 of 22 lessons (36%) and ~15,500 of ~44,200 curriculum words (~35%), for the most structurally repetitive material on the site. Mounts 03–07 share a near-mechanical section template — "Finding it precisely" → [related line] → "The core quality" → "How development is read" → "Displacement toward X" → "What other traditions say" — reskinned per mount. The Lines module uses a comparable skeleton but each lesson carries genuinely distinct content (the life-line myth correction, fate-line absence, the writer's fork), so it reads as reinforcement rather than repetition. The result is that the middle of the curriculum drifts from taught method toward mount-by-mount lookup — the same reference-entry feel §5.8 identifies between layers, occurring *within* the curriculum. | `grep '^## '` across all 8 mounts lessons; word counts per module | P2 | Confirmed | content |

### 5.8 — The structural question: curriculum, or article farm with a curriculum attached? (P1, judgment call)

**Confidence:** Confirmed (measurements) / Likely (interpretation) · **Type:** content

Six lesson↔article twin pairs were read in full. Measured substantive duplication:

| Pair | Duplication | Note |
|---|---|---|
| `mounts/02-mount-of-venus` ↔ `blog/mount-of-venus` | **65–70%** | Highest. "Firmness is resilience; hardness is resistance" near-verbatim (lesson:61 / blog:37); identical five-category development taxonomy in the same order |
| `advanced/02-marriage-relationship-lines` ↔ twin | 60–65% | Cheiro/Benham/Gettings/Fincham naming-history paragraph near-identical (lesson:25-27 / blog:29-31) |
| `lines/04-life-line` ↔ `blog/life-line` | 55–65% | Same Benham quotes with near-identical framing (lesson:46 / blog:53; lesson:80 / blog:63) |
| `lines/02-heart-line` ↔ `blog/heart-line` | 55–60% | Identical Jupiter/Jupiter–Saturn/Saturn endpoint breakdown and Western/Indian divergence |
| `foundations/03-hand-shapes` ↔ twin | 45–55% | Blog adds D'Arpentigny history the lesson lacks |
| `foundations/01-what-palmistry-is` ↔ twin | 35–45% | The one pair where both artefacts clearly earn their existence |

Supporting evidence for the "generated from shared source notes" reading: 44 of 53 posts carry an identical "Sources consulted" block, 31/53 a "Frequently asked questions" section, 26/53 a "Common myths" section. In every pair, the *framing prose around* the Cheiro/Benham/Gettings/Fincham quotes is reused near-verbatim — not two independent treatments citing the same sources, but one document expanded into two.

**Counter-evidence, and it is real:** lesson prose contains embodied instruction ("hold your hand," "press the mount," "trace it now") that appears in no blog counterpart. The lessons are not blog posts with the SEO furniture removed.

**Assessment:** the site currently reads as **an article library and a curriculum built from one body of research, with no designed division of labour between them.** Both layers are well-made; they are not differentiated. This is the single largest structural decision facing the site, and it is a product call, not a defect — see §17.

---

## 6. Visual consistency

This is the weakest dimension of the site and the one where "unfinished" is most visible.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 6.1 | **Three incompatible visual systems across four modules.** Lines: 25 elaborate AI-generated `.webp` poster diagrams. Mounts: 8 schematic `.svg` placeholders **that no page references** (orphaned). Foundations and Advanced: nothing at all. Blog: **zero images across all 53 posts.** | `public/images/lessons/{lines,mounts}`; `grep 'images/lessons'` matches only the 6 `lines` lessons; `grep 'Figure\|<img\|!['` across `src/content/blog/` → 0 files | P1 | Confirmed | visual assets |
| 6.2 | **The Lines diagrams carry unhedged claims baked into raster pixels.** The heart-line figure prints, inside the image, **"THE HEART LINE — The line of love, compassion, and emotional connection."** That is a flat declarative claim of exactly the kind the site's editorial guardrails exist to prevent, in the one asset type that cannot be edited without regenerating. Each figure also bakes in its own title (duplicating the page `h1`) and instructional labels ("STARTS At the Percussion Edge…"). | Rendered `/learn/lines/02-heart-line`, figure `linesl201.webp` | P1 | Confirmed | visual assets |
| 6.3 | **The Lines diagrams' visual register contradicts the site's positioning.** Ornamental gold frames, crescent moon, sunburst, lotus, anatomical heart, magenta light streaks — occult/mystical iconography on a site whose hero promises "without fortune-telling claims." The illustrated hand is also anatomically loose (an implausible thumb; palmar creases that do not correspond to the lines being described). | Rendered figure at 676px | P1 | Confirmed | visual assets |
| 6.4 | **Baked-in instructional text is unreadable on mobile.** Figures render 591×887px at 676px width, and **305×458px at 375px** — a 52% linear reduction. Label text that is ~11px at 676px becomes ~6px on a phone. Because the text is raster, no CSS fix exists. | Measured at 375px and 676px | P1 | Confirmed | visual assets |
| 6.5 | **A single diagram consumes an entire viewport.** 887px tall against a ~830–940px viewport at desktop. Reading a Lines lesson means scrolling through 3–6 full-screen posters. | Measured on `/learn/lines/02-heart-line` | P2 | Confirmed | UX/layout |
| 6.6 | **The homepage ships ~10.5 MB of PNGs, most of it imperceptible.** `hero-palm-map.png` is 1.48 MB and is rendered behind `filter: brightness(0.55)` plus a gradient overlay running from fully opaque to `rgba(13,10,26,0.62)` — in the rendered page it is not visible at all. The four `path-*.png` cards total ~9 MB and render at 194×194px at **`opacity: 0.38`**, where they read as muddy texture behind card text rather than as illustration. | `index.astro:202-222`; measured `opacity: 0.38`, natural 1254×1254; `ls -la public/images/home` | P1 | Confirmed | visual assets |
| 6.7 | **The four homepage path-card illustrations are near-identical to each other** — all a similar hand, differing only in ornament — so they do not visually differentiate the four modules they represent. | Rendered homepage | P2 | Confirmed | visual assets |
| 6.8 | **The mounts placeholders are one file with one ellipse recoloured.** All eight SVGs are the same whole-palm schematic (labelled ellipses); the only diff between `mount-of-venus.svg` and `mount-of-jupiter.svg` is which ellipse is gold. Their own README says: *"temporary schematic placeholders, not final designed artwork… Do not use these as reference for visual style."* | `diff public/images/lessons/mounts/mount-of-venus.svg mount-of-jupiter.svg` → 4 lines; `public/images/lessons/mounts/README.md` | P2 | Confirmed | visual assets |
| 6.9 | **The `/guide` product mockup is a CSS wireframe.** The Starter Guide "cover" on the primary conversion page is a dark rectangle with the title and grey placeholder bars standing in for text. `/premium-guide` has no product imagery at all. | Rendered `/guide`, `/premium-guide` | P1 | Confirmed | visual assets |
| 6.10 | **Every one of 93 pages shares one OG image** (`og-default.png`). Every share and link preview is identical. | `grep og:image` across `dist/` → 93× the same URL | P2 | Confirmed | code |
| 6.11 | **Glossary heading hierarchy is visually inverted.** The letter-group `h2` ("A", "B") renders smaller and quieter than the `h3` term beneath it. | Rendered `/glossary` | P3 | Confirmed | UX/layout |
| 6.12 | **All-caps letterspaced serif is used for load-bearing sentences, not just eyebrows** — e.g. `/learn`'s only descriptive sentence at `0.68em`, uppercase, `0.2em` tracking. | `learn/index.astro:38-45` | P3 | Confirmed | UX/layout |
| 6.13 | `guide.astro` and `premium-guide.astro` each hand-roll their own hero, divider, contents grid, form styling, and breakpoints (~500–580 lines each). Any visual change must be made twice, and they have already drifted. | Both files | P2 | Confirmed | code |

---

## 7. Content and editorial quality

Writing quality is high — clear, calm, beginner-appropriate, and free of filler. The issues are structural repetition and cross-surface inconsistency, not prose.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 7.1 | **Keyword cannibalisation within the blog is real and measurable.** The life-line family (`life-line` + short/broken/forked/double) shows ~55–65% overlap between parent and variants, reusing not just claims but the *same secondary-source quotes*: the Robin Lown quote appears in both `life-line.md:57` and `broken-life-line-meaning.md:39`; the Cheiro/Benham/Fincham block in both `life-line.md:21` and `short-life-line-meaning.md:33`. The heart-line family is mixed — `broken-heart-line-meaning` is largely padding around a claim `heart-line.md:83` already makes; `forked-heart-line-meaning` genuinely extends the parent. | As cited | P1 | Confirmed | content |
| 7.2 | **Programmatic section templating across the library.** 44/53 posts share an identical "Sources consulted" block, 31/53 an FAQ section, 26/53 a "Common myths" section. Reads as batch production. | Corpus scan | P2 | Confirmed | content |
| 7.3 | **No blog post has ever been marked updated.** All 53 have `updatedDate: none`, and three posts carry `pubDate: 2025-05-04` — a year out of step with the surrounding 2026 cluster. | Blog inventory | P2 | Confirmed | content |
| 7.4 | **All 53 posts live under `/blog/beginner/`**, including advanced material. `src/content/blog/intermediate/` and `/advanced/` exist and are **empty**. Every URL asserts "beginner" regardless of content. | Directory listing | P2 | Confirmed | content |
| 7.5 | 42 of 94 `<title>` tags exceed 60 characters; 30 of 93 meta descriptions exceed 160. Both will truncate in results. | `dist/` scan | P2 | Confirmed | content |
| 7.6 | Terminology and count inconsistencies — see 5.4 (active/passive vs dominant/non-dominant) and 5.5 (seven vs eight mounts). | — | P2 | Confirmed | content |

---

## 8. Accuracy and source integrity

**The site's editorial discipline is its strongest dimension and it holds up under scrutiny. Its sourcing layer does not.** These are separable, and the distinction matters for what to fix.

*What holds:* all 22 lessons plus 12 high-risk blog posts were read against the project's editorial guardrails. No invented meanings, no predictive claims, no medical claims, and no scientific-validity overreach were found. The corpus actively corrects the field's two most harmful myths. Hedging is consistent to a degree that is genuinely rare in this subject area.

*What does not:* the second pass examined not whether quotes are accurate (8.2) but **whether the cited sources are sources**, and found that in at least nine articles they are not — commercial astrology blogs and SEO content farms listed as peers to Cheiro and Benham (8.11), tertiary reference works carrying factual claims in body prose (8.12), and two tradition articles whose entire bibliography is Western (8.13). None of this makes a single interpretive claim on the site *wrong*. All of it undermines the specific thing the site sells, which is that its claims can be traced. Findings 8.11–8.13 should be read as one problem with three surfaces.

### 8.1 — The empirical-studies passage checks out (downgraded from a suspected P1)
**Area:** Accuracy · **Confidence:** Confirmed genuine · **Type:** research
`blog/beginner/life-line.md:27` cites Newrick et al. (1990, 100 cadavers, significant correlation), Wilson & Mather (1974, no correlation), and Lucas et al. (2019, *Anthropological Review*, 60 cadavers, no significant relationship).

This was initially flagged as the riskiest passage on the site — specific enough that fabrication would be severe. **A single targeted external check (the only web research performed in this audit) confirms all three studies are real and accurately characterised**, including the journal name for the 2019 paper. One detail warrants a spot-check: the article attributes the 2019 study to the **University of Adelaide**, while the paper appears in **Flinders University's** research repository. Fix the institution or drop it.

This finding materially raises confidence in the corpus's sourcing generally.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 8.2 | **156 quotation-marked passages across the 22 lessons, and 74 files carrying named-author attributions, but only 6 of 75 content files have a Sources section.** Quotes are presented as verbatim with no page numbers and, on most pages, no bibliography a reader could check. The site's one self-audit (`lines/05-fate-line.mdx:55`, noting a Cheiro line "does not appear in the 1916 text in a form that can be quoted with confidence") proves the risk is live. | `grep` counts across `src/content/` | P1 | **Needs Verification** | research |
| 8.3 | **The caduceus is presented as the medical symbol.** `lessons/mounts/06-mount-of-mercury.mdx:43` states Mercury's staff "was adopted by the medical tradition as its own symbol." This is a well-documented historical conflation — the traditional symbol is the single-serpent Rod of Asclepius; the caduceus was adopted in error by some 20th-century medical bodies. | As cited | P2 | Likely | content |
| 8.4 | **Romani migration dating.** `blog/beginner/western-palmistry-basics.md:15` places arrival in Europe "from around the ninth century onward"; commonly cited scholarship places European arrival considerably later (13th–14th c.). | As cited | P2 | **Needs Verification** | research |
| 8.5 | **Ray Hyman research claim** (`foundations/01-what-palmistry-is.mdx:49`) and the **Encyclopaedia Britannica** paraphrase on the same line are checkable but unverified here. Hyman's cold-reading work is genuine; the specific finding as paraphrased needs confirmation. | As cited | P2 | **Needs Verification** | research |
| 8.6 | **Cheiro biography and client lists are unhedged and mutually inconsistent.** `cheiro-palmistry-books.md:16` gives birth 1866 Co. Wicklow, death 1936 Hollywood (both genuinely disputed in the popular record); `:18` lists "Mark Twain, Oscar Wilde, King Edward VII" while `western-palmistry-basics.md:17` lists "Mark Twain, Oscar Wilde, Sarah Bernhardt, and Thomas Edison." Cheiro's claimed Brahmin training *is* well hedged elsewhere — good practice that should extend here. | As cited | P3 | **Needs Verification** | research |
| 8.7 | **Three mild manufactured-consensus lapses**, all at the seams where Western and Indian readings are reconciled: `lines/02-heart-line.mdx:72` ("They may be observing the same temperamental quality from different evaluative standpoints"); `advanced/02-marriage-relationship-lines.mdx:98` ("There is no contradiction"); `mounts/08-mount-of-mars.mdx:70` (Mangal Parvat "reinforcing" the Western distinction). The house rule is to let disagreement stand. | As cited | P3 | Likely | content |
| 8.8 | **Vocational-aptitude claim.** `mounts/06-mount-of-mercury.mdx:43-49` attributes to Benham that a developed Mercury mount suits "the skilled diagnostician" — a step past "traditionally associated with a quality of mind," and adjacent to medical framing. | As cited | P3 | Confirmed | content |
| 8.9 | **Unhedged historical scope claim.** `foundations/01-what-palmistry-is.mdx:21`: palmistry practised "on every inhabited continent, often with no documented contact between traditions." | As cited | P3 | **Needs Verification** | research |
| 8.10 | Gendered left/right hand conventions (Western at `foundations/04:44`, Chinese yin/yang at `chinese-palmistry-basics.md:51` and `foundations/04:80`) and the simian-line population figure ("roughly one to four percent," `lines/06-simian-line.mdx:24,34`) are plausible and internally consistent but uncited. | As cited | P3 | **Needs Verification** | research |

### 8.11 — Commercial astrology blogs and SEO content farms are cited as peers to the canonical five (P1)
**Area:** Accuracy / trust · **Confidence:** Confirmed · **Type:** content

§8.2 above asks whether the site's quotations are *verifiable*. It does not ask a prior question: **whether the cited sources are sources at all.** They are not, in at least nine articles. The "Sources consulted" footers place uncredentialed commercial websites in the same undifferentiated list as Cheiro, Benham, Gettings, West, and Fincham, separated only by semicolons:

| File | Non-canonical sources presented as peers |
|---|---|
| `blog/beginner/fate-line.md:107` | Destiny Palmistry (Sarah Yip); AstroSight, "Fate Line in Palmistry — Vedic Interpretation" |
| `blog/beginner/head-line.md:126` | God Given Glyphs, "Lines — Writer's Fork"; Destiny Palmistry (Sarah Yip) |
| `blog/beginner/heart-line.md:116` | AstroSight, "Heart Line Reading: Complete Vedic Palmistry Guide"; Destiny Palmistry (Sarah Yip) |
| `blog/beginner/major-lines-overview.md:73` | yourchineseastrology.com, "Hand Lines in Palmistry"; Destiny Palmistry |
| `blog/beginner/mounts-overview.md:105` | yourchineseastrology.com, "Palmistry Mounts"; Destiny Palmistry, "The Inner Mars Mount" |
| `blog/beginner/life-line.md:102`, `broken-life-line-meaning.md:99` | Robin Lown / College of Psychic Studies |
| `blog/beginner/what-palmistry-is.md:93` | Wikipedia (Palmistry; Samudrika Shastra; Cheiro; Bagua); The Conversation (2024) |
| `blog/beginner/simian-line.md:69` | Andrew Fitzherbert, *Hand Psychology* (1986); "Hasta Samudrika Shastra (traditional Indian palmistry framework)" — a genre, not a text |
| `blog/beginner/how-to-read-a-palm.md:111` | Wikipedia (Palmistry; Samudrika Shastra) |

Two of these are defensible as *palmistry literature* outside the stated canon — Fitzherbert (1986) and, at `how-to-read-a-palm.md:111`, Comte de Saint-Germain (1897) and Goldberg & Dobkins (2016). Those should simply be added to the declared source list. The rest are not literature.

**It is worse in body prose than in the footers,** because there the site actively confers authority:
- `blog/beginner/heart-line.md:57` — *"Destiny Palmistry's Sarah Yip, **who reads the classical texts closely**, notes that…"* The site vouches for a commercial astrology blogger's scholarship, then uses that vouching to carry an interpretive claim about chained lines.
- `blog/beginner/life-line.md:57` and `broken-life-line-meaning.md:39` — Robin Lown of the College of Psychic Studies is quoted verbatim, in quotation marks, as the authority establishing that breaks mean transition rather than death. This is the site's single most important myth-correction, and its named support is a psychic-studies practitioner rather than any of the five.

This matters more than an ordinary citation-hygiene issue because of what the site claims about itself. `about.astro` closes its source list with *"Where a claim cannot be traced to a tradition or source, it is not included"* (see 3.4). AGENTS.md requires that the site never invent source attributions. Neither is literally violated — the sources exist and are named. But a reader who follows the bibliography to check the site's work lands on the exact SEO-astrology content the site positions itself against, and the differentiator collapses at the point where it is being tested.

**Direction:** Split the footer into declared tiers — established literature vs. contemporary practitioners vs. reference works — rather than one flat semicolon list. Remove the content-farm citations (AstroSight, God Given Glyphs, yourchineseastrology.com, Destiny Palmistry) and re-source those claims to the canon, or drop the claims. Delete the editorial vouching at `heart-line.md:57`. Add Fitzherbert, Saint-Germain, and Goldberg & Dobkins to the declared canon on About. Note this compounds 3.4: the public bibliography is wrong in both directions — it lists books the content never cites, and the content cites sources the bibliography never admits to.

### 8.12 — Wikipedia and Britannica are used as inline factual authorities in body prose (P2)
**Area:** Accuracy · **Confidence:** Confirmed · **Type:** content

Distinct from 8.11 because these are tertiary reference works being load-bearing in the text itself, not just listed in a footer:
- `blog/beginner/what-palmistry-is.md:29` — *"Wikipedia's entry on Samudrika Shastra notes approximately 600 surviving manuscripts attributed to the field."* A specific quantitative historical claim, attributed to Wikipedia by name, in the site's foundational explainer.
- `blog/beginner/what-palmistry-is.md:63` and `lessons/foundations/01-what-palmistry-is.mdx:49` — Britannica is quoted to establish that palmistry has no scientific support. The *claim* is correct and well-framed; citing an encyclopaedia by name for it in the flagship lesson is weaker than citing the underlying position.
- `blog/beginner/can-palm-lines-change.md:17,83` — Britannica's dermatoglyphics entry carries the article's factual (non-palmistry) content about fingerprint formation.

**Direction:** Keep the claims; replace the visible attribution with the primary source each encyclopaedia entry is summarising, or state the fact without name-checking a tertiary work. Naming Wikipedia in body copy on a site selling sourcing rigour is a self-inflicted credibility cost.

### 8.13 — The Chinese and Indian tradition articles carry a Western-only bibliography (P1)
**Area:** Accuracy / tradition integrity · **Confidence:** Confirmed · **Type:** content + research

`blog/beginner/chinese-palmistry-basics.md:99` and `blog/beginner/indian-palmistry-hasta-samudrika-shastra.md:101` both end with a "Sources consulted" line naming **only** Cheiro, Benham, Gettings, West, and Fincham — **byte-identical to the footer on `blog/beginner/western-palmistry-basics.md:103`.** Three articles about three different traditions carry the same Western bibliography.

None of those five is an authority on Chinese or Sanskrit classical material. Yet these articles make extensive, specific, tradition-internal claims: the Tian Di Ren (Heaven/Human/Earth) framework, Taoist yin/yang hand conventions (`chinese-palmistry-basics.md:51,93`), and Sanskrit terminology including *rekha*, *bhagya*, and *karma phala*. No Chinese-tradition or Sanskrit-tradition source — primary, secondary, or translated — is named anywhere in either article. `indian-palmistry-hasta-samudrika-shastra.md:23` goes further and uses **Cheiro**, a Western author, to characterise the Indian tradition's relationship to Jyotish.

This is the sharpest version of a risk the site is otherwise unusually careful about. §2/S2 correctly credits the site for keeping traditions distinct in its *prose*; the sourcing layer does not keep them distinct at all. It is also the specific failure mode AGENTS.md names — terminology attributed to a tradition without basis — arriving through the bibliography rather than through the writing.

Note the interaction with 8.11: `chinese-palmistry-basics.md` cites no Chinese source, while `major-lines-overview.md` and `mounts-overview.md` cite `yourchineseastrology.com` for Chinese material. Where a Chinese-tradition source *is* reached for, it is a commercial astrology site.

**Direction:** Mark both articles **NEEDS SOURCE VERIFICATION** and do not treat their tradition-internal claims as sourced until a real source exists for each. This is the one finding in this report that most warrants targeted external research before any content change.

**Where the discipline is weakest:** not in tone, which is careful throughout, but in *citation specificity outrunning verifiability* — and specifically in general-history claims embedded in palmistry content (Romani dating, Cheiro biography, the caduceus), which is exactly where self-auditing is hardest. The mount lessons quote Benham and Cheiro more heavily and more specifically than the major-lines lessons do.

---

## 9. Accessibility

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 9.1 | **Systemic contrast failures from stacking `opacity` on already-muted text.** Base colours are well chosen (body 13.9:1, accent 8.7:1), but a recurring pattern layers `opacity: 0.35–0.75` on muted text. Measured live in the browser: the footer tagline computes to **~2.1:1 at 12.6px** — visible on the rendered `/search` page as text that barely registers. Same pattern in `Footer.astro:53-58` (~3.0:1), `BlogPost.astro:147-153` source notes (~3.6:1), `guide.astro:186-192`, `premium-guide.astro:281-287`, `LessonPath.astro:82-94`, `LessonFooter.astro:113-120,209-217`. AA requires 4.5:1. | Computed styles read from the live DOM + `src/styles` values | P1 | Confirmed | code |
| 9.2 | **No skip link** — see 4.1. | | P1 | Confirmed | code |
| 9.3 | **The `Figure` `alt` attributes are image-generation prompts, not alt text.** They are 50–80 word design briefs written in the imperative — e.g. `lines/01-major-lines-overview.mdx:32`: *"…Each label **should include** the line name in a clean typeface positioned clearly outside the palm outline."* A screen reader reads the entire brief, including instructions to a generator. Worse, they describe the **intended** image, not the delivered one: the alt for `linesl201.webp` promises "all other lines shown faintly in gray" and never mentions the baked-in title, labels, ornamental frame, moon, lotus, or anatomical heart that are actually present. | `src/content/lessons/lines/*.mdx`, all 25 `<Figure>` calls | P1 | Confirmed | content |
| 9.4 | **No `:focus-visible` rule exists anywhere.** Zero matches across `src/`; `global.css` defines no focus ring. Against a near-black theme, the browser default is the only indicator and cannot be guaranteed visible. `guide.astro:129-151` removes the input outline and replaces it with a `rgba(201,169,110,0.07)` shadow — effectively invisible; the adjacent submit button has no focus style at all. | `grep focus-visible src/` → 0 | P1 | Confirmed | code |
| 9.5 | **Module titles on `/learn` are paragraphs, not headings** — see 4.5. | | P2 | Confirmed | code |
| 9.6 | **`/search` is non-functional without JavaScript.** Pagefind is a client-side widget with no `<noscript>` fallback and no static browse alternative. | `search.astro:2,40` | P2 | Confirmed | code |
| 9.7 | **Form labels exist but are `sr-only`; placeholders are the only visible cue** and vanish on input. | `guide.astro:507,512`; `premium-guide.astro:450` | P3 | Confirmed | UX/layout |
| 9.8 | Mobile nav links measure ~38–41px tall (3-column grid) — above the WCAG 2.2 AA 24px floor, below the 44px comfort guideline. The header search icon is a ~30px-wide target on both breakpoints. | `Header.astro:109-122,25-27`; measured | P3 | Confirmed | code |
| 9.9 | `aria-label="Lesson complete"` on a static decorative row announces a false state — see 4.13. | | P3 | Confirmed | code |
| 9.10 | Screen-reader behaviour, focus order through the Lines figures, and real assistive-technology traversal of the progress rail were **not** tested. | — | — | **Needs real-device/AT verification** | — |

---

## 10. SEO and discoverability

Fundamentals are in good shape: canonical URLs on every page, valid sitemap, RSS, `robots.txt`, correct `Article` + `BreadcrumbList` and `LearningResource` + `BreadcrumbList` JSON-LD, and a clean 94-page build. The issues are specific and mostly cheap.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 10.1 | **The homepage and `/learn` share an identical `<title>`: "Learn Palmistry — Palmistry Path."** Two of the site's three most important pages are indistinguishable in results and compete with each other. | `dist/index.html` and `dist/learn/index.html` | P1 | Confirmed | code |
| 10.2 | **Article JSON-LD has no `author`** — see 3.6. | `dist/blog/.../life-line/index.html` | P1 | Confirmed | code |
| 10.3 | **Life-line and heart-line variant clusters cannibalise their parents** — see 7.1. Five life-line posts and five heart-line posts target overlapping intent with duplicated claims and duplicated citations. | | P1 | Confirmed | content |
| 10.4 | **All 53 posts sit at `/blog/beginner/…`** regardless of level, and two sibling directories are empty. Any future re-levelling means URL changes and redirects. | | P2 | Confirmed | content |
| 10.5 | **93 pages, one OG image** — see 6.10. | | P2 | Confirmed | code |
| 10.6 | 42/94 titles >60 chars; 30/93 descriptions >160 chars. | `dist/` scan | P2 | Confirmed | content |
| 10.7 | **No page carries `noindex` except `/print/complete-reference`.** `/contact` ("coming soon"), `/search`, and the print reference are all in the sitemap. `/contact` in particular is a thin placeholder being indexed and monetised. Pagefind also indexes all 94 pages including legal and print routes. | `grep noindex src/`; build output | P2 | Confirmed | code |
| 10.8 | **No blog post has an `updatedDate`**, so `dateModified` always equals `datePublished` — a freshness signal permanently frozen at first publish. | Blog inventory; `dist` JSON-LD | P2 | Confirmed | content |
| 10.9 | **SEO structure is not currently hurting the learning experience** — the cluster IA on `/blog` is genuinely useful navigation. The risk is the reverse: 5.8's duplication means link equity and reader attention split between two near-identical pages per topic. | | P2 | Likely | content |

---

## 11. Conversion and email funnels

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 11.1 | **Dead paid CTA** — see 3.1. | | P0 | Confirmed | code |
| 11.2 | **`/premium-guide` contradicts itself** — see 3.2. | | P0 | Confirmed | content |
| 11.3 | **The free guide's email gate is bypassable from the same page.** `guide.astro:524-530` places a direct "↓ Download full guide (PDF, 25 MB)" link on the landing page, and `guide/thank-you.astro:308-309` explicitly tells users *"The PDF download link is also available at the guide page if you'd prefer to download directly."* The lead magnet gives away the asset beside the form that exists to capture the lead. | As cited | P1 | Confirmed | content |
| 11.4 | **The Starter Guide form and the premium waitlist post to the same Kit form ID (9489555) with identical payloads.** `guide.astro:503` and `premium-guide.astro:446` both target `https://app.kit.com/forms/9489555/subscriptions` with only `email_address` — no tag, no segment, no source field. Waitlist joiners land in the Starter Guide automation, and the promised "early-access discount" cannot be targeted because the two intents are indistinguishable. | As cited | P1 | Confirmed | code |
| 11.5 | **The Starter Guide PDF is 25.9 MB, and it is stored twice, byte-identically.** `Palmistry-Starter-Guide.pdf` and `Palmistry-Starter-Guide-Web.pdf` share MD5 `5441d3f…` — the "Web" (compressed) variant was never compressed. 50 MB of downloads ship with the site, and the "printable quick-reference" is a 26 MB download on mobile. | `md5sum public/downloads/*.pdf`; `du -sh` | P1 | Confirmed | code |
| 11.6 | **The funnel is entirely unmeasured.** 53 `data-track` attributes across 10 source files, and **no listener, no analytics script, and no tag manager anywhere** in `src/` or `public/`. Every CTA is instrumented and nothing records it. No conversion question about this site can currently be answered with data. | `grep data-track` (10 files); no analytics matches | P1 | Confirmed | code |
| 11.7 | **No contact route** — see 3.5. Both the privacy page and the signup caveat point to an address that does not exist. | | P1 | Confirmed | content |
| 11.8 | **The guide page's product mockup is a wireframe** — see 6.9. The primary conversion asset shows placeholder bars where content should be. | | P1 | Confirmed | visual assets |
| 11.9 | `/guide/thank-you` is otherwise well done — clear expectation-setting, three concrete next steps, an honest upsell. Its weakness is that its upsell inherits 3.1 and 3.2. | Rendered | — | Confirmed | — |
| 11.10 | **Trust signals near conversion points are thin**: no author, no testimonials, no sample pages, no refund statement on a paid product, and a "Secure checkout" claim attached to a 404. | Rendered `/guide`, `/premium-guide` | P2 | Confirmed | content |

---

## 12. Technical and product observations

Scoped to issues that affect UX, accessibility, content integrity, conversion, or trust. Deep engineering review is out of scope by design.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 12.1 | **AdSense auto-ads run on every page**, including `/privacy`, `/terms`, `/disclaimer`, `/affiliate-disclosure`, `/search`, and the "coming soon" `/contact`. No `<ins>` slots exist anywhere, so Google decides placement at runtime with no reserved space — unpredictable layout shift, and ads injected into thin legal and placeholder pages. | `BaseHead.astro:31-34`; `consts.ts:13`; no `adsbygoogle` markup in `src/` | P1 | Confirmed | code |
| 12.2 | **The repo's own audits do not cover the failures found here.** `audit:all` and `content-audit` pass cleanly while missing: the Gumroad 404 (external links unchecked), the duplicate 26 MB PDFs, the orphaned mount SVGs, alt-text-as-prompt, missing schema `author`, and duplicate `<title>`s. `content-audit` covers the 53 blog posts only — the 22 lessons are unaudited. | Ran all four scripts | P2 | Confirmed | code |
| 12.3 | **~10.5 MB of homepage PNGs** for imagery that is invisible or at 38% opacity — see 6.6. This is the site's dominant performance cost and it buys nothing visually. | `ls -la public/images/home` | P1 | Confirmed | code |
| 12.4 | Only `/print/complete-reference` is `noindex`; nothing else is excluded — see 10.7. | | P2 | Confirmed | code |
| 12.5 | Legal pages all read "Last updated: May 2026" (`privacy.astro:38`, `terms.astro:38`, `disclaimer.astro:48`) while the site's behaviour has changed since. | As cited | P2 | Confirmed | content |
| 12.6 | Everything except `/search` degrades correctly without JavaScript — nav, footer, lesson rail, and both forms. A genuine strength. | | — | Confirmed | — |

---

## 13. Stale documentation

Docs were checked against the verified implementation. **The core operating docs are in good shape** — `CURRENT_STATE.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `AI_HANDOFF.md`, `DECISIONS.md`, `CHANGELOG.md`, `PRODUCT_VISION.md`, `WIKI.md`, and `PROJECT.md` are current and trustworthy, and `ACTIVE_TASK.md` is correctly `INACTIVE`. No doc was found referencing a nonexistent file or route.

| # | Finding | Evidence | Sev | Conf | Type |
|---|---|---|---|---|---|
| 13.1 | **The most consequential stale document is not in `docs/` — it is `src/pages/privacy.astro`**, which is a published legal page contradicted by live implementation. See 3.3. | `privacy.astro:48-49,78` | P0 | Confirmed | content |
| 13.2 | `docs/pre-launch-audit.md` (2026-05-27) records "46 blog articles" and "zero analytics"; `docs/post-launch-monitoring-plan.md` (same date) records "No third-party analytics script is installed yet." Both were accurate when written; both now describe a superseded state (53 articles, AdSense live). Point-in-time records, not false claims — but a future session could read them as current. | As cited | P2 | Confirmed | documentation |
| 13.3 | `public/images/lessons/mounts/README.md` correctly flags its SVGs as temporary and points to `docs/visual-assets-roadmap.md` — but the assets it describes are **orphaned**: no lesson references them. The replacement plan is tracking files that are not in use. | Verified by grep | P2 | Confirmed | documentation |
| 13.4 | `docs/worksheet-pack-spec.md` specifies a practice artefact that does not exist in the product — see 5.6. Reads as a plan, not as done, so this is a gap rather than a contradiction. | | P3 | Confirmed | documentation |
| 13.5 | The "no 404 page" gap flagged in `pre-launch-audit.md` remains open — see 4.2. | | P2 | Confirmed | documentation |
| 13.6 | **`docs/editorial-backlog.md:9` states "Published: 46 blog posts."** There are 53. Same undercount as `pre-launch-audit.md` (13.2), but this one matters more operationally: the backlog is the document a future session would read to decide *what to write next*, and it is planning against a corpus seven articles out of date. Its parenthetical — "all 20 articles from the SEO roadmap's Near-Term Opportunities list are now live" — may also no longer describe the current set. | `docs/editorial-backlog.md:9`; `ls src/content/blog/beginner \| wc -l` → 53 | P2 | Confirmed | documentation |
| 13.7 | **`docs/seo-content-roadmap.md`'s dated plan has expired.** Its "30-Day Editorial Plan" (§7, from line 454) runs Week 1 from 2026-05-26 to 2026-06-22 — closed seven weeks before this audit — and the 90-day roadmap (§8) sets a Week-12 decision gate ("if 500+ monthly organic sessions, begin workbook planning") that cannot be evaluated, because the site has no analytics at all (see 11.6). A dated plan whose success criteria are unmeasurable should not be read as live guidance. | `docs/seo-content-roadmap.md:454,460,504,531` | P3 | Confirmed | documentation |

**Direction for all of the above: do not edit these during this audit.** 13.1 should be fixed as a production change; 13.2–13.5 need a dated "superseded" marker, not deletion.

---

## 14. Visual asset replacement inventory

**No imagery was generated for this audit. No image-generation service was used. No credits were consumed.**

### A — Requires new artwork

| Asset | Current state | Why it must be replaced | Priority |
|---|---|---|---|
| `public/images/lessons/lines/*.webp` (25 files) | AI-generated ornamental posters, 887px tall, with baked-in titles, baked-in instructional labels, and baked-in interpretive claims | 6.2 (unhedged claim printed in pixels), 6.3 (occult register contradicts positioning; loose hand anatomy), 6.4 (label text illegible on mobile) — **no CSS or copy fix can address any of these** | **Highest** |
| `public/images/lessons/mounts/*.svg` (8 files) | One schematic recoloured eight times; explicitly self-declared temporary; **currently orphaned** | 6.8 — the mounts module is the site's largest (8 lessons) and has no working imagery | High |
| Foundations module (4 lessons) | No imagery | Hand shapes, active/passive comparison, and observation sequence are inherently visual and currently taught in prose alone | High |
| Advanced module (4 lessons) | No imagery | Minor lines, relationship lines, and Girdle of Venus all need location diagrams | Medium |
| `public/images/home/path-*.png` (4 files, ~9 MB) | Near-identical hand illustrations at 38% opacity | 6.6, 6.7 — they neither read as illustration nor differentiate the modules | Medium |
| `public/images/home/hero-palm-map.png` (1.48 MB) | Invisible behind `brightness(0.55)` + gradient overlay | 6.6 — either make it visible or remove it; shipping 1.48 MB of nothing is the worst of both | Medium |
| Starter Guide cover / `/guide` mockup | CSS wireframe with placeholder bars | 6.9 — this is the primary conversion asset | **High** |
| Premium guide product image | None | 6.9 — a $14 product with no visual | High |
| `og-default.png` (used on all 93 pages) | Single generic image | 6.10 — at minimum, distinct images for home / learn / blog / guide / premium | Medium |
| Blog article imagery (53 posts) | Zero images anywhere | 6.1 — the entire article library is text-only | Low (deliberate minimalism is a defensible choice — see §17) |

**Design constraints that any replacement must satisfy** (derived from what went wrong, not invented):
1. **No text baked into raster images.** Labels belong in HTML/SVG so they scale, translate, and reach screen readers.
2. **No interpretive claims in artwork.** A diagram may say "heart line"; it may not say "the line of love."
3. **No page-title duplication inside the image.**
4. **Diagram register, not poster register.** Anatomically plausible hands; no crescent moons, lotuses, or sunbursts.
5. **Target ≤ 400px rendered height**, so a figure supports the prose rather than replacing the viewport.
6. **SVG wherever the content is line-and-label**, which is most of it — solves 6.4 and 12.3 simultaneously.

### B — Fixable without any new artwork

| Fix | Finding |
|---|---|
| Remove or replace the 25 `alt` prompt-briefs with real alt text describing the delivered image | 9.3 |
| Constrain `Figure` max-height and give figures a sensible aspect ratio | 6.5 |
| Raise the homepage path-card image opacity, or drop the images and let the cards be typographic | 6.6, 6.7 |
| Compress/resize `public/images/home/*.png` (or delete the hero if it stays invisible) | 6.6, 12.3 |
| Delete the orphaned mounts SVGs, or wire them in as an interim visual | 6.8, 13.3 |
| Fix the glossary `h2`/`h3` visual hierarchy | 6.11 |
| Reduce all-caps letterspaced treatment on load-bearing sentences | 6.12 |
| Fix all `opacity`-stacked contrast failures | 9.1 |
| Extract shared hero/section/form styles out of `guide.astro` and `premium-guide.astro` | 6.13 |
| Word-boundary truncation on blog index cards | 4.8 |

---

## 15. Quick wins

Small, bounded, low-risk, high-value. Roughly in value order.

1. **Fix or disable the Gumroad CTA** (3.1) — one constant in `consts.ts`.
2. **Correct the privacy policy's advertising and cookie sections** (3.3) — factual accuracy on a legal page.
3. **Resolve `/premium-guide` to a single state** (3.2) — delete either the price block or the waitlist block.
4. **Rebuild the About sources list from actual citations** (3.4) — add West and Fincham, remove Altman and Gile & Lenard, correct the Cheiro edition.
5. **Publish a contact address** (3.5).
6. **Differentiate the homepage `<title>` from `/learn`'s** (10.1).
7. **Add a skip link** and one global `:focus-visible` rule (4.1, 9.4).
8. **Delete the duplicate 25.9 MB PDF** and compress the survivor (11.5) — removes 25 MB immediately.
9. **Fix the `opacity`-stacked contrast values** (9.1) — a handful of CSS lines, one of them at 2.1:1.
10. **Replace the 25 `alt` prompt-briefs with real alt text** (9.3).
11. **Point the homepage "Browse by topic" chips at `/blog#cluster` anchors** (4.3) — the anchors already exist.
12. **Align the four `MODULES` difficulty labels with lesson frontmatter, and fix the Lines description** (5.1, 5.2).
13. **Settle "seven mounts" vs "eight mounts"** across product surfaces (5.5).
14. **Add a 404 page** (4.2).
15. **Add a Kit tag or hidden source field to distinguish the two forms** (11.4).
16. **Word-boundary truncation on blog cards** (4.8).
17. **`noindex` `/contact` while it is a placeholder** (10.7).
18. **Delete the editorial vouching at `heart-line.md:57`** (8.11) — one clause ("who reads the classical texts closely") that hands scholarly authority to a commercial blog. The surrounding claim can stand on the canon.
19. **Correct `docs/editorial-backlog.md:9` from "46 blog posts" to 53** (13.6) — one number, but it is the figure the next content session will plan against.
20. **Set an explicit `trailingSlash` policy in `astro.config.mjs` and normalise internal links** (4.14) — the homepage currently links to both `/guide` and `/guide/`.

---

## 16. Larger structural improvements

Real work, needing a decision first.

1. **Resolve the lesson/article duplication** (5.8, 7.1). The two layers currently restate each other at 35–70% overlap. Options: give each a defined job (article = search-intent answer + myth correction; lesson = guided practice + observation), consolidate the thinnest variant posts into their parents, or accept the duplication as an SEO cost. Doing nothing is also a choice — but the current state splits attention and link equity on every topic.
2. **Commission one coherent diagram system** covering all four modules (§14A). This is the largest single quality gap and the one most visible to a first-time visitor.
3. **Make the curriculum visible and resumable** (4.4, 4.11, 4.12) — surface the 22 lessons and total duration on `/learn`, render prerequisites, and add lightweight local progress.
4. **Instrument the funnel** (11.6). 53 `data-track` attributes exist; a small listener plus one privacy-respecting analytics tool would make every other conversion question answerable. Note this requires the privacy policy fix (3.3) first.
5. **Decide the blog URL taxonomy** (7.4, 10.4). Either populate `intermediate/` and `advanced/`, or flatten to `/blog/<slug>` and stop asserting a level in every URL.
6. **Establish a citation-verification pass** (8.2). 156 quoted passages, 6 bibliographies. A one-time spot-check of the most-repeated quotes against the named editions would convert the site's biggest latent risk into its strongest credential. **Widened by the second pass:** this must also cover *source provenance*, not only quote accuracy — purge the content-farm citations (8.11), replace the Wikipedia/Britannica inline attributions (8.12), and find real sources for the Chinese and Indian articles or mark their claims unsourced (8.13). Sequence it after 3.4, since About's bibliography and the article footers have to end up describing the same set of sources.
7. **Extract a shared layout for `/guide` and `/premium-guide`** (6.13).
8. **Decide whether the curriculum covers the hand or only the palm** (5.10, 5.9). Thumb, fingers, nails, and line markings are absent from `/learn` while existing as finished articles. Either adopt them into the curriculum, or state explicitly that it is scoped to lines and mounts — the current state reads as an unfinished syllabus rather than a deliberate scope, and the capstone lesson already leaks the gap by using "island" without ever defining it.

---

## 17. Questions requiring user judgment

These are genuine forks. I have a recommendation on each, but the call is yours.

1. **Is the Complete Reference a real product right now?** Everything in §11 depends on the answer. *Recommendation: waitlist-only until the Gumroad product exists.*
2. **Should the site have a named author?** Anonymity is defensible, but it is currently unstated rather than chosen. *Recommendation: name someone, or state the anonymity policy explicitly on About.*
3. **What is the blog actually for?** Traffic acquisition feeding the curriculum, or a standalone reference? The answer decides 5.8 and 16.1. *Recommendation: acquisition layer — then thin the variant posts and link them into lessons.*
4. **Should the article library have images at all?** Text-only is a coherent, fast, distinctive choice. *Recommendation: keep the blog text-only and spend the entire visual budget on the curriculum, where diagrams do pedagogical work.*
5. **Keep AdSense?** Auto-ads on a $14-product site with no analytics and a contradicting privacy policy is the worst configuration of the three options (ads, product, neither). *Recommendation: if the product is real, drop auto-ads; if not, keep ads and fix the policy.*
6. **How rigorous should the sourcing bar be?** Reconstructing 156 quotes against primary editions is significant work. *Recommendation: verify the top ~20 most-repeated quotes; convert the rest to unquoted paraphrase, which the site already models well at `lines/05-fate-line.mdx:55`.*
7. **Regenerate the Lines diagrams, or remove them?** Removal is free and immediately fixes 6.2, 6.3, 6.4, and 9.3. *Recommendation: remove the baked-in-claim figures now; replace with SVG diagrams when there is a system for all four modules.*
8. **What counts as a source for Palmistry Path?** (8.11–8.13) The canon is five Western authors, but the content in practice reaches for contemporary practitioners, encyclopaedias, academic papers, and astrology websites — with no declared tier separating them. This needs a stated policy before anyone edits a footer, or the cleanup will be arbitrary. *Recommendation: three declared tiers — established literature (the five, plus Saint-Germain, Fitzherbert, Goldberg & Dobkins where already used); contemporary practitioners, named as such and never used to carry a claim the canon does not also support; and reference works for non-palmistry facts only. Content farms in none of them.*
9. **Does the curriculum cover the hand, or the palm?** (5.10) *Recommendation: adopt thumb, fingers, and nails as a fifth module — the articles already exist, and Benham and Cheiro both weight the thumb heavily, so the current scope is hard to defend on tradition grounds.*
10. **Do the Chinese and Indian articles stay up in their current state?** (8.13) They make tradition-internal claims with no tradition-internal source. *Recommendation: keep them published — they are well written and the framing is careful — but treat sourcing them as blocking work, not backlog, since they are the two pages where a knowledgeable reader is most likely to test the site.*

---

## 18. Recommended next steps

**Do first (trust and correctness, ~1 short session):** 3.1, 3.2, 3.3, 3.4, 3.5 — the dead CTA, the self-contradicting sales page, the false privacy claim, the wrong bibliography, the missing contact address. All are small, all are trust-critical, none require a design decision.

**Do second (accessibility and hygiene, ~1 session):** skip link, `:focus-visible`, the `opacity` contrast set, the 25 alt-text briefs, the duplicate PDF, the duplicate `<title>`, the 404 page.

**Do third (learning-path coherence, ~1 session):** module difficulty labels, the Lines module description, seven-vs-eight mounts, the topic-chip destinations, rendering prerequisites.

**Then decide** §17.1, §17.3, and §17.4 before committing to §16.1 or §16.2 — the visual and content strategies both hang on them.

**Suggested sequencing note:** fix the privacy policy (3.3) before adding any analytics (16.4), and settle the product state (17.1) before touching any funnel copy.

**Amended by the second pass.** The sourcing-provenance cluster (8.11–8.13) belongs in the *first* group, not in the research backlog, and it changes the shape of the About fix. Doing 3.4 alone — regenerating About's bibliography from what the content actually cites — would pull the content farms *onto* the About page and make the problem worse. So: settle the source-tier policy (17.8) first, then clean the article footers (8.11) and the two tradition articles (8.13), then regenerate About from the cleaned set (3.4). Three ordered steps, one outcome — the public bibliography and the article footers finally describing the same set of sources.

The two single-line items — deleting the vouching clause at `heart-line.md:57` and correcting the article count in `docs/editorial-backlog.md:9` — need no decision and can go with the first batch.

---

## 19. Top findings

| # | Finding | Sev | Conf | Where |
|---|---|---|---|---|
| 1 | The only paid CTA — in the footer of all 94 pages — points at a Gumroad URL returning **HTTP 404** | P0 | Confirmed | 3.1 / 11.1 |
| 2 | `/premium-guide` sells the product for $14 *and* says it is "in final preparation," with a full-price button directly beneath a waitlist offering an early-access discount | P0 | Confirmed | 3.2 / 11.2 |
| 3 | The privacy policy states the site uses no advertising networks or tracking cookies while AdSense auto-ads run on every page, including that policy | P0 | Confirmed | 3.3 / 13.1 |
| 4 | The About page's source list omits the two most-cited sources (West 52 files, Fincham 40) and lists two cited **zero** times (Altman, Gile & Lenard) — on a site whose differentiator is sourcing integrity | P1 | Confirmed | 3.4 |
| 5 | The visual system is three incompatible systems: elaborate posters (Lines), orphaned placeholders (Mounts), nothing (Foundations, Advanced), nothing (53 blog posts) | P1 | Confirmed | 6.1 |
| 6 | Lesson diagrams bake an unhedged claim — "the line of love, compassion, and emotional connection" — plus instructional text into raster pixels that are illegible on mobile and unfixable without regeneration | P1 | Confirmed | 6.2 / 6.4 |
| 7 | All 25 `Figure` `alt` attributes are image-generation prompt briefs that describe an intended image, not the delivered one | P1 | Confirmed | 9.3 |
| 8 | Lesson↔article twins duplicate 35–70% of substantive content, reusing the same source quotes with near-identical framing prose | P1 | Confirmed | 5.8 / 7.1 |
| 9 | Systemic contrast failures from stacking `opacity` on muted text — measured as low as **2.1:1** on the footer tagline | P1 | Confirmed | 9.1 |
| 10 | The funnel is completely unmeasured: 53 `data-track` attributes, zero listeners, zero analytics — and the free guide's email gate is bypassable from the same page | P1 | Confirmed | 11.6 / 11.3 |
| 11 | Nine articles cite commercial astrology blogs and SEO content farms (Destiny Palmistry, AstroSight, God Given Glyphs, yourchineseastrology.com) as peers to Cheiro and Benham — and `heart-line.md:57` vouches for one in body prose as someone "who reads the classical texts closely" | P1 | Confirmed | 8.11 |
| 12 | The Chinese and Indian tradition articles carry a **Western-only bibliography, byte-identical to the Western article's** — no Chinese or Sanskrit source is named anywhere, despite extensive tradition-internal claims | P1 | Confirmed | 8.13 |
| 13 | The thumb, fingers, and nails are absent from the curriculum entirely, though all three are core classical topics, heavily weighted in the site's two most-cited sources, and already written as orphaned articles | P1 | Confirmed | 5.10 |

---

## Appendix — Things this audit could not verify

- **True mobile rendering was measured, not seen.** The browser surface available could not display a viewport narrower than 676px for screenshots. All 375px findings (6.4, 9.8, mobile layout) come from computed styles and geometry read from a genuine 375px emulated viewport, which is reliable for measurement but not a substitute for looking. **Mobile visual claims: UNVERIFIED at pixel level.**
- **Screen-reader and keyboard traversal were not tested on real assistive technology** (9.10).
- **Live production behaviour was not observed** — everything was audited against `npm run dev` and `npm run build` output, not `palmistrypath.com`. AdSense rendering, Cloudflare cache headers, and real Kit form submission are therefore unverified.
- **No email was submitted to either form**, so the actual delivery sequence, double opt-in behaviour, and thank-you redirect were not exercised end to end.
- **Source quotations were not checked against primary editions** (8.2) — the single largest remaining verification task, deliberately left as `NEEDS SOURCE VERIFICATION` rather than guessed at.
- **Historical claims at 8.4, 8.5, 8.6, 8.9, 8.10 remain unverified** by design; only 8.1 received targeted external checking.

**Added by the second pass:**

- **The tradition-internal claims in `chinese-palmistry-basics.md` and `indian-palmistry-hasta-samudrika-shastra.md` are `NEEDS SOURCE VERIFICATION` in the strict sense** (8.13): not "the citation might be inaccurate," but "no source of the right kind is cited at all." Specifically unverified: the Tian Di Ren mapping onto Heart/Head/Life, the Taoist left-yang/right-yin convention (`chinese-palmistry-basics.md:93`), the Sanskrit glosses (*rekha*, *bhagya*, *karma phala*), and the "shared Indo-European planetary symbolism" claim (`indian-palmistry-hasta-samudrika-shastra.md:37`). Verifying these requires sources outside the declared canon and was deliberately not attempted here.
- **The content-farm sources at 8.11 were identified but not evaluated.** Whether Destiny Palmistry, AstroSight, God Given Glyphs, or yourchineseastrology.com happen to be *correct* on the specific points cited is unknown and, for the finding, beside the point — the objection is to their standing as citable authority on a site that sells traceability.
- **The second pass took no screenshots.** Browser-pane compositing was unavailable for most of that session, so its rendered checks were done through the live DOM (accessibility tree, computed styles, measured geometry) and server-rendered HTML across 15 routes, all returning HTTP 200. Every second-pass finding added here is a code/content/structure fact verifiable from source or DOM; **none rests on a visual judgment.** The visual findings in §6 remain those of the first pass, at the pixel-verification level stated above.
- **Two subagent-reported figures were checked and found false**, and are recorded here as a caution for future audits that delegate measurement: a reported "269-word `palmistry-beginner-mistakes.md`" (actually 1,431 body words) and a claim that `docs/DECISIONS.md` and `docs/CHANGELOG.md` do not exist (both do). Delegated counts were re-derived directly before use.
