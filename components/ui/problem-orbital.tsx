"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Building2, BarChart3, Zap } from "lucide-react"

interface Problem {
  id: number
  icon: React.ElementType
  label: string
  category: string
  title: string
  description: string
}

const PROBLEMS: Problem[] = [
  {
    id: 1,
    icon: Globe,
    label: "Silicon Valley",
    category: "Marknad",
    title: "Byggda för fel marknad.",
    description: "Hundratals AI-plattformar. Allihop på engelska. Allihop byggda för Silicon Valley — inte för en VVS-firma i Solna.",
  },
  {
    id: 2,
    icon: Building2,
    label: "VVS i Solna",
    category: "Produkt",
    title: "Fel verktyg för fel kund.",
    description: "En VVS-firma i Solna ska liksom använda en chatbot designad för en SaaS-startup i San Francisco. Det funkar inte.",
  },
  {
    id: 3,
    icon: BarChart3,
    label: "Konsekvensen",
    category: "Kostnad",
    title: "Priset ni betalar varje vecka.",
    description: "Resultatet: ni anställer dyr personal ni knappt har råd med — eller tappar kunder, leads och intäkter varje vecka.",
  },
  {
    id: 4,
    icon: Zap,
    label: "Slutsats",
    category: "Marknad",
    title: "Det är inte ett val.",
    description: "Det är inte ett val. Det är en återvändsgränd. Svenska SMB förtjänar verktyg byggda för dem — inte för någon annan.",
  },
]

const NODE_PX = 56

