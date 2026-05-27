import type { ThreeElements } from '@react-three/fiber'

declare module 'react' {
  // R3F v8 targets React 18's global JSX namespace; React 19 moved to React.JSX.
  // This bridges the gap so <mesh>, <circleGeometry>, <shaderMaterial>, etc. type-check.
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
