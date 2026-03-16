"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About",        href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact",      href: "/contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const pathname = usePathname()

  /* Detect scroll for nav shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1A2F]/95 backdrop-blur-md shadow-lg" : "bg-[#0A1A2F]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.jpg"
              alt="NMAS Innovations Logo"
              width={40}
              height={40}
              className="rounded-sm"
              priority
            />
            <span className="text-white font-bold text-lg tracking-wide font-[family-name:var(--font-outfit)]">
              NMAS<span className="text-[#00CCFF]"> Innovations</span>
            </span>
          </Link>

          {/* ── Desktop Links ─────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 transition-colors animated-underline outline-none focus-visible:text-[#00CCFF] ${
                  pathname === link.href ? "text-[#00CCFF]" : "text-white/80 hover:text-[#00CCFF]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+27674877278"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors focus-visible:text-[#00CCFF] outline-none"
              aria-label="Call NMAS Support Office"
            >
              <Phone size={14} />
              +27 67 487 7278
            </a>
            <Link
              href="/contact"
              className="glow-button bg-[#00CCFF] text-[#0A1A2F] font-bold text-sm px-5 py-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 outline-none"
            >
              Get Support
            </Link>
          </div>

          {/* ── Mobile Hamburger ──────────────────────────────── */}
          <button
            className="md:hidden text-white p-3 rounded-md hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#00CCFF] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Slide Menu ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0A1A2F] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-4 rounded-lg transition-colors text-base font-medium ${
                    pathname === link.href
                      ? "text-[#00CCFF] bg-white/10"
                      : "text-white/80 hover:text-[#00CCFF] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block text-center glow-button bg-[#00CCFF] text-[#0A1A2F] font-bold text-sm px-5 py-3 rounded-lg"
                >
                  Get Support
                </Link>
                <a
                  href="tel:+27674877278"
                  className="flex items-center justify-center gap-2 mt-3 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Phone size={14} /> +27 67 487 7278
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
