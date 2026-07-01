"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

const ROLES = [
  {
    title: "Säljare",
    tag: "B2B/B2C",
    desc: "Du förstår att ett missat samtal är en förlorad kund. Du ringer, följer upp och stänger — utan ett CRM som säger åt dig vad du ska göra.",
  },
  {
    title: "Operatör",
    tag: "0→1",
    desc: "Du tar ett bolag från noll till marknad och trivs med det. Du kan produkten, marknaden och kunden — och du fattar beslut snabbt.",
  },
  {
    title: "Ingenjör",
    tag: "Full-stack",
    desc: "Du äger produkten — inte bara kodar den. Du förstår kunden, bygger det som faktiskt behövs, och skeppar snabbt.",
  },
]

const PERKS = [
  "Riktigt ägande i bolaget du bygger — inte optioner som låtsas.",
  "Bygg från dag ett. Ingen legacy-kod, ingen politik, ingen BS.",
  "Jobba direkt med grundarna. Platt organisation. Snabba beslut.",
  "Kontor i Stockholm. Flexibelt remote. Vi bryr oss om resultat — inte timmar.",
  "Marknadsmässig lön + ägande. Vi betalar vad du är värd.",
]

export default function KarriarPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Karriär</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Bygg ett bolag.
            <br />
            Inte en karriär.
          </h1>
          <p className="text-lg text-neutral-500 dark:text-white/45 leading-relaxed">
            Vi anställer operatörer, säljare och ingenjörer som vill bygga bolag — inte jobba på ett. Ägande ingår.
          </p>
        </motion.div>

        {/* Open roles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Öppna roller</h2>
          <div className="space-y-3">
            {ROLES.map((r, i) => (
              <motion.a
                key={i}
                href={`mailto:careers@noderum.se?subject=${encodeURIComponent(r.title + " — intresseanmälan")}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] px-5 py-4 hover:border-orange-200 dark:hover:border-orange-500/25 hover:bg-orange-50/50 dark:hover:bg-orange-500/[0.03] transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-neutral-800 dark:text-white/80">
                      {r.title}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500/70 font-mono tracking-wide">
                      {r.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-white/40 leading-relaxed">{r.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-300 dark:text-white/15 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-neutral-400 dark:text-white/35 mt-5">
            Inget av ovanstående passar?{" "}
            <a href="mailto:careers@noderum.se" className="text-orange-500 hover:text-orange-600">
              Hör av dig ändå
            </a>
            {" "}— vi anställer löpande.
          </p>
        </motion.section>

        {/* Why join */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="mb-20"
        >
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
            Varför bygga med Noderum?
          </h2>
          <div className="space-y-3">
            {PERKS.map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3"
              >
                <span className="text-orange-500 mt-0.5 flex-shrink-0">✦</span>
                <span className="text-neutral-600 dark:text-white/50 text-sm leading-relaxed">{p}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-orange-200 dark:border-orange-500/20 bg-orange-50/50 dark:bg-orange-500/[0.04] p-8 text-center"
        >
          <p className="text-neutral-700 dark:text-white/70 mb-3 font-medium">
            Redo att bygga ett bolag?
          </p>
          <a
            href="mailto:careers@noderum.se"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-colors shadow-lg shadow-orange-500/20"
          >
            Mejla careers@noderum.se
          </a>
          <p className="text-xs text-neutral-400 dark:text-white/35 mt-3">
            Berätta varför du är rätt person för ett av våra bolag.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
