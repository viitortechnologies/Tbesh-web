import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ContentImageRow } from "@/components/ContentImageRow";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { trainingSignup } from "@/lib/training-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training Enquiry — Azure Linux & DevOps",
  description: trainingSignup.lead,
};

export default function TrainingContactPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/contact" className="text-sm text-[var(--color-accent)] hover:underline">
          ← Back to contact
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Training"
              title={trainingSignup.title}
              description={trainingSignup.lead}
            />
            <ul className="mt-4 flex flex-wrap gap-2">
              {trainingSignup.trust.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <ContentImageRow
              image={trainingSignup.sideImage}
              alt="Training sign up"
              label={trainingSignup.sideImageLabel}
              imageFirst
            >
              <p className="text-sm text-[var(--color-text-muted)]">
                Share your experience level and which track you prefer. We will call or email you
                within one business day.
              </p>
            </ContentImageRow>
          </div>
          <AnimateIn variant="pop" delay={100}>
            <LeadForm variant="training" />
          </AnimateIn>
        </div>
        <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]">
          Leads are sent to {site.leadNotifyEmail}
        </p>
      </div>
    </section>
  );
}
