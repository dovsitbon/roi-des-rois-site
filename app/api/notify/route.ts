import { Resend } from "resend";
import { getDict, pickClient } from "@/lib/i18n";
import { quoteMessage } from "@/lib/quote";
import { escapeHtml, parseLang, parseQuote } from "@/lib/validate";

// Copie e-mail de chaque demande de devis (la demande part de toute façon sur WhatsApp).
// Actif seulement si RESEND_API_KEY et QUOTE_NOTIFY_EMAIL sont définis (Vercel → Environment Variables).
// RESEND_FROM doit utiliser un domaine vérifié dans Resend, ex. « Roi des Rois Déco <devis@mondomaine.fr> ».

const html = (text: string) =>
  `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#1a1410;white-space:pre-wrap">${escapeHtml(text).replace(/\*(.+?)\*/g, "<strong>$1</strong>")}</div>`;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  const lang = parseLang(body.lang);
  const quote = parseQuote(body.quote);
  if (!quote) return Response.json({ ok: false }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_NOTIFY_EMAIL;
  if (!key || !to) return Response.json({ ok: true, emailed: false });

  // Toujours une version française pour l'équipe, suivie de celle du client s'il a écrit dans une autre langue.
  const fr = quoteMessage(quote, "fr", pickClient(getDict("fr")));
  const text = lang === "fr" ? fr : `${fr}\n\n— ${lang.toUpperCase()} —\n\n${quoteMessage(quote, lang, pickClient(getDict(lang)))}`;
  try {
    await new Resend(key).emails.send({
      from: process.env.RESEND_FROM ?? "Roi des Rois Déco <onboarding@resend.dev>",
      to,
      subject: `${getDict("fr").email.subject} · ${quote.name} · ${quote.date}`,
      html: html(text),
      text,
    });
    return Response.json({ ok: true, emailed: true });
  } catch {
    return Response.json({ ok: true, emailed: false });
  }
}
