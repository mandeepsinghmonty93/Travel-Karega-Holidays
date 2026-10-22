# Travel Karega Holidays
Run: `npm install && cp .env.example .env.local && npm run dev` → http://localhost:3000
Checks: `npm run typecheck && npm run lint && npm run build`
Deploy: push to GitHub → import in Vercel → set env vars from `.env.example`.

## Enquiries
`POST /api/enquiry` validates with Zod and forwards JSON `{from,duration,month,name,mobile,category,seater?,receivedAt}` to `ENQUIRY_WEBHOOK_URL`. Without it the API returns 503 and the form shows an error (no fake success).

## Image assets needed (public/images/) - the site falls back to a navy/teal block until added
hero-manali, hero-himachal, hero-uttarakhand, hero-rajasthan, manali-promo, why-road-journey, cta-background, dest-uttarakhand, dest-himachal, dest-rajasthan, traveller-12 / 14 / 17 / 20 / 26 (.jpg). Use licensed photos only.

## Pages
All routes built. Package content lives in `data/packages.ts`; empty fields hide their section until verified data is added.

## Missing business info
Phone, WhatsApp, email, exact address, social links, verified prices, itineraries, reviews, vehicle specs.

## Homepage design images (add to public/images/)
banner-traveller.jpg, about-travel.jpg, dest-madhya-pradesh.jpg, dest-goa.jpg (plus the earlier list). Missing files show a navy/teal block.
Orange accent (`accent` in tailwind.config.ts) comes from the supplied design; change one value to switch to brand gold.
