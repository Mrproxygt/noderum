export type DemoBranch = {
  id: string
  label: string
  icon: string
  agentName: string
  subtitle: string
  dynamicVars: Record<string, string>
}

export const DEMO_BRANCHES: DemoBranch[] = [
  {
    id: 'restaurang',
    label: 'Restaurang',
    icon: 'UtensilsCrossed',
    agentName: 'Menodi – Restaurang',
    subtitle: 'Kund ringer om bordsbyte…',
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
    agentName: 'Menodi – Kundtjänst',
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
    agentName: 'Menodi – Företagare',
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
    agentName: 'Menodi – Hantverkare',
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
    agentName: 'Menodi – Salong',
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
    label: 'Sök',
    icon: 'Search',
    agentName: 'Menodi – Sök',
    subtitle: 'Kund söker rätt avdelning…',
    dynamicVars: {
      business_name: 'Fastighets AB Nordhus',
      business_type: 'fastighetsbolag',
      services: 'Hyreskontrakt, felanmälan, parkering, tvättstuga',
      opening_hours: 'Mån–tor 8–17, fre 8–15',
      goal: 'Styra kunden till rätt kontaktperson eller avdelning och ta felanmälan',
    },
  },
]
