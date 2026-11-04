import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/lib/i18n";
import { img } from "@/lib/images";

const UP_CLOSE = [
  { src: "/media/details/theiere-doree.jpg", key: "theiere-doree" },
  { src: "/media/details/velours-canard-brode.jpg", key: "velours-canard-brode" },
  { src: "/media/details/verres-couverts-or.jpg", key: "verres-couverts-or" },
] as const;

// Section pleine largeur sur un gros plan de velours brodé d'or, puis trois détails « de près ».
export function Details({ d }: { d: Dict }) {
  const t = d.details;
  return (
    <section aria-labelledby="details-title" className="bg-noir">
      <div className="relative isolate flex min-h-[86svh] items-center justify-center overflow-hidden px-6 py-32">
        <Image {...img("/media/details/velours-bordeaux-brode.jpg")} alt={t.alt} sizes="100vw" quality={70} className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover" style={{ objectPosition: "50% 70%" }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,12,10,0.55)_0%,rgba(14,12,10,0.86)_75%)]" />
        <Reveal className="max-w-3xl text-center">
          <p className="eyebrow text-gold-light">{t.eyebrow}</p>
          <h2 id="details-title" className="display mt-6 text-[clamp(2.8rem,8vw,7rem)] text-[#fbf3e2]">
            {t.title}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.05rem] text-text-light/90">{t.body}</p>
        </Reveal>
      </div>
      <div className="mx-auto grid max-w-[1320px] grid-cols-3 gap-2 px-2 py-2 md:gap-4 md:px-10 md:py-16">
        {UP_CLOSE.map((u, i) => (
          <Reveal key={u.src} delay={i * 0.12} className={`photo aspect-[3/4] ${i === 1 ? "md:translate-y-10" : ""}`}>
            <Image {...img(u.src)} alt={d.gallery.alts[u.key]} sizes="(min-width: 768px) 30vw, 33vw" quality={68} className="h-full w-full object-cover" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
