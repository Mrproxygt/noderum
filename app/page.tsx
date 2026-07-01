"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Building2, BarChart3, Globe, Zap, Phone } from "lucide-react"
import { Hero } from "@/components/ui/hero"
import { SectionLabel } from "@/components/ui/section-label"
import { DemoCallTrigger } from "@/components/demo-call/DemoCallTrigger"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── What we do ── */}
      <section className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <SectionLabel>Vad vi gör</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Vi bygger bolag. Inte features.
            </h2>
            <p className="text-neutral-500 dark:text-white/40 text-base leading-relaxed">
              Noderum är en venture studio som grundar och driver operativa AI-företag — var och ett byggt för en specifik bransch, ett specifikt problem, en specifik kund.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Building2,
                title: "Vi äger och driver",
                desc: "Varje bolag är ett eget företag. Vi äger majoriteten och driver operativt — från produkt till första kunderna.",
              },
              {
                icon: BarChart3,
                title: "Intäkter från dag ett",
                desc: "MRR, inte vision. Vi bygger för lönsamhet — inte för nästa funding-runda.",
              },
              {
                icon: Globe,
                title: "Byggt för svenska SMB",
                desc: "Svenska arbetsflöden, rätt bransch, rätt kund. Inget översatt från engelska.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 hover:border-orange-200 dark:hover:border-orange-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-white/40 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio snapshot ── */}
      <section className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04] bg-neutral-50/50 dark:bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex items-end justify-between mb-14 flex-wrap gap-4"
          >
            <div>
              <SectionLabel>Portfölj</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                Våra bolag
              </h2>
              <p className="text-neutral-500 dark:text-white/40 text-sm">Tre bolag i pilotdrift.</p>
            </div>
            <Link
              href="/bolag"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
            >
              Se alla bolag <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* Menodi — spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-neutral-900/40 overflow-hidden"
            >
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.15em] uppercase">
                        AI-receptionist
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Menodi.se</h3>
                    <p className="text-neutral-500 dark:text-white/40 text-sm mt-1.5 max-w-sm">
                      Svarar, bokar och följer upp — utan att du lyfter ett finger.
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full px-3 py-1 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Aktiv
                  </span>
                </div>
              </div>
              <div className="mx-6 mb-6 mt-4 rounded-xl overflow-hidden border border-neutral-100 dark:border-white/[0.06]">
                <DemoCallTrigger />
              </div>
            </motion.div>

            {/* WebsiteForge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-neutral-900/40 p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.15em] uppercase">
                    Hemsidor
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Aktiv
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1.5">WebsiteForge</h3>
                <p className="text-neutral-500 dark:text-white/40 text-sm leading-relaxed">
                  Snygga, effektiva hemsidor för svenska SMB — klara på under en dag.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-white/[0.05] mt-auto">
                <span className="text-xs text-neutral-400 dark:text-white/25 font-mono">48h → lansering</span>
              </div>
            </motion.div>

            {/* Stealth — spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-neutral-900/40 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-orange-500" />
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.15em] uppercase">
                      Influencer Marketing
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Stealth</h3>
                  <p className="text-neutral-500 dark:text-white/40 text-sm mt-1.5 max-w-sm">
                    Performance-baserad influencer marketing. Mer info vid lansering.
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 dark:text-white/50 bg-neutral-100 dark:bg-white/[0.06] rounded-full px-3 py-1 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  Stealth
                </span>
              </div>
              <div className="rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/[0.04] h-32 flex items-center justify-center">
                <p className="text-sm text-neutral-400 dark:text-white/25">Mer info snart</p>
              </div>
            </motion.div>

            {/* Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-dashed border-neutral-200 dark:border-white/[0.06] flex items-center justify-center gap-2 min-h-[120px]"
            >
              <span className="text-sm text-neutral-400 dark:text-white/30">Fler bolag i utveckling.</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Audience CTAs ── */}
      <section className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <SectionLabel>Bygg med oss</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Tre sätt att vara med.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                eyebrow: "För investerare",
                title: "Investera i nästa bolag.",
                desc: "Vi tar in strategiska partners som förstår att AI-bolag byggs bottom-up — inte top-down. Tidig tillgång till vår pipeline.",
                href: "/kontakt",
                linkLabel: "Hör av dig",
              },
              {
                eyebrow: "För talanger",
                title: "Bygg ett bolag med oss.",
                desc: "Vi anställer operatörer, säljare och ingenjörer som vill bygga bolag — inte jobba på ett. Ägande ingår.",
                href: "/karriar",
                linkLabel: "Se lediga roller",
              },
              {
                eyebrow: "För SMB",
                title: "Skaffa AI-receptionist.",
                desc: "Menodi svarar, bokar och följer upp — så att du kan fokusera på din verksamhet. Prova gratis i 14 dagar.",
                href: "https://menodi.se",
                linkLabel: "Gå till Menodi.se",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-6 flex flex-col gap-3"
              >
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-orange-500/70">
                  {c.eyebrow}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{c.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-white/40 leading-relaxed flex-1">{c.desc}</p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors mt-2"
                >
                  {c.linkLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
