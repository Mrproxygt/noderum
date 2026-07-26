import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { DemoCallTrigger } from "@/components/demo-call/DemoCallTrigger"

export const metadata: Metadata = {
  title: "Bolag — Noderum",
  description: "Fyra AI-bolag ägda och drivna av Noderum — från idé till lönsamhet.",
  alternates: { canonical: "/portfolio" },
}

export default function PortfolioPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
          ( Bolag )
        </p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">
          Fyra bolag. Ett uppdrag.
        </h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[680px] leading-relaxed">
          Varje bolag ägt, drivet och opererat av Noderum från idé till lönsamhet. Två i pilotdrift, två i stealth — alla byggda för svenska SMB.
        </p>
      </section>

      {/* 01 — Menodi */}
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
                <span className="text-gray-900 mt-0.5">&bull;</span>
                <span>Svarar på inkommande samtal 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">&bull;</span>
                <span>Bokar möten direkt i din Google Calendar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">&bull;</span>
                <span>Hanterar allt från enkla frågor till komplexa bokningar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 mt-0.5">&bull;</span>
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
        <a
          href="https://menodi.se"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-[13px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 mt-4"
        >
          Besök menodi.se
          <ArrowUpRight size={12} className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45" />
        </a>
      </div>

      {/* 02 — Stealth: Marketing */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-12">
        <div className="border-t border-black/10 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">02</span>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 tracking-tight">Stealth</h2>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded-full px-2.5 py-0.5">Marketing</span>
          </div>

          <div className="relative max-w-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] p-6 sm:p-8 group cursor-default">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-soft-light group-hover:opacity-[0.10] transition-opacity duration-700"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/[0.02] pointer-events-none" />
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-amber-500/8 via-amber-400/3 to-transparent pointer-events-none ring-1 ring-amber-500/0 group-hover:ring-amber-500/15 transition-all duration-700" />

            <div className="relative z-10">
              <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                Ett nytt bolag inom performance-baserad influencer marketing. Vi kopplar ihop svenska
                varumärken med rätt kreatörer — och betalar endast för faktiska resultat.
              </p>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                Traditionell influencer marketing betalar för exponering. Vi betalar för resultat.
                En ny modell för en ny marknad — byggd från grunden för det svenska ekosystemet.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-gray-500">Under utveckling — Q4 2026</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-amber-400/40 group-hover:text-amber-400/70 transition-colors duration-500">???</span>
                  <div className="h-2 w-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(250,204,21,0.4)] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03 — Revin */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-12">
        <div className="border-t border-black/10 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">03</span>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 tracking-tight">Revin</h2>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded-full px-2.5 py-0.5">Tull & Skatt</span>
          </div>

          <div className="relative max-w-2xl rounded-2xl overflow-hidden p-6 sm:p-8 group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0b1a30] to-[#0a1628]" />
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/12 transition-colors duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/4 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" style={{ top: '35%' }} />
            <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-sky-400/0 group-hover:bg-sky-400/60 transition-all duration-700 pointer-events-none group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400/60 transition-all duration-700 delay-100 pointer-events-none group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-[24px] sm:text-[28px] font-bold text-sky-400 opacity-50 group-hover:opacity-80 transition-opacity duration-500">142k</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Återkrävt i år</div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] sm:text-[28px] font-bold text-emerald-400 opacity-50 group-hover:opacity-80 transition-opacity duration-500">8.3%</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Snitt återvinning</div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] sm:text-[28px] font-bold text-gray-500 opacity-30 group-hover:opacity-50 transition-opacity duration-500">...</div>
                  <div className="text-[10px] text-gray-600 mt-0.5">Mer kommer</div>
                </div>
              </div>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                Revin automatiserar tullåtervinning för svenska importörer. Under 2026 återkrävde
                svenska företag 1,4 miljarder kronor i tull — men de allra flesta gör det manuellt,
                via konsulter, eller inte alls. Revin gör det automatiskt.
              </p>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                Vår AI scanner tulldeklarationer, identifierar felklassificerade varukoder och
                missade undantag, och driver hela återkravsprocessen — från ansökan till utbetalning
                från Tullverket. Ingen konsult, inga timarvoden, ingen administration. Bara pengar
                tillbaka.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-gray-500">Under utveckling — Q1 2027</span>
                <a
                  href="https://revinst.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-sky-400/70 hover:text-sky-400 transition-colors"
                >
                  revinst.vercel.app
                </a>
                <div className="h-2 w-2 rounded-full bg-sky-400/60 shadow-[0_0_8px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.8)] transition-shadow duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 04 — Laglyft */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <div className="border-t border-black/10 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">04</span>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 tracking-tight">Laglyft</h2>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded-full px-2.5 py-0.5">HR & Compliance</span>
          </div>

          <div className="relative max-w-2xl rounded-2xl overflow-hidden p-6 sm:p-8 group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#231a14] to-[#1a1410]" />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[15%] left-[25%] w-32 h-32 bg-amber-400/6 rounded-full blur-2xl group-hover:bg-amber-400/12 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute top-[50%] right-[15%] w-40 h-40 bg-amber-300/5 rounded-full blur-3xl group-hover:bg-amber-300/10 group-hover:scale-110 transition-all duration-700 delay-75" />
              <div className="absolute bottom-[10%] left-[40%] w-28 h-28 bg-orange-400/4 rounded-full blur-2xl group-hover:bg-orange-400/9 group-hover:scale-110 transition-all duration-700 delay-150" />
              <div className="absolute top-[35%] right-[35%] w-5 h-5 bg-amber-200/0 group-hover:bg-amber-200/50 rounded-full blur-sm group-hover:blur-md transition-all duration-700" />
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 bg-[radial-gradient(ellipse_at_60%_45%,_rgba(251,191,36,0.4)_0%,_transparent_70%)]" />
            </div>
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-soft-light group-hover:opacity-[0.07] transition-opacity duration-500"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '140px',
              }}
            />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            <div className="relative z-10">
              {/* Checklist progress */}
              <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-90 transition-opacity duration-500">
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
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-gray-600/30" />
                  <span className="text-[11px] text-gray-600">...</span>
                </div>
              </div>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                En digital plattform som automatiserar lagstiftade utbildningar för svenska arbetsgivare.
                Arbetsmiljö, brandskydd, GDPR, HLR — allt samlat på ett ställe, alltid uppdaterat mot
                gällande lagkrav.
              </p>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                Svenska företag lägger miljarder på obligatoriska personalutbildningar varje år — ofta
                med papperslistor, engångsintyg och noll överblick. Laglyft digitaliserar hela kedjan:
                från behovsanalys och schemaläggning till digitala intyg och myndighetsklara
                revisorsunderlag.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-gray-500">Under utveckling — Q2 2027</span>
                <div className="h-2 w-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(251,191,36,0.4)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.8)] transition-shadow duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
