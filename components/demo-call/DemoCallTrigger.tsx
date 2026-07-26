'use client'

import { motion } from 'framer-motion'
import { Loader2, Play, PhoneOff } from 'lucide-react'
import { useDemoCall } from './DemoCallProvider'

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

export function DemoCallTrigger() {
  const { openModal, startCall, endCall, isActive, connecting, expand } = useDemoCall()

  const handlePlay = () => {
    if (isActive) {
      expand()
      return
    }
    openModal({ agentName: 'Noderum AI' })
    setTimeout(() => startCall(), 200)
  }

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation()
    void endCall()
  }

  return (
    <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#0e0620] via-[#130826] to-[#1c0f38] rounded-2xl flex flex-col items-center justify-center gap-5 px-6 py-8 overflow-hidden select-none">

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '120px',
        }}
      />

      {/* Heading */}
      <div className="relative text-center space-y-1.5">
        <p className="text-white font-bold text-lg sm:text-xl tracking-tight leading-snug">
          Tryck play — prata med vår AI-receptionist
        </p>
        <p className="text-[12px] text-white/45 tracking-wide">
          Ett kort samtal så får du höra hur det låter
        </p>
      </div>

      {/* Glassmorphism pill */}
      <button
        type="button"
        onClick={handlePlay}
        className="relative flex items-center rounded-full overflow-hidden backdrop-blur-lg border shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] bg-white/[0.12] border-white/25 hover:bg-white/[0.18] hover:border-white/35 hover:shadow-[0_4px_24px_rgba(0,0,0,0.35),0_0_12px_rgba(255,255,255,0.06)] w-[170px] max-w-full shrink-0 sm:w-[190px] py-1.5 pl-1 pr-0.5 transition-all duration-300"
        aria-label={isActive ? 'Öppna pågående samtal' : 'Starta samtal'}
      >
        {/* Waveform bars */}
        <div className="flex-1 flex items-end justify-center gap-[2.5px] px-2" style={{ height: 28 }}>
          {BARS.map((bar) => (
            <motion.div
              key={bar.id}
              className="w-[3px] rounded-full bg-white/50"
              style={{ originY: 1, height: 28 }}
              animate={isActive ? { scaleY: bar.frames } : { scaleY: 0.1 }}
              transition={isActive ? {
                duration: bar.dur,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
                times: BAR_TIMES,
              } : { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          ))}
        </div>

        {/* Play/stop button */}
        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[oklch(0.724_0.152_83)] shadow-sm">
          {connecting ? (
            <Loader2 className="w-4 h-4 text-white animate-spin" />
          ) : isActive ? (
            <span onClick={handleStop} className="flex items-center justify-center w-full h-full">
              <PhoneOff className="w-4 h-4 text-white" />
            </span>
          ) : (
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          )}
        </div>
      </button>

    </div>
  )
}
