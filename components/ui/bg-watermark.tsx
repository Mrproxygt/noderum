export function BgWatermark() {
  return (
    <div className="bg-watermark" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <circle cx="200" cy="200" r="140" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="80" y2="280" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="80" y1="280" x2="340" y2="200" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="340" y1="200" x2="200" y2="20" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <circle cx="200" cy="20" r="6" fill="white" fillOpacity="0.3"/>
        <circle cx="80" cy="280" r="5" fill="white" fillOpacity="0.2"/>
        <circle cx="340" cy="200" r="4" fill="white" fillOpacity="0.15"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <circle cx="200" cy="200" r="140" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="80" y2="280" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="80" y1="280" x2="340" y2="200" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
        <line x1="340" y1="200" x2="200" y2="20" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
      </svg>
    </div>
  )
}
