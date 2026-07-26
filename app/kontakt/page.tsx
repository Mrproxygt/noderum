import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { linkifyFirst } from "@/lib/seo"

export const metadata: Metadata = { title: "Kontakt", description: "Kontakta Noderum — investerare, talanger, kunder.", alternates: { canonical: "/kontakt" } }

const contacts = [
  { title: "Investerare", desc: "Intresserad av att investera i nästa generations AI-bolag? Vi söker långsiktiga partners som delar vår syn på ägande och operation.", email: "youcef@noderum.se" },
  { title: "Talanger", desc: "Vill du bygga framtidens AI-bolag? Vi söker operatörer som vill äga sin vertikal — inte konsulter som vill fakturera timmar.", email: "careers@noderum.se" },
  { title: "Kunder & partners", desc: "Intresserad av vad vi bygger? Menodi, WebsiteForge, eller något vi borde bygga härnäst? Vi vill höra från dig.", email: "youcef@noderum.se" },
]

export default function KontaktPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">( Kontakt )</p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">Låt oss prata.</h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[680px] leading-relaxed">Investerare, operatörer, kunder — vi bygger framtidens AI-bolag tillsammans.</p>
      </section>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 tracking-tight mb-3">{c.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6 flex-1">{linkifyFirst(c.desc, "Menodi", "https://menodi.se")}</p>
              <a
                href={`mailto:${c.email}`}
                className="group inline-flex items-center gap-1 text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 mt-auto"
              >
                {c.email}
                <ArrowUpRight size={12} className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
