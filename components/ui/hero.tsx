"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 dark:border-orange-500/20 bg-orange-50/60 dark:bg-orange-500/[0.06] text-sm text-orange-600 dark:text-orange-400/80 font-medium">
            ✦ Operativa AI-bolag för svenska SMB
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white mb-6"
        >
          Vi bygger
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            AI-bolag.
          </span>
          <br />
          Inte AI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-500 dark:text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Noderum grundar och driver AI-företag som löser konkreta problem för svenska SMB. Vi äger bolagen. Vi driver dem. Vi anställer teamet — själva.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/bolag"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20"
          >
            Se våra bolag
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/manifest"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-200"
          >
            Läs vårt manifest
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
