"use client"

import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"
import { ArrowRight, Clock, Shield, TrendingUp, FileDown } from "lucide-react"

interface Metric {
  metric: string
  label: string
}

interface CaseStudy {
  industry: string
  title: string
  challenge: string
  solution: string
  results: Metric[]
  tags: string[]
  color: string
}

interface CaseStudyCardsProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudyCards({ caseStudies }: CaseStudyCardsProps) {
  return (
    <div className="space-y-12">
      {caseStudies.map(({ industry, title, challenge, solution, results, tags, color }, i) => (
        <FadeIn key={title} delay={i * 0.1}>
          <div className="border border-gray-100 rounded-3xl overflow-hidden grid lg:grid-cols-3">
            {/* Left panel */}
            <div className={`bg-gradient-to-br ${color} p-8 lg:p-10 text-white flex flex-col justify-between`}>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full">
                  {industry}
                </span>
                <h2 className="text-xl font-black mt-4 leading-snug font-[family-name:var(--font-outfit)]">{title}</h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {tags.map((t) => (
                  <span key={t} className="text-[10px] font-bold bg-white/15 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* Middle panel */}
            <div className="p-8 lg:p-10 border-r border-gray-100 lg:col-span-1">
              <div className="mb-5">
                <div className="flex items-center gap-2 text-[#00CCFF] text-xs font-black uppercase tracking-widest mb-2">
                  <Clock size={12} /> Challenge
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#00CCFF] text-xs font-black uppercase tracking-widest mb-2">
                  <Shield size={12} /> Solution
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
              </div>
            </div>

            {/* Right – results */}
            <div className="p-8 lg:p-10 bg-[#E0F7FF]/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#00CCFF] text-xs font-black uppercase tracking-widest mb-5">
                  <TrendingUp size={12} /> Results
                </div>
                <div className="space-y-4">
                  {results.map(({ metric, label }) => (
                    <div key={label}>
                      <div className="text-3xl font-black text-[#0A1A2F] font-[family-name:var(--font-outfit)]">{metric}</div>
                      <div className="text-gray-500 text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-[#0099CC] font-bold text-sm hover:text-[#0A1A2F] transition-colors min-h-[44px] min-w-[44px] px-2"
                >
                  Get similar results <ArrowRight size={14} />
                </Link>
                <button
                  onClick={() => {
                    const win = window.open("", "_blank");
                    if (win) {
                      win.document.write(`
                        <html>
                          <head><title>NMAS Case Study - ${title}</title></head>
                          <body style="font-family: sans-serif; padding: 40px; color: #0A1A2F;">
                            <h1>NMAS Innovations Case Study: ${title}</h1>
                            <p><strong>Industry:</strong> ${industry}</p>
                            <h3>Challenge</h3><p>${challenge}</p>
                            <h3>Solution</h3><p>${solution}</p>
                            <h3>Results</h3>
                            <ul>${results.map(r => `<li><strong>${r.metric}</strong>: ${r.label}</li>`).join("")}</ul>
                            <div style="margin-top: 50px; border-top: 1px solid #eee; pt: 20px; font-size: 12px; color: #666;">
                              © 2025 NMAS Innovations | Mining IT & OT Specialists
                            </div>
                            <script>window.print();</script>
                          </body>
                        </html>
                      `);
                      win.document.close();
                    }
                  }}
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-[#0A1A2F]/40 hover:text-[#00CCFF] font-bold text-xs transition-colors p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-[#00CCFF] outline-none min-h-[44px] min-w-[44px]"
                  aria-label={`Download ${title} case study as PDF`}
                >
                  <FileDown size={16} /> Download Case Study PDF
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
