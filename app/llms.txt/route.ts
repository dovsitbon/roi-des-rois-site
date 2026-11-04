import site from "@/data/site.json";
import { rentalCategories, rentalItems } from "@/lib/catalog";
import { getDict } from "@/lib/i18n";

// Résumé lisible par les assistants IA (llms.txt) : qui, quoi, où, comment demander un devis.
export const dynamic = "force-static";

export function GET() {
  const d = getDict("fr");
  const price = (p: number | null) => (p === null ? "prix sur demande" : `${p} €`);
  const text = `# ${site.legalName}

> ${d.meta.description}

Décorateur événementiel et loueur de matériel de décoration marocaine basé à Nantes (Loire-Atlantique, 44). Intervient à Nantes, Saint-Herblain, Rezé, Orvault, Saint-Sébastien-sur-Loire, Carquefou, Vertou, Saint-Nazaire et alentours. Langues : français, arabe.

- Téléphone / WhatsApp : ${site.phoneIntl} (https://wa.me/${site.whatsapp})
- Instagram : ${site.instagram}
- Site : ${site.url}/fr (arabe : ${site.url}/ar, anglais : ${site.url}/en)

## Prestations

${d.services.items.map((s) => `- **${s.title}** (${s.sub}) : ${s.body}`).join("\n")}

## Événements

${d.events.items.map((e) => `- ${e.title} : ${e.body}`).join("\n")}

## Location de matériel

${rentalCategories
  .map((c) => `### ${c.name.fr}\n${rentalItems.filter((i) => i.category === c.id).map((i) => `- ${i.name.fr} – ${i.desc.fr} (${price(i.price)}, ${i.unit.fr})`).join("\n")}`)
  .join("\n\n")}

## Demander un devis

Formulaire sur ${site.url}/fr#devis : type d'événement, date, lieu, nombre d'invités, prestation, articles de location, couleurs, budget. La demande est envoyée sur WhatsApp.
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
