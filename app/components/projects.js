'use client'
import React from "react"
import projectdata from "../data/projectdata";
import ProjectList from "./projectlist";

export default function Projects() {
    return(
        <main id="projects" className="w-screen h-max flex justify-center items-center">
            <div className="w-[80vw] h-auto flex flex-col justify-center items-center gap-4 pt-12">
                <h1 className="w-[80vw] flex text-2xl pb-4 font-thin">
                    What I&apos;ve Made
                </h1>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    {projectdata.map(projectdata => (
                        <ProjectList 
                        imgUrl={projectdata.imgUrl}
                        title={projectdata.title}
                        desc={projectdata.desc}
                        tags={projectdata.tags}
                        width={projectdata.width}
                        height={projectdata.height}
                        gitLink={projectdata.gitLink}
                        webLink={projectdata.webLink}
                        key={projectdata.projectId}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}