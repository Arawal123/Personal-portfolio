"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { registerGsap } from "@/lib/animations";

type ImageBreakProps = {
  id: string;
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "bottom";
  timelineItems?: readonly {
    year: string;
    text: string;
  }[];
};

export default function ImageBreak({
  id,
  src,
  alt,
  eyebrow,
  title,
  body,
  align = "center",
  timelineItems
}: ImageBreakProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const hasTimeline = Boolean(timelineItems?.length);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -11, scale: 1.12 },
          {
            yPercent: 11,
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }

      if (copyRef.current) {
        const copyItems = copyRef.current.querySelectorAll("[data-reveal]");
        const timelineLine = copyRef.current.querySelector("[data-timeline-line]");
        const timelineDots = copyRef.current.querySelectorAll("[data-timeline-dot]");

        gsap.fromTo(
          copyItems,
          { opacity: 0, y: 42, clipPath: "inset(0% 0% 28% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.25,
            ease: "power3.out",
            stagger: 0.18,
            scrollTrigger: {
              trigger: section,
              start: "center 68%",
              toggleActions: "play none none reverse"
            }
          }
        );

        if (timelineLine) {
          gsap.fromTo(
            timelineLine,
            { scaleY: 0, transformOrigin: "top center", opacity: 0.3 },
            {
              scaleY: 1,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "center 70%",
                end: "center 38%",
                scrub: 0.8
              }
            }
          );
        }

        if (timelineDots.length) {
          gsap.fromTo(
            timelineDots,
            { scale: 0.35, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.85,
              stagger: 0.16,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "center 67%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        gsap.to(copyRef.current, {
          opacity: 0.34,
          y: -34,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "72% center",
            end: "bottom top",
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
      id={id}
      className="relative min-h-screen overflow-hidden border-y border-[#d8d0c4] bg-[#171717] px-[clamp(0.9rem,1.3vw,1.4rem)] py-[clamp(0.9rem,1.3vw,1.4rem)]"
    >
      <div className="image-vignette relative min-h-[calc(100vh-2.8rem)] overflow-hidden">
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={src.includes("forest")}
        />
        <div
          className={`absolute inset-0 z-[1] ${
            hasTimeline
              ? "bg-gradient-to-r from-black/84 via-black/68 to-black/54"
              : align === "bottom"
                ? "bg-gradient-to-r from-black/58 via-black/26 to-black/16"
              : "bg-black/18"
          }`}
        />
        <div
          ref={copyRef}
          className={`absolute inset-x-0 z-10 flex w-full px-6 text-[#fffaf2] ${
            hasTimeline
              ? "top-1/2 mx-auto max-w-[1380px] -translate-y-1/2 flex-col items-center gap-14 text-center lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-[7vw] lg:px-[8vw] lg:text-left"
              : align === "bottom"
                ? "bottom-[14vh] mx-auto max-w-[900px] flex-col items-center text-center md:left-[9vw] md:right-auto md:mx-0 md:items-start md:text-left"
                : "top-1/2 mx-auto max-w-5xl -translate-y-1/2 flex-col items-center text-center"
          }`}
        >
          <div className={hasTimeline ? "" : "contents"}>
            <p
              data-reveal
              className={`mb-7 text-[0.64rem] font-bold uppercase tracking-[0.42em] ${
                hasTimeline ? "text-[#d5b48a]/85" : "text-[#f7f4ef]/72"
              }`}
            >
              {eyebrow}
            </p>
            <h2
              data-reveal
              className={`serif-display text-balance ${
                hasTimeline
                  ? "text-[clamp(3.5rem,7vw,8rem)] leading-[0.88]"
                  : align === "bottom"
                    ? "text-[clamp(3.2rem,6.2vw,7.2rem)] leading-[0.92]"
                    : "text-[clamp(3.6rem,8.4vw,9.5rem)] leading-[0.88]"
              }`}
            >
              {title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            {body ? (
              <p
                data-reveal
                className="mt-8 max-w-2xl text-balance text-base leading-8 text-[#f4eee4]/82 md:text-lg"
              >
                {body}
              </p>
            ) : null}
          </div>

          {timelineItems?.length ? (
            <ol className="relative w-full max-w-3xl space-y-8 pl-8 text-left md:space-y-10">
              <span
                data-timeline-line
                className="absolute left-[0.34rem] top-2 h-[calc(100%-1rem)] w-px bg-[#fffaf2]/70"
              />
              {timelineItems.map((item) => (
                <li
                  key={item.year}
                  data-reveal
                  className="relative grid gap-2 md:grid-cols-[5rem_1fr] md:gap-8"
                >
                  <span
                    data-timeline-dot
                    className="absolute -left-8 top-2 h-3 w-3 rounded-full border border-[#fffaf2] bg-[#fffaf2] shadow-[0_0_18px_rgba(255,250,242,0.45)]"
                  />
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.34em] text-[#f4d7a6]">
                    {item.year}
                  </span>
                  <p className="max-w-xl text-base font-medium leading-8 text-[#fffaf2]/95 md:text-lg">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    </section>
  );
}
