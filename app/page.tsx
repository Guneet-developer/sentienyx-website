'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    })

    const elements = document.querySelectorAll('.fade-on-scroll, .slide-up-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    { title: 'AI Consulting & Implementation', desc: 'Expert guidance on integrating AI into your business operations for maximum efficiency.' },
    { title: 'Business Problem Solving', desc: 'Consultation meetings to identify and resolve core business challenges.' },
    { title: 'Automation Solutions', desc: 'Automate workflows, customer support, and services with cutting-edge AI tools.' },
    { title: 'Website Development', desc: 'Build modern, responsive websites tailored to your business needs.' },
    { title: 'Marketing & SEO Optimization', desc: 'Enhance visibility with generative SEO, email campaigns, and WhatsApp marketing.' },
    { title: 'Voice & Chat Bots', desc: 'Add intelligent AI bots to websites for seamless customer interactions.' },
    { title: 'Technology Awareness Consulting', desc: 'Keep your business ahead with insights on modern tech trends.' },
    { title: 'Scalable Growth Strategies', desc: 'Help businesses grow and scale with data-driven solutions.' },
    { title: 'Customer Support Automation', desc: 'Streamline support with AI-driven systems for better user experiences.' },
  ]

  const industries = [
    'E-commerce',
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Technology',
  ]

  return (
    <div className="bg-navy text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-secondary/20 to-black py-40 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)] opacity-50"></div>
        <div className="absolute top-10 left-10 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-glow rounded-full animate-bounce"></div>
        <div className="container mx-auto px-4 text-center relative z-10 fade-on-scroll">
          <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-glow bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Elevate Your Business with AI
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300 drop-shadow-lg leading-relaxed">
            Sentienyx: The ultimate business agency for AI consulting, automation, marketing, and growth. Transform your operations with cutting-edge technology and expert strategies.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-secondary text-navy px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Get Started
            </Link>
            <Link
              href="https://calendly.com/sentienyx"
              className="bg-gradient-to-r from-secondary to-glow text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-black via-navy to-secondary/10 py-24 relative fade-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-glow/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Our Comprehensive Business Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-navy/50 to-secondary/20 backdrop-blur-md border border-accent/20 rounded-3xl shadow-xl hover-glow hover:scale-105 transition-all duration-700 group"
              >
                <h3 className="text-2xl font-semibold mb-4 text-accent group-hover:text-glow transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sentienyx Section */}
      <section className="bg-gradient-to-br from-navy via-black to-secondary/20 py-20 relative slide-up-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-glow/10 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Why Choose Sentienyx?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-navy/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Enterprise-Trusted</h3>
              <p className="text-gray-300">Proven track record with leading enterprises worldwide, delivering scalable solutions.</p>
            </div>
            <div className="text-center p-8 bg-navy/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Futuristic Innovation</h3>
              <p className="text-gray-300">Cutting-edge AI technologies for the future of business, staying ahead of the curve.</p>
            </div>
            <div className="text-center p-8 bg-navy/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Premium Quality</h3>
              <p className="text-gray-300">Delivering excellence in every solution we provide, with a focus on value and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gradient-to-br from-black via-navy to-accent/10 py-20 relative fade-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-navy/50 to-secondary/20 border border-accent/20 rounded-2xl text-center shadow-lg hover-glow hover:scale-110 hover:bg-gradient-to-br hover:from-accent/20 hover:to-glow/20 hover:text-white transition-all duration-500 cursor-pointer"
              >
                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}