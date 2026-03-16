/* ─────────────────────────────────────────────────────────────────────────
   Phase 5 – TrustSignals.tsx
   Surface credibility markers: certifications, key stats, methodology badge,
   and a consultation CTA that doubles as a lead-gen element.
───────────────────────────────────────────────────────────────────────── */

import FadeIn from "@/components/ui/FadeIn"
import Link   from "next/link"
import { ShieldCheck, Award, Clock, Users, ArrowRight } from "lucide-react"

const certs = [
  { label: "CIPC Registered",         sub: "Reg. 2023/727067/07",    icon: "🏛️" },
  { label: "IEC 62443",               sub: "OT Security Compliant", icon: "🔒" },
  { label: "24/7 NOC Certified",      sub: "Always-On Operations",  icon: "📡" },
  { label: "COIDA Compliant",         sub: "Employer Registered",   icon: "✅" },
]

const stats = [
  { Icon: Clock,       number: "24/7",  label: "Network Operations Centre" },
  { Icon: ShieldCheck, number: "100%",  label: "Uptime SLA Commitment"     },
  { Icon: Users,       number: "50+",   label: "Active Clients"            },
  { Icon: Award,       number: "10+",   label: "Years of African IT"       },
]

export default function TrustSignals() {
  return (
    <section
      className="bg-[#0A1A2F] py-24 relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Subtle grid */}
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
              Why Clients Trust NMAS
            </span>
            <h2
              id="trust-heading"
              className="text-3xl sm:text-4xl font-black text-white mt-2 font-[family-name:var(--font-outfit)]"
            >
              Built on Certification &amp; Proven Results
            </h2>
          </div>
        </FadeIn>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map(({ Icon, number, label }, i) => (
            <FadeIn key={label} delay={i * 0.08}>
              <div className="text-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00CCFF]/30 rounded-2xl p-5 transition-all">
                <Icon
                  size={22}
                  className="text-[#00CCFF] mx-auto mb-2"
                  aria-hidden="true"
                />
                <div
                  className="text-3xl font-black text-white font-[family-name:var(--font-outfit)]"
                  aria-label={`${number} – ${label}`}
                >
                  {number}
                </div>
                <div className="text-white/50 text-xs mt-1 leading-snug">{label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.1}>
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
            role="list"
            aria-label="Certifications and compliance"
          >
            {certs.map(({ label, sub, icon }) => (
              <div
                key={label}
                role="listitem"
                className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <span className="text-3xl mb-2" aria-hidden="true">{icon}</span>
                <div className="text-white font-bold text-sm">{label}</div>
                <div className="text-white/50 text-xs mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Lead-gen CTA */}
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-r from-[#00CCFF]/10 to-[#0099CC]/10 border border-[#00CCFF]/20 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl font-[family-name:var(--font-outfit)] mb-2">
                Book a Free 30-Minute Consultation
              </h3>
              <p className="text-white/60 text-sm max-w-md">
                Speak to a mining IT specialist about your site requirements, connectivity, or cyber security posture.
                No obligation, no sales pressure.
              </p>
            </div>
            <Link
              href="/contact"
              className="glow-button w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00CCFF] text-[#0A1A2F] font-black px-7 py-4 rounded-xl whitespace-nowrap"
              aria-label="Book a free consultation with NMAS"
            >
              Book Free Consult <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
