import nodemailer from "nodemailer";
import type { LeadInput } from "./validation";
import { site } from "./site";

const NOTIFY_EMAIL = site.leadNotifyEmail;

const labels: Record<LeadInput["interest"], string> = {
  "azure-linux-training": "Azure / Linux Administration Training",
  "devops-cloud-training": "DevOps / Cloud Training",
  "startup-support": "Startup Support Services",
};

function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function isWeb3FormsConfigured() {
  return Boolean(process.env.WEB3FORMS_ACCESS_KEY);
}

function createTransport() {
  const port = Number(process.env.SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

function payloadText(lead: LeadInput) {
  return [
    `New lead — ${site.legalName}`,
    `Service: ${labels[lead.interest]}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Mobile: ${lead.mobile}`,
    `Company: ${lead.company || "—"}`,
    `Message: ${lead.message || "—"}`,
    `Time: ${new Date().toISOString()}`,
  ].join("\n");
}

async function sendViaSmtp(lead: LeadInput, transport?: nodemailer.Transporter) {
  const t = transport ?? createTransport();
  const info = await t.sendMail({
    from: process.env.SMTP_FROM ?? `"${site.legalName}" <${process.env.SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: lead.email,
    subject: `[Tbesh] ${labels[lead.interest]} — ${lead.name}`,
    text: payloadText(lead),
  });
  return info;
}

/** Ethereal — test inbox on localhost (preview URL in terminal) */
async function sendViaEthereal(lead: LeadInput) {
  const testAccount = await nodemailer.createTestAccount();
  const transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
  const info = await transport.sendMail({
    from: `"${site.legalName}" <${testAccount.user}>`,
    to: NOTIFY_EMAIL,
    replyTo: lead.email,
    subject: `[Tbesh DEV] ${labels[lead.interest]} — ${lead.name}`,
    text: payloadText(lead),
  });
  const preview = nodemailer.getTestMessageUrl(info);
  return preview || undefined;
}

async function sendViaWeb3Forms(lead: LeadInput) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `[Tbesh] ${labels[lead.interest]} — ${lead.name}`,
      from_name: site.legalName,
      name: lead.name,
      email: lead.email,
      mobile: lead.mobile,
      company: lead.company || "—",
      interest: labels[lead.interest],
      message: lead.message || "—",
    }),
  });
  const data = await res.json();
  return data.success === true;
}

async function sendViaFormSubmit(lead: LeadInput) {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(NOTIFY_EMAIL)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `[Tbesh] ${labels[lead.interest]} — ${lead.name}`,
        _template: "table",
        _captcha: "false",
        name: lead.name,
        email: lead.email,
        mobile: lead.mobile,
        company: lead.company || "—",
        interest: labels[lead.interest],
        message: lead.message || "—",
      }),
    },
  );
  return res.ok;
}

export async function sendLeadNotification(lead: LeadInput) {
  if (isSmtpConfigured()) {
    try {
      await sendViaSmtp(lead);
      return { sent: true, method: "smtp" as const };
    } catch (e) {
      console.error("[leads] SMTP failed:", e);
    }
  }

  if (isWeb3FormsConfigured()) {
    try {
      if (await sendViaWeb3Forms(lead)) return { sent: true, method: "web3forms" as const };
    } catch (e) {
      console.error("[leads] Web3Forms failed:", e);
    }
  }

  try {
    if (await sendViaFormSubmit(lead)) return { sent: true, method: "formsubmit" as const };
  } catch (e) {
    console.error("[leads] FormSubmit failed:", e);
  }

  if (process.env.NODE_ENV === "development") {
    try {
      const previewUrl = await sendViaEthereal(lead);
      console.info("\n========== TBESH LEAD (localhost) ==========");
      console.info(payloadText(lead));
      if (previewUrl) console.info("Preview email:", previewUrl);
      console.info("Also saved: data/leads.json");
      console.info("For real Gmail: add WEB3FORMS_ACCESS_KEY to .env.local");
      console.info("==========================================\n");
      return {
        sent: true,
        method: "ethereal" as const,
        previewUrl,
        devNote:
          "Localhost test email created. Open the preview link below, or check data/leads.json. For real mail to Gmail, add WEB3FORMS_ACCESS_KEY in .env.local (free at web3forms.com).",
      };
    } catch (e) {
      console.error("[leads] Ethereal failed:", e);
    }
  }

  console.info("[leads]", payloadText(lead));
  const configHint =
    process.env.NODE_ENV === "development"
      ? `Add WEB3FORMS_ACCESS_KEY or SMTP to .env.local (see LOCALHOST-EMAIL.md).`
      : `Set WEB3FORMS_ACCESS_KEY (or SMTP) in Vercel Environment Variables and redeploy.`;
  return {
    sent: false,
    reason: "email_delivery_failed" as const,
    devNote:
      process.env.NODE_ENV === "development"
        ? `Lead saved in data/leads.json. Email ${NOTIFY_EMAIL} — ${configHint}`
        : `Email ${NOTIFY_EMAIL} — ${configHint}`,
  };
}

export async function sendLeadConfirmation(lead: LeadInput) {
  if (!isSmtpConfigured() || process.env.SEND_CONFIRMATION_EMAIL !== "true") return;
  await sendViaSmtp(lead);
}
