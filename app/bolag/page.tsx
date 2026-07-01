"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Phone, Globe, BarChart3, Sparkles } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { DemoCallTrigger } from "@/components/demo-call/DemoCallTrigger"

export default function BolagPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Portfölj</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Våra bolag
          </h1>
          <p className="text-neutral-500 dark:text-white/40 text-lg max-w-2xl leading-relaxed">
            Tre bolag i pilotdrift. Varje bolag ägt och drivet av Noderum — byggt bottom-up för en specifik marknad och kund.
          </p>
        </motion.div>

        {/* Menodi — full width featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-neutral-900/40 overflow-hidden mb-6"
        >
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.15em] uppercase">
                  AI-receptionist
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">Menodi.se</h2>
              <p className="text-neutral-500 dark:text-white/40 leading-relaxed mb-2">
                Svarar, bokar och följer upp — utan att du lyfter ett finger. Menodi är en AI-receptionist byggd för svenska SMB: hantverkare, salonger, restauranger och konsulter.
              </p>
              <p className="text-neutral-500 dark:text-white/40 leading-relaxed mb-6">
                Kunderna ringer samma nummer. Menodi svarar direkt — på svenska — och bokar möten i din kalender. Ingen app. Inga inställningar. Bara resultat.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Aktiv — kunder på plattformen
                </span>
                <Link
                  href="https://menodi.se"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Besök menodi.se <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex items-center">
              <div className="w-full rounded-xl overflow-hidden border border-neutral-100 dark:border-white/[0.06]">
                <DemoCallTrigger />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WebsiteForge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-neutral-900/40 p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.15em] uppercase">
                Hemsidor
              </span>
            </div>
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">WebsiteForge</h2>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full px-3 py-1 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Aktiv
              </span>
            </div>
            <p className="text-neutral-500 dark:text-white/40 text-sm leading-relaxed mb-6">
              Snygga, effektiva hemsidor för svenska SMB — klara på under en dag. WebsiteForge kombinerar AI-generering med mänsklig finishing för resultat som faktiskt konverterar. Fast pris. Snabb leverans. Inga överraskningar.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-white/[0.05]">
              <div>
                <span className="text-xs text-neutral-400 dark:text-white/30 font-mono">Leveranstid</span>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">48h → lansering</p>
              </div>
            </div>
          </motion.div>

          {/* Stealth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-neutral-900/40 p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.06] flex items-center justify-center text-neutral-500">
                <BarChart3 className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.15em] uppercase">
                Influencer Marketing
              </span>
            </div>
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Stealth</h2>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 dark:text-white/50 bg-neutral-100 dark:bg-white/[0.06] rounded-full px-3 py-1 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                Stealth
              </span>
            </div>
            <p className="text-neutral-500 dark:text-white/40 text-sm leading-relaxed mb-6">
              Ett nytt bolag inom performance-baserad influencer marketing. Vi bygger en plattform som kopplar ihop svenska varumärken med rätt kreatörer — och betalar endast för faktiska resultat. Mer information vid lansering.
            </p>
            <div className="rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/[0.04] p-6 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-neutral-300 dark:text-white/15" />
              <span className="text-sm text-neutral-400 dark:text-white/30">Mer info vid lansering</span>
            </div>
          </motion.div>
        </div>

        {/* Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 rounded-2xl border border-dashed border-neutral-200 dark:border-white/[0.06] p-8 text-center"
        >
          <p className="text-neutral-500 dark:text-white/40">
            Fler bolag under utveckling.{" "}
            <Link href="/kontakt" className="text-orange-500 hover:text-orange-600 font-medium">
              Hör av dig
            </Link>{" "}
            om du vill veta mer.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
