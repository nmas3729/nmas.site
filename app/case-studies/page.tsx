import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { ArrowRight } from "lucide-react"
import CaseStudyCards from "@/components/sections/CaseStudyCards"

export const metadata: Metadata = {
  title: "Client Case Studies & Mining IT Results | NMAS Innovations",
  description:
    "Proven results in Africa's harshest environments. See how NMAS delivered 100% uptime, SCADA security, and cloud transformation for junior mining operations.",
  keywords: [
    "Mining case studies",
    "IT project results Africa",
    "SCADA security implementation",
    "Remote connectivity success",
    "NMAS project portfolio",
  ],
  alternates: { canonical: "https://nmas.co.za/case-studies" },
  openGraph: {
    title: "NMAS Impact: Mining & Business Case Studies",
    description: "Explore our track record of delivering 99.9% uptime and industrial-grade security in the field.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NMAS Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMAS Success Stories",
    description: "How we solve complex connectivity and security challenges for African industry.",
    images: ["/og-image.png"],
  },
}

const caseStudies = [
  {
    industry: "Mining",
    title: "100% Uptime for Northern Cape Mine",
    challenge: "A junior mining operation experienced frequent connectivity outages that halted operations and cost thousands per hour.",
    solution:  "NMAS deployed VSAT + 4G LTE bonding with automatic failover, replaced on-site servers with cloud infrastructure, and set up 24/7 NOC monitoring.",
    results: [
      { metric: "99.9%",   label: "Reduction in downtime"   },
      { metric: "<30s",    label: "Failover switch time"     },
      { metric: "R0",      label: "Server hardware costs"   },
    ],
    tags: ["Mining", "Connectivity", "Cloud"],
    color: "from-[#0A1A2F] to-[#0099CC]",
  },
  {
    industry: "Corporate",
    title: "Cloud Migration for Cape Town SME",
    challenge: "A mid-sized Cape Town business ran aging on-premise servers prone to failure, with no backup strategy and no remote access for staff.",
    solution:  "NMAS executed a zero-downtime migration to Microsoft 365, set up automated cloud backups, and deployed MDM for remote teams.",
    results: [
      { metric: "0",       label: "Minutes of downtime"    },
      { metric: "3x",      label: "Faster file access"     },
      { metric: "100%",    label: "Remote workforce ready" },
    ],
    tags: ["Cloud", "Microsoft 365", "SME"],
    color: "from-violet-600 to-purple-500",
  },
  {
    industry: "Residential",
    title: "Smart Home Security — Johannesburg",
    challenge: "A Johannesburg homeowner needed CCTV, access control, and network security after a neighbourhood burglary.",
    solution:  "NMAS installed HD CCTV cameras, configured remote viewing, set up a secured Wi-Fi network with threat monitoring.",
    results: [
      { metric: "24/7",    label: "Live camera monitoring" },
      { metric: "100%",    label: "Network threat coverage"},
      { metric: "1-Day",   label: "Installation complete"  },
    ],
    tags: ["Residential", "CCTV", "Security"],
    color: "from-emerald-600 to-teal-500",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1A2F] topo-pattern pt-32 pb-20 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 50%, rgba(0,204,255,0.07) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#00CCFF]/15 border border-[#00CCFF]/30 text-[#00CCFF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 font-[family-name:var(--font-outfit)]">
              Real Results for
              <span className="gradient-text"> Real Clients</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              See how NMAS delivers mining-grade reliability, seamless cloud migrations, and rock-solid cyber security across South Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <CaseStudyCards caseStudies={caseStudies} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#00CCFF] to-[#0099CC] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-black text-[#0A1A2F] mb-4 font-[family-name:var(--font-outfit)]">Your Success Story Starts Here</h2>
            <p className="text-[#0A1A2F]/70 mb-8">Let NMAS design a solution tailored to your environment.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0A1A2F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0A1A2F]/90 transition-colors">
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
