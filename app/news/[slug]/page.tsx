import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { linkifyFirst, linkifyMany, toIsoDate } from "@/lib/seo"

type NewsItem = {
  title: string
  date: string
  body: string[]
  linksByParagraph?: Record<number, { match: string; href: string }[]>
  related?: { href: string; label: string }[]
}

export const NEWS: Record<string, NewsItem> = {
  "menodi-lansering": {
    title: "Noderum lanserar Menodi — AI-receptionist för svenska SMB",
    date: "2026.06.01",
    body: [
      "Noderum lanserar idag Menodi, en AI-receptionist byggd specifikt för svenska små och medelstora företag. Menodi svarar på inkommande samtal dygnet runt, bokar möten direkt i kundens kalender och hanterar allt från enkla frågor till komplexa bokningar, helt på svenska.",
      "Menodi är resultatet av sex månaders utveckling och pilotdrift med utvalda kunder inom hantverk, salong, restaurang och konsultverksamhet. Pilotkunderna rapporterar i snitt 40% färre missade samtal.",
      "Menodi använder ElevenLabs röstteknologi för naturlig, svensk konversation och integrerar med Google Calendar för sömlös bokning.",
      "Under huven är produkten uppdelad i tre kärnfunktioner: samtalshantering som svarar och triagerar varje inkommande samtal, kalendersync som bokar direkt i kundens befintliga kalender, och sms-bekräftelse som skickar automatisk bekräftelse till slutkunden efter varje bokat besök.",
      "Piloten har kört mot flera hantverksbranscher, bland annat bygg, VVS och el, där ett missat samtal ofta betyder en förlorad offert. Menodi finns nu även som en dedikerad lösning för hantverkare, med fullständig prissättning tillgänglig på menodi.se/priser.",
      "Tjänsten finns tillgänglig från och med idag på menodi.se, med mer information om bolaget bakom produkten på menodi.se/om.",
    ],
    linksByParagraph: {
      3: [
        { match: "samtalshantering", href: "https://menodi.se/funktioner/samtalshantering" },
        { match: "kalendersync", href: "https://menodi.se/funktioner/kalendersync" },
        { match: "sms-bekräftelse", href: "https://menodi.se/funktioner/sms-bekraftelse" },
      ],
      4: [
        { match: "en dedikerad lösning för hantverkare", href: "https://menodi.se/ai-receptionist-hantverkare" },
        { match: "menodi.se/priser", href: "https://menodi.se/priser" },
      ],
      5: [
        { match: "menodi.se", href: "https://menodi.se" },
        { match: "menodi.se/om", href: "https://menodi.se/om" },
      ],
    },
    related: [
      { href: "https://menodi.se", label: "Menodi — AI-receptionist" },
      { href: "https://menodi.se/priser", label: "Priser" },
      { href: "https://menodi.se/funktioner", label: "Alla funktioner" },
      { href: "https://menodi.se/ai-receptionist-hantverkare", label: "AI-receptionist för hantverkare" },
      { href: "https://menodi.se/branscher", label: "Branscher vi byggt för" },
      { href: "https://menodi.se/integrationer/google-calendar", label: "Google Calendar-integrationen" },
    ],
  },
  "websiteforge-live": { title: "WebsiteForge går live — hemsidor på under 48 timmar", date: "2026.05.15", body: ["WebsiteForge, Noderums andra portföljbolag, går idag in i aktiv drift. Tjänsten levererar professionella hemsidor för svenska SMB på under 48 timmar.", "WebsiteForge kombinerar AI-generering med mänsklig finishing till fast pris, utan timtaxa och utan överraskningar. Riktar sig främst till hantverkare, restauranger och konsulter."] },
  "noderum-grundas": { title: "Noderum grundas — en ny venture studio", date: "2026.04.01", body: ["Idag lanseras Noderum, en ny typ av venture studio som grundar, äger och driver AI-bolag för den svenska marknaden. Till skillnad från traditionella riskkapitalbolag bygger Noderum bolagen själva.", "Noderum fokuserar på vertikala AI-applikationer för svenska SMB: hantverkare, restauranger, konsulter och salonger. De första två portföljbolagen är redan i pilotdrift."] },
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(NEWS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const n = NEWS[slug]
  if (!n) return { title: "Not found" }
  return { title: n.title, description: n.body[0], alternates: { canonical: `/news/${slug}` } }
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
    publisher: { "@type": "Organization", name: "Noderum", url: "https://www.noderum.se" },
    mainEntityOfPage: `https://www.noderum.se/news/${slug}`,
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
          {n.body.map((p, i) => {
            const custom = n.linksByParagraph?.[i]
            const content = custom ? linkifyMany(p, custom) : linkifyFirst(p, "menodi.se", "https://menodi.se")
            return <p key={i} className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-6">{content}</p>
          })}

          {n.related && (
            <div className="rounded-2xl bg-white p-6 sm:p-8 mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-4">Läs mer hos Menodi</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {n.related.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300"
                    >
                      {r.label}
                      <ArrowUpRight size={12} className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

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
