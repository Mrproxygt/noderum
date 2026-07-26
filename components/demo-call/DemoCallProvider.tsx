'use client'

import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
  type ReactNode,
} from 'react'
import type { AgentState } from '@/components/ui/orb'

export type Msg = { role: 'user' | 'assistant'; content: string }

export type OpenArgs = {
  agentName: string
  dynamicVars?: Record<string, string>
}

type Ctx = {
  isOpen: boolean
  isMinimized: boolean
  isActive: boolean
  connecting: boolean
  ringing: boolean
  ringbackDone: boolean
  agentName: string
  messages: Msg[]
  agentState: AgentState
  displayState: AgentState
  isSpeaking: boolean
  elapsedSec: number
  orbColorsRef: React.RefObject<[string, string]>
  getInputVolume: () => number
  getOutputVolume: () => number
  statusLabel: string
  openModal: (args: OpenArgs) => void
  closeModal: () => void
  minimize: () => void
  expand: () => void
  startCall: () => Promise<void>
  endCall: () => Promise<void>
  startRingback: (phone: string) => Promise<void>
}

const DemoCallCtx = createContext<Ctx | null>(null)

export function DemoCallProvider({ children }: { children: ReactNode }) {
  return <Inner>{children}</Inner>
}

function decodeJwt(token: string): Record<string, unknown> | null {
  try {
    const payload = token.split('.')[1]
    if (!payload) return null
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))
  } catch {
    return null
  }
}

function Inner({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [agentName, setAgentName] = useState('Menodi')
  const [dynamicVars, setDynamicVars] = useState<Record<string, string>>({})
  const [messages, setMessages] = useState<Msg[]>([])
  const [connecting, setConnecting] = useState(false)
  const [ringing, setRingback] = useState(false)
  const [ringbackDone, setRingbackDone] = useState(false)
  const [agentState, setAgentState] = useState<AgentState>(null)
  const [elapsedSec, setElapsedSec] = useState(0)
  const callStartRef = useRef<number | null>(null)

  // Fake "active" state for when browser call tab is open
  const isActive = agentState !== null
  const isSpeaking = agentState === 'talking'

  const getInputVolume = useCallback(() => 0, [])
  const getOutputVolume = useCallback(() => 0, [])

  useEffect(() => {
    if (!isActive) return
    const id = window.setInterval(() => {
      const start = callStartRef.current
      if (!start) return
      setElapsedSec(Math.round((Date.now() - start) / 1000))
    }, 1000)
    return () => window.clearInterval(id)
  }, [isActive])

  const orbColorsRef = useRef<[string, string]>(['#8244E8', '#C9A8FF'])
  const displayState: AgentState = connecting ? 'thinking' : agentState
  useEffect(() => {
    if (displayState === 'talking') orbColorsRef.current = ['#A855F7', '#E9D5FF']
    else if (displayState === 'listening') orbColorsRef.current = ['#9D5CFF', '#C9A8FF']
    else if (displayState === 'thinking') orbColorsRef.current = ['#6D28D9', '#A78BFA']
    else orbColorsRef.current = ['#8244E8', '#C9A8FF']
  }, [displayState])

  const startCall = useCallback(async () => {
    if (isActive || connecting) return
    setConnecting(true)
    try {
      const res = await fetch('/api/call-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dynamicVars }),
      })
      const data = await res.json() as { token?: string; error?: string }
      if (!res.ok || !data.token) throw new Error(data.error ?? 'Ingen token mottagen')

      // Extract signed_url from JWT payload
      const claims = decodeJwt(data.token)
      const signedUrl = (claims?.signed_url as string) ?? (claims?.metadata as Record<string, unknown>)?.signed_url as string | undefined

      // Open ElevenLabs widget in new tab
      const FALLBACK_AGENT = 'agent_5101kwdd5mz4esyr8sxq9z81r44c'
      const talkUrl = signedUrl
        ? `https://elevenlabs.io/app/talk-to?signed_url=${encodeURIComponent(signedUrl)}`
        : `https://elevenlabs.io/app/talk-to?agent_id=${encodeURIComponent(FALLBACK_AGENT)}`

      window.open(talkUrl, '_blank', 'noopener,noreferrer')
      setAgentState('listening')
      callStartRef.current = Date.now()
      setElapsedSec(0)
    } catch (e) {
      console.error('DemoCall startCall error:', e)
    } finally {
      setConnecting(false)
    }
  }, [isActive, connecting, dynamicVars])

  const endCall = useCallback(async () => {
    setAgentState(null)
    callStartRef.current = null
  }, [])

  const startRingback = useCallback(async (phone: string) => {
    if (ringing) return
    setRingback(true)
    setRingbackDone(false)
    try {
      const res = await fetch('/api/ringback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, dynamicVars }),
      })
      const data = await res.json() as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error ?? 'Kunde inte ringa upp')
      setRingbackDone(true)
    } catch (e) {
      console.error('Ringback error:', e)
      setRingbackDone(false)
      throw e
    } finally {
      setRingback(false)
    }
  }, [ringing, dynamicVars])

  const openModal = useCallback((args: OpenArgs) => {
    setAgentName(args.agentName)
    setDynamicVars(args.dynamicVars ?? {})
    setRingbackDone(false)
    if (!isActive) {
      setMessages([])
      setElapsedSec(0)
    }
    setIsMinimized(false)
    setIsOpen(true)
  }, [isActive])

  const closeModal = useCallback(() => {
    if (isActive) {
      setIsMinimized(true)
      setIsOpen(false)
      return
    }
    setIsOpen(false)
    setIsMinimized(false)
    setMessages([])
    setAgentState(null)
    setElapsedSec(0)
    callStartRef.current = null
  }, [isActive])

  const minimize = useCallback(() => {
    setIsMinimized(true)
    setIsOpen(false)
  }, [])

  const expand = useCallback(() => {
    setIsMinimized(false)
    setIsOpen(true)
  }, [])

  const statusLabel = connecting
    ? 'Öppnar samtal…'
    : isActive
      ? 'Samtal öppnat i ny flik'
      : 'Redo att ringa'

  const value = useMemo<Ctx>(() => ({
    isOpen, isMinimized, isActive, connecting, ringing, ringbackDone,
    agentName, messages, agentState, displayState, isSpeaking,
    elapsedSec, orbColorsRef,
    getInputVolume, getOutputVolume, statusLabel,
    openModal, closeModal, minimize, expand, startCall, endCall, startRingback,
  }), [
    isOpen, isMinimized, isActive, connecting, ringing, ringbackDone,
    agentName, messages, agentState, displayState, isSpeaking,
    elapsedSec,
    getInputVolume, getOutputVolume, statusLabel,
    openModal, closeModal, minimize, expand, startCall, endCall, startRingback,
  ])

  return <DemoCallCtx.Provider value={value}>{children}</DemoCallCtx.Provider>
}

export function useDemoCall(): Ctx {
  const v = useContext(DemoCallCtx)
  if (!v) throw new Error('useDemoCall must be used inside <DemoCallProvider>')
  return v
}
