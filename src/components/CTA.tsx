"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function CTA() {
  return (
    <section className="relative px-6 sm:px-10 py-32 sm:py-48 border-t border-oat-line overflow-hidden">
      {/* ambient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(217, 155, 92, 0.12), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[900px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="font-display text-[48px] sm:text-[84px] leading-[0.98] tracking-[-0.025em]"
        >
          Sound prepared.{" "}
          <span className="display-italic text-oat-amber-bright">
            Because you are.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-[16px] text-oat-cream-dim max-w-[560px] mx-auto leading-[1.6]"
        >
          Free, open source, and built for macOS. Takes about a minute to set up.
          The first run downloads the on-device speech model — after that, you
          can pull the wifi cable and it still works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-col items-center gap-5"
        >
          <InstallBlock />

          <div className="flex items-center gap-4 mt-2 text-[13px] text-oat-cream-dimmer">
            <a
              href="https://github.com/yazinsai/OpenOats/releases/latest"
              className="flex items-center gap-1.5 hover:text-oat-cream transition-colors"
            >
              <Icon icon="solar:download-minimalistic-linear" className="w-4 h-4" />
              or download the DMG
            </a>
            <span className="w-px h-3 bg-oat-line-strong" />
            <a
              href="https://github.com/yazinsai/OpenOats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-oat-cream transition-colors"
            >
              <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
              read the source
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 flex items-center justify-center gap-3 text-[11px] font-mono text-oat-cream-dimmer"
        >
          <Icon icon="solar:mac-linear" className="w-4 h-4" />
          <span>macOS 15+ · Apple Silicon</span>
          <span className="opacity-40">·</span>
          <Icon icon="simple-icons:swift" className="w-3.5 h-3.5 text-oat-amber/50" />
          <span>built in Swift</span>
        </motion.div>
      </div>
    </section>
  );
}

function InstallBlock() {
  const [copied, setCopied] = useState(false);
  const cmd =
    "brew tap yazinsai/openoats https://github.com/yazinsai/OpenOats && brew install --cask openoats";

  const copy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={copy}
      className="group relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-oat-ink-raised border border-oat-line-strong hover:border-oat-amber/40 transition-all font-mono text-[14px]"
    >
      <span className="text-oat-cream-dimmer">$</span>
      <span className="text-oat-cream">
        brew install --cask{" "}
        <span className="text-oat-amber">yazinsai/openoats/openoats</span>
      </span>
      <span className="ml-3 flex items-center gap-1.5 pl-3 border-l border-oat-line-strong text-[11.5px] text-oat-cream-dimmer">
        <Icon
          icon={copied ? "solar:check-read-linear" : "solar:copy-linear"}
          className={`w-3.5 h-3.5 ${copied ? "text-oat-moss" : ""}`}
        />
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
