import type { Metadata } from "next"
import { FilterPillsClient } from "./filter-pills-client"

export const metadata: Metadata = { title: "Insikter", description: "Tankar om AI, venture och svenska SMB.", alternates: { canonical: "/knowledge" } }

const articles = [
  { slug: "ai-receptionist-smb", date: "2026.06.10.", tag: "AI", title: "Varför varje hantverkare behöver en AI-receptionist 2026", excerpt: "Svenska SMB missar i snitt 30% av alla inkommande samtal. En AI-receptionist kan ändra på det, utan att ersätta en enda anställd." },
  { slug: "bygga-ai-bolag-sverige", date: "2026.05.28.", tag: "Venture", title: "Att bygga AI-bolag i Sverige: varför vi går bottom-up istället för top-down", excerpt: "Silicon Valley bygger plattformar som ska passa alla. Vi bygger bolag som passar en specifik kund." },
  { slug: "agande-som-drivkraft", date: "2026.05.15.", tag: "Operation", title: "Ägande som drivkraft: varför operatörer bygger bättre bolag än konsulter", excerpt: "När du äger resultatet tänker du annorlunda. Du optimerar för långsiktig lönsamhet, inte för timtaxa." },
  { slug: "smb-digitalisering", date: "2026.04.22.", tag: "SMB", title: "Digitalisering för SMB: varför de flesta verktyg missar målet", excerpt: "De flesta digitala verktyg byggs för enterprise och skalas ner. Vi bygger för SMB från grunden." },
  { slug: "framtidens-venture-studio", date: "2026.04.01.", tag: "Venture", title: "Framtidens venture studio: varför AI kräver ett nytt sätt att bygga bolag", excerpt: "Den traditionella venture-modellen fungerar inte för AI-bolag. Här är varför vi bygger annorlunda." },
]

const tags = [
  { label: "ALLA", value: "all" },
  { label: "AI", value: "AI" },
  { label: "Venture", value: "Venture" },
  { label: "Operation", value: "Operation" },
  { label: "SMB", value: "SMB" },
]

export default function KnowledgePage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-16">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">( Insikter )</p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">Insikter från Noderum.</h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[680px] leading-relaxed">Tankar om AI, venture building och svenska SMB, skrivna av operatörerna bakom bolagen.</p>
      </section>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <FilterPillsClient pills={tags} articles={articles} />
      </div>
    </div>
  )
}
