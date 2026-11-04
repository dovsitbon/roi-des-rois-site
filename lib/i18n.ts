import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import en from "@/locales/en.json";

export const locales = ["fr", "ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
export type Dict = typeof fr;

const dictionaries: Record<Locale, Dict> = { fr, ar, en };

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const getDict = (lang: Locale): Dict => dictionaries[lang];
export const dirOf = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

export const ogLocale: Record<Locale, string> = { fr: "fr_FR", ar: "ar_MA", en: "en_GB" };

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

export type Localized = Record<Locale, string>;

// Seules ces parties du dictionnaire partent vers le navigateur (composants clients).
export const CLIENT_KEYS = ["nav", "rental", "gallery", "form"] as const;
export type ClientDict = Pick<Dict, (typeof CLIENT_KEYS)[number]>;
export const pickClient = (d: Dict): ClientDict => Object.fromEntries(CLIENT_KEYS.map((k) => [k, d[k]])) as ClientDict;
