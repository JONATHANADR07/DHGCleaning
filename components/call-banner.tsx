import { Button } from "@/components/ui/button"

export function CallBanner() {
  return (
    <section className="py-16 px-[6%]">
      <div className="bg-primary text-primary-foreground rounded-[18px] p-10 flex flex-col md:flex-row justify-between gap-5 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Necesitas limpieza hoy?</h2>
          <p className="text-gray-300 leading-relaxed">Contactanos directamente para disponibilidad en Montreal y alrededores.</p>
        </div>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-extrabold px-8 py-6 text-lg">
          <a href="tel:4382207424">438-220-7424</a>
        </Button>
      </div>
    </section>
  )
}
