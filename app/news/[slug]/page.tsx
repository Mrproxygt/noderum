import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { linkifyFirst, toIsoDate } from "@/lib/seo"

export const NEWS: Record<string, { title: string; date: string; body: string[] }> = {
  "menodi-lansering": { title: "Noderum lanserar Menodi — AI-receptionist för svenska SMB", date: "2026.06.01", body: ["Noderum lanserar idag Menodi, en AI-receptionist byggd specifikt för svenska små och medelstora företag. Menodi svarar på inkommande samtal dygnet runt, bokar möten direkt i kundens kalender, och hanterar allt från enkla frågor till komplexa bokningar — helt på svenska.", "Menodi är resultatet av sex månaders utveckling och pilotdrift med utvalda kunder inom hantverk, salong, restaurang och konsultverksamhet. Pilotkunderna rapporterar i snitt 40% färre missade samtal.", "Menodi använder ElevenLabs röstteknologi för naturlig, svensk konversation och integrerar med Google Calendar för sömlös bokning. Tjänsten finns tillgänglig från och med idag på menodi.se."] },
  "websiteforge-live": { title: "WebsiteForge går live — hemsidor på under 48 timmar", date: "2026.05.15", body: ["WebsiteForge, Noderums andra portföljbolag, går idag in i aktiv drift. Tjänsten levererar professionella hemsidor för svenska SMB på under 48 timmar.", "WebsiteForge kombinerar AI-generering med mänsklig finishing. Fast pris, ingen timtaxa, inga överraskningar. Riktar sig främst till hantverkare, restauranger och konsulter."] },
  "noderum-grundas": { title: "Noderum grundas — en ny venture studio", date: "2026.04.01", body: ["Idag lanseras Noderum — en ny typ av venture studio som grundar, äger och driver AI-bolag för den svenska marknaden. Till skillnad från traditionella riskkapitalbolag bygger Noderum bolagen själva.", "Noderum fokuserar på vertikala AI-applikationer för svenska SMB — hantverkare, restauranger, konsulter och salonger. De första två portföljbolagen är redan i pilotdrift."] },
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(NEWS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const n = NEWS[slug]
  if (!n) return { title: "Not found — Noderum" }
  return { title: `${n.title} — Noderum`, description: n.body[0], alternates: { canonical: `/news/${slug}` } }
}

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params
  const n = NEWS[slug]
  if (!n) notFound()

  const newsJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: n.title,
    datePublished: toIsoDate(n.date),
    author: { "@type": "Organization", name: "Noderum" },
    publisher: { "@type": "Organization", name: "Noderum", url: "https://noderum.se" },
    mainEntityOfPage: `https://noderum.se/news/${slug}`,
  }

  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
      />
      <article className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">{n.date} / News</p>
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-gray-900 tracking-tight leading-[1.05] mb-10 max-w-[800px]">{n.title}</h1>
        <div className="max-w-[680px]">
          {n.body.map((p, i) => (
            <p key={i} className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-6">{linkifyFirst(p, "menodi.se", "https://menodi.se")}</p>
          ))}
          <div className="border-t border-black/10 pt-8 mt-8">
            <Link href="/news" className="group inline-flex items-center gap-2 text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300">
              <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to News
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
