import Link from "next/link";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import type { Locale } from "@/lib/i18n";

type NavigationItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  items: NavigationItem[];
  name: string;
  interfaceLabel: string;
  locale: Locale;
  primaryNavAria: string;
  primaryMobileNavAria: string;
  localeSwitcherLabel: string;
};

export function SiteHeader({
  items,
  name,
  interfaceLabel,
  locale,
  primaryNavAria,
  primaryMobileNavAria,
  localeSwitcherLabel,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgba(5,8,13,0.74)] backdrop-blur-xl">
      <div className="shell px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(12,18,28,0.84)] font-[var(--font-mono)] text-sm text-[var(--accent-strong)] transition duration-200 hover:border-[var(--border-strong)]">
              MI
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[var(--foreground)]">{name}</p>
              <p className="eyebrow truncate text-[0.62rem]">{interfaceLabel}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <nav aria-label={primaryNavAria} className="flex items-center gap-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <LocaleSwitcher locale={locale} label={localeSwitcherLabel} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pb-4 md:hidden">
          <nav
            aria-label={primaryMobileNavAria}
            className="flex gap-2 overflow-x-auto"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-[var(--border)] bg-[rgba(10,15,23,0.52)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher locale={locale} label={localeSwitcherLabel} />
        </div>
      </div>
    </header>
  );
}
