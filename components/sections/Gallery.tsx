"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gallery from "@/data/gallery.json";
import { useRequest } from "@/components/RequestProvider";
import { ChevronIcon, CloseIcon } from "@/components/icons";
import { img } from "@/lib/images";

type Shot = { src: string; key: string; span: string };
const SHOTS = gallery.items as Shot[];

// Galerie asymétrique (colonnes décalées) avec visionneuse plein écran : clavier, flèches, Échap.
export function Gallery() {
  const { d } = useRequest();
  const g = d.gallery;
  const alts = g.alts as Record<string, string>;
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const last = useRef<HTMLButtonElement | null>(null);

  const show = (i: number, el: HTMLButtonElement) => {
    last.current = el;
    setOpen(i);
  };
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((n: number) => setOpen((i) => (i === null ? i : (i + n + SHOTS.length) % SHOTS.length)), []);

  useEffect(() => {
    const dl = dialog.current;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open !== null && dl && !dl.open) {
      dl.showModal();
      lenis?.stop();
    }
    if (open === null && dl?.open) {
      dl.close();
      lenis?.start();
      last.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const rtl = document.documentElement.dir === "rtl";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step]);

  const cur = open === null ? null : SHOTS[open];

  return (
    <>
      <ul className="mx-auto mt-16 columns-2 gap-3 md:mt-20 md:columns-3 md:gap-5 lg:max-w-[1320px]">
        {SHOTS.map((s, i) => (
          <li key={s.src} className="mb-3 break-inside-avoid md:mb-5">
            <button type="button" onClick={(e) => show(i, e.currentTarget)} className="photo group block w-full cursor-zoom-in" aria-label={`${g.open} : ${alts[s.key]}`}>
              <Image {...img(s.src)} alt={alts[s.key]} sizes="(min-width: 768px) 31vw, 48vw" quality={66} className={`w-full object-cover ${s.span}`} />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={close}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label={cur ? alts[cur.key] : g.title}
        className="lightbox m-0 h-[100dvh] max-h-none w-screen max-w-none bg-noir/96 p-0 text-text-light backdrop:bg-noir/90"
      >
        {cur && (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-4 py-3 md:px-8">
              <p className="num text-[0.7rem] text-gold" aria-live="polite">
                {String((open ?? 0) + 1).padStart(2, "0")} / {String(SHOTS.length).padStart(2, "0")}
              </p>
              <button type="button" onClick={close} className="flex min-h-11 min-w-11 items-center justify-center text-text-light hover:text-gold-light" aria-label={g.close}>
                <CloseIcon />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
              <Image key={cur.src} {...img(cur.src)} alt={alts[cur.key]} sizes="(min-width: 768px) 60vw, 100vw" quality={80} className="lightbox h-full max-h-[80dvh] w-auto object-contain" />
              <button type="button" onClick={() => step(-1)} aria-label={g.prev} className="absolute start-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-text-light/80 hover:text-gold-light md:start-6">
                <ChevronIcon dir="prev" className="h-7 w-7" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label={g.next} className="absolute end-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-text-light/80 hover:text-gold-light md:end-6">
                <ChevronIcon dir="next" className="h-7 w-7" />
              </button>
            </div>
            <p className="px-6 py-5 text-center text-[0.9rem] text-muted-light">{alts[cur.key]}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
