"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { fadeUp } from "./animations";

const testimonials = [
  {
    id: 1,
    image: "/1.avif",
    name: "Kail Hadge",
    location: "Dubai, UAE",
    review:
      "Working with this team was an incredible experience. Their creativity, professionalism and attention to detail exceeded every expectation we had.",
  },
  {
    id: 2,
    image: "/2.avif",
    name: "Emma Watson",
    location: "London, UK",
    review:
      "They transformed our vision into something truly remarkable. Every detail was perfectly executed from start to finish.",
  },
  {
    id: 3,
    image: "/3.avif",
    name: "James Carter",
    location: "New York, USA",
    review:
      "Outstanding quality and amazing communication. I couldn't be happier with the final result and overall experience.",
  },
  {
    id: 4,
    image: "/4.avif",
    name: "Sophia Miller",
    location: "Paris, France",
    review:
      "Absolutely exceptional work. Their dedication and passion are reflected in every project they deliver.",
  },
];


function Signature({ seed = 0 }: { seed?: number }) {
  const paths = [
    "M2 30 C 15 5, 25 45, 38 20 S 60 5, 75 25 S 95 40, 110 15",
    "M2 25 C 12 45, 22 5, 35 28 S 55 45, 70 10 S 90 30, 115 22",
    "M2 20 C 18 40, 28 8, 42 30 S 58 8, 78 30 S 98 10, 115 28",
    "M2 28 C 14 8, 26 42, 40 18 S 62 42, 76 15 S 96 32, 112 18",
  ];
  const d = paths[seed % paths.length];
  return (
    <svg viewBox="0 0 120 50" className="h-full w-full">
      <path
        d={d}
        fill="none"
        stroke="#111"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#101010] py-16 text-white sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1700px] px-5 lg:px-10">
        {/* ================= Heading ================= */}
        {/* overflow-hidden scoped ONLY to this row so it clips the bleeding red
            circle without becoming a scroll-container ancestor for the sticky
            cards below (any ancestor overflow other than visible breaks sticky) */}
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-start">
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
              className="absolute -left-8 -top-3 h-20 w-20 rounded-full bg-[#E30000] sm:-left-16 sm:-top-4 sm:h-36 sm:w-36 lg:-left-24 lg:-top-6 lg:h-60 lg:w-60"
            />

            {/* Heading */}
            <h2 className="relative z-10 ml-4 text-[34px] font-black uppercase leading-[0.92] tracking-tighter sm:ml-6 sm:text-[48px] md:text-[70px] lg:ml-10 lg:text-[110px]">
              DON&apos;T TRUST US,
              <br className="hidden md:block"/>
              TRUST OUR CLIENTS
            </h2>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-[#2B2B2B] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white sm:px-6 sm:py-3 sm:text-[15px]">
              Testimonials
            </span>
          </motion.div>
        </div>

        {/* Space */}
        <div className="h-12 sm:h-16 lg:h-24" />

        {/* ================= Sticky Stacked Testimonial Cards ================= */}
        {/* No overflow-hidden/auto ancestor above this — required for sticky to work */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="sticky overflow-hidden bg-[#FFD9D9] p-3 shadow-2xl sm:p-5 lg:p-7"
              style={{
                top: `${64 + index * 5}px`,
                zIndex: index + 1,
                marginBottom: index === testimonials.length - 1 ? 0 : "60px",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[430px_1fr]">
                {/* Left Image */}
                <div className="relative h-56 overflow-hidden sm:h-80 lg:h-130">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Right Content */}
                <div className="relative flex flex-col justify-between py-5 text-[#111] sm:py-6 lg:h-130 lg:px-8">
                  {/* Quote */}
                  <Quote
                    className="h-8 w-8 fill-[#111] text-[#111] sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                    strokeWidth={1.8}
                  />

                  {/* Review */}
                  <h3 className="mt-3 max-w-190 text-lg font-medium leading-[1.15] tracking-[-0.02em] sm:mt-4 sm:text-2xl md:text-[34px] lg:text-[52px]">
                    {testimonial.review}
                  </h3>

                  {/* Bottom */}
                  <div className="mt-6 flex items-end justify-between sm:mt-auto">
                    {/* Left */}
                    <div>
                      <h4 className="text-base font-black uppercase tracking-[-0.02em] sm:text-xl lg:text-[26px]">
                        {testimonial.name}
                      </h4>

                      <p className="mt-1 text-xs text-[#444] sm:text-base lg:text-[18px]">
                        {testimonial.location}
                      </p>

                      {/* Signature */}
                      <div className="relative mt-4 h-8 w-28 sm:mt-6 sm:h-11 sm:w-36 lg:mt-8 lg:h-14 lg:w-44">
                        <Signature seed={index} />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#111] text-[#111] sm:h-5 sm:w-5 lg:h-7 lg:w-7"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}