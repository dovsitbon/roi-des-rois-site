"use client";

import { useEffect, useState } from "react";
import site from "@/data/site.json";
import { LogoLockup } from "@/components/Logo";
import { LangSwitch } from "@/components/LangSwitch";
import { CloseIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { useRequest } from "@/components/RequestProvider";
import { waLink } from "@/lib/quote";

// Header : menu en petites capitales espacées à gauche, logo centré, langues / Instagram / devis à droite.
// Transparent sur le hero, il se pose sur fond noir dès qu'on fait défiler.
export function Header({ hello }: { hello: string }) {
  const { lang, d } = useRequest();
  const n = d.nav;
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const home = `/${lang}`;
  const links = [
    { href: `${home}#decoration`, label: n.decoration },
    { href: `${home}#allee`, label: n.allee },
    { href: `${home}#location`, label: n.location },
    { href: `${home}#realisations`, label: n.realisations },
    { href: `${home}#devis`, label: n.contact },
  ];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:bg-noir focus:px-4 focus:py-2 focus:text-gold-light">
        {n.skip}
      </a>
      <header className="site-header fixed inset-x-0 top-0 z-50" data-solid={solid || open ? "true" : "false"}>
        <div className="mx-auto grid h-[4.75rem] max-w-[1480px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-[5.5rem] md:px-10">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="eyebrow -ms-2 flex min-h-11 items-center gap-3 px-2 text-text-light xl:hidden"
            >
              <span aria-hidden="true" className="flex w-6 flex-col gap-[6px]">
                <span className={`h-px bg-current transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <span className={`h-px bg-current transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </span>
              <span className="hidden sm:inline">{open ? n.close : n.menu}</span>
              <span className="sr-only sm:hidden">{open ? n.close : n.menu}</span>
            </button>
            <nav aria-label={n.menu} className="hidden xl:block">
              <ul className="flex items-center gap-7 2xl:gap-9">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="eyebrow link-line py-2 text-text-light/90 transition-colors duration-500 hover:text-gold-light">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <a href={home} aria-label={n.home} className="flex justify-center px-2">
            <LogoLockup />
          </a>

          <div className="flex items-center justify-end gap-4 md:gap-6">
            <LangSwitch lang={lang} label={n.langs} className="hidden text-text-light md:flex" />
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label={n.instagram} className="hidden min-h-10 items-center text-text-light/85 transition-colors duration-500 hover:text-gold-light md:flex">
              <InstagramIcon />
            </a>
            <a href={`${home}#devis`} className="btn btn-gold hidden min-h-10 whitespace-nowrap px-5 lg:inline-flex">
              {n.quote}
            </a>
            <a href={`${home}#devis`} className="eyebrow min-h-11 content-center text-gold-light lg:hidden">
              {n.quoteShort}
            </a>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="zellige fixed inset-0 z-40 overflow-y-auto bg-noir pt-[4.75rem] [--z:0.05] md:pt-[5.5rem] xl:hidden"
      >
        <nav aria-label={n.menu} className="mx-auto flex min-h-full max-w-md flex-col px-8 pb-12 pt-10">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-line-dark">
                <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-5 py-5">
                  <span className="num text-[0.65rem] text-gold">{String(i + 1).padStart(3, "0")}</span>
                  <span className="display text-[2rem] text-text-light">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4">
            <a href={`${home}#devis`} onClick={() => setOpen(false)} className="btn btn-solid w-full">
              {n.quote}
            </a>
            <a href={waLink(hello)} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-auto flex items-center justify-between pt-12 text-text-light">
            <LangSwitch lang={lang} label={n.langs} />
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label={n.instagram} className="flex min-h-11 items-center gap-2 text-sm text-muted-light">
              <InstagramIcon /> {site.instagramHandle}
            </a>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="sr-only focus:not-sr-only">
            <CloseIcon /> {n.close}
          </button>
        </nav>
      </div>
    </>
  );
}
