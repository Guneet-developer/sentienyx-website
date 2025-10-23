import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sentienyx - AI Consulting & Automation Agency',
  description: 'Premium AI consulting and automation services for enterprises. Chatbots, voice AI, and more.',
  openGraph: {
    title: 'Sentienyx - AI Consulting & Automation Agency',
    description: 'Premium AI consulting and automation services for enterprises.',
    url: 'https://sentienyx.com',
    siteName: 'Sentienyx',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentienyx - AI Consulting & Automation Agency',
    description: 'Premium AI consulting and automation services for enterprises.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-navy text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
