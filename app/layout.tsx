import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import '../build/css/variables.css'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Eco Coffee Pods – Product Landing Page Concept',
  description: 'Sustainable coffee subscription product',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
