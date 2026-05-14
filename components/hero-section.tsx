"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-cover bg-center text-white py-20 px-[6%] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-9 items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(17,24,39,0.78), rgba(17,24,39,0.78)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')`
      }}
    >
      <div>
        <h2 className="text-[clamp(34px,5vw,62px)] leading-[1.05] mb-5 font-bold">
          Servicios de limpieza confiables en Montreal
        </h2>
        <p className="text-lg leading-relaxed mb-7 max-w-[700px] text-white/90">
          En DHG Cleaning ofrecemos limpieza profesional para casas, apartamentos, oficinas, negocios, mudanzas y mantenimiento regular. Solicita una cotizacion rapida por telefono o correo.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-extrabold px-6 py-6">
            <a href="tel:4382207424">Llamar ahora</a>
          </Button>
          <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-extrabold px-6 py-6">
            <a href="mailto:jordan.jdjdj@gmail.com?subject=Cotizacion%20DHG%20Cleaning">Pedir cotizacion</a>
          </Button>
        </div>
      </div>

      <form
        className="bg-card text-card-foreground p-7 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
        action="mailto:jordan.jdjdj@gmail.com"
        method="post"
        encType="text/plain"
      >
        <h3 className="text-2xl font-bold mb-2">Cotizacion rapida</h3>
        <p className="text-muted-foreground text-[15px] mb-5">Completa tus datos y envianos tu solicitud directamente.</p>
        
        <Input
          type="text"
          name="Nombre"
          placeholder="Tu nombre"
          required
          className="mb-3"
        />
        <Input
          type="tel"
          name="Telefono"
          placeholder="Tu telefono"
          required
          className="mb-3"
        />
        <Select name="Servicio">
          <SelectTrigger className="mb-3">
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residencial">Limpieza residencial</SelectItem>
            <SelectItem value="comercial">Limpieza comercial</SelectItem>
            <SelectItem value="profunda">Limpieza profunda</SelectItem>
            <SelectItem value="post-construccion">Limpieza post-construccion</SelectItem>
            <SelectItem value="mudanza">Limpieza de mudanza</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="Mensaje"
          rows={4}
          placeholder="Cuentanos que necesitas"
          className="mb-4"
        />
        <Button type="submit" className="w-full bg-primary text-primary-foreground font-extrabold">
          Enviar solicitud
        </Button>
      </form>
    </section>
  )
}
