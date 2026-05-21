"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

type SignupStripProps = {
  service: "training" | "startup";
};

const copy = {
  training: {
    eyebrow: "Training",
    title: "Start your cloud career journey",
    description:
      "Tell us about your experience and goals. We will recommend the right track and schedule a complimentary consultation.",
    href: "/contact/training",
    button: "Enquire about training",
  },
  startup: {
    eyebrow: "Startup support",
    title: "Strengthen your cloud operations",
    description:
      "Share your stack and uptime requirements. We will outline how our team can support your infrastructure end to end.",
    href: "/contact/startup-support",
    button: "Enquire about support",
  },
};

export function SignupStrip({ service }: SignupStripProps) {
  const c = copy[service];
  return (
    <section className="border-t border-[var(--color-border)] py-14 sm:py-16">
      <AnimateIn variant="pop" className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {c.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{c.title}</h2>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">{c.description}</p>
        <Link
          href={c.href}
          className="motion-btn mt-8 inline-flex rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-black hover:bg-[var(--color-accent-dim)]"
        >
          {c.button}
        </Link>
      </AnimateIn>
    </section>
  );
}
