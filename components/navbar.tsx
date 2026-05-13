"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-[min(1180px,92%)] mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary grid place-items-center text-white font-black text-lg">
            D
          </span>
          <span className="font-extrabold text-primary text-xl">DHG CLEANING</span>
        </Link>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative left-[4%] right-[4%] top-[76px] md:top-0 bg-background md:bg-transparent border md:border-0 border-border rounded-2xl md:rounded-none p-4 md:p-0 flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-lg md:shadow-none z-50`}
        >
          <Link
            href="#products"
            className="text-muted-foreground hover:text-accent font-bold text-[15px] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-accent font-bold text-[15px] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#why"
            className="text-muted-foreground hover:text-accent font-bold text-[15px] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Us
          </Link>
          <Link
            href="#testimonials"
            className="text-muted-foreground hover:text-accent font-bold text-[15px] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Button asChild className="rounded-full">
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              Request Quote
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
