'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Projects from './BI pages/courses';

import { useEffect } from 'react';
export default function BICourses() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

    return(
        <main className='w-screen h-[100svh] flex justify-center items-start'>
                <Projects />
        </main>
    )
}
