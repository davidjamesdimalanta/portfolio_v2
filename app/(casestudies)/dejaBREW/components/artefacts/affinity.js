'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Affinity() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return(
        <Image 
                src={'/dejaBrew artefacts/dejabrew affinity diagram.jpg'}
                width={1000}
                height={400}
                alt={'Affinity Diagram'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
                />
    )
}