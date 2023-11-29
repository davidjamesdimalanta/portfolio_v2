'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function CaseStudy() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

    return(
        <main className='w-screen h-screen flex justify-center items-start'>
                First part of case study
        </main>
    )
}
