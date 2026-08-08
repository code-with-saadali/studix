"use client";

const PARTNERS = ["PSUM", "LOGO IPSUM", "SPIRAL", "HOGO", "WAVE", "NEXUS", "VERA","ORBIT",];


const TRACK = [...PARTNERS, ...PARTNERS];

export default function Marquee() {
  return (
    <section className="w-full bg-[#101010] py-16 sm:py-20">
      <h2 className="mb-12 text-center text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-white to-white sm:mb-16 sm:text-2xl">
        150+ ASSOCIATED PARTNERS
      </h2>

      <div
        className="group relative overflow-hidden mt-20"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused] sm:gap-8">
          {TRACK.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-56 w-56 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:border-white/25 sm:h-64 sm:w-64"
            >
              <span className="px-6 text-center text-xl font-bold tracking-tight text-white sm:text-2xl">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}