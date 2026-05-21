import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ContentImageRow } from "@/components/ContentImageRow";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { startupSignup } from "@/lib/startup-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Infrastructure Support Enquiry",
  description: startupSignup.lead,
};

export default function StartupContactPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/contact" className="text-sm text-[var(--color-accent)] hover:underline">
          ← Back to contact
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Startup support"
              title={startupSignup.title}
              description={startupSignup.lead}
            />
            <ul className="mt-4 flex flex-wrap gap-2">
              {startupSignup.trust.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <ContentImageRow
              image={startupSignup.sideImage}
              alt="Startup support sign up"
              label={startupSignup.sideImageLabel}
              imageFirst
            >
              <p className="text-sm text-[var(--color-text-muted)]">
                Tell us about your cloud stack, team size, and support needs. Discovery call is
                free.
              </p>
            </ContentImageRow>
          </div>
          <AnimateIn variant="pop" delay={100}>
            <LeadForm variant="startup-support" />
          </AnimateIn>
        </div>
        <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]">
          Leads are sent to {site.leadNotifyEmail}
        </p>
      </div>
    </section>
  );
}
