import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Handshake, Heart, MapPin, Shield, Target} from "lucide-react"
import Hero from "@/components/Hero"
import { CurrentOfferings } from "@/components/current-offerings"
import ProcessTimeline from "@/components/process-timeline"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapworth International",
    url: "https://hapworthinternational.com",
    logo: "https://hapworthinternational.com/logo.jpg",
    sameAs: [
      "https://instagram.com/hapworthinternational",
      "https://facebook.com/hapworthinternational",
      "https://x.com/hapworthinternational",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hapworthinternational@gmail.com",
        contactType: "customer support",
        areaServed: "Africa",
      },
    ],
  }
  
  return (
    <div className="min-h-screen">
      {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GD1P3N81MH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GD1P3N81MH');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <Navigation />

      {/* Hero Section */}
      <Hero />

  {/* Stats Section */}
  <section id="stats" className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: MapPin, label: "Uncompromising Traceability", value: "Uncompromising Traceability", subtitle: "Every lot is sourced from a single cooperative, estate, or factory. Know the exact origin of every bean you roast" },
              { icon: Award, label: "Curated Quality", value: "Curated Quality", subtitle: "Each offering is pre-screened and scored by our licensed Q-Grader. We deliver curated quality, so you can focus on crafting the perfect roast" },
              { icon: Handshake, label: "Ethical Partnership", value: "Ethical Partnership", subtitle: "We build direct, transparent relationships with farmers, fostering quality and sustainability from the ground up" },
            ].map((stat, index) => (
              <div key={index} className="text-center transition-transform duration-300 ease-in-out hover:scale-110">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 text-secondary mb-3 md:mb-4">
                  <stat.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <CurrentOfferings />

  {/* Services Preview */}
  <section id="about" className="py-16 md:py-24 bg-[#FFF9F0]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-balance">
              More Than an Exporter, A Bridge to Origin
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src="/hero2.jpg"
                  alt="exporter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                    {/* The Beginning */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">The Beginning</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Taiwah Coffee was founded on a simple belief: that the world's finest roasters deserve direct access
                          to Kenya's most exceptional coffees, with a story they can trust.
                        </p>
                      </div>
                    </div>

                    {/* The Mission */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">The Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Our mission is to be that bridge. We are not just traders; we are curators and partners. We work
                          directly with cooperatives and estates in regions like Kirinyaga, Nyeri, and Embu to identify lots
                          that tell a unique story of their terroir.
                        </p>
                      </div>
                    </div>

                    {/* The Promise */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">The Promise</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We handle the complexities of export logistics, licensing, and quality control, providing you with a
                          seamless supply of fully traceable, specialty-grade Kenyan coffee.
                        </p>
                      </div>
                    </div>
              </div>
           
          </div>

          <div className="mt-10 md:mt-12 bg-white rounded-2xl p-6 md:p-8 ">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-bold">Our Team</h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center gap-4 max-w-sm">
                <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center">
                  <h1 className="text-3xl text-white font-bold">T</h1>
                </div>
                <h2 className="text-xl font-bold">Founder</h2>
                <p>With a deep passion for Kenyan coffee and a commitment to ethical trade, our founder leads Tairwah's sourcing and relationship-building, ensuring every partnership is built on transparency and quality.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 max-w-sm">
                <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center">
                  <h1 className="text-3xl text-white font-bold">Q</h1>
                </div>
                <h2 className="text-xl font-bold">Licensed Q-Grader</h2>
                <p>Our quality is guaranteed by our licensed Q-Grader who meticulously evaluates every single lot we offer, ensuring each cup meets the highest standards of specialty coffee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Timeline section */}
      <ProcessTimeline />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
