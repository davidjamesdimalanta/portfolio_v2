'use client'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from "next/image";

export default function PrimarySummary(){
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return(
        <div className='min-h-[20svh] md:min-h-[30svh] flex flex-col md:flex-row justify-center items-center py-4 lg:py-0 gap-2'>
              <div className='w-auto flex flex-col items-center text-lg font-medium rounded-md shadow-sm border-[1px] bg-white border-gray-200'
                   data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                <Image 
                  src={'/amico assets/Interview-rafiki.png'}
                  width={350}
                  height={350}
                  alt={'amico assets'}
                />
                <span>We conducted 10 Interviews</span>
              </div>
              <div className='w-auto flex flex-col items-center text-lg font-medium rounded-md shadow-sm border-[1px] bg-white border-gray-200 '
                   data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
                <Image 
                  src={'/amico assets/Customer Survey-rafiki.png'}
                  width={350}
                  height={350}
                  alt={'amico assets'}
                />
                <span>and received 66 Survey Results</span>
              </div>
        </div>
    )
}