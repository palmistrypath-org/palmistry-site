# IndexNow Submission

## What is IndexNow?

[IndexNow](https://www.indexnow.org/) is an open protocol that lets you notify search engines (Bing, Yandex, and others) immediately when URLs on your site are added, updated, or removed. Instead of waiting for crawlers to rediscover content, you push the update directly.

Google does not currently participate in IndexNow. Continue submitting your sitemap manually via Google Search Console for Google indexing.

## When to run it

Run the submission script after deploying new or updated articles — especially after a batch content push. There is no need to run it on every deployment; focus on sessions where new pages are published or existing pages are meaningfully revised.

The script does **not** run automatically during `npm run build`. This is intentional — IndexNow requests should be deliberate, not triggered on every local build.

## How to dry-run

Before submitting, preview what URLs would be sent:

```bash
npm run indexnow:dry-run
```

This reads `dist/sitemap-0.xml` (or fetches the live sitemap if no local build exists), prints every URL, and exits without making any network requests to IndexNow.

Run `npm run build` first to ensure the sitemap reflects the latest content.

## How to submit

Once you've reviewed the dry-run output and deployed to production:

```bash
npm run build          # ensure sitemap is current
npm run indexnow:submit
```

The script will:
1. Read URLs from `dist/sitemap-0.xml`
2. POST them to `https://api.indexnow.org/indexnow` with your key
3. Print a success or failure message with the HTTP status code

A `200` or `202` response means the submission was accepted. A `422` means one or more URLs were rejected (check that the host matches and the key file is reachable). A `429` means you've been rate-limited; wait a few minutes and retry.

## Key file

The IndexNow key file is served at:

```
https://palmistrypath.com/0e03c1e644f8dbbb1bc7d0714f70ff7f.txt
```

The file lives at `public/0e03c1e644f8dbbb1bc7d0714f70ff7f.txt` and is deployed automatically with the site. Do not delete or rename it — IndexNow verifies ownership by fetching this URL.

## Google Search Console

IndexNow does not cover Google. To notify Google of new content:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Use the **URL Inspection** tool to request indexing for individual URLs, or
3. Verify your sitemap is submitted under **Sitemaps** (one-time setup, then Google recrawls on its own schedule)
