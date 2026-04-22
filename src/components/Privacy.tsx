"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SectionEyebrow } from "./HowItWorks";

export function Privacy() {
  return (
    <section
      id="privacy"
      className="relative px-6 sm:px-10 py-28 sm:py-40 border-t border-oat-line overflow-hidden"
    >
      {/* warm spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(217, 155, 92, 0.08), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionEyebrow label="privacy by default" />
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-5 font-display text-[36px] sm:text-[56px] leading-[1.02] tracking-[-0.02em]"
          >
            Nothing important{" "}
            <span className="display-italic text-oat-amber-bright">
              ever leaves your Mac.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[16px] leading-[1.6] text-oat-cream-dim max-w-[520px]"
          >
            Transcription runs locally, full stop. Pair it with{" "}
            <span className="text-oat-cream">Ollama</span> and everything — audio,
            notes, suggestions — stays on your machine. Or bring your own API key.
            Your data, your call.
          </motion.p>

          <div className="mt-10 space-y-4">
            {PRIVACY_FACTS.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <Icon
                  icon={fact.icon}
                  className="w-5 h-5 text-oat-moss flex-shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-[14.5px] font-medium text-oat-cream">
                    {fact.label}
                  </div>
                  <div className="text-[13px] text-oat-cream-dim/80 leading-snug">
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
    detail: "Speech recognition via Apple's on-device Speech framework — always.",
  },
  {
    icon: "solar:key-square-2-linear",
    label: "API keys in your Keychain",
    detail: "Never synced, never proxied through us. There is no us, actually.",
  },
  {
    icon: "solar:eye-closed-linear",
    label: "Invisible to screen shares",
    detail: "The window is hidden from capture by default, so nobody sees it.",
  },
  {
    icon: "solar:code-square-linear",
    label: "Fully open source",
    detail: "MIT license. Read every line. Fork it. Run your own.",
  },
];

function PrivacyDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/5] max-w-[440px] mx-auto"
    >
      {/* Mac silhouette box */}
      <div
        className="absolute inset-x-0 top-[10%] bottom-[10%] rounded-3xl border border-oat-line-strong"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,19,15,0.9) 0%, rgba(13,12,10,0.9) 100%)",
          boxShadow:
            "0 60px 120px -40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(236,229,212,0.04)",
        }}
      >
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.2em] text-oat-cream-dimmer">
          your mac
        </div>

        {/* Inside: audio → transcription → suggestions loop */}
        <div className="absolute inset-x-8 top-16 bottom-16 flex flex-col justify-between">
          <DiagramNode
            icon="solar:microphone-3-bold-duotone"
            label="audio"
            sub="both speakers"
            color="oat-amber"
          />
          <VerticalFlow />
          <DiagramNode
            icon="solar:brain-bold-duotone"
            label="local transcription"
            sub="Apple Speech · on-device"
            color="oat-cream"
          />
          <VerticalFlow />
          <DiagramNode
            icon="solar:notebook-bookmark-bold-duotone"
            label="your notes"
            sub="embedded locally"
            color="oat-moss"
          />
        </div>

        {/* corners */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-oat-amber/40 -translate-x-[1px] -translate-y-[1px] rounded-tl-3xl" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-oat-amber/40 translate-x-[1px] -translate-y-[1px] rounded-tr-3xl" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-oat-amber/40 -translate-x-[1px] translate-y-[1px] rounded-bl-3xl" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-oat-amber/40 translate-x-[1px] translate-y-[1px] rounded-br-3xl" />
      </div>

      {/* Outside: cloud crossed out */}
      <div className="absolute top-0 right-4 flex items-center gap-2 text-[11px] font-mono text-oat-cream-dimmer">
        <Icon icon="solar:cloud-cross-linear" className="w-5 h-5" />
        <span>no cloud</span>
      </div>
      <div className="absolute bottom-0 left-4 flex items-center gap-2 text-[11px] font-mono text-oat-cream-dimmer">
        <Icon icon="solar:server-square-cloud-linear" className="w-5 h-5" />
        <span>no server</span>
      </div>
    </motion.div>
  );
}

function DiagramNode({
  icon,
  label,
  sub,
  color,
}: {
  icon: string;
  label: string;
  sub: string;
  color: "oat-amber" | "oat-cream" | "oat-moss";
}) {
  const colorClass = {
    "oat-amber": "text-oat-amber",
    "oat-cream": "text-oat-cream",
    "oat-moss": "text-oat-moss",
  }[color];
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3"
      style={{
        background: "rgba(236,229,212,0.03)",
        border: "1px solid rgba(236,229,212,0.08)",
      }}
    >
      <Icon icon={icon} className={`w-7 h-7 ${colorClass} flex-shrink-0`} />
      <div>
        <div className={`text-[13px] font-medium ${colorClass}`}>{label}</div>
        <div className="text-[11px] text-oat-cream-dimmer font-mono">{sub}</div>
      </div>
    </div>
  );
}

function VerticalFlow() {
  return (
    <div className="flex flex-col items-center gap-1 py-1">
      <motion.span
        className="w-px h-3 bg-oat-amber/50"
        animate={{ scaleY: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
      <motion.span
        className="w-px h-3 bg-oat-amber/30"
        animate={{ scaleY: [0.3, 1, 0.3] }}
        transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </div>
  );
}
