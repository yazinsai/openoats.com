"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const STEPS = [
  {
    num: "01",
    title: "Start a call, hit Live.",
    detail:
      "OpenOats opens quietly in a corner. The window is hidden from screen-sharing by default — so it stays between you and your notes.",
    icon: "solar:record-circle-linear",
  },
  {
    num: "02",
    title: "It transcribes both sides.",
    detail:
      "Speech recognition runs entirely on your Mac using Apple's Speech framework. Not a byte of audio ever leaves the device.",
    icon: "solar:soundwave-linear",
  },
  {
    num: "03",
    title: "Your notes talk back.",
    detail:
      "When the conversation hits a question, a decision point, a claim worth backing up — OpenOats searches your notes and surfaces the exact line you meant to remember.",
    icon: "solar:magic-stick-3-linear",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative px-6 sm:px-10 py-28 sm:py-36 border-t border-line"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionEyebrow label="how it works" />

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 font-sans text-[36px] sm:text-[56px] leading-[1.02] tracking-[-0.03em] max-w-[820px] font-semibold"
        >
          Three moves.{" "}
          <span className="accent-italic font-normal text-snow-muted">
            No recording studio required.
          </span>
        </motion.h2>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-line">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group p-8 sm:p-10 border-b md:border-b-0 md:border-r border-line last:border-r-0"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[12px] tracking-[0.2em] text-snow-faint">
                  {step.num}
                </span>
                <Icon
                  icon={step.icon}
                  className="w-5 h-5 text-snow-mute-2 group-hover:text-snow transition-colors"
                />
              </div>
              <h3 className="text-[20px] leading-snug text-snow mb-3 tracking-tight font-semibold">
                {step.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-snow-muted">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-snow-faint"
    >
      <span className="inline-block w-6 h-px bg-snow-faint" />
      <span>{label}</span>
    </motion.div>
  );
}
