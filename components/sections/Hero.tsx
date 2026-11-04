import type { CSSProperties } from "react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons";
import type { Dict, Locale } from "@/lib/i18n";
import { img } from "@/lib/images";
import { waLink } from "@/lib/quote";

// Hero plein écran. Les photos d'origine sont verticales (720 px de large) : sur ordinateur,
// un triptyque (salle · salon bordeaux sous le lustre · allée) plutôt qu'une seule image étirée et floue.
const SIDE = ["/media/hero/salle-scene-orientale.jpg", "/media/hero/salon-bordeaux-lustre.jpg", "/media/hero/allee-tapis-rouge.jpg"];

export function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-noir">
      <div className="absolute inset-0 -z-10 grid grid-cols-1 gap-[3px] md:grid-cols-[1fr_1.35fr_1fr]">
        {SIDE.map((src, i) => (
          <div key={src} className={`relative overflow-hidden ${i === 1 ? "" : "hidden md:block"}`}>
            <Image
              {...img(src)}
              alt={h.alts[i]}
              priority={i === 1}
              fetchPriority={i === 1 ? "high" : "auto"}
              loading={i === 1 ? undefined : "lazy"}
              quality={72}
              sizes={i === 1 ? "(min-width: 768px) 41vw, 100vw" : "30vw"}
              className="hero-img h-full w-full object-cover"
              style={{ objectPosition: i === 1 ? "50% 40%" : "50% 55%" }}
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.72)_0%,rgba(14,12,10,0.3)_32%,rgba(14,12,10,0.5)_58%,rgba(14,12,10,0.92)_100%)]" />
        <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(14,12,10,0.55)_100%)] md:block" />
      </div>

      <div className="mx-auto mt-auto flex w-full max-w-5xl flex-col items-center px-6 pb-14 pt-36 text-center md:pb-16">
        <p className="eyebrow hero-in text-gold-light" style={{ "--d": "0s" } as CSSProperties}>
          {h.eyebrow}
        </p>
        <h1 id="hero-title" className="display hero-rise mt-6 text-[clamp(2.7rem,7.4vw,6.4rem)] text-[#fbf3e2] [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]" style={{ "--d": "0.1s" } as CSSProperties}>
          {h.title}
        </h1>
        <p className="hero-in mt-6 max-w-xl text-[1.02rem] text-text-light/90" style={{ "--d": "0.3s" } as CSSProperties}>
          {h.lead}
        </p>
        <div className="hero-in mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4" style={{ "--d": "0.45s" } as CSSProperties}>
          <a href={`/${lang}#devis`} className="btn btn-gold w-full bg-noir/30 backdrop-blur-[2px] sm:w-auto">
            {h.quote}
          </a>
          <a href={waLink(d.whatsapp.hello)} target="_blank" rel="noopener noreferrer" className="btn w-full border-transparent text-text-light hover:text-gold-light sm:w-auto">
            <WhatsAppIcon className="h-4 w-4" /> {h.whatsapp}
          </a>
        </div>
        <a href="#maison" className="hero-in mt-12 flex flex-col items-center gap-3 text-text-light/70" style={{ "--d": "0.7s" } as CSSProperties}>
          <span className="eyebrow text-[0.6rem]">{h.scroll}</span>
          <span className="scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
