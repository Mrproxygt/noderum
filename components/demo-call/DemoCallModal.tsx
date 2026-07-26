'use client'

import { useState } from 'react'
import { Phone, Loader2, Minus, ExternalLink, Smartphone } from 'lucide-react'
import { OrbDynamic as Orb } from '@/components/ui/orb-dynamic'
import { useDemoCall } from './DemoCallProvider'

export function DemoCallModal() {
  const {
    isOpen, agentName, isActive, connecting, ringing, ringbackDone,
    displayState, orbColorsRef,
    getInputVolume, getOutputVolume, statusLabel,
    closeModal, minimize, startCall, endCall, startRingback,
  } = useDemoCall()

  const [phone, setPhone] = useState('')
  const [ringbackError, setRingbackError] = useState<string | null>(null)

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
                <span className="text-[18px] leading-none">&times;</span>
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
                  Öppnar
                </>
              ) : null}
            </div>
          </div>

          {/* Info text */}
          <div className="rounded-2xl border border-neutral-100 dark:border-white/[0.06] bg-neutral-50 dark:bg-white/[0.03] p-4">
            <p className="text-[13px] text-neutral-600 dark:text-white/60 text-center leading-relaxed">
              {isActive
                ? 'Samtalet är öppet i en ny flik — prata fritt. Stäng fliken när du är klar.'
                : 'Välj att prata i webbläsaren eller bli uppringd på mobilen.'
              }
            </p>
          </div>

          {/* Ringback success */}
          {ringbackDone && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800 px-4 py-3 text-[13px] text-emerald-800 dark:text-emerald-200 text-center">
              Vi ringer dig nu — svara i telefonen.
            </div>
          )}

          {/* Ringback error */}
          {ringbackError && (
            <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-800 px-4 py-3 text-[13px] text-red-800 dark:text-red-200 text-center">
              {ringbackError}
            </div>
          )}

          {/* Action buttons */}
          <div className="space-y-2.5">
            {/* Browser call — primary */}
            {!isActive ? (
              <button
                type="button"
                onClick={startCall}
                disabled={connecting || ringing}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-white font-medium text-[14px] inline-flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {connecting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                {connecting ? 'Öppnar…' : 'Prata i webbläsaren'}
              </button>
            ) : (
              <button
                type="button"
                onClick={endCall}
                className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-medium text-[14px] inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                Avsluta & stäng flik
              </button>
            )}

            {/* Ringback — secondary, always visible when not in browser call */}
            {!isActive && (
              <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-3 space-y-2">
                <div className="text-[12.5px] font-semibold flex items-center gap-1.5 text-neutral-700 dark:text-white/70">
                  <Smartphone className="w-3.5 h-3.5" /> Bli uppringd på mobilen
                </div>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    className="flex-1 rounded-lg border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.05] px-3 py-2 text-[14px] text-neutral-900 dark:text-white placeholder:text-neutral-400"
                    placeholder="07X XXX XX XX"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setRingbackError(null) }}
                  />
                  <button
                    type="button"
                    disabled={ringing || phone.replace(/\s/g, '').length < 8}
                    onClick={async () => {
                      setRingbackError(null)
                      try {
                        await startRingback(phone)
                      } catch (e) {
                        setRingbackError(e instanceof Error ? e.message : 'Kunde inte ringa upp')
                      }
                    }}
                    className="shrink-0 rounded-lg border border-violet-400 text-violet-700 dark:text-violet-300 font-semibold px-4 py-2 text-[13px] hover:bg-violet-50 dark:hover:bg-violet-950/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {ringing ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Ring mig'}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
