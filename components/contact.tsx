"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! Your request has been received.")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-[#0b4f48] text-white" id="contact">
      <div className="w-[min(1180px,92%)] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="animate-fade-up">
          <h2 className="text-[clamp(34px,4vw,52px)] leading-[1.05] mb-4 text-balance">
            Request wholesale pricing or a custom quote.
          </h2>
          <p className="text-white/75 mb-5 leading-relaxed">
            Tell us what products you need and our team will contact you with options for your business or home.
          </p>
          <div className="flex flex-col gap-3.5 mt-6">
            <div className="bg-white/10 border border-white/15 p-4 rounded-2xl">
              <strong>Location</strong>
              <br />
              <span className="text-white/75">Montreal, Quebec, Canada</span>
            </div>
            <div className="bg-white/10 border border-white/15 p-4 rounded-2xl">
              <strong>Email</strong>
              <br />
              <span className="text-white/75">info@dhgcleaning.ca</span>
            </div>
            <div className="bg-white/10 border border-white/15 p-4 rounded-2xl">
              <strong>Phone</strong>
              <br />
              <span className="text-white/75">+1 (514) 000-0000</span>
            </div>
          </div>
        </div>

        <form
          className="bg-background text-foreground rounded-[28px] p-7 shadow-xl flex flex-col gap-4 animate-fade-up"
          onSubmit={handleSubmit}
        >
          <Input placeholder="Name" required className="rounded-xl py-6" />
          <Input type="email" placeholder="Email" required className="rounded-xl py-6" />
          <Input type="tel" placeholder="Phone" className="rounded-xl py-6" />
          <Input placeholder="Business Name" className="rounded-xl py-6" />
          <Select>
            <SelectTrigger className="rounded-xl py-6">
              <SelectValue placeholder="What type of customer are you?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cleaning-company">Cleaning Company</SelectItem>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="airbnb">Airbnb Host</SelectItem>
              <SelectItem value="property-manager">Property Manager</SelectItem>
              <SelectItem value="residential">Residential Client</SelectItem>
            </SelectContent>
          </Select>
          <Textarea rows={5} placeholder="Message / Products needed" className="rounded-xl" />
          <Button type="submit" size="lg" className="rounded-full">
            Send Request
          </Button>
        </form>
      </div>
    </section>
  )
}
