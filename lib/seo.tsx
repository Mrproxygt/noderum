import type { ReactNode } from "react"

export function linkifyFirst(text: string, match: string, href: string): ReactNode[] {
  const idx = text.indexOf(match)
  if (idx === -1) return [text]
  return [
    text.slice(0, idx),
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-900 underline decoration-black/20 underline-offset-2 hover:decoration-black/50 transition-colors"
    >
      {match}
    </a>,
    text.slice(idx + match.length),
  ]
}

export function linkifyMany(text: string, replacements: { match: string; href: string }[]): ReactNode[] {
  const hits = replacements
    .map((r) => ({ ...r, idx: text.indexOf(r.match) }))
    .filter((r) => r.idx !== -1)
    .sort((a, b) => a.idx - b.idx)

  const nodes: ReactNode[] = []
  let cursor = 0
  for (const hit of hits) {
    if (hit.idx < cursor) continue
    nodes.push(text.slice(cursor, hit.idx))
    nodes.push(
      <a
        key={hit.href}
        href={hit.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 underline decoration-black/20 underline-offset-2 hover:decoration-black/50 transition-colors"
      >
        {hit.match}
      </a>,
    )
    cursor = hit.idx + hit.match.length
  }
  nodes.push(text.slice(cursor))
  return nodes
}

export function toIsoDate(d: string): string {
  return d.replace(/\.$/, "").split(".").join("-")
}
