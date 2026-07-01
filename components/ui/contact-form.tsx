"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    // Client-side mailto as primary channel — simple, no backend needed.
    const subject = encodeURIComponent(`Meddelande från ${data.name}`)
    const body = encodeURIComponent(
      `Från: ${data.name} (${data.email})\n\n${data.message}`
    )
    window.location.href = `mailto:youcef@noderum.se?subject=${subject}&body=${body}`

    setSending(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-500/[0.04] p-8 text-center">
        <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
        <p className="font-semibold text-neutral-900 dark:text-white mb-1">Meddelandet skickat!</p>
        <p className="text-sm text-neutral-500 dark:text-white/40">
          Ditt mejlprogram har öppnats. Vi hör av oss så fort vi kan.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-white/70 mb-1.5">
          Namn
        </label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Ditt namn"
          className="rounded-xl"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-white/70 mb-1.5">
          E-post
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="din@email.se"
          className="rounded-xl"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-white/70 mb-1.5">
          Meddelande
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Berätta vad du vill..."
          className="rounded-xl"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-5"
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
        {sending ? "Skickar…" : "Skicka meddelande"}
      </Button>
    </form>
  )
}
