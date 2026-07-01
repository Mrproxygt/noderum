"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionLabel } from "@/components/ui/section-label"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ManifestPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <SectionLabel>Manifest</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.08]">
            Bygg med övertygelse.
          </h1>
          <p className="text-lg text-neutral-500 dark:text-white/45 leading-relaxed">
            Ett manifest för operativa AI-bolag i Sverige — och för de som har bråttom.
          </p>
        </motion.div>

        {/* Problem */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-5">Problemet</h2>
          <div className="space-y-4 text-neutral-600 dark:text-white/50 leading-relaxed">
            <p>
              Svenska företag drunknar i AI-verktyg som inte är byggda för dem. Hundratals plattformar — på engelska, designade för Silicon Valley, inte för en VVS-firma i Solna.
            </p>
            <p>
              Resultatet: företag anställer dyr personal de knappt har råd med — eller tappar kunder, leads och intäkter varje vecka. Det är inte ett val. Det är en återvändsgränd.
            </p>
            <p>
              Svenska SMB förtjänar verktyg byggda för dem — inte för någon annan.
            </p>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-5">Lösningen</h2>
          <div className="space-y-4 text-neutral-600 dark:text-white/50 leading-relaxed">
            <p>
              Vi bygger inte plattformar. Vi bygger bolag. Noderum grundar och driver operativa AI-företag — var och ett byggt för en specifik bransch, ett specifikt problem, en specifik kund.
            </p>
            <p>
              Vi äger dem. Vi driver dem. Vi anställer teamet, bygger produkten och tar in de första kunderna — själva. Inga konsulter. Inga underleverantörer. Bara operativa bolag som löser riktiga problem.
            </p>
          </div>
        </motion.section>

        {/* Principles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-5">Våra principer</h2>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Intäkter från dag ett.",
                desc: "MRR, inte vision. Vi bygger för lönsamhet — inte för nästa funding-runda.",
              },
              {
                num: "02",
                title: "Bottom-up, inte top-down.",
                desc: "Varje bolag byggs från ett specifikt kundproblem. Inte från en teknisk plattform som ska passa alla.",
              },
              {
                num: "03",
                title: "Svenska först.",
                desc: "Svenska arbetsflöden, svenska kunder, svensk kontext. Inget översatt från engelska.",
              },
              {
                num: "04",
                title: "Vi kör. Ni fokuserar.",
                desc: "Vi driver bolagen operativt. Våra kunder behöver inte lära sig ett nytt system.",
              },
              {
                num: "05",
                title: "Ägande är allt.",
                desc: "De som bygger bolagen äger dem. Vi anställer operatörer och ger dem riktigt ägande — inte optioner som låtsas.",
              },
            ].map((p) => (
              <div key={p.num} className="flex gap-5">
                <span className="text-sm font-mono text-orange-500/60 flex-shrink-0 mt-0.5">{p.num}</span>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-white/45 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-5">Mission</h2>
          <div className="space-y-4 text-neutral-600 dark:text-white/50 leading-relaxed">
            <p>
              Noderum finns till för de som har bråttom. Hantverkaren som missar samtal. Säljaren som knappt hinner äta lunch. Egenföretagaren som jobbar sent för att hålla allt rullande.
            </p>
            <p>
              Vi bygger bolag som tar bort friktion. Konkret. Mätbart. Utan att våra kunder behöver lära sig ett nytt system.
            </p>
            <p className="text-xl font-semibold text-orange-500 pt-4">
              Det är inte AI för sakens skull. Det är verktyg som funkar — på svenska, i vardagen, från dag ett.
            </p>
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
            Låter det som något för dig?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/bolag"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-colors"
            >
              Se våra bolag
            </Link>
            <Link
              href="/karriar"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors"
            >
              Jobba med oss
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
