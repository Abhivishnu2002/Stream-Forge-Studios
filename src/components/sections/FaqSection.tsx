"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/data/siteContent";

export default function FaqSection() {
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
          FAQ
        </motion.p>

        {/* Big Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-4xl text-2xl font-light leading-snug tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Answers to the questions clients ask most.
        </motion.h2>

        {/* Collapsible Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <Accordion items={FAQ_ITEMS} />
        </motion.div>
      </div>
    </section>
  );
}
