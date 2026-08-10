"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/app/_components/animations";

export default function CtaSection() {
  return (
    <section className="flex w-full items-center justify-center bg-white px-6 py-24 sm:py-32">
      <div className="flex flex-col items-center text-center">
        <div className="relative isolate inline-block">
          {/* Animated Red accent circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1], // bounce-like ease
            }}
            className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-red-600 sm:-right-8 sm:-top-8 sm:h-48 sm:w-48 md:-right-20 md:-top-10 md:h-64 md:w-64"
          />

          {/* Heading with fadeUp */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative text-4xl font-black uppercase leading-[0.95] text-black sm:text-6xl md:text-8xl"
          >
            Got a project?
            <br />
            Let&rsquo;s build
            <br />
            it now
          </motion.h2>
        </div>

        {/* Button with fadeUp + hover effect */}
        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.04, backgroundColor: "#1a1a1a" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25 }}
          type="button"
          className="mt-10 cursor-pointer bg-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-neutral-800 sm:mt-12"
        >
          Let&rsquo;s talk
        </motion.button>
      </div>
    </section>
  );
}