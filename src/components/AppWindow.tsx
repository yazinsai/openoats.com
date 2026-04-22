"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useRef, useState } from "react";

type Turn = {
  speaker: "Them" | "You";
  text: string;
  /** ms from timeline start at which this turn should begin appearing */
  at: number;
  /** typing speed in ms/char (only for "You" lines — Them appears in one chunk) */
  typeSpeed?: number;
};

type Suggestion = {
  id: string;
  headline: string;
  detail: string;
  sources: string[];
  /** ms from timeline start */
  at: number;
};

const TURNS: Turn[] = [
  { speaker: "Them", text: "So walk me through the market. How big is this space?", at: 300 },
  {
    speaker: "You",
    text: "The meeting intelligence market hit about $3.2 billion last year. It's growing around 20% annually.",
    at: 2600,
    typeSpeed: 18,
  },
  { speaker: "Them", text: "And everyone already uses Otter or Fireflies. What's the angle here?", at: 8500 },
  {
    speaker: "You",
    text: "Those tools record and summarize after the fact. We surface relevant info from your own notes while you're still talking.",
    at: 11200,
    typeSpeed: 16,
  },
  { speaker: "Them", text: "Interesting. What about privacy though? Our LPs are sensitive about data leaving the device.", at: 18400 },
  {
    speaker: "You",
    text: "That's actually one of our biggest differentiators",
    at: 21800,
    typeSpeed: 22,
  },
];

const SUGGESTIONS: Suggestion[] = [
  {
    id: "s1",
    headline: "Your Series A deck cites TAM of $4.8B by 2027",
    detail: "Bottom-up calc: 40M knowledge workers × $10/mo avg. contract value",
    sources: ["pitch-deck-v3.md", "competitive-analysis.md", "beta-results.md"],
    at: 500,
  },
  {
    id: "s2",
    headline: "Key differentiator: fully local transcription",
    detail: "Otter and Fireflies both send audio to cloud; OpenOats keeps everything on-device",
    sources: ["pitch-deck-v3.md", "competitive-analysis.md", "beta-results.md"],
    at: 500,
  },
  {
    id: "s3",
    headline: "Mention the 3× engagement lift from beta",
    detail: "Beta users logged 3× more follow-up actions vs. their previous meeting tool",
    sources: ["pitch-deck-v3.md", "competitive-analysis.md", "beta-results.md"],
    at: 500,
  },
];

const TIMELINE_END = 26000;

