"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = ["all", "liquid", "janitorial", "sanitary"] as const
type Category = (typeof categories)[number]

const products = [
  { name: "All-Purpose Cleaner", description: "Versatile daily cleaner for offices, restaurants, homes, and commercial areas.", icon: "🧴", category: "liquid" },
  { name: "Degreaser", description: "Powerful formula for kitchens, garages, warehouses, and heavy-duty surfaces.", icon: "🛢️", category: "liquid" },
  { name: "Glass Cleaner", description: "Professional streak-free cleaning for windows, mirrors, and glass surfaces.", icon: "🪟", category: "liquid" },
  { name: "Floor Cleaner", description: "Effective cleaning solutions for tile, vinyl, commercial floors, and high-traffic zones.", icon: "🧽", category: "liquid" },
  { name: "Hand Soap", description: "Bulk hand soap options for bathrooms, offices, restaurants, and public spaces.", icon: "🫧", category: "sanitary" },
  { name: "Disinfectants", description: "Commercial cleaning support for high-touch areas and professional environments.", icon: "🦠", category: "sanitary" },
  { name: "Paper Products", description: "Paper towels, toilet paper, dispensers, and washroom refill supplies.", icon: "🧻", category: "janitorial" },
  { name: "Janitorial Supplies", description: "Mops, gloves, garbage bags, brushes, dispensers, and everyday cleaning tools.", icon: "🧹", category: "janitorial" },
]

export function Products() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")

  const filteredProducts = products.filter(
    (product) => activeFilter === "all" || product.category === activeFilter
  )

  return (
    <section className="py-20" id="products">
      <div className="w-[min(1180px,92%)] mx-auto">
        <div className="max-w-[720px] mx-auto mb-12 text-center animate-fade-up">
          <span className="text-accent font-black uppercase text-[13px] tracking-wider">Products</span>
          <h2 className="text-[clamp(32px,4vw,48px)] text-primary tracking-[-1.5px] mt-2.5 mb-3.5 text-balance">
            Cleaning supplies for commercial and residential needs
          </h2>
          <p className="text-muted-foreground text-[17px]">
            Choose from everyday essentials, professional-grade liquids, paper products, and janitorial supplies.
          </p>
        </div>

        <div className="flex justify-center gap-3 flex-wrap mb-8 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className="rounded-full capitalize"
              onClick={() => setActiveFilter(category)}
            >
              {category === "all" ? "All" : category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.name}
              className="min-h-[360px] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="h-[150px] rounded-2xl bg-gradient-to-br from-secondary to-background border border-border grid place-items-center text-5xl mb-4">
                  {product.icon}
                </div>
                <h3 className="text-primary font-bold text-xl mb-2.5">{product.name}</h3>
                <p className="text-muted-foreground text-[15px] mb-4">{product.description}</p>
                <a href="#contact" className="text-accent font-black cursor-pointer hover:underline">
                  Request pricing →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
