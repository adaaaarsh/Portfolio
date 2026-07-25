"use client";

import { useState, useEffect } from "react";
import { navLinks, personal } from "@/data/portfolio";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as Element[];
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(navLinks[i].href);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold text-white"
        >
          Adarsh<span className="gradient-text-static">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                activeSection === link.href
                  ? "text-accent-light"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-secondary" />
              )}
            </a>
          ))}
          <a
            href={personal.resumeFile}
            download
            className="btn-gradient ml-4 rounded-lg px-5 py-2 text-sm font-semibold text-white"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45 bg-white" : "bg-white"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "bg-white"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45 bg-white" : "bg-white"
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark/95 backdrop-blur-2xl md:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="animate-slide-up text-2xl font-medium text-gray-300 transition-colors hover:text-white"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeFile}
            className="btn-gradient animate-slide-up rounded-xl px-10 py-3.5 text-lg font-semibold text-white"
            style={{ animationDelay: "360ms" }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
