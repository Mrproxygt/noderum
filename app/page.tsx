"use client"

import Link from "next/link"
import { Phone, Globe, BarChart3 } from "lucide-react"
import { DemoCallTrigger } from "@/components/demo-call/DemoCallTrigger"

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="container-main" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <p className="t-lazare t-300 t-ls-0-6 t-white t-24 t-32@sm mb-0 mb-16@lg t-lh-1" style={{ maxWidth: "900px" }}>
          Vi bygger operativa AI-bolag för svenska SMB.
        </p>
      </div>

      <div className="overflow-hidden" style={{ marginBottom: "1.5rem" }}>
        <div className="d-flex justify-between items-center container-main t-lh-2" style={{ paddingTop: "2rem", borderTop: "1px solid var(--border-edge)" }}>
          <p className="t-lazare t-300 t-14 t-ls-1-4 t-white t-uppercase mb-0">
            Noderum
          </p>
          <p className="t-mono t-12 t-mid-gray mb-0" style={{ maxWidth: "400px", textAlign: "right" }}>
            Tre bolag i pilotdrift. Fler på väg.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── About / Definition ── */
function About() {
  return (
    <section id="about" className="section">
      <div className="container-main">
        <div className="grid-2" style={{ marginBottom: "4rem" }}>
          <div>
            <p className="t-mono t-12 t-ls-1-4 t-uppercase t-mid-gray mb-0" style={{ marginBottom: "1.5rem" }}>Definition</p>
          </div>
          <div className="t-18 t-19@sm t-light-gray t-lh-1-5" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p className="mb-0">
              Vi bygger inte plattformar. Vi bygger bolag. Noderum är en venture studio som grundar och driver operativa AI-företag — var och ett byggt för en specifik bransch, ett specifikt problem, en specifik kund.
            </p>
            <p className="mb-0">
              Vi äger dem. Vi driver dem. Vi anställer teamet, bygger produkten och tar in de första kunderna — själva. Inga konsulter. Inga underleverantörer. Bara operativa bolag som löser riktiga problem för svenska SMB.
            </p>
          </div>
        </div>

        <div className="grid-2" style={{ gap: "1px", backgroundColor: "var(--border-edge)" }}>
          {[
            {
              title: "Vad vi gör",
              description: "Vi grundar och driver AI-bolag för svenska SMB — hantverkare, restauranger, konsulter och salonger. Vi fokuserar på AI, automation och operativ effektivitet. Varje bolag byggs bottom-up från ett specifikt kundproblem — inte från en teknisk plattform som ska passa alla.",
            },
            {
              title: "Hur vi gör det",
              description: "Vi är extremt selektiva med vilka bolag vi startar. Vi äger majoriteten, driver operativt, och anställer teamet själva. Vi bygger för lönsamhet från dag ett — MRR, inte vision. Våra grundare är operatörer, inte konsulter. Vi har ett nätverk vi är fenomenalt stolta över och går genom väggar för att hjälpa våra bolag att vinna.",
            },
          ].map((c, i) => (
            <div key={i} className="card bg-dark-gray" style={{ margin: 0 }}>
              <h3 className="t-lazare t-300 t-24 t-white t-lh-1 mb-0" style={{ marginBottom: "1rem" }}>{c.title}</h3>
              <p className="t-14 t-light-gray t-lh-1-5 mb-0">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Principles ── */
function Principles() {
  return (
    <section id="principles" className="section">
      <div className="container-main">
        <div className="grid-2" style={{ marginBottom: "4rem" }}>
          <div>
            <p className="t-mono t-12 t-ls-1-4 t-uppercase t-mid-gray mb-0">Principer</p>
          </div>
          <div>
            <p className="t-18 t-19@sm t-light-gray t-lh-1-5 mb-0">
              Tre övertygelser som driver allt vi bygger.
            </p>
          </div>
        </div>

        <div className="grid-3">
          {[
            {
              title: "Intäkter från dag ett.",
              description: "Vi bygger för lönsamhet — inte för nästa funding-runda. Varje bolag ska kunna stå på egna ben från start.",
              quote: "Revenue is the best funding. It gives you control, freedom, and the ability to say no.",
              author: "Jason Fried",
            },
            {
              title: "Ägande är allt.",
              description: "De som bygger bolagen äger dem. Vi ger operatörer riktigt ägande — inte optioner som låtsas. När du äger resultatet tänker du annorlunda.",
              quote: "Ownership is not a privilege to be enjoyed. It is a responsibility to be executed.",
              author: "Naval Ravikant",
            },
            {
              title: "Svenska först.",
              description: "Svenska arbetsflöden, svenska kunder, svensk kontext. Inget översatt från engelska. Vi bygger för marknaden vi kan — inte för Silicon Valley.",
              quote: "Build for the customer you know. Everything else is guessing.",
              author: "Paul Graham",
            },
          ].map((p, i) => (
            <div key={i} className="card bg-dark-gray" style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="t-lazare t-300 t-24 t-white t-lh-1 mb-0" style={{ marginBottom: "1rem" }}>{p.title}</h3>
              <p className="t-14 t-light-gray t-lh-1-5 mb-0" style={{ marginBottom: "2rem", flex: 1 }}>{p.description}</p>
              <div className="quote-block">
                <p className="quote-text mb-0" style={{ marginBottom: "0.75rem" }}>"{p.quote}"</p>
                <p className="quote-author mb-0">{p.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Portfolio ── */
function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container-main">
        <div className="grid-2" style={{ marginBottom: "4rem" }}>
          <div>
            <p className="t-mono t-12 t-ls-1-4 t-uppercase t-mid-gray mb-0">Portfölj</p>
          </div>
          <div>
            <p className="t-18 t-19@sm t-light-gray t-lh-1-5 mb-0">
              Tre bolag i pilotdrift. Varje bolag ägt och drivet av Noderum.
            </p>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: "2rem" }}>
          {/* Menodi */}
          <div className="card bg-dark-gray" style={{ display: "flex", flexDirection: "column" }}>
            <div className="card-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }}>
              <Phone size={20} style={{ color: "var(--light-gray)" }} />
            </div>
            <h3 className="t-lazare t-300 t-24 t-white t-lh-1 mb-0" style={{ marginBottom: "0.75rem" }}>Menodi.se</h3>
            <p className="t-14 t-light-gray t-lh-1-5 mb-0" style={{ marginBottom: "1.5rem", flex: 1 }}>
              AI-receptionist som svarar, bokar och följer upp — utan att du lyfter ett finger. Byggd för svenska SMB: hantverkare, salonger, restauranger och konsulter.
            </p>
            <DemoCallTrigger />
          </div>

          {/* WebsiteForge */}
          <div className="card bg-dark-gray" style={{ display: "flex", flexDirection: "column" }}>
            <div className="card-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }}>
              <Globe size={20} style={{ color: "var(--light-gray)" }} />
            </div>
            <h3 className="t-lazare t-300 t-24 t-white t-lh-1 mb-0" style={{ marginBottom: "0.75rem" }}>WebsiteForge</h3>
            <p className="t-14 t-light-gray t-lh-1-5 mb-0" style={{ marginBottom: "1rem", flex: 1 }}>
              Snygga, effektiva hemsidor för svenska SMB — klara på under en dag. AI-generering kombinerat med mänsklig finishing. Fast pris. Snabb leverans. Inga överraskningar.
            </p>
            <div className="d-flex justify-between items-center" style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-edge)" }}>
              <span className="t-mono t-12 t-mid-gray">48h → lansering</span>
              <span className="t-mono t-12 t-blue-gray">Aktiv</span>
            </div>
          </div>

          {/* Stealth */}
          <div className="card bg-dark-gray" style={{ display: "flex", flexDirection: "column" }}>
            <div className="card-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }}>
              <BarChart3 size={20} style={{ color: "var(--light-gray)" }} />
            </div>
            <h3 className="t-lazare t-300 t-24 t-white t-lh-1 mb-0" style={{ marginBottom: "0.75rem" }}>Stealth</h3>
            <p className="t-14 t-light-gray t-lh-1-5 mb-0" style={{ marginBottom: "1rem", flex: 1 }}>
              Ett nytt bolag inom performance-baserad influencer marketing. Vi kopplar ihop svenska varumärken med rätt kreatörer — och betalar endast för faktiska resultat. Mer information vid lansering.
            </p>
            <div className="d-flex justify-between items-center" style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-edge)" }}>
              <span className="t-mono t-12 t-mid-gray">Stealth</span>
              <span className="t-mono t-12 t-mid-gray">Q3 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Contact ── */
function Contact() {
  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--border-edge)" }}>
      <div className="container-main">
        <div className="grid-2" style={{ marginBottom: "3rem" }}>
          <div>
            <p className="t-mono t-12 t-ls-1-4 t-uppercase t-mid-gray mb-0">Kontakt</p>
          </div>
          <div>
            <p className="t-18 t-19@sm t-light-gray t-lh-1-5 mb-0" style={{ marginBottom: "2rem" }}>
              Investerare, talanger, kunder — vi vill prata med er.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="mailto:youcef@noderum.se" className="link t-16">
                youcef@noderum.se →
              </a>
              <a href="mailto:careers@noderum.se" className="link t-16">
                careers@noderum.se →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Principles />
      <Portfolio />
      <Contact />
    </>
  )
}
