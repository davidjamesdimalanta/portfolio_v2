import React from "react";
import Image from "next/image";

export default function Banner() {
    return(
        <div className="w-auto h-screen flex flex-col md:flex-row justify-center items-start gap-4">
            <div className="w-max h-[120svh] flex flex-col justify-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                <Image
                    src={'/mockups/mockup3.png'}
                    width={251}
                    height={800}
                    alt={"desc"}
                />
                
            </div>
            <div className="w-max h-[120svh] flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-easing="ease-in-out">
                <Image
                    src={'/mockups/mockup2.png'}
                    width={250}
                    height={800}
                    alt={"desc"}
                />
            </div>
            <div className="w-max h-[120svh] flex flex-col justify-start pt-24" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in-out">
                <Image
                    src={'/mockups/c915d2b6-350c-4ca5-86e0-bc7a87e783f8.png'}
                    width={251}
                    height={800}
                    alt={"desc"}
                />
            </div>
        </div>
    )
} 