"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerList } from "./animations";

const FAQS = [
  {
    question: "HOW DOES THE FREE TRIAL WORK?",
    answer:
      "You get full access to every feature for 14 days, no card required. Cancel anytime before the trial ends and you won't be charged.",
  },
  {
    question: "HOW DO YOU FIND DIFFERENT CRITERIA IN YOUR PROCESS?",
    answer:
      "We combine data-driven screening with hands-on interviews, weighing each criterion against the goals you share with us upfront.",
  },
  {
    question: "WHAT DO YOU LOOK FOR IN A FOUNDING TEAM?",
    answer:
      "Coachability, domain expertise, and speed of execution. We look for teams who ship fast and adapt even faster.",
  },
  {
    question: "CAN GET IN HOUSE TEAM?",
    answer:
      "Yes — every plan includes the option to bring an in-house team on board with shared access and full visibility.",
  },
  {
    question: "WHAT DO I GET FOR $0 WITH MY PLAN?",
    answer:
      "The free plan includes core features, community support, and up to three active projects with no time limit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-5 lg:px-20 py-16 sm:py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
        {/* Left column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start gap-6 md:w-[40%]"
        >
          <span className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-base font-semibold tracking-wide text-black">
            FAQ
          </span>

          <h2 className="text-5xl font-black uppercase text-black sm:text-7xl">
            Need help?
          </h2>

          <div className="relative mt-20 aspect-4/3 w-full overflow-hidden md:w-48">
            <Image
              src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&auto=format&fit=crop&q=80"
              alt="Person holding a camera in a field"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right column – FAQ list with stagger */}
        <motion.div
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="divide-y divide-neutral-300 border-t border-neutral-200 md:w-[60%]"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                // optional: custom delay per item (stagger is already applied by the container)
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-sm font-semibold uppercase text-black sm:text-lg cursor-pointer">
                    {faq.question}
                  </span>
                  <span className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-black" />
                    <span
                      className={`absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-black transition-transform duration-200 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed font-inter text-neutral-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}