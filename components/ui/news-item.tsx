import Link from "next/link"

type NewsItemProps = {
  date: string
  title: string
  tag?: string
  href: string
}

export function NewsItem({ date, title, tag, href }: NewsItemProps) {
  return (
    <Link href={href} className="news-item">
      <span className="news-item-date">{date}</span>
      <span className="news-item-title">
        {title}
        {tag && <span className="news-item-tag">{tag}</span>}
      </span>
    </Link>
  )
}
