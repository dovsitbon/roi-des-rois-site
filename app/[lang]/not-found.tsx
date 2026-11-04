"use client";

import { useRequest } from "@/components/RequestProvider";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import en from "@/locales/en.json";

const T = { fr: fr.notFound, ar: ar.notFound, en: en.notFound };

export default function NotFound() {
  const { lang } = useRequest();
  const t = T[lang];
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="num text-gold">404</p>
      <h1 className="display mt-6 text-5xl text-text-light">{t.title}</h1>
      <p className="mt-5 text-muted-light">{t.body}</p>
      <a href={`/${lang}`} className="btn btn-gold mt-10">
        {t.back}
      </a>
    </section>
  );
}
