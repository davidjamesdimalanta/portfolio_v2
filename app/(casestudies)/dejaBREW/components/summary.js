import React from "react";
import Link from "next/link";

export default function Summary() {
    return(
        <div className="w-screen h-full flex flex-col-reverse md:flex-row">
            <div className="w-screen md:w-1/6 h-full md:h-1/3 p-6 md:p-4 flex flex-col">
                <h2 className="text-3xl text-[#EED9C4] pb-4">
                    Navigate
                </h2>
                <ul className="flex flex-col justify-center gap-4 w-max text-3xl">
                    <Link className="w-max" id="underline" href={'#problem-space'}><li>Problem Space</li></Link>
                    <Link className="w-max" id="underline" href={'#empathize'}><li>Empathize</li></Link>
                    <Link className="w-max" id="underline" href={'#ideation'}><li>Ideation</li></Link>
                    <Link className="w-max" id="underline" href={'#prototyping'}><li>Prototyping</li></Link>
                    <Link className="w-max" id="underline" href={'#next-steps'}><li>Next Steps</li></Link>
                </ul>
            </div>
            <div className="w-screen md:w-3/6 h-full md:h-1/3 p-6 md:px-6 md:py-4 flex flex-col gap-4">
                <h2 className="text-3xl text-[#EED9C4]">
                    Making Café Finding Easy
                </h2>
                <div className="pl-0 md:pl-4 flex flex-col justify-center gap-4 text-lg text-[#EED9C4]">
                    <span>DejaBREW is a mobile application specifically tailored for students and young professionals who are passionate about exploring unique cafés. It&apos;s the perfect tool for those who love to discover new coffee spots.</span>
                    <span>It offers personalized café recommendations based on individual preferences and previous visits. Whether you&apos;sre seeking a quiet spot for studying, a vibrant space for social gatherings, or a café with the best espresso in town, DejaBREW has you covered.</span>
                    <span>View the mid-fidelity prototype here:</span>
                </div>
                <a href="https://www.figma.com/proto/P3poQA9v7CbsnPmd0iaxGv/D%C3%A9jaBrew-MidFi?type=design&node-id=1-2&t=XjFEv3OY9KjYTj4O-1&scaling=scale-down&page-id=0%3A1&mode=design">
                    <button className="ml-0 md:ml-4 px-3 py-2 text-[#855439] hover:text-[#f6f4ec] bg-[#f6f4ec] hover:bg-[#B2AC88] transition ease-in-out duration-300 rounded-xl text-lg w-max">
                        Figma Prototype
                    </button>
                </a>
            </div>
            <div className="w-screen md:w-2/6 h-full md:h-1/3 p-6 md:p-4">
                <div className="pl-0 md:pl-4 flex flex-col justify-center gap-4 text-lg text-[#EED9C4] font-thin">
                    <span><b>Team</b> : Sehar Bajwa, Faiza Imam, Thomas Fox, Michael Fang, David James Dimalanta</span>
                    <span><b>Role</b> : Led primary research & usability evaluations, assisted in ideation, and created mid-fi prototype wireframes</span>
                    <span><b>Client</b> : Course Project on café finding, for patrons such as students or working professionals.</span>
                    <span><b>Platform</b> : Mobile</span>
                    <span><b>Sector</b> : Cafés</span>
                    <span><b>Methodology</b> : Interviews, Surveys, Personas, As-is/To-be scenarios, Lean Evaluation, Usability Testing</span>
                    <span><b>Tools</b>: Figma, Miro, Google Forms</span>
                    <span><b>Skills Developed</b> : UI Research, Usability Evaluations, Prototyping</span>
                </div>
            </div>
        </div>
    )
}