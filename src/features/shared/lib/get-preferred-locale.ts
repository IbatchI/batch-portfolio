export const LOCALES = ["es", "en"] as const;
export const DEFAULT_LOCALE = "es" as const;

export type Locale = (typeof LOCALES)[number];

export function getPreferredLocale(acceptLanguage: string): Locale {
  // Parse and sort by q-value (priority), then match against supported locales
  const preferred = acceptLanguage
    .toLowerCase()
    .split(",")
    .map((entry) => {
      const [lang, q] = entry.trim().split(";q=");
      return { lang: lang.trim(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q)
    .map(({ lang }) => lang);

  return (
    preferred
      .flatMap((lang) => LOCALES.filter((locale) => lang.startsWith(locale)))[0]
    ?? DEFAULT_LOCALE
  );
}

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
