"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

type Scene = 0 | 1 | 2 | 3

// 12 frames spread across scene 2 — smaller steps = smoother counter
const EARN_FRAMES = [247, 253, 259, 265, 271, 277, 283, 289, 295, 301, 307, 312]
const BAR_H = [0.28, 0.48, 0.36, 0.58, 0.42, 0.70, 0.88, 1.0]
const PARTICLES = [
  { x: -58, y: -24, s: 2.0, d: 0.20 },
  { x:  50, y: -30, s: 1.5, d: 0.45 },
  { x: -42, y:  26, s: 1.0, d: 0.35 },
  { x:  66, y:  18, s: 2.0, d: 0.55 },
  { x:  22, y: -42, s: 1.5, d: 0.15 },
  { x: -72, y:   4, s: 1.0, d: 0.60 },
]

/* ── Collabify icon SVG ───────────────────────────────────── */
function CollabifyIcon({ size = 30 }: { size?: number }) {
  const r = size * 0.267
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" rx={r} fill="#0f0f0f" />
      <circle cx="10.5" cy="12" r="1.6" fill="white" />
      <circle cx="19.5" cy="12" r="1.6" fill="white" />
      <path d="M7.5 20.5 Q10.5 16.5 14 18.5 Q17.5 20.5 22.5 13.5"
        stroke="url(#cg)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id="cg" x1="7" y1="17" x2="23" y2="17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Simple SVG icons for TikTok sidebar ─────────────────── */
function IconHeart() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 12 L2 7 Q0.5 5.5 2 4 Q3.5 2.5 5.5 4 L7 5.5 L8.5 4 Q10.5 2.5 12 4 Q13.5 5.5 12 7Z"
        fill="white" opacity="0.88" />
    </svg>
  )
}
function IconComment() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1.5" width="12" height="9" rx="2.5"
        stroke="white" strokeWidth="1.2" opacity="0.85" />
      <path d="M4.5 12 L3.5 13.5 L8 12"
        stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}
function IconShare() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="11" cy="3" r="1.8" stroke="white" strokeWidth="1.1" opacity="0.85" />
      <circle cx="11" cy="11" r="1.8" stroke="white" strokeWidth="1.1" opacity="0.85" />
      <circle cx="3"  cy="7" r="1.8" stroke="white" strokeWidth="1.1" opacity="0.85" />
      <line x1="4.7" y1="6.1" x2="9.3" y2="3.9" stroke="white" strokeWidth="1.1" opacity="0.85" />
      <line x1="4.7" y1="7.9" x2="9.3" y2="10.1" stroke="white" strokeWidth="1.1" opacity="0.85" />
    </svg>
  )
}

