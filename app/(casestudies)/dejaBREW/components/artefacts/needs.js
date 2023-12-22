'use client'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function LilysNeeds() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return(
        <ul className='w-[90%] text-xl md:text-3xl [&>*]:mb-2 [&>*]:p-4 [&>*]:rounded-md [&>*]:shadow-sm [&>*]:border-[1px] [&>*]:bg-white [&>*]:border-gray-200]'>
            <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">Lily needs <span className='font-medium'>a way to find good quality food and coffee</span> so that she can enjoy her visits to cafés.</li>
            <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="300">Lily requires access to <span className='font-medium'>updated information</span> about cafe <span className='font-medium'>hours</span>, <span className='font-medium'>menu changes</span>, and <span className='font-medium'>seating availability</span> to optimize her cafe visits.</li>
            <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="400">Lily needs a way to find <span className='font-medium'>reliable reviews</span> so that she can make <span className='font-medium'>informed decisions</span> before visiting cafés.</li>
            <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="500">Lily needs <span className='font-medium'>assurance that cafés provide necessary amenities</span> like <span className='font-medium'>Wi-Fi</span> and <span className='font-medium'>power outlets</span> for effective study sessions.</li>
            <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="600">Lily needs a <span className='font-medium'>quick and easy way to understand</span> a cafe&apos;s <span className='font-medium'>ambiance</span>, <span className='font-medium'>menu variety</span>, and <span className='font-medium'>customer service quality</span> to anticipate the kind of experience she&apos;ll have.</li>
        </ul>
    )
}