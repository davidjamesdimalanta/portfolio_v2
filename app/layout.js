import './globals.css'
import Navbar from './components/navbar'

export const metadata = {
  applicationName: 'David\'s Portfolio',
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
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,300&f[]=clash-grotesk@700,500,400,300&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/icon.svg" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
