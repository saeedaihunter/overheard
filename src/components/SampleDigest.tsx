import FadeIn from "./FadeIn";

const digestItems = [
  {
    highlight: "Competitor A",
    text: "just launched a new pricing page. LinkedIn is eating it up (47 reactions). Might want to take a look.",
  },
  {
    highlight: "Someone on r/startups",
    text: "asked if YOUR product supports Slack. You should probably answer that.",
  },
  {
    highlight: "Competitor B",
    text: 'dropped a blog post: "Why we\'re pivoting to enterprise." Interesting move.',
  },
  {
    highlight: "Meanwhile in SaaS land",
    text: '"AI-powered onboarding" is having a moment on YouTube.',
  },
];

export default function SampleDigest() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Here&apos;s what you&apos;d get every morning
        </h2>
        <p className="text-zinc-500 mb-8">
          (while your competitors are still sleeping)
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden="true" />
            <span className="text-sm text-zinc-500 font-mono">
              Your daily digest — April 3, 2026
            </span>
          </div>
          <div className="space-y-4">
            {digestItems.map((item, i) => (
              <p key={i} className="text-zinc-300 leading-relaxed">
                <span className="font-bold text-white">{item.highlight}</span>{" "}
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
