"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { localeCookieName, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LocaleSwitcher({ locale, label }: LocaleSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[rgba(10,15,23,0.68)] p-1"
      role="group"
    >
      {locales.map((entry) => {
        const isActive = entry === locale;

        return (
          <button
            key={entry}
            type="button"
            onClick={() => handleLocaleChange(entry)}
            aria-pressed={isActive}
            disabled={isPending && !isActive}
            className={cn(
              "rounded-full px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition",
              isActive
                ? "bg-[rgba(143,185,214,0.18)] text-[var(--foreground)]"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
            )}
          >
            {entry}
          </button>
        );
      })}
    </div>
  );
}
