'use client'
import React from "react"
import 'app/globals.css'

export default function Landing() {
    return(
        <main id="landing" className="w-screen h-[100svh] flex flex-col justify-center items-center">
            <div className="w-[80vw] md:w-[70vw] h-[90svh] md:h-[70svh] flex flex-col justify-center items-start gap-2">
                <h1 className="text-2xl" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-anchor="#landing">
                    Hello, my name is
                </h1>
                <span className="font-bold text-5xl md:text-7xl" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-anchor="#landing">
                    David James Dimalanta
                </span>
                <h3 className="text-2xl md:text-3xl pb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1500" data-aos-anchor="#landing">
                    I am a Toronto-based web developer. Currently, I am a front-end developer at <a id="underline" href="https://globalspark.world/">Global Spark</a>.
                </h3>
                <div className="flex flex-col w-max">
                    <a id="underline" href="/#about" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="2000" data-aos-anchor="#landing"> Learn More About Me</a>
                </div>
                <div className="flex flex-col w-max">
                    <a id="underline" href="/#projects" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="2200" data-aos-anchor="#landing">View My Work</a>
                </div>
                <div className="flex flex-col w-max">
                    <a id="underline" href="/infpage" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="2400" data-aos-anchor="#landing">View My BI Courses</a>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="3000" data-aos-anchor="#landing">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-8 h-8 animate-bounce">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3">
                        </path>
                    </svg>
            </div>
        </main>
    )
}