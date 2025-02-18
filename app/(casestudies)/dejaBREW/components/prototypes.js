'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Prototypes() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
    }, []);
    
    return(
    <div className="w-full h-max flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 items-center text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
            <h3 className="w-full text-xl font-medium">
                Curating recommendations according to one&apos;s preferences.
            </h3>
                <Image 
                    src="/mockups/FeaturePath1.gif"
                    width={250}
                    height={500}
                    alt={'mid-fi prototype'}
                    loading="eager"
                    className="hidden md:inline-block"
                    unoptimized
                />
                <Image 
                    src="/mockups/mockup3.png"
                    width={250}
                    height={500}
                    alt={'mid-fi prototype'}
                    loading="eager"
                    className="block md:hidden"
                />
        </div>
        <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 items-center text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
            <h3 className="w-full text-xl font-medium">
                Finding all necessary information about a café in one place
            </h3>
            <Image 
                src="/mockups/FeaturePath2.5.gif"
                width={250}
                height={500}
                alt={'mid-fi prototype'}
                loading="eager"
                className="hidden md:inline-block"
                unoptimized
            />
            <Image 
                src="/mockups/mockup4.png"
                width={250}
                height={500}
                alt={'mid-fi prototype'}
                loading="eager"
                className="block md:hidden"
            />
        </div>
        <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 items-center text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
            <h3 className="w-full text-xl font-medium">
                Reviewing/discussing local cafés, privately or publicly.
            </h3>
            <Image 
                src="/mockups/FeaturePath3.gif"
                width={250}
                height={500}
                alt={'mid-fi prototype'}
                loading="eager"
                className="hidden md:inline-block"
                unoptimized
            />
            <Image 
                src="/mockups/mockup5.png"
                width={250}
                height={500}
                alt={'mid-fi prototype'}
                loading="eager"
                className="block md:hidden"
            />
        </div>
    </div>
    )
}