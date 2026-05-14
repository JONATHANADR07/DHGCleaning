import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <header className="min-h-[86vh] grid items-center py-20 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.18),transparent_34%),linear-gradient(135deg,#fff,#eef9f5)] overflow-hidden">
      <div className="w-[min(1180px,92%)] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex px-3.5 py-2 rounded-full border border-border bg-background text-accent font-extrabold text-sm mb-5 shadow-md">
            Premium Cleaning Supplies • Montreal, Quebec
          </span>
          <h1 className="text-[clamp(42px,6vw,76px)] leading-[0.96] tracking-[-3px] text-primary mb-6 text-balance">
            Professional Cleaning Products in Montreal
          </h1>
          <p className="text-lg text-muted-foreground max-w-[620px] mb-8 leading-relaxed">
            High-quality cleaning supplies for businesses and homes across Quebec. Wholesale and retail solutions for commercial cleaners, restaurants, offices, Airbnb hosts, warehouses, and residential clients.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-7">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:-translate-y-1 transition-transform">
              <Link href="#contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full hover:-translate-y-1 transition-transform">
              <Link href="#products">View Products</Link>
            </Button>
          </div>
          <div className="flex gap-5 flex-wrap text-muted-foreground text-sm font-bold">
            <span>✓ Wholesale Pricing</span>
            <span>✓ Fast Local Service</span>
            <span>✓ Commercial Quality</span>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-[34px] p-8 min-h-[480px] shadow-xl relative overflow-hidden animate-float">
          <div className="absolute right-[-70px] bottom-[-70px] w-[220px] h-[220px] bg-white/10 rounded-full" />
          <div className="bg-white/10 border border-white/15 rounded-3xl p-5 mb-5 relative z-10">
            <h3 className="text-[28px] font-bold mb-2">Reliable Supplies for Every Space</h3>
            <p className="text-white/75">From daily cleaning essentials to commercial-grade products, we help businesses stay stocked and ready.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-background text-primary rounded-2xl p-5">
              <strong className="block text-[28px] font-bold">8+</strong>
              <span className="text-muted-foreground">Product Categories</span>
            </div>
            <div className="bg-background text-primary rounded-2xl p-5">
              <strong className="block text-[28px] font-bold">24h</strong>
              <span className="text-muted-foreground">Quote Response</span>
            </div>
            <div className="bg-background text-primary rounded-2xl p-5">
              <strong className="block text-[28px] font-bold">B2B</strong>
              <span className="text-muted-foreground">Business Support</span>
            </div>
            <div className="bg-background text-primary rounded-2xl p-5">
              <strong className="block text-[28px] font-bold">QC</strong>
              <span className="text-muted-foreground">Quebec Service</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
