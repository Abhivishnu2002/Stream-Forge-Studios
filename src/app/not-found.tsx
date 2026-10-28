import React from "react";
import Link from "next/link";

export const metadata = {
  title: "404 Not Found — Stream Forge Studios",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center px-6 text-center bg-black text-white">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 mb-6">
        PAGE NOT FOUND
      </p>
      <h1 className="text-8xl sm:text-9xl md:text-[140px] font-normal tracking-tight text-white leading-none mb-10">
        404
      </h1>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-white text-black px-6 py-2.5 font-mono text-xs uppercase tracking-wider font-medium hover:bg-zinc-200 transition-colors"
      >
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
}
