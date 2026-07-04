"use client"

export function BackToTop() {
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back To Top
      <span className="back-to-top-arrow">↑</span>
    </button>
  )
}
