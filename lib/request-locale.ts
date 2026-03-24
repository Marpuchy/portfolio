import { cookies, headers } from "next/headers";

import { isLocale, localeCookieName, resolveLocale, type Locale } from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  return resolveLocale(headerStore.get("accept-language"));
}
