import './globals.css'
import Navbar from './components/navbar'

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
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,300&f[]=clash-grotesk@700,500,400,300&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/favicon3.ico" sizes="any" type="image/x-icon" />
      <link rel="icon" href="/favicon32x32.png" sizes="32x32" type="image/png" />
      <link rel="apple-touch-icon" href="/favicon3.png" sizes="256x256 " />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
