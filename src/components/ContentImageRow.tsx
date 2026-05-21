"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type ContentImageRowProps = {
  image: string;
  alt: string;
  label?: string;
  children: React.ReactNode;
  imageFirst?: boolean;
};

/** Text + image side by side for section layouts */
export function ContentImageRow({
  image,
  alt,
  label,
  children,
  imageFirst = false,
}: ContentImageRowProps) {
  return (
    <div
      className={`mt-8 grid items-center gap-8 lg:grid-cols-2 ${imageFirst ? "[&>figure]:order-first" : ""}`}
    >
      <AnimateIn variant="rise" className={imageFirst ? "lg:order-2" : ""}>
        {children}
      </AnimateIn>
      <AnimateIn variant="pop" delay={120} className={imageFirst ? "lg:order-1" : ""}>
        <ImagePlaceholder src={image} alt={alt} label={label} />
      </AnimateIn>
    </div>
  );
}
