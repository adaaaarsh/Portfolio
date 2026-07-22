"use client";

import { useState } from "react";
import { skills } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  {
    key: "methodologies" as const,
    title: "Methodologies",
    gradient: "from-accent to-secondary",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    key: "software" as const,
    title: "Software & Tools",
    gradient: "from-accent-light to-accent",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    key: "standards" as const,
    title: "Standards & Compliance",
    gradient: "from-green-400 to-emerald-500",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    key: "core" as const,
    title: "Core Competencies",
    gradient: "from-secondary to-secondary-light",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative overflow-hidden bg-dark-card px-6 py-28">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Skills
          </h2>
          <h3 className="gradient-text mb-16 text-center text-4xl font-bold sm:text-5xl">
            Technical Expertise
          </h3>
        </AnimateOnScroll>

        {/* Tab navigation */}
        <AnimateOnScroll delay={100}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg shadow-accent/20`
                    : "border border-white/[0.06] bg-white/[0.03] text-gray-400 hover:border-white/10 hover:text-white"
                }`}
              >
                {cat.icon}
                <span className="hidden sm:inline">{cat.title}</span>
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Active tab content */}
        <AnimateOnScroll delay={150}>
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${categories[activeTab].gradient} text-white`}>
                {categories[activeTab].icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {categories[activeTab].title}
                </h4>
                <p className="text-sm text-gray-500">
                  {skills[categories[activeTab].key].length} skills
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills[categories[activeTab].key].map((skill) => (
                <span
                  key={skill}
                  className="skill-tag cursor-default rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Skills count grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.key} delay={200 + i * 50}>
              <button
                onClick={() => setActiveTab(i)}
                className={`glass-card rounded-xl p-4 text-center ${
                  activeTab === i ? "!border-accent/20 shadow-[0_0_20px_rgba(59,130,246,0.06)]" : ""
                }`}
              >
                <div className={`bg-gradient-to-r ${cat.gradient} bg-clip-text text-3xl font-bold text-transparent`}>
                  {skills[cat.key].length}
                </div>
                <div className="mt-1 text-xs text-gray-500">{cat.title}</div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
