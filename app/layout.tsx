import type { Metadata } from 'next'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}