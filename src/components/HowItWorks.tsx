import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Drop some names",
    description:
      "Your brand + up to 3 competitors you want to keep tabs on.",
    detail: "Takes about 60 seconds.",
  },
  {
    number: "02",
    title: "We go full detective mode",
    description:
      "Every day we scan LinkedIn, Reddit, YouTube, Instagram, news sites, and competitor blogs.",
    detail: "Yes, all of them.",
  },
  {
    number: "03",
    title: "You wake up smarter",
    description:
      "One short email. Only the stuff worth knowing.",
    detail: 'No dashboards. No "analytics suite."',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
            How it works
          </span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[var(--color-text-primary)] mb-16">
          It&apos;s embarrassingly simple
        </h2>
      </FadeIn>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 120}>
            <div className="group grid grid-cols-[auto_1fr] gap-8 py-8 border-t border-[var(--color-border-subtle)]">
              <span className="font-mono text-sm text-[var(--color-accent-muted)] pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                  {step.description}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)] italic">
                  {step.detail}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
