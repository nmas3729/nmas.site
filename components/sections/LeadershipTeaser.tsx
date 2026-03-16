import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { ArrowRight, Quote } from "lucide-react"

export default function LeadershipTeaser() {
  return (
    <section className="bg-white py-24 overflow-hidden" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left – portrait visual */}
          <FadeIn direction="left" className="lg:col-span-4">
            <div className="relative mx-auto w-64 h-80 lg:w-full lg:h-[450px]">
              {/* Background accent */}
              <div className="absolute inset-0 rounded-3xl bg-[#0A1A2F]" />
              <div className="absolute inset-0 rounded-3xl opacity-20 dot-grid" />
              
              {/* Founder Image */}
              <div className="absolute inset-2 overflow-hidden rounded-2xl">
                <Image
                  src="/mzoxolo.png"
                  alt="Mzoxolo Beqezi, Founder & CEO of NMAS Innovations"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+Z9PQAI8AOB7f69pAAAAABJRU5ErkJggg=="
                />
                
                {/* Overlay gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent opacity-60" />
              </div>

              {/* Achievement badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#00CCFF] text-[#0A1A2F] rounded-xl px-4 py-3 text-xs font-black shadow-xl z-20">
                Driving Innovation in SA 🚀
              </div>
            </div>
          </FadeIn>

          {/* Right – text */}
          <div className="lg:col-span-8">
            <FadeIn direction="right">
              <span className="text-[#00CCFF] text-xs font-black uppercase tracking-widest">
                Leadership
              </span>
              <h2
                id="leadership-heading"
                className="text-3xl sm:text-4xl font-black text-[#0A1A2F] mt-2 mb-6 font-[family-name:var(--font-outfit)]"
              >
                The Vision Behind NMAS
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* Pull-quote */}
              <blockquote className="relative pl-8 mb-6 border-l-4 border-[#00CCFF]">
                <Quote
                  size={28}
                  className="absolute -left-1 -top-2 text-[#00CCFF]/30"
                />
                <p className="text-[#333333] text-lg leading-relaxed italic">
                  "With a passion for technology and a vision for a connected Africa,
                  Mzoxolo Beqezi established NMAS to bridge the gap between complex IT
                  systems and everyday users."
                </p>
              </blockquote>

              <p className="text-gray-500 leading-relaxed mb-6">
                His hands-on approach ensures every client benefits from mining-grade
                reliability, whether for a home office or a remote industrial site. From
                securing his first mining client in 2018 to launching a 24/7 NOC in 2021,
                Mzoxolo has propelled NMAS from a local South African startup to a
                pan-African IT powerhouse.
              </p>

               <Link
                href="/about#leadership"
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-[#0099CC] font-bold hover:text-[#0A1A2F] transition-colors text-sm py-2 px-1 min-h-[44px] min-w-[44px]"
                aria-label="Meet the team and learn more about our leadership"
              >
                Meet the Team <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
