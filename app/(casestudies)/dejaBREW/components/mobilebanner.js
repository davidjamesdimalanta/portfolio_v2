import React from "react";
import Image from "next/image";

export default function MobileBanner() {
    return(
        <div className="w-screen h-[100svh] flex justify-center items-start">
            <Image 
                width={300}
                height={900}
                src={'/mockups/c915d2b6-350c-4ca5-86e0-bc7a87e783f8.png'}
                alt={"Mobile app mockup for small screens"}
                className="rounded-md border border-medium-light"
            />
        </div>
    )
}