/* ─────────────────────────────────────────────────────────────────────────
   app/opengraph-image.tsx
   Phase 2 – Root OG image generated at the Edge via Next.js ImageResponse.
   Size: 1200×630 (standard OG). Rendered from JSX → PNG on demand.
───────────────────────────────────────────────────────────────────────── */

import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt     = "NMAS Innovations – Mining IT & OT Specialists"
export const size    = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A1A2F",
          padding: "60px 72px",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
        }}
      >
        {/* Grid dots overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(0,204,255,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #00CCFF, #0099CC)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(135deg, #00CCFF, #0099CC)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0A1A2F",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontWeight: 900, fontSize: 22, lineHeight: 1 }}>
              NMAS Innovations
            </span>
            <span style={{ color: "#00CCFF", fontSize: 13, marginTop: 3 }}>
              Mining IT & OT Specialists
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#00CCFF",
              fontSize: 16,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 18,
            }}
          >
            First in Africa · Full Multi-Language Industrial Support
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 780,
            }}
          >
            Empower Your Business Across Africa
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 22,
              marginTop: 20,
              maxWidth: 680,
              lineHeight: 1.5,
            }}
          >
            Cloud infrastructure · VSAT/4G/5G · SCADA security · 24/7 NOC
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
            nmas.co.za
          </span>
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {["Cloud", "SCADA", "Connectivity", "24/7 NOC"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(0,204,255,0.15)",
                  border: "1px solid rgba(0,204,255,0.3)",
                  color: "#00CCFF",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
