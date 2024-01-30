'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function ScenarioMapping() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return(
        <div className='w-[75svw] min-h-screen flex flex-col items-center pt-6 lg:pt-12 gap-8'>
              <h2 className='text-3xl md:text-4xl w-full'>
                Starting with an <span className='font-medium'>as-is scenario</span> based on the empathy map, we charted Lily&apos;s current process for locating her ideal café, capturing her associated actions, thoughts, and emotions.
              </h2>
              <Image 
                src={'/dejaBrew artefacts/asIs.jpg'}
                width={1000}
                height={400}
                alt={'as-is scenario'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
              />
              <h2 className='text-3xl md:text-4xl w-full'>
                Then, using a <span className='font-medium'>to-be scenario</span>, we envisioned an improved scenario for Lily, outlining how our designed solution could transform her café-finding experience.
              </h2>
              <Image 
                src={'/dejaBrew artefacts/toBe.jpg'}
                width={1000}
                height={400}
                alt={'to-bw scenario'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
              />
            </div>
    )
}