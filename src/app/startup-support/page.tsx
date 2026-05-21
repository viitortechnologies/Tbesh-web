import type { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StaggerGroup } from "@/components/StaggerGroup";
import { PageSection } from "@/components/PageSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SignupStrip } from "@/components/SignupStrip";
import { ContentImageRow } from "@/components/ContentImageRow";
import {
  startupBenefits,
  startupOverview,
  startupDeliverables,
  startupHowItWorks,
  startupIdealFor,
  startupMeta,
  startupOfferings,
  startupOfferingsSection,
  startupOnboarding,
  startupOnboardingImage,
  startupTiers,
  startupTiersImage,
  startupWhy,
} from "@/lib/startup-content";

export const metadata: Metadata = {
  title: "Startup Cloud Support — L1 L2 & Infrastructure",
  description: startupMeta.seoDescription,
};

export default function StartupSupportPage() {
  return (
    <>
      <PageSection className="!pt-12">
        <SectionHeading
          eyebrow={startupMeta.eyebrow}
          title={startupMeta.title}
          description={startupMeta.intro}
        />
        <AnimateIn variant="pop" delay={80} className="mt-8">
          <ImagePlaceholder
            src={startupMeta.bannerImage}
            alt="Startup support"
            label={startupMeta.bannerLabel}
            aspectClass="aspect-[21/9]"
            priority
          />
        </AnimateIn>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={startupOverview.eyebrow}
          title={startupOverview.title}
        />
        <ContentImageRow
          image={startupOnboardingImage.image}
          alt="Software architecture and cloud infrastructure planning"
          label={startupOnboardingImage.imageLabel}
        >
          <div className="space-y-4">
            {startupOverview.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </ContentImageRow>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={startupOfferingsSection.eyebrow}
          title={startupOfferingsSection.title}
          description={startupOfferingsSection.lead}
        />
        <StaggerGroup className="mt-10 flex flex-col gap-12">
          {startupOfferings.map((item) => (
            <article
              key={item.id}
              className="motion-hover-lift grid gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:grid-cols-[minmax(0,280px)_1fr] sm:p-8"
            >
              <ImagePlaceholder
                src={item.image}
                alt={item.title}
                label={item.imageLabel}
                className="min-h-[180px]"
              />
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.includes.map((inc) => (
                    <li key={inc} className="text-sm text-[var(--color-text-muted)]">
                      ✓ {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <SectionHeading eyebrow={startupTiers.eyebrow} title={startupTiers.title} />
        <AnimateIn variant="rise" className="mt-6 mb-8">
          <ImagePlaceholder
            src={startupTiersImage.image}
            alt="Support tiers"
            label={startupTiersImage.imageLabel}
            aspectClass="aspect-[21/9]"
          />
        </AnimateIn>
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3">
          {startupTiers.tiers.map((tier) => (
            <div key={tier.name} className="motion-hover-lift rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tier.description}</p>
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={startupOnboarding.eyebrow}
          title={startupOnboarding.title}
        />
        <StaggerGroup className="mt-6 grid gap-3 sm:grid-cols-2">
          {startupOnboarding.items.map((item) => (
            <li
              key={item}
              className="motion-hover-lift rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-muted)]"
            >
              {item}
            </li>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={startupDeliverables.eyebrow}
          title={startupDeliverables.title}
        />
        <ul className="mt-6 space-y-2">
          {startupDeliverables.items.map((item) => (
            <li key={item} className="text-sm text-[var(--color-text-muted)]">
              ✓ {item}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={startupHowItWorks.eyebrow}
          title={startupHowItWorks.title}
        />
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3">
          {startupHowItWorks.steps.map((s) => (
            <div key={s.step} className="motion-hover-lift rounded-xl border border-[var(--color-border)] p-5">
              <span className="font-mono text-lg text-[var(--color-accent)]">{s.step}</span>
              <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.description}</p>
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <StaggerGroup className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={startupWhy.eyebrow} title={startupWhy.title} />
            <ul className="mt-4 space-y-2">
              {startupBenefits.map((b) => (
                <li key={b} className="text-sm text-[var(--color-text-muted)]">
                  ✓ {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Ideal fit" title="Startups we work with" />
            <ul className="mt-4 space-y-2">
              {startupIdealFor.map((item) => (
                <li key={item} className="text-sm text-[var(--color-text-muted)]">
                  · {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              {startupWhy.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </StaggerGroup>
      </PageSection>

      <SignupStrip service="startup" />
    </>
  );
}
