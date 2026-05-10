"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Phase = "intro" | "live"

// Pre-defined bar sequences — asymmetric, organic, not synced
const BARS = [
  { id: 0, frames: [0.12, 0.74, 0.22, 0.88, 0.18, 0.60, 0.12], dur: 2.05 },
  { id: 1, frames: [0.45, 0.16, 0.93, 0.28, 0.76, 0.20, 0.45], dur: 1.72 },
  { id: 2, frames: [0.70, 0.38, 0.14, 0.84, 0.33, 0.68, 0.70], dur: 2.38 },
  { id: 3, frames: [0.18, 0.88, 0.48, 0.13, 0.92, 0.38, 0.18], dur: 1.91 },
  { id: 4, frames: [0.82, 0.28, 0.62, 0.44, 0.11, 0.78, 0.82], dur: 2.14 },
  { id: 5, frames: [0.33, 0.66, 0.20, 0.80, 0.52, 0.16, 0.33], dur: 1.83 },
  { id: 6, frames: [0.58, 0.13, 0.75, 0.36, 0.90, 0.24, 0.58], dur: 2.26 },
]

const BAR_TIMES = [0, 0.166, 0.333, 0.5, 0.666, 0.833, 1]

export function LiveCall() {
  const [phase, setPhase] = useState<Phase>("intro")

  useEffect(() => {
    const t = setTimeout(() => setPhase("live"), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full select-none">

      {/* Bokad 14:00 */}
      <div className="absolute top-0 right-0">
        <span className="text-[10px] font-medium text-neutral-400 dark:text-white/25 bg-neutral-100 dark:bg-white/[0.05] rounded-full px-3 py-1 tracking-wide">
          Bokad 14:00
        </span>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center pt-1 pb-6">
        <motion.div
          animate={phase === "intro" ? {
            x: [0, 1.6, -1.6, 1.1, -1.4, 0.7, -0.7, 0.3, -0.2, 0],
            y: [0, -0.6, 0.8, -0.5, 0.6, -0.4, 0.3, -0.2, 0.1, 0],
            scale: [1, 1.014, 0.991, 1.018, 0.993, 1.007, 0.997, 1.003, 1],
          } : { x: 0, y: 0, scale: 1 }}
          transition={phase === "intro" ? {
            duration: 2.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          } : { duration: 0.5, ease: "easeOut" }}
          className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-3.5 shadow-sm shadow-yellow-200 dark:shadow-yellow-900/20"
        >
          <span className="text-base font-bold text-yellow-900 tracking-tight">AL</span>
        </motion.div>

        <p className="text-sm font-semibold text-neutral-800 dark:text-white leading-none">
          Anna Lindqvist
        </p>
        <p className="text-[11px] text-neutral-400 dark:text-white/35 mt-1 font-mono">
          +46 70 123 45 67
        </p>
      </div>

      {/* LIVE + Audio */}
      <div className="flex flex-col items-center gap-3.5">

        {/* LIVE pill */}
        <div className="flex items-center gap-2 bg-neutral-100/80 dark:bg-white/[0.05] rounded-full px-4 py-1.5">
          <motion.div
            className="w-[6px] h-[6px] rounded-full bg-neutral-700 dark:bg-white/80"
            animate={phase === "live" ? {
              opacity: [0.55, 1, 0.55],
              scale: [0.92, 1.08, 0.92],
            } : { opacity: 0.2, scale: 0.8 }}
            transition={phase === "live" ? {
              duration: 1.65,
              repeat: Infinity,
              ease: "easeInOut",
            } : {}}
          />
          <span className="text-[9px] font-semibold tracking-[0.2em] text-neutral-600 dark:text-white/55 uppercase">
            Live
          </span>
        </div>

        {/* Audio visualizer */}
        <div className="flex items-end gap-[3px]" style={{ height: 28 }}>
          {BARS.map((bar) => (
            <motion.div
              key={bar.id}
              className="w-[3px] rounded-full bg-neutral-300 dark:bg-white/20"
              style={{ originY: 1, height: 28 }}
              animate={phase === "live" ? {
                scaleY: bar.frames,
              } : { scaleY: 0.08 }}
              transition={phase === "live" ? {
                duration: bar.dur,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
                times: BAR_TIMES,
              } : {
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
