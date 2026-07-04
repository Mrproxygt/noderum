import Link from "next/link"
import Image from "next/image"

type ArticleCardProps = {
  date: string
  tag: string
  title: string
  excerpt: string
  image?: string
  href: string
}

export function ArticleCard({ date, tag, title, excerpt, image, href }: ArticleCardProps) {
  return (
    <Link href={href} className="article-card">
      <div>
        <div className="article-card-meta">
          <span className="article-card-date">{date}</span>
          <span className="article-card-tag"># {tag}</span>
        </div>
        <h3 className="article-card-title">{title}</h3>
        <p className="article-card-excerpt">{excerpt}</p>
        <span className="link">
          Läs mer
          <span className="link-arrow">→</span>
        </span>
      </div>
      {image && (
        <div className="article-card-thumb">
          <Image
            src={image}
            alt={title}
            fill
            sizes="280px"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </Link>
  )
}
