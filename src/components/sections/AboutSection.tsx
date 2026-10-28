"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/siteContent";

interface ScrollCharProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function ScrollChar({ char, progress, start, end }: ScrollCharProps) {
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const blurVal = useTransform(progress, [start, end], [4, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);
  const x = useTransform(progress, [start, end], [-8, 0]);
  const y = useTransform(progress, [start, end], [16, 0]);
  const color = useTransform(progress, [start, end], ["#71717a", "#ffffff"]);

  return (
    <motion.span
      style={{
        opacity,
        filter,
        x,
        y,
        color,
      }}
      className="inline-block will-change-[transform,filter,opacity]"
    >
      {char}
    </motion.span>
  );
}

function ScrollTextReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.3"],
  });

  const words = text.split(" ");
  const totalChars = words.reduce((acc, word) => acc + word.length, 0);

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.16] font-normal tracking-tight text-white max-w-5xl"
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        const renderedWord = (
          <span
            key={`word-${wordIdx}`}
            className="inline-block whitespace-nowrap mr-[0.3em]"
          >
            {wordChars.map((char, charIdx) => {
              const start = globalCharIndex / totalChars;
              const end = Math.min(1, start + 2 / totalChars);
              globalCharIndex++;

              return (
                <ScrollChar
                  key={`char-${wordIdx}-${charIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </span>
        );
        return renderedWord;
      })}
    </p>
  );
}

export default function AboutSection() {
  return (
    <section className="relative w-full bg-black py-28 md:py-40 text-white">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400"
        >
          {ABOUT_CONTENT.badge}
        </motion.p>

        {/* Large Cinematic Statement with True Scroll-Linked Character Blur Reveal */}
        <ScrollTextReveal text={ABOUT_CONTENT.headline} />
      </div>
    </section>
  );
}
