"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/site";

const categories = [
  "Research",
  "Data Structure and Algorithms",
  "System design",
  "Others"
] as const;

function isUsableLink(url: string) {
  return url && !url.startsWith("ADD_");
}

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Research");
  const [searchQuery, setSearchQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      if (!query) return project.category === activeCategory;

      return [
        project.title,
        project.eyebrow,
        project.description,
        project.category,
        ...project.tags
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="work"
      className="relative border-b border-[#d8d0c4] py-28 md:py-40 lg:py-48"
    >
      <div className="content-shell">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="label justify-center">Selected Work</p>
          <div className="group/search mx-auto mt-10 flex max-w-6xl flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
            <h2 className="serif-display text-balance text-[clamp(3.8rem,8vw,8.8rem)] leading-[0.88] text-[#171717] transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover/search:-translate-x-5 md:group-focus-within/search:-translate-x-5">
              Recent works.
            </h2>

            <label className="group/searchbar relative flex h-16 w-[min(82vw,28rem)] shrink-0 items-center">
              <span className="pointer-events-none absolute inset-y-0 left-0 w-full origin-left scale-x-[0.145] border border-[#b9ad9d] bg-[#f7f4ef]/78 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/searchbar:scale-x-100 group-focus-within/searchbar:scale-x-100" />
              <span className="pointer-events-none relative z-10 grid h-16 w-16 shrink-0 place-items-center text-[#171717] transition-transform duration-700 group-hover/searchbar:scale-90 group-focus-within/searchbar:scale-90">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16.5 16.5 4 4" />
                </svg>
              </span>
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search works"
                aria-label="Search works"
                className="relative z-10 h-full min-w-0 flex-1 bg-transparent pr-5 text-sm font-bold uppercase tracking-[0.24em] text-[#171717] opacity-0 outline-none transition-[opacity,transform] duration-500 placeholder:text-[#6f6a63]/70 group-hover/searchbar:translate-x-0 group-hover/searchbar:opacity-100 group-focus-within/searchbar:translate-x-0 group-focus-within/searchbar:opacity-100 md:-translate-x-3"
              />
            </label>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`focus-ring border px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] transition duration-500 ${
                    isActive
                      ? "border-[#171717] bg-[#171717] text-[#f7f4ef]"
                      : "border-[#b9ad9d] text-[#6f6a63] hover:border-[#171717] hover:text-[#171717]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="mx-auto mt-9 max-w-2xl text-balance text-lg leading-9 text-[#3d3934] md:text-xl md:leading-10">
            A selection of recent projects across research, algorithms, system
            thinking, and applied problem-solving.
          </p>
        </motion.div>

        <motion.div
          key={activeCategory}
          className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.08 }
            }
          }}
        >
          {visibleProjects.length ? visibleProjects.map((project, index) => {
            const githubHref = isUsableLink(project.githubUrl)
              ? project.githubUrl
              : "#";
            const liveHref = isUsableLink(project.liveUrl) ? project.liveUrl : "";
            const isWide = visibleProjects.length === 1 || index === 0;

            return (
              <motion.article
                key={project.title}
                className={`group ${
                  isWide ? "lg:col-span-8 lg:col-start-3" : "lg:col-span-6"
                }`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 52,
                    clipPath: "inset(24% 0% 0% 0%)"
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
              >
                <div className="relative overflow-hidden border border-[#b9ad9d] px-6 py-8 transition duration-700 group-hover:-translate-y-1 group-hover:border-[#171717] md:px-9 md:py-10">
                  <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-75 bg-[#9b7b5a] transition duration-700 group-hover:scale-x-100" />

                  <div className="flex items-center justify-between gap-5 text-[0.64rem] font-bold uppercase tracking-[0.34em] text-[#9b7b5a]">
                    <span>{project.number}</span>
                    <span className="text-right">{project.eyebrow}</span>
                  </div>

                  <h3 className="serif-display mt-8 inline-block max-w-4xl text-4xl leading-none text-[#171717] underline decoration-[#171717]/0 decoration-1 underline-offset-[0.22em] transition duration-700 group-hover:decoration-[#171717]/45 md:text-6xl">
                    {project.title}
                  </h3>

                  <p className="mt-7 max-w-3xl text-base leading-8 text-[#6f6a63] md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#b9ad9d] px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[#6f6a63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-6 text-[0.66rem] font-bold uppercase tracking-[0.3em] text-[#171717]">
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.linkLabel} for ${project.title}`}
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
          }) : (
            <motion.div
              className="border border-[#b9ad9d] px-6 py-10 text-center lg:col-span-8 lg:col-start-3"
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.3em] text-[#9b7b5a]">
                No matching work found
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
