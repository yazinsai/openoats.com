"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { AppWindow } from "./AppWindow";
import { Logo } from "./Logo";

export function Hero({ version }: { version: string | null }) {
  return (
    <section className="relative px-6 sm:px-10 pt-12 sm:pt-20 pb-24 sm:pb-32 overflow-hidden">
      {/* sharp grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-line-strong bg-ink-soft text-[11px] font-mono text-snow-muted mb-8"
          >
            <Logo size={12} bare />
            <span>
              {version ? `${version} · ` : ""}macOS · Apple Silicon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[48px] sm:text-[68px] lg:text-[88px] leading-[0.95] tracking-[-0.04em] text-snow font-semibold"
          >
            A meeting
            <br />
            note-taker
            <br />
            <span className="accent-italic font-normal text-snow-muted">
              that talks back.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-[520px] text-[16.5px] leading-[1.55] text-snow-muted"
          >
            OpenOats sits next to your call, transcribes both sides in real
            time, and searches your own notes to surface things worth saying —
            right when you need them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-2.5 items-start sm:items-center"
          >
            <a
              href="https://github.com/yazinsai/OpenOats/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 h-12 px-5 rounded-md bg-snow text-ink font-medium text-[14px] hover:bg-snow-dim transition-colors"
            >
              <Icon icon="simple-icons:apple" className="w-4 h-4" />
              Download for Mac
              <span className="text-[11px] font-mono opacity-50 ml-1 pl-2.5 border-l border-ink/20">
                FREE · DMG
              </span>
            </a>

            <a
              href="https://github.com/yazinsai/OpenOats"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-12 px-4 rounded-md bg-ink-soft border border-line-strong hover:border-line-bright transition-colors text-snow text-[14px]"
            >
              <Icon icon="simple-icons:github" className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-snow-faint"
          >
            <div className="flex items-center gap-1.5">
              <Icon icon="solar:shield-check-linear" className="w-4 h-4 text-snow-muted" />
              <span>Audio never leaves your Mac</span>
            </div>
            <span className="hidden sm:block w-px h-3 bg-line-strong" />
            <div className="flex items-center gap-1.5">
              <Icon icon="solar:code-linear" className="w-4 h-4 text-snow-muted" />
              <span>Open source · MIT</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <AppWindow />

          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hidden sm:flex absolute -left-6 top-[28%] items-center gap-2 px-3 py-1.5 rounded-md bg-ink-elevated border border-line-strong text-[11px] font-mono text-snow-muted"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-snow" />
            pulls from your notes
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="hidden sm:flex absolute -right-2 bottom-[12%] items-center gap-2 px-3 py-1.5 rounded-md bg-ink-elevated border border-line-strong text-[11px] font-mono text-snow-muted"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-snow" />
            on-device transcription
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

