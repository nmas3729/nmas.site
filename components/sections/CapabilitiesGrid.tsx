import FadeIn from "@/components/ui/FadeIn"
import { Server, Satellite, Monitor, Shield } from "lucide-react"

const capabilities = [
  {
    Icon: Server,
    title: "Rugged Hardware",
    description:
      "Dust-proof, high-temp servers & endpoints built for the bush — rated for Africa's harshest mine-site conditions.",
    tag: "IP65+ Rated",
  },
  {
    Icon: Satellite,
    title: "Connectivity Failover",
    description:
      "VSAT, 4G/5G & Microwave bonding delivers 100% uptime on remote sites, even when one link drops.",
    tag: "Multi-Network",
  },
  {
    Icon: Monitor,
    title: "24/7 Remote Ops",
    description:
      "Continuous monitoring from our Network Operations Center, backed by rapid on-site response teams.",
    tag: "NOC Active",
  },
  {
    Icon: Shield,
    title: "OT Cyber Security",
    description:
      "Air-gapped backups and SCADA protection guard your critical infrastructure against modern cyber threats.",
    tag: "SCADA Secured",
  },
]

export default function CapabilitiesGrid() {
  return (
    <section className="bg-white py-24" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2
              id="capabilities-heading"
              className="text-3xl sm:text-4xl font-black text-[#0A1A2F] mt-2 font-[family-name:var(--font-outfit)]"
            >
              Mining-Grade Infrastructure for
              <br />
              <span className="gradient-text">Africa's Harshest Environments</span>
            </h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map(({ Icon, title, description, tag }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className="card-lift group h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00CCFF]/50 hover:bg-[#E0F7FF]/30 transition-all">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#00CCFF]/10 group-hover:bg-[#00CCFF]/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-[#00CCFF]" />
                </div>

                {/* Tag */}
                <span className="text-[0.65rem] font-black uppercase tracking-widest text-[#0099CC] bg-[#E0F7FF] px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>

                {/* Content */}
                <h3 className="text-[#0A1A2F] font-bold text-lg mt-3 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

                {/* Bottom accent */}
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00CCFF] to-[#0099CC] rounded-full transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