/* ── Influencer illustration ─────────────────────────────── */
function InfluencerVideo() {
  return (
    <svg
      viewBox="0 0 88 170"
      width={88}
      height={170}
      style={{ position: "absolute", inset: 0, display: "block" }}
    >
      <defs>
        <linearGradient id="ibg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#180930" />
          <stop offset="60%" stopColor="#24125a" />
          <stop offset="100%" stopColor="#101828" />
        </linearGradient>
        <radialGradient id="ibloom" cx="50%" cy="38%" r="50%">
          <stop offset="0%" stopColor="rgba(217,70,239,0.13)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="iskin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9cca8" />
          <stop offset="100%" stopColor="#eeaa7a" />
        </linearGradient>
        <linearGradient id="ihair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e0d3a" />
          <stop offset="100%" stopColor="#2e1658" />
        </linearGradient>
        <linearGradient id="ishirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1450" />
          <stop offset="100%" stopColor="#180930" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="88" height="170" fill="url(#ibg)" />
      <rect width="88" height="170" fill="url(#ibloom)" />

      {/* Shoulders / torso */}
      <path d="M0 148 C12 124 28 116 44 118 C60 116 76 124 88 148 L88 170 L0 170Z"
        fill="url(#ishirt)" />

      {/* Neck */}
      <rect x="39" y="98" width="10" height="22" rx="5" fill="url(#iskin)" />

      {/* Head */}
      <ellipse cx="44" cy="82" rx="22" ry="24" fill="url(#iskin)" />

      {/* Hair — crown + sides */}
      <path d="M22 76 C22 48 44 40 44 40 C44 40 66 48 66 76 C62 56 44 50 44 50 C44 50 26 56 22 76Z"
        fill="url(#ihair)" />
      <path d="M22 76 C17 78 15 88 17 96 C19 99 22 97 24 94 C22 86 21 78 22 76Z"
        fill="url(#ihair)" />
      <path d="M66 76 C71 78 73 88 71 96 C69 99 66 97 64 94 C66 86 67 78 66 76Z"
        fill="url(#ihair)" />

      {/* Ears */}
      <ellipse cx="22" cy="84" rx="3" ry="4.5" fill="url(#iskin)" />
      <ellipse cx="66" cy="84" rx="3" ry="4.5" fill="url(#iskin)" />

      {/* Eyebrows */}
      <path d="M33 74 Q37 71 41 73" stroke="#7a4022" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M47 73 Q51 71 55 74" stroke="#7a4022" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="37" cy="80" rx="4.5" ry="4.5" fill="white" />
      <ellipse cx="51" cy="80" rx="4.5" ry="4.5" fill="white" />
      <circle cx="38" cy="80" r="3" fill="#1a0a35" />
      <circle cx="52" cy="80" r="3" fill="#1a0a35" />
      <circle cx="39.2" cy="78.8" r="1.1" fill="white" />
      <circle cx="53.2" cy="78.8" r="1.1" fill="white" />

      {/* Nose */}
      <path d="M42 85 Q40 90 42 92 Q44 93 46 92 Q48 90 46 85"
        fill="rgba(0,0,0,0.07)" />

      {/* Lips */}
      <path d="M38 94 Q44 99 50 94" stroke="#c08878" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Arms/hands */}
      <ellipse cx="22" cy="120" rx="9" ry="6" fill="url(#iskin)" />
      <ellipse cx="66" cy="120" rx="9" ry="6" fill="url(#iskin)" />

      {/* Product: sunglasses (fashion item) held up */}
      <g transform="translate(22, 112)">
        {/* Left lens */}
        <rect x="0"  y="2" width="18" height="12" rx="6"
          fill="#0d0620" stroke="#d946ef" strokeWidth="0.9" />
        {/* Right lens */}
        <rect x="22" y="2" width="18" height="12" rx="6"
          fill="#0d0620" stroke="#d946ef" strokeWidth="0.9" />
        {/* Bridge */}
        <line x1="18" y1="8" x2="22" y2="8" stroke="#d946ef" strokeWidth="0.9" />
        {/* Temple arms */}
        <line x1="0"  y1="8" x2="-4" y2="8" stroke="#d946ef" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="40" y1="8" x2="44" y2="8" stroke="#d946ef" strokeWidth="0.9" strokeLinecap="round" />
        {/* Lens tint */}
        <rect x="1"  y="3" width="16" height="10" rx="5" fill="rgba(217,70,239,0.22)" />
        <rect x="23" y="3" width="16" height="10" rx="5" fill="rgba(217,70,239,0.22)" />
      </g>
    </svg>
  )
}

