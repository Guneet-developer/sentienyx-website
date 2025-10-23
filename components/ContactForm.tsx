'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/mblzvnqq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Try again.')
      }
    } catch (error) {
      setStatus('Error sending message.')
    }
  }

  return (
    <div className="bg-gradient-to-br from-navy via-secondary/20 to-black p-8 rounded-2xl shadow-2xl border border-accent/20 hover:shadow-glow transition-all duration-500">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20 resize-none"
            rows={5}
            placeholder="Tell us about your project..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-accent to-secondary text-navy font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Send Message
        </button>
        {status && <p className="text-center text-accent mt-4">{status}</p>}
      </form>
    </div>
  )
}