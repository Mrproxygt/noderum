'use client'

import { useEffect, useRef } from 'react'
import { PhoneOff, Phone, Loader2, Minus } from 'lucide-react'
import { OrbDynamic as Orb } from '@/components/ui/orb-dynamic'
import { useDemoCall } from './DemoCallProvider'

function fmtMmSs(totalSec: number) {
  const s = Math.max(0, Math.floor(totalSec))
  const mm = Math.floor(s / 60)
  const ss = s % 60
  return `${mm}:${ss.toString().padStart(2, '0')}`
}

export function DemoCallModal() {
  const {
    isOpen, agentName, isActive, connecting,
    messages, displayState, orbColorsRef,
    getInputVolume, getOutputVolume, statusLabel,
    closeModal, minimize, startCall, endCall,
  } = useDemoCall()

  const scrollRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Panel */}
      <div className="relative z-10 w-full sm:max-w-md bg-white dark:bg-neutral-900 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-5 space-y-4">

          {/* Header */}
          <div className="flex items-start justify-between gap-3 -mt-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Testsamtal — {agentName}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              {isActive && (
                <button
                  type="button"
                  onClick={minimize}
                  aria-label="Minimera testsamtal"
                  className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Stäng"
                className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              >
                <span className="text-[18px] leading-none">×</span>
              </button>
            </div>
          </div>

          {/* Orb card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#180A2B] via-[#1a0d35] to-[#2A1A4A] text-white p-4 overflow-hidden">
            <div className="flex flex-col items-center justify-center py-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48">
                <Orb
                  key={displayState === 'talking' ? 'answering' : 'idle'}
                  colors={orbColorsRef.current ?? ['#9D5CFF', '#C9A8FF']}
                  colorsRef={orbColorsRef}
                  seed={displayState === 'talking' ? 7 : 1}
                  agentState={displayState}
                  getInputVolume={getInputVolume}
                  getOutputVolume={getOutputVolume}
                />
              </div>
              <div className="text-[10.5px] tracking-[0.14em] uppercase text-white/55 mt-1">
                {statusLabel}
              </div>
              <div className="font-semibold text-[16px] truncate mt-0.5 text-white">
                {agentName}
              </div>
            </div>
            {/* Status badge */}
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[11px] text-white/60">
              {isActive ? (
                <>
                  <span className="relative flex items-center justify-center">
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-violet-400/60 animate-ping" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </span>
                  I samtal
                </>
              ) : connecting ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ansluter
                </>
              ) : null}
            </div>
          </div>

          {/* Transcript */}
          <div
            ref={scrollRef}
            className="h-52 overflow-y-auto rounded-2xl border border-neutral-100 dark:border-white/[0.06] bg-neutral-50 dark:bg-white/[0.03] p-3 space-y-2"
          >
            {messages.length === 0 && !isActive && (
              <div className="h-full flex items-center justify-center text-[12.5px] text-neutral-400 dark:text-white/35 text-center px-4">
                Tryck &quot;Ring upp&quot; så börjar agenten prata direkt. Avbryt när du vill.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-snug ${
                  m.role === 'user'
                    ? 'bg-violet-600 text-white rounded-br-md'
                    : 'bg-white dark:bg-white/10 border border-neutral-100 dark:border-white/10 text-neutral-900 dark:text-white rounded-bl-md'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Action button */}
          <div className="flex flex-col items-center gap-2">
            {!isActive ? (
              <button
                type="button"
                onClick={startCall}
                disabled={connecting}
                className="px-6 py-3 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-white font-medium text-[14px] inline-flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {connecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Phone className="w-4 h-4" />}
                {connecting ? 'Ansluter…' : 'Ring upp'}
              </button>
            ) : (
              <button
                type="button"
                onClick={endCall}
                className="px-6 py-3 rounded-full bg-red-600 text-white font-medium text-[14px] inline-flex items-center gap-2 hover:scale-[1.02] transition-all"
              >
                <PhoneOff className="w-4 h-4" /> Lägg på
              </button>
            )}
            {isActive && (
              <div className="text-[12px] text-neutral-500 dark:text-white/40 text-center">
                Prata fritt — agenten lyssnar och svarar i realtid.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
