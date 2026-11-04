import type { CSSProperties } from "react";
import { ArabicTagline, Crown, Wordmark } from "@/components/Logo";

// Ouverture en CSS pur (aucune hydratation nécessaire, donc jamais d'écran vide), 2 s :
// un motif de zellige doré se trace au trait fin depuis le centre, la couronne apparaît traversée d'un reflet,
// « ROI DES ROIS » se révèle, puis la signature en français et en arabe, et le rideau s'ouvre sur le hero.
// Une fois par session ; le script de <head> pose html.intro-seen (sessionStorage / prefers-reduced-motion)
// et gère le bouton « Passer » sans attendre React.

const C = 500;

// Étoile à 8 branches {8/3}, motif de base du zellige
function star(r: number, rot: number) {
  const pts: string[] = [];
  for (let k = 0; k < 8; k++) {
    const i = (k * 3) % 8;
    const a = ((i * 45 + rot - 90) * Math.PI) / 180;
    pts.push(`${(C + r * Math.cos(a)).toFixed(1)} ${(C + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join(" L")} Z`;
}

function rosette() {
  const shapes: { d?: string; r?: number; t: number }[] = [];
  const rings = [46, 92, 150, 220, 300, 390, 480];
  rings.forEach((r, i) => {
    const t = 0.04 + i * 0.09;
    shapes.push({ d: star(r, i % 2 ? 22.5 : 0), t });
    shapes.push({ r: r * 0.93, t: t + 0.05 });
  });
  // Rayons reliant les étoiles, comme les joints d'un zellige
  for (let k = 0; k < 16; k++) {
    const a = ((k * 22.5 - 90) * Math.PI) / 180;
    const p = (r: number) => `${(C + r * Math.cos(a)).toFixed(1)} ${(C + r * Math.sin(a)).toFixed(1)}`;
    shapes.push({ d: `M${p(46)} L${p(480)}`, t: 0.12 });
  }
  return shapes;
}

const SHAPES = rosette();

export function Intro({ skipLabel, sub, ar }: { skipLabel: string; sub: string; ar: string }) {
  return (
    <div className="intro-curtain" id="intro" aria-hidden="true">
      <svg viewBox={`0 0 ${C * 2} ${C * 2}`} className="intro-zellige">
        {SHAPES.map((s, i) =>
          s.d ? (
            <path key={i} d={s.d} pathLength={1} style={{ "--t": `${s.t}s` } as CSSProperties} />
          ) : (
            <circle key={i} cx={C} cy={C} r={s.r} pathLength={1} style={{ "--t": `${s.t}s` } as CSSProperties} transform={`rotate(-90 ${C} ${C})`} />
          ),
        )}
      </svg>
      <div className="relative flex flex-col items-center bg-[radial-gradient(closest-side,rgba(14,12,10,0.92)_55%,transparent)] px-12 py-20 text-center">
        <div className="intro-crown relative overflow-hidden">
          <Crown className="h-auto w-[min(34vw,9.5rem)] text-gold" width={2.6} />
          <span className="intro-sheen pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_30%,rgba(255,240,200,0.75)_50%,transparent_70%)] mix-blend-overlay" />
        </div>
        <Wordmark className="intro-word mt-7 h-auto w-[min(76vw,26rem)] text-gold-light" />
        <span className="mt-6 block h-px w-24 bg-gold/60 intro-sub" />
        <p className="intro-sub caps mt-5 text-[0.62rem] text-gold md:text-[0.72rem]">{sub}</p>
        <ArabicTagline className="intro-sub intro-sub-2 mt-3 h-6 w-auto text-gold md:h-7" label={ar} />
      </div>
      <button type="button" className="intro-skip eyebrow" data-intro-skip tabIndex={-1}>
        {skipLabel}
      </button>
    </div>
  );
}
