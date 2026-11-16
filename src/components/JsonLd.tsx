import { FAQ } from "@/lib/faq";
import { DMG_URL, PITCH, REPO_URL, SITE_URL } from "@/lib/site";

type Props = {
  version?: string | null;
};

export function JsonLd({ version }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "OpenOats",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Meeting recorder",
        operatingSystem: "macOS 14.2 or later (Apple Silicon)",
        url: SITE_URL,
        downloadUrl: DMG_URL,
        installUrl: DMG_URL,
        softwareVersion: version?.replace(/^v/, "") ?? undefined,
        description: PITCH,
        screenshot: `${SITE_URL}/shots/window-notes.webp`,
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        author: {
          "@type": "Person",
          name: "Yazin Alirhayim",
          url: "https://github.com/yazinsai",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Records your microphone and your Mac's audio as two tracks",
          "Works with any meeting app, no bot joins the call",
          "On-device transcription after the call (Parakeet v3, Whisper large-v3-turbo)",
          "One markdown file per meeting: Notes and a You/Them transcript",
          "Crash-safe recording, recovered on next launch",
          "Optional Notes from local or cloud models (Ollama, LM Studio, OpenAI, OpenRouter, Anthropic, Gemini)",
          "Optional cloud transcription",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "OpenOats",
        description: PITCH,
        publisher: {
          "@type": "Person",
          name: "Yazin Alirhayim",
          url: "https://github.com/yazinsai",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "OpenOats",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        sameAs: [REPO_URL],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
