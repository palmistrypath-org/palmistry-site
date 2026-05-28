# Search Console & Indexing Setup Checklist

**Site:** palmistrypath.com  
**Host:** Cloudflare Pages  
**Stack:** Astro (static output), `@astrojs/sitemap`  
**Sitemap URL:** `https://palmistrypath.com/sitemap-index.xml`

Work through this checklist in order. Sections A → B → C follow a natural sequence: set up verification first, then QA indexing, then monitor performance.

---

## A. Technical SEO Setup

### Google Search Console

- [ ] **Create a GSC property for `palmistrypath.com`.** Go to search.google.com/search-console, click **Add property**, and choose **URL prefix** (`https://palmistrypath.com`). The URL-prefix method is easier to verify via HTML meta tag and is sufficient for a single-domain site.

- [ ] **Verify ownership using the HTML meta tag method.** GSC will give you a `<meta name="google-site-verification" content="...">` tag. Add it to `src/components/BaseHead.astro` inside the `<!-- Global Metadata -->` block. Because `BaseHead` is included on every page, the tag will appear site-wide. Deploy to Cloudflare Pages, then return to GSC and click **Verify**.

  ```astro
  <!-- In src/components/BaseHead.astro -->
  <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" />
  ```

- [ ] **Confirm the correct site URL is set in `astro.config.mjs`.** The `site` property (e.g. `site: 'https://palmistrypath.com'`) must be present — Astro uses it to build canonical URLs and the sitemap. A mismatch causes GSC to see incorrect canonicals. Verify it has no trailing-slash inconsistency relative to your Cloudflare Pages primary domain.

---

### Bing Webmaster Tools

- [ ] **Add the site to Bing Webmaster Tools.** Go to bing.com/webmasters, sign in, and enter `https://palmistrypath.com`.

- [ ] **Import from GSC instead of re-verifying manually.** Bing offers a one-click **Import from Google Search Console** option on the site-add screen. This imports your GSC property, skips a separate meta-tag verification, and pulls in your sitemap URL automatically. Use this if GSC is already verified — it saves a separate deploy cycle.

- [ ] **If GSC import is unavailable**, use the Bing HTML meta tag: add `<meta name="msvalidate.01" content="...">` to `src/components/BaseHead.astro` alongside the Google verification tag, then redeploy.

---

### Sitemap Submission

- [ ] **Confirm the sitemap is being generated.** Run `npm run build` locally. After the build, check that `dist/sitemap-index.xml` and at least one `dist/sitemap-*.xml` file exist. The `@astrojs/sitemap` integration generates these automatically from all statically rendered routes.

- [ ] **Submit the sitemap in GSC.** Go to GSC → **Sitemaps**, enter `sitemap-index.xml` in the path field (GSC prepends the verified domain), and click **Submit**. Full URL: `https://palmistrypath.com/sitemap-index.xml`. GSC will show a success status and discovered URL count within a few hours.

- [ ] **Submit the sitemap in Bing Webmaster Tools.** In your Bing property, go to **Sitemaps** and submit `https://palmistrypath.com/sitemap-index.xml`. If you imported from GSC, check whether Bing already picked it up automatically — it often does via the `<link rel="sitemap">` tag in `BaseHead.astro`.

---

### robots.txt Check

- [ ] **Verify `public/robots.txt` allows all crawlers.** The current file reads:

  ```
  User-agent: *
  Allow: /

  Sitemap: https://palmistrypath.com/sitemap-index.xml
  ```

  This is correct — it permits all bots and declares the sitemap. No changes needed.

- [ ] **Confirm the `Sitemap:` line matches the actual sitemap URL.** The declared URL already matches what `@astrojs/sitemap` generates. If you ever change the `site` value in `astro.config.mjs`, update this line to match.

- [ ] **After deploying, fetch `https://palmistrypath.com/robots.txt` in a browser** to confirm Cloudflare Pages is serving the file from `public/` correctly and no `_redirects` rule or caching header is intercepting it.

---

### Canonical URL Verification

- [ ] **Understand how canonicals are set.** `src/components/BaseHead.astro` generates `<link rel="canonical">` using the `site` base URL from `astro.config.mjs` combined with the current route path. As long as `site` is `https://palmistrypath.com`, canonicals will be correct on every page that includes `BaseHead`.

- [ ] **Spot-check canonical tags on three live page types.** Pick the homepage, a blog post (e.g. `/blog/heart-line/`), and a lesson page (e.g. `/learn/lines/02-heart-line/`). In each, view source and search for `canonical`. Verify:
  - The `href` exactly matches the browser address bar URL.
  - It uses `https://`, not `http://`.
  - Blog posts show their full path, not the homepage URL.

