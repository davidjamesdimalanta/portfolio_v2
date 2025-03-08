
import Image from "next/image";

export default function ProblemSpace() {
    return(
        <main id='problem-space'>
            <div className="pl-4 w-[95svw] h-max flex flex-col md:hidden justify-start items-start overflow-hidden">
                <h1 className="text-3xl">
                    How can we provide <span className='font-medium'>up-to-date</span> and <span className='font-medium'>personalized information</span> to help users find the perfect café?
                </h1>
                <div className="w-full h-full flex-col p-4 items-center">
                    <span className="w-full inline">
                        Finding the <span className="font-medium">perfect café</span> often involves a time-consuming process of navigating through various online reviews and platforms like <span className="font-medium">Google Maps</span> and <span className="font-medium">Yelp</span>. 
                        <br /><br />
                        Users find that these platforms frequently have <span className="font-medium">outdated</span> or <span className="font-medium">incomplete</span> details about menus, locations, and hours, with limited personalized recommendations. This often results in <span className="font-medium">inaccurate assessments</span> of a café&apos;s ambiance, leading to unsatisfactory visits. 
                        <br /><br />
                        Improving these aspects would not only enhance customer experiences but also benefit cafés in attracting new customers.
                    </span>
                    <Image 
                        src={'/amico assets/Coffee shop-amico.png'}
                        width={400}
                        height={400}
                        alt={'coffee amico'}
                    />
                </div>
            </div>
            <div className="hidden md:w-[80svw] md:h-[80svh] md:grid grid-cols-3 grid-rows-6 md:grid-rows-3 gap-4">
                <div className="row-span-4 md:row-span-2 col-span-3 md:col-span-2 flex flex-col bg-white rounded-md shadow-sm border-[1px] border-gray-200 p-4 lg:overflow-hidden overflow-y-scroll relative">
                    <div className="w-full h-full flex flex-col items-start gap-4">
                        <h1 className="text-2xl md:text-3xl">
                            How can we provide <span className='font-medium'>up-to-date</span> and <span className='font-medium'>personalized information</span> to help users find the perfect café?
                        </h1>
                        <div className="w-full h-full flex-col md:flex pl-4">
                            <span className="w-full lg:w-4/6 inline z-10">
                                Finding the <span className="font-medium">perfect café</span> often involves navigating through various online review platforms like <span className="font-medium">Google Maps</span> and <span className="font-medium">Yelp</span>. 
                                <br /><br />
                                Users find that these platforms frequently have <span className="font-medium">outdated</span> or <span className="font-medium">incomplete details</span> about menus, locations, and hours, with <span className="font-medium">limited personalized recommendations</span>. This often results in <span className="font-medium">inaccurate assessments</span> of a café&apos;s ambiance, leading to unsatisfactory visits. 
                                <br /><br />
                                Improving these aspects would not only enhance customer experiences but also benefit cafés in attracting new customers.
                            </span>
                            <div className="hidden absolute w-[97%] h-[95%] lg:flex justify-end items-end overflow-visible">
                                <Image 
                                    src={'/amico assets/Coffee shop-amico.png'}
                                    width={300}
                                    height={300}
                                    alt={'coffee amico'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col bg-white rounded-md shadow-sm border-[1px] border-gray-200 p-4 overflow-hidden overflow-y-scroll">
                    <h2 className="text-2xl">
                        Youth&apos;s Choice
                    </h2>
                    <span className="text-xl">
                    <span className="font-medium">Specialty blended espresso beverages</span> are the most popular among Canadians under 35.
                    </span>
                </div>
                <div className="col-span-1 md:col-span-1 row-span-1 flex flex-col bg-white rounded-md shadow-sm border-[1px] border-gray-200 p-4 overflow-hidden overflow-y-scroll">
                    <h2 className="text-2xl">
                        Review vs. Discovery
                    </h2>
                    <span className="text-lg">
                        A split in patron behavior shows reliance on online reviews for some, while others prefer personal discovery.
                    </span>
                </div>
                <div className="col-span-1 md:col-span-2 row-span-1 bg-white rounded-md shadow-sm border-[1px] border-gray-200 p-4 flex relative overflow-hidden gap-2">
                    <div className="w-1/2 lg:w-1/3">
                        <h2 className="text-xl md:text-2xl">
                            Hub Spots
                        </h2>
                        <span className="font-medium">
                            High importance of <span className="font-medium">Wi-Fi</span> availability and <span className="font-medium">seating comfort</span>, with patrons often verifying these before visiting.
                        </span>
                    </div>
                    <div className="w-1/3 hidden lg:flex h-max justify-center item-center">
                        <Image 
                            src={'/amico assets/Coffee break-amico (1).png'}
                            width={200}
                            height={200}
                            alt={"amico asset"}/>
                    </div>
                    <div className="w-1/2 lg:w-1/3">
                    <h2 className="text-xl md:text-2xl">
                            Third Places
                        </h2>
                        <span className="font-medium">
                            Cafés offer a conducive environment for creative thinking and productivity, thanks to <span className="font-medium">ambient noise</span> and <span className="font-medium">optimal lighting</span>.
                        </span>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 row-span-1 flex flex-col bg-white rounded-md shadow-sm border-[1px] border-gray-200 overflow-hidden overflow-y-scroll p-4">
                    <h2 className="text-2xl">
                        Shift to Social Media
                    </h2>
                    <span className="text-lg">
                        Younger customers increasingly use social media like <span className="font-medium">Instagram</span> and <span className="font-medium">TikTok</span> for discovering new cafés, moving away from traditional search engines.
                    </span>
                </div>
            </div>
        </main>
       
    )
}