"use client";

import { motion } from "framer-motion";

const profileRows = [
  ["Education", "VIT Chennai \u00b7 B.Tech CSE \u00b7 2028"],
  ["Focus", "AI \u00b7 ML \u00b7 Deep Learning \u00b7 PINNs"],
  [
    "Experience",
    "Computational modelling \u00b7 End-to-end development projects"
  ]
] as const;

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 }
};

export default function Intro() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[#d8d0c4] py-24 md:py-28 lg:py-32"
    >
      <motion.div
        className="content-shell relative z-10 grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-18% 0px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.aside
          variants={reveal}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="label">Profile</p>
          <h2 className="serif-display mt-8 text-[clamp(4.2rem,7.4vw,8rem)] leading-[0.88] text-[#171717]">
            About.
          </h2>
          <motion.div
            variants={lineReveal}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px w-28 origin-left bg-[#9b7b5a]"
          />
        </motion.aside>

        <div className="lg:pt-16">
          <motion.p
            variants={reveal}
            transition={{ duration: 1.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-balance text-xl leading-9 text-[#2b2824] md:text-2xl md:leading-[1.55]"
          >
            CSE Sophomore at VIT Chennai, focused on AI, machine learning, deep
            learning, and Physics-Informed Neural Networks.
          </motion.p>

          <motion.p
            variants={reveal}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-sm font-bold uppercase leading-7 tracking-[0.24em] text-[#8a6a49]"
          >
            Building projects, exploring research direction, and strengthening
            proof-of-work.
          </motion.p>

          <motion.div
            className="mt-12 border-t border-[#d8d0c4]"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              }
            }}
          >
            {profileRows.map(([label, value]) => (
              <motion.div
                key={label}
                variants={reveal}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid gap-3 border-b border-[#d8d0c4] py-5 transition duration-500 md:grid-cols-[0.28fr_1fr] md:items-baseline"
              >
                <motion.span
                  variants={lineReveal}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-[#9b7b5a]/55"
                />
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#9b7b5a]/75 transition duration-500 group-hover:text-[#9b7b5a]">
                  {label}
                </p>
                <p className="break-words text-base leading-8 text-[#2b2824] transition duration-500 group-hover:text-[#171717] md:text-lg">
                  {value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
