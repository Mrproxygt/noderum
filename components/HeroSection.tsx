"use client"

import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react"

export default function HeroSection() {
  return (
    <section className="relative h-[90svh] min-h-[520px] sm:h-screen sm:min-h-[600px] flex flex-col items-center justify-end overflow-hidden bg-[#EFEFEF]">
      {/* Shader overlay — hidden on mobile for performance, shown sm+ */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
        <Shader>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Bottom content area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-10 sm:pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-0">
          {/* Left: tagline */}
          <div className="md:max-w-[340px]">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 leading-relaxed max-w-[260px] sm:max-w-none">
              Vi grundar, äger och driver operativa AI-bolag för svenska SMB — från första raden kod till första kunden.
            </p>
          </div>

          {/* Right: heading */}
          <div className="md:text-right">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2 sm:mb-3">
              Venture Studio — Grundat 2026
            </p>
            <h1 className="text-[clamp(2.2rem,8vw,7rem)] font-semibold leading-[0.92] sm:leading-[0.9] text-gray-900 tracking-tight">
              Vi bygger AI-bolag.
              <br />
              Vi äger resultatet.
              <br />
              Inga mellanhänder.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
