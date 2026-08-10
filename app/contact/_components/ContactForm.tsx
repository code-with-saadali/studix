"use client";

import { fadeUp } from "@/app/_components/animations";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="bg-white py-28 text-[#111]">
      <div className="px-5 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* ================= Left: Heading + Info + Image ================= */}
          <div>
            {/* Heading with red circle behind first letter */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-[#E30000] md:h-38 md:w-38" />

              <h2 className="relative z-10 text-[56px] font-black uppercase leading-[0.9] md:text-[100px]">
                Let&apos;s
                <br />
                Build
                <br />
                It Together
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 max-w-92.5 text-[18px] leading-normal font-inter text-[#111]"
            >
              Reach out with any questions or projects to us—we&apos;re a call
              away.
            </motion.p>

            {/* Hotline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10"
            >
              <p className="text-[15px] text-[#777] font-inter">Hotline</p>
              <p className="mt-1 text-[26px] font-semibold">(+91) 018-734-377</p>
            </motion.div>

          </div>

          {/* ================= Right: Form ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#FDE3E3] p-5"
          >
            <form className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label className="text-base font-semibold uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-3 w-full bg-white px-5 py-4 text-[16px] font-inter text-[#111] placeholder:text-[#999] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-base font-semibold uppercase">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="mt-3 w-full bg-white px-5 py-4 font-inter text-[16px] text-[#111] placeholder:text-[#999] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-base font-semibold uppercase">
                  Message*
                </label>
                <textarea
                  required
                  placeholder="Write here.."
                  rows={5}
                  className="mt-3 w-full resize-y font-inter bg-white px-5 py-4 text-[16px] text-[#111] placeholder:text-[#999] focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 bg-[#111] py-5 text-[15px] md:text-lg cursor-pointer font-semibold uppercase text-white transition-colors hover:bg-black"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}