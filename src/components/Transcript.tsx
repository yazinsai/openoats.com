import { Eyebrow, Reveal, SectionTitle } from "./ui";

const POINTS = [
  {
    title: "Whole sentences",
    detail:
      "Each side of the call is transcribed in one pass after you press Stop, not in live chunks. Sentences don't break halfway and less speech goes missing.",
  },
  {
    title: "You and Them, from the audio itself",
    detail:
      "Your mic is You. Your Mac's audio is Them. When your mic picks up the other side through your speakers, the echo is removed.",
  },
  {
    title: "Names spelled right",
    detail:
      "Add names and terms under Vocabulary, and the Notes step fixes their spelling in the Transcript. Everything else stays word for word.",
  },
  {
    title: "Your language",
    detail:
      "Parakeet v3 handles 25 European languages and Whisper large-v3-turbo covers the rest. OpenOats picks from your language setting.",
  },
];

export function Transcript() {
  return (
    <section className="relative px-5 sm:px-10 py-24 sm:py-32 border-t border-line-soft bg-paper-2/60">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <Eyebrow label="The transcript" />
          <SectionTitle>A transcript that reads like the conversation.</SectionTitle>
          <dl className="mt-10 space-y-7">
            {POINTS.map((p) => (
              <div key={p.title} className="pl-5 border-l-2 border-moss/30">
                <dt className="text-[16px] font-semibold text-ink">{p.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-[1.6] text-ink-2">{p.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="shot rounded-[18px] bg-paper border border-line-soft px-4 pt-5 sm:px-10 sm:pt-10 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shots/transcript-turns.webp"
              width={1400}
              height={1440}
              loading="lazy"
              alt="The Transcript of a Meeting file: timestamped turns labelled You and Them"
              className="w-full h-auto"
              style={{ maskImage: "linear-gradient(to bottom, black 78%, transparent)" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
