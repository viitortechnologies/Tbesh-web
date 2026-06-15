# Tbesh website — requested changes checklist

## Done in this update

| # | Request | Status |
|---|---------|--------|
| 1 | Form email to tbesh@gmail.com | Done — default inbox + Web3Forms/SMTP/FormSubmit chain |
| 2 | Separate training vs startup content | Done — `training-content.ts` and `startup-content.ts` |
| 3 | Hero carousel (one service per slide) | Done — `HeroCarousel` with 3 slides |
| 4 | Image placeholders | Done — SVG placeholders in `/public/images/` |
| 5 | Header background vs hero gradient | Done — transparent header, solid blur on scroll |
| 6 | About stats (projects, trained, etc.) | Done — 120+ trained, 45+ projects, etc. |
| 7 | Never mix two services | Done — split pages, FAQs, CTAs, forms |
| 8 | Simple English | Done — copy rewrite |
| 9 | Larger responsive logo | Done — up to 96px header height on desktop |
| 10 | Full responsiveness | Done — grids, mobile nav, overflow fix |
| 11 | Separate sign-up forms | Done — `/contact/training` and `/contact/startup-support` |

## Email setup (action required)

1. **Web3Forms (easiest):** Register at https://web3forms.com with `tbesg@gmail.com`, add to `.env.local`:
   ```
   WEB3FORMS_ACCESS_KEY=your-key
   ```
2. **Or Gmail SMTP:** Add `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` in `.env.local`
3. **FormSubmit:** First submission sends activation link to inbox — click it

## Replace placeholders

Swap files in `public/images/placeholder-*.svg` with your real photos (keep same filenames or update paths in content files).
