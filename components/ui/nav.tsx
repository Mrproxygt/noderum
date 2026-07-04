"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Clock, ArrowUpRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Bolag", href: "/portfolio" },
  { label: "Studio", href: "/about" },
  { label: "Insikter", href: "/knowledge" },
  { label: "Kontakt", href: "/kontakt" },
]

function useStockholmTime() {
  const [time, setTime] = useState("")
  useEffect(() => {
    function tick() {
      setTime(
        new Intl.DateTimeFormat("sv-SE", {
          timeZone: "Europe/Stockholm",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const stockholmTime = useStockholmTime()
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1440px]">
        <div className="flex items-center justify-between rounded-full bg-white px-5 py-2 sm:px-6 sm:py-3 shadow-sm">
          {/* Left: Logo + links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[17px] sm:text-[18px] font-bold text-gray-900 tracking-tight">
              Noderum
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-bold text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: status + CTA (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="hidden lg:block text-[13px] text-gray-600">
              Tar uppdrag för Q4 2026
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {stockholmTime} i Stockholm
            </span>
            <Link
              href="/kontakt"
              className="group flex items-center rounded-full bg-gray-900 text-white text-[13px] font-medium pl-5 pr-2 py-2"
            >
              <span className="overflow-hidden h-[20px]">
                <span className="flex flex-col group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <span className="text-white">Boka ett samtal</span>
                  <span className="text-white">Boka ett samtal</span>
                </span>
              </span>
              <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-45">
                <ArrowUpRight size={12} className="text-gray-900" />
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex md:hidden items-center justify-center h-9 w-9 rounded-full bg-gray-900 text-white"
            aria-label="Öppna meny"
          >
            <Menu size={16} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden">
          {/* Menu header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <Link href="/" className="text-[18px] font-bold text-gray-900 tracking-tight" onClick={() => setMenuOpen(false)}>
              Noderum
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-900 text-white"
              aria-label="Stäng meny"
            >
              <X size={16} />
            </button>
          </div>

          {/* Menu links */}
          <div className="flex flex-col gap-1 px-5 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[28px] sm:text-[32px] font-bold text-gray-900 leading-[1.6] hover:text-gray-500 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Menu bottom */}
          <div className="mt-auto px-5 pb-8 space-y-4">
            <div className="flex items-center gap-2 text-[14px] text-gray-600">
              <Clock size={14} />
              {stockholmTime} i Stockholm
            </div>
            <p className="text-[14px] text-gray-600">Tar uppdrag för Q4 2026</p>
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-[15px] font-medium px-6 py-3"
            >
              Boka ett samtal
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
