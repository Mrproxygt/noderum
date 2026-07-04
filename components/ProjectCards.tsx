"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { DemoCallTrigger } from "@/components/demo-call/DemoCallTrigger"

export function ProjectCards() {
  return (
    <section className="bg-[#EFEFEF] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
              Våra bolag
            </p>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-gray-900 tracking-tight">
              Vi äger det vi bygger.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1 text-[14px] font-medium text-gray-900 mt-4 md:mt-0 hover:text-gray-500 transition-colors duration-300"
          >
            Se alla bolag
            <ArrowUpRight size={14} className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Menodi — Demo call card */}
          <div className="rounded-2xl overflow-hidden">
            <DemoCallTrigger />
          </div>

          {/* Stealth card — smokey UI */}
          <div className="group relative rounded-2xl p-6 sm:p-8 flex flex-col overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]">
            {/* Smoke texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-soft-light"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px',
              }}
            />
            {/* Fog gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/[0.03] pointer-events-none" />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-400 border border-white/15 rounded-full px-2.5 py-0.5">
                  Marketing
                </span>
                <p className="text-[14px] sm:text-[15px] font-semibold text-white/90">
                  Stealth
                </p>
              </div>
              <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed mb-6 flex-1">
                Ett nytt bolag inom performance-baserad influencer marketing. Vi kopplar ihop svenska varumärken med rätt kreatörer — och betalar endast för faktiska resultat. Ny modell för en ny marknad.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[12px] text-gray-500">Under utveckling — Q4 2026</span>
                <div className="h-2 w-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(250,204,21,0.4)]" title="Under utveckling" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
