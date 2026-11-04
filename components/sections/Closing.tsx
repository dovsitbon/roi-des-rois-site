import site from "@/data/site.json";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { SectionHead } from "@/components/sections/Head";
import type { Dict } from "@/lib/i18n";
import { waLink } from "@/lib/quote";

export function Reviews({ d }: { d: Dict }) {
  const r = d.reviews;
  return (
    <section aria-labelledby="reviews-title" className="on-light bg-cream px-6 py-24 text-ink md:py-32">
      <SectionHead eyebrow={r.eyebrow} title={r.title} light id="reviews-title" />
      {/* À REMPLIR avec de vrais avis clients : citation, prénom, type d'événement, ville. Aucun avis inventé. */}
      <Reveal className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[1.02rem] text-muted">{r.empty}</p>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-8">
          <InstagramIcon className="h-4 w-4" /> {r.cta}
        </a>
      </Reveal>
    </section>
  );
}

export function Zone({ d }: { d: Dict }) {
  const z = d.zone;
  return (
    <section aria-labelledby="zone-title" className="zellige bg-noir-2 px-6 py-24 [--z:0.08] md:py-32">
      <SectionHead eyebrow={z.eyebrow} title={z.title} intro={z.body} id="zone-title" />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-3 text-center">
          {z.cities.map((c, i) => (
            <li key={c} className="flex items-center gap-2">
              {i > 0 && <span className="h-[5px] w-[5px] rotate-45 border border-gold/70" aria-hidden="true" />}
              <span className="display text-[1.35rem] text-text-light md:text-[1.6rem]">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-[0.9rem] text-muted-light">{z.note}</p>
      </Reveal>
    </section>
  );
}

export function Contact({ d }: { d: Dict }) {
  const f = d.form;
  return (
    <section id="devis" aria-labelledby="devis-title" className="on-light scroll-mt-20 bg-ivory px-5 py-28 text-ink md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow text-gold-ink">{f.eyebrow}</p>
          <h2 id="devis-title" className="display mt-6 text-[clamp(2.4rem,5vw,4.2rem)]">
            {f.title}
          </h2>
          <p className="mt-6 max-w-md text-[1.02rem] text-muted">{f.intro}</p>
          <ul className="mt-10 space-y-1 border-t border-line pt-6">
            <li>
              <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-4 hover:text-gold-ink">
                <WhatsAppIcon className="h-5 w-5 text-gold-ink" />
                <span dir="ltr">{site.phone}</span>
                <span className="eyebrow text-[0.6rem] text-muted">WhatsApp</span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneIntl.replace(/\s/g, "")}`} className="flex min-h-12 items-center gap-4 hover:text-gold-ink">
                <PhoneIcon className="h-5 w-5 text-gold-ink" />
                <span dir="ltr">{site.phoneIntl}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-4 hover:text-gold-ink">
                <InstagramIcon className="h-5 w-5 text-gold-ink" />
                <span dir="ltr">{site.instagramHandle}</span>
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
