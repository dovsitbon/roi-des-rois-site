import site from "@/data/site.json";
import { ArabicTagline, Crown, Wordmark } from "@/components/Logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import type { Dict, Locale } from "@/lib/i18n";
import { waLink } from "@/lib/quote";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const f = d.footer;
  const n = d.nav;
  const year = new Date().getFullYear();
  return (
    <footer className="zellige border-t border-gold/20 bg-noir px-6 pb-28 pt-20 [--z:0.05] md:pb-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col items-center text-center">
          <Crown className="h-12 w-auto text-gold" width={2.8} />
          <Wordmark className="mt-5 h-6 w-auto text-gold-light" />
          <p className="caps mt-4 text-[0.6rem] text-gold">{d.brand.sub}</p>
          <ArabicTagline className="mt-2 h-6 w-auto text-gold" label={d.brand.ar} />
          <p className="mt-6 max-w-md text-[0.92rem] text-muted-light">{f.tagline}</p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line-dark pt-10 text-center text-[0.92rem] md:grid-cols-3 md:text-start">
          <div>
            <p className="eyebrow text-gold">{f.contact}</p>
            <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-3 text-text-light hover:text-gold-light">
              <WhatsAppIcon className="h-4 w-4" /> <span dir="ltr">{site.phone}</span>
            </a>
          </div>
          <div className="md:text-center">
            <p className="eyebrow text-gold">{f.follow}</p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-3 text-text-light hover:text-gold-light">
              <InstagramIcon className="h-4 w-4" /> <span dir="ltr">{site.instagramHandle}</span>
            </a>
          </div>
          <div className="md:text-end">
            <p className="eyebrow text-gold">{d.zone.eyebrow}</p>
            <p className="mt-4 flex min-h-11 items-center justify-center text-text-light md:justify-end">{f.zone}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-8 text-[0.78rem] text-muted-light md:flex-row">
          <p>
            © {year} {site.legalName}. {f.rights}
          </p>
          <nav aria-label={f.legal} className="flex items-center gap-6">
            <a href={`/${lang}#devis`} className="link-line min-h-11 content-center hover:text-gold-light">
              {n.quote}
            </a>
            <a href={`/${lang}/legal`} className="link-line min-h-11 content-center hover:text-gold-light">
              {f.legal}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
