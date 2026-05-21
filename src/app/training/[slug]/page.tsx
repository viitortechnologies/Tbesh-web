import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/AnimateIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StaggerGroup } from "@/components/StaggerGroup";
import { ModuleList } from "@/components/ModuleList";
import { PageSection } from "@/components/PageSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SignupStrip } from "@/components/SignupStrip";
import { programPageSections } from "@/lib/training-content";
import { getAllTrainingSlugs, getTrainingProgram } from "@/lib/training";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllTrainingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getTrainingProgram(slug);
  if (!program) return { title: "Training" };
  return { title: `${program.title} — Modules`, description: program.summary };
}

export default async function TrainingProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getTrainingProgram(slug);
  if (!program) notFound();

  return (
    <>
      <PageSection className="!pt-12">
        <Link href="/training" className="text-sm text-[var(--color-accent)] hover:underline">
          ← All training programs
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
          <AnimateIn variant="rise">
            <p className="text-xs font-semibold text-[var(--color-accent)]">{program.duration}</p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{program.title}</h1>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{program.audience}</p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">{program.summary}</p>
          </AnimateIn>
          <AnimateIn variant="pop" delay={120}>
            <ImagePlaceholder
              src={program.image}
              alt={program.title}
              label={program.imageLabel}
              priority
            />
          </AnimateIn>
        </div>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={programPageSections.overviewEyebrow}
          title={programPageSections.overviewTitle}
        />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
          This {program.duration} program includes {program.modules.length} progressive modules with lab work
          and mentor review. You complete a capstone deployment suitable for interviews with employers and
          remote-first companies.
        </p>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={programPageSections.modulesEyebrow}
          title={programPageSections.modulesTitle}
        />
        <div className="mt-8">
          <ModuleList modules={program.modules} />
        </div>
      </PageSection>

      <PageSection alt>
        <SectionHeading
          eyebrow={programPageSections.skillsEyebrow}
          title={programPageSections.skillsTitle}
        />
        <StaggerGroup className="mt-6 grid gap-2 sm:grid-cols-2">
          {program.highlights.map((h) => (
            <p key={h} className="text-sm text-[var(--color-text-muted)]">
              ◆ {h}
            </p>
          ))}
        </StaggerGroup>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow={programPageSections.careersEyebrow}
          title={programPageSections.careersTitle}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {program.careerOutcomes.map((role) => (
            <span
              key={role}
              className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm text-white"
            >
              {role}
            </span>
          ))}
        </div>
      </PageSection>

      <SignupStrip service="training" />
    </>
  );
}
