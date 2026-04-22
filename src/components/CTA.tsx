"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Logo } from "./Logo";

export function CTA() {
  return (
    <section className="relative px-6 sm:px-10 py-32 sm:py-44 border-t border-line overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-dot-grid opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 50% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-[900px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <Logo size={56} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-sans text-[48px] sm:text-[88px] leading-[0.96] tracking-[-0.04em] font-semibold"
        >
          Sound prepared.{" "}
          <span className="accent-italic font-normal text-snow-muted">
            Because you are.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-[16px] text-snow-muted max-w-[560px] mx-auto leading-[1.6]"
        >
          Free, open source, built for macOS. Takes about a minute to set up. The
          first run downloads the on-device speech model — after that, you can
          pull the wifi cable and it still works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          <a
            href="https://github.com/yazinsai/OpenOats/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-md bg-snow text-ink font-medium text-[14px] hover:bg-snow-dim transition-colors"
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
            className="group inline-flex items-center gap-2 h-12 px-5 rounded-md bg-ink-soft border border-line-strong hover:border-line-bright transition-colors text-snow text-[14px]"
          >
            <Icon icon="simple-icons:github" className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex items-center justify-center gap-3 text-[11px] font-mono text-snow-faint"
        >
          <Icon icon="solar:mac-linear" className="w-4 h-4" />
          <span>macOS 15+ · Apple Silicon</span>
          <span className="opacity-40">·</span>
          <Icon icon="simple-icons:swift" className="w-3.5 h-3.5" />
          <span>built in Swift</span>
        </motion.div>
      </div>
    </section>
  );
}
