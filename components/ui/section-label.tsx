export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-6 bg-orange-500/40" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-orange-500/70 font-semibold">
        {children}
      </span>
    </div>
  )
}
