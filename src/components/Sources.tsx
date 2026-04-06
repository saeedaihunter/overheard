import FadeIn from "./FadeIn";

const sources = [
  "LinkedIn",
  "Reddit",
  "YouTube",
  "Instagram",
  "News Sites",
  "Blogs",
];

export default function Sources() {
  return (
    <section className="px-6 md:px-12 py-12 max-w-4xl mx-auto border-y border-[var(--color-border-subtle)]">
      <FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
            We scan
          </span>
          {sources.map((source) => (
            <span
              key={source}
              className="text-sm font-medium text-[var(--color-text-secondary)]"
            >
              {source}
            </span>
          ))}
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
            daily
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
