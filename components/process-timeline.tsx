"use client"

import { motion } from "framer-motion"
import { Coffee, Award, Building2, Cog, FileText, CheckCircle2 } from "lucide-react"

const processSteps = [
  {
    title: "Sourcing & Relationships",
    description:
      "We build direct relationships and receive samples directly from trusted cooperatives and estates across Kenya's premier coffee regions.",
    icon: Coffee,
    side: "left" as const,
  },
  {
    title: "Cupping & Selection",
    description:
      "Our licensed Q-Grader cups and scores every sample. We only proceed with lots that meet our strict quality threshold of 84+.",
    icon: Award,
    side: "right" as const,
  },
  {
    title: "Auction & Direct Trade",
    description:
      "We acquire coffee through the Nairobi Coffee Exchange or via approved direct contracts, ensuring total transparency and traceability.",
    icon: Building2,
    side: "left" as const,
  },
  {
    title: "Milling & Quality Control",
    description:
      "We partner with top mills and insist on GrainPro packaging for optimal freshness during transit. Each lot undergoes rigorous quality checks.",
    icon: Cog,
    side: "right" as const,
  },
  {
    title: "Export & Documentation",
    description:
      "We manage all logistics and provide seamless documentation, including Certificates of Origin and Phytosanitary certificates.",
    icon: FileText,
    side: "left" as const,
  },
  {
    title: "Delivered Excellence",
    description:
      "Your coffee arrives ready to roast, with complete traceability and confidence in its quality and ethical sourcing.",
    icon: CheckCircle2,
    side: "right" as const,
  },
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Process</h2>
          <p className="text-orange-600 text-lg">
            From farm to port, we handle every step with meticulous care and transparency
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2 hidden md:block" />

          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isLeft = step.side === "left"

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left side content */}
                    <div className={`flex-1 ${isLeft ? "md:text-right" : "md:order-2"}`}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0"
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-background shadow-md z-10"
                    />

                    {/* Right side spacer */}
                    <div className={`flex-1 hidden md:block ${isLeft ? "md:order-2" : ""}`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
