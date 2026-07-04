import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = { title: "Nyheter — Noderum", description: "Senaste nyheterna från Noderum." }

const items = [
  { slug: "menodi-lansering", date: "2026.06.01", title: "Noderum lanserar Menodi — AI-receptionist för svenska SMB" },
  { slug: "websiteforge-live", date: "2026.05.15", title: "WebsiteForge går live — hemsidor på under 48 timmar" },
  { slug: "noderum-grundas", date: "2026.04.01", title: "Noderum grundas — en ny venture studio för operativa AI-bolag" },
]

export default function NewsPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">( Nyheter )</p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">Vad händer på Noderum.</h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[680px] leading-relaxed">Lanseringar, produktuppdateringar och bolagsnyheter.</p>
      </section>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <div className="flex flex-col">
          {items.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`} className="group flex items-baseline gap-4 sm:gap-8 py-5 border-b border-black/10 hover:border-black/30 transition-colors duration-300">
              <span className="text-[12px] sm:text-[13px] text-gray-500 whitespace-nowrap min-w-[5rem]">{item.date}</span>
              <span className="text-[15px] sm:text-[17px] font-medium text-gray-900 leading-snug">{item.title}</span>
              <ArrowUpRight size={14} className="shrink-0 ml-auto text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