- [ ] **Check trailing-slash consistency.** Cloudflare Pages has its own trailing-slash handling. Confirm that the URL in the address bar after navigation matches the canonical `href` character-for-character. A mismatch causes GSC to flag a canonical conflict.

- [ ] **Use GSC URL Inspection to confirm Google agrees with your canonical.** GSC reports both the "user-declared canonical" and the "Google-selected canonical." These should match. If they differ, Google found a reason to prefer a different URL — investigate duplicate content or redirect chains.

---

### URL Inspection Workflow in GSC

- [ ] **Open URL Inspection.** In GSC, click **URL Inspection** in the left sidebar. Paste the full URL including `https://` and the trailing slash (e.g. `https://palmistrypath.com/blog/heart-line/`).

- [ ] **Read the Coverage status.** The result panel shows one of several states:
  - **URL is on Google** — indexed. Confirm the canonical matches your intended URL.
  - **URL is not on Google** — known but excluded. Expand **Coverage** to see the reason (e.g. "Crawled — currently not indexed," "Blocked by robots.txt").
  - **URL is unknown to Google** — not yet seen. Expected for newly published pages.

- [ ] **Check the Page Fetch section.** Click **Test Live URL** to have GSC fetch the current live version. Review the HTML tab to confirm `<title>`, `<meta name="description">`, and `<link rel="canonical">` are all correct. Use this after content updates to confirm what Google would see now.

- [ ] **Request indexing for new or updated pages.** After a successful live fetch, click **Request Indexing**. Use this when a new post or lesson is published, after a significant content update, or after fixing a previously excluded page.

- [ ] **Do not request indexing indiscriminately.** GSC rate-limits these requests. Reserve them for pages you've just published or meaningfully updated. For general new-site crawling, submitting the sitemap is sufficient — Googlebot will work through it on its own schedule.

- [ ] **Monitor the Coverage report in aggregate.** Check **Indexing → Pages** weekly after launch. The chart separates indexed from excluded pages with reasons. Common issues on Astro/Cloudflare Pages: soft 404s on paginated routes, and duplicate pages caused by both slash and non-slash versions being accessible.

---

## B. Indexing QA and Priority URLs

### Priority URLs to Request Indexing at Launch

- [ ] **Submit the sitemap first** — GSC → Sitemaps → submit `https://palmistrypath.com/sitemap-index.xml`. This is the foundation; individual URL requests build on top of it.

- [ ] Submit the homepage (`https://palmistrypath.com/`) via URL Inspection → "Request Indexing" immediately after the Cloudflare Pages deployment is confirmed live.

- [ ] Submit `/blog/` — the primary crawl entry point for all article URLs; indexing it first helps Google discover individual posts faster.

- [ ] Submit `/learn/` — the hub for all four curriculum modules; passes link authority to individual lesson pages.

- [ ] Submit `/glossary/` — standalone high-value page with dense keyword coverage; not linked from the blog listing, so request indexing explicitly rather than waiting for discovery.

- [ ] Submit `/search/` — low priority for ranking, but confirm the page is crawlable and not accidentally blocked by `robots.txt` or a `noindex` tag introduced by the Pagefind integration.

- [ ] Identify the 5–10 blog posts with the broadest keyword targets (core lines, major mounts, hand shape fundamentals) and submit each via URL Inspection individually. These are the pages most likely to generate early organic traffic.

- [ ] After submitting, check each priority URL in GSC URL Inspection within 48–72 hours and confirm status shows "URL is on Google" or is queued for indexing — not "URL is not on Google" with a blocking issue.

---

### Identifying "Discovered — Currently Not Indexed" Pages

- [ ] **Navigate to GSC → Indexing → Pages** and filter by **"Discovered — currently not indexed."** This status means Google found the URL but has not yet fetched and indexed it — it is in the crawl queue, deprioritized. It does *not* mean the page is blocked or penalized.

- [ ] **Check listed URLs against your Astro build output.** Confirm each URL in the "Discovered" list corresponds to a real page in `dist/`. If a URL appears that has no matching file, audit your sitemap for stale entries from a previous build.

- [ ] **Common cause: low perceived page importance.** Google's crawl scheduler deprioritizes pages on new or low-authority domains, pages with thin inbound links, or pages it has never successfully fetched. This is normal in the first 4–8 weeks post-launch.

