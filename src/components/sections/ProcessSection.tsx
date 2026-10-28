"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/siteContent";

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-black py-28 md:py-36 text-white">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400"
        >
          WHY CHOOSE US
        </motion.p>

        {/* Big H3 Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-2xl font-light leading-snug tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          We don&apos;t just shoot video. We craft cinematic experiences that elevate your brand and captivate your audience.
        </motion.h2>

        {/* 4 Steps Row / Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col border-t border-white/15 pt-6"
            >
              <span className="font-mono text-xs text-zinc-400">
                {step.step}
              </span>
              <h3 className="mt-4 text-xl font-normal tracking-tight text-white">
                {step.name}
              </h3>
              <p className="mt-3 font-mono text-xs leading-relaxed uppercase tracking-wider text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
