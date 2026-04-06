const steps = [
  {
    number: "1",
    title: "Drop some names",
    description:
      "Your brand + up to 3 competitors you want to keep tabs on.",
  },
  {
    number: "2",
    title: "We go full detective mode",
    description:
      "Every day we scan LinkedIn, Reddit, YouTube, Instagram, news sites, and competitor blogs. Yes, all of them.",
  },
  {
    number: "3",
    title: "You wake up smarter",
    description:
      'One short email. Only the stuff worth knowing. No noise, no dashboards, no "analytics suite."',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        How this works{" "}
        <span className="text-zinc-500">(it&apos;s embarrassingly simple)</span>
      </h2>
      <div className="space-y-10">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-6">
            <span className="text-3xl font-bold text-zinc-600 shrink-0">
              {step.number}.
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-zinc-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