- [ ] **Rule out accidental exclusion.** Use URL Inspection on one of the affected URLs and check for `noindex` in the rendered HTML, a disallow rule in `robots.txt`, or a canonical pointing elsewhere. Inspect the built HTML in `dist/` directly to verify — Astro does not add `noindex` by default, but a layout-level meta tag could introduce one.

- [ ] **Check for internal link coverage.** Confirm affected pages are reachable via links from already-indexed pages (homepage, `/blog/`, `/learn/`). Orphaned pages — only in the sitemap, no internal links — are the slowest to get crawled.

---

### Remediation: Page Stays "Discovered — Not Indexed" for More Than 2 Weeks

- [ ] **Request Indexing in URL Inspection** on the specific URL. This places it at the front of Google's crawl queue and typically resolves deprioritization within 3–7 days for an active site.

- [ ] **Add or strengthen an internal link** to the page from a page Google has already indexed. The most effective links come from pages with their own search impressions — add the URL to a related article's body or to the `relatedLesson` CTA in frontmatter.

- [ ] **Review content depth.** Pages under ~300 words in a competitive topic area are deprioritized. Check the page in `dist/` and consider expanding the article before re-requesting indexing.

- [ ] **Check Core Web Vitals for the URL** in GSC → Experience. Astro's static output and Cloudflare CDN should produce fast pages, but large unoptimized images can drag LCP above threshold and reduce crawl priority.

- [ ] **If still not indexed after a second Request Indexing and 2 more weeks**, fetch the rendered HTML from the live URL (not `dist/`) and compare — confirm Cloudflare is not serving a cached error or redirect that differs from what Astro built.

---

### Monitoring Search Queries and Updating Content

- [ ] **In GSC → Performance → Search results**, set date range to "Last 28 days," click the **Pages** tab, select a specific URL, then switch to the **Queries** tab. This shows every search query that generated an impression or click for that page. Export this list weekly.

- [ ] **Flag queries with ≥20 impressions and <2% CTR.** This indicates Google is surfacing the page for that query but the title and meta description are not compelling enough. Update `title` and `description` frontmatter fields — both feed the `<title>` tag, `<meta name="description">`, and OG tags via `BlogPost.astro`.

- [ ] **Flag queries where a keyword phrase the article does not directly use is generating impressions.** This is the clearest signal to add a new subheading. For example: if a heart line article receives impressions for "heart line fork meaning" but has no section on forked endings, add a `## Variations` subsection following the article structure in `CLAUDE.md`.

- [ ] **After updating an article**, set `updatedDate` in frontmatter to today's date, commit, and push. Re-check Performance data 4 weeks later to measure the CTR and ranking change.

- [ ] **Track average position** for each article's primary target query over rolling 28-day windows. If position moves from 15–20 into the top 10, the article is ready for additional internal links from other posts — this compounds ranking gains.

- [ ] **Use queries sorted by impressions descending** (not clicks) to find content gaps: high-impression queries where your site has no top-5 page are candidates for new articles, not rewrites.

---

### Content Freshness Signals — pubDate, updatedDate, and Re-Crawl

- [ ] **Do not change `pubDate` after first publication.** It feeds the Article schema's `datePublished` field in `BlogPost.astro`. Changing it resets the published date in structured data and signals to Google that the article is newer than it is, which can cause a temporary ranking reset.

- [ ] **Set `updatedDate`** whenever you make a substantive content change: adding or removing a section, correcting a factual claim, expanding a variation or cross-tradition comparison, or rewriting the opening paragraph. It feeds `dateModified` in the Article schema.

- [ ] **Do not set `updatedDate`** for cosmetic changes: fixing a typo, rephrasing a single sentence, adjusting punctuation, or reformatting a list. False freshness signals train Google to ignore your `dateModified` values.

- [ ] **After setting `updatedDate`**, run `npm run build` locally to confirm the Article schema in the built HTML reflects the new date. The updated `Last-Modified` HTTP header Cloudflare serves is an additional freshness signal.

- [ ] **For articles ranking on page 2–3**, a structured content expansion (adding one new subheading, 150–250 words addressing a related query variant) combined with updating `updatedDate` is the recommended re-crawl trigger — not simply re-dating an unchanged article.

- [ ] **After a site-wide structural change** (new layout, updated sitemap, added `relatedLesson` CTAs across many posts), submit the sitemap again in GSC → Sitemaps. This prompts a fresh crawl of all URLs in the sitemap index.

- [ ] **Review GSC → Crawl Stats** (Settings → Crawl stats) monthly. A declining crawl rate on an actively publishing site signals a problem: crawl errors, slow server response, or a `robots.txt` change that inadvertently blocked Googlebot.

---

## C. Launch-Week Monitoring and 30-Day Metrics

