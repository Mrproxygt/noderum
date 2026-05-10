"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu, X, ArrowRight, ChevronRight,
  Zap, Globe, Phone, BarChart3, Sparkles,
  ArrowUpRight, Building2,
} from "lucide-react"
import { NoderumHero } from "@/components/ui/background-paths"
import { LogoMarquee } from "@/components/ui/logo-marquee"
import { LiveCall } from "@/components/ui/live-call"
import { CollabifyDemo } from "@/components/ui/collabify-demo"
import { ProblemOrbital } from "@/components/ui/problem-orbital"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function SectionLabel({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] font-mono text-orange-500/70 tracking-[0.2em]">{num}</span>
      <div className="h-px w-6 bg-orange-500/30" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-white/30">{text}</span>
    </div>
  )
}


export function NoderumLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">

      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrollY > 60
            ? "bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
            Noderum
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {["Manifesto", "Companies", "Blog", "Kontakt"].map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="px-3 py-1.5 rounded-full text-neutral-500 dark:text-white/50 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all"
              >
                {l}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            Hör av dig
          </button>

          <button className="md:hidden text-neutral-900 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-white/98 dark:bg-black/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-bold text-neutral-900 dark:text-white">Noderum</span>
            <button onClick={() => setMenuOpen(false)} className="text-neutral-900 dark:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="px-6 pt-4 pb-8 space-y-1">
            {["Manifesto", "Companies", "Blog", "Kontakt"].map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 rounded-2xl text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                {l}
                <ChevronRight className="h-4 w-4 text-neutral-300 dark:text-white/20" />
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-sm transition-colors">
                Hör av dig
              </button>
            </div>
          </nav>
        </motion.div>
      )}

      <main className="flex-1">

        {/* ── Hero ── */}
        <NoderumHero />

        {/* ── Logo Marquee ── */}
        <LogoMarquee />

        {/* ── Section 01: Problem ── */}
        <section id="manifesto">
          {/* Header — above the scroll-driven orbital */}
          <div className="max-w-6xl mx-auto px-6 pt-14 md:pt-20 pb-4">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <SectionLabel num="01" text="Problemet" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5">
                Bygg med övertygelse
              </h2>
              <p className="text-neutral-500 dark:text-white/50 text-base md:text-lg leading-relaxed">
                Svenska företag drunknar i AI-verktyg som inte är byggda för dem.
              </p>
              <p className="text-neutral-400 dark:text-white/40 text-sm md:text-base leading-relaxed mt-3">
                Scrolla för att utforska problemet.
              </p>
            </motion.div>
          </div>

          {/* Orbital — scroll-driven */}
          <ProblemOrbital />
        </section>

        {/* ── Section 02: Solution ── */}
        <section id="companies" className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">

            {/* Header row */}
            <div className="grid lg:grid-cols-2 gap-6 mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }}
              >
                <SectionLabel num="02" text="Lösningen" />
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.07]">
                  Tänd ljuset
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                className="text-neutral-400 dark:text-white/35 text-sm md:text-base leading-relaxed lg:pt-14 space-y-4"
              >
                <p>Vi bygger inte plattformar. Vi bygger bolag. Noderum grundar och driver operativa AI-företag — var och ett byggt för en specifik bransch, ett specifikt problem, en specifik kund.</p>
                <p>Vi äger dem. Vi driver dem. Vi anställer teamet, bygger produkten och tar in de första kunderna — själva.</p>
                <p>Inga konsulter. Inga underleverantörer. Bara operativa bolag som löser riktiga problem för svenska SMB.</p>
              </motion.div>
            </div>

            {/* Body: image left + features right */}
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-6">

              {/* Left: typography block */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl"
                style={{ minHeight: 400 }}
              >
                <div
                  className="w-full h-full bg-neutral-950 flex items-center justify-center px-10 py-16"
                  style={{ minHeight: 400 }}
                >
                  <p
                    className="text-orange-500 font-bold leading-tight text-center"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}
                  >
                    Inga features.<br />Bolag.
                  </p>
                </div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }} viewport={{ once: true }}
                  className="absolute top-6 right-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-white/[0.08] shadow-xl px-5 py-3.5"
                >
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white leading-none">&lt; 1 min</div>
                  <div className="text-[10px] text-neutral-400 dark:text-white/40 mt-1 tracking-wide">Från missat samtal till bokat möte</div>
                </motion.div>
              </motion.div>

              {/* Right: 2×2 feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 content-start">
                {[
                  { n: "01", icon: Building2, title: "Inte features. Bolag.", desc: "Vi äger och driver varje bolag — byggt bottom-up för en specifik marknad och kund." },
                  { n: "02", icon: BarChart3, title: "Intäkter från dag ett.", desc: "MRR, inte vision. Vi bygger för lönsamhet — inte för nästa funding-runda." },
                  { n: "03", icon: ArrowUpRight, title: "Vi kör. Ni fokuserar.", desc: "Vi driver bolagen operativt. Ni behöver inte lära er ett nytt system." },
                  { n: "04", icon: Globe, title: "Byggt för er marknad.", desc: "Svenska arbetsflöden, rätt bransch, rätt kund. Inget översatt från engelska." },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.09 }} viewport={{ once: true }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 hover:border-orange-200 dark:hover:border-orange-500/20 hover:bg-orange-50/40 dark:hover:bg-orange-500/[0.03] transition-all duration-300 overflow-hidden"
                  >
                    {/* Background number */}
                    <div className="absolute -bottom-3 -right-2 text-[4.5rem] font-black text-neutral-100 dark:text-white/[0.03] leading-none select-none pointer-events-none">
                      {f.n}
                    </div>
                    <div className="relative">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-3.5 text-orange-500 group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors">
                        <f.icon className="h-4 w-4" />
                      </div>
                      <div className="font-semibold text-sm text-neutral-800 dark:text-white/80 mb-1.5 leading-snug">{f.title}</div>
                      <div className="text-xs text-neutral-400 dark:text-white/35 leading-relaxed">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 03: Mission ── */}
        <section className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* Left: editorial heading + text */}
              <motion.div
                initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }} viewport={{ once: true }}
              >
                <SectionLabel num="03" text="Mission" />
                <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-neutral-900 dark:text-white mb-8 leading-[1.06]">
                  Bygg en bättre<br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                    arbetsdag.
                  </span>
                </h2>
                <div className="space-y-4 text-neutral-500 dark:text-white/45 text-sm md:text-base leading-relaxed">
                  <p>Noderum finns till för de som har bråttom. Hantverkaren som missar samtal. Säljaren som knappt hinner äta lunch. Egenföretagaren som jobbar sent för att hålla allt rullande.</p>
                  <p>Vi bygger bolag som tar bort friktion. Konkret. Mätbart. Utan att ni behöver lära er ett nytt system.</p>
                  <p>Det är inte AI för sakens skull. Det är verktyg som funkar — på svenska, i er vardag, från dag ett.</p>
                </div>
              </motion.div>

              {/* Right: tilted typography block */}
              <motion.div
                initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  initial={{ rotate: 2 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl shadow-neutral-200/80 dark:shadow-black/40"
                >
                  <div className="w-full h-[460px] bg-neutral-950 flex items-center justify-center px-10">
                    <p
                      className="text-orange-500 font-bold leading-tight text-center"
                      style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", letterSpacing: "-0.03em" }}
                    >
                      Vi bygger för<br />ni som har<br />bråttom.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Section 04: Portfölj — Holding company style ── */}
        <section id="portfolio" className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp}
              className="flex items-end justify-between mb-14 flex-wrap gap-6"
            >
              <div>
                <SectionLabel num="04" text="Portfölj" />
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
                  Våra bolag
                </h2>
                <p className="text-neutral-400 dark:text-white/40 max-w-md text-sm leading-relaxed">
                  Tre bolag i pilotdrift. Varje bolag ägt och drivet av Noderum — byggt bottom-up för en specifik marknad och kund.
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-300 dark:text-white/20 border border-neutral-200 dark:border-white/[0.08] rounded-full px-3 py-1.5 tracking-widest">
                3 bolag i pilot
              </span>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4 lg:grid-cols-3"
            >

              {/* ── Nira — col 1+2, row 1 ── */}
              <motion.div
                variants={item}
                className="lg:col-span-2 rounded-3xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 overflow-hidden flex flex-col"
              >
                <div className="p-8 pb-0">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 dark:text-white/50">
                          <Phone className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.18em] uppercase">Kundservice</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Nira</h3>
                      <p className="text-neutral-500 dark:text-white/40 text-sm leading-relaxed mt-2 max-w-sm">
                        Svarar, bokar och följer upp — utan att ni behöver lyfta ett finger.
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full px-3 py-1 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Aktiv
                    </span>
                  </div>
                </div>
                <div className="flex-1 mx-8 mb-8 mt-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/[0.06] p-6">
                  <LiveCall />
                </div>
              </motion.div>

              {/* ── WebsiteForge — col 3, row 1 ── */}
              <motion.div
                variants={item}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group rounded-3xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 p-7 flex flex-col gap-5 hover:border-neutral-300 dark:hover:border-white/[0.14] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 dark:text-white/50">
                      <Globe className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.18em] uppercase">Hemsidor</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Aktiv
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-1.5">WebsiteForge</h3>
                  <p className="text-neutral-500 dark:text-white/40 text-sm leading-relaxed">
                    Snygga, effektiva hemsidor för svenska SMB — klara på under en dag.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-white/[0.05]">
                  <span className="text-xs text-neutral-400 dark:text-white/25 font-mono">48h → lansering</span>
                  <Link href="#" className="flex items-center gap-1 text-xs font-medium text-neutral-400 dark:text-white/30 hover:text-neutral-700 dark:hover:text-white/70 transition-colors group-hover:text-neutral-600 dark:group-hover:text-white/50">
                    Läs mer <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>

              {/* ── Collabify — col 1+2, row 2 ── */}
              <motion.div
                variants={item}
                className="lg:col-span-2 rounded-3xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 overflow-hidden flex flex-col"
              >
                <div className="p-8 pb-0">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 dark:text-white/50">
                          <BarChart3 className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30 tracking-[0.18em] uppercase">Influencer Marketing</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Collabify</h3>
                      <p className="text-neutral-500 dark:text-white/40 text-sm leading-relaxed mt-2 max-w-sm">
                        Performance influencer marketing. Ni betalar bara för resultat — inte gissningar.
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 rounded-full px-3 py-1 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                      Beta
                    </span>
                  </div>
                </div>
                <div className="flex-1 mx-8 mb-8 mt-2 rounded-2xl overflow-hidden">
                  <CollabifyDemo />
                </div>
              </motion.div>

              {/* ── Teaser — col 3, row 2 ── */}
              <motion.div
                variants={item}
                className="rounded-3xl border border-dashed border-neutral-200 dark:border-white/[0.06] flex items-center justify-center gap-2.5 group cursor-default hover:border-neutral-300 dark:hover:border-white/[0.1] transition-colors duration-300 min-h-[120px]"
              >
                <Sparkles className="h-3.5 w-3.5 text-neutral-300 dark:text-white/15 group-hover:text-orange-400/50 transition-colors" />
                <span className="text-xs text-neutral-300 dark:text-white/20 group-hover:text-neutral-400 dark:group-hover:text-white/35 transition-colors">Fler bolag i utveckling.</span>
              </motion.div>

            </motion.div>

          </div>
        </section>

        {/* ── Section 05: Bygg med oss ── */}
        <section className="py-24 md:py-32 border-t border-neutral-100 dark:border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <motion.div
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }}
              >
                <SectionLabel num="05" text="Build with us" />
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                  Bygg med oss.
                </h2>
                <p className="text-neutral-500 dark:text-white/45 text-sm md:text-base leading-relaxed mb-1 font-medium">
                  Vi anställer aktivt. Säljare i prio.
                </p>
                <p className="text-neutral-500 dark:text-white/45 text-sm md:text-base leading-relaxed mb-4">
                  Ni som vill bygga bolag — inte jobba på ett. Ni som förstår att ett missat säljsamtal är förlorade intäkter.
                </p>
                <p className="text-neutral-400 dark:text-white/40 text-sm leading-relaxed">
                  Mejla{" "}
                  <Link href="mailto:careers@noderum.se" className="text-orange-500 hover:text-orange-600 transition-colors">
                    careers@noderum.se
                  </Link>{" "}
                  och berätta varför ni är rätt person för ett av våra bolag.
                </p>

                {/* Typography block */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
                  className="mt-8 relative overflow-hidden rounded-2xl"
                >
                  <div className="w-full h-52 bg-neutral-950 flex items-center justify-center px-8">
                    <p
                      className="text-orange-500 font-bold leading-tight text-center"
                      style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}
                    >
                      Bygg ett bolag.<br />Inte en karriär.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }}
                className="space-y-2"
              >
                {[
                  { role: "Säljare", desc: "Du förstår att ett missat samtal är en förlorad kund.", tag: "B2B/B2C" },
                  { role: "Operatörer", desc: "Du tar ett bolag från 0 till marknad och trivs med det.", tag: "0→1" },
                  { role: "Ingenjörer", desc: "Du äger produkten — inte bara kodar den.", tag: "Full-stack" },
                ].map((r, i) => (
                  <motion.a
                    key={i}
                    href="mailto:careers@noderum.se"
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50 dark:bg-white/[0.02] px-5 py-4 hover:border-orange-200 dark:hover:border-orange-500/25 hover:bg-orange-50/50 dark:hover:bg-orange-500/[0.03] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-neutral-700 dark:text-white/80 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                          {r.role}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500/70 font-mono tracking-wide">
                          {r.tag}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-400 dark:text-white/30 mt-0.5 group-hover:text-neutral-500 dark:group-hover:text-white/50 transition-colors">
                        {r.desc}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-neutral-300 dark:text-white/15 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-neutral-100 dark:border-white/[0.04] bg-white dark:bg-neutral-950">

        {/* Link columns + socials */}
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-2">

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

            {/* 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-14 gap-y-10">

              {/* Våra bolag */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400 dark:text-white/30 mb-4">
                  Våra bolag
                </p>
                {["WebsiteForge", "Nira", "Collabify"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors mb-2.5">
                    {l}
                  </a>
                ))}
              </div>

              {/* Resurser */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400 dark:text-white/30 mb-4">
                  Resurser
                </p>
                {["Kunder", "Resurscenter"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors mb-2.5">
                    {l}
                  </a>
                ))}
              </div>

              {/* Företaget */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400 dark:text-white/30 mb-4">
                  Företaget
                </p>
                {["Om oss", "Karriär", "Nyheter"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors mb-2.5">
                    {l}
                  </a>
                ))}
              </div>

            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-white/30 hover:text-neutral-700 dark:hover:text-white/70 hover:border-neutral-300 dark:hover:border-white/20 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-white/30 hover:text-neutral-700 dark:hover:text-white/70 hover:border-neutral-300 dark:hover:border-white/20 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* Large ghost wordmark */}
        <div className="max-w-6xl mx-auto px-6 overflow-hidden mt-4 mb-0 select-none" aria-hidden>
          <span
            className="footer-wordmark block"
            style={{
              fontSize: "clamp(3.5rem, 17vw, 13rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-geist-sans, sans-serif)",
            }}
          >
            Noderum
          </span>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 mt-2">
          <p className="text-xs text-neutral-400 dark:text-white/25">
            © 2026 Noderum AB. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-neutral-400 dark:text-white/25 hover:text-neutral-700 dark:hover:text-white/60 transition-colors">Användarvillkor</a>
            <a href="#" className="text-xs text-neutral-400 dark:text-white/25 hover:text-neutral-700 dark:hover:text-white/60 transition-colors">Integritetspolicy</a>
          </div>
        </div>

      </footer>

    </div>
  )
}
