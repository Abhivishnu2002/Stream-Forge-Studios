"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/siteContent";

export default function WorkSection() {
  return (
    <section id="selected-work" className="relative w-full bg-black py-20 md:py-28 text-white">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex items-baseline justify-between border-b border-transparent pb-4">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-normal tracking-tight text-white md:text-2xl"
          >
            Selected Work
          </motion.h4>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-zinc-400"
          >
            [12]
          </motion.span>
        </div>

        {/* Vertical Stack of Full-Width Cards */}
        <div className="flex flex-col gap-6 md:gap-7">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
