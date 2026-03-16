import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { CheckCircle, Server, Satellite, Shield, Wifi, FileDown, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Mining & Industrial IT Solutions | NMAS Innovations Africa",
  description:
    "Specialist IT & OT for junior mining. VSAT, 4G/5G, and Microwave failover, SCADA cyber security, and 24/7 remote NOC monitoring across Southern Africa.",
  keywords: [
    "Mining IT solutions Africa",
    "Junior mining connectivity",
    "VSAT failover mining",
    "SCADA security South Africa",
    "Remote mine site monitoring",
    "Industrial OT security",
  ],
  alternates: { canonical: "https://nmas.co.za/mining" },
  openGraph: {
    title: "Mining & Industrial IT Specialists | Cape to Cairo",
    description: "100% uptime commitment with multi-network failover and SCADA security for remote mine sites.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mining IT Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mining IT & OT Solutions",
    description: "Industrial-grade connectivity and security for Africa's harshest environments.",
    images: ["/og-image.png"],
  },
}

const techSpecs = [
  { spec: "Operating Temperature",   value: "-20°C to +70°C" },
  { spec: "Dust & Ingress Rating",   value: "IP65 / IK10" },
  { spec: "Humidity Resistance",     value: "Up to 95% RH non-condensing" },
  { spec: "Vibration Resistance",    value: "MIL-STD-810G compliant" },
  { spec: "Power Input Range",       value: "12V–48V DC / AC universal" },
  { spec: "MTBF Rating",             value: ">100,000 hours" },
  { spec: "Network Ports",           value: "Gigabit copper + SFP fibre" },
  { spec: "Connectivity Support",    value: "VSAT, 4G, 5G, Microwave, MPLS" },
]

const cloudFeatures = [
  "Zero on-site servers – 100% cloud-managed infrastructure",
  "Automated encrypted offsite backups every 15 minutes",
  "Virtualised workloads hosted in SA-based data centres",
  "Disaster recovery with sub-4-hour RTO",
  "Remote desktop access for mine administrators",
  "Full ITIL-aligned change management process",
]

const scadaFeatures = [
  "OT/IT network segmentation and air-gapped controls",
  "Real-time SCADA anomaly detection & alerting",
  "Encrypted tunnels between PLC/DCS and cloud NOC",
  "Compliance-ready logging for audits",
  "Pen-testing and vulnerability assessments",
  "Manufacturer-agnostic: Siemens, Rockwell, Schneider",
]

const connectivityFeatures = [
  "Multi-WAN bonding: VSAT + 4G/5G + LTE simultaneously",
  "Automatic failover in under 30 seconds",
  "SD-WAN traffic shaping for SCADA priority",
  "VPN over all links with AES-256 encryption",
  "Centralised dashboard for real-time link health",
  "SLA-backed 100% uptime commitment",
]

