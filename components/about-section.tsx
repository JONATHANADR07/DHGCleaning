import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 px-[6%]">
      <div className="bg-card rounded-[18px] p-10 shadow-[0_4px_16px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598300053654-f28a1d86107b?auto=format&fit=crop&w=900&q=80"
            alt="Equipo de limpieza"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-[34px] font-bold text-primary mb-4">Sobre DHG Cleaning</h2>
          <p className="text-muted-foreground leading-[1.7] mb-4">
            DHG Cleaning es una compania de limpieza ubicada en Montreal, Canada. Nuestro objetivo es ofrecer un servicio confiable, puntual y detallado para clientes residenciales y comerciales.
          </p>
          <p className="text-muted-foreground leading-[1.7] mb-6">
            Trabajamos con atencion al detalle y adaptamos cada servicio segun el espacio, el tamano del trabajo y las necesidades del cliente.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-extrabold">
            <a href="mailto:jordan.jdjdj@gmail.com?subject=Informacion%20sobre%20DHG%20Cleaning">Enviar correo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
