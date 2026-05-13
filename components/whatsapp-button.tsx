import Link from "next/link"
import { Phone } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/15140000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 w-[58px] h-[58px] bg-[#25d366] text-white rounded-full grid place-items-center z-40 shadow-xl hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={28} />
    </Link>
  )
}
