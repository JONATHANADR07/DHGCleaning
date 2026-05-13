export function About() {
  const features = [
    "Local Montreal supplier",
    "Competitive wholesale pricing",
    "Reliable inventory",
    "Fast delivery options",
    "Commercial and residential solutions",
  ]

  return (
    <section className="py-20" id="about">
      <div className="w-[min(1180px,92%)] mx-auto">
        <div className="bg-primary text-primary-foreground rounded-[34px] p-8 md:p-14 grid lg:grid-cols-2 gap-10 shadow-xl animate-fade-up">
          <div>
            <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-1.4px] mb-5 text-balance">
              A local Montreal supplier built for businesses that need reliability.
            </h2>
            <p className="text-white/75 mb-4 leading-relaxed">
              DHG CLEANING helps businesses and homeowners access professional cleaning products with competitive pricing and dependable local service.
            </p>
            <p className="text-white/75 leading-relaxed">
              We support cleaning companies, restaurants, offices, Airbnb hosts, property managers, commercial buildings, warehouses, and residential clients across Quebec.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 font-extrabold"
              >
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
