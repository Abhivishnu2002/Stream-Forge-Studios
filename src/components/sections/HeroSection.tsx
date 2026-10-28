"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import { HERO_CONTENT } from "@/data/siteContent";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black text-white">
      {/* Background Fullscreen Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={HERO_CONTENT.videoUrl}
          poster={HERO_CONTENT.videoPoster}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-90"
        />
        {/* Subtle Darkening Scrim */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 5 Vertical Grid Lines Spanning Screen */}
      <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-6">
        <div className="border-r border-white/[0.08]" />
        <div className="border-r border-white/[0.08]" />
        <div className="border-r border-white/[0.08]" />
        <div className="border-r border-white/[0.08]" />
        <div className="border-r border-white/[0.08]" />
        <div />
      </div>

      {/* Main Hero Content Overlay */}
      <div className="relative z-20 mx-auto flex h-full w-full flex-col justify-between px-6 py-10 md:px-12 md:py-12">
        {/* Top Space for Header Alignment */}
        <div className="h-4" />

        {/* Hero Title & Subtitle */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4">
          <div className="md:col-span-8 lg:col-span-9">
            <BlurText
              text="FILMS • COMMERCIALS •"
              as="h1"
              delay={0.1}
              stagger={0.06}
              className="text-4xl font-normal leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[90px]"
            />
            <div className="mt-1">
              <BlurText
                text="NARRATIVE"
                as="h1"
                delay={0.3}
                stagger={0.06}
                className="text-4xl font-normal leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[90px]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-sm leading-relaxed text-zinc-200 md:text-base font-sans"
            >
              {HERO_CONTENT.subline}
            </motion.p>
          </div>

          <div className="hidden md:col-span-4 lg:col-span-3 md:flex justify-end pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
              {HERO_CONTENT.badgeText}
            </span>
          </div>
        </div>

        {/* Center Plus Icon */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-light text-white/50 select-none">+</span>
        </div>

        {/* Bottom Elements: Corner Bracket on Left, ©2026 on Right */}
        <div className="flex items-end justify-between font-mono text-xs text-white">
          <div className="select-none text-base font-light text-zinc-400">
            ⌞
          </div>

          <Link
            href="/works"
            className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
          >
            SCROLL DOWN ↓
          </Link>

          <div className="select-none text-2xl font-light tracking-tight text-white/90 md:text-4xl font-sans">
            ©2026
          </div>
        </div>
      </div>
    </section>
  );
}
