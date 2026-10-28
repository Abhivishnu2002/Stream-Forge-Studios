"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/siteContent";

export default function ServicesSection() {
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
          OUR SERVICES
        </motion.p>

        {/* Big H3 Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-2xl font-light leading-snug tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          From script to final master, we handle every frame. We offer comprehensive production services tailored to your project&apos;s scale.
        </motion.h2>

        {/* Services List Rows */}
        <div className="mt-24 flex flex-col gap-12 md:gap-14">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group flex flex-col border-b border-white/10 pb-10"
            >
              <h3 className="text-2xl font-normal tracking-tight text-white md:text-[38px] leading-tight">
                {service.title}
              </h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-zinc-400 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
