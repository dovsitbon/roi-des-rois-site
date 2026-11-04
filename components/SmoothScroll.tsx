"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Défilement doux (Lenis). Les ancres internes tiennent compte du header fixe et de la barre collante du menu.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.25, autoRaf: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hh")) || 80;
      const sticky = document.querySelector<HTMLElement>("[data-sticky-nav]")?.offsetHeight ?? 0;
      lenis.scrollTo(el, { offset: -(header + sticky + 20) });
      history.replaceState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
