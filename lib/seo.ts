import type { Metadata } from "next";
import site from "@/data/site.json";
import { rentalItems } from "@/lib/catalog";
import { getDict, locales, ogLocale, type Locale } from "@/lib/i18n";

export function pageMeta(lang: Locale, path: string, title: string, description: string): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])) as Record<string, string>;
  languages["x-default"] = `/fr${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/${lang}${path}`, languages },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: `/${lang}${path}`,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}

export function businessJsonLd(lang: Locale) {
  const d = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: [site.name, "Roi des Rois", site.nameAr],
    description: d.meta.description,
    slogan: d.manifesto.signature,
    url: `${site.url}/${lang}`,
    image: [`${site.url}/og.jpg`, `${site.url}/media/hero/salon-bordeaux-lustre.jpg`],
    logo: `${site.url}/logo.svg`,
    telephone: site.phoneIntl,
    priceRange: "€€",
    address: { "@type": "PostalAddress", addressLocality: "Nantes", postalCode: site.postalCode, addressRegion: "Pays de la Loire", addressCountry: "FR" },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { "@type": "City", name: "Nantes" },
      { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
      ...["Saint-Herblain", "Rezé", "Orvault", "Saint-Sébastien-sur-Loire", "Carquefou", "Vertou", "Saint-Nazaire"].map((name) => ({ "@type": "City", name })),
    ],
    knowsLanguage: ["fr", "ar"],
    sameAs: [site.instagram],
    contactPoint: [{ "@type": "ContactPoint", telephone: site.phoneIntl, contactType: "customer service", availableLanguage: ["French", "Arabic"] }],
    makesOffer: d.services.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.body, areaServed: "Loire-Atlantique" } })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: d.rental.title,
      itemListElement: rentalItems.map((i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: i.name[lang], description: i.desc[lang], image: `${site.url}${i.image}` },
        ...(i.price !== null ? { price: i.price, priceCurrency: "EUR" } : {}),
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
      })),
    },
  };
}

export const jsonLd = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
