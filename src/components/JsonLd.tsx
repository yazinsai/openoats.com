type Props = {
  version?: string | null;
};

export function JsonLd({ version }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://openoats.com/#app",
        name: "OpenOats",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "macOS 15",
        url: "https://openoats.com",
        downloadUrl:
          "https://github.com/yazinsai/OpenOats/releases/latest",
        softwareVersion: version ?? undefined,
        description:
          "Real-time meeting copilot for macOS. Transcribes both sides of your call on-device, retrieves context from your own notes, and surfaces relevant talking points in real time.",
        license: "https://opensource.org/licenses/MIT",
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
          "On-device speech recognition",
          "Real-time dual-speaker transcript",
          "Knowledge base search via embeddings",
          "Bring your own LLM (OpenRouter or Ollama)",
          "Hidden from screen sharing by default",
          "Auto-saved sessions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://openoats.com/#website",
        url: "https://openoats.com",
        name: "OpenOats",
        description:
          "A meeting note-taker that talks back. Real-time copilot for macOS.",
        publisher: {
          "@type": "Person",
          name: "Yazin Alirhayim",
          url: "https://github.com/yazinsai",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://openoats.com/#org",
        name: "OpenOats",
        url: "https://openoats.com",
        logo: "https://openoats.com/icon.png",
        sameAs: ["https://github.com/yazinsai/OpenOats"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
