"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}))
        console.error('contact API error', payload)
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Elevate Your Offerings?</h2>
          <p className="text-slate-300 text-balance">
            Contact us for our latest offer list, to request samples, or to start a conversation about your sourcing
            needs.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Get in Touch */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-2 rounded-full shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:info@taiwahcoffee.com"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    info@taiwahcoffee.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-2 rounded-full shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-slate-300">Available upon request</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-2 rounded-full shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-slate-300">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Lead Times & Minimums Box */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="font-bold mb-4">Lead Times & Minimums</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Sample lead time: 7-14 days</li>
                <li>Minimum order: 5 bags</li>
                <li>Specializing in lots of 5-60 bags</li>
                <li>Custom sourcing available for larger orders</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'success' && (
                <div className="p-3 rounded-md bg-green-100 text-green-800">Thanks — your message was sent. We'll be in touch shortly.</div>
              )}
              {status === 'error' && (
                <div className="p-3 rounded-md bg-red-100 text-red-800">Sorry — something went wrong. Please try again later.</div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Your roastery or company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-orange-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your roasting business and what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 text-base"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
