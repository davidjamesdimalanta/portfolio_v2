/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#46351D',
        medium: '#646F4B',
        'medium-light': '#839D9A',
        accent: '#1F1FFF',
        'accent-dark': '#CCCCFF',
        light: '#BFD2BF',
        snow: '#FFF9FB',
        black: '#252627',
      },
      fontFamily: {
        dmSans: ['var(--font-dm-sans)'],
      },
      keyframes: {
        slideUp: {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-100%)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        'slide': {
          '0%': {
            transform: 'translateX(500px)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
         scalePulse: {
    '0%': { transform: 'scale(0)' },
    '25%': { transform: 'scale(1)' }, // Scale up to 100% of original size
    '50%': { transform: 'scale(1.1)' }, // Pulse to slightly larger than original size
    '75%': { transform: 'scale(1)' }, // Scale back to original size
    '100%': { transform: 'scale(0)' }, // Scale down to 0
  },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-in-out forwards',
        slideDown: 'slideDown 0.5s ease-in-out forwards',
        'slide': 'slide 0.25s ease-in-out',
        scalePulse: 'scalePulse 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
