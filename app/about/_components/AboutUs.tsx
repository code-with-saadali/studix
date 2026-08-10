"use client";

import { fadeUp, imageReveal } from "@/app/_components/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { id: 1, value: "300+", label: "Completed Projects" },
  { id: 2, value: "07", label: "Years of Experience" },
  { id: 3, value: "5.00", label: "12,000+ Client Ratings" },
];

export default function AboutUs() {
  return (
    <section className="bg-white py-28 text-[#111]">
      <div className="px-5 lg:px-20">
        {/* Grid with 2 explicit rows */}
        <div className="grid grid-cols-1 gap-x-24 gap-y-10 lg:grid-cols-[420px_1fr] lg:gap-y-14">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-[#EDEDED] px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-[#111]">
              About Us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[48px] font-black uppercase leading-[0.95] md:text-[64px] lg:text-[82px]"
          >
            Skilled Team
            <br />
            Crafting Visuals
            <br />
            For Every Industry
          </motion.h2>

          {/* Image with reveal animation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-110 w-full max-w-97.5 overflow-visible"
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
              className="absolute -left-14 -top-16 h-52 w-52 rounded-full bg-[#E30000]"
            />

            {/* Image container with reveal */}
            <motion.div
              variants={imageReveal}
              className="relative h-full w-full overflow-hidden bg-[#8C8C8C]"
            >
              <Image
                src="/3.avif"
                alt="Team member"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="border-t border-[#E3E3E3]">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center justify-between gap-6 border-b border-[#E3E3E3] py-8"
              >
                <span className="text-[42px] font-black md:text-[52px]">
                  {stat.value}
                </span>
                <span className="text-[15px] text-[#555]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}