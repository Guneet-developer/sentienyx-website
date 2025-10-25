'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-2xl border-b border-accent/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent hover:scale-110 hover:shadow-glow transition-all duration-500 drop-shadow-lg animate-pulse">
          Sentienyx
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold relative group">Home <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span></Link></li>
          <li><Link href="/pricing" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold relative group">Pricing <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span></Link></li>
          <li><Link href="/about" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold relative group">About <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span></Link></li>
          <li><Link href="/contact" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold relative group">Contact <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span></Link></li>
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none hover:scale-110 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="bg-navy/95 backdrop-blur-md border-t border-accent/20 flex flex-col space-y-4 py-4 px-4">
          <li><Link href="/" onClick={toggleMenu} className="block text-white hover:text-accent transition-colors duration-300 font-semibold">Home</Link></li>
          <li><Link href="/pricing" onClick={toggleMenu} className="block text-white hover:text-accent transition-colors duration-300 font-semibold">Pricing</Link></li>
          <li><Link href="/about" onClick={toggleMenu} className="block text-white hover:text-accent transition-colors duration-300 font-semibold">About</Link></li>
          <li><Link href="/contact" onClick={toggleMenu} className="block text-white hover:text-accent transition-colors duration-300 font-semibold">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}