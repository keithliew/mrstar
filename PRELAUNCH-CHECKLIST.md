# PRELAUNCH-CHECKLIST.md — mrstar.fit

Items below are marked `[TO BE CONFIRMED]` in the build brief or were left blank on the
client's Fillout form. Nothing on this list was invented — each is either omitted from
the live pages or shipped with a clearly-marked placeholder, as instructed. Resolve all
of these before public launch.

## 1. Founder / team names
`about.html` does not include a "Founders" or "Team" section because the client form
left this blank. **Do not invent names.** Once the owner supplies founder/team names
and (optionally) photos, add a short team section to `about.html`.

## 2. Payment method for the RM70 registration fee
The KERTAS CADANGAN does not specify how the RM70/category fee is collected (bank
transfer, online payment link, cash on-site, etc). The event page and FAQ currently say
payment details "will be confirmed by the organiser closer to the event date" and point
registrants to Coach Sofie / Coach Amir on WhatsApp. **Owner must confirm the actual
payment method** so this can be replaced with concrete instructions before 8 Aug 2026.

## 3. Event photo year for gallery captions
The 145 supplied photos (`mrstar/` folder) are from a Star Gym stage competition but the
brief does not state which year. Gallery captions currently read "The Stars — Star Gym
Kuantan" with no year, rather than guessing. **Owner to confirm the year** so it can be
added to `gallery.html` captions.

## 4. Star Gym cross-link approval
Footer ("Part of the Star Gym family") and `about.html` currently link to
`https://stargym.online` on every page, per the brief's default recommendation. The
brief flags this as **owner-confirm-required** — verify the URL is correct and that the
owner wants this live cross-link before launch.

## 5. Web3Forms access key — DONE
`contact.html` now uses the live access key registered to admin@mrstar.fit. Recommend
submitting a test enquiry once the site is deployed to confirm delivery.

## 6. Favicon / emblem logo has mirrored text
`assets-brand/logo-concept3-emblem-favicon.png` (used for `favicon-32.png`,
`favicon-16.png`, `apple-touch-icon.png`) has its arced "MR STAR / KUANTAN / PAHANG"
text mirrored (reads backwards). This is invisible at 16–32px favicon sizes but **will
look broken if this file is ever used larger** (e.g. as a social profile photo). Flag to
the designer for a corrected v2 emblem; don't reuse this asset above ~180px until fixed.

## 7. Logo is a v1 concept — swap point
Per the brief, `logo-concept1-badge.png` (black/gold badge) is used site-wide in the
header and footer on every page — it was chosen over the wordmark because the wordmark
has a baked-in white background that doesn't sit on the site's black header/footer. If
the owner supplies a refined mark, replace `assets/brand/logo-concept1-badge.png` (same
filename) to update it everywhere in one step, or do a find/replace on the `<img>` `src`
if the filename changes.

## 8. Contact "presence line" wording
The line "Based in Kuantan, Pahang, Malaysia. We operate from partner venues and event
locations across Pahang — reach us on WhatsApp." on `contact.html` is a best-judgement
default (per brief) since no street address or hours were supplied and MR STAR is
event-based. Owner may override this wording.

## 9. Domain / DNS
All canonical URLs, OG tags and JSON-LD assume `https://mrstar.fit` is the live domain
on Cloudflare Pages. Confirm the custom domain is connected before relying on these for
SEO/social sharing.

## 10. Post-event conversion of the promo band
`index.html`'s event promo band (`<!-- EVENT PROMO BAND ... -->`) is written to be
swapped for a "Highlights" link once 8 Aug 2026 passes — this still needs to be done
manually after the event.

## Not a placeholder — reminder only
- Google Fonts (Poppins) is loaded from `fonts.googleapis.com` — the only external
  network request on the site. Everything else is self-hosted static files.
