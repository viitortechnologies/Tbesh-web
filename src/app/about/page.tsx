import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ButtonLink } from "@/components/Button";
import { ContentImageRow } from "@/components/ContentImageRow";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StaggerGroup } from "@/components/StaggerGroup";
import { PageSection } from "@/components/PageSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsGrid } from "@/components/StatsGrid";
import { about, aboutContact, aboutFaq } from "@/lib/site";
import { trainingFaq } from "@/lib/training-content";
import { startupFaq } from "@/lib/startup-content";

export const metadata: Metadata = {
  title: "About Tbesh Enterprise",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <PageSection className="!pt-12">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.lead} />
        <AnimateIn variant="pop" delay={80} className="mt-8">
          <ImagePlaceholder
            src={about.image}
            alt="Tbesh Enterprise cloud training and support"
            label={about.imageLabel}
            aspectClass="aspect-[21/9]"
            priority
          />
        </AnimateIn>
        <AnimateIn variant="fade" delay={120} className="mt-6 max-w-3xl text-[var(--color-text-muted)]">
          {about.mission}
        </AnimateIn>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={about.storySection.eyebrow}
          title={about.storySection.title}
        />
        <ContentImageRow
          image={about.storyImage}
          alt="Tbesh cloud training and operations"
          label={about.storyImageLabel}
          imageFirst
        >
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
            {about.story}
          </p>
        </ContentImageRow>
      </PageSection>

      <PageSection>
        <StatsGrid stats={about.stats} />
        <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2">
          {about.highlights.map((h) => (
            <li
              key={h}
              className="motion-hover-lift rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-muted)]"
            >
              {h}
            </li>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <SectionHeading eyebrow="Values" title="What we stand for" centered />
        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {about.values.map((v) => (
            <div
              key={v.title}
              className="motion-hover-lift overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            >
              <ImagePlaceholder
                src={v.image}
                alt={`${v.title} — Tbesh Enterprise`}
                aspectClass="aspect-[4/3]"
                className="rounded-none border-0 border-b"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{v.description}</p>
              </div>
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection id="faq">
        <SectionHeading
          eyebrow={aboutFaq.eyebrow}
          title={aboutFaq.title}
          description={aboutFaq.description}
          centered
        />
        <div className="mt-12 space-y-14">
          <div>
            <h3 className="text-lg font-semibold text-white">{aboutFaq.trainingHeading}</h3>
            <div className="mt-4">
              <FaqAccordion items={trainingFaq} />
            </div>
            <Link
              href="/contact/training"
              className="mt-4 inline-block text-sm text-[var(--color-accent)] hover:underline"
            >
              {aboutFaq.trainingCta} →
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{aboutFaq.startupHeading}</h3>
            <div className="mt-4">
              <FaqAccordion items={startupFaq} />
            </div>
            <Link
              href="/contact/startup-support"
              className="mt-4 inline-block text-sm text-[var(--color-accent)] hover:underline"
            >
              {aboutFaq.startupCta} →
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={aboutContact.eyebrow}
          title={aboutContact.title}
          description={aboutContact.description}
          centered
        />
        <AnimateIn variant="pop" className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact/training">{aboutContact.trainingButton}</ButtonLink>
          <ButtonLink href="/contact/startup-support" variant="secondary">
            {aboutContact.startupButton}
          </ButtonLink>
        </AnimateIn>
      </PageSection>
    </>
  );
}
