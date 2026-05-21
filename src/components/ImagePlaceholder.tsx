import Image from "next/image";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  /** Shown on overlay when using SVG placeholders */
  label?: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  sizes?: string;
};

function isPlaceholderAsset(src: string) {
  return src.endsWith(".svg") || src.includes("placeholder-");
}

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  aspectClass = "aspect-[16/10]",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: ImagePlaceholderProps) {
  const showOverlay = isPlaceholderAsset(src);
  const displayLabel = label ?? "Add your image here";

  return (
    <figure
      className={`motion-hover-lift group relative w-full overflow-hidden rounded-2xl ${
        showOverlay
          ? "border border-dashed border-[var(--color-border)] bg-[var(--color-bg-card)]"
          : "border border-[var(--color-border)] bg-[var(--color-bg-card)]"
      } ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
      />
      {showOverlay ? (
        <figcaption className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40 px-4 text-center">
          <span className="rounded-md border border-[var(--color-accent)]/40 bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Image placeholder
          </span>
          <span className="max-w-[90%] text-xs font-medium text-white/90 sm:text-sm">{displayLabel}</span>
          <span className="text-[10px] text-zinc-400">Replace file in public/images/</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
