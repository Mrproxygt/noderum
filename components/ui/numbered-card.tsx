import Link from "next/link"
import Image from "next/image"

type NumberedCardProps = {
  number: string
  title: string
  description: string
  image?: string
  href?: string
  linkLabel?: string
  className?: string
  children?: React.ReactNode
}

export function NumberedCard({
  number,
  title,
  description,
  image,
  href,
  linkLabel = "Läs mer",
  className = "",
  children,
}: NumberedCardProps) {
  const content = (
    <div className={`numbered-card ${className}`}>
      <span className="numbered-card-watermark">{number}</span>
      {image && (
        <div className="numbered-card-image">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className="numbered-card-body">
        <h3 className="t-lazare t-400 t-24 t-white t-lh-1 mb-0" style={{ marginBottom: "1rem" }}>
          {title}
        </h3>
        <p className="t-14 t-mid-gray t-lh-1-6 mb-0" style={{ marginBottom: "1.5rem" }}>
          {description}
        </p>
        {children}
        {href && (
          <Link href={href} className="link">
            {linkLabel}
            <span className="link-arrow">→</span>
          </Link>
        )}
      </div>
    </div>
  )

  if (href && !children) {
    return <Link href={href} style={{ display: "block" }}>{content}</Link>
  }

  return content
}
