import { FAQ } from "@/lib/faq";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

export function Faq() {
  return (
    <section id="faq" className="relative px-5 sm:px-10 py-24 sm:py-32 border-t border-line-soft scroll-mt-16">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow label="FAQ" />
          <SectionTitle>Questions.</SectionTitle>
        </Reveal>
        <div className="lg:col-span-8 border-t border-line">
          {FAQ.map(({ q, a }, i) => (
            <details key={q} open={i === 0} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer text-[17px] font-semibold text-ink hover:text-moss transition-colors">
                {q}
                <span className="faq-plus flex-none text-[22px] font-normal text-ink-3 transition-transform">+</span>
              </summary>
              <p className="pb-6 pr-10 text-[15.5px] leading-[1.65] text-ink-2">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
