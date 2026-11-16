import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "OpenOats: Press Start. Forget it's running. A minimal meeting recorder for Mac.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dir = path.join(process.cwd(), "src/app");

async function font(file: string) {
  const buf = await readFile(path.join(dir, "_fonts", file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

export default async function OG() {
  const [regular, semibold, serif, serifItalic, shot] = await Promise.all([
    font("Geist-Regular.ttf"),
    font("Geist-SemiBold.ttf"),
    font("Newsreader-SemiBold.ttf"),
    font("Newsreader-Italic.ttf"),
    readFile(path.join(dir, "_og/window.png")),
  ]);
  const shotSrc = `data:image/png;base64,${shot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(160deg, #fcfcfa 0%, #f2eee6 100%)",
          color: "#221f1b",
          fontFamily: "Geist",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shotSrc}
          width={760}
          height={532}
          alt=""
          style={{
            position: "absolute",
            left: 610,
            top: 140,
            borderRadius: 14,
            boxShadow: "0 30px 60px rgba(40,30,10,0.22), 0 0 0 1px rgba(40,30,10,0.08)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", padding: "72px 0 0 76px", width: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="14" fill="#000000" />
              <circle cx="32" cy="32" r="20" stroke="#fff" strokeWidth="5" fill="none" />
              <circle cx="32" cy="32" r="11" stroke="#fff" strokeWidth="4" fill="none" />
              <circle cx="32" cy="32" r="4" fill="#fff" />
            </svg>
            <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em" }}>OpenOats</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 64 }}>
            <div style={{ fontFamily: "Newsreader", fontWeight: 600, fontSize: 62, lineHeight: 1, letterSpacing: "-0.02em" }}>
              Press Start.
            </div>
            <div
              style={{
                fontFamily: "Newsreader",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 62,
                lineHeight: 1.1,
                color: "#5d5751",
                letterSpacing: "-0.02em",
              }}
            >
              Forget it&rsquo;s running.
            </div>
          </div>

          <div style={{ marginTop: 30, fontSize: 24, lineHeight: 1.4, color: "#5d5751", display: "flex", width: 520 }}>
            A minimal meeting recorder for Mac. One markdown file per meeting.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 76,
            bottom: 56,
            display: "flex",
            gap: 14,
            alignItems: "center",
            fontSize: 20,
            color: "#69635d",
          }}
        >
          <span style={{ color: "#2b6449", fontWeight: 600 }}>openoats.com</span>
          <span>·</span>
          <span>Free · Open source · On your Mac</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Newsreader", data: serif, weight: 600, style: "normal" },
        { name: "Newsreader", data: serifItalic, weight: 400, style: "italic" },
      ],
    }
  );
}
