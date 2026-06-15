# Email on localhost

Deploy is **not required** to test the form. Leads are always saved to `data/leads.json`.

## What happens when you submit on localhost

1. Lead is saved to **`data/leads.json`**
2. In development, a **test email** is sent via Ethereal (fake SMTP)
3. After submit, the success screen shows **“Open preview in browser”** — that is your test email
4. The terminal also prints the preview URL

## Real email to tbesh@gmail.com (recommended)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up with **tbesh@gmail.com**
3. Copy your access key
4. Add to `.env.local`:

```env
WEB3FORMS_ACCESS_KEY=your-key-here
```

5. Restart: `npm run dev:fresh`

Submissions will then email your Gmail inbox on localhost and in production.

## Production (Vercel)

1. Add the same `WEB3FORMS_ACCESS_KEY` in **Vercel → Project → Settings → Environment Variables** (Production).
2. Redeploy after saving the variable.
3. Leads are **not** written to `data/leads.json` on Vercel (serverless disk is read-only); email via Web3Forms/SMTP is the store.

## Gmail SMTP (alternative)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tbesh@gmail.com
SMTP_PASS=your-gmail-app-password
```

Use a [Google App Password](https://myaccount.google.com/apppasswords), not your normal password.
