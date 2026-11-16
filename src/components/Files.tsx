import { Eyebrow, Reveal, SectionTitle } from "./ui";

export function Files() {
  return (
    <section className="relative px-5 sm:px-10 py-24 sm:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <Reveal className="lg:col-span-5 lg:order-2">
          <Eyebrow label="Your files" />
          <SectionTitle>One markdown file per meeting. Yours.</SectionTitle>
          <p className="mt-6 text-[16.5px] leading-[1.6] text-ink-2">
            Every Meeting becomes a plain <code className="font-mono text-[14.5px] text-ink">.md</code> file in a
            folder you pick. Open it in Obsidian, your editor or anything that reads text. Action items carry
            Dataview fields, so owners and due dates are queryable.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.6] text-ink-2">
            Drop an audio file on the window to process it like a Meeting. Prefer the terminal? The app ships
            with <code className="font-mono text-[14.5px] text-ink">oats</code>, which turns audio into a Meeting
            file from the command line.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7 lg:order-1">
          <div className="shot rounded-[16px] bg-[#1f1d1a] text-[#e9e4dc] overflow-hidden">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10 text-[12px] font-mono text-white/45">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="ml-3 truncate">~/Documents/OpenOats/2026-11-16-1100-spring-launch-plan.md</span>
            </div>
            <pre className="p-5 sm:p-7 text-[12px] sm:text-[13px] leading-[1.75] font-mono whitespace-pre-wrap overflow-x-auto">
              <span className="text-white/40">
                {`---
schema: openoats/v1
title: "Spring launch plan"
date: 2026-11-16T11:00:00+03:00
duration: 38
participants:
  - You
  - Them
engine: parakeet-tdt-v3
---`}
              </span>
              {"\n\n"}
              <span className="text-white font-semibold"># Spring launch plan</span>
              {"\n\n"}
              <span className="text-[#9fd3b6]">## Decisions</span>
              {"\n\n- Launch on Tuesday, March 18\n- Waitlist gets pricing on March 11\n\n"}
              <span className="text-[#9fd3b6]">## Action Items</span>
              {"\n\n- [ ] Send the press list to Priya "}
              <span className="text-white/45">[owner:: You] [due:: 2026-11-18]</span>
              {"\n- [ ] Draft the waitlist email "}
              <span className="text-white/45">[owner:: Them] [due:: 2026-11-20]</span>
              {"\n\n"}
              <span className="text-[#9fd3b6]">## Transcript</span>
              {"\n\n[00:00:04] "}
              <span className="text-[#9fd3b6]">**You:**</span>
              {" Okay, it's recording. Thanks for making time.\n\n[00:00:13] "}
              <span className="text-[#a9bdf0]">**Them:**</span>
              {" Same. I looked at the QA board this morning."}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
