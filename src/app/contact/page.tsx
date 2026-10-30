"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { SITE_METADATA } from "@/data/siteContent";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-black px-6 pt-32 pb-32 md:px-12 md:pt-40 text-white">
      <div className="mx-auto max-w-[1160px] space-y-24">
        {/* Giant Headline matching reference site docs/ref_contact.png */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal tracking-tight text-white leading-[1.05] uppercase">
            READY TO GO LIVE, LEARN,<br />
            OR SHAPE AN IDOL?<br />
            LET&apos;S TALK.
          </h1>
        </motion.div>

        {/* EMAIL US */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border-t border-white/10 pt-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            EMAIL US
          </p>
          <a
            href={`mailto:${SITE_METADATA.contact.email}`}
            className="block text-3xl sm:text-5xl md:text-7xl font-normal tracking-tight text-white hover:text-zinc-400 transition-colors"
          >
            {SITE_METADATA.contact.email}
          </a>
        </motion.div>

        {/* CALL US */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t border-white/10 pt-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            CALL US
          </p>
          <a
            href={`tel:${SITE_METADATA.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="block text-3xl sm:text-5xl md:text-7xl font-normal tracking-tight text-white hover:text-zinc-400 transition-colors"
          >
            {SITE_METADATA.contact.phone}
          </a>
        </motion.div>

        {/* Optional Quick Message Drawer */}
        <div className="border-t border-white/10 pt-10">
          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
            >
              <span>SEND A DIRECT BRIEF / INQUIRY</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          ) : formSubmitted ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center max-w-xl">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
              <h3 className="mt-3 text-lg font-bold text-white">Message Dispatched</h3>
              <p className="mt-1 text-xs text-zinc-300">
                We received your brief and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[6px] border border-white/10 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-[6px] border border-white/10 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-[6px] border border-white/10 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-black hover:bg-zinc-200 transition-colors"
              >
                <span>Submit</span>
                <Send className="h-3 w-3" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
