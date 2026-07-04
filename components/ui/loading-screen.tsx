"use client"

import { useEffect, useState, useRef } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const duration = 1400
    const start = performance.now()
    function tick(now: number) {
      const raw = Math.min((now - start) / duration, 1)
      const eased = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2
      setProgress(Math.round(eased * 100))
      if (raw < 1) requestAnimationFrame(tick)
      else { setProgress(100); setTimeout(() => setDone(true), 200); setTimeout(() => setHidden(true), 800) }
    }
    requestAnimationFrame(tick)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#EFEFEF] transition-opacity duration-1000 ${done ? "opacity-0 pointer-events-none" : ""}`}
    >
      <div className="text-[24px] font-semibold text-gray-900 tracking-widest uppercase">Noderum</div>
      <div className="text-[13px] text-gray-500 mt-4">{progress}%</div>
    </div>
  )
}
