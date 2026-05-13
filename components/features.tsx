import { Card, CardContent } from "@/components/ui/card"
import { Truck, Briefcase, Star, Leaf, Handshake, MapPin } from "lucide-react"

const features = [
  { icon: Truck, title: "Fast Delivery", description: "Local service options for Montreal and surrounding areas." },
  { icon: Briefcase, title: "Wholesale Pricing", description: "Competitive pricing for businesses and repeat buyers." },
  { icon: Star, title: "Professional Quality", description: "Products designed for commercial and everyday cleaning use." },
  { icon: Leaf, title: "Eco-Friendly Options", description: "Ask about safer and more environmentally friendly alternatives." },
  { icon: Handshake, title: "Reliable Support", description: "Clear communication and support for business customers." },
  { icon: MapPin, title: "Local Montreal Business", description: "Serving Montreal and customers across Quebec." },
]

export function Features() {
  return (
    <section className="py-20 bg-secondary" id="why">
      <div className="w-[min(1180px,92%)] mx-auto">
        <div className="max-w-[720px] mx-auto mb-12 text-center animate-fade-up">
          <span className="text-accent font-black uppercase text-[13px] tracking-wider">Why Choose Us</span>
          <h2 className="text-[clamp(32px,4vw,48px)] text-primary tracking-[-1.5px] mt-2.5 mb-3.5 text-balance">
            Professional supply service with a premium experience
          </h2>
          <p className="text-muted-foreground text-[17px]">
            We focus on speed, reliability, quality, and long-term business relationships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-[52px] h-[52px] rounded-2xl bg-primary text-primary-foreground grid place-items-center mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-primary font-bold text-xl mb-2.5">{feature.title}</h3>
                <p className="text-muted-foreground text-[15px]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