export default function MiningPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1A2F] topo-pattern pt-32 pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(0,204,255,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#00CCFF]/15 border border-[#00CCFF]/30 text-[#00CCFF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Mining & Industrial Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-[family-name:var(--font-outfit)]">
              IT/OT Infrastructure for
              <br />
              <span className="gradient-text">Junior Mine Sites</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Eliminate on-site servers. Bond multiple networks for 100% uptime. Protect your
              SCADA systems from cyber threats — all managed remotely from our 24/7 NOC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="glow-button bg-[#00CCFF] text-[#0A1A2F] font-bold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                Request Consultation <ArrowRight size={16} />
              </Link>
              <Link href="#specs" className="border border-white/30 text-white hover:border-[#00CCFF] hover:text-[#00CCFF] font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
                View Hardware Specs
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Cloud Infrastructure ─────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="cloud-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="left">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Cloud Infrastructure</span>
              <h2 id="cloud-heading" className="text-3xl font-black text-[#0A1A2F] mt-2 mb-5 font-[family-name:var(--font-outfit)]">
                No On-Site Servers. Ever.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                NMAS replaces expensive, failure-prone on-site servers with enterprise-grade cloud
                infrastructure — reducing capital costs, eliminating server room maintenance, and
                giving your team access from anywhere on the continent.
              </p>
              <div className="space-y-3">
                {cloudFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-[#00CCFF] shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-[#0A1A2F] rounded-3xl p-8 text-white">
                <Server size={28} className="text-[#00CCFF] mb-4" />
                <div className="text-lg font-bold mb-3">Architecture Overview</div>
                <div className="space-y-3">
                  {[
                    { label: "Head Office / NOC",         sub: "Fully managed, 24/7 monitoring" },
                    { label: "SA Data Centre Cluster",    sub: "Redundant, encrypted, geo-distributed" },
                    { label: "Mine Site Edge Devices",    sub: "Rugged routers + industrial endpoints" },
                  ].map(({ label, sub }) => (
                    <div key={label} className="bg-white/10 rounded-xl px-4 py-3">
                      <div className="font-semibold text-sm text-[#E0F7FF]">{label}</div>
                      <div className="text-white/50 text-xs mt-0.5">{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OT / SCADA Security ────────────────────────────── */}
      <section className="bg-[#E0F7FF] py-24" aria-labelledby="scada-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="left">
              <div className="bg-[#0A1A2F] rounded-3xl p-8 h-full flex flex-col justify-between">
                <Shield size={28} className="text-[#00CCFF] mb-4" />
                <div className="text-white font-bold text-lg mb-3">Security Posture</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {["Air-Gapped OT","SCADA Monitoring","Zero-Trust Access","Encrypted Tunnels","Audit Logging","Incident Response"].map((t) => (
                    <div key={t} className="bg-white/10 rounded-lg px-3 py-2 text-[#E0F7FF] text-xs font-semibold">
                      ✓ {t}
                    </div>
                  ))}
                </div>
                <div className="text-[#00CCFF] text-xs font-bold uppercase tracking-widest">Compliant with IEC 62443 principles</div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">OT & SCADA Security</span>
              <h2 id="scada-heading" className="text-3xl font-black text-[#0A1A2F] mt-2 mb-5 font-[family-name:var(--font-outfit)]">
                Protect Your Critical Industrial Systems
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                SCADA and industrial control systems are high-value targets. NMAS deploys OT-native
                cyber security — from network segmentation to air-gapped backups — ensuring your
                operations stay safe and operational.
              </p>
              <div className="space-y-3">
                {scadaFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-[#00CCFF] shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Connectivity ─────────────────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="connectivity-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Connectivity</span>
              <h2 id="connectivity-heading" className="text-3xl font-black text-[#0A1A2F] mt-2 font-[family-name:var(--font-outfit)]">
                VSAT + 4G/5G + Microwave Bonding
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                Never lose connectivity again. We bond multiple networks simultaneously so if one fails, your operations continue without interruption.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Wifi,      title: "Microwave / P2P", desc: "High-speed line-of-sight connectivity for remote sites near infrastructure." },
              { Icon: Satellite, title: "VSAT / GEO",    desc: "Proven satellite backbone for ultra-remote operations across Africa." },
              { Icon: Wifi,      title: "4G / 5G LTE",   desc: "Cellular bonding for burst capacity and failover on urban mine sites." },
            ].map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="card-lift bg-[#E0F7FF] rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#00CCFF]/15 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-[#00CCFF]" />
                  </div>
                  <h3 className="text-[#0A1A2F] font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-10 space-y-2.5 max-w-2xl mx-auto">
              {connectivityFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-[#00CCFF] shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Hardware Specs ───────────────────────────────────── */}
      <section id="specs" className="bg-[#0A1A2F] py-24" aria-labelledby="specs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Rugged Hardware</span>
              <h2 id="specs-heading" className="text-3xl font-black text-white mt-2 font-[family-name:var(--font-outfit)]">
                Built for the Bush. Tested for the Mine.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="text-left px-6 py-4 text-[#00CCFF] font-bold uppercase tracking-wide text-xs" scope="col">Specification</th>
                    <th className="text-left px-6 py-4 text-[#00CCFF] font-bold uppercase tracking-wide text-xs" scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecs.map(({ spec, value }, i) => (
                    <tr key={spec} className={i % 2 === 0 ? "bg-white/5" : ""}>
                      <td className="px-6 py-4 text-white/70 font-medium">{spec}</td>
                      <td className="px-6 py-4 text-[#E0F7FF] font-bold">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center mt-8">
              <button className="inline-flex items-center gap-2 border border-[#00CCFF]/50 text-[#00CCFF] hover:bg-[#00CCFF] hover:text-[#0A1A2F] font-bold px-6 py-3 rounded-xl transition-all text-sm">
                <FileDown size={16} /> Download Full Datasheet
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#00CCFF] to-[#0099CC] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1A2F] mb-4 font-[family-name:var(--font-outfit)]">
              Ready to Eliminate On-Site Servers?
            </h2>
            <p className="text-[#0A1A2F]/70 mb-8">
              Book a free 30-minute consultation with our mining IT specialists.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0A1A2F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0A1A2F]/90 transition-colors">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
