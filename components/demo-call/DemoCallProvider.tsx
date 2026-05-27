'use client'

import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
  type ReactNode,
} from 'react'
import { useConversation, ConversationProvider } from '@elevenlabs/react'
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
}

const DemoCallCtx = createContext<Ctx | null>(null)

export function DemoCallProvider({ children }: { children: ReactNode }) {
  return (
    <ConversationProvider>
      <Inner>{children}</Inner>
    </ConversationProvider>
  )
}

function Inner({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [agentName, setAgentName] = useState('Menodi')
  const [dynamicVars, setDynamicVars] = useState<Record<string, string>>({})
  const [messages, setMessages] = useState<Msg[]>([])
  const [connecting, setConnecting] = useState(false)
  const [agentState, setAgentState] = useState<AgentState>(null)
  const [elapsedSec, setElapsedSec] = useState(0)
  const callStartRef = useRef<number | null>(null)

  const conversation = useConversation({
    onConnect: () => {
      setAgentState('listening')
      callStartRef.current = Date.now()
      setElapsedSec(0)
    },
    onDisconnect: () => {
      setAgentState(null)
      callStartRef.current = null
    },
    onError: () => {
      setConnecting(false)
    },
    onMessage: (msg) => {
      const m = msg as { source?: string; message?: string }
      const role = m.source === 'user' ? 'user' : 'assistant'
      const content = typeof m.message === 'string' ? m.message : ''
      if (!content) return
      setMessages((mm) => [...mm, { role, content }])
    },
  })

  const status = conversation.status
  const isActive = status === 'connected'
  const isSpeaking = conversation.isSpeaking

  useEffect(() => {
    if (!isActive) return
    setAgentState(isSpeaking ? 'talking' : 'listening')
  }, [isSpeaking, isActive])

  const getInputVolume = useCallback(() => {
    try { return conversation.getInputVolume?.() ?? 0 } catch { return 0 }
  }, [conversation])
  const getOutputVolume = useCallback(() => {
    try { return conversation.getOutputVolume?.() ?? 0 } catch { return 0 }
  }, [conversation])

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
      await navigator.mediaDevices.getUserMedia({ audio: true })
      const res = await fetch('/api/call-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dynamicVars }),
      })
      const data = await res.json() as { token?: string; error?: string }
      if (!res.ok || !data.token) throw new Error(data.error ?? 'Ingen token mottagen')
      await conversation.startSession({
        conversationToken: data.token,
        connectionType: 'webrtc',
      })
    } catch (e) {
      console.error('DemoCall startCall error:', e)
    } finally {
      setConnecting(false)
    }
  }, [isActive, connecting, dynamicVars, conversation])

  const endCall = useCallback(async () => {
    try { await conversation.endSession() } catch { /* noop */ }
    setAgentState(null)
  }, [conversation])

  const openModal = useCallback((args: OpenArgs) => {
    setAgentName(args.agentName)
    setDynamicVars(args.dynamicVars ?? {})
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

  useEffect(() => () => { try { conversation.endSession() } catch { /* noop */ } }, []) // eslint-disable-line

  const statusLabel = connecting
    ? 'Ringer upp…'
    : isSpeaking
      ? `${agentName} talar`
      : isActive
        ? 'Lyssnar på dig…'
        : 'Redo att ringa'

  const value = useMemo<Ctx>(() => ({
    isOpen, isMinimized, isActive, connecting,
    agentName, messages, agentState, displayState, isSpeaking,
    elapsedSec, orbColorsRef,
    getInputVolume, getOutputVolume, statusLabel,
    openModal, closeModal, minimize, expand, startCall, endCall,
  }), [
    isOpen, isMinimized, isActive, connecting,
    agentName, messages, agentState, displayState, isSpeaking,
    elapsedSec,
    getInputVolume, getOutputVolume, statusLabel,
    openModal, closeModal, minimize, expand, startCall, endCall,
  ])

  return <DemoCallCtx.Provider value={value}>{children}</DemoCallCtx.Provider>
}

export function useDemoCall(): Ctx {
  const v = useContext(DemoCallCtx)
  if (!v) throw new Error('useDemoCall must be used inside <DemoCallProvider>')
  return v
}
