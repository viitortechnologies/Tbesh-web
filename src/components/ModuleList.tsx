"use client";

import { StaggerGroup } from "@/components/StaggerGroup";

type Module = { name: string; topics: string };

export function ModuleList({ modules }: { modules: readonly Module[] }) {
  return (
    <StaggerGroup className="flex flex-col gap-4" stepMs={60}>
      {modules.map((mod, i) => (
        <article
          key={mod.name}
          className="motion-hover-lift flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:p-5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-sm font-bold text-[var(--color-accent)]">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-white">{mod.name}</h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{mod.topics}</p>
          </div>
        </article>
      ))}
    </StaggerGroup>
  );
}
