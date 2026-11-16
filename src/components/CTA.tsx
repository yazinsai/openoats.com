"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { BREW } from "@/lib/site";
import { Logo } from "./Logo";
import { DownloadButtons, Reveal } from "./ui";

export function CTA() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="relative px-5 sm:px-10 py-28 sm:py-40 border-t border-line-soft overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 paper-grain"
        style={{ maskImage: "radial-gradient(ellipse 50% 60% at 50% 50%, black 20%, transparent 75%)" }}
      />
      <Reveal className="mx-auto max-w-[860px] text-center">
        <div className="flex justify-center mb-9">
          <Logo size={60} variant="dark" />
        </div>
        <h2 className="font-serif text-[46px] sm:text-[80px] leading-[0.98] tracking-[-0.025em] font-semibold text-ink">
          Your next meeting,
          <br />
          <span className="italic font-normal text-ink-2">written down.</span>
        </h2>
        <p className="mt-8 text-[17px] text-ink-2 max-w-[540px] mx-auto leading-[1.6]">
          Free and open source. Setup is one screen: allow the microphone, allow system audio, pick a folder.
        </p>
        <div className="mt-10">
          <DownloadButtons center />
        </div>

        <div className="mt-8 mx-auto max-w-[560px] flex items-start gap-3 rounded-[14px] border border-line bg-paper-2 px-4 py-3 text-left">
          <pre className="flex-1 overflow-x-auto font-mono text-[12.5px] leading-[1.7] text-ink-2">
            <span className="select-none text-ink-3">$ </span>
            {BREW.split("\n")[0]}
            {"\n"}
            <span className="select-none text-ink-3">$ </span>
            {BREW.split("\n")[1]}
          </pre>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(BREW).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
              });
            }}
            className="flex-none mt-0.5 p-1.5 rounded-md text-ink-3 hover:text-ink hover:bg-paper-3 transition-colors"
            aria-label="Copy the Homebrew commands"
          >
            <Icon icon={copied ? "solar:check-read-linear" : "solar:copy-linear"} className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 text-[12px] font-mono text-ink-3">
          <Icon icon="solar:laptop-minimalistic-linear" className="w-4 h-4" />
          <span>macOS 14.2 or later · Apple Silicon</span>
        </div>
      </Reveal>
    </section>
  );
}
