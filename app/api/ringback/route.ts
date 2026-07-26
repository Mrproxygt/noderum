import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const phone = String(body.phone ?? '').replace(/\s/g, '')
  const dynamicVars: Record<string, string> = body.dynamicVars ?? {}

  const agentId = process.env.ELEVENLABS_AGENT_ID
  const apiKey = process.env.ELEVENLABS_API_KEY
  const phoneNumberId = process.env.ELEVENLABS_PHONE_NUMBER_ID

  if (!agentId || !apiKey) {
    return NextResponse.json({ error: 'ElevenLabs not configured' }, { status: 500 })
  }
  if (!phoneNumberId) {
    return NextResponse.json({ error: 'Phone number not configured' }, { status: 500 })
  }

  // Normalize Swedish mobile: 07X → +467X
  let toNumber = phone
  if (/^07[0-9]{8}$/.test(toNumber)) {
    toNumber = '+46' + toNumber.slice(1)
  }
  if (!/^\+[1-9][0-9]{6,14}$/.test(toNumber)) {
    return NextResponse.json({ error: 'Ange ett giltigt mobilnummer (07… eller +46…)' }, { status: 400 })
  }

  const res = await fetch('https://api.elevenlabs.io/v1/convai/twilio/outbound-call', {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      agent_id: agentId,
      agent_phone_number_id: phoneNumberId,
      to_number: toNumber,
      conversation_initiation_client_data: { dynamic_variables: dynamicVars },
    }),
  })

  const data = await res.json().catch(() => ({})) as Record<string, unknown>
  if (!res.ok) {
    return NextResponse.json(
      { error: (data.message ?? data.detail ?? 'Kunde inte ringa upp') as string },
      { status: res.status },
    )
  }

  return NextResponse.json({ ok: true, conversation_id: data.conversation_id })
}
