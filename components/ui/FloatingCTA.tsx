"use client"

/* ─────────────────────────────────────────────────────────────────────────
   Phase 5 – FloatingCTA.tsx
   Sticky bottom-right widget that appears after scrolling 300px.
   Contains: WhatsApp quick-chat + emergency phone call.
   Animated open/close with Framer Motion.
───────────────────────────────────────────────────────────────────────── */

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X, Headphones } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/27674877278?text=Hi%20NMAS%2C%20I%27d%20like%20to%20discuss%20your%20services."
const CALL_URL = "tel:+27674877278"

export default function FloatingCTA() {
  const [visible, setVisible]   = useState(false)
  const [expanded, setExpanded] = useState(false)

  /* Show after 300px of scroll */
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
          aria-label="Quick contact options"
          role="complementary"
        >
          {/* Expanded action buttons */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="actions"
                initial={{ opacity: 0, scale: 0.7, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 16 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3 items-end"
              >
                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-lg hover:bg-[#1eb858] transition-colors min-w-[160px] justify-center"
                  aria-label="Chat with NMAS on WhatsApp"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Chat
                </a>

                {/* Emergency Call */}
                <a
                  href={CALL_URL}
                  className="flex items-center gap-2.5 bg-[#00CCFF] text-[#0A1A2F] font-bold text-sm px-5 py-3.5 rounded-full shadow-lg hover:bg-[#00b8e6] transition-colors min-w-[160px] justify-center"
                  aria-label="Call NMAS emergency support line"
                >
                  <Phone size={18} aria-hidden="true" />
                  +27 67 487 7278
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            onClick={() => setExpanded((prev) => !prev)}
            whileTap={{ scale: 0.93 }}
            className={`
              w-16 h-16 rounded-full shadow-2xl flex items-center justify-center
              transition-colors duration-300
              ${expanded
                ? "bg-white text-[#0A1A2F]"
                : "bg-[#0A1A2F] text-[#00CCFF] border-2 border-[#00CCFF]/50"
              }
            `}
            aria-expanded={expanded}
            aria-controls="floating-cta-actions"
            aria-label={expanded ? "Close contact options" : "Open quick contact options"}
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Headphones size={22} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Pulsing indicator dot when collapsed */}
          {!expanded && (
            <span
              className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00CCFF] rounded-full"
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full bg-[#00CCFF] animate-ping opacity-75" />
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
