import site from "@/data/site.json";
import { getItem } from "@/lib/catalog";
import type { ClientDict, Locale } from "@/lib/i18n";

export const EVENT_TYPES = ["mariage", "fiancailles", "henne", "reception", "autre"] as const;
export const SERVICES = ["complete", "allee", "location"] as const;

export type Selected = { id: string; qty: number };
export type Quote = {
  eventType: string;
  date: string;
  venue: string;
  guests: string;
  service: string;
  items: Selected[];
  theme: string;
  budget: string;
  name: string;
  phone: string;
  message: string;
};

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

function formatDate(iso: string, lang: Locale) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const tag = lang === "ar" ? "ar-MA-u-nu-latn" : lang === "fr" ? "fr-FR" : "en-GB";
  return new Intl.DateTimeFormat(tag, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(Date.UTC(y, m - 1, d));
}

// Récapitulatif envoyé sur WhatsApp (et repris dans l'e-mail), dans la langue du visiteur.
export function quoteMessage(q: Quote, lang: Locale, d: Pick<ClientDict, "form">) {
  const w = d.form.wa;
  const f = d.form;
  const sep = lang === "fr" ? " : " : ": ";
  const line = (label: string, value: string) => (value ? `${label}${sep}${value}` : null);
  const items = q.items.flatMap((s) => {
    const it = getItem(s.id);
    return it ? [`  – ${it.name[lang]} × ${s.qty}`] : [];
  });
  const event = [
    line(w.event, f.eventTypes[q.eventType as keyof typeof f.eventTypes] ?? ""),
    line(w.date, q.date ? formatDate(q.date, lang) : ""),
    line(w.venue, q.venue),
    line(w.guests, q.guests),
    line(w.service, f.services[q.service as keyof typeof f.services] ?? ""),
    items.length ? `${w.items}${sep.trimEnd()}\n${items.join("\n")}` : null,
    line(w.theme, q.theme),
    line(w.budget, q.budget),
  ].filter(Boolean);
  const contact = [line(w.name, q.name), line(w.phone, q.phone)].filter(Boolean);
  const blocks = [w.title, event.join("\n"), contact.join("\n")];
  if (q.message) blocks.push(`${w.message}${sep.trimEnd()}\n${q.message}`);
  blocks.push(w.lang);
  return blocks.filter(Boolean).join("\n\n");
}
