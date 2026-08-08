"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInScale,
  slideUpTitle,
  staggerList,
  slideUpItem,
  slideFromLeft,
  slideDown,
  slideUpStrip,
} from "./animations";

const focusList = [
  { label: "Bold Look", index: "01" },
  { label: "Couple Moment", index: "02" },
  { label: "Magazine Portrait", index: "03" },
  { label: "Minimal Set", index: "04" },
  { label: "Runox Shoe", index: "05" },
];

export default function Hero() {
  return (
    <section className="relative h-[55vh] md:h-[90vh] flex flex-col overflow-hidden bg-[#101010] text-white px-4 sm:px-8">
      <div className="relative min-h-0 flex-1 overflow-hidden">
        {/* 1. Background image – you can change duration/delay here */}
        <motion.div
          className="absolute inset-y-0 left-0 right-0 overflow-hidden"
          variants={fadeInScale}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 0.0 }} 
        >
          <Image
            src="/hero-img.avif"
            alt="Studio editorial portrait"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover md:object-[60%_center]"
          />
        </motion.div>

        {/* 2. Giant title – slide up. Centered on mobile, pinned to bottom from sm up */}
        <motion.h1
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 tracking-tighter select-none text-center font-black uppercase leading-none m-0
                     text-6xl sm:top-auto sm:bottom-5 sm:translate-y-0 sm:text-8xl md:text-[14rem] lg:text-[18rem] xl:text-[23rem]"
          variants={slideUpTitle}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.4 }} 
        >
          Studix
        </motion.h1>

        {/* 3. List – stagger + each item slides up. Hidden on mobile to match the reference */}
        <motion.ul
          className="absolute left-4 md:left-10 top-10 hidden flex-col gap-2 sm:flex sm:gap-3"
          variants={staggerList}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.8, staggerChildren: 0.1 }}
        >
          {focusList.map((item) => (
            <motion.li
              key={item.index}
              className="flex items-baseline gap-1 text-base font-semibold uppercase sm:text-lg leading-tight"
              variants={slideUpItem}
              transition={{ duration: 0.7, delay: 0 }} 
            >
              <span className="relative inline-block cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full">
                ({item.label})
              </span>
              <sup className="text-[8px] text-gray-200 sm:text-sm">
                {item.index}
              </sup>
            </motion.li>
          ))}
        </motion.ul>

        {/* 4. Red circle – slide from left */}
        <motion.div
          className="absolute h-20 w-20 rounded-full bg-[#ED2B2B] sm:h-48 sm:w-48 top-1/2 left-[-8%]"
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 1.3 }} 
        />

        {/* 5. Preview card – slide down from top */}
        <motion.div
          className="group absolute right-10 top-10 cursor-pointer hidden h-40 w-52 overflow-hidden sm:block md:h-44 md:w-56"
          variants={slideDown}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Image
            src="/bold-img.avif"
            alt="Bold look preview"
            fill
            sizes="(max-width: 640px) 0vw, 224px"
            quality={85}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <span className="absolute left-1/3 top-1/2 text-sm font-bold uppercase">
            Bold Look
          </span>
        </motion.div>

        {/* 6. Timer (static) – hidden on mobile to match the reference */}
        <div className="absolute bottom-4 right-10 hidden text-[10px] font-bold sm:block sm:text-2xl md:text-4xl">
          (01&apos;26)
        </div>
      </div>

      {/* Bottom strip – slide up (first). Only the center line shows on mobile */}
      <motion.div
        className="shrink-0 flex flex-col items-center gap-1.5 border-t border-white/10 bg-[#101010] px-4 py-3 text-[10px] font-bold uppercase tracking-wide sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-8 sm:py-4 sm:text-sm"
        variants={slideUpStrip}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.0 }}
      >
        <span className="hidden sm:inline">Worldwide</span>
        <span className="text-white/70">Based in California, USA</span>
        <span className="hidden sm:inline">In-house Team</span>
      </motion.div>
    </section>
  );
}