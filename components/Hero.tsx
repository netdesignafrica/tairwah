'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg'
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
  <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`Hero background ${currentImageIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-[0.6]" // Darken image for better text contrast
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black opacity-30" /> {/* Harvard-inspired overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance text-white mb-6 md:mb-8">
              The Art of Kenyan <span className="text-orange-400">Coffee</span>
            </h1>
            <p className="text-lg md:text-xl text-white text-pretty mb-8 md:mb-10 leading-relaxed">
              Tairwah Coffee meticulously sources and exports the finest traceable microlots from Kenya's premier high-altitude regions, connecting discerning roasters to the heart of the savanna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base hover:bg-primary">
                <Link href="/services">
                  Explore Our Coffees <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white bg-transparent">
                <Link href="/contact">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:bg-white/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:bg-white/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
