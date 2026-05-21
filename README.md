# Tbesh Enterprise — Lead-focused website

Marketing site for **Tbesh Enterprise**: Azure/Linux & DevOps training, plus startup cloud infrastructure support. Built with **Next.js** (App Router), lead capture API, and email notifications.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — company profile, services overview, CTAs |
| `/training` | Azure/Linux & DevOps / cloud engineering programs |
| `/startup-support` | Cloud infra, L1/L2, server & cloud support |
| `/contact` | Lead capture form (name, email, mobile, interest, message) |

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your SMTP and email addresses
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Fix "Internal Server Error" or missing chunk errors

Usually a stale process or corrupted `.next` cache:

```bash
npm run dev:fresh
```

Or manually:

```bash
lsof -ti :3000 | xargs kill -9   # stop old server on port 3000
npm run clean
npm run dev
```

## Lead capture & email

1. Submissions hit `POST /api/leads` with validation (Zod).
2. Leads are stored in `data/leads.json` (gitignored; suitable for dev/small deployments).
3. If SMTP is configured, a notification email is sent to `LEAD_NOTIFY_EMAIL`.
4. Set `SEND_CONFIRMATION_EMAIL=true` to auto-reply to sign-ups.

### SMTP example (Gmail app password)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=you@gmail.com
SMTP_PASS=your-app-password
LEAD_NOTIFY_EMAIL=you@gmail.com
```

## Customize content

Edit **`src/lib/site.ts`** — company copy, phone, email, service descriptions, and interest dropdown options.

Logo: replace **`public/logo.png`** with your asset (same aspect ratio works best).

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to your production domain for SEO and sitemap.

For production lead storage, consider connecting the API route to a database (Supabase, MongoDB, etc.) instead of the JSON file.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Zod validation
- Nodemailer (SMTP)
