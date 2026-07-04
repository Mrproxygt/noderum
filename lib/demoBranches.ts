export type DemoBranch = {
  id: string
  label: string
  icon: string
  agentName: string
  subtitle: string
  dynamicVars: Record<string, string>
}

// Demo branches for Noderum.se — all powered by the same Menodi dynamic agent.
// The agent discovers the caller's trade itself via conversation; dynamicVars
// pre-seed the scenario so the demo shows industry-specific behavior instantly.
export const DEMO_BRANCHES: DemoBranch[] = [
  {
    id: 'restaurang',
    label: 'Restaurang',
    icon: 'UtensilsCrossed',
    agentName: 'Noderum AI — Restaurang',
    subtitle: 'Kund ringer om bordsbokning…',
    dynamicVars: {
      business_name: 'Restaurang Åkerblom',
      business_type: 'restaurang',
      services: 'Bordsbokning, take-away, catering för 10–200 personer',
      opening_hours: 'Mån–fre 11–22, lör–sön 12–23',
      goal: 'Ta emot bordsbokning, svara på frågor om menyn och hänvisa till take-away',
    },
  },
  {
    id: 'kundtjanst',
    label: 'Kundtjänst',
    icon: 'Headphones',
    agentName: 'Noderum AI — Kundtjänst',
    subtitle: 'Kund ringer om retur…',
    dynamicVars: {
      business_name: 'Nordhem E-handel',
      business_type: 'e-handel kundtjänst',
      services: 'Returer, orderstatus, produktfrågor, reklamationer',
      opening_hours: 'Mån–fre 8–18',
      goal: 'Registrera returärende, ge orderstatus och eskalera klagomål till en människa',
    },
  },
  {
    id: 'foretagare',
    label: 'Företagare',
    icon: 'Briefcase',
    agentName: 'Noderum AI — Företagare',
    subtitle: 'Kund ringer om offert…',
    dynamicVars: {
      business_name: 'Bergström Konsult AB',
      business_type: 'konsultbolag',
      services: 'Affärsutveckling, digitalisering, projektledning',
      opening_hours: 'Mån–fre 9–17',
      goal: 'Boka inledande möte, kvalificera lead och besvara frågor om tjänster',
    },
  },
  {
    id: 'hantverkare',
    label: 'Hantverkare',
    icon: 'Wrench',
    agentName: 'Noderum AI — Hantverkare',
    subtitle: 'Kund ringer om läckage…',
    dynamicVars: {
      business_name: 'Svensson VVS',
      business_type: 'VVS-firma',
      services: 'Rörläggning, värmepumpar, akuta läckor, ROT-avdrag',
      opening_hours: 'Mån–fre 7–16, jourtjänst dygnet runt',
      goal: 'Boka hembesök, hantera akuta ärenden och ta kontaktuppgifter',
    },
  },
  {
    id: 'salong',
    label: 'Salong',
    icon: 'Scissors',
    agentName: 'Noderum AI — Salong',
    subtitle: 'Kund ringer om klipptid…',
    dynamicVars: {
      business_name: 'Salong Viola',
      business_type: 'frisörsalong',
      services: 'Klippning, färgning, slingor, naglar, bryn',
      opening_hours: 'Tis–lör 9–19',
      goal: 'Boka tid hos rätt stylist, informera om priser och hantera avbokningar',
    },
  },
  {
    id: 'sok',
    label: 'Fastighet',
    icon: 'Search',
    agentName: 'Noderum AI — Fastighet',
    subtitle: 'Hyresgäst felanmäler…',
    dynamicVars: {
      business_name: 'Fastighets AB Nordhus',
      business_type: 'fastighetsbolag',
      services: 'Hyreskontrakt, felanmälan, parkering, tvättstuga',
      opening_hours: 'Mån–tor 8–17, fre 8–15',
      goal: 'Styra kunden till rätt kontaktperson eller avdelning och ta felanmälan',
    },
  },
]
