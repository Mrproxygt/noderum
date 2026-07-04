"use client"

type FilterPill = {
  label: string
  value: string
}

type FilterPillsProps = {
  pills: FilterPill[]
  active: string
  onChange: (value: string) => void
}

export function FilterPills({ pills, active, onChange }: FilterPillsProps) {
  return (
    <div className="filter-bar">
      {pills.map((p) => (
        <button
          key={p.value}
          className={`filter-pill ${active === p.value ? "active" : ""}`}
          onClick={() => onChange(p.value)}
        >
          {p.label}
        </button>
      ))}
    </div>
  )
}
