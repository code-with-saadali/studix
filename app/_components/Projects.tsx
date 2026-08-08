"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerList } from "./animations"; // adjust import path if needed

const projects = [
  {
    id: "01",
    title: "Fashion Portrait",
    category: "Photography",
    image: "/1.avif",
    height: "h-[420px]",
  },
  {
    id: "02",
    title: "Wedding Story",
    category: "Wedding",
    image: "/2.avif",
    height: "h-[320px]",
  },
  {
    id: "03",
    title: "Editorial Shoot",
    category: "Fashion",
    image: "/3.avif",
    height: "h-[420px]",
  },
  {
    id: "04",
    title: "Modern Interior",
    category: "Interior",
    image: "/4.avif",
    height: "h-[320px]",
  },
];

export default function Projects() {
  return (
    <section className="overflow-hidden bg-[#101010] py-28 text-white">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
        {/* ================= Heading ================= */}
        <div className="relative flex items-start justify-between">
          {/* Left Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Red Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute -left-32 -top-8 h-52 w-52 md:h-70 md:w-70 rounded-full bg-[#E30000]"
            />

            {/* Heading */}
            <h2 className="relative z-10 md:ml-6 text-[55px] text-center md:text-start font-black uppercase leading-[0.88] tracking-tighter text-white md:text-[110px] lg:text-[125px]">
              Designed Projects,
              <br className="hidden md:block"/>
              Real Impact
            </h2>
          </motion.div>

          {/* Right Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="md:inline-flex rounded-full hidden bg-[#2B2B2B] px-6 py-3 text-[15px] font-bold uppercase tracking-wide text-white">
              Projects
            </span>
          </motion.div>
        </div>

        {/* Space */}
        <div className="h-24" />

        {/* ================= Projects Grid ================= */}
        <motion.div
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            delayChildren: 0.15,
            staggerChildren: 0.12,
          }}
          className="grid grid-cols-1 gap-x-8 cursor-pointer gap-y-16 md:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp} className="group">
              {/* Number */}
              <span className="mb-5 block text-start text-[44px] font-black tracking-tighter">
                ({project.id})
              </span>

              {/* Image */}
              <div className={`relative overflow-hidden ${project.height}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={project.id === "01"}
                  sizes="(max-width:768px)100vw,(max-width:1024px)50vw,25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-110"
                />
              </div>

              {/* Permanent Bottom Content */}
              <div className="mt-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/55">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-[30px] font-black uppercase leading-[0.95] tracking-[-0.04em] lg:text-[34px]">
                    {project.title}
                  </h3>
                </div>

                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-white hover:text-black">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
