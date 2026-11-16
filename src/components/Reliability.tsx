import { Eyebrow, Reveal, SectionTitle } from "./ui";

const STATS = [
  {
    value: "1.1 s",
    label: "of audio lost in a crash",
    detail:
      "Audio goes to disk every couple of seconds. After a crash, a force quit or a flat battery, the Meeting is recovered the next time OpenOats opens.",
  },
  {
    value: "< 2%",
    label: "of one CPU core while recording",
    detail: "Nothing is transcribed during the call. Speech models load after you press Stop and unload when they're done.",
  },
  {
    value: "19 MB",
    label: "of memory while it waits",
    detail: "OpenOats lives in the menu bar and has no Dock icon unless its window is open.",
  },
  {
    value: "1 min",
    label: "to process an hour of audio",
    detail: "Both tracks are transcribed on your Mac in one pass each. An hour-long meeting took 57 to 76 seconds on an M4.",
  },
];

export function Reliability() {
  return (
    <section id="reliability" className="relative px-5 sm:px-10 py-24 sm:py-32 border-t border-line-soft scroll-mt-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow label="Reliability" />
          <SectionTitle muted="Even when your Mac doesn't.">Built to keep every meeting.</SectionTitle>
          <p className="mt-6 max-w-[620px] text-[17px] leading-[1.6] text-ink-2">
            A meeting recorder has one job. OpenOats does almost nothing while you talk, writes your audio to disk
            as it goes, and does the heavy work once the call is over.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={(i % 4) * 0.06} className="p-7 sm:p-8 border-r border-b border-line">
              <div className="font-serif text-[52px] leading-none font-semibold tracking-[-0.02em] text-moss">
                {s.value}
              </div>
              <div className="mt-3 text-[15px] font-semibold text-ink">{s.label}</div>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-2">{s.detail}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-[12.5px] text-ink-3">
          Measured with the 2.0 release build on a Mac mini with an M4. The 1.1 s comes from killing the recorder
          mid-meeting with <code className="font-mono">kill -9</code>.
        </p>
      </div>
    </section>
  );
}
