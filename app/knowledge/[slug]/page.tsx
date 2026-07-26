import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { linkifyFirst, toIsoDate } from "@/lib/seo"

export const ARTICLES: Record<string, { title: string; date: string; tag: string; body: string[] }> = {
  "ai-receptionist-smb": { title: "Varför varje hantverkare behöver en AI-receptionist 2026", date: "2026.06.10.", tag: "AI", body: ["Svenska små och medelstora företag missar i snitt 30% av alla inkommande samtal. För en hantverkare med tre anställda betyder det potentiellt hundratusentals kronor i förlorade intäkter varje år.", "En AI-receptionist ändrar på den kalkylen. Det handlar inte om att ersätta människor — det handlar om att fånga varje affärsmöjlighet, dygnet runt, utan att behöva anställa en receptionist på heltid.", "Menodi, vårt första bolag, byggdes för just detta scenario. En svensk AI-receptionist som förstår hantverkares vardag — akuta läckor, offertförfrågningar, bokningar. Svensk kontext, svenska arbetsflöden.", "För hantverkaren betyder det mindre tid i telefon och mer tid på jobbet. För kunden betyder det att någon alltid svarar — även klockan 22 en lördagskväll när vattenledningen sprungit läck."] },
  "bygga-ai-bolag-sverige": { title: "Att bygga AI-bolag i Sverige", date: "2026.05.28.", tag: "Venture", body: ["Silicon Valley bygger plattformar som ska passa alla. Det är en beprövad strategi för global skala — men den fungerar dåligt för AI-bolag som ska operera på den svenska marknaden.", "Svenska SMB har specifika behov. De pratar svenska, följer svenska regler, använder svenska betalsystem. En AI byggd i San Francisco förstår inte skillnaden mellan ROT och rut.", "Vår approach är bottom-up: vi börjar med ett specifikt kundproblem, hos en specifik bransch, och bygger en helhetslösning för just dem.", "I en värld där alla jagar AGI bygger vi vertikala AI-bolag som fungerar i verkligheten — idag, inte om fem år."] },
  "agande-som-drivkraft": { title: "Ägande som drivkraft", date: "2026.05.15.", tag: "Operation", body: ["Det finns en fundamental skillnad mellan att bygga något du äger och att bygga något åt någon annan. Konsulter optimerar för timtaxa. Operatörer optimerar för långsiktig lönsamhet.", "På Noderum ger vi operatörer riktigt ägande från dag ett. Inte optioner — faktiskt ägande i bolaget de bygger. Det förändrar allt.", "När du äger resultatet tänker du annorlunda kring varje beslut. Ska vi lägga tid på en feature som en kund efterfrågar, eller ska vi bygga det som faktiskt driver MRR?", "Noderum är inte en konsultbyrå. Vi är en venture studio. Vi äger det vi bygger — och vi anställer människor som vill äga det tillsammans med oss."] },
  "smb-digitalisering": { title: "Digitalisering för SMB", date: "2026.04.22.", tag: "SMB", body: ["De flesta digitala verktyg byggs för stora företag och skalas ner. Resultatet är produkter som är för komplexa, för dyra, och byggda för arbetsflöden som inte existerar i ett företag med fem anställda.", "En hantverkare behöver inte ett CRM med 47 fält. Hon behöver veta vem som ringde och vad de ville. En frisör behöver inte ett enterprise-bokningssystem — hon behöver en kalender som fungerar.", "På Noderum bygger vi för SMB från grunden. Varje produkt börjar med frågan: vad är det enklaste som faktiskt löser problemet?"] },
  "framtidens-venture-studio": { title: "Framtidens venture studio", date: "2026.04.01.", tag: "Venture", body: ["Den traditionella venture-modellen fungerar inte för AI-bolag. AI förändrar spelplanen på tre avgörande sätt.", "Kapitalbehovet är annorlunda: AI-bolag kan nå lönsamhet snabbare eftersom AI sänker kostnaden. Differentieringen sitter i operation, inte teknik. Och distributionsfördelen byggs in i bolaget från dag ett.", "Därför är Noderum en venture studio, inte en VC-fond. Vi skriver inte checkar — vi bygger bolag. Vi anställer operatörer, inte founders. Och vi äger det vi bygger."] },
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = ARTICLES[slug]
  if (!a) return { title: "Not found" }
  return { title: a.title, description: a.body[0], alternates: { canonical: `/knowledge/${slug}` } }
}
export default async function KnowledgeArticle({ params }: Props) {
  const { slug } = await params
  const a = ARTICLES[slug]
  if (!a) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: toIsoDate(a.date),
    author: { "@type": "Organization", name: "Noderum" },
    publisher: { "@type": "Organization", name: "Noderum", url: "https://www.noderum.se" },
    mainEntityOfPage: `https://www.noderum.se/knowledge/${slug}`,
  }

  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[12px] text-gray-500">{a.date}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded px-2 py-0.5">{a.tag}</span>
        </div>
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-gray-900 tracking-tight leading-[1.05] mb-10 max-w-[800px]">{a.title}</h1>
        <div className="max-w-[680px]">
          {a.body.map((p, i) => (
            <p key={i} className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-6">{linkifyFirst(p, "Menodi", "https://menodi.se")}</p>
          ))}
          <div className="border-t border-black/10 pt-8 mt-8">
            <Link href="/knowledge" className="group inline-flex items-center gap-2 text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300">
              <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Journal
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
