import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/siteContent";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Stream Forge Studios`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS[currentIndex];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="min-h-screen w-full bg-black px-6 pt-24 pb-32 md:px-12 md:pt-32 text-white">
      <div className="mx-auto max-w-[1160px]">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO WORKS</span>
          </Link>
        </div>

        {/* Top Hero Banner matching docs/ref_project_detail.png */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[620px] rounded-[10px] overflow-hidden bg-zinc-950 mb-16">
          <Image
            src={project.poster}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Title & Description Overlay on Bottom Left */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 max-w-2xl z-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-4">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* 2-Column Info & Gallery section matching docs/ref_project_detail.png */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pt-8 border-t border-white/10">
          {/* Left Metadata Column */}
          <div className="md:col-span-4 space-y-8 font-mono">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                Client
              </p>
              <p className="text-lg md:text-xl text-white font-sans">
                {project.client}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                Role
              </p>
              <p className="text-lg md:text-xl text-white font-sans">
                {project.role}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                Years
              </p>
              <p className="text-lg md:text-xl text-white font-sans">
                {project.year}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Frames */}
          <div className="md:col-span-8 space-y-8">
            <div className="relative h-[360px] sm:h-[460px] rounded-[10px] overflow-hidden bg-zinc-950 border border-white/5">
              <Image
                src={project.poster}
                alt={`${project.title} Frame`}
                fill
                className="object-cover"
              />
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[260px] rounded-[10px] overflow-hidden bg-zinc-950 border border-white/5"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} Frame ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="mt-24 border-t border-white/10 pt-12 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              NEXT PROJECT
            </p>
            <h3 className="text-2xl md:text-4xl font-normal tracking-tight text-white mt-1">
              {nextProject.title}
            </h3>
          </div>

          <Link
            href={`/works/${nextProject.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
          >
            <span>NEXT</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
