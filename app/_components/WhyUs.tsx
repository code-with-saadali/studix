"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const features = [
  {
    number: "01",
    title: "Award Winning",
    description: "146+ awards celebrating excellence across diverse fields",
    image: "/1.avif",
  },
  {
    number: "02",
    title: "Pro Expert",
    description:
      "Over 200 expert members ensuring trusted, high-quality service",
    image: "/2.avif",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description:
      "Creative projects delivered quickly without compromising quality",
    image: "/3.avif",
  },
];

export default function WhyUs() {
  return (
    <section className="overflow-hidden bg-[#F8F8F8] py-28 lg:py-36">
      <div className="mx-auto max-w-375 px-5 lg:px-10">
        {/* ================= Heading ================= */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-flex rounded-full bg-[#ECECEC] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-[#111]">
              Why Us
            </span>
          </motion.div>

          {/* Right Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Red Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute right-0 top-0 h-37.5 w-37.5 rounded-full bg-[#E30613] md:h-47.5 md:w-47.5 lg:h-57.5 lg:w-57.5"
            />

            <h2 className="relative z-10 text-right text-[52px] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#111] md:text-[80px] lg:text-[105px]">
              Why We Are
              <br />
              The Best
            </h2>
          </motion.div>
        </div>

        {/* Space */}
        <div className="h-24 lg:h-32" />

        {/* ================= Features ================= */}
        <div className="border-t border-[#E5E5E5]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12, // stagger each card
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid items-center gap-6 border-b border-[#E5E5E5] py-10 md:grid-cols-[100px_1fr_220px] md:gap-8 lg:grid-cols-[120px_1fr_260px]"
            >
              {/* Number */}
              <div>
                <span className="text-4xl font-black leading-none tracking-tighter text-[#111] lg:text-5xl">
                  {feature.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-4xl font-black uppercase leading-none tracking-tighter text-[#111] lg:text-[64px]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base font-inter text-[#555] md:text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:justify-self-end">
                <div className="relative h-48 w-full overflow-hidden sm:h-64 md:h-32.5 md:w-50 lg:h-35 lg:w-55">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}