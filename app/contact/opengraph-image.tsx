import { ImageResponse } from "next/og"
export const runtime = "edge"
export const alt = "NMAS Contact & 24/7 Emergency IT Support"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function ContactOGImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#0A1A2F", padding: "60px 72px", fontFamily: "'Inter', sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg, #00CCFF, #0099CC)" }} />
      <div style={{ fontSize: 64, marginBottom: 28 }}>📞</div>
      <div style={{ color: "#00CCFF", fontSize: 15, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>24/7 Emergency Support</div>
      <div style={{ color: "#ffffff", fontSize: 52, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, marginBottom: 24 }}>Get in Touch With NMAS</div>
      <div style={{ color: "rgba(255,255,255,0.60)", fontSize: 26, fontWeight: 700, marginBottom: 12 }}>+27 67 487 7278</div>
      <div style={{ color: "rgba(255,255,255,0.50)", fontSize: 20, maxWidth: 680, lineHeight: 1.5 }}>info@nmas.co.za · South Africa · Always on call</div>
      <div style={{ position: "absolute", bottom: 48, left: 72, right: 72, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24 }}>
        <span style={{ color: "#00CCFF", fontWeight: 700, fontSize: 16 }}>NMAS Innovations</span>
        <span style={{ color: "rgba(255,255,255,0.40)", fontSize: 14 }}>nmas.co.za/contact</span>
      </div>
    </div>,
    size,
  )
}
