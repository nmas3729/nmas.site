import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "NMAS WebCraft | Custom Web Design & Hosting SA",
  description:
    "Professional web design, fast local hosting, and digital marketing for South African businesses. Part of the NMAS Innovations division.",
  keywords: [
    "NMAS WebCraft",
    "Web design South Africa",
    "Local business hosting",
    "Digital innovation SA",
    "Custom website development",
  ],
  alternates: { canonical: "https://nmas.co.za/webcraft" },
  openGraph: {
    title: "NMAS WebCraft: Modern Web Design & Hosting",
    description: "Launch your business online with high-performance websites from NMAS Innovations.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NMAS WebCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMAS WebCraft",
    description: "Digital innovation and professional web design for South Africa.",
    images: ["/og-image.png"],
  },
}

export default function WebCraftPage() {
  // Redirect to the external subdomain for the actual division site
  redirect("https://webcraft.nmas.co.za")
}
