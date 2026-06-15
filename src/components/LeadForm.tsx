"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import type { FormVariant, LeadInput, TrainingInterest } from "@/lib/validation";

type FormState = "idle" | "submitting" | "success" | "error";

type LeadFormProps = {
  variant: FormVariant;
  defaultTrainingTrack?: TrainingInterest;
};

const empty = (interest: LeadInput["interest"]): LeadInput => ({
  name: "",
  email: "",
  mobile: "",
  company: "",
  interest,
  message: "",
});

export function LeadForm({ variant, defaultTrainingTrack = "azure-linux-training" }: LeadFormProps) {
  const fixedInterest: LeadInput["interest"] =
    variant === "startup-support" ? "startup-support" : defaultTrainingTrack;

  const [form, setForm] = useState<LeadInput>(() => empty(fixedInterest));
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [successInfo, setSuccessInfo] = useState<{
    note?: string;
    previewUrl?: string;
    id?: string;
    isDev?: boolean;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setFieldErrors({});
    setSuccessInfo(null);
    setSubmitError(null);

    const payload: LeadInput = {
      ...form,
      interest: variant === "startup-support" ? "startup-support" : form.interest,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      let data: Record<string, unknown> = {};
      const contentType = res.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        data = (await res.json()) as Record<string, unknown>;
      } else {
        const text = await res.text();
        console.error("[LeadForm] Non-JSON response", res.status, text.slice(0, 200));
        setSubmitError(
          res.status === 404
            ? "Form API not found on this domain (404). Confirm the site is deployed on Vercel with the latest code."
            : `Server returned ${res.status}. The site may not be running the Next.js app on this URL.`,
        );
        setState("error");
        return;
      }

      if (!res.ok) {
        if (data.fieldErrors && typeof data.fieldErrors === "object") {
          setFieldErrors(data.fieldErrors as Record<string, string[]>);
        } else {
          setSubmitError(
            res.status === 500
              ? "Server error (500). Check Vercel deployment logs for /api/leads."
              : `Request failed (${res.status}).`,
          );
        }
        setState("error");
        return;
      }

      setState("success");
      setSuccessInfo({
        note: typeof data.emailNote === "string" ? data.emailNote : undefined,
        previewUrl: typeof data.previewUrl === "string" ? data.previewUrl : undefined,
        id: typeof data.id === "string" ? data.id : undefined,
        isDev: Boolean(data.isDev),
      });
      setForm(empty(fixedInterest));
    } catch (err) {
      console.error("[LeadForm] Submit failed:", err);
      setSubmitError(
        "Could not reach the server. Disable ad blockers, use the same URL you deployed on Vercel, and check Network → Fetch/XHR for “leads”.",
      );
      setState("error");
    }
  }

  function field(name: keyof LeadInput) {
    return {
      value: form[name] ?? "",
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
      ) => setForm((f) => ({ ...f, [name]: e.target.value })),
      "aria-invalid": Boolean(fieldErrors[name]?.length),
    };
  }

  if (state === "success") {
    return (
      <div
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 sm:p-8"
        role="status"
      >
        <p className="text-lg font-semibold text-white">Thank you — we got your details</p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          We will contact you within one business day.
          {successInfo?.id ? ` Reference: ${successInfo.id.slice(0, 8)}` : ""}
        </p>
        {successInfo?.note ? (
          <p className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-xs leading-relaxed text-[var(--color-text-muted)]">
            {successInfo.note}
          </p>
        ) : null}
        {successInfo?.previewUrl ? (
          <p className="mt-3 text-sm">
            <span className="text-[var(--color-text-muted)]">Localhost test email: </span>
            <a
              href={successInfo.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-[var(--color-accent)] underline"
            >
              Open preview in browser
            </a>
          </p>
        ) : null}
        {successInfo?.isDev ? (
          <p className="mt-3 text-xs text-zinc-500">
            On localhost, leads are also saved in <code className="text-zinc-400">data/leads.json</code>.
            For real Gmail, add WEB3FORMS_ACCESS_KEY to .env.local (free at web3forms.com).
          </p>
        ) : null}
        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          Or email{" "}
          <a href={`mailto:${site.contactEmail}`} className="text-[var(--color-accent)] underline">
            {site.contactEmail}
          </a>
        </p>
        <button
          type="button"
          className="mt-6 text-sm text-[var(--color-accent)] hover:underline"
          onClick={() => setState("idle")}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="motion-hover-lift space-y-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-6 md:p-8"
      noValidate
    >
      {variant === "training" ? (
        <FormField label="Training track" id="interest" required>
          <select
            id="interest"
            className={inputClass}
            value={form.interest}
            onChange={(e) =>
              setForm((f) => ({ ...f, interest: e.target.value as TrainingInterest }))
            }
          >
            <option value="azure-linux-training">Azure / Linux Administration</option>
            <option value="devops-cloud-training">DevOps / Cloud Engineering</option>
          </select>
        </FormField>
      ) : (
        <input type="hidden" name="interest" value="startup-support" />
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" error={fieldErrors.name?.[0]} id="name" required>
          <input id="name" type="text" autoComplete="name" required className={inputClass} {...field("name")} />
        </FormField>
        <FormField label="Email" error={fieldErrors.email?.[0]} id="email" required>
          <input id="email" type="email" autoComplete="email" required className={inputClass} {...field("email")} />
        </FormField>
        <FormField label="Mobile" error={fieldErrors.mobile?.[0]} id="mobile" required>
          <input id="mobile" type="tel" autoComplete="tel" required placeholder="+91 ..." className={inputClass} {...field("mobile")} />
        </FormField>
        <FormField label="Company (optional)" id="company">
          <input id="company" type="text" className={inputClass} {...field("company")} />
        </FormField>
      </div>

      <FormField label="Message (optional)" id="message">
        <textarea
          id="message"
          rows={4}
          placeholder={
            variant === "training"
              ? "Your experience and preferred batch timing..."
              : "Your cloud stack, team size, and support needs..."
          }
          className={`${inputClass} resize-y`}
          {...field("message")}
        />
      </FormField>

      {state === "error" && !Object.keys(fieldErrors).length ? (
        <p className="text-sm text-red-400" role="alert">
          {submitError ?? "Something went wrong."} Email{" "}
          <a href={`mailto:${site.contactEmail}`} className="underline">
            {site.contactEmail}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-[var(--color-accent)] py-3.5 text-sm font-semibold text-black hover:bg-[var(--color-accent-dim)] disabled:opacity-60 sm:w-auto sm:min-w-[200px] sm:px-8"
      >
        {state === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]";

function FormField({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[var(--color-text-muted)]">
        {label}
        {required ? <span className="text-[var(--color-accent)]"> *</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
