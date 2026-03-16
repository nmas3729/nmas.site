import type { Metadata } from "next"
import FadeIn from "@/components/ui/FadeIn"
import ContactFormClient from "./ContactFormClient"

export const metadata: Metadata = {
  title: "Contact & 24/7 Support | NMAS Innovations Africa",
  description:
    "Emergency IT support, mining consultations, and business tech inquiries. Reach our Network Operations Center (NOC) 24/7 for rapid response across Africa.",
  keywords: [
    "Contact NMAS Innovations",
    "24/7 IT support Africa",
    "Emergency mining IT",
    "Technical support South Africa",
    "Book IT consultation",
  ],
  alternates: { canonical: "https://nmas.co.za/contact" },
  openGraph: {
    title: "Connect with NMAS Innovations Support",
    description: "Reach our 24/7 NOC or book a consultation with our mining IT specialists.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact NMAS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMAS 24/7 Support & Contact",
    description: "Expert IT & OT support whenever you need it, wherever you are in Africa.",
    images: ["/og-image.png"],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1A2F] topo-pattern pt-32 pb-20 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 40% 60%, rgba(0,204,255,0.08) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#00CCFF]/15 border border-[#00CCFF]/30 text-[#00CCFF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Contact & Support
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 font-[family-name:var(--font-outfit)]">
              Let's Build Something
              <span className="gradient-text"> Resilient</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Whether you need emergency IT support or want to discuss a mining infrastructure project — our team is ready, 24/7.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#E0F7FF] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactFormClient />
        </div>
      </section>

      {/* Emergency band */}
      <section className="bg-[#0A1A2F] py-12" aria-labelledby="emergency-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-[#00CCFF] text-xs font-black uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00CCFF] animate-pulse" />
              24/7 Emergency Support Line
            </div>
            <h2 id="emergency-heading" className="text-white text-3xl font-black font-[family-name:var(--font-outfit)]">
              <a href="tel:+27674877278" className="hover:text-[#00CCFF] transition-colors">
                +27 67 487 7278
              </a>
            </h2>
            <p className="text-white/50 text-sm mt-2">For critical mine site or business outages — we pick up.</p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
