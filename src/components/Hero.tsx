"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { personal } from "@/data/portfolio";

const titles = [
  "Industrial Engineer",
  "Manufacturing Engineer",
  "Process Engineer",
  "Six Sigma Green Belt",
];

function TypingEffect() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <span className="gradient-text font-bold">
      {titles[titleIndex].substring(0, charIndex)}
      <span className="ml-0.5 inline-block h-8 w-[3px] animate-pulse rounded-full bg-accent align-middle shadow-[0_0_12px_rgba(59,130,246,0.8),0_0_24px_rgba(59,130,246,0.4)] sm:h-12" />
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(59, 130, 246, 0.12), transparent 40%)`;
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-morph rounded-full bg-accent/[0.07] blur-[120px]" />
      <div
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] animate-morph rounded-full bg-secondary/[0.07] blur-[120px]"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-accent/[0.04] blur-[100px]" />

      {/* Mouse-following glow */}
      <div ref={glowRef} className="absolute inset-0 transition-[background] duration-300" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute left-[10%] top-[20%] h-20 w-20 animate-float rounded-full border border-accent/10 shadow-[0_0_30px_rgba(59,130,246,0.05)]" />
      <div className="absolute right-[15%] top-[25%] h-14 w-14 animate-float-delayed rounded-lg border border-secondary/15 rotate-45" />
      <div className="absolute bottom-[25%] left-[20%] h-16 w-16 animate-float-delayed rounded-full bg-accent/[0.04]" />
      <div className="absolute bottom-[20%] right-[10%] h-24 w-24 animate-float rounded-lg border border-white/[0.04] rotate-12" />
      <div className="absolute left-[55%] top-[12%] h-10 w-10 animate-spin-slow rounded-full border border-secondary/10" />
      <div className="absolute left-[5%] top-[60%] h-2 w-2 animate-pulse-glow rounded-full bg-accent/40" />
      <div className="absolute right-[25%] top-[15%] h-1.5 w-1.5 animate-pulse-glow rounded-full bg-secondary/50" style={{ animationDelay: "-1s" }} />
      <div className="absolute bottom-[35%] left-[40%] h-2 w-2 animate-pulse-glow rounded-full bg-accent-light/30" style={{ animationDelay: "-2s" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Open to Opportunities
        </div>

        {/* Name */}
        <h1
          className={`mb-6 text-5xl font-extrabold tracking-tight text-white transition-all duration-1000 delay-200 sm:text-6xl md:text-8xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {personal.name.split(" ")[0]}
          <span className="gradient-text"> {personal.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        {/* Typing effect */}
        <div
          className={`mb-8 h-12 text-xl font-medium transition-all duration-1000 delay-400 sm:h-14 sm:text-2xl md:text-3xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <TypingEffect />
        </div>

        {/* Description */}
        <p
          className={`mx-auto mb-12 max-w-2xl text-base leading-relaxed text-gray-400 transition-all duration-1000 delay-500 sm:text-lg ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          MS in Industrial Engineering from UTA. Driving measurable improvements
          in manufacturing through Lean Six Sigma, simulation modeling, and
          data-driven decision-making.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-700 sm:flex-row ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href={personal.resumeFile}
            download
            className="btn-gradient group inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white"
          >
            View Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
            Scroll
          </span>
          <div className="h-10 w-5 rounded-full border border-white/10 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-accent/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
