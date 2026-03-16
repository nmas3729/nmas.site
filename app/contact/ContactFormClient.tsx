"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeIn from "@/components/ui/FadeIn"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Send } from "lucide-react"

const contactInfo = [
  { Icon: Phone,  label: "Phone",         value: "+27 67 487 7278",    href: "tel:+27674877278" },
  { Icon: Mail,   label: "Email",          value: "info@nmas.co.za",    href: "mailto:info@nmas.co.za" },
  { Icon: MapPin, label: "Location",       value: "South Africa",       href: undefined },
  { Icon: Clock,  label: "Support Hours",  value: "24/7 — Always on",   href: undefined },
]

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit — replace with your API call
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="grid lg:grid-cols-5 gap-12">

      {/* Info panel */}
      <div className="lg:col-span-2 space-y-6">
        {contactInfo.map(({ Icon, label, value, href }) => (
          <FadeIn key={label}>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 card-lift">
              <div className="w-10 h-10 rounded-xl bg-[#00CCFF]/15 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#00CCFF]" />
              </div>
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{label}</div>
                {href ? (
                  <a href={href} className="text-[#0A1A2F] font-bold hover:text-[#0099CC] transition-colors mt-0.5 block">
                    {value}
                  </a>
                ) : (
                  <div className="text-[#0A1A2F] font-bold mt-0.5">{value}</div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}

        {/* Africa presence visual */}
        <FadeIn delay={0.4}>
          <div className="bg-[#0A1A2F] rounded-2xl p-6 text-white">
            <div className="text-[#00CCFF] text-xs font-black uppercase tracking-widest mb-3">Coverage Area</div>
            <div className="text-lg font-black mb-1 font-[family-name:var(--font-outfit)]">
              🌍 Cape to Cairo
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              NMAS serves mine sites and businesses across sub-Saharan and Northern Africa with remote support and onsite rapid-response teams.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["South Africa", "Zimbabwe", "Zambia", "DRC", "Tanzania", "Kenya"].map((c) => (
                <span key={c} className="text-[10px] bg-white/10 text-white/60 px-2.5 py-1 rounded-full">{c}</span>
              ))}
              <span className="text-[10px] bg-[#00CCFF]/20 text-[#00CCFF] px-2.5 py-1 rounded-full font-bold">+ more</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Form */}
      <div className="lg:col-span-3">
        <FadeIn direction="right">
          <div className="bg-white rounded-3xl border border-gray-100 p-8">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <h2 className="text-2xl font-black text-[#0A1A2F] font-[family-name:var(--font-outfit)]">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm">Our team will respond within 2 hours during business hours, and for emergency support, we're available 24/7.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[#0A1A2F] text-sm font-bold mb-1.5">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00CCFF] transition-colors text-[#333333] placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[#0A1A2F] text-sm font-bold mb-1.5">Company</label>
                      <input id="company" name="company" type="text" placeholder="Your company name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00CCFF] transition-colors text-[#333333] placeholder:text-gray-400" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[#0A1A2F] text-sm font-bold mb-1.5">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00CCFF] transition-colors text-[#333333] placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[#0A1A2F] text-sm font-bold mb-1.5">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="+27 xx xxx xxxx"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00CCFF] transition-colors text-[#333333] placeholder:text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[#0A1A2F] text-sm font-bold mb-1.5">Service of Interest</label>
                    <select id="service" name="service"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00CCFF] transition-colors text-[#333333] bg-white">
                      <option value="">Select a service…</option>
                      <option>Mining & Industrial IT/OT</option>
                      <option>IT Support & PC Repairs</option>
                      <option>Cyber Security</option>
                      <option>Cloud Services</option>
                      <option>Web Design & Hosting</option>
                      <option>Computer Accessories</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#0A1A2F] text-sm font-bold mb-1.5">Message *</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project or challenge…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00CCFF] transition-colors text-[#333333] placeholder:text-gray-400 resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full glow-button bg-[#00CCFF] text-[#0A1A2F] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 transition-opacity"
                  >
                    {loading ? (
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-[#0A1A2F]/30 border-t-[#0A1A2F] rounded-full" />
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00CCFF]/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#00CCFF]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A1A2F] mb-2 font-[family-name:var(--font-outfit)]">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Thank you for reaching out. Our team will be in touch within 2 hours.
                    For emergencies, call <a href="tel:+27674877278" className="text-[#0099CC] font-bold">+27 67 487 7278</a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-[#0099CC] font-bold text-sm hover:text-[#0A1A2F] transition-colors"
                  >
                    Send another message <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
