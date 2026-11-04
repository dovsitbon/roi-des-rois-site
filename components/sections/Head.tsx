import { Reveal } from "@/components/Reveal";

// En-tête de section : petite ligne espacée, filet doré, grand titre fin.
export function SectionHead({ eyebrow, title, intro, light = false, id }: { eyebrow: string; title: string; intro?: string; light?: boolean; id?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className={`eyebrow ${light ? "text-gold-ink" : "text-gold"}`}>{eyebrow}</p>
      <div className={`rule mx-auto mt-5 w-fit ${light ? "text-gold-ink" : ""}`} aria-hidden="true">
        <i />
      </div>
      <h2 id={id} className={`display mt-6 text-[clamp(2.3rem,5.4vw,4.4rem)] ${light ? "text-ink" : "text-text-light"}`}>
        {title}
      </h2>
      {intro && <p className={`mx-auto mt-6 max-w-xl text-[1.02rem] ${light ? "text-muted" : "text-muted-light"}`}>{intro}</p>}
    </Reveal>
  );
}
