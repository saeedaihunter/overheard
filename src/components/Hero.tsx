export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        Your competitors are posting stuff right now and you have no idea.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
        You could spend every morning doom-scrolling LinkedIn, Reddit, YouTube,
        Instagram, and random blogs trying to keep up. Or you could just... not.
      </p>
      <p className="mt-4 text-lg md:text-xl text-zinc-300">
        We do the stalking. You get one email. That&apos;s it.
      </p>
      <p className="mt-4 text-sm text-zinc-500">
        Early access is free. Forever. We&apos;re not even kidding.
      </p>
      <a
        href="#signup"
        className="mt-8 inline-block w-fit bg-white text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-zinc-200 transition-colors"
      >
        Do the thing
      </a>
    </section>
  );
}