### Launch-Week Daily Checks (Days 1–7)

- [ ] **Check GSC → Indexing → Pages daily.** Filter by "Error" and "Valid with warnings." On day 1 expect most pages to show "Discovered – currently not indexed"; by day 3–5 Googlebot should begin crawling. Flag any sustained errors.

- [ ] **Review crawl errors in GSC → Settings → Crawl Stats.** A spike in 404s or 5xx errors on launch day means something broke in routing or the sitemap. Investigate immediately.

- [ ] **Confirm sitemap accepted.** GSC → Indexing → Sitemaps. Status should read "Success." If it shows a warning or failure, re-submit `https://palmistrypath.com/sitemap-index.xml` and note the timestamp.

- [ ] **Check for manual actions** — GSC → Security & Manual Actions → Manual Actions. On a new site this should read "No issues detected." If not, read the action description carefully before taking any other steps.

- [ ] **Check for security issues** — GSC → Security & Manual Actions → Security Issues. Confirm "No issues detected" every day of launch week.

- [ ] **Inspect priority pages in URL Inspection.** Paste your five most important URLs (home, `/learn/`, a flagship article, a mount page, a lines page). Confirm "URL is on Google" or note "URL is not on Google" and request indexing manually.

- [ ] **Track the "Indexed" page count each day** in a simple spreadsheet row. A flat line all week suggests a crawl budget or robots.txt problem; a steady upward climb is normal.

- [ ] **Verify no accidental noindex tags survived the build.** Grep `dist/` for `<meta name="robots" content="noindex"` after `npm run build` — none should appear on live content pages.

---

### Setting Up GSC Email Alerts

- [ ] **Enable crawl error email alerts** — GSC → Settings (gear icon, top right) → Email preferences → check "Crawl errors." This is the fastest passive signal that something broke post-deploy.

- [ ] **Enable manual action alerts** — In the same panel, check "Manual actions." You will receive an email if a manual penalty is applied.

- [ ] **Enable security issue alerts** — Also in Email preferences, check "Security issues." Early notification of hacking or malware limits damage.

- [ ] **Confirm the alert email address is monitored.** GSC sends alerts to the account owner. Confirm that the account email has Gmail notifications enabled so alerts are not silently filtered.

- [ ] **Set a recurring Monday calendar reminder** to review GSC manually. Automated alerts catch acute problems; a weekly check catches slow drifts (gradual de-indexing, creeping 404 growth) that don't cross alert thresholds.

---

### 30-Day Metrics to Watch in GSC

- [ ] **Total impressions trend** — GSC → Performance → Search results, last 28 days. Impressions should grow week over week as pages are indexed. A flat or declining line after week 2 signals indexing stalled or new content is not being discovered.

- [ ] **Total clicks** — Clicks lag impressions by days to weeks on a new site; expect near-zero in week 1 and slow growth from week 2. Note the absolute number weekly rather than panicking at low early figures.

- [ ] **Average position for core palmistry queries** — In Performance → Queries, search for target terms: "palmistry," "how to read palms," "heart line meaning," "life line meaning," "mount of Venus," etc. Record average position at the 30-day mark. Positions above 30 are normal for a new domain; below 20 is encouraging; below 10 warrants CTR attention.

- [ ] **Page-level CTR** — Switch from Queries to Pages. Sort by impressions descending. For each page with >100 impressions, note its CTR. A page ranking positions 1–10 with CTR below 2% is underperforming and needs title or meta description work.

- [ ] **Coverage report totals** — GSC → Indexing → Pages. Record four numbers at 30 days: Indexed, Not Indexed (with sub-reasons), Error, and Valid with warnings. The "Indexed" count should be close to your total build page count. A large "Crawled – currently not indexed" bucket signals Google sees the pages but judges them low-value; review thin content.

- [ ] **Top-performing queries by impression.** Identify the five queries driving the most impressions. These reveal what Google already associates with the site and are candidates for deeper content or stronger internal linking.

- [ ] **Mobile usability issues** — GSC → Experience → Mobile Usability. Even one flagged page can suppress ranking; resolve before investing in further content.

---

### Interpreting Low CTR on Well-Ranked Pages

- [ ] **Identify low-CTR pages** — In GSC Performance → Pages, filter to average position ≤ 15 and CTR < 3%. Pull the top 3–5 queries for each such page using the filter panel.

- [ ] **Audit the meta description.** Open the page's Markdown file in `src/content/blog/` and check the `description` frontmatter field. It should be 140–155 characters, contain the primary query term, and make a specific promise. Rewrite if it is generic or truncated in SERPs.

