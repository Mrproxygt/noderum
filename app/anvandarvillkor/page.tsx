export default function AnvandarvillkorPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="container-main section">
        <h1 className="t-lazare t-300 t-40 t-white t-lh-1 mb-0" style={{ marginBottom: "3rem" }}>
          Användarvillkor
        </h1>

        <div className="t-14 t-light-gray t-lh-1-5" style={{ maxWidth: "700px", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p className="t-mono t-12 t-mid-gray mb-0">Senast uppdaterad: 1 juli 2026</p>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>1. Allmänt</h2>
            <p className="mb-0">
              Dessa användarvillkor gäller för användning av webbplatsen noderum.se, som ägs och drivs av Noderum AB. Genom att använda webbplatsen godkänner du dessa villkor.
            </p>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>2. Immateriella rättigheter</h2>
            <p className="mb-0">
              Allt innehåll på webbplatsen tillhör Noderum AB och skyddas av svensk och internationell upphovsrättslagstiftning.
            </p>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>3. Ansvarsbegränsning</h2>
            <p className="mb-0">
              Noderum AB strävar efter att informationen på webbplatsen ska vara korrekt, men vi garanterar inte fullständigheten. Vi ansvarar inte för skador som uppstår till följd av användning av webbplatsen.
            </p>
          </section>

          <section>
            <h2 className="t-lazare t-300 t-20 t-white mb-0" style={{ marginBottom: "1rem" }}>4. Kontakt</h2>
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
