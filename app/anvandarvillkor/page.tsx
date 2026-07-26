import type { Metadata } from "next"

export const metadata: Metadata = { title: "Användarvillkor — Noderum", description: "Noderums användarvillkor för webbplatsen noderum.se.", alternates: { canonical: "/anvandarvillkor" } }

export default function AnvandarvillkorPage() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-10">Användarvillkor</h1>

        <div className="max-w-[700px] flex flex-col gap-8">
          <p className="text-[12px] text-gray-500 uppercase tracking-widest">Senast uppdaterad: 1 juli 2026</p>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">1. Allmänt</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Dessa användarvillkor gäller för användning av webbplatsen noderum.se, som ägs och drivs av Noderum AB. Genom att använda webbplatsen godkänner du dessa villkor.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">2. Immateriella rättigheter</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Allt innehåll på webbplatsen tillhör Noderum AB och skyddas av svensk och internationell upphovsrättslagstiftning.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">3. Ansvarsbegränsning</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Noderum AB strävar efter att informationen på webbplatsen ska vara korrekt, men vi garanterar inte fullständigheten. Vi ansvarar inte för skador som uppstår till följd av användning av webbplatsen.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">4. Kontakt</h2>
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
