export default function IntegritetspolicyPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="container-main section">
        <h1 className="t-lazare t-300 t-40 t-white t-lh-1 mb-0" style={{ marginBottom: "3rem" }}>
          Integritetspolicy
        </h1>

        <div className="t-14 t-light-gray t-lh-1-5" style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p className="t-mono t-12 t-mid-gray mb-0">Senast uppdaterad: 1 juli 2026</p>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>1. Vilka vi är</h2>
            <p className="mb-0">
              Noderum AB driver webbplatsen noderum.se. Vi värnar om din personliga integritet och eftersträvar alltid en hög nivå av dataskydd. Denna policy förklarar hur vi samlar in och använder personuppgifter.
            </p>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>2. Vilka uppgifter vi samlar in</h2>
            <p className="mb-0">När du använder vårt kontaktformulär samlar vi in:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Meddelandeinnehåll</li>
            </ul>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>3. Hur vi använder uppgifterna</h2>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>För att besvara din förfrågan via kontaktformuläret</li>
              <li>För att förbättra vår webbplats och tjänster</li>
              <li>För att följa tillämpliga lagar och regler</li>
            </ul>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>4. Dina rättigheter</h2>
            <p className="mb-0">
              Du har rätt att begära information, rättelse, radering av dina uppgifter, samt invända mot behandling. Kontakta oss på{" "}
              <a href="mailto:youcef@noderum.se" className="t-blue-gray" style={{ textDecoration: "underline" }}>
                youcef@noderum.se
              </a>.
            </p>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>5. Kontakt</h2>
            <p className="mb-0">
              Vid frågor, kontakta oss på{" "}
              <a href="mailto:youcef@noderum.se" className="t-blue-gray" style={{ textDecoration: "underline" }}>
                youcef@noderum.se
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
