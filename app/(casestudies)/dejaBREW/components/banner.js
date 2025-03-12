import Image from "next/image";

export default function Banner() {
    return(
        <div className="w-auto h-screen flex flex-col md:flex-row justify-center items-start gap-4">
            <div className="w-max h-[120svh] flex flex-col justify-end">
                <Image
                    src={'/mockups/mockup3.png'}
                    width={251}
                    height={800}
                    alt={"desc"}
                    priority
                />
                
            </div>
            <div className="w-max h-[120svh] flex flex-col justify-center">
                <Image
                    src={'/mockups/mockup2.png'}
                    width={250}
                    height={800}
                    alt={"desc"}
                    priority
                />
            </div>
            <div className="w-max h-[120svh] flex flex-col justify-start pt-24">
                <Image
                    src={'/mockups/c915d2b6-350c-4ca5-86e0-bc7a87e783f8.png'}
                    width={251}
                    height={800}
                    alt={"desc"}
                    priority
                />
            </div>
        </div>
    )
} 