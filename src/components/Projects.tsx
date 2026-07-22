"use client";

import { useState, useEffect } from "react";
import { projects, type Project } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 p-4 backdrop-blur-xl"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="animate-slide-up max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.08] bg-dark-card shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-dark-card via-dark-lighter to-dark-card p-6 sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                {project.category}
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tools.split(", ").map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-light"
              >
                {tool}
              </span>
            ))}
          </div>

          {project.problem && (
            <div className="mb-6">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
                <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                Problem
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">{project.problem}</p>
            </div>
          )}

          {project.methodology && (
            <div className="mb-6">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Methodology
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">{project.methodology}</p>
            </div>
          )}

          {project.details && project.details.length > 0 && (
            <div className="mb-6">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Key Details
              </h4>
              <ul className="space-y-2.5">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10 text-[10px] font-bold text-accent">
                      {i + 1}
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.result && (
            <div className="mb-6 rounded-xl border border-green-500/15 bg-green-500/5 p-4">
              <h4 className="mb-1 flex items-center gap-2 text-sm font-semibold text-green-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Result / Impact
              </h4>
              <p className="text-sm text-green-300/80">{project.result}</p>
            </div>
          )}

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {project.publication && (
              <a
                href={project.publication}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-accent-light"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                View Publication
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const heroProjects = projects.filter((p) => p.hero);
  const otherProjects = projects.filter((p) => !p.hero);

  return (
    <section id="projects" className="relative overflow-hidden bg-dark px-6 py-28">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-secondary/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Projects
          </h2>
          <h3 className="gradient-text mb-6 text-center text-4xl font-bold sm:text-5xl">
            Featured Work
          </h3>
          <p className="mx-auto mb-16 max-w-lg text-center text-gray-500">
            Click any project card to see the full breakdown — problem, methodology, and impact.
          </p>
        </AnimateOnScroll>

        {/* Featured cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {heroProjects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 120}>
              <button
                onClick={() => setSelected(project)}
                className="glow-card project-card group h-full w-full p-6 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-light">
                      Featured
                    </span>
                    <svg className="h-5 w-5 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  <span className="mb-2 inline-block rounded-md bg-white/[0.04] px-2.5 py-0.5 text-xs text-gray-500">
                    {project.category}
                  </span>

                  <h4 className="mb-3 text-lg font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="mb-5 text-sm leading-relaxed text-gray-500">
                    {project.summary.length > 120
                      ? project.summary.substring(0, 120) + "..."
                      : project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.split(", ").slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-xs text-gray-500"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Other cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 80}>
              <button
                onClick={() => setSelected(project)}
                className="glass-card project-card group h-full w-full rounded-xl p-5 text-left"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-accent/10 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                  <svg className="h-4 w-4 text-gray-600 transition-all group-hover:translate-x-0.5 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                <h4 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-accent-light">
                  {project.title}
                </h4>

                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  {project.summary.length > 100
                    ? project.summary.substring(0, 100) + "..."
                    : project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tools.split(", ").slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/[0.04] bg-white/[0.02] px-2 py-0.5 text-xs text-gray-600 transition-colors group-hover:border-accent/10 group-hover:text-accent/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
