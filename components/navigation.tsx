"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Coffee, CoffeeIcon, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Anchor links for single-page navigation
  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#offerings", label: "Our Coffees" },
    { href: "#about", label: "Our Story" },
    { href: "#process", label: "Our Process" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link href="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="tairwah coffee" 
              width={100}
              height={40}
              className="sm:w-12 sm:h-12 md:w-auto md:h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1 sm:p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-2 sm:py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-2 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm sm:text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      </nav>
      {/* spacer keeps page content below the fixed navbar */}
      <div className="h-14 sm:h-16 md:h-20" aria-hidden="true" />
    </>
  )
}
