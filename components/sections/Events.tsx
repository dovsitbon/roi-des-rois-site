import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/sections/Head";
import type { Dict } from "@/lib/i18n";
import { img } from "@/lib/images";

const PHOTOS: Record<string, { src: string; pos: string }> = {
  mariage: { src: "/media/galerie/scene-salon-blanc.jpg", pos: "50% 45%" },
  fiancailles: { src: "/media/salons-marocains/emeraude-table-lanternes.jpg", pos: "50% 55%" },
  henne: { src: "/media/henne/henne-arches-vertes.jpg", pos: "50% 55%" },
  reception: { src: "/media/galerie/table-rose-bougies.jpg", pos: "50% 55%" },
};

export function Events({ d }: { d: Dict }) {
  const e = d.events;
  return (
    <section aria-labelledby="events-title" className="on-light bg-ivory px-5 py-28 text-ink md:px-10 md:py-36">
      <SectionHead eyebrow={e.eyebrow} title={e.title} light id="events-title" />
      <ul className="mx-auto mt-16 grid max-w-[1320px] grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        {e.items.map((it, i) => (
          <Reveal as="li" key={it.id} delay={i * 0.12} className={`group ${i % 2 ? "lg:mt-16" : ""}`}>
            <div className="photo aspect-[3/4]">
              <Image {...img(PHOTOS[it.id].src)} alt={it.alt} sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" quality={68} className="h-full w-full object-cover" style={{ objectPosition: PHOTOS[it.id].pos }} />
            </div>
            <h3 className="display mt-6 text-[1.9rem]">{it.title}</h3>
            <p className="mt-3 text-[0.97rem] text-muted">{it.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
