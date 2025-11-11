"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"

interface Offering {
  id: number
  name: string
  origin: string
  cooperative: string
  grade: string
  score: number
  process: string
  tastingNotes: string[]
  description: string
  image: string
}

const offerings: Offering[] = [
  {
    id: 1,
    name: "Embu Natural Microlot",
    origin: "Embu",
    cooperative: "Kagumo Cooperative",
    grade: "AB",
    score: 85,
    process: "Natural",
    tastingNotes: ["Strawberry", "Dark Chocolate", "Caramel"],
    description:
      "A rare natural-processed offering from the Embu region. The Kagumo Cooperative has perfected their natural processing technique, creating fruity, complex cups that showcase the terroir of this unique growing area.",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    name: "Kirinyaga Honey Process",
    origin: "Kirinyaga",
    cooperative: "Karatina Mill",
    grade: "AA",
    score: 88,
    process: "Honey",
    tastingNotes: ["Jasmine", "Stone Fruit", "Honey"],
    description:
      "An experimental honey-processed lot from one of Kenya's most innovative mills. This limited-release coffee offers a perfect balance between the clarity of washed processing and the body of natural processing.",
    image: "/hero1.jpg",
  },
  {
    id: 3,
    name: "Nyeri Peaberry Selection",
    origin: "Nyeri",
    cooperative: "Gatomboya Estate",
    grade: "PB",
    score: 87.5,
    process: "Washed",
    tastingNotes: ["Blackcurrant", "Lime", "Brown Sugar"],
    description:
      "This exceptional peaberry lot comes from Gatomboya Estate, where volcanic soils and cool temperatures create ideal conditions for complex flavor development. The estate has been producing specialty coffee for over 40 years.",
    image: "/hero1.jpg",
  },
  {
    id: 4,
    name: "Thirikwa Factory Microlot",
    origin: "Kirinyaga",
    cooperative: "Thirikwa Farmers Cooperative",
    grade: "AA",
    score: 86.5,
    process: "Washed",
    tastingNotes: ["Blackcurrant", "Citrus Zest", "Molasses"],
    description:
      "Grown on the high-altitude slopes of Mount Kenya by the dedicated members of the Thirikwa cooperative. These farmers practice meticulous hand-picking and sorting, ensuring only the ripest cherries make it to processing.",
    image: "/hero1.jpg",
  },
]

function CurrentOfferingsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === 0 ? offerings.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === offerings.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const currentOffering = offerings[currentIndex]

  return (
    <section id="offerings" className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Current Offerings</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Discover our hand-selected microlots, each with a unique story and exceptional quality
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous offering"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next offering"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Content */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {offerings.map((offering) => (
                  <div key={offering.id} className="w-full flex-shrink-0">
                    <div className="bg-[#FFF9F0] rounded-2xl p-8 md:p-12 mx-4">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={offering.image || "/placeholder.svg"}
                            alt={offering.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-balance">{offering.name}</h3>
                            <p className="text-lg text-[#D97706] font-medium">
                              {offering.origin} | {offering.cooperative}
                            </p>
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm text-muted-foreground mb-1">Grade</p>
                              <p className="text-xl font-bold">{offering.grade}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm text-muted-foreground mb-1">Score</p>
                              <p className="text-xl font-bold">{offering.score}</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <p className="text-sm text-muted-foreground mb-1">Process</p>
                              <p className="text-xl font-bold">{offering.process}</p>
                            </div>
                          </div>

                          {/* Tasting Notes */}
                          <div>
                            <h4 className="font-semibold mb-2">Tasting Notes</h4>
                            <p className="text-lg">{offering.tastingNotes.join(", ")}</p>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">{offering.description}</p>

                          {/* CTA Button */}
                          <a
                            href={`#contact?offering=${encodeURIComponent(offering.name)}&origin=${encodeURIComponent(offering.origin)}&cooperative=${encodeURIComponent(offering.cooperative)}&grade=${offering.grade}&score=${offering.score}&process=${offering.process}`}
                            onClick={(e) => {
                              e.preventDefault()
                              // Set the URL with query params
                              window.history.pushState({}, "", `#contact?offering=${encodeURIComponent(offering.name)}&origin=${encodeURIComponent(offering.origin)}&cooperative=${encodeURIComponent(offering.cooperative)}&grade=${offering.grade}&score=${offering.score}&process=${offering.process}`)
                              // Dispatch custom event to contact form
                              window.dispatchEvent(new CustomEvent('offeringSelected', { detail: { offering: offering.name, origin: offering.origin, cooperative: offering.cooperative, grade: offering.grade, score: offering.score, process: offering.process } }))
                              // Scroll to contact section
                              const contactSection = document.getElementById('contact')
                              if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                          >
                            <Button size="lg" className="w-full bg-[#D97706] hover:bg-[#B45309] text-white">
                              <Download className="w-5 h-5 mr-2" />
                              Request Offer List
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {offerings.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all disabled:cursor-not-allowed ${
                  index === currentIndex ? "w-8 bg-[#D97706]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const CurrentOfferings = CurrentOfferingsComponent;
