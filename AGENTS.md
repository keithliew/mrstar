# AGENTS.md — mrstar.fit Website Build Brief

## What this is
A complete static website for **MR STAR** (mrstar.fit) — a Kuantan, Pahang–based fitness organisation that runs competitions, athlete training, and workshops. This replaces the current staging.mrstar.fit build entirely. All facts below trace to: the client's Fillout form, the KERTAS CADANGAN event proposal (source of truth for the 8 Aug 2026 event), the client's brand color spec, and the staging-site screenshot (contact details). Do not invent facts; use marked placeholders where noted.

## Hard constraints
1. Static HTML/CSS/JS only. No framework, no build step. Deploys via git push to Cloudflare Pages.
2. One shared stylesheet, one small shared script (nav, IntersectionObserver fade-ups, image lazy-load). Semantic HTML, mobile-first.
3. **Language:** entire site in **English** by default. ONLY the event page (`event-thestars-2026.html`) is bilingual — **Bahasa Malaysia FIRST, English second** on that page (event targets Pahang locals). Provide `lang` attributes correctly (`lang="ms"` on BM blocks).
4. Per page: unique title, meta description, canonical URL (`https://mrstar.fit/...`), OG tags, favicon set.
5. Photos: use ONLY files from the `mrstar/` folder (145 originals supplied). Optimize selections to WebP ≤250KB, lazy-load below the fold, meaningful alt text. No stock, no AI imagery, no hotlinking.
6. All photos carry a photographer watermark ("KACASUKMA") baked in — acceptable, do not attempt to remove.

## Brand tokens (official, from client — do not deviate)
```css
--gold:  #FDC703;  /* Primary Yellow — client-specified */
--black: #000000;  /* Primary Black — client-specified */
--paper: #FFFFFF;
--grey:  #F5F5F3;  /* neutral section tint, derived */
```
**Contrast rule (non-negotiable):** #FDC703 fails WCAG AA on white (~1.6:1). Gold appears ONLY as text/elements on black, or as background behind black text. Never gold text on white. Body text = black on white or white on black.
**Type:** Display = Poppins 700/800 (matches existing brand family used by sister company Star Gym); Body = Poppins 400/500. Google Fonts.
**Motif:** the 5-point star — used as bullet marks, divider accents, and in the logo. Dark sections (black bg) alternate with white sections, mirroring the gym's black-wall/gold-logo interior visible in the photo set.

## Logo assets (already generated, in /assets/brand/)
- `logo-concept2-wordmark.png` → header logo (default recommendation; MR in black + STAR in gold, star accent). On dark headers use concept1 badge or a white-recolored variant.
- `logo-concept3-emblem-favicon.png` → favicon + social avatar (circular emblem reads at 32px).
- These are v1 concepts in Poppins; owner may supply a refined mark later — build so the logo file is swappable in one place.

## Pages & structure

### 1. index.html — Home
- **Hero:** dark (black) with a strong photo from the set (suggested: KACA9814 or similar stage-lineup shot). H1: "We build the stars of the future." Sub: "Competitions, athlete training and fitness workshops in Kuantan, Pahang — for bodybuilders, powerlifters, HYROX athletes and anyone serious about their best self." Tagline treatment somewhere in hero: "Look good, feel great."
- **Event promo band (top priority until 8 Aug 2026):** uses `hero-banner-v3-official-colors.jpg` OR a coded equivalent — The Stars Pahang 2026, date/venue/fee, CTA → event page. After the event passes, this band converts to a "Highlights" link (build the band as an easily-editable include/section).
- **What we do (3 pillars, from the client form):** Competitions · Athlete Training · Workshops (individuals, athletes, families, corporate).
- **Why MR STAR:** community mission copy from form ("Our mission is to create a community with professionals and athletes to come together as a strong nation"), values strip: Honesty · Quality · Speed · Customer focus · Innovation · Sustainability.
- **Gallery teaser:** 6-photo grid from the event photo set → gallery page.
- **Primary CTA site-wide (one phrasing):** `WhatsApp Us` → https://wa.me/60162282102 with prefilled text: "Hi MR STAR, I'd like to register / ask about The Stars Competition 2026. Name: __ | Category: __"
- Floating WhatsApp button on every page, same link.

### 2. event-thestars-2026.html — THE EVENT PAGE (bilingual, BM primary)
Every section: BM block first (visually primary, larger), EN block second. Facts locked from the KERTAS CADANGAN:

- **Titles:** BM: "Pertandingan Badan Cantik The Stars Pahang 2026" · EN: "The Stars Competition 2026". Eyebrow: "Saringan ke Mr Malaysia 2026 / Selection to Mr Malaysia 2026".
- **Facts strip:** 8 Ogos 2026 (Sabtu) · Ruang Legar Utama, Kuantan Prade, Kuantan · 9.30 pagi–4.00 petang · Yuran RM70 setiap peserta/kategori.
- **Kategori / Categories (exact, do not embellish). RULE: only "The Star" is exclusive — categories 1 and 2 are open to ALL participants:**
  1. Men's Physique — Atas 170cm & Bawah 170cm (seluar Bermuda) / Above & below 170cm (board shorts) — Terbuka kepada semua / Open to all
  2. Badan Cantik — Kategori terbuka (seluar jeans panjang) / Open category (long jeans) — Terbuka kepada semua / Open to all
  3. The Star — **Tertutup: ahli Star Gym sahaja / Closed: Star Gym members only** (do NOT describe as open)
