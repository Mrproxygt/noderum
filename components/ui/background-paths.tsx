"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-900 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function NoderumHero() {
  const line1 = "Vi bygger"
  const line2 = "AI-bolag."
  const line3 = "Inte AI."
  const lines = [line1, line2, line3]

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.06] text-sm font-medium text-black/50 dark:text-white/50 tracking-wide">
              ✦ Operativa AI-bolag för svenska SMB
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[3.2rem] sm:text-7xl md:text-8xl font-bold mb-10 tracking-tighter leading-[1.05]">
            {lines.map((line, lineIndex) => (
              <span key={lineIndex} className="block whitespace-nowrap">
                {line.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${lineIndex}-${letterIndex}`}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: lineIndex * 0.15 + letterIndex * 0.025,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-white/70"
                  >
                    {letter === " " ? " " : letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-lg md:text-xl text-black/45 dark:text-white/45 font-light max-w-2xl mx-auto mb-8 sm:mb-14 leading-relaxed"
          >
            Noderum grundar och driver AI-företag som löser konkreta problem för svenska SMB. Tre bolag i pilotdrift. Fler på väg.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <div className="block w-full sm:inline-block sm:w-auto group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Button
                variant="ghost"
                onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto rounded-[1.15rem] px-8 py-5 sm:py-7 text-base sm:text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">Hör av dig</span>
                <span className="ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">→</span>
              </Button>
            </div>

            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              Se våra bolag
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1.5 text-black/20 dark:text-white/20">
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scrolla</span>
            <div className="w-px h-8 bg-gradient-to-b from-black/15 dark:from-white/15 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
