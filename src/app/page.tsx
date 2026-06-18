import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { HeroCarousel } from "@/components/HeroCarousel";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { ContentImageRow } from "@/components/ContentImageRow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageSection } from "@/components/PageSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsGrid } from "@/components/StatsGrid";
import { StaggerGroup } from "@/components/StaggerGroup";
import {
  about,
  homeImpact,
  homeIntro,
  homeProcess,
  homeServices,
  homeStartupPreview,
  homeTrainingPreview,
  homeCta,
  homeWhy,
  trainingOutlines,
} from "@/lib/site";
import { placeholders } from "@/lib/placeholders";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <PageSection>
        <SectionHeading
          eyebrow={homeIntro.eyebrow}
          title={homeIntro.title}
          description={homeIntro.lead}
        />
        <ContentImageRow
          image={homeIntro.image}
          alt="Tbesh Enterprise introduction"
          label={homeIntro.imageLabel}
        >
          <ul className="space-y-3">
            {homeIntro.points.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {line}
              </li>
            ))}
          </ul>
        </ContentImageRow>
      </PageSection>

      <PageSection alt id="training-outlines">
        <SectionHeading
          eyebrow={trainingOutlines.eyebrow}
          title={trainingOutlines.title}
          centered
        />
        <StaggerGroup className="mx-auto mt-10 grid max-w-2xl gap-3">
          {trainingOutlines.items.map((item) => (
            <div key={item} className="outline-pill motion-hover-lift">
              <span className="outline-pill-check" aria-hidden>
                ✓
              </span>
              {item}
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt id="services">
        <SectionHeading
          eyebrow={homeServices.eyebrow}
          title={homeServices.title}
          description={homeServices.lead}
          centered
        />
        <HomeServicesSection />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={homeTrainingPreview.eyebrow}
          title={homeTrainingPreview.title}
          description={homeTrainingPreview.lead}
        />
        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2">
          {homeTrainingPreview.programs.map((p) => (
            <article
              key={p.name}
              className="motion-hover-lift overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            >
              <ImagePlaceholder
                src={p.image}
                alt={p.name}
                label={p.imageLabel}
                aspectClass="aspect-[16/9]"
                className="rounded-none border-0 border-b border-[var(--color-border)]"
              />
              <div className="p-6">
                <h3 className="font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.summary}</p>
                <Link href={p.href} className="mt-4 inline-block text-sm text-[var(--color-accent)] hover:underline">
                  Full curriculum →
                </Link>
              </div>
            </article>
          ))}
        </StaggerGroup>
        <p className="mt-6">
          <Link href="/training" className="text-sm font-medium text-[var(--color-accent)] hover:underline">
            All training details →
          </Link>
        </p>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={homeStartupPreview.eyebrow}
          title={homeStartupPreview.title}
          description={homeStartupPreview.lead}
        />
        <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeStartupPreview.items.map((item) => (
            <article
              key={item.title}
              className="motion-hover-lift overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            >
              <ImagePlaceholder
                src={item.image}
                alt={item.title}
                label={item.imageLabel}
                aspectClass="aspect-[4/3]"
                className="rounded-none border-0 border-b"
              />
              <div className="p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.summary}</p>
              </div>
            </article>
          ))}
        </StaggerGroup>
        <p className="mt-6">
          <Link href="/startup-support" className="text-sm font-medium text-[var(--color-accent)] hover:underline">
            Full startup support details →
          </Link>
        </p>
      </PageSection>

      <PageSection>
        <SectionHeading eyebrow={about.eyebrow} title="Our impact" description={about.mission} centered />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <StatsGrid stats={about.stats} />
          <AnimateIn variant="pop" delay={160}>
            <ImagePlaceholder
              src={homeImpact.image}
              alt="Tbesh team impact"
              label={homeImpact.imageLabel}
            />
          </AnimateIn>
        </div>
      </PageSection>

      <PageSection alt>
        <SectionHeading eyebrow={homeProcess.eyebrow} title={homeProcess.title} centered />
        <StaggerGroup className="mt-10 grid gap-8 lg:grid-cols-3">
          {homeProcess.steps.map((s, i) => (
            <div
              key={s.title}
              className="motion-hover-lift rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
            >
              <span className="font-mono text-2xl font-bold text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.description}</p>
            </div>
          ))}
        </StaggerGroup>
        <AnimateIn variant="rise" delay={120} className="mt-8">
          <ImagePlaceholder
            src={placeholders.process}
            alt="How to get started"
            label="Cloud and software delivery workflow"
            aspectClass="aspect-[21/9]"
          />
        </AnimateIn>
      </PageSection>

      <PageSection>
        <SectionHeading eyebrow={homeWhy.eyebrow} title={homeWhy.title} centered />
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {homeWhy.items.map((item) => (
            <div
              key={item.title}
              className="motion-hover-lift rounded-xl border border-[var(--color-border)] p-5"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <AnimateIn variant="pop" className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{homeCta.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
            {homeCta.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact/training"
              className="motion-btn btn-join rounded-full px-8 py-3 text-sm font-bold"
            >
              {homeCta.trainingButton}
            </Link>
            <Link
              href="/contact/startup-support"
              className="motion-btn rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm text-white hover:bg-white/5"
            >
              {homeCta.startupButton}
            </Link>
          </div>
        </AnimateIn>
      </PageSection>
    </>
  );
}
