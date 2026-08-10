"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerList, imageReveal } from "./animations";

const images = [
  { src: "/1.avif", height: "h-[300px]" },
  { src: "/2.avif", height: "h-[400px]" },
  { src: "/3.avif", height: "h-[520px]" },
  { src: "/4.avif", height: "h-[400px]" },
  { src: "/5.avif", height: "h-[300px]" },
];

export default function About() {
  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="rounded-full bg-[#E9E9E9] px-5 py-1.5 text-sm font-semibold uppercase text-[#111]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            About Us
          </motion.span>

          <motion.h2
            className="mt-3 max-w-6xl text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-[#111] md:text-[72px] lg:text-[90px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Creative Experts Delivering
            <br className="hidden md:block"/>
            Quality Photography
            <br className="hidden md:block"/>
            For All Industries
          </motion.h2>

          <motion.p
            className="mt-10 max-w-3xl text-[18px] leading-[1.4] text-[#222] md:text-[24px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Expert teams delivering high-quality photography services, capturing
            stunning visuals for brands, events, portraits, and commercial
            projects with creativity and precision.
          </motion.p>
        </div>

        {/* Gallery */}
        <motion.div
          className="mt-24 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 lg:items-center"
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "0px 0px -2% 0px",
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageReveal}
              className={`group relative overflow-hidden ${image.height}`}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={image.src}
                alt={`Photographer ${index + 1}`}
                fill
                priority={index === 0}
                quality={95}
                sizes="(max-width:768px) 100vw, (max-width:1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-28 border-b border-[#1A1A1A] pb-16"
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
            {[
              { value: "13", label: "Years of Experience" },
              { value: "5.00", label: "1.2k+ Rating" },
              { value: "300+", label: "Total Projects" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <h3 className="text-[60px] font-semibold leading-none text-[#111] md:text-[110px]">
                  {item.value}
                </h3>
                <p className="mt-3 text-[22px] leading-none text-[#222]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
