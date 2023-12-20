import 'app/globals.css'
import Link from 'next/link'

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