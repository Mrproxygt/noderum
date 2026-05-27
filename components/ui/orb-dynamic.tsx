'use client'

import dynamic from 'next/dynamic'
import type { AgentState } from './orb'

// Three.js/WebGL cannot run in SSR — load only on client.
export const OrbDynamic = dynamic(
  () => import('./orb').then((m) => m.Orb),
  { ssr: false, loading: () => <div className="w-full h-full rounded-full bg-violet-900/30 animate-pulse" /> }
)

export type { AgentState }
