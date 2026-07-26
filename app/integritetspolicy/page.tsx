import type { Metadata } from "next"

export const metadata: Metadata = { title: "Integritetspolicy", description: "Noderums integritetspolicy — hur vi samlar in och använder personuppgifter.", alternates: { canonical: "/integritetspolicy" } }

export default function IntegritetspolicyPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-10">Integritetspolicy</h1>

        <div className="max-w-[700px] flex flex-col gap-8">
          <p className="text-[12px] text-gray-500 uppercase tracking-widest">Senast uppdaterad: 1 juli 2026</p>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">1. Vilka vi är</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Noderum AB driver webbplatsen noderum.se. Vi värnar om din personliga integritet och eftersträvar alltid en hög nivå av dataskydd. Denna policy förklarar hur vi samlar in och använder personuppgifter.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">2. Vilka uppgifter vi samlar in</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-2">När du använder vårt kontaktformulär samlar vi in:</p>
            <ul className="list-disc pl-6 text-[14px] text-gray-600 leading-relaxed space-y-1">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Meddelandeinnehåll</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">3. Hur vi använder uppgifterna</h2>
            <ul className="list-disc pl-6 text-[14px] text-gray-600 leading-relaxed space-y-1">
              <li>För att besvara din förfrågan via kontaktformuläret</li>
              <li>För att förbättra vår webbplats och tjänster</li>
              <li>För att följa tillämpliga lagar och regler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">4. Dina rättigheter</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Du har rätt att begära information, rättelse, radering av dina uppgifter, samt invända mot behandling. Kontakta oss på{" "}
              <a href="mailto:youcef@noderum.se" className="text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors">
                youcef@noderum.se
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">5. Kontakt</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Vid frågor, kontakta oss på{" "}
              <a href="mailto:youcef@noderum.se" className="text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors">
                youcef@noderum.se
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
