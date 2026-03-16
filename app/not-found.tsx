import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1A2F] topo-pattern flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 number */}
        <div className="text-[10rem] font-black leading-none gradient-text font-[family-name:var(--font-outfit)] opacity-30 select-none">
          404
        </div>
        <h1 className="text-3xl font-black text-white mt-2 mb-4 font-[family-name:var(--font-outfit)]">
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8 leading-relaxed">
          The page you're looking for has gone offline — or maybe never existed. Our NOC team would have caught this, but even we miss one occasionally.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#00CCFF] text-[#0A1A2F] font-bold px-6 py-3 rounded-xl glow-button text-sm"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white/30 text-white hover:border-[#00CCFF] hover:text-[#00CCFF] font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            <ArrowLeft size={16} /> Get Support
          </Link>
        </div>
      </div>
    </div>
  )
}
