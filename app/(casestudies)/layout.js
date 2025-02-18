import '../globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'DejaBrew Case Study',
  description: 'A Design Case Study on Mobile Review Platforms and Café Finding.',
  referrer: 'origin-when-cross-origin',
  keywords: ['UI Research', 'Usability Testint', 'Prototyping'],
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

export default function CaseStudyLayout({children}) {
    return (
      <section id='dejabrew' className='pt-16 md:pt-20 min-h-screen h-max'>
        <Link href={"/"} id="underline" className="absolute text-lg h-max w-max top-6 left-6 inline">
            <span>Return Home</span>
        </Link>
        {children}
      </section>
    )
  }