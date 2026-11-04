import type { Metadata } from "next";
import { getDict, isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/legal">): Promise<Metadata> {
  const { lang } = await params;
  const l = (isLocale(lang) ? lang : "fr") as Locale;
  const d = getDict(l);
  return { ...pageMeta(l, "/legal", d.meta.legalTitle, d.meta.legalDescription), robots: { index: true, follow: true } };
}

export default async function Legal({ params }: PageProps<"/[lang]/legal">) {
  const { lang: raw } = await params;
  const lang = raw as Locale;
  const t = getDict(lang).legal;
  return (
    <article className="on-light min-h-screen bg-ivory px-6 pb-28 pt-40 text-ink">
      <div className="mx-auto max-w-2xl">
        <h1 className="display text-[clamp(2.4rem,6vw,3.8rem)]">{t.title}</h1>
        <div className="rule mt-6 w-fit text-gold-ink" aria-hidden="true">
          <i />
        </div>
        {t.sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="eyebrow text-gold-ink">{s.h}</h2>
            <p className="mt-4 text-[1rem] leading-[1.9] text-muted">{s.p}</p>
          </section>
        ))}
        <a href={`/${lang}`} className="btn btn-ink mt-16">
          {t.back}
        </a>
      </div>
    </article>
  );
}
