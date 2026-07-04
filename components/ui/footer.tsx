"use client"
import Link from "next/link"
import { Shield, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#EFEFEF]">
      <div className="border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-14">
          {/* Top row — responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row justify-between gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-1">
              <Link href="/" className="text-[17px] font-bold text-gray-900 tracking-tight mb-3 inline-block">
                Noderum
              </Link>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[260px]">
                Vi grundar, äger och driver operativa AI-företag för svenska SMB.
              </p>
            </div>

            {/* Navigera */}
            <div>
              <p className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-3">
                Navigera
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/portfolio" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300">Bolag</Link>
                <Link href="/about" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300">Studio</Link>
                <Link href="/knowledge" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300">Insikter</Link>
                <Link href="/kontakt" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300">Kontakt</Link>
              </div>
            </div>

            {/* Juridik */}
            <div>
              <p className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-3">
                Juridik
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/integritetspolicy" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300">Integritetspolicy</Link>
                <Link href="/anvandarvillkor" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-gray-900 transition-colors duration-300">Användarvillkor</Link>
              </div>
            </div>

            {/* Säkerhet */}
            <div className="col-span-2 sm:col-span-1 mt-2 sm:mt-0">
              <p className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-3">
                Säkerhet & certifiering
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* SOC 2 Type II badge */}
                <a href="/integritetspolicy" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 hover:border-black/30 transition-colors duration-300" aria-label="SOC 2 Type II certifierad">
                  <svg width="36" height="36" viewBox="0 0 96 96" aria-hidden="true">
                    <circle cx="48" cy="48" r="44" fill="rgba(0,0,0,0.02)" stroke="currentColor" strokeWidth="4" className="text-gray-300" />
                    <text x="48" y="46" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="23" fill="currentColor" className="text-gray-700">SOC 2</text>
                    <text x="48" y="66" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="600" fontSize="13" letterSpacing="1.5" fill="currentColor" className="text-gray-700">TYPE II</text>
                  </svg>
                </a>

                {/* GDPR badge */}
                <a href="/integritetspolicy" className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 px-4 py-2 hover:border-amber-400 transition-colors duration-300" aria-label="GDPR-kompatibel">
                  <svg width="36" height="36" viewBox="0 0 96 96" aria-hidden="true">
                    <circle cx="48" cy="48" r="44" fill="rgba(0,0,0,0.02)" stroke="#EAB308" strokeWidth="3" />
                    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
                      const rad = (deg * Math.PI) / 180
                      const cx = 48 + 33 * Math.cos(rad)
                      const cy = 48 + 33 * Math.sin(rad)
                      return <circle key={i} cx={cx} cy={cy} r="3" fill="#EAB308" />
                    })}
                    <text x="48" y="55" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="20" fill="currentColor" className="text-gray-700">GDPR</text>
                  </svg>
                </a>

                {/* ElevenLabs Grants badge */}
                <a
                  href="https://try.elevenlabs.io/pssyvasn1361"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 hover:border-black/30 transition-colors duration-300"
                  aria-label="Menodi × ElevenLabs Grants — stolt mottagare"
                >
                  <Shield size={14} className="text-purple-500" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">×</span>
                  <span className="text-[13px] font-semibold text-gray-900">ElevenLabs Grants</span>
                  <Star size={12} className="text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-black/10">
            <p className="text-[11px] sm:text-[12px] text-gray-500">
              © {new Date().getFullYear()} Noderum AB · En del av Link Collective (org.nr 559524-9615)
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[11px] sm:text-[12px] text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Till toppen ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
