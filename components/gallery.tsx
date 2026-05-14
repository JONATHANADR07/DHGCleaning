import Image from "next/image"

const images = [
  {
    src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
    alt: "Trabajo de limpieza 1"
  },
  {
    src: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=900&q=80",
    alt: "Trabajo de limpieza 2"
  },
  {
    src: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80",
    alt: "Trabajo de limpieza 3"
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    alt: "Trabajo de limpieza 4"
  }
]

export function Gallery() {
  return (
    <section id="galeria" className="py-16 px-[6%]">
      <div className="flex justify-between items-end gap-5 mb-8 flex-wrap">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">Galeria de trabajos</h2>
          <p className="max-w-[620px] text-muted-foreground leading-relaxed">
            Algunos de nuestros trabajos de limpieza en Montreal.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[240px] rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
