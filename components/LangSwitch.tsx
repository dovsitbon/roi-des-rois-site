"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const LABELS: Record<Locale, string> = { fr: "FR", ar: "ع", en: "EN" };
const NAMES: Record<Locale, string> = { fr: "Français", ar: "العربية", en: "English" };

export function LangSwitch({ lang, label, className = "" }: { lang: Locale; label: string; className?: string }) {
  const pathname = usePathname() || `/${lang}`;
  const rest = pathname.replace(/^\/(fr|ar|en)(?=\/|$)/, "");

  return (
    <nav aria-label={label} className={`flex items-center gap-2 text-[0.72rem] tracking-[0.2em] ${className}`} dir="ltr">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="opacity-40">
              ·
            </span>
          )}
          <a
            href={`/${l}${rest}`}
            hrefLang={l}
            lang={l}
            title={NAMES[l]}
            aria-current={l === lang ? "true" : undefined}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${l};path=/;max-age=31536000;samesite=lax`;
            }}
            className={`inline-flex min-h-10 min-w-6 items-center justify-center transition-opacity duration-500 ${l === "ar" ? "text-[0.95rem] tracking-normal" : ""} ${l === lang ? "text-gold-light opacity-100" : "opacity-60 hover:opacity-100"}`}
          >
            {LABELS[l]}
          </a>
        </span>
      ))}
    </nav>
  );
}
