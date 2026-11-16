"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { DMG_URL, REPO_URL } from "@/lib/site";

export function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-[11.5px] font-mono uppercase tracking-[0.18em] text-moss">
      <span className="inline-block w-6 h-px bg-moss/60" />
      <span>{label}</span>
    </div>
  );
}

/** Fades content up once it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ children, muted }: { children: ReactNode; muted?: ReactNode }) {
  return (
    <h2 className="mt-5 font-serif text-[36px] sm:text-[52px] leading-[1.04] tracking-[-0.02em] font-semibold text-ink max-w-[820px] text-balance">
      {children}
      {muted ? (
        <>
          {" "}
          <span className="italic font-normal text-ink-2">{muted}</span>
        </>
      ) : null}
    </h2>
  );
}

export function DownloadButtons({ center = false }: { center?: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-2.5 ${center ? "items-center justify-center" : "items-start sm:items-center"}`}
    >
      <a
        href={DMG_URL}
        className="inline-flex items-center gap-2.5 h-12 px-5 rounded-full bg-ink text-paper font-medium text-[14.5px] hover:bg-moss-deep transition-colors"
      >
        <Icon icon="simple-icons:apple" className="w-4 h-4" />
        Download for Mac
        <span className="text-[11px] font-mono opacity-60 ml-1 pl-2.5 border-l border-paper/25">FREE · DMG</span>
      </a>
      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 h-12 px-5 rounded-full border border-line bg-paper hover:border-ink-3/50 transition-colors text-ink text-[14.5px]"
      >
        <Icon icon="simple-icons:github" className="w-4 h-4" />
        View on GitHub
      </a>
    </div>
  );
}
