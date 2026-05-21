import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoSize = "header" | "footer";

const sizeClasses: Record<LogoSize, string> = {
  header: "h-16 w-auto min-h-[4rem] sm:h-20 sm:min-h-[5rem] md:h-24 md:min-h-[6rem]",
  footer: "h-14 w-auto sm:h-16 md:h-20",
};

const dimensions: Record<LogoSize, { width: number; height: number }> = {
  header: { width: 400, height: 120 },
  footer: { width: 360, height: 108 },
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
