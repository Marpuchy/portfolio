export const locales = ["en", "es"] as const;
export const localeCookieName = "preferred-locale" as const;

export type Locale = (typeof locales)[number];

export type LocalizedText<T> = Record<Locale, T>;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function resolveLocalizedText<T>(value: LocalizedText<T>, locale: Locale): T {
  return value[locale] ?? value.en;
}

export function resolveLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) {
    return "en";
  }

  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("es")) {
    return "es";
  }

  return "en";
}
