import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup } from "@/components/StaggerGroup";
import { contactHub } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Tbesh Enterprise",
  description: contactHub.lead,
};

export default function ContactHubPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={contactHub.title}
          description={contactHub.lead}
          centered
        />
        <AnimateIn variant="pop" delay={80} className="mt-8">
          <ImagePlaceholder
            src={contactHub.image}
            alt="Contact Tbesh"
            label={contactHub.imageLabel}
            aspectClass="aspect-[21/9]"
          />
        </AnimateIn>
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href={contactHub.training.href}
            className="motion-hover-lift group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition hover:border-[var(--color-accent)]/50"
          >
            <ImagePlaceholder
              src={contactHub.training.image}
              alt={contactHub.training.title}
              label={contactHub.training.imageLabel}
              aspectClass="aspect-[16/9]"
              className="rounded-none border-0 border-b group-hover:opacity-100"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                For learners & teams
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">{contactHub.training.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {contactHub.training.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]">
                {contactHub.training.cta} →
              </span>
            </div>
          </Link>
          <Link
            href={contactHub.startup.href}
            className="motion-hover-lift group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition hover:border-[var(--color-accent)]/50"
          >
            <ImagePlaceholder
              src={contactHub.startup.image}
              alt={contactHub.startup.title}
              label={contactHub.startup.imageLabel}
              aspectClass="aspect-[16/9]"
              className="rounded-none border-0 border-b"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                For founders & product teams
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">{contactHub.startup.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {contactHub.startup.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]">
                {contactHub.startup.cta} →
              </span>
            </div>
          </Link>
        </StaggerGroup>
      </div>
    </section>
  );
}
