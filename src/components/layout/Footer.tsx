"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_METADATA } from "@/data/siteContent";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(formatted);
      } catch {
        setTimeString("14:15:54");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-black pt-24 pb-8 text-white">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 items-start">
          {/* Column 1: MENU & SOCIAL */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                MENU
              </p>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>HOME</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>WORK</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>ABOUT</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>CONTACT</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                SOCIAL
              </p>
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
                <li>
                  <a href="#" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>VIMEO</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-1 text-white hover:text-zinc-400">
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: GET IN TOUCH */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
              GET IN TOUCH
            </p>
            <div className="space-y-2 font-mono text-xs uppercase tracking-wider">
              <div>
                <a
                  href={`mailto:${SITE_METADATA.contact.email}`}
                  className="inline-flex items-center gap-1 text-white hover:text-zinc-400"
                >
                  <span>{SITE_METADATA.contact.email.toUpperCase()}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div>
                <a
                  href={`tel:${SITE_METADATA.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-1 text-white hover:text-zinc-400"
                >
                  <span>{SITE_METADATA.contact.phone}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Brand Statement (Right Aligned) */}
          <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
              STREAM FORGE STUDIOS
            </p>
            <h4 className="text-2xl md:text-3xl font-normal tracking-tight text-white leading-tight">
              DIRECTOR
            </h4>
            <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white leading-tight mt-1">
              FILMS • COMMERCIALS •
            </h3>
            <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white leading-tight">
              NARRATIVE
            </h3>
          </div>
        </div>

        {/* Middle Metadata Bar (Clock on Left, Legal on Right) */}
        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between font-mono text-xs uppercase tracking-wider text-zinc-400 gap-6">
          <div>
            <div className="text-white text-sm">{timeString || "14:15:54"}</div>
            <div className="text-zinc-500 mt-0.5">CALIFORNIA, USA</div>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/legal/terms-of-service" className="inline-flex items-center gap-1 hover:text-white">
              <span>TERM OF USE</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link href="/legal/privacy-policy" className="inline-flex items-center gap-1 hover:text-white">
              <span>PRIVACY POLICY</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee Banner Band: Bold White Bar with Black Text */}
      <div className="mt-14 w-full overflow-hidden bg-white py-4 md:py-6 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black inline-block px-4">
            ® STREAM FORGE STUDIOS ® STREAM FORGE STUDIOS ® STREAM FORGE STUDIOS ® STREAM FORGE STUDIOS
          </span>
          <span className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black inline-block px-4">
            ® STREAM FORGE STUDIOS ® STREAM FORGE STUDIOS ® STREAM FORGE STUDIOS ® STREAM FORGE STUDIOS
          </span>
        </div>
      </div>

      {/* Very Bottom Copyright */}
      <div className="mx-auto max-w-[1160px] px-6 md:px-12 mt-6">
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
          © 2026 STREAM FORGE STUDIOS
        </p>
      </div>
    </footer>
  );
}
