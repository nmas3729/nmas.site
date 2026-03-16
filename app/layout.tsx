import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingCTA from "@/components/ui/FloatingCTA"
import "./globals.css"

/* ── Fonts ────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

/* ── Global Metadata ─────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://nmas.co.za"),
  title: {
    default: "NMAS Innovations | Mining IT & OT Specialists – Cape to Cairo",
    template: "%s | NMAS Innovations",
  },
  description:
    "NMAS Innovations is South Africa's premier Junior Mining IT & OT specialist. We provide cloud infrastructure, multi-network failover, SCADA cyber security, and 24/7 remote monitoring – from Cape to Cairo.",
  keywords: [
    "Mining IT South Africa",
    "OT security Africa",
    "SCADA cyber security",
    "connectivity failover mining",
    "remote monitoring Africa",
    "junior mining IT",
    "cloud infrastructure mine",
    "Cape to Cairo IT",
    "NMAS Innovations",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://nmas.co.za",
    siteName: "NMAS Innovations",
    title: "NMAS Innovations | Mining IT & OT Specialists",
    description:
      "First IT company in Africa with full multi-language industrial support. Mining-grade reliability from Cape to Cairo.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NMAS Innovations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMAS Innovations | Mining IT & OT Specialists",
    description: "Mining-grade IT & OT security across Africa.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

/* ── JSON-LD Structured Data ─────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nmas.co.za/#organization",
      name: "NMAS Innovations",
      url: "https://nmas.co.za",
      logo: "https://nmas.co.za/logo.svg",
      foundingDate: "2015",
      founder: { "@type": "Person", name: "Mzoxolo Beqezi" },
      description:
        "Junior Mining IT & OT Specialists. First IT company in Africa with full multi-language industrial support.",
      taxID: "2023/727067/07",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27-67-487-7278",
        email: "info@nmas.co.za",
        contactType: "customer service",
        areaServed: "ZA",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/nmasinnovations",
        "https://www.linkedin.com/company/nmas-innovations",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nmas.co.za/#localbusiness",
      name: "NMAS Innovations",
      url: "https://nmas.co.za",
      telephone: "+27-67-487-7278",
      email: "info@nmas.co.za",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ZA",
        addressRegion: "South Africa",
      },
      geo: { "@type": "GeoCoordinates", latitude: -29.0, longitude: 25.0 },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "Person",
      "@id": "https://nmas.co.za/#person",
      "name": "Mzoxolo Beqezi",
      "jobTitle": "Founder & CEO",
      "worksFor": { "@id": "https://nmas.co.za/#organization" },
      "image": "https://nmas.co.za/mzoxolo.png",
      "sameAs": ["https://www.linkedin.com/in/mzoxolo-beqezi"]
    },
    {
      "@type": "Service",
      "name": "Mining IT & OT Solutions",
      "provider": { "@id": "https://nmas.co.za/#organization" },
      "description": "Enterprise cloud infrastructure, SCADA protection, and connectivity failover for junior mining operations.",
      "areaServed": "Africa"
    },
    {
      "@type": "Service",
      "name": "Business IT Support",
      "provider": { "@id": "https://nmas.co.za/#organization" },
      "description": "24/7 expert troubleshooting, maintenance, and cybersecurity for SA businesses."
    },
    {
      "@type": "Service",
      "name": "NMAS WebCraft",
      "provider": { "@id": "https://nmas.co.za/#organization" },
      "description": "Modern web design, rapid hosting, and digital innovation for South African enterprises."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nmas.co.za" },
        { "@type": "ListItem", "position": 2, "name": "Mining", "item": "https://nmas.co.za/mining" },
        { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://nmas.co.za/services" },
        { "@type": "ListItem", "position": 4, "name": "WebCraft", "item": "https://nmas.co.za/webcraft" }
      ]
    }
  ],
}

/* ── Root Layout ─────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-[#00CCFF] selection:text-[#0A1A2F]`}>
        {/* Accessibility skip link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <div id="top-anchor" aria-hidden="true" />

        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        <Footer />
        
        <FloatingCTA />

        <Analytics />
        <Script
          src="https://www.google.com/recaptcha/api.js?badge=inline"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
