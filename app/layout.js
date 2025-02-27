import './globals.css'
import Navbar from './components/navbar'
import { DM_Sans } from 'next/font/google'
import ThemeProviderWrapper from './components/theme-provider'

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'David James Dimalanta',
    template: '%s | David James'
  },
  description: 'Hi! My name is David, I am an emerging Full-Stack Developer with a passion for crafting seamless online experiences.',
  referrer: 'origin-when-cross-origin',
  keywords: ['Web Developer', 'Design', 'full-stack'],
  authors: [{ name: 'David James' }, { name: 'David James Dimalanta', url: 'https://www.linkedin.com/in/david-james-dimalanta/' }],
  creator: 'David James Dimalanta',
  publisher: 'David James Dimalanta',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
