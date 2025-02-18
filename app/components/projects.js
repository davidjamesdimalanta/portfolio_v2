'use client'
import React from "react"
import projectdata from "../data/projectdata";
import ProjectList from "./projectlist";

export default function Projects() {
    return(
        <main id="projects" className="w-screen h-max flex justify-center items-center">
            <div className="w-[80vw] h-auto flex flex-col justify-center items-center gap-4 pt-12">
                <h1 className="w-[80vw] flex text-2xl pb-4 font-medium">
                    Projects
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 p-4">
                    {projectdata.map((projectdata, index) => (
                        <div key={projectdata.projectId}>
                            <ProjectList 
                            imgUrl={projectdata.imgUrl}
                            title={projectdata.title}
                            desc={projectdata.desc}
                            tags={projectdata.tags}
                            width={projectdata.width}
                            height={projectdata.height}
                            webLink={projectdata.webLink}
                            buttonText={projectdata.buttonText}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}