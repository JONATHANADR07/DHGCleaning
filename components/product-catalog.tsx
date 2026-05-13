"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Info, X } from "lucide-react"

const catalogData = {
  liquids: {
    title: "Liquid Cleaners",
    description: "Professional-grade liquid cleaning solutions",
    products: [
      { id: 1, name: "All-Purpose Cleaner 4L", price: "$12.99", sku: "APC-4L", description: "Versatile cleaner for all surfaces. Ideal for offices, restaurants, and homes.", features: ["Biodegradable", "Pleasant scent", "Concentrated formula"] },
      { id: 2, name: "Heavy-Duty Degreaser 4L", price: "$18.99", sku: "HDG-4L", description: "Industrial strength formula for kitchens and garages.", features: ["Cuts through grease", "Fast acting", "Safe on metal"] },
      { id: 3, name: "Glass & Mirror Cleaner 1L", price: "$6.99", sku: "GMC-1L", description: "Streak-free formula for windows and mirrors.", features: ["Ammonia-free", "Quick dry", "No residue"] },
      { id: 4, name: "Floor Cleaner Concentrate 4L", price: "$15.99", sku: "FCC-4L", description: "For tile, vinyl, and laminate floors.", features: ["High dilution ratio", "Low foam", "Fresh scent"] },
      { id: 5, name: "Bathroom Disinfectant 4L", price: "$14.99", sku: "BD-4L", description: "Kills 99.9% of bacteria and viruses.", features: ["Hospital grade", "Mold killer", "Descaler"] },
      { id: 6, name: "Stainless Steel Polish 1L", price: "$9.99", sku: "SSP-1L", description: "Protects and shines stainless steel surfaces.", features: ["Fingerprint resistant", "No streaks", "Long lasting"] },
    ]
  },
  janitorial: {
    title: "Janitorial Supplies",
    description: "Essential tools for professional cleaning",
    products: [
      { id: 7, name: "Commercial Mop Set", price: "$34.99", sku: "CMS-01", description: "Heavy-duty mop with wringer bucket.", features: ["36L bucket", "Side press wringer", "Commercial grade"] },
      { id: 8, name: "Microfiber Cloth Pack (50)", price: "$29.99", sku: "MFC-50", description: "Premium microfiber cloths for all surfaces.", features: ["Washable 500+ times", "Lint-free", "Color coded"] },
      { id: 9, name: "Garbage Bags 35x50 (100)", price: "$24.99", sku: "GB-100", description: "Industrial strength garbage bags.", features: ["2.0 mil thickness", "Leak proof", "Star sealed"] },
      { id: 10, name: "Nitrile Gloves Box (100)", price: "$12.99", sku: "NG-100", description: "Powder-free disposable gloves.", features: ["Latex-free", "Textured grip", "Medical grade"] },
      { id: 11, name: "Scrub Brush Set (5pc)", price: "$19.99", sku: "SBS-5", description: "Various sizes for different cleaning tasks.", features: ["Ergonomic handles", "Stiff bristles", "Durable"] },
      { id: 12, name: "Spray Bottles (6 pack)", price: "$14.99", sku: "SB-6", description: "Professional trigger spray bottles.", features: ["Adjustable nozzle", "Chemical resistant", "1L capacity"] },
    ]
  },
  sanitary: {
    title: "Sanitary & Paper Products",
    description: "Hygiene essentials for any facility",
    products: [
      { id: 13, name: "Toilet Paper (48 rolls)", price: "$39.99", sku: "TP-48", description: "2-ply commercial toilet paper.", features: ["500 sheets/roll", "Septic safe", "Soft & strong"] },
      { id: 14, name: "Paper Towels (12 rolls)", price: "$29.99", sku: "PT-12", description: "Absorbent paper towels for dispensers.", features: ["800ft/roll", "Quick absorbing", "Low lint"] },
      { id: 15, name: "Hand Soap Refill 4L", price: "$16.99", sku: "HSR-4L", description: "Moisturizing liquid hand soap.", features: ["Antibacterial", "Gentle formula", "Pleasant scent"] },
      { id: 16, name: "Hand Sanitizer Gel 4L", price: "$22.99", sku: "HSG-4L", description: "70% alcohol hand sanitizer.", features: ["Quick dry", "Moisturizing", "No rinse"] },
      { id: 17, name: "Facial Tissues (36 boxes)", price: "$34.99", sku: "FT-36", description: "Soft 2-ply facial tissues.", features: ["100 sheets/box", "Hypoallergenic", "Soft touch"] },
      { id: 18, name: "Soap Dispenser Wall Mount", price: "$24.99", sku: "SDW-01", description: "Commercial soap dispenser.", features: ["1L capacity", "Push lever", "Drip tray"] },
    ]
  },
  specialty: {
    title: "Specialty Products",
    description: "Specialized cleaning solutions",
    products: [
      { id: 19, name: "Carpet Shampoo 4L", price: "$24.99", sku: "CS-4L", description: "Deep cleaning carpet formula.", features: ["Low foam", "Stain remover", "Fresh scent"] },
      { id: 20, name: "Odor Neutralizer 4L", price: "$19.99", sku: "ON-4L", description: "Eliminates tough odors at the source.", features: ["Enzyme based", "Long lasting", "Safe for fabrics"] },
      { id: 21, name: "Rust Remover 1L", price: "$11.99", sku: "RR-1L", description: "Removes rust and mineral deposits.", features: ["Fast acting", "Safe on chrome", "Phosphoric acid free"] },
      { id: 22, name: "Graffiti Remover 1L", price: "$16.99", sku: "GR-1L", description: "Removes paint and markers from surfaces.", features: ["Gel formula", "Low odor", "Multi-surface"] },
      { id: 23, name: "Wood Floor Polish 4L", price: "$21.99", sku: "WFP-4L", description: "Restores shine to hardwood floors.", features: ["Non-slip", "UV protection", "Easy application"] },
      { id: 24, name: "Drain Cleaner 1L", price: "$8.99", sku: "DC-1L", description: "Unclogs drains fast.", features: ["Dissolves hair", "Safe for pipes", "No fumes"] },
    ]
  }
}

