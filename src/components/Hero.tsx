export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 max-w-4xl mx-auto">
      <div
        className="animate-fade-up"
        style={{ animationDelay: "0ms" }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--color-accent)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-dot" />
          Now monitoring 6 platforms
        </span>
      </div>

      <h1
        className="animate-fade-up font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
        style={{ animationDelay: "100ms" }}
      >
        Your competitors are posting stuff right now
        <span className="text-[var(--color-text-muted)]"> and it&apos;s hard for you to keep up with all of them.</span>
      </h1>

      <div
        className="animate-fade-up mt-10 max-w-xl"
        style={{ animationDelay: "250ms" }}
      >
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
          You could spend every morning doom-scrolling LinkedIn, Reddit, YouTube,
          Instagram, and random blogs trying to keep up.
        </p>
        <p className="mt-3 text-lg md:text-xl text-[var(--color-text-primary)] font-medium">
          Or you could just... not.
        </p>
      </div>

      <div
        className="animate-fade-up mt-10 flex items-center gap-6"
        style={{ animationDelay: "400ms" }}
      >
        <a
          href="#signup"
          className="group relative inline-flex items-center gap-2 bg-[var(--color-text-primary)] text-[var(--color-surface)] font-bold px-8 py-4 rounded-lg text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200"
        >
          Do the thing
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
        <span className="text-sm text-[var(--color-text-muted)]">
          Free for the first 100 users.
        </span>
      </div>
    </section>
  );
}
