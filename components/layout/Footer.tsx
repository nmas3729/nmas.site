"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

const solutions = [
  { label: "Mining & Industrial", href: "/mining" },
  { label: "Business IT Support",  href: "/services" },
  { label: "Cyber Security",       href: "/services#cyber" },
  { label: "Cloud Services",       href: "/services#cloud" },
  { label: "Web Design",           href: "https://webcraft.nmas.co.za" },
]

const company = [
  { label: "About NMAS",    href: "/about" },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "Leadership",    href: "/about#leadership" },
  { label: "Divisions",     href: "/about#divisions" },
]

const support = [
  { label: "Contact Us",        href: "/contact" },
  { label: "Get Support",       href: "/contact" },
  { label: "Emergency Line",    href: "tel:+27674877278" },
  { label: "Client Portal",     href: "#" },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    console.log("Newsletter Subscription:", email)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    
    setStatus("success")
    setEmail("")
    
    // Reset success message after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <footer className="bg-[#0A1A2F] text-white" aria-label="Site footer">

      {/* ── WebCraft CTA Band ───────────────────────────────── */}
      <div className="border-t border-b border-white/10 bg-[#0A1A2F]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00CCFF]/20 flex items-center justify-center">
              <span className="text-[#00CCFF] text-xs font-black">WC</span>
            </div>
            <span className="text-sm text-white/70">
              Need a stunning website?{" "}
              <span className="text-white font-semibold">NMAS WebCraft</span> division handles all web design.
            </span>
          </div>
          <a
            href="https://webcraft.nmas.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#00CCFF] text-sm font-bold hover:gap-3 transition-all"
          >
            Visit WebCraft <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* ── Main Footer Grid ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 – Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpg"
                alt="NMAS Innovations"
                width={36}
                height={36}
                className="rounded-sm brightness-0 invert"
              />
              <span className="text-white font-bold text-lg font-[family-name:var(--font-outfit)]">
                NMAS<span className="text-[#00CCFF]"> Innovations</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Empowering South Africa with top-tier IT support, security solutions, and digital innovation.
              Mining-grade reliability from Cape to Cairo.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter,  href: "#",                 label: "Twitter" },
                { Icon: Facebook, href: "#",                 label: "Facebook" },
                { Icon: Linkedin, href: "#",                 label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`NMAS on ${label}`}
                  className="w-11 h-11 rounded-lg bg-white/10 hover:bg-[#00CCFF] hover:text-[#0A1A2F] flex items-center justify-center text-white/60 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Solutions */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Solutions</h3>
            <ul className="space-y-2.5">
              {solutions.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-[#00CCFF] text-sm transition-colors animated-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Company</h3>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-[#00CCFF] text-sm transition-colors animated-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold mb-4 mt-8 text-sm uppercase tracking-widest">Support</h3>
            <ul className="space-y-2.5">
              {support.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-[#00CCFF] text-sm transition-colors animated-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact + Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={14} className="text-[#00CCFF] mt-0.5 shrink-0" />
                South Africa
              </li>
              <li>
                <a
                  href="tel:+27674877278"
                  className="flex items-center gap-2.5 text-white/60 hover:text-[#00CCFF] text-sm transition-colors"
                >
                  <Phone size={14} className="text-[#00CCFF] shrink-0" />
                  +27 67 487 7278
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nmas.co.za"
                  className="flex items-center gap-2.5 text-white/60 hover:text-[#00CCFF] text-sm transition-colors"
                >
                  <Mail size={14} className="text-[#00CCFF] shrink-0" />
                  info@nmas.co.za
                </a>
              </li>
            </ul>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white/70 text-xs mb-3 font-medium">
                {status === "success" ? (
                  <span className="text-[#00CCFF]">✓ Thanks for subscribing!</span>
                ) : (
                  "Get the latest tech tips & security updates"
                )}
              </p>
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email for newsletter"
                  disabled={status === "loading"}
                  className="flex-1 bg-white/10 text-white placeholder:text-white/30 text-sm px-3 py-3.5 rounded-lg border border-white/20 focus:outline-none focus:border-[#00CCFF] transition-colors min-w-0 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#00CCFF] text-[#0A1A2F] font-bold px-4 py-3.5 rounded-lg hover:bg-[#00b8e6] transition-colors shrink-0 flex items-center justify-center disabled:opacity-50 min-w-[44px]"
                  aria-label="Subscribe"
                >
                  {status === "loading" ? (
                    <div className="w-4 h-4 border-2 border-[#0A1A2F]/30 border-t-[#0A1A2F] rounded-full animate-spin" />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </form>
              <div className="flex gap-4 mt-3">
                <Link href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white/40 text-xs mb-1">
              © 2025 NMAS Innovations • Proudly South African • Serving the Continent • From Cape to Cairo
            </p>
            <p className="text-white/30 text-[10px] uppercase tracking-widest">
              Reg. 2023/727067/07
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00CCFF] text-xs font-bold uppercase tracking-widest">
              🇿🇦 SA-Based & African-Owned
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
