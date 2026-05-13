import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Great service for our restaurant. The products are reliable and the ordering process is simple.",
    name: "Restaurant Owner",
    location: "Downtown Montreal",
  },
  {
    quote: "As a cleaning company, we need supplies that are consistent. Their team understands business needs.",
    name: "Cleaning Company Manager",
    location: "Laval / Montreal",
  },
  {
    quote: "Perfect for keeping our Airbnb units stocked with essentials and cleaning products.",
    name: "Airbnb Host",
    location: "Old Montreal",
  },
  {
    quote: "Professional communication, good product selection, and helpful support for our office.",
    name: "Office Administrator",
    location: "Quebec Client",
  },
]

export function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="w-[min(1180px,92%)] mx-auto">
        <div className="max-w-[720px] mx-auto mb-12 text-center animate-fade-up">
          <span className="text-accent font-black uppercase text-[13px] tracking-wider">Testimonials</span>
          <h2 className="text-[clamp(32px,4vw,48px)] text-primary tracking-[-1.5px] mt-2.5 mb-3.5">
            Trusted by local businesses
          </h2>
          <p className="text-muted-foreground text-[17px]">
            Professional clients need consistent products, fair pricing, and reliable communication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <p className="text-muted-foreground text-[15px] mb-4">&quot;{testimonial.quote}&quot;</p>
                <strong className="text-primary block">{testimonial.name}</strong>
                <span className="text-muted-foreground text-sm">{testimonial.location}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
