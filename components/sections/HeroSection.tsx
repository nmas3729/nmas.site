"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Satellite, Shield, Server, Wifi } from "lucide-react"

const floatingStats = [
  { label: "Uptime", value: "100%", icon: Wifi },
  { label: "Response", value: "24/7", icon: Shield },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1A2F] topo-pattern"
      aria-labelledby="hero-headline"
    >
      {/* ── Animated gradient orbs ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Left orb */}
        <motion.div
          className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,204,255,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Right orb */}
        <motion.div
          className="absolute -right-32 bottom-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,153,204,0.07) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid lines top */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,204,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,204,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left col – text */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#00CCFF]/15 border border-[#00CCFF]/30 text-[#00CCFF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CCFF] animate-pulse" />
              <span className="leading-tight">Multi-Language Industrial Support in Africa</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 font-[family-name:var(--font-outfit)]"
            >
              Empower Your Business{" "}
              <span className="gradient-text">Across Africa</span>
              <br className="hidden sm:block" />
              <span className="text-white/90"> – From Cape to Cairo</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#E0F7FF] text-lg font-semibold mb-3"
            >
              Junior Mining IT &amp; OT Specialists
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 text-base leading-relaxed max-w-xl mb-8"
            >
              We eliminate the need for on-site servers by providing robust, secure cloud
              infrastructure, VSAT/4G failover, SCADA cyber security and 24/7 remote
              monitoring for junior mining operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="glow-button bg-[#00CCFF] text-[#0A1A2F] font-bold px-7 py-4 rounded-xl flex items-center justify-center gap-2 text-sm min-h-[44px]"
              >
                Discuss Your Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/mining"
                className="border border-white/30 text-white hover:border-[#00CCFF] hover:text-[#00CCFF] font-semibold px-7 py-4 rounded-xl text-sm transition-all flex items-center justify-center min-h-[44px]"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-6"
            >
              {floatingStats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00CCFF]/15 flex items-center justify-center">
                    <Icon size={14} className="text-[#00CCFF]" />
                  </div>
                  <span>
                    <span className="text-white font-black text-base">{value}</span>{" "}
                    <span className="text-white/50 text-xs">{label}</span>
                  </span>
                </div>
              ))}
              <div className="h-5 w-px bg-white/20" />
              <span className="text-white/50 text-xs">📍 Serving across Africa since 2015</span>
            </motion.div>
          </div>

          {/* Right col – visual */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              {/* Africa map / continent visual */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Outer pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#00CCFF]/20"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-[#00CCFF]/15"
                  animate={{ scale: [1.05, 1, 1.05], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                {/* Central hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#00CCFF]/10 border border-[#00CCFF]/30 flex flex-col items-center justify-center gap-2">
                    <Server size={32} className="text-[#00CCFF]" />
                    <span className="text-white font-bold text-xs text-center leading-tight">
                      24/7 NOC<br />
                      <span className="text-[#00CCFF]">ACTIVE</span>
                    </span>
                  </div>
                </div>
                {/* Orbiting nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const x = 50 + 42 * Math.cos(rad)
                  const y = 50 + 42 * Math.sin(rad)
                  const icons = [Satellite, Shield, Wifi, Server, Shield, Satellite]
                  const Icon = icons[i]
                  return (
                    <motion.div
                      key={deg}
                      className="absolute w-9 h-9 rounded-full bg-[#0A1A2F] border border-[#00CCFF]/40 flex items-center justify-center"
                      style={{
                        left: `calc(${x}% - 18px)`,
                        top:  `calc(${y}% - 18px)`,
                      }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <Icon size={12} className="text-[#00CCFF]" />
                    </motion.div>
                  )
                })}
                {/* Connection lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 100 100"
                >
                  {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = (deg * Math.PI) / 180
                    const x = 50 + 42 * Math.cos(rad)
                    const y = 50 + 42 * Math.sin(rad)
                    return (
                      <line
                        key={deg}
                        x1="50" y1="50" x2={x} y2={y}
                        stroke="#00CCFF" strokeWidth="0.5"
                      />
                    )
                  })}
                </svg>
              </div>

              {/* Info cards */}
              <motion.div
                className="absolute -left-10 top-12 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-2.5 text-xs"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-[#00CCFF] font-bold">VSAT + 4G/5G + P2P</div>
                <div className="text-white/60">Bonded Failover Active</div>
              </motion.div>
              <motion.div
                className="absolute -right-10 bottom-16 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-2.5 text-xs"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-[#00CCFF] font-bold">Air-Gapped Backup</div>
                <div className="text-white/60">SCADA Secured</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  )
}
