import Image from "next/image";

export default function KeyFindings() {
    return (
        <main id='key-findings'>
            <div className="w-full h-full flex flex-col md:grid md:grid-cols-4 md:grid-rows-4 gap-2">
                <div className="w-full h-full md:col-span-2 md:row-span-2 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center">
                    <h1 className="text-2xl md:text-3xl">
                        Ambience is Key
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center gap-4 ">
                        <Image 
                            src={'/bro assets/Coffee shop-bro.png'}
                            width={200}
                            height={200}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            Natural light, cleanliness, and aesthetics are crucial for a relaxing and productive café environment.
                        </span>
                    </div>
                </div>
                <div className="w-full h-full md:col-span-2 md:row-span-2 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center">
                    <h1 className="text-2xl md:text-3xl">
                        Mixed Views on Reviews
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center gap-4 ">
                        <Image 
                            src={'/bro assets/Online games addiction-bro.png'}
                            width={200}
                            height={200}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            While some patrons rely on online reviews for café selection, others prefer personal discovery due to negative experiences with these platforms.
                        </span>
                    </div>
                </div>
                <div className="w-full h-full md:col-span-2 md:row-span-2 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center">
                    <h1 className="text-2xl md:text-3xl">
                        Holistic Consumer Preferences
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center gap-4">
                        <Image 
                            src={'/bro assets/coffee bean-bro.png'}
                            width={200}
                            height={200}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            Café designers should balance tangible offerings (food, drink) with intangible aspects (ambiance, convenience).
                        </span>
                    </div>
                </div>
                    <div className="w-full h-full md:col-span-2 md:row-span-2 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center">
                    <h1 className="text-2xl md:text-3xl">
                        Wi-Fi Expectations
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center gap-4 ">
                        <Image 
                            src={'/bro assets/No connection-bro.png'}
                            width={200}
                            height={200}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            Essential for activities needing connectivity; poor Wi-Fi negatively impacts a café experience.
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
