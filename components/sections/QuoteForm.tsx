"use client";

import { useState, type FormEvent } from "react";
import dates from "@/data/dates.json";
import { useRequest } from "@/components/RequestProvider";
import { CloseIcon, WhatsAppIcon } from "@/components/icons";
import { getItem } from "@/lib/catalog";
import { EVENT_TYPES, SERVICES, quoteMessage, waLink, type Quote } from "@/lib/quote";

const TAKEN = new Set(dates.taken as string[]);
const REQUIRED = ["eventType", "date", "name", "phone"] as const;

// Demande de devis : récapitulatif formaté envoyé sur WhatsApp dans la langue du visiteur,
// + copie e-mail (Resend) via /api/notify si configurée. Aucun envoi bloquant : WhatsApp s'ouvre d'abord.
export function QuoteForm() {
  const { lang, d, items, setQty, remove } = useRequest();
  const f = d.form;
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [date, setDate] = useState("");
  const [sentLink, setSentLink] = useState<string | null>(null);
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const q: Quote = {
      eventType: v("eventType"),
      date: v("date"),
      venue: v("venue"),
      guests: v("guests"),
      service: v("service"),
      items,
      theme: v("theme"),
      budget: v("budget"),
      name: v("name"),
      phone: v("phone"),
      message: v("message"),
    };
    const missing = new Set<string>(REQUIRED.filter((k) => !q[k]));
    setErrors(missing);
    if (missing.size) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${[...missing][0]}"]`);
      first?.focus();
      return;
    }
    const link = waLink(quoteMessage(q, lang, d));
    window.open(link, "_blank", "noopener");
    setSentLink(link);
    fetch("/api/notify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lang, quote: q }), keepalive: true }).catch(() => {});
  };

  const err = (k: string) => errors.has(k);
  const errId = (k: string) => (err(k) ? `${k}-error` : undefined);
  const errorText = (k: string) =>
    err(k) ? (
      <p id={`${k}-error`} className="mt-2 text-[0.8rem] text-bordeaux">
        {f.required}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <fieldset>
        <legend className="label">
          {f.eventType} <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {EVENT_TYPES.map((t) => (
            <label key={t} className="choice">
              <input type="radio" name="eventType" value={t} className="sr-only" aria-describedby={errId("eventType")} />
              {f.eventTypes[t]}
            </label>
          ))}
        </div>
        {errorText("eventType")}
      </fieldset>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="q-date" className="label">
            {f.date} <span aria-hidden="true">*</span>
          </label>
          <input id="q-date" name="date" type="date" min={today} required value={date} onChange={(e) => setDate(e.target.value)} className="field" aria-invalid={err("date") || undefined} aria-describedby={TAKEN.has(date) ? "date-taken" : errId("date")} />
          {errorText("date")}
          {TAKEN.has(date) && (
            <p id="date-taken" className="mt-2 text-[0.82rem] text-bordeaux" role="status">
              {f.dateTaken}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="q-guests" className="label">
            {f.guests}
          </label>
          <input id="q-guests" name="guests" type="number" inputMode="numeric" min={1} max={5000} className="field" />
        </div>
      </div>

      <div>
        <label htmlFor="q-venue" className="label">
          {f.venue}
        </label>
        <input id="q-venue" name="venue" type="text" autoComplete="off" placeholder={f.venuePh} className="field" />
      </div>

      <fieldset>
        <legend className="label">{f.service}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <label key={s} className="choice">
              <input type="radio" name="service" value={s} className="sr-only" />
              {f.services[s]}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <p className="label">{f.items}</p>
        {items.length === 0 ? (
          <p className="mt-3 text-[0.92rem] text-muted">
            {f.itemsEmpty}{" "}
            <a href={`/${lang}#location`} className="link-line text-gold-ink">
              {f.itemsBrowse}
            </a>
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {items.map((s) => {
              const it = getItem(s.id);
              if (!it) return null;
              return (
                <li key={s.id} className="flex items-center gap-3 py-3">
                  <span className="flex-1 text-[0.95rem]">{it.name[lang]}</span>
                  <label className="sr-only" htmlFor={`qty-${s.id}`}>
                    {f.qty} – {it.name[lang]}
                  </label>
                  <input id={`qty-${s.id}`} type="number" inputMode="numeric" min={1} max={999} value={s.qty} onChange={(e) => setQty(s.id, Number(e.target.value))} className="field w-16 py-1 text-center" />
                  <button type="button" onClick={() => remove(s.id)} className="flex min-h-11 min-w-11 items-center justify-center text-muted hover:text-bordeaux" aria-label={`${d.rental.remove} – ${it.name[lang]}`}>
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="q-theme" className="label">
            {f.theme}
          </label>
          <input id="q-theme" name="theme" type="text" placeholder={f.themePh} className="field" />
        </div>
        <div>
          <label htmlFor="q-budget" className="label">
            {f.budget} <span className="normal-case tracking-normal">({f.optional})</span>
          </label>
          <input id="q-budget" name="budget" type="text" inputMode="text" className="field" />
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="label">
            {f.name} <span aria-hidden="true">*</span>
          </label>
          <input id="q-name" name="name" type="text" autoComplete="name" required className="field" aria-invalid={err("name") || undefined} aria-describedby={errId("name")} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="q-phone" className="label">
            {f.phone} <span aria-hidden="true">*</span>
          </label>
          <input id="q-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" dir="ltr" required className="field rtl:text-right" aria-invalid={err("phone") || undefined} aria-describedby={errId("phone")} />
          {errorText("phone")}
        </div>
      </div>

      <div>
        <label htmlFor="q-message" className="label">
          {f.message}
        </label>
        <textarea id="q-message" name="message" rows={4} placeholder={f.messagePh} className="field resize-y" />
      </div>

      <div>
        <button type="submit" className="btn btn-ink-solid w-full sm:w-auto">
          <WhatsAppIcon className="h-4 w-4" /> {f.submit}
        </button>
        <p className="mt-4 text-[0.82rem] text-muted">{f.privacy}</p>
        {sentLink && (
          <p role="status" className="mt-6 border-s-2 border-gold-ink ps-4 text-[0.95rem]">
            {f.sent}{" "}
            <a href={sentLink} target="_blank" rel="noopener noreferrer" className="link-line text-gold-ink">
              {f.sentLink}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
