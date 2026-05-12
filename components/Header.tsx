"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { smoothScrollTo } from "@/lib/animations";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-[rgba(216,208,196,0.86)] bg-[#f7f4ef]/88 py-4 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-7"
      }`}
    >
      <nav className="page-shell flex items-center justify-between gap-6 text-[0.66rem] font-bold uppercase tracking-[0.34em] text-[#171717]">
        <a
          href="#main-content"
          className="focus-ring relative inline-flex items-center overflow-hidden pb-1"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="tracking-[0.28em]">{site.name}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group focus-ring relative py-1 text-[#6f6a63] transition-colors duration-500 hover:text-[#171717]"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollTo(item.href);
              }}
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[#171717] transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="focus-ring hidden border-b border-[#171717]/30 pb-1 text-[#171717] transition-colors duration-500 hover:text-[#9b7b5a] sm:inline-flex"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
