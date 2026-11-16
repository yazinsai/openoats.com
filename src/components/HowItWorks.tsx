import type { ReactNode } from "react";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

function Shot({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={w} height={h} loading="lazy" className="shot-sm w-[64%] max-w-[270px] h-auto" />
  );
}

function FilePreview() {
  return (
    <div className="shot-sm w-[84%] max-w-[330px] rounded-[12px] bg-paper border border-line text-left overflow-hidden">
      <div className="flex items-center gap-2 px-3.5 h-8 border-b border-line-soft bg-paper-2 text-[11px] font-mono text-ink-3">
        <span className="w-2 h-2 rounded-full bg-line" />
        2026-11-16-1100-spring-launch-plan.md
      </div>
      <pre className="px-4 py-3.5 text-[11.5px] leading-[1.7] font-mono text-ink-2 whitespace-pre-wrap">
        <span className="text-ink-3">---{"\n"}title: &quot;Spring launch plan&quot;{"\n"}duration: 38{"\n"}---</span>
        {"\n"}
        <span className="text-ink font-semibold">## Summary</span>
        {"\n"}Launch moves to March 18…{"\n"}
        <span className="text-ink font-semibold">## Action Items</span>
        {"\n"}- [ ] Send the press list to Priya{"\n"}
        <span className="text-ink font-semibold">## Transcript</span>
        {"\n"}[00:04] <span className="text-moss font-semibold">**You:**</span> Okay, it&apos;s recording.
        {"\n"}[00:13] <span className="text-them font-semibold">**Them:**</span> Same. I looked at…
      </pre>
    </div>
  );
}

const STEPS: { num: string; title: string; detail: ReactNode; visual: ReactNode }[] = [
  {
    num: "01",
    title: "Press Start.",
    detail: (
      <>
        Click the menu bar icon, or press{" "}
        <kbd className="mx-0.5 px-1.5 py-0.5 rounded-md border border-line bg-paper text-[13px] text-ink whitespace-nowrap">⌃⌥⌘R</kbd>{" "}
        from any app.
        OpenOats records your mic and your Mac&rsquo;s audio as two tracks, so it works with Zoom, Google Meet,
        Teams, FaceTime and anything else that plays sound.
      </>
    ),
    visual: (
      <Shot
        src="/shots/panel-idle.webp"
        w={600}
        h={476}
        alt="The OpenOats menu bar panel, ready to record, with a Start Recording button"
      />
    ),
  },
  {
    num: "02",
    title: "Have your meeting.",
    detail: (
      <>
        Nothing is transcribed during the call, so your Mac stays cool and quiet. The panel shows a timer and two
        level meters. That&rsquo;s all there is to watch.
      </>
    ),
    visual: (
      <Shot
        src="/shots/panel-recording.webp"
        w={600}
        h={576}
        alt="The OpenOats menu bar panel while recording, with a timer and a level meter for each track"
      />
    ),
  },
  {
    num: "03",
    title: "Press Stop. Read it.",
    detail: (
      <>
        Each track is transcribed on your Mac, about a minute per hour of audio. One markdown file lands in your
        notes folder, and a notification tells you it&rsquo;s ready.
      </>
    ),
    visual: <FilePreview />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-5 sm:px-10 py-24 sm:py-32 border-t border-line-soft scroll-mt-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow label="How it works" />
          <SectionTitle muted="That's the whole app.">Start, Stop, read.</SectionTitle>
        </Reveal>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08} className="flex flex-col">
              <div className="flex items-center justify-center aspect-[10/9] rounded-[20px] py-8 bg-paper-2 border border-line-soft overflow-hidden">
                {step.visual}
              </div>
              <div className="pt-6 px-1">
                <span className="font-mono text-[12px] tracking-[0.18em] text-ink-3">{step.num}</span>
                <h3 className="mt-2 font-serif text-[24px] leading-snug font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-ink-2">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
