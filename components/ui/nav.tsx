"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/bolag", label: "Bolag" },
  { href: "/manifest", label: "Manifest" },
  { href: "/karriar", label: "Karriär" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-200/60 dark:border-white/[0.06] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white hover:text-orange-500 transition-colors"
          >
            Noderum
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-1.5 rounded-full transition-all",
                  pathname === l.href
                    ? "text-neutral-900 dark:text-white bg-black/5 dark:bg-white/10 font-medium"
                    : "text-neutral-500 dark:text-white/50 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/kontakt"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            Hör av dig
          </Link>

          <button
            className="md:hidden p-2 -mr-2 text-neutral-700 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-bold text-neutral-900 dark:text-white">Noderum</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2 text-neutral-700 dark:text-white"
                aria-label="Stäng meny"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-6 pt-4 pb-8 space-y-1">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-3.5 rounded-2xl transition-all",
                    pathname === l.href
                      ? "text-neutral-900 dark:text-white bg-black/5 dark:bg-white/10 font-medium"
                      : "text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/kontakt"
                  className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-sm text-center transition-colors"
                >
                  Hör av dig
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
