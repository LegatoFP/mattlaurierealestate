# WEBSITE.md — Matt Laurie Real Estate Site Blueprint

## Architecture
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Output:** Static export (`output: 'export'`) — generates `/out` directory
- **Hosting:** Currently GitHub Pages (static HTML), migrating to Vercel
- **Domain:** mattlaurierealestate.com (CNAME)

## Design System
- **Colors:** See `src/app/globals.css` for CSS custom properties
  - Primary: #1a2332 (deep navy — trust/professionalism)
  - Accent: #c9a84c (warm gold — premium without cheese)
  - CTA: #2563eb (strong blue — action)
  - Backgrounds: white + warm off-white (#faf8f5) alternating sections
- **Typography:** Inter (Google Fonts), weights 400-800
- **Border radius:** rounded-lg (buttons), rounded-xl (cards), rounded-2xl (forms/large cards)
- **Shadows:** shadow-sm default, shadow-lg for elevated forms

## Component Library
All shared components in `src/components/`:
- `Header.tsx` — sticky nav, KW compliance bar, mobile hamburger, CTA button
- `Footer.tsx` — 4-column: agent info + Bucks County links + NE Philly links + resources
- `LeadForm.tsx` — configurable seller/buyer form, webhook submission, conversion tracking
- `StatsBar.tsx` — dark bar with 4 key stats
- `Testimonials.tsx` — 6 Zillow reviews in 3-column grid
- `TrackingScripts.tsx` — GA4, Google Ads, Facebook Pixel (all using next/script)

## Pages Structure
- `/` — Homepage with dual buyer/seller hero, value props, neighborhoods hub, seller form, testimonials, about snippet
- `/first-time-homebuyer-bucks-county/` — Buyer landing page (grants/programs angle)
- `/sellers/` — General seller hub
- `/about/` — About Matt
- `/neighborhoods/` — Directory of all served areas
- `/newtown/`, `/yardley/`, `/bensalem/`, etc. — Town-specific seller pages
- `/19154/`, `/19116/`, etc. — NE Philly zip code pages
- `/privacy-policy/`, `/terms/` — Legal pages

## Tracking (all pages via layout)
- GA4: G-92S2CKS0QS
- Google Ads: AW-898844952
- Facebook Pixel: 1692674915052372
- Lead form fires: gtag conversion + GA4 generate_lead + FB Lead pixel

## Lead Form Webhook
- POST to `https://178.156.230.106:443/webhook/lead`
- Payload: name, phone, email, address (seller), area (buyer), lead_type, source_page, town
- mode: no-cors (fire and forget)

## SEO
- Schema: RealEstateAgent JSON-LD on homepage
- Each town page gets its own schema + FAQPage schema
- Open Graph + Twitter cards via Next.js metadata
- Sitemap: auto-generated
- Google Search Console: already verified (XYAy0HOF6p7UtV_TosuNZtpvid4TV8smAFyFlJCYYq8)

## Deployment
- `npm run build` → generates `/out` static files
- Current: push to GitHub Pages repo (LegatoFP/mattlaurierealestate)
- Future: Vercel auto-deploy from git

## Brand Voice Rules (from playbook)
- Informal, direct, local — NOT corporate/luxury
- Sound like a smart local guy, not a marketing department
- Lead with usefulness, not hype
- "Free money for buyers" is the core buyer hook
- "What's your home worth?" is the core seller hook

## PA Compliance (mandatory on every page)
- KW broker name: Keller Williams Real Estate
- KW broker phone: (215) 757-6100
- PA License: #RS333171
- Office: 584 Middletown Blvd Suite A50, Langhorne, PA 19047
- "Not a solicitation" disclaimer in footer
