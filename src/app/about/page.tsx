"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ABOUT_PARA_1 =
  "Stream Forge Studios is a California-based creative studio and production house. Moving between commercial directing, choreography, short-form reels, and live stream entertainment, bringing a distinct visual signature to each one, with world-building at the heart of our work.";

const ABOUT_PARA_2 =
  "Rooted in world-building and kinetic movement, our productions create atmospheres that feel lived-in and emotionally grounded. We collaborate with leading brands, artists, and creators, bringing the same care to story, choreography, and image in commercial projects.";

function ScrollWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: any;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const blurValue = useTransform(progress, [start, end], [6, 0]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, filter }}
      className="inline-block mr-[0.3em] transition-colors"
    >
      {word}
    </motion.span>
  );
}

function ScrollParagraph({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");
  return (
    <p
      ref={containerRef}
      className="text-2xl sm:text-3xl md:text-5xl font-normal leading-[1.3] tracking-tight text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

export default function AboutPage() {
  const btsImages = [
    "/images/projects/project-1.jpg",
    "/images/projects/project-2.jpg",
    "/images/projects/project-3.jpg",
    "/images/projects/project-4.jpg",
  ];

  return (
    <div className="min-h-screen w-full bg-black px-6 pt-32 pb-32 md:px-12 md:pt-40 text-white">
      <div className="mx-auto max-w-[1160px] space-y-32">
        {/* Top Statement */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">
            ABOUT ME
          </p>
          <ScrollParagraph text={ABOUT_PARA_1} />
        </div>

        {/* ROLL Video Section */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
            ROLL
          </p>
          <div className="relative w-full h-[360px] sm:h-[480px] md:h-[620px] rounded-[10px] overflow-hidden bg-zinc-950">
            <video
              src="/videos/As8Zelyphu18fIUuYQNJdR5f2o.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Statement */}
        <div>
          <ScrollParagraph text={ABOUT_PARA_2} />
        </div>

        {/* Behind The Scenes Gallery */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">
            BEHIND THE SCENES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {btsImages.map((src, i) => (
              <div
                key={i}
                className="relative h-[340px] sm:h-[420px] rounded-[10px] overflow-hidden bg-zinc-950 border border-white/5"
              >
                <Image
                  src={src}
                  alt={`Production Still ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
