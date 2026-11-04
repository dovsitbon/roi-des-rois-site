// Génère CONTENU.md : tous les textes du site en 3 langues + le catalogue de location, pour validation.
//   node scripts/contenu.mjs
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const read = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const L = { fr: await read("locales/fr.json"), ar: await read("locales/ar.json"), en: await read("locales/en.json") };
const loc = await read("data/location.json");
const NAMES = { fr: "Français", ar: "العربية", en: "English" };

function walk(obj, prefix = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") out.push(...walk(v, key));
    else out.push([key, String(v)]);
  }
  return out;
}

const ASK = `## À demander au client

1. **Prénom et nom du gérant** (mentions légales, page « La maison », schéma Google).
2. **Liste exacte du matériel de location** : nom, quantité disponible, couleurs, dimensions, **prix** (et unité : pièce, ensemble, mètre, table), caution. → \`data/location.json\`
3. **Formules de décoration** : existe-t-il des formules ou des « à partir de » pour la décoration complète et l'allée ? Ce qui est compris (livraison, installation, démontage, fleurs).
4. **Zone de déplacement** : villes confirmées, frais de déplacement éventuels, distance maximale. (Le site cite aujourd'hui Nantes, Saint-Herblain, Rezé, Orvault, Saint-Sébastien-sur-Loire, Carquefou, Vertou, Saint-Nazaire : **à confirmer**.)
5. **SIRET**, forme juridique, adresse du dépôt ou du siège (mentions légales).
6. **Vrais avis clients** (prénom, type d'événement, ville, avec leur accord) ou lien vers une fiche Google : l'emplacement est prêt, aucun avis n'a été inventé.
7. **Vidéos et photos en bonne qualité** (originaux du téléphone, pas Instagram) : les visuels actuels sont extraits des reels en 720 px de large ; avec des originaux, le hero peut passer en grande photo ou en vidéo plein écran.
8. **Adresse e-mail** qui doit recevoir la copie des demandes de devis (Resend, voir README).
9. **Dates déjà réservées** si vous souhaitez prévenir les clients → \`data/dates.json\`.
10. **Nom de domaine** souhaité (ex. roidesrois-deco.fr).

## Choix faits sur les visuels

- Utilisés : les vraies réalisations (salons bordeaux, bleu canard et émeraude, salle avec scène des mariés, tables dressées, allée au tapis rouge, arches et lanternes, coin henné).
- Écartés : les visuels qui semblent générés par IA (salon dans un paysage de montagne, allée dans un jardin, lanternes dans le noir, palais doré), la publicité « R·H Traiteur », les montages flous ou avec autocollants, les doublons, le logo marqué « Contenu généré par l'IA » (redessiné en SVG).
- Le mot « Nantes » incrusté sur certaines vidéos a été retiré par recadrage.
`;

let md = `# ROI DES ROIS – Contenu du site, pour validation

Textes en français, arabe et anglais, et catalogue de location. Les textes sont modifiables dans \`locales/fr.json\`, \`locales/ar.json\`, \`locales/en.json\` ; le catalogue dans \`data/location.json\`.

${ASK}
## Catalogue de location (data/location.json)

| Famille | Article (FR) | العربية | English | Prix | Unité |
|---|---|---|---|---|---|
${loc.items
  .map((i) => {
    const c = loc.categories.find((x) => x.id === i.category);
    return `| ${c.name.fr} | **${i.name.fr}** – ${i.desc.fr} | ${i.name.ar} | ${i.name.en} | ${i.price === null ? "À REMPLIR" : `${i.price} €`} | ${i.unit.fr} |`;
  })
  .join("\n")}

## Tous les textes

| Clé | Français | العربية | English |
|---|---|---|---|
${walk(L.fr)
  .map(([k, fr]) => {
    const get = (o) => k.split(".").reduce((a, p) => (a == null ? a : a[p]), o);
    const esc = (s) => String(s ?? "").replace(/\|/g, "\|").replace(/\n/g, " ");
    return `| \`${k}\` | ${esc(fr)} | ${esc(get(L.ar))} | ${esc(get(L.en))} |`;
  })
  .join("\n")}
`;
await writeFile(path.join(ROOT, "CONTENU.md"), md);
console.log("CONTENU.md écrit", Object.keys(NAMES).length, "langues");