type ProductType = {
  id: number
  name: string
  price: string
  sku: string
  description: string
  features: string[]
}

function ProductCard({ product }: { product: ProductType }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card className="group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-accent/30">
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="secondary" className="text-xs">{product.sku}</Badge>
            <span className="text-accent font-bold text-lg">{product.price}</span>
          </div>
          <h4 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{product.name}</h4>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
          <div className="flex gap-2">
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 rounded-full">
                <Info size={16} className="mr-1.5" />
                Details
              </Button>
            </DialogTrigger>
            <Button size="sm" className="flex-1 rounded-full" asChild>
              <a href="#contact">
                <ShoppingCart size={16} className="mr-1.5" />
                Order
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="secondary" className="mb-2">{product.sku}</Badge>
              <DialogTitle className="text-2xl text-primary">{product.name}</DialogTitle>
            </div>
            <span className="text-accent font-bold text-2xl">{product.price}</span>
          </div>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <div className="bg-secondary/50 rounded-xl p-4 mb-4">
            <h5 className="font-bold text-primary mb-2">Features:</h5>
            <ul className="space-y-1.5">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1 rounded-full" asChild>
              <a href="#contact">
                <ShoppingCart size={18} className="mr-2" />
                Request Quote
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="tel:+14382207424">Call Now</a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ProductCatalog() {
  return (
    <section className="py-20 bg-secondary/30" id="catalog">
      <div className="w-[min(1180px,92%)] mx-auto">
        <div className="max-w-[720px] mx-auto mb-12 text-center animate-fade-up">
          <span className="text-accent font-black uppercase text-[13px] tracking-wider">Catalog</span>
          <h2 className="text-[clamp(32px,4vw,48px)] text-primary tracking-[-1.5px] mt-2.5 mb-3.5 text-balance">
            Browse our complete product catalog
          </h2>
          <p className="text-muted-foreground text-[17px]">
            Select a category to view specific products. Click on any item for details and pricing.
          </p>
        </div>

        <Tabs defaultValue="liquids" className="animate-fade-up">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-8 h-auto">
            {Object.entries(catalogData).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2.5 font-bold capitalize border border-border data-[state=active]:border-primary transition-all"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(catalogData).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="bg-background rounded-3xl border border-border p-6 md:p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">Need a product not listed here? Contact us for special orders.</p>
          <Button size="lg" className="rounded-full" asChild>
            <a href="#contact">Request Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
