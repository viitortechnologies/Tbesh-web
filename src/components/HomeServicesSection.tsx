"use client";

import { ButtonLink } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { StaggerGroup } from "@/components/StaggerGroup";
import { homeServices } from "@/lib/site";

export function HomeServicesSection() {
  const { training, startup } = homeServices;

  return (
    <StaggerGroup className="mt-12 flex flex-col gap-10 lg:gap-14">
      {/* Training — wide content band, image stacked on mobile / right on desktop */}
      <article className="motion-hover-lift overflow-hidden rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-bg-card)]">
        <div className="border-b border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-6 py-3 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Service 01
          </span>
        </div>
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
              {training.tagline}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{training.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
              {training.description}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {training.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-xs text-[var(--color-text-muted)] sm:text-sm"
                >
                  <span className="text-[var(--color-accent)]">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={training.href} size="sm">
                View programs
              </ButtonLink>
              <ButtonLink href="/contact/training" variant="secondary" size="sm">
                Enquire about training
              </ButtonLink>
            </div>
          </div>
          <div className="border-t border-[var(--color-border)] lg:border-t-0 lg:border-l">
            <ImagePlaceholder
              src={training.image}
              alt={training.title}
              label={training.imageLabel}
              aspectClass="aspect-[4/3] lg:aspect-auto lg:min-h-full"
              className="h-full min-h-[240px] rounded-none border-0 lg:min-h-[320px]"
            />
          </div>
        </div>
      </article>

      {/* Startup — compact split card, image left, accent stripe */}
      <article className="motion-hover-lift relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <div
          className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--color-accent)]/80 to-transparent sm:w-1.5"
          aria-hidden
        />
        <div className="grid md:grid-cols-2 md:items-center">
          <ImagePlaceholder
            src={startup.image}
            alt={startup.title}
            label={startup.imageLabel}
            aspectClass="aspect-[5/4] md:aspect-[4/5]"
            className="rounded-none border-0 border-b border-[var(--color-border)] md:border-b-0 md:border-r"
          />
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Service 02
            </span>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
              {startup.tagline}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{startup.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {startup.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {startup.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">→</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={startup.href} variant="secondary" size="sm">
                View services
              </ButtonLink>
              <ButtonLink href="/contact/startup-support" size="sm">
                Enquire about support
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    </StaggerGroup>
  );
}
