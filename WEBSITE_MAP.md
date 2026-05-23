# WEBSITE_MAP.md

## Live Production Site

- **Domain:** https://mattlaurierealestate.com
- **Source repo/worktree:** `/root/openclaw-backup/workspace/landing-page`
- **Hosting:** GitHub Pages
- **Deploy method:** push to `main`

## Lender Landing Pages

These are static HTML lender-specific preapproval pages on the live GitHub Pages site.

### Current lender routes

- `/movementmortgage/`
  - Lender: **John DePaul Jr**
  - Company: **Movement Mortgage**
  - Apply link: `https://easyapp.movement.com/apply/create_profile?userid=10105721`
  - Image: `john-depauljr.jpg`

- `/centrallending/`
  - Lender: **Mark Principi**
  - Company: **Central Lending**
  - Apply link: `https://markprincipi.floify.com/apply`
  - Image: `mark-principi.jpg`

- `/cmghomeloans/`
  - Lender: **Daniel Lohn**
  - Company: **CMG Home Loans**
  - Apply link: `https://my.cmghomeloans.com/homehub/signup/dlohn@cmghomeloans.com?from_mobile_share=true`
  - Image: `daniel-lohn.jpg`

- `/trinity/`
  - Partner: **Drew Smith**
  - Company: **Trinity Solutions**
  - Service: Credit repair and credit education for buyers working toward mortgage readiness
  - CTA link: `https://thehub.leadbridgesolutions.com/v2/preview/yHO4iywozLYPl4MdfxG4?notrack=true`
  - Schedule link: `https://api.leadconnectorhq.com/widget/booking/3tpCbOnUGAkNzrj2H153`
  - Website: `https://trinitysolutionsusa.com/`
  - Email: `info@trinitysolutionsusa.com`
  - Image: `drew-smith-trinity.jpg`

- `/dan/`
  - Behavior: redirects to Dan's token-gated sponsor leads dashboard at `https://webhook.mattlaurierealestate.com/leads/sponsor?token=dc-4pKsNw8R`
  - Shows leads tagged `dan_cmg` or explicitly assigned to Dan/CMG.

- `/cindy/`
  - Behavior: redirects to Cindy's token-gated sponsor leads dashboard at `https://webhook.mattlaurierealestate.com/leads/sponsor?token=cs-6vJpQw8K`
  - Shows leads explicitly assigned to Cindy/Guild or tagged `cindy_guild` by a future intake route.

- `/applywithcmg/`
  - Behavior: redirects to Dan's CMG application link with UTM params.
  - Used in Dan-routed buyer Facebook/Instagram automated email so the email stays clean instead of showing the long CMG URL.
  - Destination: `https://my.cmghomeloans.com/homehub/signup/dlohn@cmghomeloans.com?from_mobile_share=true&utm_source=mattlaurierealestate&utm_medium=email&utm_campaign=dan_cmg_buyer_autoreply`

## Dan / CMG Lead Routing

- All new buyer Facebook/Instagram lead form leads default to sponsor/lender key `dan_cmg`.
- Seller Facebook/Instagram leads are not routed to Dan by default.
- Implemented in both intake paths:
  - Real-time webhook: `/root/webhook-server.py`
  - Polling fallback: `/root/fb-leads-monitor.py`
- Client-facing buyer email: sent to the buyer, CC `dlohn@cmghomeloans.com`, BCC `dannyloan1@gmail.com`.
- Internal lead notification: sent via AgentMail to `dlohn@cmghomeloans.com`, BCC `dannyloan1@gmail.com`.
- Dan dashboard: `https://mattlaurierealestate.com/dan/`.

- `/preapproval/`
  - Current behavior: redirects to `/buyers/`
  - Reserved for future reuse

## Reusable pattern for adding more lender pages

To add another lender page in the future:

1. Copy either:
   - `/movementmortgage/index.html`, or
   - `/centrallending/index.html`
2. Create a new route folder, for example: `/newlendername/`
3. Update all lender-specific values:
   - page title
   - meta description
   - `og:url`
   - lender name
   - company name
   - phone
   - email
   - website
   - NMLS number
   - bio text
   - CTA button text
   - application link
   - image filename and alt text
   - disclosure line (example: `Powered by Floify™ through Central Lending`)
4. Add the lender image to the repo root if needed
5. Add the new route to `sitemap.xml`
6. Commit and push to `main`

## Notes

- Keep Matt's phone as the page-level fallback contact unless told otherwise.
- Preserve tracking scripts already present on these pages.
- Keep the lender disclosure line consistent with the application platform branding.
- For credit repair pages, avoid guaranteed score increases, guaranteed approval claims, or fixed timelines.
- Current live lender template is based on the original `/preapproval/` page that was split into dedicated lender routes on 2026-04-20.