- [ ] **Audit the title.** The `title` frontmatter field becomes both the `<h1>` and `<title>` tag. For CTR, the `<title>` needs the query term near the front and a reason to click. Example: "Heart Line Meaning: What Its Shape and Length Reveal" outperforms "The Heart Line."

- [ ] **Check for SERP feature competition.** If Google shows a featured snippet or People Also Ask block above your result, even a position-3 listing gets reduced CTR. In that case, optimize the content to win the snippet (concise direct answer paragraph immediately below a heading) rather than only tuning the title.

- [ ] **A/B test title changes one page at a time.** Change the `title` for one low-CTR page per week. Wait 14 days and compare CTR before changing another. Changing many titles simultaneously makes it impossible to attribute improvement.

---

### Defining "Successfully Indexed and Performing"

A page meets this bar when all of the following are true at the 30-day mark:

- [ ] **URL is on Google** confirmed in URL Inspection, last crawl date within 30 days.
- [ ] **Impressions > 50** in the first 30 days — signals Google is showing the page for relevant queries.
- [ ] **Average position ≤ 50** for at least one target query — competitive enough to appear in the first five pages.
- [ ] **No crawl errors or manual actions** affecting the URL.

**Page requires continued attention if:**
- Impressions are zero after 21 days → re-request indexing, check for noindex.
- Average position is above 80 after 30 days → review content quality and internal links.
- CTR is below 1% at position ≤ 20 → title and meta description revision needed.

---

### Linking GSC with Google Analytics 4

- [ ] **Connect GSC to GA4** — GA4 → Admin → Property Settings → Search Console links → Link. Select the GSC property for `palmistrypath.com` and confirm. After 24–48 hours, GA4 → Reports → Acquisition → Search Console reports will be populated.

- [ ] **Verify the link is active.** Check GA4 → Reports → Acquisition → Acquisition overview for a "Google organic search" row. If it does not appear, confirm the GA4 measurement ID matches the gtag snippet in `src/layouts/BlogPost.astro`.

- [ ] **Watch organic sessions weekly** — GA4 → Acquisition → Traffic acquisition, filter by "Session default channel group = Organic Search." Compare week over week for the first 30 days.

- [ ] **Monitor landing page engagement from organic** — GA4 → Engagement → Landing page, add a secondary dimension of "Session default channel group" and filter to Organic Search. Pages with engagement rate below 40% from organic traffic may have a relevance mismatch between the ranking query and the page content.

- [ ] **Cross-reference GSC clicks with GA4 organic sessions.** They will not match exactly (GSC counts clicks on the result; GA4 counts sessions that fire the tracking pixel), but they should be in the same order of magnitude. A large discrepancy points to a tracking implementation problem.

- [ ] **Use Search Console → Queries inside GA4** — GA4 → Reports → Acquisition → Search Console → Queries. This combined view shows which queries drive clicks alongside on-site engagement metrics — more actionable than either tool alone.

- [ ] **Create a GA4 exploration for organic quality** — Explore → free-form, dimensions: Landing page + Session default channel group; metrics: Sessions, Engagement rate, Average session duration. Save as "Organic Search Quality" and review monthly.

---

### Bing Webmaster Tools — What to Check and When

- [ ] **Verify indexing is progressing** — Bing WMT → Index Explorer shows which pages Bing has indexed. At 30 days, compare Bing-indexed count against GSC's indexed count. A dramatically lower number may indicate Bingbot is blocked — check `robots.txt` for any inadvertent disallow rules.

- [ ] **Review URL & Keyword Reports monthly** — Bing WMT → Reports & Data → Search Keywords. Bing's audience skews toward older US users; palmistry query distribution may differ slightly from Google. Note any queries that perform better on Bing and ensure those pages are fully optimized.

- [ ] **Monitor Bing Page Traffic** — Bing WMT → Reports & Data → Page Traffic. Compare top pages by Bing impressions against GSC top pages. If a page ranks well on Google but not on Bing (or vice versa), use each platform's URL inspection tool to check how that search engine has crawled the page.

- [ ] **Run Bing Site Scan after launch and again at 30 days** — Bing WMT → Site Scan. Bing flags issues like missing meta descriptions, slow pages, and broken links — some overlap with GSC signals, but Bing occasionally surfaces different issues.

- [ ] **Check Bing WMT monthly, not weekly.** Bing's market share for informational palmistry queries is materially smaller than Google's. A monthly check is sufficient unless a Bing-specific crawl error or index drop is flagged. Set a recurring calendar reminder for the first Monday of each month.

---

*Last updated: 2026-05-27*
