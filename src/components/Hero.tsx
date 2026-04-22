"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { AppWindow } from "./AppWindow";

export function Hero() {
  return (
    <section className="relative px-6 sm:px-10 pt-8 sm:pt-16 pb-24 sm:pb-32 overflow-hidden">
      {/* Decorative grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ece5d4 1px, transparent 1px), linear-gradient(to bottom, #ece5d4 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Copy */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-6 text-[11px] font-mono uppercase tracking-[0.2em] text-oat-cream-dimmer"
          >
            <span className="inline-block w-8 h-px bg-oat-amber/40" />
            <span>macOS · Apple Silicon · on-device</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.02em] text-oat-cream"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
          >
            A meeting
            <br />
            note-taker
            <br />
            <span
              className="display-italic text-oat-amber-bright"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              that talks back.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-[520px] text-[17px] leading-[1.55] text-oat-cream-dim"
          >
            OpenOats sits next to your call, transcribes both sides of the
            conversation in real time, and searches your own notes to surface
            things worth saying — right when you need them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center"
          >
            <a
              href="https://github.com/yazinsai/OpenOats/releases/latest"
              className="group relative inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-oat-cream text-oat-ink font-medium text-[14px] hover:bg-oat-amber-bright transition-colors"
            >
              <Icon icon="simple-icons:apple" className="w-4 h-4" />
              Download for Mac
              <span className="text-[11px] font-mono opacity-50 ml-1 border-l border-oat-ink/20 pl-2.5">
                DMG · free
              </span>
            </a>

            <BrewCommand />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex items-center gap-5 text-[12px] text-oat-cream-dimmer"
          >
            <div className="flex items-center gap-1.5">
              <Icon icon="solar:shield-check-linear" className="w-4 h-4 text-oat-moss" />
              <span>Audio never leaves your Mac</span>
            </div>
            <div className="w-px h-3 bg-oat-line-strong" />
            <div className="flex items-center gap-1.5">
              <Icon icon="solar:code-linear" className="w-4 h-4 text-oat-amber" />
              <span>Open source · MIT</span>
            </div>
          </motion.div>
        </div>

        {/* Right: App window */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative lg:-mr-8 xl:-mr-16"
        >
          <AppWindow />

          {/* floating caption chip */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hidden sm:flex absolute -left-6 top-[30%] items-center gap-2 px-3 py-1.5 rounded-full bg-oat-ink-raised border border-oat-line-strong text-[11px] font-mono text-oat-cream-dim backdrop-blur-sm"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-oat-amber" />
            pulls from your notes
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="hidden sm:flex absolute -right-2 bottom-[12%] items-center gap-2 px-3 py-1.5 rounded-full bg-oat-ink-raised border border-oat-line-strong text-[11px] font-mono text-oat-cream-dim backdrop-blur-sm"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-oat-moss" />
            on-device transcription
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BrewCommand() {
  const [copied, setCopied] = useState(false);
  const cmd =
    "brew tap yazinsai/openoats https://github.com/yazinsai/OpenOats && brew install --cask openoats";

  const copy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-oat-ink-raised border border-oat-line-strong hover:border-oat-amber/30 transition-colors font-mono text-[12.5px] text-oat-cream-dim"
    >
      <Icon
        icon={copied ? "solar:check-read-linear" : "solar:copy-linear"}
        className={`w-3.5 h-3.5 ${copied ? "text-oat-moss" : "text-oat-cream-dimmer"}`}
      />
      <span className="text-oat-cream-dimmer">$</span>
      <span className="text-oat-cream">{copied ? "copied" : "brew install openoats"}</span>
    </button>
  );
}
