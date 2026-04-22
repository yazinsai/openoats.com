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
      className="relative px-6 sm:px-10 py-28 sm:py-40 border-t border-oat-line"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionEyebrow label="how it works" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-5 font-display text-[36px] sm:text-[52px] leading-[1.02] tracking-[-0.02em] max-w-[820px]"
        >
          Three moves.{" "}
          <span className="display-italic text-oat-cream-dim">
            No recording studio required.
          </span>
        </motion.h2>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-[72px] leading-none text-oat-amber/20 group-hover:text-oat-amber/40 transition-colors">
                  {step.num}
                </span>
                <Icon
                  icon={step.icon}
                  className="w-6 h-6 text-oat-cream-dimmer group-hover:text-oat-amber transition-colors"
                />
              </div>
              <div className="h-px w-full bg-oat-line-strong mb-5" />
              <h3 className="font-display text-[22px] leading-snug text-oat-cream mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-oat-cream-dim">
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
      transition={{ duration: 0.8 }}
      className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-oat-cream-dimmer"
    >
      <span className="inline-block w-8 h-px bg-oat-amber/40" />
      <span>{label}</span>
    </motion.div>
  );
}
