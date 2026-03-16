import dynamic from "next/dynamic"
import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"

/* ── Phase 1: Dynamic imports for all below-fold sections ───────────────────
   Lazy-loading everything below the hero reduces the initial JS bundle,
   improving LCP and TTI. Each section uses `loading="lazy"` skeleton.
─────────────────────────────────────────────────────────────────────────── */
const TrustBar = dynamic(() => import("@/components/sections/TrustBar"), {
  ssr: true,        // keep SSR for content discoverability
})
const CapabilitiesGrid = dynamic(() => import("@/components/sections/CapabilitiesGrid"), {
  ssr: true,
})
const MiningSpotlight = dynamic(() => import("@/components/sections/MiningSpotlight"), {
  ssr: true,
})
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  ssr: true,
})
const TrustSignals = dynamic(() => import("@/components/sections/TrustSignals"), {
  ssr: true,
})
const AboutSnapshot = dynamic(() => import("@/components/sections/AboutSnapshot"), {
  ssr: true,
})
const LeadershipTeaser = dynamic(() => import("@/components/sections/LeadershipTeaser"), {
  ssr: true,
})
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  ssr: true,
})

export const metadata: Metadata = {
  title: "NMAS Innovations | Mining IT & OT Specialists – Cape to Cairo",
  description:
    "NMAS Innovations: South Africa's #1 Junior Mining IT & OT specialist. Cloud infrastructure, VSAT/4G failover, SCADA cyber security, 24/7 NOC. From Cape to Cairo.",
  alternates: { canonical: "https://nmas.co.za" },
  openGraph: {
    title: "NMAS Innovations | Mining IT & OT Specialists – Cape to Cairo",
    description:
      "First IT company in Africa with full multi-language industrial support. Mining-grade reliability from Cape to Cairo.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      {/* LCP element – rendered eagerly, all below-fold sections lazy-load */}
      <HeroSection />
      <TrustBar />
      <CapabilitiesGrid />
      <MiningSpotlight />
      <ServicesSection />
      {/* Phase 5: Trust signals injected before testimonials */}
      <TrustSignals />
      <AboutSnapshot />
      <LeadershipTeaser />
      <TestimonialsSection />
    </>
  )
}
