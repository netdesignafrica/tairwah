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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="tairwah coffee" width={200} height={150} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
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
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  )
}
