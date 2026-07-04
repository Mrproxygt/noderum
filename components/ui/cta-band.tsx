import Link from "next/link"

type CTABandProps = {
  tagline: string
  buttonLabel?: string
  buttonHref?: string
}

export function CTABand({
  tagline,
  buttonLabel = "Kontakta oss",
  buttonHref = "/kontakt",
}: CTABandProps) {
  return (
    <section className="cta-band">
      <div className="container-narrow">
        <p className="cta-band-tagline">{tagline}</p>
        <Link href={buttonHref} className="button">
          {buttonLabel} →
        </Link>
      </div>
    </section>
  )
}
