import { awards, certifications } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Awards() {
  return (
    <section className="relative overflow-hidden bg-dark-card px-6 py-28">
      <div className="absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/[0.02] blur-[100px]" />

      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Recognition
          </h2>
          <h3 className="gradient-text mb-16 text-center text-4xl font-bold sm:text-5xl">
            Awards & Certifications
          </h3>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          <AnimateOnScroll>
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.388A6.003 6.003 0 0016.27 9.728m0 0l-.518.388" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Awards</h4>
              </div>
              <div className="space-y-4">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.05)]"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-500" />
                    <div className="pl-3">
                      <h5 className="font-semibold text-white">{award.title}</h5>
                      <p className="mt-1 text-sm text-gray-500">
                        {award.org} — {award.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/20">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Certifications</h4>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-green-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                      <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
