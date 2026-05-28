# Post-Launch Monitoring Plan — Palmistry Path

*Created: 2026-05-27. Covers the first 90 days post-launch and establishes a recurring cadence beyond.*

---

## Overview

Palmistry Path launched with 46 blog articles, 22 curriculum lessons, a Kit email funnel (/guide), and full SEO scaffolding (sitemaps, schemas, OG tags, data-track attributes). This document defines what to measure, when to measure it, what tools to use, and how to act on findings.

**Tools in use:**
- Google Search Console (GSC) — organic search performance
- Kit (ConvertKit) — email subscriber metrics (form ID 9489555)
- Cloudflare Analytics — raw traffic, bandwidth, error rates
- Site audit scripts — `npm run audit:all`, `npm run content-audit`
- Browser/manual — spot checks, CTA verification
- Google Rich Results Test / Schema.org validator — structured data

**No third-party analytics script is installed yet.** The `data-track` attributes on all CTAs are ready to wire up. Until an analytics provider (e.g. Plausible, Fathom, or GA4) is connected, CTA click metrics must be inferred from GSC + Kit data.

---

## 1. Weekly Search Console Review Checklist

Run every Monday. Takes 15–20 minutes.

### Performance tab (last 7 days vs prior 7 days)

- [ ] Total impressions — up, flat, or down? Note the direction.
- [ ] Total clicks — up, flat, or down?
- [ ] Average CTR — above or below 3%? (3% is a rough baseline for informational palmistry queries)
- [ ] Average position — improving or regressing?
- [ ] New queries appearing in the top 25 that weren't there last week?
- [ ] Any query with 100+ impressions and CTR below 2%? Flag for title/description review.
- [ ] Any query with 500+ impressions and position 11–20? Flag as a ranking-gap opportunity.

### Top pages this week (clicks)

- [ ] Which 5 pages drove the most clicks?
- [ ] Are they the same pages as last week, or is the mix shifting?
- [ ] Any lesson page (`/learn/`) generating organic clicks? (Unlikely early on — note when it starts.)
- [ ] Is `/guide/` appearing in search results at all? If so, what queries bring people there?

### Coverage / Index tab

- [ ] Any new "Excluded" pages that should be indexed?
- [ ] Any "Discovered — currently not indexed" entries? If pages are stuck here for 3+ weeks, submit via URL Inspection.
- [ ] Any new errors (server error, redirect error, soft 404)?
- [ ] Sitemap submitted? Last successful fetch date — confirm it hasn't stalled.

### Enhancements tab

- [ ] Any schema warnings or errors for Article markup?
- [ ] Any schema warnings or errors for LearningResource markup?
- [ ] Any breadcrumb errors?
- [ ] Any new rich result types being detected or losing detection?

### Action threshold

If total impressions drop more than 20% week-over-week for two consecutive weeks, investigate: check for manual actions, crawl errors, recent content changes, and run `npm run audit:all` on the current build.

---

## 2. Top Queries and Pages to Monitor

These are the highest-priority targets based on content volume and search intent. Review monthly in addition to the weekly overview.

### Priority blog queries (track position and CTR)

| Query cluster | Representative article | Goal position |
|---|---|---|
| "heart line meaning" | heart-line.md | Top 10 |
| "life line meaning palmistry" | life-line.md | Top 10 |
| "head line meaning palmistry" | head-line.md | Top 10 |
| "fate line meaning" | fate-line.md | Top 10 |
| "simian line meaning" | simian-line.md | Top 5 (niche query) |
| "how to read a palm" | how-to-read-a-palm.md | Top 10 |
| "what palmistry is" | what-palmistry-is.md | Top 20 |
| "mount of venus palmistry" | mount-of-venus.md | Top 10 |
| "mount of jupiter meaning" | mount-of-jupiter.md | Top 10 |
| "broken life line meaning" | broken-life-line-meaning.md | Top 10 |
| "no fate line" | no-fate-line-meaning.md | Top 10 |
| "palmistry hand shapes" | hand-shapes.md | Top 15 |
| "which hand to read palmistry" | which-hand-to-read-palmistry.md | Top 10 |
| "palmistry chart" | palmistry-chart-for-beginners.md | Top 15 |
| "M line palmistry" | m-line-palmistry.md | Top 5 (niche) |

### Priority lesson pages (track impressions — these index slowly)

Lesson pages carry LearningResource + Course schema and BreadcrumbList. They will take longer to rank than blog posts but may attract position-zero course-related queries.

