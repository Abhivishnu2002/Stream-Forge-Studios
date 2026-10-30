"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { NAVIGATION_LINKS, SITE_METADATA } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Live Studio Clock (Bangalore / India Time)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: SITE_METADATA.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(formatted);
      } catch {
        setTimeString("02:04:01");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-black/85 backdrop-blur-md py-4"
            : "border-b border-transparent bg-black/40 backdrop-blur-sm py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 md:px-8">
          {/* Brand Logo */}
          <Logo />

          {/* Center Nav Links */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAVIGATION_LINKS.slice(0, 3).map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200",
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact Link */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/contact"
              className={cn(
                "font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200",
                pathname === "/contact"
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Trigger Pill */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:border-white/30 hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? (
              <>
                <span>Close</span>
                <X className="h-3.5 w-3.5" />
              </>
            ) : (
              <span>MENU</span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[65px] z-40 flex flex-col justify-between bg-black/95 px-6 py-8 backdrop-blur-2xl md:hidden"
          >
            {/* Links List */}
            <div className="flex flex-col gap-6 pt-4">
              {NAVIGATION_LINKS.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-2 text-3xl font-bold tracking-tight transition-colors",
                        isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      )}
                    >
                      <span className="font-mono uppercase text-2xl tracking-tight">
                        {link.name}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-zinc-500" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Info */}
            <div className="border-t border-white/10 pt-6">
              <div className="mb-4">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                  Get in Touch
                </p>
                <a
                  href={`mailto:${SITE_METADATA.contact.email}`}
                  className="font-mono text-sm font-medium text-white hover:underline"
                >
                  {SITE_METADATA.contact.email}
                </a>
                <p className="font-mono text-xs text-zinc-400 mt-1">
                  {SITE_METADATA.contact.phone}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>{SITE_METADATA.location}</span>
                <span className="text-zinc-300">
                  {timeString || "02:04:01"} IST
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
