# SEO Pass — notifyhub_ai_web

Date: 2026-09-15
Scope: technical SEO, metadata, structured data, share images, and FAQ content
on existing routes. No new routes, no redesign — Pass-1 freeze respected.
Target: India-first, ERP buyer intent.

Verified in a clean container mirror built from this repo's own
`package-lock.json` (the Sept 8 Windows update still blocks the agent shell
from mounting `D:\Projects\NotifyHub`).

---

## 1. Defects found and fixed

### 1.1 Structured data was invisible to first-pass crawlers — fixed
`Organization` and `WebSite` JSON-LD were injected with
`next/script strategy="afterInteractive"`, which runs only after hydration.
The HTML a crawler receives first contained no structured data at all.
Both now render inline in the server HTML via `components/seo/json-ld.tsx`.

### 1.2 Every sub-page was silently dropping half its OpenGraph — fixed
Next **replaces**, it does not merge, a parent's `openGraph` object when a
child declares its own. Every page that set `openGraph: { title, description,
url }` was therefore shipping without `og:type`, `og:site_name`, `og:locale`
and `og:image`, and was inheriting the **homepage's** `twitter:title`.
`/school` was advertising itself on Twitter/X as "NotifyHub.ai — AI-Powered
ERP & Business Software".

All page metadata now goes through one helper, `pageMetadata()` in
`src/lib/seo.ts`, which emits a complete, self-consistent OG + Twitter block.

### 1.3 `twitter:card = summary_large_image` with no image anywhere — fixed
Every share of every page rendered as a bare link. Seven static 1200×630 cards
now exist under `public/og/`, with per-product art for School, College,
Hospital, Restaurant, Platform and AI.

They are **static files, not `opengraph-image.tsx` routes**, deliberately:
Next's file-convention image is not re-injected into a page that declares its
own `openGraph` (see 1.2), and the generated route URL is content-hashed,
which social platforms cache badly. Regenerate with `npm run og`.

### 1.4 The sitemap claimed all 25 pages changed on every crawl — fixed
`lastModified: new Date()` was evaluated per request. Search engines learn to
discount a `lastmod` that is always "now". It is now pinned to
`SITE.contentRevision` — **bump that constant when content actually changes.**

### 1.5 Twelve placeholder pages were indexable and in the sitemap — fixed
`/careers`, `/resources`, `/resources/{blog,case-studies,documentation,help}`,
`/solutions/{education,healthcare,hospitality,business-operations}`,
`/legal/privacy`, `/legal/terms` all render "we're building this" /
"being prepared for publication".

On a domain with no authority yet, thin pages spend crawl budget and drag the
site's quality signal. They now carry `noindex, follow` — still crawlable,
still passing link equity, just not competing — and are out of the sitemap,
because submitting a URL you have asked not to be indexed is a contradictory
signal. The sitemap went from 25 URLs to **13 that deserve to rank.**

Each of those pages carries a comment saying exactly how to reverse this:
drop `noindex: true` and re-add the route to `src/app/sitemap.ts`.
**`/legal/privacy` and `/legal/terms` should be first** — a published policy is
a trust signal for enterprise buyers, and "being prepared" in a SERP is not.

### 1.6 No icons beyond favicon.ico, no manifest — fixed
Added `public/apple-touch-icon.png` (180), `public/icon-192.png`,
`public/icon-512.png`, `public/logo.png` (512, light, for schema), declared in
layout metadata, plus `src/app/manifest.ts`. Regenerate with `npm run icons`.

### 1.7 `<html lang="en">` with `og:locale = en_US` — fixed
Now `en-IN` / `en_IN` throughout, with an `x-default` alternate. The buyer is
in India; the site was declaring itself American.

---

## 2. Structured data now emitted

| Schema | Where |
|---|---|
| `Organization` (logo, contactPoint, areaServed IN, knowsAbout) | every page, `@id` `/#organization` |
| `WebSite` | every page, `@id` `/#website` |
| `WebPage` | every indexable page |
| `BreadcrumbList` | every nested route — the site has no visible breadcrumb, so hierarchy had to be stated |
| `SoftwareApplication` | `/school`, `/college`, `/hospital`, `/restaurant` |
| `FAQPage` | `/`, `/school`, `/college`, `/platform`, `/ai`, `/hospital`, `/restaurant` |
| `ContactPage` | `/contact` |

Every node points back at the two stable `@id`s, so Google and the AI answer
engines resolve **one** NotifyHub entity across the site rather than one
anonymous Organization per page.

**Deliberately absent: `offers` and `aggregateRating`.** Those are what trigger
the rich price/star result, and the site publishes no pricing and has collected
no reviews. Inventing either is exactly the claim this site does not make.
`sameAs` is an empty array until real verified brand profiles exist — populate
`SITE.sameAs` then; that is the single biggest remaining brand-SERP lever.

---

## 3. Titles and descriptions

