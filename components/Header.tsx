import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-navy shadow-2xl border-b border-accent/20 sticky top-0 z-50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent hover:scale-110 hover:shadow-glow transition-all duration-500 drop-shadow-lg">
          Sentienyx
        </Link>
        <ul className="flex space-x-8">
          <li><Link href="/" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold">Home</Link></li>
          <li><Link href="/pricing" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold">Pricing</Link></li>
          <li><Link href="/about" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold">About</Link></li>
          <li><Link href="/contact" className="text-white hover:text-accent hover:scale-110 transition-all duration-300 font-semibold">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}