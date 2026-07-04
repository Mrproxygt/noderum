import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen flex flex-col justify-center items-center text-center px-5 pt-28 md:pt-36">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">( 404 )</p>
      <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-gray-900 tracking-tight leading-[0.95] mb-4">Sidan finns inte.</h1>
      <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-[480px] leading-relaxed mb-8">Sidan du letar efter har flyttats eller existerar inte.</p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-[14px] font-medium px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
      >
        <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
        Tillbaka hem
      </Link>
    </div>
  )
}
