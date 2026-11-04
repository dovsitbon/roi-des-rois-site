"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

// Fondu lent à l'entrée dans l'écran (IntersectionObserver, sans bibliothèque).
// Sans JavaScript, le contenu reste visible : la classe .reveal n'agit que sous html.js.
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-in");
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? ({ "--delay": `${delay}s` } as CSSProperties) : undefined}>
      {children}
    </Tag>
  );
}
