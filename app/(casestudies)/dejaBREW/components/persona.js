import Image from "next/image";

export default function Persona() {
    return(
        <div className="w-full mb-8">
            <h3 className="text-3xl font-bold mb-6">
                Based on our affinity diagrams, we created a <span className="font-medium">user persona</span> in order to create <span className="font-medium">reliable</span> and <span className="font-medium">realistic representations</span> of our users.
            </h3>
            <div className="mb-8">
                <Image 
                    src={'/dejaBrew artefacts/Persona.jpg'}
                    width={1000}
                    height={400}
                    alt={'User persona Lily Latte'}
                    className="rounded-lg border border-medium-light hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            <h3 className="text-3xl font-bold mb-6">
                To better understand Lily&apos;s needs, we delve into our <span className="font-medium">empathy map</span>, which provides deeper insights into what she <span className="font-medium">says, thinks, feels, and does</span> during her cafe experiences.
            </h3>
            <div>
                <Image 
                    src={'/dejaBrew artefacts/empathyMap.jpg'}
                    width={1000}
                    height={400}
                    alt={'Empathy map showing user thoughts, feelings, words and actions'}
                    className="rounded-lg border border-medium-light hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    );
}