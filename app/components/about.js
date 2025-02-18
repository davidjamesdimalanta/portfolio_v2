import React from "react"
import Image from "next/image"

export default function About() {
    return(
        <main id="about" className="w-screen h-max md:h-[80vh] flex flex-col-reverse md:flex-row justify-start md:justify-center items-center pb-24">
            <div className="w-screen h-40vh md:w-[50vw] md:h-[80vh] flex flex-col justify-center items-start gap-2 px-12 py-2 md:pr-2">
               <h1 className="text-2xl pt-4 font-medium">
                About Me
               </h1>
               <p className="text-lg h-fit">
                    Hey! my name is David James, and I am a 2nd year student at the <a id="link" href="https://ischool.utoronto.ca/">Faculty of Information </a>
                    at the University of Toronto, studying Human-Centered Design. What sets me apart is my dedication to understanding and addressing 
                    user needs, a skill sharpened through my studies and hands-on project experiences. I bring a unique blend of creative design 
                    thinking and technical proficiency to the table.
                    <br/>
                    <br/>
                </p>
                <p className="text-lg h-fit">
                    I began my coding journey at the start of 2023 as a New Years resolution to learn a new skill.
                    Today, I am fortunate to have worked with a <a id="link" href="https://globalspark.world">student-led non-profit</a>,
                    a home health & hospice solutions provider, and a <a id="link" href="https://blogs.studentlife.utoronto.ca/innovationhub/">student-led design studio</a>. 
                    Outside of work, I read comics, and play video games.
                    <br /><br />
                    Here are some technologies I work with:
                </p>
                <ul className="font-medium">
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            <div className="md:hidden w-80vw h-20vh md:w-[30vw] md:h-[80vh] flex justify-center items-center">
                <Image 
                    src="/cc217327-1944-43a1-9406-d9df6c19f36f.jpg" 
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className=" rounded-2xl"
                />
            </div>
            <div className="hidden md:flex w-80vw h-20vh md:w-[30vw] md:h-[80vh] justify-center items-center">
                <Image 
                    src="/cc217327-1944-43a1-9406-d9df6c19f36f.jpg" 
                    alt="Profile Picture"
                    width={400}
                    height={400}
                    className=" rounded-2xl"
                />
            </div>
        </main>
    )
}