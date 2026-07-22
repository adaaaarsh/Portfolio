"use client";

import { personal, education, stats } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";
import AnimatedCounter from "./AnimatedCounter";

const icons: Record<string, React.ReactNode> = {
  chart: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  trending: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  doc: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  factory: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-dark px-6 py-28">
      {/* Decorative blurs */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] translate-y-1/2 -translate-x-1/2 rounded-full bg-secondary/[0.03] blur-[100px]" />

      <div className="section-glow mx-auto mb-28 max-w-4xl" />

      <div className="relative mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            About Me
          </h2>
          <h3 className="gradient-text mb-16 text-center text-4xl font-bold sm:text-5xl">
            Background & Education
          </h3>
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <AnimateOnScroll>
              <div className="mb-8 flex items-center gap-5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/30 blur-sm" />
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="relative h-24 w-24 rounded-2xl object-cover object-top"
                  />
                  <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 ring-4 ring-dark">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{personal.name}</h4>
                  <p className="text-sm font-medium text-accent">{personal.suffix} Certified</p>
                  <p className="text-sm text-gray-500">{personal.location}</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="mb-10 text-base leading-relaxed text-gray-400">
                {personal.bio}
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={150 + i * 80}>
                  <div className="glass-card group rounded-xl p-4 text-center">
                    <div className="relative">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        {icons[stat.icon]}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimateOnScroll delay={150}>
              <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="glass-card group relative overflow-hidden rounded-xl p-5"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-secondary transition-all group-hover:w-1.5 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]" />
                    <div className="pl-4">
                      <div className="mb-1 text-sm font-semibold text-white">
                        {edu.degree}
                      </div>
                      <div className="mb-1 text-sm font-medium text-accent-light">
                        {edu.school}
                      </div>
                      <div className="mb-3 text-xs text-gray-500">
                        {edu.location} | {edu.period}
                      </div>
                      <div className="text-xs leading-relaxed text-gray-500">
                        <span className="font-medium text-gray-400">Key Coursework: </span>
                        {edu.coursework}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
