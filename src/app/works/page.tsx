"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/siteContent";

export default function WorksPage() {
  return (
    <div className="min-h-screen w-full bg-black px-6 pt-32 pb-32 md:px-12 md:pt-40 text-white">
      <div className="mx-auto max-w-[1160px]">
        {/* Huge Heading matching reference site */}
        <div className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-[0.95]"
          >
            BROADCAST LIVE.<br />
            TEACH CREATORS.<br />
            SHAPE THE IDOLS.
          </motion.h1>
        </div>

        {/* Section Header */}
        <div className="mb-12 flex items-baseline justify-between border-t border-white/10 pt-10">
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
              Selected Work
            </h2>
            <span className="font-mono text-sm tracking-wider text-zinc-500">
              [12]
            </span>
          </div>
        </div>

        {/* 2-Column Project Grid matching docs/ref_works_scroll_2.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
