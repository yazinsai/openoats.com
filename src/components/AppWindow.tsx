"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Logo } from "./Logo";

type Turn = {
  speaker: "Them" | "You";
  text: string;
  at: number;
  typeSpeed?: number;
};

type Suggestion = {
  id: string;
  headline: string;
  detail: string;
  sources: string[];
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
  },
  {
    id: "s2",
    headline: "Key differentiator: fully local transcription",
    detail: "Otter and Fireflies both send audio to cloud; OpenOats keeps everything on-device",
    sources: ["pitch-deck-v3.md", "competitive-analysis.md", "beta-results.md"],
  },
  {
    id: "s3",
    headline: "Mention the 3× engagement lift from beta",
    detail: "Beta users logged 3× more follow-up actions vs. their previous meeting tool",
    sources: ["pitch-deck-v3.md", "competitive-analysis.md", "beta-results.md"],
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
      {/* faint cool glow */}
      <div className="absolute -inset-12 -z-10 bg-snow/[0.04] blur-3xl rounded-full" />

      <div
        className="relative rounded-[14px] overflow-hidden"
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 60px 120px -30px rgba(0,0,0,0.8), 0 20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* titlebar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
          <div className="flex gap-[6px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center justify-between flex-1 ml-2">
            <div className="flex items-center gap-1.5">
              <Logo size={13} bare />
              <span className="text-[13px] font-semibold tracking-tight text-snow">
                OpenOats
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-snow-faint">
              <Icon icon="solar:document-text-linear" className="w-3.5 h-3.5" />
              <span>12 files</span>
              <span
                className={`transition-colors ${
                  kbFlash ? "text-snow" : "text-snow-muted"
                }`}
              >
                KB Folder…
              </span>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-snow-faint">
              Suggestions
            </span>
            <AnimatePresence>
              {kbFlash && (
                <motion.span
                  key="searching"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  className="text-[10px] font-mono text-snow-muted flex items-center gap-1"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-snow animate-pulse" />
                  searching kb…
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div
            className="rounded-md p-3.5 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
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
                    <span className="text-snow mt-1.5 text-[6px]">●</span>
                    <div className="flex-1">
                      <div className="text-[13px] leading-snug text-snow font-medium">
                        {s.headline}
                      </div>
                      <div className="text-[11.5px] leading-snug text-snow-muted mt-1">
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
                className="flex items-center gap-1.5 pt-2 mt-1 text-[10px] font-mono text-snow-faint border-t border-line"
              >
                <Icon icon="solar:folder-linear" className="w-3 h-3" />
                <span className="truncate">
                  pitch-deck-v3.md <span className="opacity-40">·</span>{" "}
                  competitive-analysis.md <span className="opacity-40">·</span>{" "}
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
              className="w-3 h-3 text-snow-faint"
            />
            <span className="text-[11px] font-medium text-snow-muted">
              Transcript
            </span>
            <span className="text-[11px] text-snow-faint">
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
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-line bg-ink-soft">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-snow">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-snow" />
              Live
            </span>
            <MiniBars />
          </div>
          <span className="text-[10.5px] font-mono text-snow-faint bg-ink-elevated px-2 py-0.5 rounded">
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
          turn.speaker === "Them" ? "text-snow" : "text-snow-mute-2"
        }`}
      >
        {turn.speaker}
      </span>
      <span
        className={`flex-1 ${
          turn.speaker === "Them" ? "text-snow" : "text-snow-muted"
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
          className="w-[2px] bg-snow-muted/60 rounded-full"
          animate={{ scaleY: [h, h * 0.4, h * 1.1, h * 0.6, h] }}
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
