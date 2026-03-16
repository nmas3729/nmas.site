import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/ui/FadeIn"
import { ArrowRight, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About NMAS Innovations | Mining IT Leaders in South Africa",
  description:
    "Founded in 2015 by Mzoxolo Beqezi, NMAS Innovations provides mining-grade IT reliability across Africa. Explore our journey from local startup to pan-African powerhouse.",
  keywords: [
    "Mzoxolo Beqezi",
    "NMAS Innovations history",
    "Mining IT company South Africa",
    "African IT leadership",
    "Industrial tech experts Africa",
  ],
  alternates: { canonical: "https://nmas.co.za/about" },
  openGraph: {
    title: "About NMAS Innovations | South African IT Leaders",
    description: "Driving innovation from Cape to Cairo. Meet our founder and explore our mining-grade IT values.",
    images: [{ url: "/mzoxolo.png", width: 1200, height: 630, alt: "Mzoxolo Beqezi, Founder & CEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NMAS Innovations",
    description: "Our story, our mission, and our 10-year commitment to Africa's digital future.",
    images: ["/mzoxolo.png"],
  },
}

const timeline = [
  { year: "2015", event: "Founded by Mzoxolo Beqezi in South Africa", detail: "Starting as a local IT support provider for homes and businesses." },
  { year: "2018", event: "First junior mining client secured", detail: "Deployed rugged cloud infrastructure for a Northern Cape mine site." },
  { year: "2021", event: "24/7 NOC launched", detail: "Established a dedicated Network Operations Centre for round-the-clock remote monitoring." },
  { year: "2023", event: "First in Africa — multi-language industrial support", detail: "Became the first IT company on the continent to offer full multi-language OT/SCADA support." },
  { year: "2024", event: "Cape to Cairo expansion", detail: "Expanded service reach across sub-Saharan and Northern Africa." },
]

const values = [
  { emoji: "🔒", title: "Security First",      desc: "Every solution is built with security at its core — from home networks to SCADA systems." },
  { emoji: "🏭", title: "Industrial-Grade",    desc: "Mining-level reliability delivered to every client, regardless of scale." },
  { emoji: "🌍", title: "Africa-Focused",      desc: "Our solutions are designed for Africa's unique infrastructure challenges." },
  { emoji: "🤝", title: "Community Commitment",desc: "We believe technology should empower communities across South Africa and the continent." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1A2F] topo-pattern pt-32 pb-20 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 60% 40%, rgba(0,204,255,0.08) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-[#00CCFF]/15 border border-[#00CCFF]/30 text-[#00CCFF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 font-[family-name:var(--font-outfit)]">
              Protecting What Matters
              <br />
              <span className="gradient-text">Since 2015</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              NMAS Innovations was built on a simple belief: every South African home and business — and every African mine site — deserves enterprise-grade technology and security.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Company Timeline</span>
              <h2 id="timeline-heading" className="text-3xl font-black text-[#0A1A2F] mt-2 font-[family-name:var(--font-outfit)]">
                A Decade of African Innovation
              </h2>
            </div>
          </FadeIn>
          <div className="relative border-l-2 border-[#00CCFF]/30 ml-6 pl-8 space-y-10">
            {timeline.map(({ year, event, detail }, i) => (
              <FadeIn key={year} delay={i * 0.1}>
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[42px] w-5 h-5 rounded-full bg-[#00CCFF] border-4 border-white shadow" />
                  <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">{year}</span>
                  <h3 className="text-[#0A1A2F] font-bold text-lg mt-1 mb-1">{event}</h3>
                  <p className="text-gray-500 text-sm">{detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-[#E0F7FF] py-24" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Leadership</span>
              <h2 id="leadership-heading" className="text-3xl font-black text-[#0A1A2F] mt-2 font-[family-name:var(--font-outfit)]">
                The Vision Behind NMAS
              </h2>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-4xl mx-auto">
            <FadeIn direction="left">
              <div className="bg-[#0A1A2F] rounded-3xl relative overflow-hidden h-[450px]">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <Image
                  src="/mzoxolo.png"
                  alt="Mzoxolo Beqezi, Founder & CEO of NMAS Innovations"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="text-white font-black text-2xl mb-1 font-[family-name:var(--font-outfit)]">Mzoxolo Beqezi</div>
                  <div className="text-[#00CCFF] text-sm font-bold mb-3 uppercase tracking-wider">Founder & CEO</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h3 className="text-2xl font-black text-[#0A1A2F] mb-4 font-[family-name:var(--font-outfit)]">
                Driving Innovation in SA 🚀
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                His hands-on approach ensures every client benefits from mining-grade
                reliability, whether for a home office or a remote industrial site. From
                securing his first mining client in 2018 to launching a 24/7 NOC in 2021,
                Mzoxolo has propelled NMAS from a local South African startup to a
                pan-African IT powerhouse.
              </p>
              <blockquote className="border-l-4 border-[#00CCFF] pl-5 italic text-[#0A1A2F] font-medium">
                "With a passion for technology and a vision for a connected Africa,
                Mzoxolo Beqezi established NMAS to bridge the gap between complex IT
                systems and everyday users."
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="bg-white py-24" aria-labelledby="divisions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Our Divisions</span>
              <h2 id="divisions-heading" className="text-3xl font-black text-[#0A1A2F] mt-2 font-[family-name:var(--font-outfit)]">
                Two Brands, One Mission
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                logo: "NMAS",
                name: "NMAS Innovations",
                tagline: "IT & OT Specialists",
                desc: "Mining-grade cloud infrastructure, cyber security, and 24/7 remote monitoring for mine sites, businesses, and homes across Africa.",
                href: "/",
                color: "from-[#0A1A2F] to-[#0099CC]",
              },
              {
                logo: "WC",
                name: "WebCraft",
                tagline: "Web Design Division",
                desc: "Premium web design, development, and local hosting for South African businesses. Built for speed, conversion, and brand impact.",
                href: "https://webcraft.nmas.co.za",
                color: "from-violet-600 to-purple-500",
                external: true,
              },
            ].map(({ logo, name, tagline, desc, href, color, external }) => (
              <FadeIn key={name}>
                <div className="card-lift border border-gray-100 rounded-3xl p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-black text-lg mb-5`}>
                    {logo}
                  </div>
                  <h3 className="text-[#0A1A2F] font-black text-xl mb-1">{name}</h3>
                  <span className="text-[#00CCFF] text-xs font-bold uppercase tracking-widest mb-3">{tagline}</span>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-[#0099CC] font-bold text-sm hover:text-[#0A1A2F] transition-colors"
                  >
                    Visit {name} <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0A1A2F] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">Core Values</span>
              <h2 className="text-3xl font-black text-white mt-2 font-[family-name:var(--font-outfit)]">What We Stand For</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ emoji, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00CCFF]/30 rounded-2xl p-6 text-center card-lift transition-all">
                  <div className="text-3xl mb-4">{emoji}</div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="text-center mt-12 flex items-center justify-center gap-2 text-white/40 text-sm">
              <Heart size={16} className="text-[#00CCFF]" /> Committed to South Africa and the Continent
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
