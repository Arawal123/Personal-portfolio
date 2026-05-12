"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { registerGsap } from "@/lib/animations";

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const imageWrap = imageRef.current;
      const portraitImage = imageWrap?.querySelector("img");
      const storyLines = textRef.current?.children;

      if (imageWrap) {
        gsap.fromTo(
          imageWrap,
          { clipPath: "inset(16% 0% 16% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 62%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (portraitImage) {
        gsap.to(portraitImage, {
          scale: 1.08,
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if (storyLines?.length) {
        gsap.fromTo(
          storyLines,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 58%",
              toggleActions: "play none none reverse"
            }
          }
        );
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
      className="relative border-b border-[#d8d0c4] py-24 md:py-32 lg:min-h-screen lg:py-36"
    >
      <div className="content-shell grid gap-14 lg:grid-cols-[0.9fr_0.82fr] lg:items-center lg:gap-24">
        <div className="lg:sticky lg:top-[13vh]">
          <div
            ref={imageRef}
            className="relative aspect-[0.86] min-h-[520px] overflow-hidden bg-[#efe9df] lg:min-h-[72vh]"
          >
            <Image
              src="/images/arawal-bw.jpg"
              alt="Black and white portrait of Arawal Shukla."
              fill
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="object-cover object-[50%_48%]"
            />
          </div>
        </div>

        <div ref={textRef} className="self-center py-4">
          <p className="mb-9 text-[0.68rem] font-bold uppercase tracking-[0.42em] text-[#6f6a63]">
            Personal Story
          </p>
          <h2 className="serif-display text-balance text-[clamp(3.4rem,6.8vw,7rem)] leading-[0.88] text-[#171717]">
            Self becoming.
          </h2>
          <p className="mt-12 max-w-xl text-lg leading-9 text-[#3d3934] md:text-xl md:leading-10">
            This site is not only a portfolio of finished work. It is also a
            record of learning, attempts, direction, and the small decisions
            that compound into skill.
          </p>
        </div>
      </div>
    </section>
  );
}
