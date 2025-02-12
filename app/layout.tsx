import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Fira_Code as Cascadia_Code } from "next/font/google"
import "./globals.css"
import type React from "react"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })
const cascadiaCode = Cascadia_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fredrick Mwangi",
  description: "An interactive terminal-style resume",
  icons: {
    icon: '/favicon.png'  // This will look for the image in the public directory
  },
  openGraph: {
    title: "Fredrick Mwangi",
    description: "An interactive terminal-style resume",
    type: "website",
    images: [{
      url: "/preview.png",
      width: 1200,
      height: 630,
      alt: "Terminal style resume interface showing Fredrick Mwangi's interactive resume"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fredrick Mwangi",
    description: "An interactive terminal-style resume",
    images: ["/preview.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-black font-mono antialiased", cascadiaCode.className)}>{children}</body>
    </html>
  )
}

