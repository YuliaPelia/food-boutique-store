import { header } from "./header";

export const ui = {
  ...header,
} as const;

export const languages = {
  en: "EN",
  ua: "UA",
};

export const defaultLang = "en";
