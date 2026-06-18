"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { isInViewport } from "@/lib/motion";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  /** Gap between each child animation (ms) */
  stepMs?: number;
};

export function StaggerGroup({ children, className = "", stepMs = 75 }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    if (isInViewport(el, 40)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = { "--stagger-step": `${stepMs}ms` } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`stagger-group ${visible ? "stagger-group-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
