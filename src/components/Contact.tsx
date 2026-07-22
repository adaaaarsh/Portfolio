"use client";

import { personal } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    gradient: "from-accent to-accent-light",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[^\d+]/g, "")}`,
    gradient: "from-green-400 to-emerald-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adarsh-lal-anilal",
    href: personal.linkedin,
    gradient: "from-blue-500 to-blue-600",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: personal.location,
    href: null,
    gradient: "from-secondary to-secondary-light",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark px-6 py-28">
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Contact
          </h2>
          <h3 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
            Let&apos;s Connect
          </h3>
          <p className="mx-auto mb-14 max-w-lg text-center text-gray-500">
            I&apos;m actively seeking opportunities in Industrial Engineering,
            Manufacturing Engineering, and Process Engineering. Let&apos;s talk.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, i) => {
            const card = (
              <AnimateOnScroll key={item.label} delay={i * 80}>
                <div className="glass-card group flex items-center gap-5 rounded-xl p-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-200 transition-colors group-hover:text-accent-light">
                      {item.value}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {card}
              </a>
            ) : (
              <div key={item.label}>{card}</div>
            );
          })}
        </div>

        <AnimateOnScroll delay={350}>
          <div className="mt-14 text-center">
            <a
              href={`mailto:${personal.email}`}
              className="btn-gradient group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-10 py-4 text-base font-semibold text-white"
            >
              <span className="absolute inset-0 animate-shimmer" />
              <svg className="relative h-5 w-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="relative">Send Me an Email</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
