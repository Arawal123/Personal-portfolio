"use client";

import { motion } from "framer-motion";
import { collaborationButtons, emailLinks } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 text-center md:py-40 lg:py-48"
    >
      <motion.div
        className="narrow-shell"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-18% 0px" }}
        transition={{ duration: 1.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label justify-center">Contact</p>
        <h2 className="serif-display text-balance mt-10 text-[clamp(3.4rem,8vw,8.8rem)] leading-[0.88]">
          Let&apos;s build something thoughtful.
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-balance text-lg leading-9 text-[#3d3934] md:text-xl md:leading-10">
          I&apos;m open to meaningful collaborations, thoughtful technical work,
          and conversations around AI, learning, and building.
        </p>

        <motion.div
          className="mx-auto mt-20 max-w-3xl border-t border-[#d8d0c4] pt-14 md:mt-28 md:pt-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.82rem] font-bold uppercase tracking-[0.48em] text-[#171717] md:text-[0.95rem]">
            Interested in collaborating?
          </p>

          <div className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
            {collaborationButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group relative flex min-h-20 items-center justify-center overflow-hidden border border-[#171717]/62 px-8 text-[0.72rem] font-bold uppercase tracking-[0.34em] text-[#171717]"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-[#171717] transition-all duration-700 group-hover:h-full" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#f7f4ef]">
                  {button.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-5 text-[#171717] sm:flex-row sm:gap-8">
            {emailLinks.map((email) => (
              <a
                key={email.value}
                href={email.href}
                className="focus-ring group inline-flex items-center gap-3 text-left text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#6f6a63] transition-colors duration-500 hover:text-[#171717]"
              >
                <span className="grid h-9 w-9 place-items-center border border-[#171717]/55 transition-colors duration-500 group-hover:bg-[#171717]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current stroke-[1.8] transition-colors duration-500 group-hover:text-[#f7f4ef]"
                  >
                    <path d="M3.75 6.75h16.5v10.5H3.75z" />
                    <path d="m4.25 7.25 7.75 6 7.75-6" />
                  </svg>
                </span>
                <span className="flex flex-col gap-1">
                  <span>{email.label}</span>
                  <span className="max-w-[18rem] break-all font-medium normal-case tracking-[0.02em]">
                    {email.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
