"use client";

import { useState } from "react";
type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white sm:px-6 sm:py-5 sm:text-base"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span
                className={`shrink-0 text-[var(--color-accent)] transition ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden border-t border-[var(--color-border)] px-5 pb-5 text-sm leading-relaxed text-[var(--color-text-muted)] sm:px-6">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
