"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SectionEyebrow } from "./HowItWorks";

const FEATURES = [
  {
    icon: "solar:ghost-linear",
    title: "Invisible to the other side",
    detail:
      "The app window is hidden from screen sharing by default. They don't see it. You do.",
  },
  {
    icon: "solar:cpu-bolt-linear",
    title: "Fully offline, if you want",
    detail:
      "Pair with Ollama and nothing touches the network at all. Runs 100% on your Mac.",
  },
  {
    icon: "solar:stars-minimalistic-linear",
    title: "Bring your own LLM",
    detail:
      "Use OpenRouter for GPT-4o, Claude, Gemini — or Ollama for Llama, Qwen, Mistral.",
  },
  {
    icon: "solar:clipboard-text-linear",
    title: "Live dual-speaker transcript",
    detail:
      "See both sides as it happens. Copy the whole thing with one click. Plain text, no lock-in.",
  },
  {
    icon: "solar:folder-with-files-linear",
    title: "Your notes become searchable",
    detail:
      "Point it at a folder of .md or .txt files. It chunks, embeds, and caches locally.",
  },
  {
    icon: "solar:diskette-linear",
    title: "Auto-saved sessions",
    detail:
      "Every conversation becomes a plain-text transcript and structured session log. No manual export.",
  },
];

export function Features() {
  return (
    <section className="relative px-6 sm:px-10 py-28 sm:py-40 border-t border-oat-line">
      <div className="mx-auto max-w-[1200px]">
        <SectionEyebrow label="what else" />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-5 font-display text-[36px] sm:text-[52px] leading-[1.02] tracking-[-0.02em] max-w-[820px]"
        >
          Built by someone who{" "}
          <span className="display-italic text-oat-cream-dim">
            actually hates cloud meeting tools.
          </span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-oat-ink-raised border border-oat-line-strong group-hover:border-oat-amber/30 transition-colors mb-5">
                <Icon
                  icon={f.icon}
                  className="w-5 h-5 text-oat-amber group-hover:text-oat-amber-bright transition-colors"
                />
              </div>
              <h3 className="text-[16.5px] font-medium text-oat-cream mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-oat-cream-dim">
                {f.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
