import type { Metadata } from "next"

export const metadata: Metadata = { title: "Studio — Noderum", description: "Vision, team och bolag — Noderum grundar och driver AI-bolag." }

const sections = [
  { id: "vision", num: "01", label: "Vision & Väg", title: "Vårt DNA", lead: "Ta djärva språng. Övervinn varje utmaning.", body: "Noderum föddes ur en enkel insikt: de bästa AI-bolagen byggs inte av konsulter — de byggs av operatörer som äger resultatet. Vi grundar, finansierar och driver AI-företag för svenska SMB. Inga mellanhänder, inga konsulter. Bara operativa bolag som löser verkliga problem." },
  { id: "team", num: "02", label: "Team", title: "Globalt nätverk. Lokal operation.", lead: "Globalt tänkande. Lokal exekvering.", body: "Vårt team kombinerar djup teknisk expertis med operativ erfarenhet. Vi ger operatörer riktigt ägande och ansvar från dag ett — inte optioner, faktiskt ägande. Varje bolag leds av någon som äger sin vertikal och driver det som sitt eget." },
  { id: "company", num: "03", label: "Bolag", title: "Precision och djärvhet", lead: "Noggrann design. Samvetsgrann exekvering.", body: "Vi är extremt selektiva med vilka bolag vi startar. Varje satsning bygger på ett specifikt kundproblem, en specifik bransch, en specifik lösning. Vi går djupt, inte brett. Tre bolag i pilotdrift — fler på väg." },
]

export default function AboutPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">( Studio )</p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">Vi är Noderum.</h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[680px] leading-relaxed">En venture studio som grundar, äger och driver operativa AI-företag — från första raden kod till första kunden.</p>
      </section>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="border-t border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">0{s.num}</p>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">{s.title}</h2>
            <p className="text-[16px] sm:text-[18px] text-gray-900 font-medium mb-4 max-w-[680px] leading-relaxed">{s.lead}</p>
            <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-[680px] leading-relaxed">{s.body}</p>
          </div>
        </section>
      ))}
    </div>
  )
}
