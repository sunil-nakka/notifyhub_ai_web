# notifyhub_ai_web

The NotifyHub.ai corporate website — the parent-brand site for NotifyHub's
vertical ERP products.

**Positioning:** NotifyHub builds industry-specific ERP software with AI-native
intelligence. This site is not a notification, messaging, WhatsApp, campaign or
marketing product site, and no content here should reintroduce that framing.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 with an original NotifyHub design system (`src/app/globals.css`)
- Self-hosted fonts (Inter variable + IBM Plex Mono) in `src/fonts` — no runtime
  font CDN dependency
- No UI dependencies beyond React; every chart and product mockup is hand-built
  inline SVG/CSS

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
```

Production validation:

```bash
npm run build
npm run start
npm run lint
```

## Structure

```
src/app/                 routes (see sitemap.ts for the full list)
src/components/
  navigation/            header, mega menu, mobile drawer
  footer/
  ui/                    primitives, icons, logo, motion helpers
  product-ui/            enterprise UI kit: app frames, KPI cards, charts,
                         tables, insight panels, product dashboards
  architecture/          intelligence flow, platform + AI architecture diagrams
  home/                  homepage sections
  pages/                 page hero, feature grids, stubs, forms
src/lib/
  constants.ts           brand, URLs, product domains
  products.ts            single source of truth for product name/status/URL
  navigation.ts          primary nav + footer nav
src/fonts/               self-hosted woff2
```

## Content rules baked into the code

- Product name, description, status and destination come from
  `src/lib/products.ts`. Changing a status there updates every badge, card,
  nav entry, sign-in row and contact list on the site.
- **Status is a product-level concept only.** School and College are
  Available; Hospital and Restaurant are Coming soon. Capabilities *inside* a
  product are never badged — no "Available today", "In development",
  "Roadmap", "Planned" or "Coming soon" on an individual capability, and no
  internal development status, phase names or contract IDs anywhere on the
  public site.
- Every mocked interface carries a visible `Demo data`, `Example`,
  `Example insight` or `Illustrative` label. None of the numbers on this site
  are customer data.
- NotifyHub is not positioned as a communication, notification, WhatsApp,
  messaging or marketing product. The product story is
  ERP -> operational data -> intelligence -> insights -> action.
- No pricing, customer logos, customer counts, ratings, testimonials, awards,
  certifications or compliance badges appear anywhere. `/legal/security`
  states explicitly that no certification is claimed.

## Forms

`ContactForm` and `InterestForm` POST JSON to `NEXT_PUBLIC_CONTACT_ENDPOINT`
when it is set (see `.env.example`). With no endpoint configured they compose an
email to the address in `src/lib/constants.ts`, so a submission is never
silently dropped.

## Routes

Fully built: `/`, `/platform`, `/school`, `/college`, `/hospital`,
`/restaurant`, `/ai`, `/ai/institution-intelligence`,
`/ai/operational-intelligence`, `/ai/risk-insights`, `/about`, `/contact`,
`/legal/security`.

Wired stubs (reachable, honest about being in progress): `/solutions/*`,
`/resources/*`, `/careers`, `/legal/privacy`, `/legal/terms`, `/signin`.
