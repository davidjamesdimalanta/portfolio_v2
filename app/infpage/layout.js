import 'app/globals.css'

export const metadata ={
  title: 'BI Courses'
}
export default function CoursesLayout({children}) {
    return (
      <section className='py-16 md:py-20 h-max'>
        {children}
      </section>
    )
  }