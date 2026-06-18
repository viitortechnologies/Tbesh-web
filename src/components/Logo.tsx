import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoSize = "header" | "footer";

const sizeClasses: Record<LogoSize, string> = {
  header: "h-32 w-auto min-h-[8rem] sm:h-40 sm:min-h-[10rem] md:h-48 md:min-h-[12rem]",
  footer: "h-28 w-auto sm:h-32 md:h-40",
};

const dimensions: Record<LogoSize, { width: number; height: number }> = {
  header: { width: 800, height: 240 },
  footer: { width: 720, height: 216 },
};

type LogoProps = {
  className?: string;
  size?: LogoSize;
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  const dim = dimensions[size];
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${className}`}
      aria-label={`${site.legalName} home`}
    >
      <Image
        src="/logo.png"
        alt={`${site.legalName} logo`}
        width={dim.width}
        height={dim.height}
        priority={size === "header"}
        className={sizeClasses[size]}
      />
    </Link>
  );
}
