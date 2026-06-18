import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)]",
  secondary:
    "border border-[var(--color-border)] text-white hover:border-[var(--color-accent)]/50 hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm",
  md: "px-6 py-3 text-sm",
};

function buttonClass(variant: ButtonVariant, size: ButtonSize, className = "") {
  return `motion-btn inline-flex items-center justify-center rounded-lg font-semibold ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonClass(variant, size, className)} {...props} />;
}
