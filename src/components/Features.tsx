"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SectionEyebrow } from "./HowItWorks";

const FEATURES = [
  {
    icon: "solar:ghost-linear",
    title: "Invisible to the other side",
    detail: "The window is hidden from screen sharing by default. They don't see it. You do.",
  },
  {
    icon: "solar:cpu-bolt-linear",
    title: "Fully offline, if you want",
    detail: "Pair with Ollama and nothing touches the network. Runs 100% on your Mac.",
  },
  {
    icon: "solar:stars-minimalistic-linear",
    title: "Bring your own LLM",
    detail: "OpenRouter for GPT-4o, Claude, Gemini — or Ollama for Llama, Qwen, Mistral.",
  },
  {
    icon: "solar:clipboard-text-linear",
    title: "Live dual-speaker transcript",
    detail: "See both sides as it happens. Copy with one click. Plain text, no lock-in.",
  },
  {
    icon: "solar:folder-with-files-linear",
    title: "Your notes, searchable",
    detail: "Point it at a folder of .md or .txt files. It chunks, embeds, caches locally.",
  },
  {
    icon: "solar:diskette-linear",
    title: "Auto-saved sessions",
    detail: "Every conversation becomes a plain-text transcript and structured log.",
  },
];

export function Features() {
  return (
    <section className="relative px-6 sm:px-10 py-28 sm:py-36 border-t border-line">
      <div className="mx-auto max-w-[1280px]">
        <SectionEyebrow label="what else" />
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 font-sans text-[36px] sm:text-[56px] leading-[1.02] tracking-[-0.03em] max-w-[820px] font-semibold"
        >
          Built by someone who{" "}
          <span className="accent-italic font-normal text-snow-muted">
            actually hates cloud meeting tools.
          </span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group p-7 border-r border-b border-line relative"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md border border-line-strong bg-ink-soft group-hover:border-line-bright transition-colors mb-5">
                <Icon
                  icon={f.icon}
                  className="w-4.5 h-4.5 text-snow"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-snow mb-1.5 tracking-tight">
                {f.title}
              </h3>
              <p className="text-[13.5px] leading-[1.55] text-snow-muted">
                {f.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