- `/learn/foundations/01-what-palmistry-is`
- `/learn/lines/02-heart-line`
- `/learn/lines/04-life-line`
- `/learn/mounts/01-mounts-overview`

### Pages to watch for cannibalization

Several blog posts target very similar queries (e.g., `heart-line.md` and `broken-heart-line-meaning.md` both compete for heart line queries). Monitor whether one page consistently outranks the other. If GSC shows both pages appearing for the same query, consolidate or strengthen internal linking to favour the stronger article.

---

## 3. Email Signup Conversion Metrics

The primary conversion is a Kit form subscription (form ID 9489555) triggered from `/guide/`.

### Kit dashboard — review every Monday alongside GSC

| Metric | Baseline target | Red flag |
|---|---|---|
| Weekly new subscribers | Track week-over-week trend | Week-over-week drop of 30%+ with no traffic drop |
| Guide page conversion rate | ≥ 8% of `/guide/` visitors submit the form | Below 4% sustained for 2 weeks |
| Form submission → thank-you redirect | 100% (all form submits reach `/guide/thank-you/`) | Any drop-off here signals a form/Kit issue |
| Email 1 open rate (welcome email) | ≥ 40% | Below 25% — subject line needs revision |
| Email 1 click rate | ≥ 10% | Below 5% — body or CTA needs revision |
| Unsubscribe rate per email | Below 1% | Above 2% — frequency or content mismatch |

### Tracking the funnel manually (no analytics yet)

Until an analytics provider is wired to the `data-track` attributes:

1. Check Cloudflare Analytics for `/guide/` page views (weekly)
2. Check Kit for new subscribers (weekly)
3. Divide: subscribers ÷ `/guide/` page views ≈ conversion rate estimate
4. Note: Kit's form also appears on `/learn/` and lesson pages as a secondary CTA, so Kit subscriber counts may slightly exceed direct `/guide/` visits

### What to improve if conversion rate is low (see Section 8 for full decision rules)

Quick checks before deeper changes:
- Is the Kit form actually submitting? Test it manually in an incognito window.
- Is the welcome email delivering? Check Kit automation logs for errors.
- Is the guide PDF downloadable? Check `public/downloads/` and the direct link on `/guide/`.

---

## 4. Guide CTA Click Metrics

The `data-track` attributes are ready but require an analytics provider to capture. Until then, use Cloudflare page-view counts as a proxy.

### CTA inventory by location

| CTA | Location attribute | Target URL | Priority |
|---|---|---|---|
| "Get the Free Starter Guide" | `homepage-hero` | `/guide/` | High — first conversion opportunity |
| "Get the Starter Guide" | `homepage-guide-cta` | `/guide/` | High |
| "Download the free starter guide" | `blog-lesson-cta` | `/guide/` | Medium — appears on all blog posts with relatedLesson |
| "Get the Free Guide" | `lesson-footer` | `/guide/` | Medium — appears at end of all lessons |
| "free Starter Guide" text link | `learn/index.astro` | `/guide/` | Low |
| "free Palmistry Starter Guide" | module index pages | `/guide/` | Low |

### Proxy measurement (no analytics yet)

Weekly Cloudflare check:
- `/guide/` page views — note weekly total
- `/guide/thank-you/` page views — if lower than form submissions, investigate redirect
- Ratio of blog views to `/guide/` views — if ratio is low (< 1%), guide CTA visibility may be insufficient

### Connect analytics — priority task

Wiring an analytics provider to the existing `data-track` attributes is the highest-value monitoring upgrade. Recommended options:
- **Fathom** or **Plausible** — privacy-first, no cookie banner needed, GDPR-safe. Add a single `<script>` tag to BaseHead.astro and configure custom events for `data-track="cta"` clicks.
- Once wired, define goals: guide-submit, homepage-hero-guide-cta, lesson-footer-guide-cta, blog-lesson-cta.

---

## 5. Content Update Triggers

These conditions should prompt a review or rewrite of an existing article. Check monthly.

### SEO-based triggers

| Condition | Action |
|---|---|
| Article ranks position 11–30 for its target query with 200+ impressions/month | Strengthen the H1, improve meta description, add internal links from stronger pages |
| Article ranks position 1–5 but CTR below 2% | Rewrite the title tag and meta description; test a more specific or benefit-driven angle |
| Article gets clicks but GSC shows average time-to-click improving (position rising) — then stalls | Add new sections, update with more specific examples, or add a related comparison section |
| A new query variant appears in GSC with 50+ impressions that the article doesn't directly address | Add a dedicated section or H2 targeting that variant |
| A competing article from a stronger domain appears in positions 1–3 | Review their content structure; identify gaps in coverage that Palmistry Path can fill |

