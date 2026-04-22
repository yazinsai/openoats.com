"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SectionEyebrow } from "./HowItWorks";
import { Logo } from "./Logo";

export function Privacy() {
  return (
    <section
      id="privacy"
      className="relative px-6 sm:px-10 py-28 sm:py-36 border-t border-line overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionEyebrow label="privacy by default" />
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-sans text-[36px] sm:text-[60px] leading-[1] tracking-[-0.03em] font-semibold"
          >
            Nothing important{" "}
            <span className="accent-italic font-normal text-snow-muted">
              ever leaves your Mac.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[16px] leading-[1.6] text-snow-muted max-w-[520px]"
          >
            Transcription runs locally, full stop. Pair it with{" "}
            <span className="text-snow">Ollama</span> and everything — audio,
            notes, suggestions — stays on your machine. Or bring your own API
            key. Your data, your call.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {PRIVACY_FACTS.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <Icon
                  icon={fact.icon}
                  className="w-4 h-4 text-snow flex-shrink-0 mt-1"
                />
                <div>
                  <div className="text-[14px] font-medium text-snow">
                    {fact.label}
                  </div>
                  <div className="text-[12.5px] text-snow-muted leading-snug mt-0.5">
                    {fact.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <PrivacyDiagram />
        </div>
      </div>
    </section>
  );
}

const PRIVACY_FACTS = [
  {
    icon: "solar:microphone-3-linear",
    label: "Audio stays on device",
    detail: "Apple's on-device Speech framework — always.",
  },
  {
    icon: "solar:key-square-2-linear",
    label: "API keys in your Keychain",
    detail: "Never synced. There is no us, actually.",
  },
  {
    icon: "solar:eye-closed-linear",
    label: "Invisible to screen shares",
    detail: "Hidden from capture by default. Nobody sees it.",
  },
  {
    icon: "solar:code-square-linear",
    label: "Fully open source",
    detail: "MIT license. Read every line. Fork it.",
  },
];

function PrivacyDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/4.4] max-w-[460px] mx-auto"
    >
      {/* outside chips */}
      <div className="absolute top-0 right-2 flex items-center gap-1.5 text-[11px] font-mono text-snow-faint">
        <Icon icon="solar:cloud-cross-linear" className="w-4 h-4" />
        <span>no cloud</span>
      </div>
      <div className="absolute bottom-0 left-2 flex items-center gap-1.5 text-[11px] font-mono text-snow-faint">
        <Icon icon="solar:server-square-cloud-linear" className="w-4 h-4" />
        <span>no server</span>
      </div>

      {/* the mac frame */}
      <div
        className="absolute inset-x-0 top-[8%] bottom-[8%] rounded-2xl"
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 60px 120px -40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-2">
            <Logo size={14} bare />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-snow-faint">
              your mac
            </span>
          </div>
          <span className="text-[10px] font-mono text-snow-faint">offline ✓</span>
        </div>

        <div className="absolute inset-x-6 top-12 bottom-6 flex flex-col justify-between">
          <DiagramNode
            icon="solar:microphone-3-bold-duotone"
            label="audio"
            sub="both speakers · 16khz"
          />
          <VerticalFlow />
          <DiagramNode
            icon="solar:waveform-bold"
            label="local transcription"
            sub="Apple Speech · on-device"
            highlight
          />
          <VerticalFlow />
          <DiagramNode
            icon="solar:notebook-bookmark-bold-duotone"
            label="your notes"
            sub="embedded locally"
          />
        </div>
      </div>
    </motion.div>
  );
}

function DiagramNode({
  icon,
  label,
  sub,
  highlight = false,
}: {
  icon: string;
  label: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-md px-4 py-3"
      style={{
        background: highlight ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${highlight ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <Icon icon={icon} className="w-6 h-6 text-snow flex-shrink-0" />
      <div>
        <div className="text-[13px] font-medium text-snow">{label}</div>
        <div className="text-[11px] text-snow-faint font-mono">{sub}</div>
      </div>
    </div>
  );
}

function VerticalFlow() {
  return (
    <div className="flex flex-col items-center gap-1 py-1">
      <motion.span
        className="w-px h-3 bg-snow/50"
        animate={{ scaleY: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.span
        className="w-px h-3 bg-snow/30"
        animate={{ scaleY: [0.3, 1, 0.3] }}
        transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </div>
  );
}
