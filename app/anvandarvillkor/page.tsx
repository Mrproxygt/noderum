import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Användarvillkor — Noderum",
}

export default function AnvandarvillkorPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
          Användarvillkor
        </h1>

        <div className="prose prose-neutral dark:prose-invert prose-sm max-w-none space-y-6 text-neutral-600 dark:text-white/50 leading-relaxed">
          <p><strong>Senast uppdaterad:</strong> 1 juli 2026</p>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">1. Allmänt</h2>
            <p>
              Dessa användarvillkor gäller för användning av webbplatsen noderum.se, som ägs och drivs av Noderum AB. Genom att använda webbplatsen godkänner du dessa villkor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">2. Immateriella rättigheter</h2>
            <p>
              Allt innehåll på webbplatsen, inklusive text, grafik, logotyper och bilder, tillhör Noderum AB och skyddas av svensk och internationell upphovsrättslagstiftning. Innehållet får inte kopieras, distribueras eller användas utan skriftligt medgivande från Noderum AB.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">3. Ansvarsbegränsning</h2>
            <p>
              Noderum AB strävar efter att informationen på webbplatsen ska vara korrekt och uppdaterad, men vi garanterar inte fullständigheten eller riktigheten. Vi ansvarar inte för skador som uppstår till följd av användning av webbplatsen eller dess innehåll.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">4. Externa länkar</h2>
            <p>
              Webbplatsen kan innehålla länkar till externa webbplatser. Noderum AB ansvarar inte för innehållet på dessa webbplatser eller för eventuella skador som uppstår vid användning av dem.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">5. Ändringar</h2>
            <p>
              Vi förbehåller oss rätten att när som helst ändra dessa användarvillkor. Ändringar publiceras på denna sida och träder i kraft vid publicering.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">6. Kontakt</h2>
            <p>
              Vid frågor om dessa villkor, kontakta oss på{" "}
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
