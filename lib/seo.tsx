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

export function toIsoDate(d: string): string {
  return d.replace(/\.$/, "").split(".").join("-")
}
