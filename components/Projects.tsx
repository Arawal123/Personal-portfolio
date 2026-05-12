"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/site";
import { registerGsap } from "@/lib/animations";

function isUsableLink(url: string) {
  return url && !url.startsWith("ADD_");
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const projectImages = section.querySelectorAll("[data-project-image]");

      projectImages.forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -5, scale: 1.05 },
          {
            yPercent: 5,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative border-b border-[#d8d0c4] py-28 md:py-40 lg:py-48"
    >
      <div className="content-shell">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="label justify-center">Selected Work</p>
          <h2 className="serif-display text-balance mt-10 text-[clamp(3.8rem,8vw,8.8rem)] leading-[0.88] text-[#171717]">
            Recent works.
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-balance text-lg leading-9 text-[#3d3934] md:text-xl md:leading-10">
            A selection of recent projects across data science, algorithms,
            interfaces, and applied problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-14% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.22, delayChildren: 0.18 }
            }
          }}
        >
          {projects.map((project, index) => {
            const githubHref = isUsableLink(project.githubUrl)
              ? project.githubUrl
              : "#";
            const liveHref = isUsableLink(project.liveUrl) ? project.liveUrl : "";
            const isFeatured = index === 0;
            const isCollage = "secondaryImage" in project;
            const hideImage = "hideImage" in project && project.hideImage;

            return (
              <motion.article
                key={project.title}
                className={`group ${
                  isFeatured
                    ? "lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : "lg:col-span-6"
                }`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 58,
                    clipPath: "inset(28% 0% 0% 0%)"
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    transition: { duration: 1.28, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
              >
                {!hideImage ? (
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.linkLabel} for ${project.title}`}
                    className={`focus-ring relative block cursor-pointer overflow-hidden border border-[#b9ad9d] bg-[#efe9df] ${
                      isFeatured ? "aspect-[1.42]" : "aspect-[1.08]"
                    }`}
                  >
                    {isCollage ? (
                      <span className="absolute inset-0 grid grid-rows-[1.35fr_0.65fr] gap-px bg-[#b9ad9d]">
                        <span className="relative block overflow-hidden bg-[#f7f4ef]">
                          <Image
                            src={project.image}
                            alt={`${project.title} field comparison`}
                            fill
                            sizes="(max-width: 1024px) 92vw, 520px"
                            data-project-image
                            className="object-contain transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
                          />
                        </span>
                        <span className="relative block overflow-hidden bg-[#f7f4ef]">
                          <Image
                            src={project.secondaryImage}
                            alt={`${project.title} training loss curve`}
                            fill
                            sizes="(max-width: 1024px) 92vw, 520px"
                            data-project-image
                            className="object-contain transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
                          />
                        </span>
                      </span>
                    ) : (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes={
                          isFeatured
                            ? "(max-width: 1024px) 92vw, 650px"
                            : "(max-width: 1024px) 92vw, 520px"
                        }
                        data-project-image
                        className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                    )}
                    <span className="absolute inset-0 bg-black/10 transition duration-[900ms] group-hover:bg-black/20" />
                    <span className="absolute bottom-5 left-5 translate-y-2 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#f7f4ef] opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      View {project.linkLabel}
                    </span>
                  </a>
                ) : null}

                <div
                  className={`border-x border-b border-[#b9ad9d] px-6 py-7 md:px-8 md:py-8 ${
                    hideImage ? "border-t" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-5 text-[0.64rem] font-bold uppercase tracking-[0.34em] text-[#9b7b5a]">
                    <span>{project.number}</span>
                    <span className="text-right">{project.eyebrow}</span>
                  </div>

                  <h3 className="serif-display mt-7 inline text-4xl leading-none text-[#171717] underline decoration-[#171717]/0 decoration-1 underline-offset-[0.22em] transition duration-700 group-hover:decoration-[#171717]/45 md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6a63] md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#b9ad9d] px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[#6f6a63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-6 text-[0.66rem] font-bold uppercase tracking-[0.3em] text-[#171717]">
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring border-b border-[#171717]/45 pb-1 transition-colors duration-500 hover:text-[#9b7b5a]"
                    >
                      {project.linkLabel}
                    </a>
                    {liveHref ? (
                      <a
                        href={liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring border-b border-[#171717]/45 pb-1 transition-colors duration-500 hover:text-[#9b7b5a]"
                      >
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
