import { publication } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Publication() {
  return (
    <section id="publication" className="relative overflow-hidden bg-dark px-6 py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-secondary/[0.03]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/3 translate-x-1/3 rounded-full bg-accent/[0.05] blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] translate-y-1/3 -translate-x-1/3 rounded-full bg-secondary/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">
        <AnimateOnScroll>
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Publication
          </h2>
          <h3 className="gradient-text mb-12 text-center text-4xl font-bold sm:text-5xl">
            Published Research
          </h3>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="glow-card rounded-2xl p-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-secondary/[0.03]" />
            <div className="relative">
              <div className="mb-6 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20">
                  <svg
                    className="h-7 w-7 text-accent-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.472.89 6.042 2.36M12 6.042a8.967 8.967 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6.042 2.36M12 6.042V18.36"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold leading-snug text-white">
                    {publication.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">
                    {publication.authors}
                  </p>
                </div>
              </div>

              <div className="ml-[4.75rem] space-y-2 border-t border-white/[0.06] pt-5">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-400">Journal:</span>{" "}
                  {publication.journal}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-400">Volume:</span>{" "}
                  {publication.volume}
                </p>
              </div>

              <div className="ml-[4.75rem] mt-6">
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <svg className="h-4 w-4 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  View on DOI
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
