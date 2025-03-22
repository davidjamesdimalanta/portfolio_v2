/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'],
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
  			accent: {
  				DEFAULT: '#0000FF',
  				dark: '#CCCCFF'
  			},
  			'accent-dark': '#CCCCFF',
  			light: '#BFD2BF',
  			snow: '#FFF9FB',
  			black: '#252627',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			dmSans: [
  				'var(--font-dm-sans)'
  			]
  		},
  		keyframes: {
  			slideUp: {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(-100%)'
  				}
  			},
  			slideDown: {
  				from: {
  					transform: 'translateY(-100%)'
  				},
  				to: {
  					transform: 'translateY(0)'
  				}
  			},
  			slide: {
  				'0%': {
  					transform: 'translateX(500px)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			scalePulse: {
  				'0%': {
  					transform: 'scale(0)'
  				},
  				'25%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				},
  				'75%': {
  					transform: 'scale(1)'
  				},
  				'100%': {
  					transform: 'scale(0)'
  				}
  			}
  		},
  		animation: {
  			slideUp: 'slideUp 0.5s ease-in-out forwards',
  			slideDown: 'slideDown 0.5s ease-in-out forwards',
  			slide: 'slide 0.25s ease-in-out',
  			scalePulse: 'scalePulse 2s ease-in-out forwards',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