/* ── Main component ──────────────────────────────────────── */
export function CollabifyDemo() {
  const [scene, setScene]   = useState<Scene>(0)
  const [eIdx, setEIdx]     = useState(0)
  const [tap, setTap]       = useState(false)
  const [bought, setBought] = useState(false)
  const [cycle, setCycle]   = useState(0)

  useEffect(() => {
    setScene(0); setEIdx(0); setTap(false); setBought(false)

    const ts: ReturnType<typeof setTimeout>[] = []

    // Scene timing (ms)
    ts.push(setTimeout(() => setScene(1), 1400))
    ts.push(setTimeout(() => setTap(true), 1720))
    ts.push(setTimeout(() => setScene(2), 2300))
    ts.push(setTimeout(() => setBought(true), 2600))
    ts.push(setTimeout(() => setScene(3), 4400))
    ts.push(setTimeout(() => setCycle(c => c + 1), 5400))

    // Earnings: 12 frames × 145ms = ~1.7s of smooth counting
    EARN_FRAMES.forEach((_, i) => {
      ts.push(setTimeout(() => setEIdx(i), 2800 + i * 145))
    })

    return () => ts.forEach(clearTimeout)
  }, [cycle])

  const earn = EARN_FRAMES[Math.min(eIdx, EARN_FRAMES.length - 1)]

  return (
    <div
      className="relative w-full select-none overflow-hidden"
      style={{ height: 210, background: "#ffffff" }}
    >
      {/* Subtle top-right bloom on white */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 75% 30%, rgba(217,70,239,0.06) 0%, transparent 60%)" }}
      />

      <AnimatePresence mode="wait">

        {/* ── Scenes 0+1: TikTok phone ── */}
        {(scene === 0 || scene === 1) && (
          <motion.div key="phone"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, filter: "blur(3px)" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <PhoneScene scene={scene} tap={tap} />
          </motion.div>
        )}

        {/* ── Scene 2: Purchase + Earnings ── */}
        {scene === 2 && (
          <motion.div key="purchase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <PurchaseScene bought={bought} earn={earn} eIdx={eIdx} />
          </motion.div>
        )}

        {/* ── Scene 3: Brand ── */}
        {scene === 3 && (
          <motion.div key="brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <BrandScene />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}

/* ─── Phone ─────────────────────────────────────────────── */
function PhoneScene({ scene, tap }: { scene: 0 | 1; tap: boolean }) {
  return (
    <div className="relative">
      <motion.div
        animate={{
          rotate: scene === 0 ? [0, -1.5, 0.5, -0.8, 0] : 0,
          y: scene === 0 ? [0, -2.5, 1, 0] : 0,
        }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
        style={{
          width: 88, height: 170, borderRadius: 20,
          background: "#1c1c1e",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 22px 44px rgba(0,0,0,0.75), 0 0 0 0.5px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
          overflow: "hidden", position: "relative",
        }}
      >
        {/* Punch-hole camera — no dynamic island */}
        <div style={{
          position: "absolute", top: 9, left: "50%",
          transform: "translateX(-50%)",
          width: 5, height: 5, borderRadius: "50%",
          background: "#000", zIndex: 10,
        }} />

        {/* Influencer video — scrolls up in scene 1 */}
        <motion.div
          animate={{ y: scene === 1 ? -12 : [0, -8, 0] }}
          transition={
            scene === 1
              ? { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
              : { duration: 2.2, ease: "easeInOut" }
          }
          style={{ position: "absolute", inset: 0 }}
        >
          <InfluencerVideo />

          {/* Creator handle — top overlay */}
          <div style={{
            position: "absolute", top: 16, left: 8,
            display: "flex", alignItems: "center", gap: 4,
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #d946ef, #9b59b6)",
              border: "1.5px solid white",
            }} />
            <span style={{ color: "white", fontSize: 6.5, fontWeight: 700, opacity: 0.9, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
              @sofiastyle
            </span>
          </div>

          {/* Bottom info */}
          <div style={{ position: "absolute", bottom: 14, left: 8, right: 26 }}>
            <div style={{ color: "white", fontSize: 6.5, fontWeight: 700, opacity: 0.9, textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
              @sofiastyle
            </div>
            <div style={{ color: "white", fontSize: 5.5, opacity: 0.55, marginTop: 1 }}>
              Dessa solglasögon är allt 😍 #mode
            </div>
            {/* Bio link */}
            <motion.div
              animate={tap ? {
                scale: [1, 0.85, 1.06, 1],
                background: ["rgba(255,255,255,0.12)", "rgba(217,70,239,0.4)", "rgba(255,255,255,0.14)"],
              } : {}}
              transition={{ duration: 0.35 }}
              style={{
                marginTop: 5,
                display: "inline-flex", alignItems: "center", gap: 2,
                background: "rgba(255,255,255,0.12)",
                borderRadius: 5, padding: "2px 5px",
                fontSize: 5.5, color: "white",
                border: "0.5px solid rgba(255,255,255,0.2)",
              }}
            >
              🔗 link in bio
            </motion.div>
          </div>

          {/* Right sidebar — SVG icons */}
          <div style={{
            position: "absolute", right: 5, bottom: 22,
            display: "flex", flexDirection: "column", gap: 10, alignItems: "center",
          }}>
            {[
              { icon: <IconHeart />, n: "89k" },
              { icon: <IconComment />, n: "2.1k" },
              { icon: <IconShare />, n: "14k" },
            ].map(({ icon, n }, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                {icon}
                <div style={{ fontSize: 5, color: "rgba(255,255,255,0.65)", marginTop: 1 }}>{n}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tap ripple */}
        <AnimatePresence>
          {tap && (
            <motion.div
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 3.8, opacity: 0 }}
              exit={{}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                position: "absolute", left: 16, bottom: 36,
                width: 12, height: 12, borderRadius: "50%",
                background: "rgba(217,70,239,0.75)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floor shadow on white */}
      <div style={{
        position: "absolute", bottom: -6, left: "50%",
        transform: "translateX(-50%)",
        width: 70, height: 10,
        background: "radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)",
        filter: "blur(6px)",
      }} />
    </div>
  )
}

/* ─── Purchase ───────────────────────────────────────────── */
function PurchaseScene({ bought, earn, eIdx }: { bought: boolean; earn: number; eIdx: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9, width: "100%", padding: "0 22px" }}>

      {/* Product row */}
      <motion.div
        initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 12, padding: "8px 12px",
          width: "100%", maxWidth: 248,
        }}
      >
        {/* Product: sunglasses icon */}
        <div style={{
          width: 34, height: 34, borderRadius: 8, flexShrink: 0,
          background: "#f4f0f8",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="22" height="12" viewBox="0 0 44 18" fill="none">
            <rect x="0"  y="2" width="18" height="12" rx="6" fill="#0d0620" stroke="#d946ef" strokeWidth="1.2" />
            <rect x="26" y="2" width="18" height="12" rx="6" fill="#0d0620" stroke="#d946ef" strokeWidth="1.2" />
            <line x1="18" y1="8" x2="26" y2="8" stroke="#d946ef" strokeWidth="1.2" />
            <rect x="1"  y="3" width="16" height="10" rx="5" fill="rgba(217,70,239,0.25)" />
            <rect x="27" y="3" width="16" height="10" rx="5" fill="rgba(217,70,239,0.25)" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#111", fontSize: 10, fontWeight: 600 }}>Noir Solglasögon</div>
          <div style={{ color: "rgba(0,0,0,0.38)", fontSize: 8, marginTop: 1 }}>SEK 649</div>
        </div>
        <motion.div
          animate={bought ? { scale: [1, 1.14, 1] } : {}}
          transition={{ duration: 0.35 }}
          style={{
            borderRadius: 7, padding: "4px 9px",
            background: bought ? "#d946ef" : "rgba(217,70,239,0.28)",
            color: "white", fontSize: 8, fontWeight: 700,
            transition: "background 0.3s ease",
          }}
        >
          {bought ? "✓ Köpt" : "Köp"}
        </motion.div>
      </motion.div>

      {/* Earnings + chart */}
      <motion.div
        initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.14 }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#faf5ff",
          border: "1px solid rgba(217,70,239,0.18)",
          borderRadius: 11, padding: "8px 14px",
          width: "100%", maxWidth: 248,
        }}
      >
        <div>
          <div style={{
            color: "rgba(0,0,0,0.35)", fontSize: 6.5,
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3,
          }}>INTÄKTER IDAG</div>
          {/* No key= here — number updates in place without remount flash */}
          <div style={{
            color: "#c026d3", fontSize: 19, fontWeight: 700,
            letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums",
          }}>
            kr {earn}
          </div>
        </div>

        {/* Mini bar chart */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 28 }}>
          {BAR_H.map((h, i) => (
            <motion.div key={i}
              animate={{ scaleY: eIdx >= i ? h : 0.08 }}
              transition={{ duration: 0.28, delay: i * 0.04 }}
              style={{
                width: 4, height: 28, borderRadius: 2, originY: 1,
                background: i === BAR_H.length - 1
                  ? "#c026d3"
                  : `rgba(192,38,211,${0.18 + i * 0.07})`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Commission badge */}
      <AnimatePresence>
        {eIdx >= 4 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 4 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: "flex", alignItems: "center", gap: 5,
              background: "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.28)",
              borderRadius: 20, padding: "3px 11px",
              color: "#4ade80", fontSize: 7.5, fontWeight: 600,
            }}
          >
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            + kr 65 spårad provision
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Brand ──────────────────────────────────────────────── */
function BrandScene() {
  return (
    <>
      {/* Soft pink bloom on white */}
      <div className="absolute pointer-events-none" style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 200, height: 100,
        background: "radial-gradient(ellipse, rgba(217,70,239,0.12) 0%, transparent 70%)",
        filter: "blur(24px)",
      }} />

      {PARTICLES.map((p, i) => (
        <motion.div key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: [0, -7, 0] }}
          transition={{ duration: 2.2, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: `calc(50% + ${p.x}px)`,
            top:  `calc(50% + ${p.y}px)`,
            width: p.s, height: p.s,
            borderRadius: "50%", background: "#c026d3",
          }}
        />
      ))}

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}
      >
        <div style={{
          border: "1px solid rgba(192,38,211,0.3)", borderRadius: 10,
          boxShadow: "0 0 14px rgba(192,38,211,0.15)",
        }}>
          <CollabifyIcon size={32} />
        </div>
        <span style={{ color: "#0f0f0f", fontSize: 21, fontWeight: 700, letterSpacing: "-0.03em" }}>
          Collabify
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        style={{
          color: "rgba(0,0,0,0.35)", fontSize: 8.5,
          letterSpacing: "0.12em", textTransform: "uppercase",
          textAlign: "center", position: "relative",
        }}
      >
        Performance-based influencer marketing
      </motion.div>
    </>
  )
}
