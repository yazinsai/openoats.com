import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://openoats.com";
const TITLE = "OpenOats — a meeting note-taker that talks back";
const DESCRIPTION =
  "Real-time meeting copilot for macOS. Transcribes both sides on-device, searches your own notes, and surfaces what's worth saying — right when you need it. Free, open source, MIT.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · OpenOats",
  },
  description: DESCRIPTION,
  applicationName: "OpenOats",
  authors: [{ name: "Yazin Alirhayim", url: "https://github.com/yazinsai" }],
  creator: "Yazin Alirhayim",
  publisher: "OpenOats",
  generator: "Next.js",
  category: "productivity",
  keywords: [
    "meeting notes",
    "meeting copilot",
    "real-time transcription",
    "macOS",
    "on-device speech recognition",
    "AI meeting assistant",
    "private meeting tool",
    "Otter alternative",
    "Fireflies alternative",
    "knowledge base search",
    "RAG",
    "Ollama",
    "OpenRouter",
    "Apple Silicon",
    "Swift",
    "open source",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "OpenOats",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@yazinsai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "OpenOats",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-snow">
        {children}
      </body>
    </html>
  );
}
