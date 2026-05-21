"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { heroSlides } from "@/lib/site";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const total = heroSlides.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative isolate overflow-hidden bg-[#050505]">
      {/* Solid black under header — no gradient bleed at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-[#050505] sm:h-44"
        aria-hidden
      />
      {/* Grid + accent glow only in lower ~60% of hero */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[62%] min-h-[300px]"
        aria-hidden
      >
        <div className="hero-circuit-grid absolute inset-0" />
        <div className="hero-gradient-bottom absolute inset-0" />
      </div>
      <div className="relative z-[2] mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1" key={`hero-text-${slide.id}`}>
            <p className="motion-hero-in text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {slide.eyebrow}
            </p>
            <h1
              className="motion-hero-in-delay-1 mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
            >
              {slide.title}
            </h1>
            <p className="motion-hero-in-delay-2 mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              {slide.lead}
            </p>
            <Link
              href={slide.href}
              className="motion-btn motion-hero-in-delay-2 mt-8 inline-flex rounded-lg bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--color-accent-dim)]"
            >
              {slide.cta}
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-white hover:bg-white/5"
                aria-label="Previous slide"
              >
                ←
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Hero slides">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={s.title}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-[var(--color-accent)]"
                        : "w-2 bg-[var(--color-border)] hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-white hover:bg-white/5"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 motion-hero-in-delay-1" key={`hero-img-${slide.id}`}>
            <ImagePlaceholder
              src={slide.image}
              alt={slide.imageAlt}
              label={slide.imageLabel}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
