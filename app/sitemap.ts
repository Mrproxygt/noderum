import type { MetadataRoute } from "next"
import { ARTICLES } from "./knowledge/[slug]/page"
import { NEWS } from "./news/[slug]/page"

const BASE = "https://www.noderum.se"
const STATIC_ROUTES = ["", "/portfolio", "/about", "/knowledge", "/news", "/kontakt", "/integritetspolicy", "/anvandarvillkor"]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
  }))

  const knowledgeEntries = Object.keys(ARTICLES).map((slug) => ({
    url: `${BASE}/knowledge/${slug}`,
    lastModified: new Date(),
  }))

  const newsEntries = Object.keys(NEWS).map((slug) => ({
    url: `${BASE}/news/${slug}`,
    lastModified: new Date(),
  }))

  return [...staticEntries, ...knowledgeEntries, ...newsEntries]
}