export function AppWindow({ className }: { className?: string }) {
  const [t, setT] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setT(TIMELINE_END);
      return;
    }

    const tick = (now: number) => {
      if (startedAtRef.current === null) startedAtRef.current = now;
      const elapsed = now - startedAtRef.current;
      if (elapsed > TIMELINE_END + 4000) {
        // Restart loop
        startedAtRef.current = now;
        setT(0);
      } else {
        setT(elapsed);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced]);

  const visibleTurns = useMemo(() => {
    return TURNS.map((turn) => {
      if (t < turn.at) return { ...turn, rendered: "" };
      if (turn.speaker === "Them" || !turn.typeSpeed) {
        return { ...turn, rendered: turn.text };
      }
      // typewriter for You
      const chars = Math.floor((t - turn.at) / turn.typeSpeed);
      return {
        ...turn,
        rendered: turn.text.slice(0, Math.min(chars, turn.text.length)),
      };
    }).filter((turn) => t >= turn.at);
  }, [t]);

  const lastTurn = visibleTurns[visibleTurns.length - 1];
  const isTyping =
    lastTurn &&
    lastTurn.speaker === "You" &&
    lastTurn.rendered.length < lastTurn.text.length;

  const suggestionsVisible = t >= 500 && t < TIMELINE_END;
  const kbFlash = t > 200 && t < 900;

  return (
    <div
      className={`relative w-full max-w-[420px] mx-auto ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-12 -z-10 bg-oat-amber/15 blur-3xl rounded-full opacity-60" />

      <div
        className="relative rounded-[22px] overflow-hidden backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,24,19,0.95) 0%, rgba(21,19,15,0.95) 100%)",
          border: "1px solid rgba(236,229,212,0.08)",
          boxShadow:
            "0 60px 120px -30px rgba(0,0,0,0.6), 0 20px 40px -20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(236,229,212,0.06)",
        }}
      >
        {/* Traffic lights + titlebar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-oat-line">
          <div className="flex gap-[6px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center justify-between flex-1 ml-2">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold tracking-tight text-oat-cream">
                OpenOats
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-oat-cream-dimmer">
              <Icon icon="solar:document-text-linear" className="w-3.5 h-3.5" />
              <span>12 files</span>
              <span
                className={`text-oat-amber/80 transition-colors ${
                  kbFlash ? "text-oat-amber-bright" : ""
                }`}
              >
                KB Folder…
              </span>
            </div>
          </div>
        </div>

        {/* Suggestions Panel */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-oat-cream-dimmer">
              Suggestions
            </span>
            <AnimatePresence>
              {kbFlash && (
                <motion.span
                  key="searching"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  className="text-[10px] font-mono text-oat-amber flex items-center gap-1"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-oat-amber animate-pulse" />
                  searching kb…
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div
            className="rounded-xl p-3.5 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(217,155,92,0.06) 0%, rgba(217,155,92,0.02) 100%)",
              border: "1px solid rgba(217,155,92,0.12)",
            }}
          >
            <AnimatePresence>
              {suggestionsVisible &&
                SUGGESTIONS.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: i * 0.25 + 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-2 mb-3 last:mb-0"
                  >
                    <span className="text-oat-amber mt-1.5 text-[6px]">●</span>
                    <div className="flex-1">
                      <div className="text-[13px] leading-snug text-oat-cream font-medium">
                        {s.headline}
                      </div>
                      <div className="text-[11.5px] leading-snug text-oat-cream-dim/80 mt-1">
                        {s.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {suggestionsVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-center gap-1.5 pt-2 mt-1 text-[10px] font-mono text-oat-cream-dimmer border-t border-oat-amber/10"
              >
                <Icon icon="solar:folder-linear" className="w-3 h-3" />
                <span className="truncate">
                  pitch-deck-v3.md <span className="opacity-40">|</span>{" "}
                  competitive-analysis.md <span className="opacity-40">|</span>{" "}
                  beta-results.md
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Transcript */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Icon
              icon="solar:alt-arrow-down-linear"
              className="w-3 h-3 text-oat-cream-dimmer"
            />
            <span className="text-[11px] font-medium text-oat-cream-dim">
              Transcript
            </span>
            <span className="text-[11px] text-oat-cream-dimmer">
              ({visibleTurns.length})
            </span>
          </div>

          <div className="space-y-2.5 min-h-[240px]">
            {visibleTurns.map((turn, i) => (
              <TurnRow
                key={i}
                turn={turn}
                isTyping={isTyping && i === visibleTurns.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-oat-line bg-oat-ink-soft/60">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-oat-moss">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-oat-moss" />
              Live
            </span>
            <MiniBars />
          </div>
          <span className="text-[10.5px] font-mono text-oat-cream-dimmer bg-oat-ink-raised/80 px-2 py-0.5 rounded-md">
            gemini-2.5-flash
          </span>
        </div>
      </div>
    </div>
  );
}

function TurnRow({
  turn,
  isTyping,
}: {
  turn: { speaker: "Them" | "You"; text: string; rendered: string };
  isTyping: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-2.5 text-[13px] leading-snug"
    >
      <span
        className={`flex-none w-10 text-[11px] font-semibold font-mono uppercase tracking-wider pt-0.5 ${
          turn.speaker === "Them" ? "text-oat-amber" : "text-oat-cream-dim"
        }`}
      >
        {turn.speaker}
      </span>
      <span
        className={`flex-1 ${
          turn.speaker === "Them" ? "text-oat-cream" : "text-oat-cream-dim"
        } ${isTyping ? "caret" : ""}`}
      >
        {turn.rendered}
      </span>
    </motion.div>
  );
}

function MiniBars() {
  return (
    <div className="flex items-end gap-[2px] h-3">
      {[0.3, 0.9, 0.5, 1, 0.7, 0.4, 0.8, 0.5].map((h, i) => (
        <motion.span
          key={i}
          className="w-[2px] bg-oat-cream-dim/60 rounded-full"
          animate={{
            scaleY: [h, h * 0.4, h * 1.1, h * 0.6, h],
          }}
          transition={{
            duration: 1.2 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
          style={{ height: `${h * 100}%`, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}
