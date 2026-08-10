"use client";

import { fadeUp } from "@/app/_components/animations";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    number: "01",
    tag: "10 YEARS",
    title: ["Pro", "Expert"],
    description:
      "Industry-level expertise delivering strategic, creative solutions with precision and confidence.",
  },
  {
    id: 2,
    number: "02",
    tag: "RECOGNITION",
    title: ["Award", "Winning"],
    description:
      "Recognized for excellence through award-winning creativity, innovation, and consistent performance.",
  },
  {
    id: 3,
    number: "03",
    tag: "RESULTS",
    title: ["Client", "Success"],
    description:
      "More than 85% of clients achieve better brand recognition and results through our creative services.",
  },
  {
    id: 4,
    number: "04",
    tag: "SATISFACTION",
    title: ["Smart", "Pricing"],
    description:
      "Flexible and transparent pricing designed to deliver maximum value without compromise.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-230 px-5 lg:px-0">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="border-t border-[#2A2A2A] pt-3"
            style={{
              marginTop: index === 0 ? 0 : "56px",
            }}
          >
            {/* Top row: number + tag */}
            <div className="flex items-center justify-between text-xl font-bold uppercase">
              <span>{item.number}</span>
              <span>{item.tag}</span>
            </div>

            {/* Heading */}
            <h3 className="mt-4 text-center text-[56px] font-black uppercase leading-[0.9] md:text-[72px] lg:text-[110px]">
              {item.title[0]}
              <br />
              {item.title[1]}
            </h3>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-lg font-inter text-center text-xl leading-normal text-[#9A9A9A]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}