import { Icon } from "@iconify/react";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

const LOCAL = [
  ["solar:microphone-3-linear", "Recording", "Two tracks, written to your Mac. No bot joins the call."],
  ["solar:soundwave-linear", "Transcription", "On-device by default. No account, no key, no upload."],
  ["solar:document-text-linear", "Meeting files", "Plain markdown in a folder you choose."],
  ["solar:key-minimalistic-linear", "API keys", "If you add any, they live in the macOS Keychain."],
];

const NOTES = ["Ollama", "LM Studio", "MLX", "llama.cpp", "OpenAI", "OpenRouter", "Requesty", "Anthropic", "Gemini"];
const ASR = ["OpenAI", "Groq", "ElevenLabs", "AssemblyAI", "Gemini", "Your own Whisper server"];

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((x) => (
        <span key={x} className="px-2.5 py-1 rounded-full border border-line bg-paper text-[12.5px] text-ink-2">
          {x}
        </span>
      ))}
    </div>
  );
}

export function Privacy() {
  return (
    <section id="privacy" className="relative px-5 sm:px-10 py-24 sm:py-32 border-t border-line-soft scroll-mt-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow label="Privacy" />
          <SectionTitle muted="AI only if you ask for it.">Private by default.</SectionTitle>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-ink-2">
            Out of the box, your audio and transcripts never leave your Mac. Want Notes written for you? Pick a model
            to write them, on your Mac or in the cloud. It only ever sees text.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal className="rounded-[20px] border border-line bg-paper-2 p-7 sm:p-9">
            <div className="text-[12px] font-mono uppercase tracking-[0.16em] text-moss">On your Mac</div>
            <ul className="mt-6 space-y-5">
              {LOCAL.map(([icon, title, detail]) => (
                <li key={title} className="flex gap-4">
                  <span className="flex-none flex items-center justify-center w-9 h-9 rounded-[10px] bg-moss-tint text-moss">
                    <Icon icon={icon} className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <div className="text-[15.5px] font-semibold text-ink">{title}</div>
                    <div className="mt-0.5 text-[14.5px] leading-[1.55] text-ink-2">{detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="rounded-[20px] border border-line p-7 sm:p-9">
            <div className="text-[12px] font-mono uppercase tracking-[0.16em] text-ink-3">Optional, your choice</div>
            <div className="mt-6">
              <div className="text-[15.5px] font-semibold text-ink">Notes</div>
              <p className="mt-0.5 text-[14.5px] leading-[1.55] text-ink-2">
                A summary, decisions and action items with owners and due dates, written by the model you pick. Local
                models need no key at all.
              </p>
              <Chips items={NOTES} />
            </div>
            <div className="mt-8">
              <div className="text-[15.5px] font-semibold text-ink">Cloud transcription</div>
              <p className="mt-0.5 text-[14.5px] leading-[1.55] text-ink-2">
                Rather use a cloud or self-hosted service? Each track is sent separately, so You and Them stay exact.
              </p>
              <Chips items={ASR} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