Rewritten for India-first ERP buyer intent, all within the Pass-1 claim rules
(no customers, no statistics, no compliance claims, product-level status only).

| Route | Title | Primary intent |
|---|---|---|
| `/` | School ERP & College ERP Software with AI | school erp, college erp |
| `/school` | School Management Software & School ERP | school management software |
| `/college` | College ERP & College Management Software | college erp |
| `/hospital` | Hospital Management Software (HMS) | hospital management software |
| `/restaurant` | Restaurant Management Software | restaurant management software |
| `/platform` | Multi-Tenant ERP Platform Architecture | evaluator/technical |
| `/ai` | AI Intelligence Inside the ERP | ai erp |
| `/contact` | Contact Us | navigational/commercial |

Every indexable description is 140–165 characters. "Institution Intelligence"
is unchanged everywhere, per the product terminology rule.

---

## 4. FAQ sections

New `FaqSection` component (`src/components/pages/faq.tsx`) with content in
`src/lib/faq.ts`, added to `/`, `/school`, `/college`, `/platform`, `/ai`,
`/hospital`, `/restaurant`. 35 question/answer pairs.

Plain always-visible text, no accordion, no client JavaScript — the answers are
in the server HTML, and the `FAQPage` schema describes exactly what a reader
can see. This is the highest-leverage content change available under the freeze:
it targets long-tail commercial queries on pages that already rank-compete, and
it is the format AI answer engines quote from.

Every answer restates existing site claims. Nothing new is asserted. Hospital
and Restaurant answers keep "coming soon" at product level and mark the
mockups illustrative.

---

## 5. robots.txt

`/signin` is the only disallowed path. Placeholder routes are handled with
`noindex` instead of `Disallow` on purpose: a disallowed URL is never fetched,
so the crawler never sees the `noindex` and the URL can still surface as a bare
link.

Answer-engine crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
Google-Extended, Applebot-Extended, Bingbot) are allowed explicitly rather than
left to a wildcard. For a product positioned on AI, being citable in AI answers
is a first-class channel.

---

## 6. Verification

- `npm run lint` — clean
- `npm run build` — clean, 32 static routes
- 26 rendered HTML pages checked programmatically: exactly one `<title>`, one
  `<h1>`, one `meta description` and one absolute canonical per page; complete
  `og:*` and `twitter:*` blocks; `og:url` matches canonical everywhere; all
  JSON-LD parses; `noindex` present on exactly the 12 placeholders + `/signin`
  and nowhere else; `lang="en-IN"` everywhere.
- Playwright at 390 / 768 / 1440 over 13 routes: all 200, zero horizontal
  overflow, zero page errors.
- Sitemap: 13 URLs, all `https://notifyhub.ai`, fixed `lastmod`.

---

## 7. What code cannot do — the off-site list

Ranked by impact. None of this is in the repo.

1. **Finish the .in → .ai migration properly.** This outranks everything else
   here. Keep the `.in` domains alive, 301 every `.in` URL to its `.ai`
   equivalent one-to-one (not all to the homepage), then file a Change of
   Address in Search Console for the `.in` property. A botched migration loses
   whatever authority the `.in` domain has; a clean one transfers it.
2. **Google Search Console + Bing Webmaster Tools** on `notifyhub.ai`. Submit
   the sitemap. Add the verification token to `layout.tsx` via
   `metadata.verification` when you have it.
3. **Populate `SITE.sameAs`** with verified LinkedIn / X / GitHub / Crunchbase
   profiles. This is what turns the `Organization` schema into a brand knowledge
   panel, and it is currently the largest single gap.
4. **Google Business Profile** if there is a registered office. Local signals
   matter for "school ERP software in <city>" queries.
5. **Publish the privacy policy and terms**, then un-`noindex` them (1.5).
6. **Earn links.** On a new domain, technical SEO sets the ceiling; links decide
   where under it you land. Indian EdTech directories, G2/Capterra/SoftwareSuggest
   listings, and the school/college customer sites themselves.
7. **Start the blog.** `/resources/blog` is wired and waiting. Three or four
   real posts on school-ERP evaluation would justify un-`noindex`ing the
   resources tree and give the long tail somewhere to land.

---

## 8. Files

**New**
```
src/lib/seo.ts                     schema builders + pageMetadata()
src/lib/faq.ts                     FAQ content
src/components/seo/json-ld.tsx     server-rendered JSON-LD
src/components/pages/faq.tsx       FAQ section
src/app/manifest.ts                web app manifest
scripts/render-og.mjs              npm run og
scripts/render-icons.mjs           npm run icons
public/og/*.png                    7 share cards
public/{logo,icon-192,icon-512,apple-touch-icon}.png
```

**Modified** — `src/lib/constants.ts`, `src/app/layout.tsx`,
`src/app/{page,sitemap,robots}.ts(x)`, `package.json`, and all 25 route
`page.tsx` files.
