import type { Metadata } from "next";
import { Details } from "@/components/sections/Details";
import { Events } from "@/components/sections/Events";
import { Gallery } from "@/components/sections/Gallery";
import { SectionHead } from "@/components/sections/Head";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Rental } from "@/components/sections/Rental";
import { Services } from "@/components/sections/Services";
import { Contact, Reviews, Zone } from "@/components/sections/Closing";
import { InstagramIcon } from "@/components/icons";
import site from "@/data/site.json";
import { getDict, isLocale, type Locale } from "@/lib/i18n";
import { businessJsonLd, jsonLd, pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const l = (isLocale(lang) ? lang : "fr") as Locale;
  const d = getDict(l);
  return pageMeta(l, "", d.meta.title, d.meta.description);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: raw } = await params;
  const lang = raw as Locale;
  const d = getDict(lang);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(businessJsonLd(lang))} />
      <Hero lang={lang} d={d} />
      <Manifesto d={d} />
      <Services lang={lang} d={d} />
      <Details d={d} />
      <Events d={d} />

      <section id="location" aria-labelledby="location-title" className="on-light scroll-mt-20 bg-cream px-5 py-28 text-ink md:px-10 md:py-36">
        <SectionHead eyebrow={d.rental.eyebrow} title={d.rental.title} intro={d.rental.intro} light id="location-title" />
        <Rental />
      </section>

      <section id="realisations" aria-labelledby="realisations-title" className="scroll-mt-20 bg-noir px-3 py-28 md:px-10 md:py-36">
        <SectionHead eyebrow={d.gallery.eyebrow} title={d.gallery.title} intro={d.gallery.intro} id="realisations-title" />
        <Gallery />
        <div className="mt-14 flex justify-center">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            <InstagramIcon className="h-4 w-4" /> <span dir="ltr">{d.gallery.follow}</span>
          </a>
        </div>
      </section>

      <Reviews d={d} />
      <Zone d={d} />
      <Contact d={d} />
    </>
  );
}
