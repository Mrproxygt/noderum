import type { Metadata } from "next"
import { DemoCallTrigger } from "@/components/demo-call/DemoCallTrigger"

export const metadata: Metadata = { title: "Bolag — Noderum", description: "Två AI-bolag i pilotdrift — ägda och drivna av Noderum." }

export default function PortfolioPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">( Bolag )</p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">Två bolag. Ett uppdrag.</h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[680px] leading-relaxed">Varje bolag ägt, drivet och opererat av Noderum från idé till lönsamhet.</p>
      </section>

      {/* Menodi — full-width demo call */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">01</span>
          <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 tracking-tight">Menodi</h2>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded-full px-2.5 py-0.5">AI-receptionist</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
          <div className="rounded-2xl overflow-hidden">
            <DemoCallTrigger />
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col">
            <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
              Menodi är en AI-receptionist som svarar, bokar och följer upp — dygnet runt, helt på svenska.
              Byggd specifikt för svenska SMB: hantverkare, salonger, restauranger och konsulter.
            </p>
            <ul className="space-y-3 mb-6 text-[14px] text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">•</span>
                <span>Svarar på inkommande samtal 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">•</span>
                <span>Bokar möten direkt i din Google Calendar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">•</span>
                <span>Hanterar allt från enkla frågor till komplexa bokningar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">•</span>
                <span>Pilotkunder rapporterar 40% färre missade samtal</span>
              </li>
            </ul>
            <div className="mt-auto">
              <span className="text-[12px] text-gray-500">Pilotdrift med betalande kunder</span>
            </div>
          </div>
        </div>

        <p className="text-[13px] text-gray-500 leading-relaxed max-w-[680px]">
          Menodi använder ElevenLabs röstteknologi för naturlig, svensk konversation och integrerar
          med Google Calendar för sömlös bokning. Testa själv — tryck play och prata med Alex,
          vår AI-receptionist för hantverkare.
        </p>
      </div>

      {/* Stealth — smokey dark section */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <div className="border-t border-black/10 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">02</span>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 tracking-tight">Stealth</h2>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded-full px-2.5 py-0.5">Marketing</span>
          </div>

          <div className="relative max-w-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] p-6 sm:p-8">
            {/* Smoke texture */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-soft-light"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px',
              }}
            />
            {/* Fog gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/[0.03] pointer-events-none" />

            <div className="relative z-10">
              <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                Ett nytt bolag inom performance-baserad influencer marketing. Vi kopplar ihop svenska
                varumärken med rätt kreatörer — och betalar endast för faktiska resultat.
              </p>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                Traditionell influencer marketing betalar för exponering. Vi betalar för resultat.
                En ny modell för en ny marknad — byggd från grunden för det svenska ekosystemet.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-gray-500">Under utveckling — Q4 2026</span>
                <div className="h-2 w-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
