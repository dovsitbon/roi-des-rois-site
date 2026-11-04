# Roi des Rois Déco – site vitrine et demande de devis

Décoration événementielle et mariages marocains à Nantes (44) : site en français (par défaut), arabe (RTL) et anglais.
Next.js 16 (App Router, pages statiques), Tailwind CSS 4, Lenis. Aucune base de données : les contenus vivent dans des fichiers JSON.

## Lancer en local

```bash
npm install
npm run dev
```

Puis http://localhost:3000 (redirige vers `/fr`, `/ar` ou `/en` selon le navigateur).

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Tous les textes (3 langues) | `locales/fr.json`, `locales/ar.json`, `locales/en.json` |
| Catalogue de location et prix | `data/location.json` (`price: null` = « Prix sur demande ») |
| Dates déjà réservées (alerte dans le devis) | `data/dates.json` |
| Galerie « Réalisations » | `data/gallery.json` |
| Téléphone, WhatsApp, Instagram, URL | `data/site.json` |
| Photos | `assets/<catégorie>/` puis `npm run media` (génère `public/media/`, `og.jpg`, icône Apple) |
| Logo (tracés SVG) | `python scripts/logo.py <dossier des polices Cinzel + Amiri>` |
| Document de validation des textes | `npm run contenu` → `CONTENU.md` |

## Demande de devis

Le formulaire compose un récapitulatif dans la langue du visiteur et ouvre WhatsApp vers le 07 81 10 11 24.
Une copie e-mail part en parallèle si ces variables sont définies sur Vercel (Settings → Environment Variables) :

- `RESEND_API_KEY` : clé Resend
- `QUOTE_NOTIFY_EMAIL` : adresse qui reçoit les demandes
- `RESEND_FROM` (facultatif) : expéditeur sur un domaine vérifié dans Resend

## Choix techniques

- Next.js plutôt que Vite + GSAP : pages pré-rendues par langue (SEO, hreflang), images AVIF/WebP automatiques.
- Animations en CSS (fondus lents, ouverture de 2 s) au lieu de Framer Motion : moins de JavaScript, meilleur score mobile.
  L'ouverture se joue une fois par session et respecte `prefers-reduced-motion`.
- Logo, nom et signature arabe en tracés SVG : rendu net sans attendre les polices.
- Amiri réduite aux caractères utilisés (`app/fonts/README.md`).
