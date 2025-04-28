import '../globals.css'
import Link from 'next/link'
import CaseStudyBreadcrumb from '@/components/CaseStudyBreadcrumb'

export default function CaseStudyLayout({children}) {
    return (
      <section className='min-h-screen h-max'>
        <div className='max-w-6xl mx-auto p-0'>
          <CaseStudyBreadcrumb 
            />
        </div>
        {children}
      </section>
      
    )
  }