"use client";

export default function CtaSection() {
  return (
    <section className="flex w-full items-center justify-center bg-white px-6 py-24 sm:py-32">
      <div className="flex flex-col items-center text-center">
        <div className="relative isolate inline-block">
          {/* Red accent circle sitting behind the heading's top-right */}
          <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-red-600 sm:-right-8 sm:-top-8 sm:h-48 sm:w-48 md:-right-20 md:-top-10 md:h-64 md:w-64" />

          <h2 className="relative text-4xl font-black uppercase leading-[0.95]  text-black sm:text-6xl md:text-8xl">
            Got a project?
            <br />
            Let&rsquo;s build
            <br />
            it now
          </h2>
        </div>

        <button
          type="button"
          className="mt-10 cursor-pointer bg-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-neutral-800 sm:mt-12"
        >
          Let&rsquo;s talk
        </button>
      </div>
    </section>
  );
}
