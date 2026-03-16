import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { CheckCircle, ArrowRight } from "lucide-react"

const bullets = [
  "Cloud infrastructure replacing on-site servers",
  "VSAT + 4G/5G + Microwave network bonding",
  "Air-gapped SCADA cyber security",
  "24/7 remote monitoring & onsite response",
  "Multi-language industrial support",
  "Rugged, dust-proof, high-temp hardware",
]

export default function MiningSpotlight() {
  return (
    <section className="bg-[#E0F7FF] py-24 overflow-hidden" aria-labelledby="mining-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left – visual */}
          <FadeIn direction="left">
            <div className="relative rounded-3xl overflow-hidden bg-[#0A1A2F] h-[320px] lg:h-[420px] flex items-center justify-center">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 70%, #00CCFF 0%, transparent 50%), radial-gradient(circle at 70% 30%, #0099CC 0%, transparent 50%)",
                }}
              />
              {/* Diagram */}
              <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full">
                <div className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
                  IT/OT Architecture
                </div>
                {/* Layers */}
                {[
                  { label: "Cloud NOC (NMAS-Managed)", color: "bg-[#00CCFF]/20 border-[#00CCFF]/40" },
                  { label: "VSAT + 4G/5G + P2P Bonding", color: "bg-[#0099CC]/20 border-[#0099CC]/40" },
                  { label: "Remote Mine Site Hardware",    color: "bg-white/10 border-white/20" },
                ].map(({ label, color }, i) => (
                  <div
                    key={label}
                    className={`w-full rounded-xl border ${color} px-5 py-3 text-white font-semibold text-sm text-center`}
                    style={{ maxWidth: `${100 - i * 10}%` }}
                  >
                    {label}
                  </div>
                ))}
                <div className="flex gap-3 mt-2">
                  {["Cyber Secure", "Air-Gapped", "99.9% Uptime"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black uppercase tracking-widest text-[#00CCFF] bg-[#00CCFF]/10 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right – text */}
          <div>
            <FadeIn direction="right">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
                Mining Solutions
              </span>
              <h2
                id="mining-heading"
                className="text-3xl sm:text-4xl font-black text-[#0A1A2F] mt-2 mb-5 font-[family-name:var(--font-outfit)]"
              >
                Junior Mining IT Specialists Built for the Bush
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We eliminate the need for on-site servers — replacing costly infrastructure
                with enterprise-grade cloud, multi-network failover, and SCADA-protected OT
                systems. Built specifically for junior mining operations across Southern Africa.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {bullets.map((b, i) => (
                <FadeIn key={b} delay={i * 0.07}>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={17} className="text-[#00CCFF] shrink-0 mt-0.5" />
                    <span className="text-[#333333] text-sm">{b}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.45}>
              <Link
                href="/mining"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[#0A1A2F] text-white font-bold px-7 py-4 rounded-xl hover:bg-[#0099CC] transition-colors text-sm"
              >
                Explore Mining Solutions <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
