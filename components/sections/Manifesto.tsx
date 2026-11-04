import { Crown } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/lib/i18n";

export function Manifesto({ d }: { d: Dict }) {
  const m = d.manifesto;
  return (
    <section id="maison" aria-labelledby="maison-title" className="zellige on-light bg-cream px-6 py-28 text-ink [--z:0.07] md:py-40">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Crown className="mx-auto h-9 w-auto text-gold-ink" width={3} gems={false} />
        <p className="eyebrow mt-8 text-gold-ink">{m.eyebrow}</p>
        <h2 id="maison-title" className="display mt-6 text-[clamp(2.2rem,5vw,4rem)]">
          {m.title}
        </h2>
        <p className="mx-auto mt-9 max-w-2xl text-[1.08rem] leading-[1.9] text-muted md:text-[1.15rem]">{m.body}</p>
        <div className="rule mx-auto mt-12 w-fit text-gold-ink" aria-hidden="true">
          <i />
        </div>
        <p className="display mt-8 text-[1.45rem] text-bordeaux md:text-[1.7rem]">« {m.signature} »</p>
      </Reveal>
    </section>
  );
}
