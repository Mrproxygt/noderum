import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DemoCallProvider } from "@/components/demo-call/DemoCallProvider"
import { DemoCallRoot } from "@/components/demo-call/DemoCallRoot"
import { LayoutShell } from "@/components/LayoutShell"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: { default: "Noderum — Vi bygger AI-bolag för Sverige", template: "%s — Noderum" },
  description: "Noderum är en venture studio som grundar och driver operativa AI-företag för svenska SMB. Tre bolag i pilotdrift.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Noderum — Vi bygger AI-bolag för Sverige", description: "En venture studio som grundar och driver operativa AI-företag för svenska SMB.", images: ["/og-image.svg"] },
  metadataBase: new URL("https://noderum.se"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="h-full">
      <body className={`h-full ${inter.variable}`} style={{ fontFamily: "'Inter', var(--font-main)" }}>
        <DemoCallProvider>
          <LayoutShell>{children}</LayoutShell>
          <DemoCallRoot />
        </DemoCallProvider>
      </body>
    </html>
  )
}
