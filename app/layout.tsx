import type { Metadata } from "next"
import "./globals.css"
import { DemoCallProvider } from "@/components/demo-call/DemoCallProvider"
import { DemoCallRoot } from "@/components/demo-call/DemoCallRoot"
import { Nav } from "@/components/ui/nav"
import { Footer } from "@/components/ui/footer"

export const metadata: Metadata = {
  title: "Noderum — Vi bygger AI-bolag för Sverige",
  description:
    "Noderum grundar och driver operativa AI-företag för svenska SMB. Tre bolag i pilotdrift.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-dark-gray">
        <DemoCallProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <DemoCallRoot />
        </DemoCallProvider>
      </body>
    </html>
  )
}
