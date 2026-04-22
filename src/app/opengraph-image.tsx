import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "OpenOats — a meeting note-taker that talks back";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(filename: string) {
  const fontPath = path.join(process.cwd(), "src/app/_fonts", filename);
  const buf = await readFile(fontPath);
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

export default async function OG() {
  const [regular, semibold] = await Promise.all([
    loadFont("Geist-Regular.ttf"),
    loadFont("Geist-SemiBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "Geist",
          padding: 80,
          position: "relative",
        }}
      >
        {/* dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            opacity: 0.6,
            display: "flex",
          }}
        />

        {/* faint glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)",
            display: "flex",
          }}
        />

        {/* top: brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="14" fill="#ffffff" />
            <circle cx="32" cy="32" r="20" stroke="#000" strokeWidth="5" fill="none" />
            <circle cx="32" cy="32" r="11" stroke="#000" strokeWidth="4" fill="none" />
            <circle cx="32" cy="32" r="4" fill="#000" />
          </svg>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            OpenOats
          </div>
        </div>

        {/* center: headline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginTop: 90,
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 0.96,
            }}
          >
            A meeting note-taker
          </div>
          <div
            style={{
              fontSize: 96,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 0.96,
              color: "#a1a1aa",
            }}
          >
            that talks back.
          </div>
        </div>

        {/* bottom: meta strip */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span style={{ color: "#ffffff" }}>openoats.com</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>macOS · Apple Silicon</span>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span>Free · Open source · MIT</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
      ],
    }
  );
}
