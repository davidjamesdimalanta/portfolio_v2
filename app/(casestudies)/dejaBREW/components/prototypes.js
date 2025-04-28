import Image from "next/image";

export default function Prototypes() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-medium-light p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">
                    Curating recommendations according to one&apos;s preferences
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

            <div className="border border-medium-light p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">
                    Finding relevant information about a café in one place
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

            <div className="border border-medium-light p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">
                    Reviewing/discussing local cafés, privately or publicly
                </h3>
                <Image 
                    src="/mockups/FeaturePath3.gif"
                    width={250}
                    height={500}
                    alt="Prototype showing cafe review and discussion functionality"
                    className="hidden md:inline-block mx-auto"
                    sizes="(max-width: 768px) 100vw, 250px"
                    loading="lazy"
                />
                <Image 
                    src="/mockups/mockup5.png"
                    width={250}
                    height={500}
                    alt="Static mockup of the review interface"
                    className="block md:hidden mx-auto"
                    sizes="(max-width: 768px) 100vw, 250px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
            </div>
        </div>
    );
}