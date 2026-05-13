"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { registerGsap } from "@/lib/animations";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const imageWrap = imageRef.current;
      const heroImage = imageWrap?.querySelector("img");
      const heroLines = textRef.current?.querySelectorAll("[data-hero-line]");

      if (imageWrap) {
        gsap.fromTo(
          imageWrap,
          {
            clipPath: "inset(18% 0% 18% 0%)",
            y: 46,
            scale: 0.96,
            opacity: 0.86
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.75,
            ease: "power3.out"
          }
        );
      }

      if (heroLines?.length) {
        gsap.fromTo(
          heroLines,
          { y: 58, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.35,
            stagger: 0.16,
            delay: 0.16,
            ease: "power3.out"
          }
        );
      }

      if (heroImage) {
        gsap.to(heroImage, {
          scale: 1.17,
          yPercent: -7,
          xPercent: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if (textRef.current) {
        gsap.to(textRef.current, {
          y: -82,
          opacity: 0.14,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "78% top",
            scrub: true
          }
        });
      }

      if (cueRef.current) {
        gsap.to(cueRef.current, {
          opacity: 0,
          y: 18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "28% top",
            scrub: true
          }
        });
      }
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
      aria-label="Arawal Shukla opening portrait"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#d8d0c4]" />
      <div className="page-shell relative grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0">
        <div
          ref={textRef}
          className="relative z-10 max-w-[820px] text-center lg:order-1 lg:-mr-20 lg:text-left"
        >
          <p
            data-hero-line
            className="mb-6 text-[0.68rem] font-bold uppercase tracking-[0.42em] text-[#6f6a63]"
          >
            {site.education}
          </p>
          <h1 className="serif-display text-balance text-[clamp(4.6rem,12.6vw,12rem)] leading-[0.8] text-[#171717]">
            <span data-hero-line className="block">
              Arawal
            </span>
            <span data-hero-line className="block lg:pl-[10vw]">
              Shukla
            </span>
          </h1>
          <p
            data-hero-line
            className="mx-auto mt-8 max-w-sm text-sm uppercase tracking-[0.32em] text-[#6f6a63] lg:mx-0 lg:ml-[10vw]"
          >
            {site.role}
          </p>
        </div>

        <div className="relative z-0 mx-auto w-full max-w-[650px] lg:order-2">
          <div
            ref={imageRef}
            className="relative mx-auto aspect-[0.83] min-h-[500px] overflow-hidden bg-[#efe9df] shadow-[0_48px_120px_rgba(23,23,23,0.12)] sm:min-h-[600px] lg:min-h-[68vh]"
          >
            <Image
              src="/images/arawal-red.jpg"
              alt="Arawal Shukla wearing a red sweatshirt."
              fill
              priority
              sizes="(max-width: 768px) 90vw, 52vw"
              className="object-cover object-[56%_50%]"
            />
          </div>
        </div>

        <div
          ref={cueRef}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.42em] text-[#6f6a63] md:flex"
        >
          <span>Scroll</span>
          <span className="block h-14 w-px overflow-hidden bg-[#d8d0c4]">
            <span className="block h-6 w-px animate-[scrollLine_2.8s_ease-in-out_infinite] bg-[#171717]" />
          </span>
        </div>
      </div>
    </section>
  );
}
