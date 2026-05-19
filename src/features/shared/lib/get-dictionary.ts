import "server-only";
import type { Dictionary } from "@/src/features/shared/types/dictionaries";
import { isValidLocale, DEFAULT_LOCALE } from "@/src/features/shared/lib/get-preferred-locale";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () =>
    import("./locales/en/common.json").then(
      (module) => module.default as Dictionary
    ),
  es: () =>
    import("./locales/es/common.json").then(
      (module) => module.default as Dictionary
    ),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const validLocale = isValidLocale(locale) ? locale : DEFAULT_LOCALE;
  return dictionaries[validLocale]();
};
