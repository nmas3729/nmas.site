import type { Metadata } from "next"
import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { Headphones, Globe, Cloud, ShieldCheck, ShoppingBag, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Business IT Services & Support | NMAS Innovations South Africa",
  description:
    "24/7 IT support, cybersecurity, cloud migration, and pro web design for SA businesses. Comprehensive tech solutions from South Africa's leading IT specialists.",
  keywords: [
    "IT support South Africa",
    "Business cybersecurity SA",
    "Cloud migration services",
    "Web design for business",
    "Remote IT troubleshooting",
    "NMAS WebCraft",
  ],
  alternates: { canonical: "https://nmas.co.za/services" },
  openGraph: {
    title: "Comprehensive IT Solutions for South Africa",
    description: "From cloud-managed IT to WebCraft web design. Get 24/7 support from local experts.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NMAS Business Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMAS Business IT Services",
    description: "Scale your business with mining-grade IT support and secure cloud solutions.",
    images: ["/og-image.png"],
  },
}

const services = [
  {
    id: "support",
    Icon: Headphones,
    title: "IT Support & PC Repairs",
    color: "from-blue-500 to-cyan-400",
    description:
      "Our certified technicians provide round-the-clock support — from PC repairs and network troubleshooting to full helpdesk management for businesses.",
    features: [
      "24/7 remote support via phone, email & chat",
      "On-site visits across South Africa",
      "Hardware diagnostics and repair",
      "Network setup and configuration",
      "User training and onboarding",
    ],
  },
  {
    id: "cyber",
    Icon: ShieldCheck,
    title: "Cyber Security",
    color: "from-[#00CCFF] to-[#0099CC]",
    description:
      "Protect your business from evolving cyber threats. We deliver enterprise-grade security solutions scaled for SMEs and homes.",
    features: [
      "Endpoint protection (antivirus & EDR)",
      "Phishing simulation and awareness training",
      "Firewall setup and management",
      "Vulnerability scanning and pen testing",
      "Incident response and breach containment",
    ],
  },
  {
    id: "cloud",
    Icon: Cloud,
    title: "Cloud Services",
    color: "from-sky-500 to-blue-400",
    description:
      "Move your business to the cloud with zero downtime. We handle migrations, backups, and ongoing management.",
    features: [
      "Microsoft 365 & Google Workspace setup",
      "Cloud backup and disaster recovery",
      "Server virtualisation and migration",
      "Cloud storage and file collaboration",
      "SaaS integration and API connectivity",
    ],
  },
  {
    id: "web",
    Icon: Globe,
    title: "Web Design & Hosting",
    color: "from-violet-500 to-purple-400",
    description:
      "Our WebCraft division creates stunning, conversion-focused websites hosted on fast, locally cached servers.",
    features: [
      "Custom website design and development",
      "Responsive mobile-first development",
      "Local SA hosting with fast load times",
      "Ongoing maintenance and updates",
      "SEO and analytics setup",
    ],
    external: "https://webcraft.nmas.co.za",
  },
  {
    id: "shop",
    Icon: ShoppingBag,
    title: "Computer Accessories Shop",
    color: "from-amber-500 to-orange-400",
    description:
      "Source quality-tested hardware directly from our accessories shop — cables, security cameras, networking gear, and more.",
    features: [
      "CCTV cameras and recorders",
      "Networking gear (routers, switches, AP)",
      "UPS and power protection",
      "Cables, adapters, and peripherals",
      "Rugged devices for field use",
    ],
  },
]

const whyPoints = [
  { title: "24/7 Availability",       desc: "Our team is on call around the clock, every day of the year." },
  { title: "SA-Based Experts",        desc: "Local technicians who understand South African infrastructure challenges." },
  { title: "Mining-Grade Reliability",desc: "The same robust systems we deliver to mine sites, scaled for your business." },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1A2F] topo-pattern pt-32 pb-20 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 50%, rgba(0,204,255,0.07) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#00CCFF]/15 border border-[#00CCFF]/30 text-[#00CCFF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Business Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 font-[family-name:var(--font-outfit)]">
              Comprehensive Technology Solutions
              <br />
              <span className="gradient-text">Tailored for South Africa</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From 24/7 IT helpdesk to cloud migrations and cyber security — NMAS covers every technology need for homes, SMEs, and enterprises.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map(({ id, Icon, title, color, description, features, external }, i) => (
            <div key={id} id={id} className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
              <FadeIn direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <div className={`rounded-3xl bg-gradient-to-br ${color} p-10 flex flex-col items-center justify-center gap-4 text-white min-h-[260px]`}>
                  <Icon size={52} strokeWidth={1.5} />
                  <span className="text-xl font-black">{title}</span>
                </div>
              </FadeIn>
              <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0A1A2F] mb-4 font-[family-name:var(--font-outfit)]">{title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                  <div className="space-y-2.5 mb-7">
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-[#00CCFF] shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={external ?? "/contact"}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 bg-[#0A1A2F] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0099CC] transition-colors text-sm"
                  >
                    {external ? "Visit WebCraft" : "Get Started"} <ArrowRight size={15} />
                  </Link>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why NMAS */}
      <section className="bg-[#E0F7FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0A1A2F] font-[family-name:var(--font-outfit)]">Why Choose NMAS?</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {whyPoints.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center card-lift">
                  <div className="w-12 h-12 rounded-full bg-[#00CCFF]/15 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#00CCFF] font-black text-lg">0{i + 1}</span>
                  </div>
                  <h3 className="text-[#0A1A2F] font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0A1A2F] to-[#0099CC] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-black text-white mb-4 font-[family-name:var(--font-outfit)]">Ready to get started?</h2>
            <p className="text-white/70 mb-8">Talk to our team about a tailored solution for your business.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00CCFF] text-[#0A1A2F] font-bold px-8 py-4 rounded-xl glow-button">
              Contact NMAS Today <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
