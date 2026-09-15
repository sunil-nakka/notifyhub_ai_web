# NotifyHub.ai Corporate Website — Pass-1 Final Verification

**Date:** 2026-09-14
**Repo:** `notifyhub_ai_web`
**Status:** PASS — Pass-1 website verified and frozen.
**Scope:** Verification and surgical correction only. No redesign, no rewrite, no new routes.

---

## 1. Future Verticals

Section retained on the homepage. Individual chip label is **Exploring**
(`src/components/home/trust.tsx` → `FutureVerticals`), sourced from
`FUTURE_VERTICALS` in `src/lib/products.ts`.

Rendered hierarchy verified in the built HTML:

| Tier | Items |
|---|---|
| Available | School, College |
| Coming soon | Hospital, Restaurant |
| Exploring | Clinics, Gyms, Apartment communities, Service businesses, Insurance, Finance, Retail |

Section lede reads "These are directions under consideration, not products."
No pricing, dates, launch commitments, customer claims or availability claims
appear against any Exploring vertical.

`STATUS_LABEL.future` and the `StatusPill` fallback both resolve to `Exploring`.

## 2. Positioning audit

Full rendered-text sweep of every route at 1440px. Zero occurrences of:

`notification` · `messaging` · `WhatsApp` · `campaign` · `marketing automation`
· `broadcast` · `SMS` · `reminder` · `bulk message` · `delivery record`

Narrative confirmed end to end as
**Operations → ERP Data → Analytics & Signals → AI Intelligence → Insights → Actions**
(`src/components/architecture/intelligence-flow.tsx`, rendered on `/` and `/ai`).

`/ai` states explicitly: "Signals are produced by deterministic analytics. AI
explains them and proposes an action; it does not compute them." AI is
positioned as a layer inside the ERP, not a standalone chatbot.

## 3. Product status

Product-level only, single-sourced from `src/lib/products.ts`:

- School — Available
- College — Available
- Hospital — Coming soon
- Restaurant — Coming soon

No capability-level status badges anywhere. Zero occurrences of
`roadmap` · `in development` · `not shipped` · `coming later` ·
`planned interface` · `phase N` · `backend readiness` · `contract` ·
`frozen` · any internal contract or feature ID (C4, C5, F1, F2, F3, AI-0x).

## 4. AI pages

Three real capability pages, all HTTP 200 and in the sitemap:

- `/ai/institution-intelligence` — **Institution Intelligence** (terminology retained; never "Institution Health")
- `/ai/operational-intelligence`
- `/ai/risk-insights`

## 5. Product capability language

School (`/school`): Admissions & enquiries · Students & academics · Attendance ·
Fees & finance · Staff & administration · Institutional analytics, plus three
intelligence capabilities.

College (`/college`): Academic structure · Student management · Student import ·
Attendance · Fees & collections · Administration, plus the shared
Institutional Intelligence section (Attendance, Fee Management, Institutional
Analytics, AI Insights).

Presented as committed product capability. No roadmap labels, no component-level
completeness exposed.

## 6. Hospital and Restaurant

Both pages retained. `Coming soon` carried at product level only. Interface
mockups labelled **Illustrative**. Neither page links to a product domain
(`hms.` / `restaurant.notifyhub.ai`), so no availability is implied.

## 7. Proof and credibility

No customers, logos, testimonials, ratings, statistics, awards, certifications,
compliance claims, revenue or performance results. Every numeric value on the
site sits inside a mockup labelled `Demo data`, `Example` or `Illustrative`.
`/legal/security` states plainly that SOC 2, ISO and HIPAA are not claimed.
`Customer stories` remains an empty, honest placeholder.

## 8. Technical verification

Executed in a clean mirror of the repo (`npm ci` against the committed
`package-lock.json`), Next.js 16.3.5 / React 19.2.8 / Node 22.

```
npm run lint    → PASS (0 problems)
npm run build   → PASS (31/31 static routes prerendered, TypeScript clean)
```

