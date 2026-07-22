"use client";

import { useState } from "react";
import { experience } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative overflow-hidden bg-dark-card px-6 py-28">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Experience
          </h2>
          <h3 className="gradient-text mb-16 text-center text-4xl font-bold sm:text-5xl">
            Professional Journey
          </h3>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-secondary/30 to-transparent sm:block" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="relative sm:pl-14">
                  <div className="timeline-dot absolute left-1.5 top-6 hidden sm:block">
                    <div
                      className={`timeline-dot-inner h-6 w-6 rounded-full border-2 transition-all duration-300 ${
                        expandedIndex === i
                          ? "scale-110 border-accent bg-accent shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                          : "border-white/20 bg-dark-card hover:border-accent/50"
                      }`}
                    >
                      {expandedIndex === i && (
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className={`glass-card w-full rounded-xl p-6 text-left ${
                      expandedIndex === i
                        ? "!border-accent/20 shadow-[0_0_30px_rgba(59,130,246,0.06)]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                        <p className="text-sm font-medium text-accent">
                          {exp.company}
                          {exp.location && (
                            <span className="text-gray-500"> — {exp.location}</span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-400">
                          {exp.period}
                        </span>
                        <svg
                          className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                            expandedIndex === i ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedIndex === i ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-white/[0.06] pt-4">
                        <ul className="space-y-2.5">
                          {exp.bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                              <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
