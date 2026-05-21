import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ContentImageRow } from "@/components/ContentImageRow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StaggerGroup } from "@/components/StaggerGroup";
import { PageSection } from "@/components/PageSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SignupStrip } from "@/components/SignupStrip";
import {
  trainingAudience,
  trainingAudienceImage,
  trainingBatchFormat,
  trainingOverview,
  trainingHowItWorks,
  trainingMeta,
  trainingOutcomes,
  trainingPrograms,
  trainingTools,
  trainingToolsImage,
  trainingWhy,
} from "@/lib/training-content";

export const metadata: Metadata = {
  title: "Azure Linux & DevOps Training — Modules",
  description: trainingMeta.seoDescription,
};

export default function TrainingPage() {
  return (
    <>
      <PageSection className="!pt-12">
        <SectionHeading
          eyebrow={trainingMeta.eyebrow}
          title={trainingMeta.title}
          description={trainingMeta.intro}
        />
        <AnimateIn variant="pop" delay={80} className="mt-8">
          <ImagePlaceholder
            src={trainingMeta.bannerImage}
            alt="Training programs"
            label={trainingMeta.bannerLabel}
            aspectClass="aspect-[21/9]"
            priority
          />
        </AnimateIn>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={trainingOverview.eyebrow}
          title={trainingOverview.title}
        />
        <ContentImageRow
          image={trainingAudienceImage.image}
          alt="Training audience"
          label={trainingAudienceImage.imageLabel}
        >
          <div className="space-y-4">
            {trainingOverview.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </ContentImageRow>
      </PageSection>

      <PageSection>
        <StaggerGroup className="flex flex-col gap-14">
          {trainingPrograms.map((program) => (
            <article
              key={program.id}
              className="motion-hover-lift grid gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-8 lg:grid-cols-[minmax(0,320px)_1fr]"
            >
              <ImagePlaceholder
                src={program.image}
                alt={program.title}
                label={program.imageLabel}
                className="min-h-[220px]"
              />
              <div>
                <p className="text-xs font-semibold text-[var(--color-accent)]">{program.duration}</p>
                <h2 className="mt-2 text-2xl font-bold text-white">{program.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{program.audience}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{program.summary}</p>
                <ul className="mt-4 space-y-1">
                  {program.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="text-sm text-[var(--color-text-muted)]">
                      · {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/training/${program.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline"
                >
                  View all 6 modules →
                </Link>
              </div>
            </article>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={trainingAudience.eyebrow}
          title={trainingAudience.title}
        />
        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {trainingAudience.groups.map((g) => (
            <div
              key={g.title}
              className="motion-hover-lift rounded-xl border border-[var(--color-border)] p-5"
            >
              <h3 className="font-semibold text-white">{g.title}</h3>
              <ul className="mt-3 space-y-1">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-text-muted)]">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={trainingBatchFormat.eyebrow}
          title={trainingBatchFormat.title}
        />
        <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
          {trainingBatchFormat.items.map((item) => (
            <div key={item.label} className="motion-hover-lift rounded-lg border border-[var(--color-border)] px-4 py-3">
              <dt className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium text-white">{item.value}</dd>
            </div>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection alt>
        <SectionHeading eyebrow={trainingTools.eyebrow} title={trainingTools.title} />
        <ContentImageRow
          image={trainingToolsImage.image}
          alt="Training tools"
          label={trainingToolsImage.imageLabel}
          imageFirst
        >
          <div className="flex flex-wrap gap-2">
            {trainingTools.list.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </ContentImageRow>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={trainingHowItWorks.eyebrow}
          title={trainingHowItWorks.title}
        />
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3">
          {trainingHowItWorks.steps.map((s) => (
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
            <SectionHeading eyebrow="Outcomes" title="Included with your enrollment" />
            <ul className="mt-4 space-y-2">
              {trainingOutcomes.map((o) => (
                <li key={o} className="text-sm text-[var(--color-text-muted)]">
                  ✓ {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow={trainingWhy.eyebrow} title={trainingWhy.title} />
            <div className="mt-4 space-y-3">
              {trainingWhy.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </StaggerGroup>
      </PageSection>

      <SignupStrip service="training" />
    </>
  );
}
