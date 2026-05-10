"use client"

import Marquee from "react-fast-marquee"
import { cn } from "@/lib/utils"

const logos = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg", alt: "Company 1" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg", alt: "Company 2" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg", alt: "Company 3" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg", alt: "Company 4" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg", alt: "Company 5" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg", alt: "Company 6" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg", alt: "Company 7" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg", alt: "Company 8" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg", alt: "Company 9" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-10.svg", alt: "Company 10" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-11.svg", alt: "Company 11" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-12.svg", alt: "Company 12" },
]

export function LogoMarquee() {
  return (
    <section className="border-y border-neutral-100 dark:border-white/[0.04] py-16">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white/80">
          Företag vi jobbar med
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

        <Marquee gradient={false} autoFill pauseOnHover speed={45}>
          {logos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="mx-10 flex items-center justify-center w-36 h-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="marquee-logo h-8 w-auto max-w-[120px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
