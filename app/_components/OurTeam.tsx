"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, imageReveal } from "./animations"; // added imageReveal

const team = [
  {
    name: "Maria Felix",
    role: "Art Director",
    image: "/1.avif",
  },
  {
    name: "Alex Jio",
    role: "Photographer",
    image: "/2.avif",
  },
  {
    name: "Jhon Cooper",
    role: "Manager",
    image: "/3.avif",
    social: true,
  },
  {
    name: "Maria Felix",
    role: "Art Director",
    image: "/1.avif",
  },
  {
    name: "Alex Jio",
    role: "Photographer",
    image: "/2.avif",
  },
  {
    name: "Jhon Cooper",
    role: "Manager",
    image: "/3.avif",
    social: true,
  },
];

export default function OurTeam() {
  return (
    <section className="bg-[#F8F8F8] pb-10">
      <div className="mx-auto max-w-362.5 px-6 lg:px-10">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <span className="rounded-full bg-[#ECECEC] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#111]">
            Our Team
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-225 text-center text-[48px] font-black uppercase leading-[0.88] tracking-tighter text-[#111] md:text-[72px] lg:text-[96px]"
        >
          The People Behind
          <br />
          Our Work
        </motion.h2>

        {/* Team Cards */}
        <div className="mt-24 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container with reveal animation */}
              <motion.div
                variants={imageReveal}
                className="relative overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={650}
                  className="h-130 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Name */}
              <div className="mt-5 border-b border-[#111] pb-4">
                <h3 className="text-[32px] font-black uppercase tracking-[-0.04em] text-[#111]">
                  {member.name}
                </h3>
              </div>

              {/* Role */}
              <div className="border-b border-[#111] py-4">
                <p className="text-lg text-[#222]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}