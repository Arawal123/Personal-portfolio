"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";

export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const root = document.documentElement;
    root.classList.add("lenis");

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.86,
      touchMultiplier: 1.08
    });

    const { gsap, ScrollTrigger } = registerGsap();
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 350);

    return () => {
      window.clearTimeout(refresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
      root.classList.remove("lenis");
    };
  }, []);

  return null;
}
