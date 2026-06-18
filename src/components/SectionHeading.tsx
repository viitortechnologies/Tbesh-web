"use client";

import { AnimateIn } from "@/components/AnimateIn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <AnimateIn variant="fade" className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-highlight)]">
        {eyebrow}
      </p>
      <h2
        className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
        style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
      ) : null}
    </AnimateIn>
  );
}
