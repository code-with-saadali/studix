"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { fadeUp, imageReveal } from "@/app/_components/animations";

export default function CEOQuote() {
  return (
    <section className="bg-white py-24 text-[#111]">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_320px]">
          {/* Left: Quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Quote className="h-10 w-10 fill-[#111] text-[#111]" strokeWidth={0} />

            <h3 className="mt-8 max-w-180 text-[36px] font-medium leading-[1.15] tracking-[-0.02em] md:text-[44px] lg:text-[46px]">
              As CEO, I believe photography should create emotion, trust, and
              lasting brand value.
            </h3>

            <p className="mt-6 text-[16px] text-[#555]">
              Fedric Lexer, CEO Studix
            </p>
          </motion.div>

          {/* Right: Image with reveal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative aspect-square w-full md:max-w-[320px] justify-self-end overflow-hidden"
          >
            <motion.div
              variants={imageReveal}
              className="relative h-full w-full"
            >
              <Image
                src="/1.avif"
                alt="Fedric Lexer, CEO Studix"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}