import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Integritetspolicy — Noderum",
}

export default function IntegritetspolicyPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
          Integritetspolicy
        </h1>

        <div className="prose prose-neutral dark:prose-invert prose-sm max-w-none space-y-6 text-neutral-600 dark:text-white/50 leading-relaxed">
          <p><strong>Senast uppdaterad:</strong> 1 juli 2026</p>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">1. Vilka vi är</h2>
            <p>
              Noderum AB (org.nr [under registrering]) driver webbplatsen noderum.se. Vi värnar om din personliga integritet och eftersträvar alltid en hög nivå av dataskydd. Denna policy förklarar hur vi samlar in och använder personuppgifter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">2. Vilka uppgifter vi samlar in</h2>
            <p>När du använder vårt kontaktformulär samlar vi in:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Meddelandeinnehåll</li>
            </ul>
            <p className="mt-3">
              När du besöker vår webbplats samlar vi in anonymiserad webbstatistik via Vercel Analytics. Denna data innehåller inga personuppgifter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">3. Hur vi använder uppgifterna</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>För att besvara din förfrågan via kontaktformuläret</li>
              <li>För att förbättra vår webbplats och tjänster</li>
              <li>För att följa tillämpliga lagar och regler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">4. Lagring och delning</h2>
            <p>
              Vi delar inte dina personuppgifter med tredje part utan ditt uttryckliga medgivande, om det inte krävs enligt lag. Dina uppgifter lagras endast så länge som krävs för att uppfylla ändamålet med insamlingen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">5. Dina rättigheter</h2>
            <p>
              Du har rätt att när som helst begära information om vilka personuppgifter vi har om dig, begära rättelse av felaktiga uppgifter, begära radering av dina uppgifter, samt invända mot behandling av dina uppgifter. Kontakta oss på youcef@noderum.se för att utöva dina rättigheter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">6. Cookies</h2>
            <p>
              Vår webbplats använder nödvändiga cookies för att fungera korrekt. Vi använder inte cookies för marknadsföring eller spårning utan ditt samtycke.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">7. Kontakt</h2>
            <p>
              Vid frågor om denna integritetspolicy, kontakta oss på{" "}
              <a href="mailto:youcef@noderum.se" className="text-orange-500 hover:text-orange-600">
                youcef@noderum.se
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
