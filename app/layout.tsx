import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sentienyx - AI Business Solutions',
  description: 'Elevate your business with AI consulting, automation, and growth strategies.',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'AI consulting, business automation, AI solutions, Sentienyx',
  openGraph: {
    title: 'Sentienyx - AI Business Solutions',
    description: 'Transform your business with cutting-edge AI.',
    url: 'https://sentienyx.vercel.app',
    siteName: 'Sentienyx',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy text-white overflow-x-hidden scroll-smooth`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}