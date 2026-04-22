import type { Metadata } from "next";
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
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-snow">
        {children}
      </body>
    </html>
  );
}
