import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { linkifyFirst, toIsoDate } from "@/lib/seo"

export const ARTICLES: Record<string, { title: string; date: string; tag: string; body: string[] }> = {
  "ai-receptionist-smb": { title: "Varför varje hantverkare behöver en AI-receptionist 2026", date: "2026.06.10.", tag: "AI", body: ["Svenska små och medelstora företag missar i snitt 30% av alla inkommande samtal. För en hantverkare med tre anställda kan det betyda hundratusentals kronor i förlorade intäkter varje år.", "En AI-receptionist ändrar den kalkylen genom att fånga varje affärsmöjlighet dygnet runt, utan att företaget behöver anställa en receptionist på heltid.", "Menodi, vårt första bolag, byggdes för just det scenariot: en svensk AI-receptionist som förstår hantverkarens vardag, från akuta läckor och offertförfrågningar till vanliga bokningar, i svensk kontext och med svenska arbetsflöden.", "För hantverkaren betyder det mindre tid i telefon och mer tid på jobbet. För kunden betyder det att någon svarar även klockan 22 en lördagskväll när vattenledningen har sprungit läck."] },
  "bygga-ai-bolag-sverige": { title: "Att bygga AI-bolag i Sverige", date: "2026.05.28.", tag: "Venture", body: ["Silicon Valley bygger plattformar som ska passa alla. Det är en beprövad strategi för global skala, men den passar sällan AI-bolag som ska verka på den svenska marknaden.", "Svenska SMB har specifika behov. De pratar svenska, följer svenska regler och använder svenska betalsystem, och en AI byggd i San Francisco vet sällan skillnaden mellan ROT och RUT.", "Vår approach är bottom-up. Vi börjar med ett specifikt kundproblem hos en specifik bransch och bygger en helhetslösning för just dem.", "Medan branschen jagar AGI bygger vi vertikala AI-bolag som fungerar i verkligheten redan idag."] },
  "agande-som-drivkraft": { title: "Ägande som drivkraft", date: "2026.05.15.", tag: "Operation", body: ["Det finns en grundläggande skillnad mellan att bygga något du äger och att bygga något åt någon annan. Konsulter optimerar för timtaxa. Operatörer optimerar för långsiktig lönsamhet.", "På Noderum får operatörer riktigt ägande från dag ett, inte optioner utan faktiskt ägande i bolaget de bygger. Det förändrar hur man fattar beslut.", "När du äger resultatet tänker du annorlunda kring varje beslut: ska vi lägga tid på en feature en kund efterfrågar, eller på det som faktiskt driver MRR?", "Noderum är ingen konsultbyrå, utan en venture studio. Vi äger det vi bygger, och vi anställer människor som vill äga det tillsammans med oss."] },
  "smb-digitalisering": { title: "Digitalisering för SMB", date: "2026.04.22.", tag: "SMB", body: ["De flesta digitala verktyg byggs för stora företag och skalas sedan ner. Resultatet blir produkter som är för komplexa, för dyra och byggda för arbetsflöden som inte existerar i ett företag med fem anställda.", "En hantverkare behöver inte ett CRM med 47 fält, hon behöver veta vem som ringde och vad de ville. En frisör behöver inte ett enterprise-bokningssystem, hon behöver en kalender som fungerar.", "På Noderum bygger vi för SMB från grunden. Varje produkt börjar med samma fråga: vad är det enklaste som faktiskt löser problemet?"] },
  "framtidens-venture-studio": { title: "Framtidens venture studio", date: "2026.04.01.", tag: "Venture", body: ["Den traditionella venture-modellen passar dåligt för AI-bolag, av tre skäl.", "Kapitalbehovet ser annorlunda ut eftersom AI sänker kostnaden att nå lönsamhet. Differentieringen sitter i hur bolaget drivs, inte i tekniken. Och distributionsfördelen byggs in redan från start.", "Det är därför Noderum är en venture studio och inte en VC-fond. Vi skriver inga checkar, vi bygger bolagen själva. Vi anställer operatörer istället för founders, och vi äger det vi bygger."] },
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
