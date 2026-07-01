"use client"

export function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="header">
      <div className="header-inner">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="t-lazare t-400 t-18 t-white t-ls-1 pointer"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          Noderum
        </button>

        <nav
          className="d-flex items-center"
          style={{ gap: "2rem" }}
        >
          {[
            { id: "about", label: "About" },
            { id: "principles", label: "Principles" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contact", label: "Contact" },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="t-mono t-12 t-ls-1-4 t-uppercase t-mid-gray pointer"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mid-gray)")}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
