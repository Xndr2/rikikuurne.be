import type { Metadata } from 'next'
import './globals.css'
import AppBgImg from './Components/appBgImage'
import Footer from './Components/footer'

import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <div className="min-h-screen flex flex-col">
        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <div className='px-4'>
          <Footer />
        </div>
      </div>
      </body>
    </html>
  )
}