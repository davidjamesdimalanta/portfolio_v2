import '../globals.css'
import Link from 'next/link'
import CaseStudyBreadcrumb from '@/components/CaseStudyBreadcrumb'

export default function CaseStudyLayout({children}) {
    return (
      <section className='min-h-screen h-max p-0'>
        <CaseStudyBreadcrumb 
        />
        {children}
      </section>
    )
  }