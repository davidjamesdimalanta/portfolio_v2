import Image from "next/image";


export default function Prototypes() {
    return(
    <div className="w-full h-max flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 items-center text-center">
            <h3 className="w-full text-xl font-medium">
                Curating recommendations according to one&apos;s preferences.
            </h3>
                <Image 
                    src="/mockups/FeaturePath1.gif"
                    width={250}
                    height={500}
                    alt="Prototype demonstrating preference-based cafe recommendations"
                    className="hidden md:inline-block"
                    priority
                    sizes="(max-width: 768px) 100vw, 250px"
                />
                <Image 
                    src="/mockups/mockup3.png"
                    width={250}
                    height={500}
                    alt="Static mockup showing cafe recommendation interface"
                    className="block md:hidden"
                    sizes="(max-width: 768px) 100vw, 250px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
        </div>
        <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 items-center text-center">
            <h3 className="w-full text-xl font-medium">
                Finding all necessary information about a café in one place
            </h3>
            <Image 
                src="/mockups/FeaturePath2.5.gif"
                width={250}
                height={500}
                alt="Prototype showing detailed cafe information view"
                className="hidden md:inline-block"
                sizes="(max-width: 768px) 100vw, 250px"
                loading="lazy"
            />
            <Image 
                src="/mockups/mockup4.png"
                width={250}
                height={500}
                alt="Static mockup of cafe details interface"
                className="block md:hidden"
                sizes="(max-width: 768px) 100vw, 250px"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
        </div>
        <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 items-center text-center">
            <h3 className="w-full text-xl font-medium">
                Reviewing/discussing local cafés, privately or publicly.
            </h3>
            <Image 
                src="/mockups/FeaturePath3.gif"
                width={250}
                height={500}
                alt="Prototype showing cafe review and discussion functionality"
                className="hidden md:inline-block"
                sizes="(max-width: 768px) 100vw, 250px"
                loading="lazy"
            />
            <Image 
                src="/mockups/mockup5.png"
                width={250}
                height={500}
                alt="Static mockup of the review interface"
                className="block md:hidden"
                sizes="(max-width: 768px) 100vw, 250px"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
        </div>
    </div>
    )
}