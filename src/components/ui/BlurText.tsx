"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  byCharacter?: boolean;
}

export default function BlurText({
  text,
  className,
  as: Component = "h1",
  delay = 0,
  stagger = 0.04,
  byCharacter = false,
}: BlurTextProps) {
  const items = byCharacter ? text.split("") : text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("inline-block", className)}
    >
      <Component className="inline flex-wrap">
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block whitespace-pre"
          >
            {item}
            {!byCharacter && index < items.length - 1 && " "}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
