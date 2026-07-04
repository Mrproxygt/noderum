type PageHeaderProps = {
  title: string
  subtitle?: string
  label?: string
}

export function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container-main">
        {label && <span className="section-label">( {label} )</span>}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
