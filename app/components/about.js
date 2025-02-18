import React from "react"
import Image from "next/image"

export default function About() {
    return(
        <main id="about" className="max-w-[90vw] w-auto min-h-screen md:h-[80vh] flex flex-col-reverse md:flex-row justify-start md:justify-center items-center p-4 md:p-8">
            <div className="w-auto md:w-[50vw] flex flex-col justify-center items-start gap-4 px-4 md:px-12">
               <h1 className="text-2xl pt-4 font-medium">
                About Me
               </h1>
               <p className="text-base md:text-lg">
                    Hey! my name is David James, and I am a 2nd year student at the <a id="link" href="https://ischool.utoronto.ca/">Faculty of Information </a>
                    at the University of Toronto, studying Human-Centered Design. What sets me apart is my dedication to understanding and addressing 
                    user needs, a skill sharpened through my studies and hands-on project experiences. I bring a unique blend of creative design 
                    thinking and technical proficiency to the table.
                    <br/>
                    <br/>
                </p>
                <p className="text-base md:text-lg">
                    I began my coding journey at the start of 2023 as a New Years resolution to learn a new skill.
                    Today, I am fortunate to have worked with a <a id="link" href="https://globalspark.world">student-led non-profit</a>,
                    a home health & hospice solutions provider, and a <a id="link" href="https://blogs.studentlife.utoronto.ca/innovationhub/">student-led design studio</a>. 
                    Outside of work, I read comics, and play video games.
                    <br /><br />
                    Here are some technologies I work with:
                </p>
                <ul className="font-medium grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            <div className="md:hidden w-full max-w-[80vw] md:w-[30vw] p-4">
                <Image 
                    src="/cc217327-1944-43a1-9406-d9df6c19f36f.jpg" 
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
            </div>
            <div className="hidden md:flex w-[30vw] p-8">
                <Image 
                    src="/cc217327-1944-43a1-9406-d9df6c19f36f.jpg" 
                    alt="Profile Picture"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                />
            </div>
        </main>
    )
}