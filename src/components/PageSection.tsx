import { AnimateIn } from "@/components/AnimateIn";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
  /** Set false when section uses StaggerGroup (avoids double fade) */
  animate?: boolean;
};

export function PageSection({
  children,
  className = "",
  alt = false,
  id,
  animate = false,
}: PageSectionProps) {
  const inner = (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  );

  return (
    <section
      id={id}
      className={`py-14 sm:py-16 lg:py-20 ${alt ? "bg-[var(--color-bg-elevated)] border-y border-[var(--color-border)]" : ""} ${className}`}
    >
      {animate ? <AnimateIn variant="rise">{inner}</AnimateIn> : inner}
    </section>
  );
}
