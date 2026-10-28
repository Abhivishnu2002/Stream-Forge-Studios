import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LEGAL_TERMS } from "@/data/siteContent";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Stream Forge Studios.",
};

export default function PrivacyPolicyPage() {
  const { privacyPolicy } = LEGAL_TERMS;

  return (
    <div className="min-h-screen w-full px-5 pt-20 pb-32 md:px-8 md:pt-28">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="mb-12 border-b border-white/10 pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff334b]">
            LEGAL // DOCUMENTATION
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
            {privacyPolicy.title}
          </h1>
          <p className="mt-2 font-mono text-xs text-zinc-500">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
        </div>

        <div className="space-y-10">
          {privacyPolicy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold tracking-tight text-white md:text-xl">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
