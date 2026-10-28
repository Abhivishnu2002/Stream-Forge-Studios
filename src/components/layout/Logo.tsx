import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Stream Forge Studios Home"
      className={cn(
        "group flex items-center gap-1.5 font-bold tracking-tight text-white transition-opacity hover:opacity-90 select-none",
        size === "sm" && "text-xs",
        size === "md" && "text-sm md:text-base",
        size === "lg" && "text-xl md:text-2xl",
        className
      )}
    >
      <span className="font-mono uppercase tracking-[0.18em] font-medium text-white">
        STREAM FORGE STUDIOS
      </span>
      <span className="text-[10px] text-zinc-500 font-mono">®</span>
    </Link>
  );
}
