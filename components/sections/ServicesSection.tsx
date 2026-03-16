import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { Headphones, Globe, Cloud, ShieldCheck, ShoppingBag, ArrowRight } from "lucide-react"

const services = [
  {
    Icon: Headphones,
    title: "IT Support & PC Repairs",
    description: "24/7 expert troubleshooting and maintenance for homes & businesses. Fast, local, reliable.",
    href: "/services#support",
    color: "from-blue-500 to-cyan-400",
  },
  {
    Icon: Globe,
    title: "Web Design & Hosting",
    description: "Modern, responsive websites hosted on fast, local servers through our WebCraft division.",
    href: "https://webcraft.nmas.co.za",
    color: "from-violet-500 to-purple-400",
    external: true,
  },
  {
    Icon: Cloud,
    title: "Cloud Services",
    description: "Secure cloud storage, backups, and migration solutions tailored for SA businesses.",
    href: "/services#cloud",
    color: "from-sky-500 to-blue-400",
  },
  {
    Icon: ShieldCheck,
    title: "Cyber Security",
    description: "Comprehensive protection against malware, phishing, and data breaches.",
    href: "/services#cyber",
    color: "from-[#00CCFF] to-[#0099CC]",
  },
  {
    Icon: ShoppingBag,
    title: "Computer Accessories Shop",
    description: "High-quality computer accessories and security equipment, sourced and tested by our experts.",
    href: "/services#shop",
    color: "from-amber-500 to-orange-400",
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-black text-[#0A1A2F] mt-2 font-[family-name:var(--font-outfit)]"
            >
              Comprehensive Technology Solutions
              <br />
              Tailored for South Africa
            </h2>
          </div>
        </FadeIn>

        {/* Grid — 3 + 2 layout on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, description, href, color, external }, i) => (
            <FadeIn
              key={title}
              delay={i * 0.08}
              className={
                // 5th card spans 2 cols on lg to fill the row evenly
                i === 4 ? "lg:col-start-2" : ""
              }
            >
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="card-lift group flex flex-col h-full bg-white border border-gray-100 hover:border-[#00CCFF]/40 rounded-2xl p-6 transition-all min-h-[44px]"
                aria-label={`Explore our ${title} services`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg shadow-cyan-100`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-[#0A1A2F] font-bold text-lg mb-2 group-hover:text-[#0099CC] transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

                <div className="flex items-center gap-1.5 text-[#00CCFF] text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-[#0A1A2F] text-[#0A1A2F] hover:bg-[#0A1A2F] hover:text-white font-bold px-8 py-4 rounded-xl transition-all text-sm min-h-[44px]"
                aria-label="View all NMAS technology services"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
        </FadeIn>
      </div>
    </section>
  )
}