### Content-quality triggers

| Condition | Action |
|---|---|
| Article has no `relatedLesson` link | Add one — all 46 blog posts should link to a lesson |
| Lesson is referenced by a blog post but has no `relatedArticle` link back | Add the back-link to the lesson frontmatter |
| An article cites only Cheiro (no secondary tradition) | Add Indian or Chinese perspective paragraph |
| Article claims palmistry "shows" or "indicates" (not "traditionally associated with") | Correct the phrasing per editorial guidelines |
| A tradition gap is flagged by a reader or site owner | Add a "Cross-tradition note" section |

### Volume-based triggers

| Condition | Action |
|---|---|
| Monthly sessions reach 500 | Begin planning the printable worksheet pack per seo-content-roadmap.md |
| Monthly sessions reach 1,000 | Evaluate affiliate book links; begin planning beginner workbook |
| Monthly sessions reach 2,500 | Evaluate mini-course viability |

### Scheduled content reviews

- **Monthly:** Review the 5 highest-traffic articles. Are they still accurate? Do they link to all relevant lessons?
- **Quarterly:** Review all 22 lessons. Are cross-references still valid? Do lesson `relatedArticle` fields point to the right blog posts?
- **Quarterly:** Check the SEO content roadmap (`docs/seo-content-roadmap.md`) against what's been published. Update the roadmap with new opportunities surfaced by GSC queries.

---

## 6. Technical Audit Cadence

### Every time a content file is edited or added

```bash
npm run content-audit
```

Validates blog frontmatter: required fields (title, description, pubDate, relatedLesson), no duplicate titles, description ≤ 170 chars, no malformed internal links.

### Every time the site is built and deployed

```bash
npm run build && npm run audit:all
```

`audit:all` runs three checks in sequence:
1. **audit** (audit-links.mjs) — scans all 84 HTML pages for broken internal `href` and `src` references
2. **audit:images** — validates all `<img src>`, OG image, and Twitter image references; flags missing files and unapproved placeholder.jpg usage
3. **audit:schema** — validates all JSON-LD blocks; confirms Article + BreadcrumbList on blog posts, LearningResource + BreadcrumbList on lesson pages

If `audit:all` fails, do not deploy. Investigate the specific failed check before pushing.

### Weekly (Monday, after GSC review)

- [ ] Run `npm run build && npm run audit:all` locally if any content was published in the past week
- [ ] Spot-check one blog post in a browser: OG image renders correctly, schema in source (`<script type="application/ld+json">`), canonical URL is correct
- [ ] Spot-check one lesson page: LearningResource schema present, breadcrumb renders, relatedArticle link works

### Monthly

- [ ] Run `npm run audit:all` on a fresh build even if no content changed — confirms no drift
- [ ] Verify Cloudflare `_headers` caching rules are still in place (check via browser DevTools → Network tab for Cache-Control headers)
- [ ] Check that `https://palmistrypath.com/sitemap-index.xml` loads and references the correct number of pages
- [ ] Check that `https://palmistrypath.com/robots.txt` still points to the sitemap URL
- [ ] Verify the Kit form (form ID 9489555) still submits and redirects to `/guide/thank-you/`

### Quarterly

- [ ] Full structured data validation: paste five random pages into Google's Rich Results Test
- [ ] Validate OG images: paste five URLs into a social preview tool (e.g. opengraph.xyz) to confirm `og:image` renders
- [ ] Review Cloudflare error rate dashboard for any sustained 4xx or 5xx spikes
- [ ] Check that `npm run build` still completes without TypeScript errors

---

## 7. Broken Link, Image, and Schema Monitoring

### Automated (build-time)

The three audit scripts cover all three surfaces:

| Script | What it catches |
|---|---|
| `npm run audit` | Internal `<a href>` pointing to non-existent pages; `<link rel="stylesheet">` or `<script src>` pointing to missing assets |
| `npm run audit:images` | `<img src>` pointing to missing images; OG/Twitter image meta tags pointing to missing files; placeholder.jpg appearing in published pages |
| `npm run audit:schema` | JSON-LD blocks that fail to parse; blog posts missing Article or BreadcrumbList schema; lessons missing LearningResource or BreadcrumbList schema |

### Manual spot-checks (monthly)

