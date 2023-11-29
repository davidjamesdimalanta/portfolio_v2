import 'app/globals.css'

export default function CaseStudyLayout({children}) {
    return (
      <section>
        {
            <nav className='w-screen h-[40vh] flex justify-center items-center'>
                <ul className='flex gap-4'>
                    <li>The Perfect Café</li>
                    <li>Chess Timer</li>
                </ul>
            </nav>
        }
        {children}
      </section>
    )
  }