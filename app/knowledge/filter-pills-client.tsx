"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Article = {
  slug: string
  date: string
  tag: string
  title: string
  excerpt: string
}

type Props = {
  pills: { label: string; value: string }[]
  articles: Article[]
}

export function FilterPillsClient({ pills, articles }: Props) {
  const [active, setActive] = useState("all")

  const filtered = useMemo(
    () => (active === "all" ? articles : articles.filter((a) => a.tag === active)),
    [active, articles],
  )

  return (
    <>
      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {pills.map((p) => (
          <button
            key={p.value}
            onClick={() => setActive(p.value)}
            className={`px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest rounded-full border transition-all duration-300 ${
              active === p.value
                ? "bg-gray-900 text-white border-gray-900"
                : "text-gray-600 border-black/20 hover:border-black/40 hover:text-gray-900"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="flex flex-col">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/knowledge/${article.slug}`}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-black/10 hover:border-black/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 sm:min-w-[180px]">
              <span className="text-[12px] text-gray-500 whitespace-nowrap">{article.date}</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 border border-black/20 rounded px-2 py-0.5">
                {article.tag}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] sm:text-[17px] font-medium text-gray-900 leading-snug mb-1">{article.title}</h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">{article.excerpt}</p>
            </div>
            <ArrowUpRight size={14} className="shrink-0 text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45 hidden sm:block" />
          </Link>
        ))}
      </div>
    </>
  )
}
