"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { contactNav, nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)]/40 glass-section backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ background: "transparent" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 sm:gap-4 sm:px-6 sm:py-2 lg:px-8">
        <Logo />

        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors xl:px-3 ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-[var(--color-text-muted)] hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={contactNav.href}
            className={`motion-btn inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm ${
              pathname === contactNav.href || pathname.startsWith("/contact/")
                ? "bg-[var(--color-accent-dim)] text-black"
                : "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)]"
            }`}
          >
            {contactNav.label}
          </Link>
          <button
            type="button"
            className="inline-flex flex-col justify-center gap-1.5 rounded-lg border border-[var(--color-border)]/60 bg-transparent p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--color-border)]/40 bg-transparent px-4 py-4 backdrop-blur-sm lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 text-center text-xs text-[var(--color-text-muted)]">
              <a href={`mailto:${site.contactEmail}`} className="hover:text-white">
                {site.contactEmail}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
