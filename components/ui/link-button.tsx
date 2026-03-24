import Link from "next/link";

import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
  primary:
    "border border-[rgba(214,237,249,0.12)] bg-[linear-gradient(90deg,rgba(143,185,214,0.2),rgba(139,208,192,0.18))] text-[var(--foreground)] hover:border-[rgba(214,237,249,0.24)] hover:bg-[linear-gradient(90deg,rgba(143,185,214,0.28),rgba(139,208,192,0.24))]",
  secondary:
    "border border-[var(--border)] bg-[rgba(10,15,23,0.5)] text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[rgba(13,20,29,0.75)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
};

export function LinkButton({
  href,
  children,
  variant = "secondary",
  className,
}: LinkButtonProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5",
    variants[variant],
    className,
  );
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a className={sharedClassName} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {children}
    </Link>
  );
}
