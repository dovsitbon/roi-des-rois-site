import logo from "@/data/logo.json";

const c = logo.crown;

// Couronne au trait, redessinée d'après le logo (scripts/logo.py) : cinq pointes, perles, pierres émeraude et bleu canard.
export function Crown({ className = "", stroke = "currentColor", width = 3.2, gems = true }: { className?: string; stroke?: string; width?: number; gems?: boolean }) {
  return (
    <svg viewBox={c.viewBox} className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke={stroke} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round">
        <path d={c.body} />
        <path d={c.inner} strokeWidth={width * 0.6} />
        <path d={c.band} />
        <path d={c.top} fill={gems ? "#1D5E6B" : "none"} />
      </g>
      {c.pearls.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={stroke} />
      ))}
      {gems &&
        c.gems.map(([x, y, k]) => {
          const X = Number(x);
          const Y = Number(y);
          return <path key={X} d={`M${X} ${Y - 6} L${X + 6} ${Y} L${X} ${Y + 6} L${X - 6} ${Y} Z`} fill={k === "e" ? "#1F5A4C" : "#1D5E6B"} />;
        })}
    </svg>
  );
}

// « ROI DES ROIS » en tracés (rendu identique sans attendre la police)
export function Wordmark({ className = "" }: { className?: string }) {
  const W = logo.word.w;
  return (
    <svg viewBox={`0 -72 ${W} 74`} className={className} aria-hidden="true" focusable="false">
      <path d={logo.word.d} fill="currentColor" />
    </svg>
  );
}

// Lockup du header : couronne au-dessus du nom
export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col items-center gap-1.5 ${className}`}>
      <Crown className="h-5 w-auto text-gold md:h-6" width={4} />
      <Wordmark className="h-[0.8rem] w-auto text-gold-light md:h-[0.95rem]" />
    </span>
  );
}

// « تزيين الحفلات والأعراس » en tracés (Amiri) : aucune police arabe à charger sur les pages FR / EN
export function ArabicTagline({ className = "", label }: { className?: string; label?: string }) {
  return (
    <svg viewBox={`-2 -34 ${logo.ar.w + 4} 52`} className={className} {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })} focusable="false">
      <path d={logo.ar.d} fill="currentColor" />
    </svg>
  );
}
