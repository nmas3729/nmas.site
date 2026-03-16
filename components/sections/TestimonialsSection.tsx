"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import FadeIn from "@/components/ui/FadeIn"

const testimonials = [
  {
    name: "Thabo M.",
    role: "Small Business Owner",
    text: "NMAS transformed our office IT infrastructure. Their response time is incredible, and the team is always friendly and professional.",
    initials: "TM",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Sarah J.",
    role: "Homeowner",
    text: "The CCTV installation was neat and professional. I feel much safer knowing my home is protected by their systems.",
    initials: "SJ",
    color: "from-violet-500 to-purple-400",
  },
  {
    name: "David K.",
    role: "IT Manager",
    text: "Their cloud migration services were absolutely seamless. Zero downtime and excellent support throughout the entire process.",
    initials: "DK",
    color: "from-[#00CCFF] to-[#0099CC]",
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  /* Auto advance every 5 seconds */
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section className="bg-[#0A1A2F] py-24 relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5 dot-grid"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
              Client Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-black text-white mt-2 font-[family-name:var(--font-outfit)]"
            >
              What Our Clients Say
            </h2>
          </div>
        </FadeIn>

        {/* Slider */}
        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="bg-[#E0F7FF] rounded-3xl p-8 sm:p-10 text-center"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[#00CCFF] mx-auto mb-4" aria-hidden="true" />

              {/* Text */}
              <p className="text-[#0A1A2F] text-lg sm:text-xl leading-relaxed font-medium mb-8">
                "{testimonials[active].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-black text-sm`}
                >
                  {testimonials[active].initials}
                </div>
                <div className="text-left">
                  <div className="text-[#0A1A2F] font-bold">{testimonials[active].name}</div>
                  <div className="text-[#0099CC] text-sm">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#00CCFF]/20 border border-white/20 hover:border-[#00CCFF]/50 flex items-center justify-center text-white hover:text-[#00CCFF] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="p-2 transition-transform hover:scale-110 outline-none group"
                >
                  <div
                    className={`transition-all rounded-full ${
                      i === active
                        ? "w-6 h-2 bg-[#00CCFF]"
                        : "w-2 h-2 bg-white/30 group-hover:bg-white/60 group-focus-visible:ring-2 group-focus-visible:ring-[#00CCFF] group-focus-visible:ring-offset-2"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#00CCFF]/20 border border-white/20 hover:border-[#00CCFF]/50 flex items-center justify-center text-white hover:text-[#00CCFF] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* WebCraft promotion */}
        <FadeIn delay={0.5}>
          <div className="mt-20 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-lg bg-[#00CCFF]/20 flex items-center justify-center">
                  <span className="text-[#00CCFF] text-xs font-black">WC</span>
                </div>
                <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Digital Innovation</span>
              </div>
              <p className="text-white/80 text-sm italic mb-1">Need a stunning website?</p>
              <p className="text-white font-bold">NMAS WebCraft division handles all web design.</p>
            </div>
            <a
              href="https://webcraft.nmas.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button bg-[#00CCFF] text-[#0A1A2F] font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap min-h-[44px] flex items-center justify-center"
              aria-label="Visit NMAS WebCraft Division"
            >
              Visit WebCraft
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
