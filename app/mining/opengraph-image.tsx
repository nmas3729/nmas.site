/* ─────────────────────────────────────────────────────────────────────────
   app/mining/opengraph-image.tsx
   Phase 2 – Mining Solutions page OG image (Edge runtime).
───────────────────────────────────────────────────────────────────────── */

import { ImageResponse } from "next/og"

export const runtime     = "edge"
export const alt         = "NMAS Mining & Industrial IT Solutions"
export const size        = { width: 1200, height: 630 }
export const contentType = "image/png"

const ICON = "⛏️"

export default function MiningOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0A1A2F 0%, #0d2340 100%)",
          padding: "60px 72px",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 6,
            background: "linear-gradient(90deg, #00CCFF, #0099CC)",
          }}
        />

        {/* Emoji icon */}
        <div style={{ fontSize: 64, marginBottom: 32 }}>{ICON}</div>

        {/* Label */}
        <div style={{ color: "#00CCFF", fontSize: 15, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>
          Junior Mining IT &amp; OT Specialists
        </div>

        {/* Title */}
        <div style={{ color: "#ffffff", fontSize: 52, fontWeight: 900, lineHeight: 1.1, maxWidth: 780, marginBottom: 24 }}>
          Mining-Grade Infrastructure for Africa's Harshest Environments
        </div>

        {/* Description */}
        <div style={{ color: "rgba(255,255,255,0.60)", fontSize: 22, maxWidth: 680, lineHeight: 1.5 }}>
          VSAT/4G/5G bonding · Cloud servers · SCADA security · 24/7 NOC
        </div>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: 48, left: 72, right: 72, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24 }}>
          <span style={{ color: "#00CCFF", fontWeight: 700, fontSize: 16 }}>NMAS Innovations</span>
          <span style={{ color: "rgba(255,255,255,0.40)", fontSize: 14 }}>nmas.co.za/mining</span>
        </div>
      </div>
    ),
    size,
  )
}
