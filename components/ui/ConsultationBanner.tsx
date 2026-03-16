"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ConsultationBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show after 5 seconds, unless dismissed
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [dismissed])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#0A1A2F] border border-[#00CCFF]/30 shadow-2xl rounded-2xl overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#00CCFF]/10 to-transparent pointer-events-none" />
            
            <div className="relative p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setVisible(false)
                  setTimeout(() => setDismissed(true), 500)
                }}
                className="absolute top-2 right-2 text-white/40 hover:text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Dismiss banner"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#00CCFF]/10 items-center justify-center text-[#00CCFF]">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">
                    Optimize Your Mining Infrastructure
                  </h4>
                  <p className="text-white/60 text-sm mt-1 max-w-md">
                    Claim your free 30-min strategy session. Let's solve your connectivity and security gaps.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                <Link
                  href="/contact"
                  className="glow-button flex-1 md:flex-none bg-[#00CCFF] text-[#0A1A2F] font-bold px-6 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2"
                >
                  Book Session <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
