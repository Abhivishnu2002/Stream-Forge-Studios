"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/siteContent";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export default function ProjectCard({
  project,
  className,
  index = 0,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("group relative w-full", className)}
    >
      <Link
        href={`/works/${project.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative block h-[380px] sm:h-[434px] w-full overflow-hidden rounded-[10px] bg-zinc-950 transition-all duration-500"
      >
        {/* Background Poster Image */}
        <Image
          src={project.poster}
          alt={project.title}
          fill
          priority={index < 2}
          sizes="(min-width: 1200px) 1160px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        {/* Hover Looping Video Overlay */}
        <div
          className={cn(
            "absolute inset-0 z-10 transition-opacity duration-300 ease-in-out",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom Dark Gradient Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-48 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        {/* Card Bottom Meta (Title on Left, Client on Right) */}
        <div className="absolute bottom-8 left-8 right-8 z-30 flex items-baseline justify-between">
          <div>
            <h3 className="text-2xl font-normal tracking-tight text-white md:text-[38px] leading-tight">
              {project.title}
            </h3>
          </div>

          <div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-white">
              {project.client}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
