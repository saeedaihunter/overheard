import FadeIn from "./FadeIn";

const digestItems = [
  {
    tag: "LINKEDIN",
    tagColor: "text-blue-400",
    highlight: "Competitor A",
    text: "just launched a new pricing page. 47 reactions and climbing.",
    action: "Might want to take a look.",
  },
  {
    tag: "REDDIT",
    tagColor: "text-orange-400",
    highlight: "r/startups",
    text: "Someone asked if YOUR product supports Slack integration.",
    action: "You should probably answer that.",
  },
  {
    tag: "BLOG",
    tagColor: "text-purple-400",
    highlight: "Competitor B",
    text: 'published "Why we\'re pivoting to enterprise."',
    action: "Interesting move.",
  },
  {
    tag: "YOUTUBE",
    tagColor: "text-red-400",
    highlight: "Trending",
    text: '"AI-powered onboarding" is having a moment.',
    action: "4 videos this week in your space.",
  },
];

export default function SampleDigest() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
      <FadeIn>
        <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)] mb-4 block">
          Preview
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[var(--color-text-primary)] mb-3">
          Your morning briefing
        </h2>
        <p className="text-[var(--color-text-muted)] mb-10 text-lg">
          While your competitors are still sleeping.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {/* Email header */}
          <div className="px-6 md:px-8 py-5 border-b border-[var(--color-border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-xs font-bold text-[var(--color-surface)]">
                O
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Overheard
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  digest@overheard.so
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse-dot" aria-hidden="true" />
              <span className="text-xs font-mono text-[var(--color-text-muted)]">
                Today, 7:00 AM
              </span>
            </div>
          </div>

          {/* Digest items */}
          <div className="divide-y divide-[var(--color-border-subtle)]">
            {digestItems.map((item, i) => (
              <div key={i} className="px-6 md:px-8 py-5 hover:bg-[var(--color-surface-overlay)] transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${item.tagColor} shrink-0 pt-1`}>
                    {item.tag}
                  </span>
                  <div>
                    <p className="text-[var(--color-text-primary)] leading-relaxed">
                      <span className="font-semibold">{item.highlight}</span>{" "}
                      {item.text}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-amber)] font-medium">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Email footer */}
          <div className="px-6 md:px-8 py-4 bg-[var(--color-surface-overlay)] border-t border-[var(--color-border-subtle)]">
            <p className="text-xs text-[var(--color-text-muted)] font-mono">
              4 updates across 6 sources — scanned at 6:45 AM
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
