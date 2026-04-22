import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenOats — a meeting note-taker that talks back",
  description:
    "Real-time meeting copilot for macOS. Transcribes locally, retrieves from your notes, and surfaces what's worth saying — right when you need it.",
  metadataBase: new URL("https://openoats.com"),
  openGraph: {
    title: "OpenOats — a meeting note-taker that talks back",
    description:
      "Real-time meeting copilot for macOS. Transcribes locally, retrieves from your notes, and surfaces what's worth saying — right when you need it.",
    url: "https://openoats.com",
    siteName: "OpenOats",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-oat-ink text-oat-cream">
        {children}
      </body>
    </html>
  );
}
