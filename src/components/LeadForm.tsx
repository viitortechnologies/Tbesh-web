"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import {
  FORMSUBMIT_AJAX_URL,
  interestLabels,
  isFormSubmitSuccess,
  type FormSubmitResponse,
} from "@/lib/formsubmit-shared";
import { site } from "@/lib/site";
import { leadSchema, type FormVariant, type LeadInput, type TrainingInterest } from "@/lib/validation";

type FormState = "idle" | "submitting" | "success" | "error";

const SUCCESS_MESSAGE =
  "Thank you for contacting us. Our team will get back to you shortly.";

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
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError(null);

    const payload: LeadInput = {
      ...form,
      interest: variant === "startup-support" ? "startup-support" : form.interest,
    };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors);
      setState("error");
      return;
    }

    setState("submitting");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("_subject", `[Tbesh] ${interestLabels[parsed.data.interest]} — ${parsed.data.name}`);
      formData.set("interest", interestLabels[parsed.data.interest]);

      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = (await res.json()) as FormSubmitResponse;

      if (!isFormSubmitSuccess(data)) {
        console.error("[LeadForm] FormSubmit rejected:", data.message);
        setSubmitError(
          "We couldn't send your enquiry right now. Please email us directly and we'll respond shortly.",
        );
        setState("error");
        return;
      }

      setState("success");
      setForm(empty(fixedInterest));
    } catch {
      setSubmitError("Could not send your enquiry. Please check your connection and try again.");
      setState("error");
    }
  }

  function field(name: keyof LeadInput) {
    return {
      name,
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
        <p className="text-lg font-semibold text-white">{SUCCESS_MESSAGE}</p>
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
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {variant === "training" ? (
        <FormField label="Training track" id="interest" required>
          <select id="interest" className={inputClass} {...field("interest")}>
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
          <input id="company" type="text" autoComplete="organization" className={inputClass} {...field("company")} />
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

      <Button
        type="submit"
        disabled={state === "submitting"}
        className="w-full disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
      >
        {state === "submitting" ? "Sending…" : "Submit"}
      </Button>
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
