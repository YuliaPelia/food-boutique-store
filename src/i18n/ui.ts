import { header } from "./header";
import { hero } from "./hero";
import { form } from "./form";

// Combined translations
export const ui = {
  en: {
    ...hero.en,
    ...header.en,
    ...form.en,
  },
  ua: {
    ...hero.ua,
    ...header.ua,
    ...form.ua,
  }
} as const;

export const languages = {
  en: "EN",
  ua: "UA",
};

export const defaultLang = "en";
