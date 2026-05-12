"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/site";

export default function Timeline() {
  return (
    <section
      id="journey"
      className="relative border-b border-[#d8d0c4] py-28 md:py-40 lg:py-48"
    >
      <div className="content-shell">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-16% 0px" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-14 lg:grid-cols-[0.62fr_1fr]"
        >
          <div>
            <p className="mb-9 text-[0.68rem] font-bold uppercase tracking-[0.42em] text-[#6f6a63]">
              Journey
            </p>
            <h2 className="serif-display text-balance text-[clamp(3.8rem,8vw,8.6rem)] leading-[0.88]">
              A quiet line forward.
            </h2>
          </div>

          <div className="border-t border-[#d8d0c4]">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid gap-6 border-b border-[#d8d0c4] py-8 sm:grid-cols-[0.22fr_1fr]"
              >
                <p className="serif-display text-5xl leading-none text-[#9b7b5a]">
                  {item.year}
                </p>
                <p className="max-w-xl text-lg leading-8 text-[#3d3934]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
