import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#050a14] text-white py-12">
      <div className="w-[min(1180px,92%)] mx-auto">
        <div className="grid md:grid-cols-[1.4fr_repeat(3,1fr)] gap-6 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3.5">DHG CLEANING</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional wholesale and retail cleaning products for businesses and residential customers across Quebec.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3.5">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="#products" className="text-white/70 text-sm hover:text-white transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-white/70 text-sm hover:text-white transition-colors">
                About
              </Link>
              <Link href="#why" className="text-white/70 text-sm hover:text-white transition-colors">
                Why Us
              </Link>
              <Link href="#contact" className="text-white/70 text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3.5">Products</h4>
            <div className="flex flex-col gap-2">
              <span className="text-white/70 text-sm">All-Purpose Cleaner</span>
              <span className="text-white/70 text-sm">Degreaser</span>
              <span className="text-white/70 text-sm">Disinfectants</span>
              <span className="text-white/70 text-sm">Janitorial Supplies</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3.5">Social</h4>
            <div className="flex flex-col gap-2">
              <span className="text-white/70 text-sm">Instagram</span>
              <span className="text-white/70 text-sm">Facebook</span>
              <span className="text-white/70 text-sm">LinkedIn</span>
              <span className="text-white/70 text-sm">WhatsApp</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15 pt-5 text-white/60 text-sm text-center">
          © 2026 DHG CLEANING. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