export function ProblemOrbital() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [activeId, setActiveId] = useState(PROBLEMS[0].id)
  const [angle, setAngle] = useState(-90)
  const [hovering, setHovering] = useState(false)
  const [radius, setRadius] = useState(190)

  // Responsive radius
  useEffect(() => {
    const sync = () => setRadius(window.innerWidth >= 1024 ? 190 : 130)
    sync()
    window.addEventListener("resize", sync)
    return () => window.removeEventListener("resize", sync)
  }, [])

  // Scroll-driven reveal
  useEffect(() => {
    const handle = () => {
      if (!scrollRef.current) return
      const { top, height } = scrollRef.current.getBoundingClientRect()
      const wh = window.innerHeight
      const scrolled = -top
      const total = height - wh
      if (scrolled < 0) {
        setVisibleCount(0)
        setIsUnlocked(false)
      } else if (scrolled >= total) {
        setVisibleCount(PROBLEMS.length)
        setIsUnlocked(true)
      } else {
        const count = Math.min(PROBLEMS.length, Math.max(1, Math.ceil((scrolled / total) * PROBLEMS.length)))
        setVisibleCount(count)
        setIsUnlocked(false)
        setActiveId(PROBLEMS[count - 1].id)
      }
    }
    window.addEventListener("scroll", handle, { passive: true })
    handle()
    return () => window.removeEventListener("scroll", handle)
  }, [])

  // Auto-rotate once fully unlocked
  useEffect(() => {
    if (!isUnlocked || hovering) return
    const t = setInterval(() => setAngle(a => (a + 0.18) % 360), 50)
    return () => clearInterval(t)
  }, [isUnlocked, hovering])

  const getPos = (index: number) => {
    const rad = ((index / PROBLEMS.length) * 360 + angle) * (Math.PI / 180)
    return { x: radius * Math.cos(rad), y: radius * Math.sin(rad) }
  }

  const active = PROBLEMS.find(p => p.id === activeId) ?? PROBLEMS[0]

  return (
    <div ref={scrollRef} className="relative w-full" style={{ height: "700vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 items-center">

            {/* ── Orbital ── */}
            <div
              className="relative flex items-center justify-center order-2 lg:order-1"
              style={{ height: "clamp(320px, 45vw, 480px)" }}
            >
              {/* Dot-grid texture */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1.2px, transparent 1.2px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Outer orbit ring */}
              <motion.div
                className="absolute rounded-full border border-dashed border-neutral-200 dark:border-white/[0.07]"
                style={{ width: radius * 2 + NODE_PX + 8, height: radius * 2 + NODE_PX + 8 }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: visibleCount > 0 ? 1 : 0, scale: visibleCount > 0 ? 1 : 0.85 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              />

              {/* Inner accent ring */}
              <motion.div
                className="absolute rounded-full border border-orange-100 dark:border-orange-500/10"
                style={{ width: radius * 0.6, height: radius * 0.6 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleCount > 0 ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* Center widget */}
              <div className="relative z-10">
                {isUnlocked && (
                  <>
                    <motion.div
                      className="absolute rounded-full bg-orange-500/[0.07] dark:bg-orange-500/10"
                      style={{ inset: -20 }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute rounded-full bg-orange-500/[0.04]"
                      style={{ inset: -36 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    />
                  </>
                )}
                <div className="w-[60px] h-[60px] rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-xl flex flex-col items-center justify-center gap-1">
                  <span className="text-base font-bold text-neutral-900 dark:text-white tabular-nums leading-none">
                    {String(visibleCount).padStart(2, "0")}
                  </span>
                  <div className="w-5 h-px bg-neutral-200 dark:bg-white/10" />
                  <span className="text-[9px] font-mono text-neutral-400 dark:text-white/25 leading-none">
                    {String(PROBLEMS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Nodes */}
              {PROBLEMS.map((problem, index) => {
                const isVisible = index < visibleCount
                const isActive = problem.id === activeId
                const pos = getPos(index)
                const Icon = problem.icon

                return (
                  <div
                    key={problem.id}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: isVisible
                        ? `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`
                        : "translate(-50%, -50%)",
                      zIndex: isActive ? 20 : 10,
                      cursor: isUnlocked ? "pointer" : "default",
                      transition: isVisible ? "transform 0.055s linear" : "none",
                    }}
                    onClick={() => { if (index < visibleCount) setActiveId(problem.id) }}
                    onMouseEnter={() => { if (isUnlocked) { setActiveId(problem.id); setHovering(true) } }}
                    onMouseLeave={() => setHovering(false)}
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: isVisible ? (isActive ? 1.15 : 1) : 0,
                        opacity: isVisible ? 1 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="relative"
                    >
                      {/* Active pulse ring */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-orange-400/60"
                          animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}

                      <div
                        className={`w-[${NODE_PX}px] h-[${NODE_PX}px] rounded-full flex items-center justify-center border-2 transition-colors duration-300`}
                        style={{
                          width: NODE_PX,
                          height: NODE_PX,
                          background: isActive ? "rgb(201 162 39)" : "white",
                          borderColor: isActive ? "rgb(201 162 39)" : "rgb(229 229 229)",
                          color: isActive ? "white" : "rgb(163 163 163)",
                          boxShadow: isActive ? "0 8px 30px rgba(201,162,39,0.30)" : "0 2px 8px rgba(0,0,0,0.06)",
                        }}
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                    </motion.div>

                    {/* Label */}
                    <motion.div
                      animate={{ opacity: isActive ? 1 : isVisible ? 0.45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute whitespace-nowrap text-[9px] font-semibold tracking-[0.14em] uppercase"
                      style={{
                        top: NODE_PX + 8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: isActive ? "rgb(201 162 39)" : "rgb(115 115 115)",
                      }}
                    >
                      {problem.label}
                    </motion.div>
                  </div>
                )
              })}
            </div>

            {/* ── Detail panel ── */}
            <div className="relative order-1 lg:order-2">

              {/* Scroll hint */}
              {!isUnlocked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-10 left-0 flex items-center gap-2 text-[11px] text-neutral-300 dark:text-white/20"
                >
                  <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                    ↓
                  </motion.span>
                  Scrolla för att utforska problemet
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  {/* Ghost number */}
                  <div
                    className="absolute -top-3 -left-1 font-black leading-none select-none pointer-events-none text-neutral-100 dark:text-white/[0.035]"
                    style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)" }}
                    aria-hidden
                  >
                    {String(active.id).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    {/* Category + counter row */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center text-[10px] font-semibold tracking-[0.18em] uppercase text-orange-500 bg-orange-50 dark:bg-orange-500/[0.08] border border-orange-200/80 dark:border-orange-500/20 rounded-full px-3 py-1.5">
                        {active.category}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-300 dark:text-white/20 tracking-widest">
                        {String(active.id).padStart(2, "0")} / {String(PROBLEMS.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight text-neutral-900 dark:text-white mb-4 leading-tight">
                      {active.title}
                    </h3>

                    {/* Accent line */}
                    <div className="flex items-center gap-1.5 mb-5">
                      <div className="h-0.5 w-9 bg-orange-500 rounded-full" />
                      <div className="h-0.5 w-4 bg-orange-200 dark:bg-orange-500/25 rounded-full" />
                    </div>

                    {/* Description */}
                    <p className="text-neutral-500 dark:text-white/45 text-base leading-relaxed mb-10">
                      {active.description}
                    </p>

                    {/* Dot navigation */}
                    <div className="flex items-center gap-2">
                      {PROBLEMS.map((p, i) => {
                        const avail = i < visibleCount
                        const isActiveP = p.id === activeId
                        return (
                          <button
                            key={p.id}
                            disabled={!avail}
                            onClick={() => avail && setActiveId(p.id)}
                            className={`rounded-full transition-all duration-300 ${
                              isActiveP
                                ? "w-7 h-2 bg-orange-500"
                                : avail
                                ? "w-2 h-2 bg-neutral-300 dark:bg-white/20 hover:bg-orange-300 dark:hover:bg-orange-400/40"
                                : "w-2 h-2 bg-neutral-100 dark:bg-white/[0.06] opacity-40 cursor-default"
                            }`}
                          />
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