- **Prize table (per category — never present as a lump total):**
  | Kedudukan / Placing | Hadiah / Prize |
  | Juara / Champion | RM500 + Pingat/Medal |
  | Naib Juara / Runner-up | RM300 + Pingat/Medal |
  | Tempat Ke-3 / 3rd | RM200 + Pingat/Medal |
  | Ke-4 / 4th | RM100 + Pingat/Medal |
  | Ke-5 / 5th | RM100 + Pingat/Medal |
  | Ke-6–Ke-8 / 6th–8th | Hamper + Pingat/Medal |
  Footnote: "Hadiah dianugerahkan bagi setiap kategori. / Prizes are awarded per category."
- **Tentatif Program / Programme:** 9.30 pagi Pendaftaran atlit / Athlete registration · 11.30 pagi Prejudging · 2.00 petang Perasmian & ucapan penganjur / Opening & speeches · 2.15 petang Final / Finals · diikuti Penyampaian Hadiah / followed by Prize-giving.
- **Penganjur / Organiser:** Persatuan Bina Badan Pahang (Baru), dengan kerjasama / in collaboration with Kuantan Prade.
- **Objektif section (BM, summarised from proposal):** promote bodybuilding as a healthy lifestyle in Pahang; scout new talent for Mr Malaysia 2026; promote Kuantan Prade as a sports & lifestyle venue.
- **Registration CTA:** WhatsApp buttons — Coach Sofie 016-950 8459 (wa.me/60169508459) and Coach Amir 013-983 0530 (wa.me/60139830530), each with prefilled BM message: "Salam, saya ingin mendaftar Pertandingan The Stars Pahang 2026. Nama: __ | Kategori: __"
- **Do NOT include:** event budget/expense figures (RM11,030 total, judge fees, etc. — internal only), any "RM10,000+ prizes" claim (superseded), Wushu/arm-wrestling (not in the confirmed proposal).
- FAQ accordions (bilingual): Who can join / Sesiapa boleh sertai? · What do I wear per category? · How do I pay the RM70? [payment method TO BE CONFIRMED — placeholder] · Is The Star category open to everyone? (No — Star Gym members only.)

### 3. about.html
Mission, inspiration (obesity in Southeast Asia → right guidance narrative, from form), values, "part of the Star Gym family, Kuantan" line linking to stargym.online. Founder/team: [TO BE CONFIRMED — form left blank; do not invent names].

### 4. services.html (or split later)
Three offerings with outcome copy: Competitions (organise & host), Athlete Training, Workshops (individuals / athletes / families / corporate). Each ends with the WhatsApp CTA. No pricing published (none supplied) — "WhatsApp us for a programme quote."

### 5. gallery.html
Curated 18–24 photos from the set (mix: stage lineups, judging, crowd, backstage, group shots). Grid, lazy-loaded, WebP. Caption line: "The Stars — Star Gym Kuantan" [year TO BE CONFIRMED by owner].

### 6. contact.html
- **Contact details (confirmed via staging site + form):**
  - WhatsApp (primary): +60 16-228 2102
  - Phone: +60 13-983 0530
  - Email: admin@mrstar.fit
- **Presence line (best-judgement decision, owner may override):** "Based in Kuantan, Pahang, Malaysia. We operate from partner venues and event locations across Pahang — reach us on WhatsApp." Do NOT publish a street address or opening hours (none supplied; MR STAR is event-based). Do NOT reuse Star Gym's premises address unless the owner explicitly confirms.
- **Map: OMIT ENTIRELY (owner decision).** No map embed anywhere on the site. (For reference: the old staging site shipped a default San Francisco map — this rebuild removes maps altogether.)
- **Email is a featured contact channel:** display admin@mrstar.fit prominently alongside WhatsApp (clickable mailto: link), and it is the destination for the enquiry form.
- Simple enquiry form via Web3Forms with `access_key` value `[YOUR-ACCESS-KEY]` placeholder + comment that the owner must register a free key at web3forms.com for admin@mrstar.fit. Fields: Name, WhatsApp number, Interest (Competition / Training / Workshop / Other), Message.
- **Social icons: OMIT ENTIRELY (owner decision).** Do not create or display any social media icons or links anywhere on the site — no placeholders, no footer icons.

## Footer (every page)
"MR STAR — Building the stars of the future. Competitions, training and workshops in Kuantan, Pahang." · Nav links · Contact summary · "© 2026 mrstar.fit" · Line: "Part of the Star Gym family" [linking stargym.online, TO BE CONFIRMED owner wants this cross-link].

## SEO/AEO
- FAQ JSON-LD only on the event page (BM questions acceptable; include EN too).
- Organization schema on home: MR STAR, url mrstar.fit, email admin@mrstar.fit, areaServed "Pahang, Malaysia".
- Event schema (schema.org/Event) on the event page: name (BM title), startDate 2026-08-08T09:30+08:00, endDate 2026-08-08T16:00+08:00, location Kuantan Parade Kuantan, offers RM70 MYR, organizer Persatuan Bina Badan Pahang (Baru).

## QA before handover
1. Validate HTML all pages; every asset path resolves.
2. Every figure traces to the KERTAS CADANGAN or client form — anything else is a marked placeholder.
3. Contrast check: no gold-on-white text anywhere.
4. Both wa.me links open with correct prefilled text (URL-encode!).
5. Event page reads correctly with BM first on mobile 375px.
6. No default/placeholder map. No dead social icons.
7. Images all ≤250KB WebP, correct alt text, no orphaned originals shipped.

## Deliverables
Complete site files + optimized assets + PRELAUNCH-CHECKLIST.md listing every [TO BE CONFIRMED] item (founder names, payment method for RM70, event photo year, Star Gym cross-link approval, Web3Forms key registered to admin@mrstar.fit).
