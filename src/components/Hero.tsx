"use client";

import { motion } from "motion/react";
import { DownloadButtons } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ version }: { version: string | null }) {
  return (
    <section className="relative px-5 sm:px-10 pt-14 sm:pt-24 pb-20 sm:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 paper-grain"
        style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 20%, black 20%, transparent 75%)" }}
      />
      <div
        aria-hidden
        className="absolute -z-10 left-1/2 top-[420px] -translate-x-1/2 w-[1100px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(43,100,73,0.10), transparent)" }}
      />

      <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-paper-2 text-[12px] font-mono text-ink-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-moss" />
          {version ? `${version} · ` : ""}macOS · Apple Silicon · Free
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          className="font-serif font-semibold text-[52px] sm:text-[80px] lg:text-[96px] leading-[0.98] tracking-[-0.025em] text-ink"
        >
          Press Start.
          <br />
          <span className="italic font-normal text-ink-2">Forget it&rsquo;s running.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-[620px] text-[17px] sm:text-[18.5px] leading-[1.55] text-ink-2 text-pretty"
        >
          OpenOats records your meetings on your Mac. When you press Stop, it writes one markdown file: Notes on
          top, a You/Them transcript underneath. Nothing to set up, nothing to watch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-10"
        >
          <DownloadButtons center />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-[13px] text-ink-3"
        >
          Transcribes on your Mac · No account · No bot in your call · Open source
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease }}
        className="relative mx-auto mt-16 sm:mt-20 max-w-[1160px]"
      >
        <div className="relative w-[150%] sm:w-[86%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/shots/window-notes.webp"
            srcSet="/shots/window-notes-1200.webp 1200w, /shots/window-notes.webp 2400w"
            sizes="(max-width: 640px) 150vw, (max-width: 1200px) 86vw, 1000px"
            width={2400}
            height={1680}
            alt="The OpenOats window with a Meeting file open: a Summary, Decisions and Action Items for a spring launch plan, with the Transcript below"
            className="shot w-full h-auto"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="absolute right-0 top-[46%] sm:top-[44%] w-[44%] sm:w-[26%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/shots/panel-recording.webp"
            width={600}
            height={576}
            alt="The OpenOats menu bar panel while recording: a timer at 23:47, level meters for the Mic track and System track, and a Stop Recording button"
            className="shot-sm w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
