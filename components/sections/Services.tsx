import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/sections/Head";
import type { Dict, Locale } from "@/lib/i18n";
import { img } from "@/lib/images";

const CARDS = [
  { id: "complete", src: "/media/galerie/salle-reception.jpg", pos: "50% 50%" },
  { id: "allee", src: "/media/allee-ceremonie/allee-colonne-doree.jpg", pos: "50% 55%" },
  { id: "location-card", src: "/media/salons-marocains/emeraude-table-lanternes.jpg", pos: "50% 60%" },
];

// Cartes numérotées 001 · 002 · 003
export function Services({ lang, d }: { lang: Locale; d: Dict }) {
  const s = d.services;
  return (
    <section id="decoration" aria-labelledby="decoration-title" className="bg-noir px-5 py-28 md:px-10 md:py-36">
      <SectionHead eyebrow={s.eyebrow} title={s.title} id="decoration-title" />
      <ol className="mx-auto mt-16 grid max-w-[1320px] gap-14 md:mt-24 md:grid-cols-3 md:gap-8 lg:gap-12">
        {s.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 0.15} className="group scroll-mt-28">
            <article id={CARDS[i].id === "allee" ? "allee" : undefined} className="scroll-mt-28">
              <div className="photo relative aspect-[4/5]">
                <Image {...img(CARDS[i].src)} alt="" sizes="(min-width: 768px) 30vw, 92vw" quality={70} className="h-full w-full object-cover" style={{ objectPosition: CARDS[i].pos }} />
                <span className="pointer-events-none absolute inset-3 border border-gold/30" aria-hidden="true" />
              </div>
              <p className="num mt-8 text-[0.95rem] text-gold" aria-hidden="true">
                {String(i + 1).padStart(3, "0")}
              </p>
              <h3 className="display mt-3 text-[2.1rem] text-text-light">{it.title}</h3>
              <p className="eyebrow mt-3 text-[0.62rem] text-gold-light/80">{it.sub}</p>
              <p className="mt-5 text-[0.98rem] text-muted-light">{it.body}</p>
              <ul className="mt-6 space-y-2 border-t border-line-dark pt-5 text-[0.9rem] text-text-light/85">
                {it.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="h-[5px] w-[5px] shrink-0 rotate-45 border border-gold" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={i === 2 ? `/${lang}#location` : `/${lang}#devis`} className="eyebrow mt-7 inline-flex min-h-11 items-center gap-3 text-gold-light">
                <span className="link-line">{i === 2 ? d.rental.title : s.more}</span>
                <ArrowIcon />
              </a>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
