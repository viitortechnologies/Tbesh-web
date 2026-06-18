"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { heroSlides, site } from "@/lib/site";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const total = heroSlides.length;
  const isPoster = "posterStyle" in slide && slide.posterStyle;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative isolate overflow-hidden">
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
            {isPoster ? (
              <p className="motion-hero-in badge-career">{slide.eyebrow}</p>
            ) : (
              <p className="motion-hero-in text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-highlight)]">
                {slide.eyebrow}
              </p>
            )}
            <h1
              className={`motion-hero-in-delay-1 mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
                isPoster ? "text-[var(--color-highlight)] uppercase" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
            >
              {slide.title}
            </h1>
            {"subPrograms" in slide && slide.subPrograms ? (
              <ul className="motion-hero-in-delay-1 mt-3 space-y-1">
                {slide.subPrograms.map((program) => (
                  <li key={program} className="text-base font-medium text-white sm:text-lg">
                    {program}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="motion-hero-in-delay-2 mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              {slide.lead}
            </p>
            <Link
              href={slide.href}
              className={`motion-btn motion-hero-in-delay-2 mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-bold ${
                isPoster
                  ? "btn-join"
                  : "rounded-lg bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)]"
              }`}
            >
              {slide.cta}
            </Link>
            {isPoster ? (
              <div className="motion-hero-in-delay-2 mt-6 flex flex-wrap items-center gap-2">
                <span className="badge-career text-[0.6rem]">T-BESH:</span>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-100"
                >
                  {site.phone}
                </a>
              </div>
            ) : null}
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
                        ? "w-8 bg-[var(--color-highlight)]"
                        : "w-2 bg-[var(--color-border)] hover:bg-white/40"
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
            {isPoster ? (
              <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] glow-ring">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={640}
                  height={800}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <ImagePlaceholder
                src={slide.image}
                alt={slide.imageAlt}
                label={slide.imageLabel}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
