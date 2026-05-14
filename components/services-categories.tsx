import { Home, Building2, Truck, Sparkles, HardHat } from "lucide-react"

const categories = [
  {
    icon: Home,
    title: "Casas",
    description: "Limpieza regular, profunda, banos, cocina, pisos y polvo."
  },
  {
    icon: Building2,
    title: "Oficinas",
    description: "Mantenimiento para espacios de trabajo, escritorios y areas comunes."
  },
  {
    icon: Truck,
    title: "Mudanzas",
    description: "Limpieza antes o despues de mudarte para entregar el lugar impecable."
  },
  {
    icon: Sparkles,
    title: "Profunda",
    description: "Servicio detallado para manchas, grasa, rincones y areas dificiles."
  },
  {
    icon: HardHat,
    title: "Post-construccion",
    description: "Retiro de polvo ligero, limpieza general y preparacion del espacio."
  }
]

export function ServicesCategories() {
  return (
    <section id="servicios" className="py-16 px-[6%]">
      <div className="flex justify-between items-end gap-5 mb-8 flex-wrap">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">Categorias de servicio</h2>
          <p className="max-w-[620px] text-muted-foreground leading-relaxed">
            Organizado en estilo catalogo para que encuentres rapido el servicio que necesitas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-5">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-card p-6 rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.07)] border-t-[5px] border-t-accent"
          >
            <category.icon className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-bold text-primary mb-2">{category.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
