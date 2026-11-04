"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ClientDict, Locale } from "@/lib/i18n";
import type { Selected } from "@/lib/quote";

// Articles de location ajoutés à la demande de devis (mémorisés dans le navigateur).
type Ctx = {
  lang: Locale;
  d: ClientDict;
  items: Selected[];
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const RequestContext = createContext<Ctx | null>(null);
const KEY = "rdr-request";

export function RequestProvider({ lang, d, children }: { lang: Locale; d: ClientDict; children: ReactNode }) {
  const [items, setItems] = useState<Selected[]>([]);

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) ?? "[]") as Selected[];
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture unique du stockage local après hydratation
      if (Array.isArray(raw)) setItems(raw.filter((i) => i && typeof i.id === "string"));
    } catch {}
  }, []);

  // Mises à jour fonctionnelles : deux clics rapprochés ne s'écrasent jamais.
  const save = useCallback((update: (prev: Selected[]) => Selected[]) => {
    setItems((prev) => {
      const next = update(prev);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      d,
      items,
      has: (id) => items.some((i) => i.id === id),
      toggle: (id) => save((prev) => (prev.some((i) => i.id === id) ? prev.filter((i) => i.id !== id) : [...prev, { id, qty: 1 }])),
      setQty: (id, qty) => save((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(999, qty || 1)) } : i))),
      remove: (id) => save((prev) => prev.filter((i) => i.id !== id)),
      clear: () => save(() => []),
    }),
    [lang, d, items, save],
  );

  return <RequestContext.Provider value={value}>{children}</RequestContext.Provider>;
}

export function useRequest() {
  const ctx = useContext(RequestContext);
  if (!ctx) throw new Error("useRequest hors RequestProvider");
  return ctx;
}
