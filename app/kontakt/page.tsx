"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { ContactForm } from "@/components/ui/contact-form"

export default function KontaktPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Kontakt</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Hör av dig.
          </h1>
          <p className="text-lg text-neutral-500 dark:text-white/45 leading-relaxed max-w-xl">
            Investerare, talanger, kunder — vi vill prata med er. Använd formuläret eller mejla oss direkt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Direct email */}
            <div className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 dark:text-white/35">Mejla direkt</p>
                  <a
                    href="mailto:youcef@noderum.se"
                    className="text-sm font-medium text-neutral-900 dark:text-white hover:text-orange-500 transition-colors"
                  >
                    youcef@noderum.se
                  </a>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 dark:text-white/35">Karriär</p>
                  <a
                    href="mailto:careers@noderum.se"
                    className="text-sm font-medium text-neutral-900 dark:text-white hover:text-orange-500 transition-colors"
                  >
                    careers@noderum.se
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 dark:text-white/35">Plats</p>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    Stockholm, Sverige
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
