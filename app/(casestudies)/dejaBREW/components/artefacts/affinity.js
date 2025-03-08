import Image from "next/image";


export default function Affinity() {
    return(
        <Image 
                src={'/dejaBrew artefacts/dejabrew affinity diagram.jpg'}
                width={1000}
                height={400}
                alt={'Affinity Diagram'}
                className="hover:scale-105 transition ease-in-out"
                />
    )
}