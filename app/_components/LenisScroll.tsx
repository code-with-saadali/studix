"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function scrollToHash(lenis: Lenis) {
  const hash = window.location.hash;
  if (!hash) return;

  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY;

  lenis.scrollTo(y, {
    immediate: false,
    duration: 0.8,
    lock: true,
  });
}

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Content height can change after mount — accordions opening,
    // framer-motion height:auto animations, images finishing load,
    // fonts swapping in, etc. Lenis caches the scroll limit, so when
    // the DOM grows/shrinks without a resize() call, scroll can get
    // stuck partway. Watch <body> and resync whenever its size changes.
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    const onWindowResize = () => lenis.resize();
    window.addEventListener("resize", onWindowResize);

    const onHashChange = () => {
      setTimeout(() => scrollToHash(lenis), 0);
    };
    window.addEventListener("hashchange", onHashChange);

    // Handle initial load with hash after first paint
    setTimeout(() => {
      if (window.location.hash) scrollToHash(lenis);
    }, 50);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("hashchange", onHashChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}