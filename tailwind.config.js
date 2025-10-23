/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a0a0f', // Deep cosmic black
        'accent': '#00ffff', // Neon cyan
        'secondary': '#8b5cf6', // Electric purple
        'glow': '#ff006e', // Neon pink for accents
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 1s ease-out',
        'glow-pulse': 'glow-pulse 2s infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}