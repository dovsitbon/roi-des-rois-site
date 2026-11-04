import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cinzel, Cormorant_Garamond, Jost, Noto_Naskh_Arabic } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import site from "@/data/site.json";
import { dirOf, getDict, isLocale, locales, pickClient } from "@/lib/i18n";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { RequestProvider } from "@/components/RequestProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

// Aucune police préchargée (chemin critique minimal) : texte en swap ; à la première visite,
// le changement de police a lieu sous le rideau d'ouverture. Seules les graisses utilisées sont chargées.
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "300", variable: "--font-cormorant", display: "swap", preload: false });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"], variable: "--font-cinzel", display: "swap", preload: false });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-jost", display: "swap", preload: false });
// Amiri réduite aux caractères des textes arabes (voir app/fonts/README.md)
const amiri = localFont({ src: "../fonts/amiri-subset.woff2", weight: "400", variable: "--font-amiri", display: "swap", preload: false });
const naskh = Noto_Naskh_Arabic({ subsets: ["arabic"], weight: "400", variable: "--font-naskh", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#0e0c0a", width: "device-width", initialScale: 1, colorScheme: "dark" };

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

const headScript =
  `(function(){var d=document.documentElement;d.classList.add("js");` +
  `try{if(sessionStorage.getItem("rdr-intro")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("intro-seen");else sessionStorage.setItem("rdr-intro","1")}catch(e){d.classList.add("intro-seen")}` +
  `document.addEventListener("click",function(e){var t=e.target;if(t&&t.closest&&t.closest("[data-intro-skip]"))d.classList.add("intro-seen")})})()`;

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${cormorant.variable} ${cinzel.variable} ${jost.variable} ${amiri.variable} ${naskh.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body>
        <RequestProvider lang={lang} d={pickClient(d)}>
          <Intro skipLabel={d.intro.skip} sub={d.brand.sub} ar={d.brand.ar} />
          <SmoothScroll />
          <Header hello={d.whatsapp.hello} />
          <main id="main">{children}</main>
          <Footer lang={lang} d={d} />
          <WhatsAppFloat label={d.whatsapp.float} message={d.whatsapp.hello} />
        </RequestProvider>
      </body>
    </html>
  );
}
