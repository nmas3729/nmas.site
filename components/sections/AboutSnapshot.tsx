import FadeIn from "@/components/ui/FadeIn"
import { CheckCircle } from "lucide-react"

const points = [
  "Certified technical experts available 24/7",
  "Custom security solutions for SA conditions",
  "Fast, local web hosting and support",
  "Commitment to community safety",
]

export default function AboutSnapshot() {
  return (
    <section className="bg-[#E0F7FF] py-24 overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Right text first on mobile */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="left">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
                About NMAS
              </span>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-black text-[#0A1A2F] mt-2 mb-5 font-[family-name:var(--font-outfit)]"
              >
                Proudly SA-based, protecting what matters
                <span className="gradient-text"> since 2015</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At NMAS, we believe in empowering South African homes and businesses with
                reliable technology and robust security solutions. Our local team understands
                the unique challenges of our landscape and delivers tailored solutions that work.
              </p>
            </FadeIn>

            <div className="space-y-3">
              {points.map((p, i) => (
                <FadeIn key={p} delay={i * 0.08}>
                  <div className="flex items-start gap-3 bg-white/60 rounded-xl px-4 py-3">
                    <CheckCircle size={18} className="text-[#00CCFF] shrink-0 mt-0.5" />
                    <span className="text-[#333333] text-sm font-medium">{p}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Left – visual representation */}
          <FadeIn direction="right" className="order-1 lg:order-2">
            <div className="relative h-[380px] rounded-3xl overflow-hidden bg-[#0A1A2F]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 50%, rgba(0,204,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(0,153,204,0.1) 0%, transparent 50%)",
                }}
              />
              <div className="absolute inset-0 dot-grid opacity-30" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#00CCFF]/20 border-2 border-[#00CCFF]/40 flex items-center justify-center">
                  <span className="text-2xl">🇿🇦</span>
                </div>
                <div>
                  <div className="text-white font-black text-2xl font-[family-name:var(--font-outfit)]">NMAS Innovations</div>
                  <div className="text-[#00CCFF] text-sm font-semibold mt-1">Serving South Africa &amp; the Continent</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { v: "2015", l: "Founded" },
                    { v: "24/7", l: "Support" },
                    { v: "500+", l: "Clients" },
                    { v: "100%", l: "Uptime" },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-white/10 rounded-xl py-3 text-center">
                      <div className="text-white font-black text-xl">{v}</div>
                      <div className="text-white/50 text-xs mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
