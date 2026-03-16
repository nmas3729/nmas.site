"use client"

import { useCountUp } from "@/lib/useCountUp"

function StatItem({
  value,
  suffix = "",
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  const { count, ref } = useCountUp(value, 2200)

  return (
    <div className="flex flex-col items-center text-center px-6 py-4">
      <span
        ref={ref}
        className="text-3xl sm:text-4xl font-black text-[#0A1A2F] font-[family-name:var(--font-outfit)]"
      >
        {count}
        {suffix}
      </span>
      <span className="text-[#0099CC] text-sm font-semibold mt-1">{label}</span>
    </div>
  )
}

const stats = [
  { value: 2015,  suffix: "",   label: "Founded" },
  { value: 100,   suffix: "%",  label: "Uptime Commitment" },
  { value: 24,    suffix: "/7", label: "NOC Monitoring" },
  { value: 500,   suffix: "+",  label: "Sites Secured" },
]

const badges = [
  "🌍 Cape to Cairo",
  "🇿🇦 Proudly SA-Based",
  "🏭 Mining Specialists",
  "🔤 Multi-Language Support",
]

export default function TrustBar() {
  return (
    <section className="bg-[#E0F7FF]" aria-label="Trust indicators">

      {/* ── Counter row ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#0099CC]/20">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ── Badge ticker ────────────────────────────────────── */}
      <div className="border-t border-[#00CCFF]/20 bg-[#0A1A2F]/5 overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...badges, ...badges, ...badges, ...badges].map((badge, i) => (
            <span
              key={i}
              className="inline-block text-[#0099CC] text-xs font-bold uppercase tracking-widest px-10 border-r border-[#00CCFF]/20"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
