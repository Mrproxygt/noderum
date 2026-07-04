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

  const params = new URLSearchParams({ agent_id: agentId })
  if (Object.keys(dynamicVars).length > 0) {
    Object.entries(dynamicVars).forEach(([k, v]) => params.append(`dynamic_variables[${k}]`, v))
  }
  const res = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/token?${params}`, {
    method: 'GET',
    headers: { 'xi-api-key': apiKey },
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json({ error: text }, { status: res.status })
  }

  const data = await res.json() as { token?: string }
  return NextResponse.json({ token: data.token })
}
