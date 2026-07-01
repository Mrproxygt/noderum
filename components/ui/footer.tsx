import Link from "next/link"

export function Footer() {
  return (
    <footer className="footer bg-dark-gray">
      <div className="container-main">
        <div className="d-flex justify-between items-center" style={{ flexWrap: "wrap", gap: "1rem" }}>
          <p className="t-mono t-12 t-mid-gray mb-0">
            © {new Date().getFullYear()} Noderum AB
          </p>
          <div className="d-flex" style={{ gap: "1.5rem" }}>
            <Link href="/integritetspolicy" className="t-mono t-12 t-mid-gray" style={{ transition: "color 0.3s" }}>
              Integritetspolicy
            </Link>
            <Link href="/anvandarvillkor" className="t-mono t-12 t-mid-gray" style={{ transition: "color 0.3s" }}>
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
