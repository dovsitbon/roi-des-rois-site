"use client";

import { useState } from "react";
import Image from "next/image";
import { useRequest } from "@/components/RequestProvider";
import { ArrowIcon } from "@/components/icons";
import { rentalCategories, rentalItems } from "@/lib/catalog";
import { fill } from "@/lib/i18n";
import { img } from "@/lib/images";

// Catalogue de location : filtres par famille, fiches avec prix (data/location.json),
// bouton « Ajouter à ma demande » qui alimente le formulaire de devis.
export function Rental() {
  const { lang, d, has, toggle, items } = useRequest();
  const r = d.rental;
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? rentalItems : rentalItems.filter((i) => i.category === cat);
  const tabs = [{ id: "all", label: r.all }, ...rentalCategories.map((c) => ({ id: c.id, label: c.name[lang] }))];

  return (
    <>
      <div role="group" aria-label={r.title} className="mx-auto mt-12 flex max-w-[1320px] flex-wrap justify-center gap-x-7 gap-y-1 border-y border-line py-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={cat === t.id}
            onClick={() => setCat(t.id)}
            className={`eyebrow link-line min-h-11 transition-colors duration-500 ${cat === t.id ? "text-ink" : "text-muted hover:text-ink"}`}
            aria-current={cat === t.id ? "true" : undefined}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul className="mx-auto mt-12 grid max-w-[1320px] grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {list.map((it) => {
          const added = has(it.id);
          return (
            <li key={it.id} className="group flex flex-col">
              <div className="photo relative aspect-[4/5] bg-cream">
                <Image {...img(it.image)} alt={it.name[lang]} sizes="(min-width: 1024px) 23vw, (min-width: 768px) 30vw, 46vw" quality={66} className="h-full w-full object-cover" style={{ objectPosition: it.focus }} />
                {added && (
                  <span className="absolute start-3 top-3 bg-noir/85 px-2.5 py-1 text-[0.62rem] tracking-[0.2em] text-gold-light uppercase rtl:tracking-normal">
                    {r.added}
                  </span>
                )}
              </div>
              <h3 className="display mt-4 text-[1.22rem] leading-tight md:text-[1.4rem]">{it.name[lang]}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">{it.desc[lang]}</p>
              <p className="mt-3 text-[0.78rem] tracking-[0.12em] text-gold-ink uppercase rtl:tracking-normal">
                {it.price === null ? r.priceOnRequest : fill(r.from, { price: it.price, unit: it.unit[lang] })}
              </p>
              <button
                type="button"
                onClick={() => toggle(it.id)}
                aria-pressed={added}
                className={`btn mt-4 min-h-11 w-full px-3 text-[0.62rem] ${added ? "btn-ink-solid" : "btn-ink"}`}
              >
                {added ? `${r.added} · ${r.remove}` : r.add}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-12 max-w-[1320px] text-center text-[0.85rem] text-muted">{r.note}</p>

      {items.length > 0 && (
        <div className="sticky bottom-4 z-30 mx-auto mt-10 flex w-fit max-w-[calc(100%-5.5rem)] items-center gap-4 border border-gold/40 bg-noir px-5 py-3 text-text-light shadow-[0_12px_40px_rgba(0,0,0,0.35)] md:bottom-8" role="status">
          <span className="text-[0.85rem]">{fill(r.count, { n: items.length })}</span>
          <a href={`/${lang}#devis`} className="eyebrow flex min-h-11 items-center gap-2 text-gold-light">
            <span className="link-line">{r.goToForm}</span>
            <ArrowIcon />
          </a>
        </div>
      )}
    </>
  );
}
