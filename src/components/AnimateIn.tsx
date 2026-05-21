"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type MotionVariant = "rise" | "fade" | "pop";

const variantClass: Record<MotionVariant, string> = {
  rise: "motion-rise",
  fade: "motion-fade",
  pop: "motion-pop",
};

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Run once when entering viewport (default true) */
  once?: boolean;
  /** Start visible — for above-the-fold hero content */
  immediate?: boolean;
};

export function AnimateIn({
  children,
  className = "",
  variant = "rise",
  delay = 0,
  once = true,
  immediate = false,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, once]);

  const style: CSSProperties | undefined = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`motion-pending ${variantClass[variant]} ${visible ? "motion-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
