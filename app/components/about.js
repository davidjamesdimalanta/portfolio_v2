'use client'

import React from "react"
import Image from "next/image"

export default function About() {
    return(
        <main id="about" className="w-screen h-max md:h-[80vh] flex flex-col-reverse md:flex-row justify-start md:justify-center items-center pb-24">
            <div className="w-screen h-40vh md:w-[40vw] md:h-[80vh] flex flex-col justify-center items-start gap-2 px-12 py-2 md:pr-2">
               <h1 className="text-2xl pt-4 font-thin">
                About Me
               </h1>
               <p className="text-lg h-fit" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-anchor="#about">
                    Hey! my name is David James, and I am a 1st year student at the <a id="underline" href="https://ischool.utoronto.ca/">Faculty of Information</a> at the University of Toronto, studying Human-Centered Design. 
                    <br/>
                    <br/>
                </p>
                <p className="text-lg h-fit" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="700" data-aos-anchor="#about">
                    I began my coding journey at the start of 2023 as a New Years resolution to learn a new skill.
                    Today, I am fortunate to be able to work with a <a id="underline" href="https://globalspark.world">non-profit, student-led organization</a>, and at a <a id="underline" href="https://empirehsi.com">home health & hospice solutions provider</a>. <br /><br />
                    Here are some technologies I work with:
                </p>
                <ul className="font-thin" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-anchor="#about">
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Wordpress, Wix, Squarespace</li>
                </ul>
            </div>
            <div className="w-90vw h-20vh md:w-[30vw] md:h-[80vh] flex justify-center items-center">
                <Image 
                    src="/cc217327-1944-43a1-9406-d9df6c19f36f.jpg" 
                    alt="Profile Picture"
                    width={250}
                    height={500}
                />
            </div>
        </main>
    )
}