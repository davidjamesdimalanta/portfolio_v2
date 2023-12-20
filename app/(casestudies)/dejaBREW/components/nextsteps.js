'use client'
import React from "react";
import Image from "next/image";

export default function NextSteps() {
    return (
        <main id='key-findings'>
            <div className="w-full h-max flex flex-col md:grid md:grid-cols-4 md:grid-rows-4 gap-2">
                <div className="col-span-2 row-span-2 flex flex-col  rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <h1 className="text-2xl md:text-3xl">
                        Review Fact Checker
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center ">
                        <Image 
                            src={'/bro assets/factchecker.png'}
                            width={320}
                            height={320}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            Implementing <span className="font-medium">user trust ratings</span> and <span className="font-medium">upvotes</span> on reviews would provide users <span className="font-medium">accurateand user-driven data</span> when making their decisions.
                        </span>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col  rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <h1 className="text-2xl md:text-3xl">
                        Live Occupancy Data
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center ">
                        <Image 
                            src={'/bro assets/liveoccupancy.png'}
                            width={320}
                            height={320}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                           Implementing <span className="font-medium">live occupancy data</span> would help users scope out the busiest times during a cafe&apos;s operation and to inform them on <span className="font-medium">real-time seating availability</span>.
                        </span>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col  rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <h1 className="text-2xl md:text-3xl">
                        Gamification
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center gap-4 ">
                        <Image 
                            src={'/bro assets/gamification.png'}
                            width={300}
                            height={300}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            Gamifying certain aspects of dejaBREW e.g: through <span className="font-medium">badges</span> or <span className="font-medium">point systems</span>, would allow for more <span className="font-medium">user retention</span> and better community building.
                        </span>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col  rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative text-center" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <h1 className="text-2xl md:text-3xl">
                        Café Owner Features
                    </h1>
                    <div className="w-auto h-full flex flex-col items-center gap-4 ">
                        <Image 
                            src={'/bro assets/userowner.png'}
                            width={300}
                            height={300}
                            alt={'freepik bro asset'}
                        />
                        <span className="w-auto inline text-lg">
                            Integrating features <span className="font-medium">tailored for café owners</span>, such as <span className="font-medium">customer feedback management</span> and <span className="font-medium">menu customization</span> options, would enhance their engagement with the app, and promote its use to another group of users.
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
