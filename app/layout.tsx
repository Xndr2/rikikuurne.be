import type { Metadata } from 'next'
import './globals.css'
import AppBgImg from './Components/appBgImage'
import Footer from './Components/footer'
import { Analytics } from "@vercel/analytics/react"

import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={montserrat.className}>
      <div className="max-w-screen-xl mx-auto px-4 min-h-screen flex flex-col">
        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        <Analytics/>
      </div>
      </body>
    </html>
  )
}
