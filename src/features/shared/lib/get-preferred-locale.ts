export const LOCALES = ["es", "en"] as const;
export const DEFAULT_LOCALE = "es" as const;

export type Locale = (typeof LOCALES)[number];

export function getPreferredLocale(acceptLanguage: string): Locale {
  const normalized = acceptLanguage.toLowerCase();

  return (
    LOCALES.find((locale) =>
      normalized.split(",").some((lang) => lang.trim().startsWith(locale))
    ) ?? DEFAULT_LOCALE
  );
}

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
