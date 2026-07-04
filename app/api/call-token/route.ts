import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ status: 'ok', has_agent: !!process.env.ELEVENLABS_AGENT_ID, has_key: !!process.env.ELEVENLABS_API_KEY })
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const dynamicVars: Record<string, string> = body.dynamicVars ?? {}

  const agentId = process.env.ELEVENLABS_AGENT_ID
  const apiKey = process.env.ELEVENLABS_API_KEY

  if (!agentId || !apiKey) {
    return NextResponse.json({ error: 'ElevenLabs not configured' }, { status: 500 })
  }

  const res = await fetch('https://api.elevenlabs.io/v1/convai/conversation/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    },
    body: JSON.stringify({
      agent_id: agentId,
      ...(Object.keys(dynamicVars).length > 0 && { dynamic_variables: dynamicVars }),
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json({ error: text }, { status: res.status })
  }

  const data = await res.json() as { token?: string }
  return NextResponse.json({ token: data.token })
}
