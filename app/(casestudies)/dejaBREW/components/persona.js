import react from "react";
import Image from "next/image";

export default function Persona() {
    return(
        <div className="w-full h-max flex flex-col items-center gap-6">
            <h2 className="w-full text-4xl">
                Meet Lily Latte
            </h2>
            <span className="w-full text-xl ">
                Based on our affinity diagrams, we created a <span className="font-medium">user persona</span> in order to create <span className="font-medium">reliable</span> and <span className="font-medium">realistic representations</span> of our users.
            </span>
            <Image 
                src={'/dejaBrew artefacts/Persona.jpg'}
                width={1000}
                height={400}
                alt={'User persona Lily Latte'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out"
            />
            <h2 className="pt-4 w-full text-4xl">
                Lily&apos;s Empathy Map
            </h2>
            <span className="text-xl ">
                To better understand Lily&apos;s needs, we delve into our <span className="font-medium">empathy map</span>, which provides deeper insights into what she <span className="font-medium">says, thinks, feels, and does</span> during her cafe experiences.
            </span>
            <Image 
                src={'/dejaBrew artefacts/empathyMap.jpg'}
                width={1000}
                height={400}
                alt={'empathy map'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out"
            />
        </div>
    )
}