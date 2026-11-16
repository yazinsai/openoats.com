import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { PITCH, SITE_URL, TITLE } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const DESCRIPTION = PITCH;

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
    "meeting recorder",
    "meeting notes",
    "meeting transcription",
    "Mac meeting recorder",
    "macOS",
    "on-device transcription",
    "private meeting notes",
    "markdown meeting notes",
    "Obsidian",
    "Parakeet",
    "Whisper",
    "Ollama",
    "Apple Silicon",
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
    statusBarStyle: "default",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfcfa",
  colorScheme: "light",
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
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
