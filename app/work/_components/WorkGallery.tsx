"use client";

import { fadeUp, imageReveal } from "@/app/_components/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    index: "(01)",
    tag: "MODEL",
    title: "Bold Look",
    description: "Confident fashion portrait with bold styling and modern attitude.",
    year: "(2026)",
    image:
      "https://images.unsplash.com/photo-1669575903350-9a349b411810?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    index: "(02)",
    tag: "WEDDING",
    title: "Couple Moment",
    description: "Romantic wedding couple embracing in golden sunset field.",
    year: "(2026)",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    index: "(03)",
    tag: "MODEL",
    title: "Magazine Portrait",
    description: "Editorial fashion portrait with dramatic lighting and luxury styling.",
    year: "(2026)",
    image:
      "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    index: "(04)",
    tag: "STUDIO",
    title: "Studio Session",
    description: "Clean studio portrait with soft light and refined, minimal styling.",
    year: "(2026)",
    image:
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WorkGallery() {
  return (
    <section className="bg-white py-28 text-[#111]">
      <div className="px-5 lg:px-20">
        {/* ================= Header ================= */}
        <div className="flex items-center justify-between">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex items-center"
          >
            {/* Red Circle – overlaps the first letter of "Work Gallery" */}
            <span className="absolute -left-8 h-20 w-20 rounded-full bg-[#E30000] md:-left-12 md:h-28 md:w-28" />

            {/* Heading */}
            <h2 className="relative z-10 text-[46px] font-black uppercase md:text-[86px]">
              Work Gallery
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-[#EDEDED] px-6 py-2.5 text-[14px] font-bold uppercase tracking-wide text-[#111]">
              Projects
            </span>
          </motion.div>
        </div>

        {/* Top divider */}
        <div className="mt-10 border-t border-[#111]" />

        {/* ================= Project Rows ================= */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 items-center gap-8 border-b border-[#111] py-12 lg:grid-cols-[1fr_520px]"
          >
            {/* Left: index + title/description/year */}
            <div className="flex h-full flex-col justify-between py-2">
              <span className="text-[16px] text-[#111]">{project.index}</span>

              <div>
                <h3 className="text-[22px] font-medium uppercase md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-[320px] font-inter text-[16px] leading-normal text-[#777]">
                  {project.description}
                </p>
                {/* span is inline by default — padding-top/bottom on inline
                    elements does not affect the surrounding line box, so it
                    was invisible. Made it block so pt-20 actually pushes it
                    down. */}
                <span className="block pt-20 text-lg text-[#999]">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Right: image with reveal animation */}
            <motion.div
              variants={imageReveal}
              className="relative h-130 w-full max-w-130 justify-self-end overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <span className="absolute right-4 top-4 rounded-full border border-white/70 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-white">
                {project.tag}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}