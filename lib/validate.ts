import { getItem } from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n";
import { EVENT_TYPES, SERVICES, type Quote } from "@/lib/quote";

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.slice(0, max).trim() : "");

export const parseLang = (v: unknown): Locale => (typeof v === "string" && isLocale(v) ? v : "fr");

export function parseQuote(raw: unknown): Quote | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const items = (Array.isArray(r.items) ? r.items : [])
    .slice(0, 60)
    .map((it) => {
      const o = (it ?? {}) as Record<string, unknown>;
      return { id: str(o.id, 60), qty: Math.max(1, Math.min(999, Math.floor(Number(o.qty)) || 1)) };
    })
    .filter((it) => getItem(it.id));
  const q: Quote = {
    eventType: (EVENT_TYPES as readonly string[]).includes(str(r.eventType, 20)) ? str(r.eventType, 20) : "",
    date: /^\d{4}-\d{2}-\d{2}$/.test(str(r.date, 10)) ? str(r.date, 10) : "",
    venue: str(r.venue, 160),
    guests: String(Math.max(0, Math.min(5000, Math.floor(Number(r.guests)) || 0)) || ""),
    service: (SERVICES as readonly string[]).includes(str(r.service, 20)) ? str(r.service, 20) : "",
    items,
    theme: str(r.theme, 200),
    budget: str(r.budget, 60),
    name: str(r.name, 120),
    phone: str(r.phone, 30),
    message: str(r.message, 1500),
  };
  if (!q.name || !q.phone || !q.eventType || !q.date) return null;
  return q;
}

const ENTITIES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ENTITIES[c]);
