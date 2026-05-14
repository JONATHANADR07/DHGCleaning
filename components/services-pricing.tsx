import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
    tag: "Popular",
    title: "Limpieza residencial",
    description: "Servicio ideal para casas, apartamentos y condominios.",
    price: "Desde $___",
    unit: "/ visita",
    subject: "Limpieza%20residencial"
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    tag: "Empresas",
    title: "Limpieza comercial",
    description: "Para oficinas, locales, negocios pequenos y areas comunes.",
    price: "Desde $___",
    unit: "/ servicio",
    subject: "Limpieza%20comercial"
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    tag: "Detalle",
    title: "Limpieza profunda",
    description: "Ideal para banos, cocinas, grasa, polvo acumulado y rincones.",
    price: "Desde $___",
    unit: "/ proyecto",
    subject: "Limpieza%20profunda"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    tag: "Mudanza",
    title: "Limpieza move-in / move-out",
    description: "Prepara tu propiedad antes de entrar o despues de salir.",
    price: "Desde $___",
    unit: "/ propiedad",
    subject: "Limpieza%20de%20mudanza"
  }
]

export function ServicesPricing() {
  return (
    <section id="precios" className="py-16 px-[6%]">
      <div className="flex justify-between items-end gap-5 mb-8 flex-wrap">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">Servicios y precios</h2>
          <p className="max-w-[620px] text-muted-foreground leading-relaxed">
            Contactanos para obtener una cotizacion personalizada segun tus necesidades.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col">
            <div className="relative w-full h-[190px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-1">
              <Badge variant="secondary" className="mb-3 font-bold">{service.tag}</Badge>
              <h3 className="font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="text-2xl font-black text-primary mb-4">
                {service.price} <span className="text-muted-foreground text-sm font-normal">{service.unit}</span>
              </div>
            </div>
            <Button asChild className="mx-5 mb-5 bg-accent text-accent-foreground hover:bg-accent/90 font-black">
              <a href={`mailto:jordan.jdjdj@gmail.com?subject=${service.subject}`}>Solicitar</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
