import type { LeadInput } from "./validation";
import {
  FORMSUBMIT_AJAX_URL,
  interestLabels,
  isFormSubmitSuccess,
  type FormSubmitResponse,
} from "./formsubmit-shared";

/** Backend-only FormSubmit inbox — never shown in site UI */
const RECIPIENT = process.env.FORMSUBMIT_RECIPIENT ?? "manager@geteazy.in";

const SERVER_AJAX_URL = `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT)}`;

export { interestLabels, isFormSubmitSuccess };

export function buildFormSubmitBody(lead: LeadInput) {
  const params = new URLSearchParams();
  params.set("_subject", `[Tbesh] ${interestLabels[lead.interest]} — ${lead.name}`);
  params.set("_template", "table");
  params.set("_captcha", "false");
  params.set("name", lead.name);
  params.set("email", lead.email);
  params.set("mobile", lead.mobile);
  params.set("company", lead.company || "—");
  params.set("interest", interestLabels[lead.interest]);
  params.set("message", lead.message || "—");
  return params;
}

export async function submitLeadViaFormSubmit(lead: LeadInput, siteOrigin: string) {
  const url = RECIPIENT === "manager@geteazy.in" ? FORMSUBMIT_AJAX_URL : SERVER_AJAX_URL;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Origin: siteOrigin,
      Referer: `${siteOrigin}/contact/training`,
    },
    body: buildFormSubmitBody(lead).toString(),
  });

  let data: FormSubmitResponse = {};
  try {
    data = (await res.json()) as FormSubmitResponse;
  } catch {
    console.error("[FormSubmit] Invalid JSON response", res.status);
    return { ok: false as const, message: "Invalid response from email service." };
  }

  if (!isFormSubmitSuccess(data)) {
    console.error("[FormSubmit] Rejected:", data.message ?? res.status);
    return { ok: false as const, message: data.message ?? "Email delivery failed." };
  }

  return { ok: true as const };
}
