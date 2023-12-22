'use client'
import {useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Ideation() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return(
        <div id="ideas" className="w-full h-max grid grid-flow-col md:grid-flow-row grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">
            <div className="p-4 text-center w-auto flex flex-col items-center text-lg rounded-md shadow-sm border-[1px] bg-white border-gray-200" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-anchor="#ideas">
                <h1 className="text-2xl md:text-3xl">
                    Hollistic Recommendations
                </h1>
                <Image 
                    src={'/cuate assets/personal-cuate.png'}
                    width={300}
                    height={300}
                    alt={'freepik cuate resource'}
                />
                <span className="text-lg">
                    Curating user recommendations according to individual preferences.
                </span>
            </div>
            <div className="p-4 text-center w-auto flex flex-col items-center text-lg rounded-md shadow-sm border-[1px] bg-white border-gray-200 md:gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="100" data-aos-anchor="#ideas">
                <h1 className="text-2xl md:text-3xl">
                    Social/Private Café Log
                </h1>
                <Image 
                    src={'/cuate assets/reviews-cuate.png'}
                    width={300}
                    height={300}
                    alt={'freepik cuate resource'}
                />
                <span className="text-lg">
                    A way for Lily to review and discuss cafés.
                </span>
            </div>
            <div className="p-4 text-center w-auto flex flex-col items-center text-lg rounded-md shadow-sm border-[1px] bg-white border-gray-200 md:gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
                <h1 className="text-2xl md:text-3xl">
                    Café Profile Page
                </h1>
                <Image 
                    src={'/cuate assets/profile-cuate.png'}
                    width={300}
                    height={300}
                    alt={'freepik cuate resource'}
                />
                <span className="text-lg">
                    Having all the information about individual cafés in one place.
                </span>
            </div>
        </div>
    )
}