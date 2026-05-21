"use client";

import { StaggerGroup } from "@/components/StaggerGroup";

type Stat = { value: string; label: string };

export function StatsGrid({ stats }: { stats: readonly Stat[] }) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4" stepMs={80}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="motion-hover-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-6 text-center sm:px-5"
        >
          <p
            className="text-2xl font-bold text-[var(--color-accent)] sm:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
          >
            {stat.value}
          </p>
          <p className="mt-2 text-xs text-[var(--color-text-muted)] sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </StaggerGroup>
  );
}
