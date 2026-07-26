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

        {/* Menodi — full demo card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
          <div className="rounded-2xl overflow-hidden">
            <DemoCallTrigger />
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded-full px-2.5 py-0.5">
                AI-receptionist
              </span>
              <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900">Menodi</p>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-4 flex-1">
              En AI-receptionist som svarar, bokar och följer upp dygnet runt, helt på svenska.
              Byggd specifikt för svenska SMB: hantverkare, salonger, restauranger och konsulter.
              Pilotkunder rapporterar 40% färre missade samtal.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-gray-500">Pilotdrift med betalande kunder</span>
                <a
                  href="https://menodi.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[12px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  menodi.se
                  <ArrowUpRight size={10} className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45" />
                </a>
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-400/60 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
            </div>
          </div>
        </div>

        {/* Three stealth cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Stealth: Marketing — Smokey noir */}
          <div className="group relative rounded-2xl p-5 sm:p-6 flex flex-col overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] min-h-[280px] cursor-default">
            {/* Animated smoke */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-soft-light group-hover:opacity-[0.10] transition-opacity duration-700"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/[0.02] pointer-events-none" />
            {/* Hover glow ring */}
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent pointer-events-none ring-1 ring-amber-500/0 group-hover:ring-amber-500/20 transition-all duration-700" />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 border border-white/15 rounded-full px-2.5 py-0.5">Marketing</span>
                <p className="text-[14px] font-semibold text-white/90">Stealth</p>
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed mb-4">
                Vi betalar kreatörer efter resultat, inte efter hur mycket de syns.
              </p>
              <div className="flex-1 flex items-end">
                <p className="text-[28px] sm:text-[36px] font-bold text-white/[0.04] leading-none select-none">
                  ?
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[11px] text-gray-500">Q4 2026</span>
                <div className="h-2 w-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(250,204,21,0.4)] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-500" />
              </div>
            </div>
          </div>

          {/* Revin — Tull data-grid dashboard */}
          <div className="group relative rounded-2xl p-5 sm:p-6 flex flex-col overflow-hidden min-h-[280px] cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0b1a30] to-[#0a1628]" />
            {/* Animated data grid */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover:opacity-[0.10] transition-opacity duration-700"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
              }}
            />
            {/* Pulsing scanner line */}
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" style={{ top: '40%' }} />
            {/* Glows */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/12 transition-colors duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/4 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
            {/* Faux data points */}
            <div className="absolute top-[25%] right-[15%] w-1 h-1 rounded-full bg-sky-400/0 group-hover:bg-sky-400/60 transition-all duration-700 pointer-events-none group-hover:shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <div className="absolute top-[55%] left-[20%] w-1 h-1 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400/60 transition-all duration-700 delay-100 pointer-events-none group-hover:shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <div className="absolute top-[35%] right-[40%] w-1 h-1 rounded-full bg-sky-300/0 group-hover:bg-sky-300/60 transition-all duration-700 delay-200 pointer-events-none group-hover:shadow-[0_0_6px_rgba(125,211,252,0.8)]" />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-sky-300/80 border border-sky-400/20 rounded-full px-2.5 py-0.5">Tull & Skatt</span>
                <p className="text-[14px] font-semibold text-white/90">Revin</p>
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed mb-4">
                Över 40% av svenska importörer betalar för mycket i tull. Revin hittar felen och driver återkravet från Tullverket automatiskt.
              </p>
              {/* Fun: fake refund counter */}
              <div className="flex-1 flex items-center gap-4 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                <div className="text-center">
                  <div className="text-[18px] font-bold text-sky-400">142k</div>
                  <div className="text-[9px] text-gray-500 mt-0.5">Återkrävt i år</div>
                </div>
                <div className="text-center">
                  <div className="text-[18px] font-bold text-emerald-400">8.3%</div>
                  <div className="text-[9px] text-gray-500 mt-0.5">Snitt återvinning</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[11px] text-gray-500">Q1 2027</span>
                <div className="h-2 w-2 rounded-full bg-sky-400/60 shadow-[0_0_8px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.8)] transition-shadow duration-500" />
              </div>
            </div>
          </div>

          {/* Stealth: Laglyft — Office bokeh at dusk */}
          <div className="group relative rounded-2xl p-5 sm:p-6 flex flex-col overflow-hidden min-h-[280px] cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#231a14] to-[#1a1410]" />
            {/* Bokeh orbs — depth of field */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[12%] left-[25%] w-28 h-28 bg-amber-400/6 rounded-full blur-2xl group-hover:bg-amber-400/12 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute top-[48%] right-[12%] w-36 h-36 bg-amber-300/5 rounded-full blur-3xl group-hover:bg-amber-300/10 group-hover:scale-110 transition-all duration-700 delay-75" />
              <div className="absolute bottom-[18%] left-[35%] w-24 h-24 bg-orange-400/4 rounded-full blur-2xl group-hover:bg-orange-400/9 group-hover:scale-110 transition-all duration-700 delay-150" />
              <div className="absolute top-[30%] right-[35%] w-4 h-4 bg-amber-200/0 group-hover:bg-amber-200/40 rounded-full blur-sm group-hover:blur-md transition-all duration-700" />
              <div className="absolute bottom-[35%] left-[15%] w-3 h-3 bg-orange-300/0 group-hover:bg-orange-300/40 rounded-full blur-sm group-hover:blur-md transition-all duration-700 delay-100" />
              {/* Radial warm glow */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 bg-[radial-gradient(ellipse_at_60%_45%,_rgba(251,191,36,0.4)_0%,_transparent_70%)]" />
            </div>
            {/* Warm grain */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-soft-light group-hover:opacity-[0.07] transition-opacity duration-500"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '140px',
              }}
            />
            {/* Hover vignette */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-300/80 border border-amber-400/20 rounded-full px-2.5 py-0.5">HR & Compliance</span>
                <p className="text-[14px] font-semibold text-white/90">Laglyft</p>
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed mb-4">
                Lagstiftade utbildningar på autopilot: arbetsmiljö, brandskydd och GDPR, alltid uppdaterat mot gällande krav.
              </p>
              {/* Fun: checklist progress */}
              <div className="flex-1 space-y-2 opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400/60 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-amber-200" />
                  </div>
                  <span className="text-[11px] text-gray-400">Arbetsmiljö</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400/60 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-amber-200" />
                  </div>
                  <span className="text-[11px] text-gray-400">Brandskydd</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-amber-400/30" />
                  <span className="text-[11px] text-gray-500">GDPR</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[11px] text-gray-500">Q2 2027</span>
                <div className="h-2 w-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(251,191,36,0.4)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.8)] transition-shadow duration-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
