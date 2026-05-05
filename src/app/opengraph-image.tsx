import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #121826 0%, #1d4ed8 45%, #22d3ee 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 2, opacity: 0.9 }}>
          WEBBPORTFOLIO 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
            Eleonora Nocentini
            <br />
            Sköldebrink
          </div>
          <div style={{ fontSize: 34, opacity: 0.92 }}>
            Tydlig design. Modern frontend. Affärsnytta.
          </div>
        </div>

        <div style={{ fontSize: 28, opacity: 0.88 }}>
          eleonora-portfolio.netlify.app
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
