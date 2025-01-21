'use client'
import React from "react"

export default function Contact() {
    return(
        <main id="contact" className="w-screen h-[95vh] flex justify-center items-start">
            <div className="w-[80vw] md:w-[65vw] h-full flex justify-center items-center">
                <div className="w-full h-max flex flex-col justify-center items-start gap-2">
                    <h1 className="font-thin text-xl">
                        What&apos;s Next?
                    </h1>
                    <span className="font-bold text-6xl" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        Get In Touch
                    </span>
                    <h3 id="contact-text" className="text-2xl pb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="300">
                        Although I am a full-time student, I am always looking for new opprtunities! Whether you have a question or just want to say hi, I will try my best to get back to you!
                    </h3>
                    <div className="flex gap-4">
                        <a href="mailto:david.dimalanta@mail.utoronto.ca">
                            <button className=" text-[#121314] border-[#121314] rounded-md border-2 px-4 py-2 hover:scale-105 ease-in-out" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-anchor="#contact-text">
                                Say Hi!
                            </button>
                        </a>
                        <a href="/JAV2025CV.pdf" target="_blank" rel="noopener noreferrer">
                            <button className=" text-[#121314] border-[#121314] rounded-md border-2 px-4 py-2 hover:scale-105 ease-in-out" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1100" data-aos-anchor="#contact-text">
                                CV
                            </button>
                        </a>
                    </div>
                    <div className="flex gap-4 pt-4 md:pt-2">
                        <a href="https://github.com/davidjamesdimalanta" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1300" data-aos-anchor="#contact-text">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                role="img" viewBox="0 0 24 24" 
                                fill="none" stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="w-8 h-8 cursor-pointer hover:stroke-[#FFFDD0]">
                                <title>GitHub Link</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/david-james-dimalanta/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1400" data-aos-anchor="#contact-text">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                role="img" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-8 h-8 cursor-pointer hover:stroke-[#FFFDD0]"><title>LinkedIn Link</title>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}