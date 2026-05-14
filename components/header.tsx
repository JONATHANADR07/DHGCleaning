"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card py-4 px-[6%] flex justify-between items-center gap-5 sticky top-0 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <div className="bg-accent text-accent-foreground w-[52px] h-[52px] grid place-items-center rounded-[10px] font-black text-xl">
          DHG
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary">DHG Cleaning</h1>
          <p className="text-sm text-muted-foreground">Limpieza residencial y comercial</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-wrap gap-6">
        <Link href="#inicio" className="text-primary font-bold text-[15px] hover:text-accent transition-colors">Inicio</Link>
        <Link href="#servicios" className="text-primary font-bold text-[15px] hover:text-accent transition-colors">Servicios</Link>
        <Link href="#precios" className="text-primary font-bold text-[15px] hover:text-accent transition-colors">Precios</Link>
        <Link href="#galeria" className="text-primary font-bold text-[15px] hover:text-accent transition-colors">Galeria</Link>
        <Link href="#contacto" className="text-primary font-bold text-[15px] hover:text-accent transition-colors">Contacto</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-card shadow-lg flex flex-col p-6 gap-4 md:hidden">
          <Link href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-[15px]">Inicio</Link>
          <Link href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-[15px]">Servicios</Link>
          <Link href="#precios" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-[15px]">Precios</Link>
          <Link href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-[15px]">Galeria</Link>
          <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-[15px]">Contacto</Link>
        </nav>
      )}
    </header>
  )
}
