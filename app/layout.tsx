import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { DemoCallProvider } from "@/components/demo-call/DemoCallProvider"
import { DemoCallRoot } from "@/components/demo-call/DemoCallRoot"
import { Nav } from "@/components/ui/nav"
import { Footer } from "@/components/ui/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Noderum — Vi bygger AI-bolag för Sverige",
  description:
    "Noderum grundar och driver operativa AI-företag för svenska SMB. Tre bolag i pilotdrift: Menodi.se, WebsiteForge, och ett stealth-projekt inom performance-baserad influencer marketing.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <DemoCallProvider>
          <Nav />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <DemoCallRoot />
        </DemoCallProvider>
      </body>
    </html>
  )
}
