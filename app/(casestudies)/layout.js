import '../globals.css'
import Link from 'next/link'

export default function CaseStudyLayout({children}) {
    return (
      <section id='dejabrew' className='pt-16 md:pt-20 min-h-screen h-max'>
        <Link href={"/"} className="absolute top-6 left-6 inline border mb-4 sm:mb-0 px-6 py-3 bg-none border-medium-light hover:bg-dark text-dark hover:text-white hover:border-dark rounded-lg transition-colors duration-300">
            <span>Return Home</span>
        </Link>
        {children}
      </section>
    )
  }