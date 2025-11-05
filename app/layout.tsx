import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// Production URL - update when domain is finalized
export const metadata: Metadata = {
  metadataBase: new URL("https://tairwahcoffee.com"),
  title: {
    default: "Tairwah Coffee - Premium Kenyan Coffee Exporters",
    template: "%s | Tairwah Coffee",
  },
  description:
    "Discover exceptional Kenyan coffee with Tairwah Coffee. We source premium microlots directly from Kenya's finest estates and cooperatives, ensuring traceability, quality, and ethical partnerships.",
  keywords: [
    "Kenyan coffee",
    "coffee exporter",
    "premium coffee",
    "microlot coffee",
    "direct trade coffee",
    "sustainable coffee",
    "specialty coffee",
    "Kenya coffee estates",
    "Kenyan coffee cooperatives",
    "coffee sourcing",
    "coffee trade",
  ],
  authors: [{ name: "Tairwah Coffee", url: "https://tairwahcoffee.com" }],
  creator: "Tairwah Coffee",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    other: [{ rel: "shortcut icon", url: "/favicon.png" }],
  },
  alternates: {
    canonical: "https://tairwahcoffee.com",
  },
  openGraph: {
    title: "Tairwah Coffee - Premium Kenyan Coffee Exporters",
    description:
      "Sourcing exceptional microlots from Kenya's finest estates. Direct trade relationships, complete traceability, and curated quality for discerning roasters worldwide.",
    url: "https://mlsince96.com",
    siteName: "Tairwah Coffee",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tairwah Coffee - Premium Kenyan Coffee Exporters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tairwah Coffee - Premium Kenyan Coffee",
    description:
      "Sourcing exceptional microlots from Kenya's finest estates. Direct trade relationships, complete traceability, and curated quality for discerning roasters worldwide.",
    images: ["/logo.png"],
    creator: "@tairwahcoffee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tairwah Coffee",
    url: "https://mlsince96.com",
    logo: "https://mlsince96.com/logo.png",
    sameAs: [
      "https://instagram.com/hapworthinternational",
      "https://facebook.com/hapworthinternational",
      "https://x.com/Hapworth_Int?t=F3VAhXhdGLUHZnjm5hyydA&s=09",
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
    <html lang="en">
      <head>
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
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
