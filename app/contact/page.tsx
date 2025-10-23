import ContactForm from '../../components/ContactForm'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-secondary/20 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-glow/10 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-10 text-white drop-shadow-lg">Contact Us</h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to revolutionize your business? Let's connect and build the future together.
        </p>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">OR</p>
            <Link
              href="https://calendly.com/sentienyx"
              className="inline-block bg-gradient-to-r from-secondary to-glow text-white px-8 py-4 rounded-full font-bold shadow-lg hover-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Meeting with Calendly
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}