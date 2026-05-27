'use client'

import { PhoneOff } from 'lucide-react'
import { OrbDynamic as Orb } from '@/components/ui/orb-dynamic'
import { useDemoCall } from './DemoCallProvider'

function fmtMmSs(totalSec: number) {
  const s = Math.max(0, Math.floor(totalSec))
  const mm = Math.floor(s / 60)
  const ss = s % 60
  return `${mm}:${ss.toString().padStart(2, '0')}`
}

export function DemoCallBubble() {
  const {
    isActive, isOpen, agentName, displayState, orbColorsRef,
    getInputVolume, getOutputVolume, elapsedSec, expand, endCall,
  } = useDemoCall()

  if (!isActive || isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={expand}
        aria-label={`Öppna testsamtal med ${agentName}`}
        className="group flex items-center gap-3 rounded-full bg-gradient-to-br from-[#180A2B] via-[#1a0d35] to-[#2A1A4A] text-white pl-2 pr-2 py-2 shadow-xl hover:scale-[1.03] transition-all border border-white/10"
      >
        <span className="block w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Orb
            colors={orbColorsRef.current ?? ['#9D5CFF', '#C9A8FF']}
            colorsRef={orbColorsRef}
            seed={displayState === 'talking' ? 7 : 1}
            agentState={displayState}
            getInputVolume={getInputVolume}
            getOutputVolume={getOutputVolume}
          />
        </span>
        <span className="hidden sm:flex flex-col items-start leading-tight pr-1">
          <span className="text-[12px] font-medium truncate max-w-[140px]">{agentName}</span>
          <span className="text-[10.5px] text-white/70 tabular-nums">{fmtMmSs(elapsedSec)}</span>
        </span>
        <span className="sm:hidden text-[10.5px] text-white/80 tabular-nums pr-1">
          {fmtMmSs(elapsedSec)}
        </span>
        <span
          role="button"
          tabIndex={0}
          aria-label="Lägg på"
          onClick={(e) => { e.stopPropagation(); void endCall() }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault(); e.stopPropagation(); void endCall()
            }
          }}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white hover:opacity-90 transition shrink-0"
        >
          <PhoneOff className="w-4 h-4" />
        </span>
      </button>
    </div>
  )
}
