"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Aperture,
  Video,
  House,
  ArrowUpRight,
} from "lucide-react";
import { fadeUp, staggerList } from "./animations"; // adjust import path

const services = [
  {
    number: "01",
    title: "Photography",
    description:
      "Professional photography for brands, products and commercial campaigns.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Portraits",
    description:
      "Creative portrait photography with professional lighting and styling.",
    icon: Aperture,
  },
  {
    number: "03",
    title: "Videography",
    description:
      "High-quality cinematic videos for businesses and social media.",
    icon: Video,
  },
  {
    number: "04",
    title: "Interior Shots",
    description:
      "Modern interior photography for homes, offices and architecture.",
    icon: House,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] py-28">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
        {/* ================= Heading ================= */}
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-flex rounded-full bg-[#ECECEC] px-5 py-2 text-[15px] font-semibold uppercase tracking-wide text-[#111]">
              Services
            </span>
          </motion.div>

          {/* Right Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative ml-auto max-w-230"
          >
            {/* Red Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.15,
              }}
              className="absolute right-0 top-1/2 h-55 w-55 -translate-y-1/2 rounded-full bg-[#E40000] lg:h-60 lg:w-60"
            />

            {/* Heading */}
            <h2 className="relative z-10 text-center md:text-right text-[56px] font-black uppercase leading-[0.88] tracking-tighter text-[#111] md:text-[82px]">
              Offering A Wide
              <br className="hidden md:block"/>
              Range Of Services
            </h2>
          </motion.div>
        </div>

        {/* Space */}
        <div className="h-24" />

        {/* ================= Services Grid ================= */}
        <motion.div
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delayChildren: 0.2, staggerChildren: 0.1 }}
          className="grid grid-cols-1 border border-[#E6E6E6] lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={fadeUp}
               
                className="group relative flex h-117.5 cursor-pointer overflow-hidden border-b border-[#E6E6E6] bg-[#F8F8F8] p-8 transition-all duration-500 hover:bg-white lg:border-b-0 lg:border-r last:lg:border-r-0"
              >
                {/* Number */}
                <span className="absolute left-8 top-8 text-[38px] font-bold leading-none tracking-tighter text-[#111]">
                  {service.number}
                </span>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    strokeWidth={1.5}
                    className="h-28 w-28 text-[#111] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-3"
                  />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <h3 className="text-[28px] font-black uppercase tracking-[-0.03em] text-[#111]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-inter leading-none text-[#666] opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="text-sm font-semibold uppercase">
                      Explore
                    </span>
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}