Playwright (Chromium) across **390px / 768px / 1440px**, 26 routes each:

| Check | Result |
|---|---|
| Horizontal overflow | **0** at all three widths |
| Page errors (pageerror / console.error / failed requests) | **0** |
| Routes returning non-200 | **0** |
| Pass-1 routes rendering | **9/9** |
| Internal navigation links resolving | **26/26**, 0 broken |
| Product-domain links correct | Yes — only Available products link out (`school.` / `college.notifyhub.ai`); Hospital and Restaurant link internally |
| Old `.in` URLs remaining | **0** (source and built output) |
| Canonical URLs on `notifyhub.ai` | 26/26 |
| OpenGraph URLs on `notifyhub.ai` | 26/26 |
| JSON-LD URLs on `notifyhub.ai` | Organization (all routes) + WebSite (`/`), both server-rendered into the initial HTML |
| `sitemap.xml` | 25 URLs, all `https://notifyhub.ai` |
| `robots.txt` | `Allow: /`, `Disallow: /signin`, `Host` and `Sitemap` both `https://notifyhub.ai` |

### Corrections applied during verification

Three defects found and fixed surgically; no other files touched.

1. `og:url` was absent on all three `/ai/*` capability pages, so OpenGraph fell
   back to the site root instead of the page. Added an explicit `openGraph`
   block with `url` to each.
   — `src/app/ai/institution-intelligence/page.tsx`, `src/app/ai/operational-intelligence/page.tsx`, `src/app/ai/risk-insights/page.tsx`
2. The footer AI column omitted **Institution Intelligence**, leaving the
   flagship AI page unreachable from the footer.
   — `src/lib/navigation.ts`
3. The footer descriptor read "AI-powered software for modern operations",
   diverging from the locked primary positioning line. Now single-sourced from
   `SITE.tagline` ("AI-powered software for real-world operations").
   — `src/components/footer/site-footer.tsx`

Lint, build and the full Playwright sweep were re-run after these changes; all
results above are from the final build.

## 9. Scope

Frozen at the Pass-1 route set. No new `/resources`, `/solutions`, `/careers`
or other pages were added.

```
/
/platform
/school
/college
/hospital
/restaurant
/ai/institution-intelligence
/ai/operational-intelligence
/ai/risk-insights
```

Existing stubs (`/ai`, `/about`, `/contact`, `/signin`, `/legal/*`,
`/resources/*`, `/solutions/*`, `/careers`) remain wired and rendering, and are
unchanged.

## 10. Domain migration readiness

The website contains no `.in` references. All canonical, OpenGraph, JSON-LD,
sitemap and robots URLs already resolve to `notifyhub.ai`, and product links
resolve to `school.notifyhub.ai` and `college.notifyhub.ai`. The corporate site
is ready for the migration, which is to be handled as a separate phase from
website development.

Target: `notifyhub.ai`, `school.notifyhub.ai`, `college.notifyhub.ai`,
`hms.notifyhub.ai`, `restaurant.notifyhub.ai`. Existing `.in` domains stay live;
permanent redirects are configured only after the new domains are verified. No
Vercel project or Cloudflare `.in` DNS configuration is to be deleted yet.

---

## Notes for a later pass (no action taken)

- `sitemap.xml` currently lists the thin stub routes (`/resources/*`,
  `/solutions/*`, `/careers`). Indexing them before they carry content invites
  thin-content signals. Consider excluding stubs from the sitemap when the
  migration is done — deliberately left unchanged here to respect the freeze.

## Verification environment

Verification ran in a clean mirror of the repository rather than on the
development machine: the Windows update of 8 September still prevents the
agent shell from mounting `D:\Projects\NotifyHub`. The mirror was built from
the repository's own `package-lock.json`, so the dependency tree is identical.
The five corrected files were written back to the repository.

To reproduce locally:

```bash
cd D:\Projects\NotifyHub\notifyhub_ai_web
npm run lint
npm run build
npx next start -p 3000
```
