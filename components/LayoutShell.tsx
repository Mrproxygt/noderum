"use client"

import { Nav } from "@/components/ui/nav"
import { Footer } from "@/components/ui/footer"

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
