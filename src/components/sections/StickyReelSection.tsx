"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STICKY_REEL_CONTENT } from "@/data/siteContent";

export default function StickyReelSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the tall sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale video from compact card (1.0) up to immersive widescreen scale (2.75)
  const scale = useTransform(scrollYProgress, [0.05, 0.75], [1, 2.75]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[230vh] bg-black text-white"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center py-10 md:py-14 px-6 overflow-hidden">
        {/* Top Heading */}
        <div className="z-10 text-center select-none">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[90px] font-normal tracking-tight text-white leading-none">
            {STICKY_REEL_CONTENT.headline}
          </h2>
        </div>

        {/* Center Scaling Video Card */}
        <div className="relative flex items-center justify-center w-full my-auto z-20">
          <motion.div
            style={{ scale }}
            className="w-[320px] sm:w-[400px] md:w-[460px] aspect-[16/10] overflow-hidden rounded-[8px] bg-zinc-950 shadow-2xl will-change-transform border border-white/10"
          >
            <video
              src={STICKY_REEL_CONTENT.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom Subtext */}
        <div className="z-10 text-center select-none text-zinc-300 font-light text-sm sm:text-base md:text-lg space-y-1">
          <p>Our work is best experienced in motion.</p>
          <p>Don’t forget to put on your headphones.</p>
        </div>
      </div>
    </section>
  );
}
