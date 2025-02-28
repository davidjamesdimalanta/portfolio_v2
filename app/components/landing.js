'use client'
import React from "react"
import '../globals.css'

export default function Landing() {
    return(
        <main id="landing" className="w-screen h-[80svh] flex flex-col justify-center items-center">
            <div className="w-[80vw] md:w-[70vw] h-[90svh] md:h-[70svh] flex flex-col justify-center items-start gap-2">
                <h1 className="text-2xl">
                    Hello, my name is
                </h1>
                <span className="font-bold text-5xl md:text-7xl">
                    David James,
                </span>
                <h3 className="text-2xl md:text-3xl pb-6">
                    With a background in <span className="text-medium-light">front-end development </span>
                    and <span className="text-accent">UX/UI</span>, I make sure user-centered design informs the build process.
                </h3>
                <div className="flex flex-col w-max">
                    <a id="underline-inverted" href="/#about">Learn More About Me</a>
                </div>
                <div className="flex flex-col w-max">
                    <a id="underline" href="/#projects">See My Work</a>
                </div>
            </div>
        </main>
    )
}