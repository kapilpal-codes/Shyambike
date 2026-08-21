# Shree Shyam Bike Point — Landing Page PRD

## Original Problem Statement
Build a modern, responsive, mobile-friendly landing page for Shree Shyam Bike Point (श्री श्याम बाइक पॉइंट), a motorcycle service & repair business in Ghaziabad. Bold, premium garage aesthetic (reds, blacks, metallic greys) with sports motorcycle imagery. Required sections: Hero (headline, EN+HI business name, Call Now / Get Directions), About & Services, Testimonials (4.2/5, Kapil Pal + HEERA LAL reviews verbatim), Contact & Location footer (address, phone 093150 07160, Mon–Sun 8 AM–9 PM, email shyambikepoint@gmail.com), brands Hero/Honda/Bajaj/TVS/Yamaha, clickable phone, floating WhatsApp/Call buttons. Get Directions link: https://maps.app.goo.gl/7y4157TBdPXoKGM47. Embedded Google Map in Contact section.

## Architecture
- Frontend-only React SPA (CRA + craco + Tailwind), no backend dependency; backend server.py untouched (default template).
- framer-motion (kinetic masked headline reveals, scroll parallax, section reveals), lenis (smooth momentum scrolling), react-fast-marquee (editorial brand marquee), lucide-react icons.
- Design system: #0A0A0A bg, #FF3B30 accent, Anton display font, IBM Plex Sans/Mono, Noto Sans Devanagari for Hindi. Grain overlay, sharp 0px-radius geometry, 1px white/10 grid borders.
- Components: Navbar, Hero, Marquee, About, Services, Brands, Testimonials, Contact, Footer, FloatingActions, Reveal (shared animation primitives), data/site.js (single source of business info).

## User Personas
- Local rider needing quick repair/service who wants to call or navigate to the shop instantly (mobile-first).
- Parts buyer checking if genuine spares are stocked.
- New customer building trust via reviews and brand coverage.

## Core Requirements (static)
Hero with masked line-by-line headline, parallax bike imagery, dual CTAs; About with garage story + value props; numbered service manifesto; brand strip (Hero, Honda, Bajaj, TVS, Yamaha); testimonials with 4.2/5 rating and verbatim reviews; contact block with embedded Google Map, tel: links, hours, email; floating WhatsApp + Call buttons; full data-testid coverage.

## Implemented (2026-07-16)
- All sections above, fully responsive (verified desktop 1920px + mobile 390px)
- Lenis smooth scroll + navbar anchor navigation via lenis.scrollTo
- Hero parallax background + masked kinetic headline + staggered load reveals
- Embedded interactive Google Map (plus-code JCP4+F4 Ghaziabad), dark-styled with hover-to-color
- Floating WhatsApp (wa.me/919315007160) + Call (tel:+919315007160) pulse buttons
- Fixed: negative z-index hero bg bug; whileInView-inside-overflow-hidden IntersectionObserver deadlock (variants-based LineReveal)
- "Rate us on Google" button in Testimonials rating card, linked DIRECTLY to the write-review form: https://search.google.com/local/writereview?placeid=ChIJfwPtN23vDDkRvp40oY6Tfiw (place ID derived from listing hex 0x390cef6d37ed037f:0x2c7e938ea1349ebe and verified against the live Maps listing)
- THEME REDESIGN (2026-07-16): "Gunmetal & Amber" evolved into a continuous dark "Midnight Steel & Amber" theme per user feedback — whole page is now one deep midnight steel-blue (#1C2430 sections, #161C26 alternating, #26303E cards) with burnt orange accent (#EA580C), Oswald headings + Manrope body, cinematic hero image, portrait avatars on review cards, amber marquee strip, grain at 3%
- 3D & PREMIUM PASS (2026-08-19): cursor-tracked 3D parallax hero (bike image tilts/shifts with mouse + moving orange spotlight glow via useMotionTemplate, headline counter-moves), reusable Tilt component (framer-motion transformPerspective) on brand cards and review cards, card-3d deep shadows on rating card, about image frame, parts card

## Backlog
- P0: none blocking
- P1: Real shop photos from owner (replace stock imagery); Google Business "Write a review" link; service price list
- P2: WhatsApp booking form with prefilled service options; photo gallery; Hindi language toggle; SEO meta/OG tags + LocalBusiness schema

## Next Tasks
1. Ask owner for real garage photos and swap stock images
2. Add LocalBusiness JSON-LD schema for SEO
3. Add click-to-review link to Google listing
