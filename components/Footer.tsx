import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-navy to-black py-12 shadow-2xl border-t border-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 opacity-30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="mb-4 text-gray-300">
          Email: <a href="mailto:sentienyx@gmail.com" className="text-accent hover:text-glow transition-colors duration-300 underline">sentienyx@gmail.com</a>
        </p>
        <p className="mb-4 text-gray-300">
          Phone: <a href="tel:+91-9729069718" className="text-accent hover:text-glow transition-colors duration-300 underline">+91-9729069718</a>
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://www.linkedin.com/in/sentienyx-ai-60641638b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-accent hover:text-glow hover:scale-125 transition-all duration-500" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link href="https://x.com/sentienyx?t=V6DXPYAHKOV7ikj_T3fgqg&s=09" className="text-accent hover:text-glow hover:scale-125 transition-all duration-500" target="_blank" rel="noopener noreferrer">
            X (Twitter)
          </Link>
        </div>
        <p className="text-gray-400">&copy; 2026 Sentienyx. All rights reserved.</p>
      </div>
    </footer>
  )
}