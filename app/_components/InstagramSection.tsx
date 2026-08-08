"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerList, imageReveal } from "./animations"; // uses your existing imageReveal

const IMAGES = [
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
];

const WORDS = ["WEDDING", "PARTY", "EVENT", "LANDSCAPE"];
const TRACK = [...WORDS, ...WORDS, ...WORDS];

export default function InstagramSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="px-5 lg:px-20">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6 flex items-center justify-between sm:mb-8"
        >
          <span className="text-sm font-extrabold uppercase tracking-tight text-black sm:text-base">
            Our Instagram
          </span>
          <span className="text-sm font-extrabold uppercase tracking-tight text-black sm:text-base">
            @studix
          </span>
        </motion.div>

        {/* Image grid */}
        <motion.div
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
        >
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              variants={imageReveal}
              className="aspect-3/4 overflow-hidden"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee – unchanged */}
        <div className="mt-8 overflow-hidden sm:mt-10">
          <div className="flex w-max animate-marquee-text items-center">
            {TRACK.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="flex items-center whitespace-nowrap text-6xl font-black uppercase leading-none tracking-tight text-black sm:text-8xl md:text-9xl"
              >
                {word}
                <span className="mx-4 inline-block h-1.5 w-16 bg-black align-middle sm:mx-6 sm:h-2.5 sm:w-28" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-text {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        .animate-marquee-text {
          animation: marquee-text 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-text {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}