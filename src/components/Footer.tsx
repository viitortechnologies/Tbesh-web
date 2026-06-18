"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";
import { trainingPrograms } from "@/lib/training-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] glass-section backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="footer" />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-text-muted)]">{site.tagline}</p>
          </div>
          <div>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#faq"
                  className="text-sm text-[var(--color-text-muted)] hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Training
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/training" className="text-sm text-[var(--color-text-muted)] hover:text-white">
                  All programs
                </Link>
              </li>
              {trainingPrograms.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/training/${p.slug}`}
                    className="text-sm text-[var(--color-text-muted)] hover:text-white"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/training"
                  className="text-sm text-[var(--color-accent)] hover:underline"
                >
                  Training enquiries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              Startup support
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/startup-support"
                  className="text-sm text-[var(--color-text-muted)] hover:text-white"
                >
                  Service details
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/startup-support"
                  className="text-sm text-[var(--color-accent)] hover:underline"
                >
                  Support enquiries
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-sm text-[var(--color-text-muted)] hover:text-white"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm text-[var(--color-text-muted)] hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] py-6 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <p>© {year} {site.legalName}</p>
          <p>
            Developed by{" "}
            <a
              href="https://viitortechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Viitor Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