- Follow 3 internal links on the homepage to confirm they resolve
- Click the "Continue with the structured lesson →" CTA on 2 blog posts; confirm the lesson page loads
- Click "Get the Free Guide" on 1 lesson footer; confirm `/guide/` loads
- Click the PDF download link on `/guide/`; confirm the PDF serves (not 404)
- Check `/rss.xml` loads valid XML (paste into an RSS validator)

### When images are replaced (e.g. mounts .webp replacement)

After dropping new image files into `public/images/lessons/mounts/` and updating MDX Figure `src` fields:
1. Run `npm run build`
2. Run `npm run audit:images` — confirms all new paths resolve
3. Visually inspect all 8 mount lesson pages in the browser
4. Delete the old `.svg` files only after the `.webp` files pass the audit

### Schema monitoring via GSC

GSC Enhancements tab reports schema errors detected by Googlebot. Check weekly as part of the GSC review. Known schemas to monitor:
- **Article** — 46 blog posts; errors here affect rich result eligibility
- **LearningResource** — 22 lessons; Google treats these as course content
- **BreadcrumbList** — all pages; errors here affect sitelink display
- **WebSite** — homepage only; affects sitelink search box eligibility

---

## 8. 30/60/90-Day Decision Rules

### Day 30 — Baseline establishment

By day 30 you should have GSC data, initial Kit subscriber counts, and Cloudflare traffic baselines.

**Check:**
- How many pages are indexed in GSC? Target: 70 of 84 pages indexed (some deep pages index slowly)
- Are any of the 15 priority queries appearing in GSC at all, even at position 50+? If fewer than 5 are showing impressions, crawl coverage may be slow — submit all 15 URLs via GSC URL Inspection
- Kit total subscribers: any number > 0 confirms the funnel works
- Did the welcome sequence fire? (Check Kit automation logs for at least one successful delivery)

**Decisions at day 30:**
- If GSC shows zero impressions across all pages: check sitemap submission, check for noindex directives, check robots.txt
- If guide page has views but zero Kit subscribers: test the form manually in incognito; check Kit form ID matches 9489555
- If no email data at all: the Kit welcome sequence may not be live — check `docs/email-welcome-sequence.md` and load it into Kit

### Day 60 — Early trend signals

By day 60 you have two 30-day windows to compare.

**Check:**
- Impressions trend: up 20%+? Flat? Down? Up = normal growth; flat = content needs internal link strengthening; down = investigate coverage issues
- Top 3 queries by click: are they the expected core queries (life line, heart line, how to read a palm)?
- Kit subscriber growth: week-over-week trend. A declining trend with flat traffic = conversion problem. A flat trend with growing traffic = CTA visibility problem.
- Lesson page impressions: any lesson appearing in GSC yet? Even at position 80 is progress.
- `npm run audit:all` clean? If new articles were published, run and confirm clean.

**Decisions at day 60:**
- If impressions growing but CTR below 2%: begin title/description rewrites on the 5 articles with most impressions (see Section 9)
- If traffic growing but subscribers flat: add a guide CTA to the blog index page (`/blog/`) and the header navigation (these are flagged gaps in the pre-launch audit)
- If specific queries rank 11–20: prioritize internal linking from stronger pages to those articles

### Day 90 — First strategic decision point

By day 90 you have enough data to make product decisions.

**Check:**
- Monthly organic sessions (Cloudflare): has it reached 200+? 500+?
- Top 10 articles by traffic: do they match the content investment (lines > mounts > foundations)?
- Subscriber total: is the guide funnel building a list?
- Any article ranking position 1–3? Note it — protect it by maintaining freshness.
- Any article stuck below position 30 after 90 days? Consider consolidating it with a stronger related article.

**Decisions at day 90:**
- **If monthly sessions < 200:** Publishing pace is the problem — focus on the 90-day roadmap in `docs/seo-content-roadmap.md`. Prioritize the queries with existing impressions but low click share.
- **If monthly sessions 200–500:** Healthy early growth. Continue publishing. Add one internal link audit pass.
- **If monthly sessions > 500:** Begin worksheet pack planning per roadmap. Consider adding guide CTA to blog index and header nav if not already done.
- **If subscribers > 100:** Review welcome sequence performance (open rates, click rates, unsubscribes). Tune subject lines if open rate below 35%.
- **If subscribers < 20 despite traffic:** Conversion problem — see Section 9.

---

## 9. Traffic Grows but Signups Do Not — Improvement Checklist

This pattern means people are finding the site but not converting to subscribers. Work through this list in order.

### Funnel visibility

