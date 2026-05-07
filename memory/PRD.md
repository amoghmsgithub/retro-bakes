# Retro Bakes Store — PRD

## Original Problem Statement
Premium modern landing page for "Retro Bakes Store", a local Bangalore bakery in Vijayanagar (107, 8th Main Rd). Dark luxury theme · warm cream + pastel accents · glassmorphism · smooth Framer Motion animations · mobile-first · Instagram-worthy.
Business: 4.8★ from 197+ reviews · ₹1–200 per person · phone 073376 63417.
Target: college students, couples, birthday celebrations, families, dessert lovers, Insta audience, Bengaluru locals.

## User Choices (from ask_human)
- Both — landing page + custom-cake enquiry form persisted to MongoDB + admin view
- Curated Unsplash stock images
- Dark only (no theme toggle)
- Embed Vijayanagar Google Maps iframe
- Designer's choice palette → archetype "Jewel & Luxury" (warm hazelnut #C7A17A on ink #0F0C0B)

## Architecture
- Frontend: React 19 + Tailwind + Framer Motion + Shadcn UI + Sonner toasts
- Backend: FastAPI + Motor (Async Mongo) on `/api` prefix
- DB: MongoDB collection `cake_enquiries`
- Routes: `/` (landing), `/admin` (key-gated enquiry list)

## What's Been Implemented (Dec 2025)
- Hero with parallax bakery interior, floating dust particles, rating badge, dual CTAs
- Featured Desserts grid: Rasmalai, Blueberry Cheesecake, Sinful Chocolate, Hazelnut Brownie — each WhatsApp-orderable
- Customer Review carousel (auto-rotate + prev/next/dots)
- Instagram bento gallery (7 tiles, hover overlay)
- About section with 3 brand pillars + "Since 2018" accent
- Custom Cakes section with services grid + booking CTA
- Store Visit with embedded dark-themed Google Maps iframe + tel/get-directions CTAs
- Footer with quick links, social, hours
- Floating WhatsApp button (pulsing) + mobile sticky CTA bar
- Custom Cake Enquiry Dialog (Shadcn Dialog + Select + Textarea) → persists to Mongo
- Admin dashboard at `/admin` with key auth (`ADMIN_KEY` in backend/.env), enquiry list with quick call/WhatsApp actions
- Premium loading screen, scroll-reveal animations, smooth scroll nav
- SEO meta + OG tags + Playfair Display + Outfit fonts
- All interactive elements have `data-testid`

## Backend Endpoints
- `GET /api/` health
- `POST /api/cake-enquiry` create enquiry
- `GET /api/cake-enquiries?admin_key=…` list (key-protected)

## Test Status
Iteration 1: Backend 12/12 pytest passed · Frontend e2e all flows passed (success rate 100%/100%).

## Backlog
- P1: Replace mock testimonials with real Google reviews API
- P1: Add server-side rate-limit / spam protection on enquiry endpoint
- P2: Email/WhatsApp auto-acknowledgement to customer on enquiry submit
- P2: Lazy/blurred image placeholders for gallery & hero
- P2: Schema.org LocalBusiness + Bakery JSON-LD for SEO
- P3: Light-mode toggle (deferred per user choice)

## Credentials
- Admin key: `retro-admin-2025` (backend/.env) → used at `/admin`