- [ ] **Add guide CTA to header navigation.** The pre-launch audit flagged this as a gap. A prominent "Free Guide" link in the nav increases guide page visibility across all sessions.
- [ ] **Add guide CTA to `/blog/` index page.** Currently absent. Every article list visitor sees no conversion prompt.
- [ ] **Verify all 46 blog posts show the "Go deeper" relatedLesson + guide CTA block.** Any post missing a `relatedLesson` frontmatter field won't show the block — check with `npm run content-audit`.

### Guide page conversion

- [ ] **Test the form in incognito.** Submit a real email. Confirm the Kit automation fires and the welcome email arrives within 5 minutes.
- [ ] **Review the guide page headline.** Does it clearly state what the reader gets and why they should give their email?
- [ ] **Remove or de-emphasize the direct PDF download link** (the link below the form that bypasses signup). This is flagged in the pre-launch audit as a conversion leak. Move it to the thank-you page instead.
- [ ] **Shorten the guide page form.** If it asks for anything beyond email, remove extra fields.
- [ ] **Check mobile rendering of `/guide/`.** Run Cloudflare analytics to see if mobile users have a higher bounce rate than desktop.

### Trust signals

- [ ] **Check the contact page.** The pre-launch audit flagged it as a placeholder. If the Privacy Policy links to a broken or empty contact page, it undermines form trust.
- [ ] **Add a one-line social proof note** near the form (e.g., "Join [X] readers learning the basics"). Update the number as the list grows.

### Content-to-conversion mismatch

- [ ] **Check which articles drive the most `/guide/` referrals** (once analytics is wired). If high-traffic articles send few visitors to `/guide/`, the relatedLesson CTA in the blog post may not be compelling. Rewrite the CTA block copy on those specific posts.
- [ ] **Review the guide's perceived value.** If readers arrive at `/guide/` and leave without submitting, the guide title or cover image may not communicate value clearly.

---

## 10. Impressions Grow but CTR Is Low — Improvement Checklist

This pattern means Google is showing the site's pages but searchers are not clicking. Work through this in order.

### Title tag and meta description review

Low CTR almost always comes down to the title or description being generic, not matching search intent, or not standing out in the SERP.

- [ ] **Identify the 5 articles with the most impressions and CTR below 3%.** These are the highest-leverage targets.
- [ ] **Rewrite title tags to be more specific.** Example: "Life Line Meaning in Palmistry: What It Does and Does Not Mean" is good — but if the query is "short life line meaning", the article `short-life-line-meaning.md` should have a title that names the specific question.
- [ ] **Rewrite meta descriptions to include a hook.** The description should preview the answer without giving it away — create a reason to click. Avoid restating the title.
- [ ] **Check for truncation.** Title tags over 60 characters and descriptions over 160 characters get truncated in SERPs. Confirm with `npm run content-audit` (checks description length ≤ 170 chars).

### Rich result eligibility

Higher CTR often comes from rich results (schema-enhanced listings). The site has Article and LearningResource schema — verify they're eligible.

- [ ] **GSC Enhancements tab** — confirm Article schema has no errors on the 5 low-CTR articles
- [ ] **Rich Results Test** — paste each URL into Google's Rich Results Test; confirm Article schema is valid and eligible
- [ ] **Check dates.** Google prefers recently-published or recently-updated articles for many palmistry queries. Add `updatedDate` frontmatter to any article that has been edited since its pubDate.

### Query intent alignment

- [ ] **For each low-CTR query in GSC, search for it yourself** in an incognito browser window. What do the top 3 results look like? If they're listicles and the Palmistry Path article is an in-depth guide, the format mismatch lowers CTR — consider adding a "Quick answer" section at the top.
- [ ] **Check if the query is navigational** (e.g., "cheiro palmistry" — people may want Cheiro's actual books, not an analysis article). If so, the page is unlikely to win CTR regardless of position.

### SERP feature displacement

- [ ] **Check whether a featured snippet, People Also Ask box, or knowledge panel** is displacing organic results for top queries. If so, target the featured snippet directly: add a clear one-paragraph answer near the top of the article that directly answers the query.
- [ ] **For "palmistry chart" type queries**, GSC may show the article appearing for image searches. Image alt text on any diagrams must be descriptive and keyword-relevant.

### Domain authority and brand recognition

- [ ] **CTR improves with brand familiarity.** Until "Palmistry Path" is a recognised brand, focus on title specificity over brand signalling. Lead with the topic, not the site name.
- [ ] **Consider adding Schema.org/Organization** to the homepage to reinforce brand identity to Google.
