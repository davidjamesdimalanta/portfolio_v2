import ProjectList from "./projectlist"
import projectdata from "../data/projectdata"

export default function Projects() {
    return(
        <main id="projects" className="w-screen h-max flex justify-center items-center">
            <div className="w-[80vw] h-auto flex flex-col justify-center items-center gap-4 pt-12">
                <h1 className="w-full text-2xl pb-4 font-normal">
                    Personal Projects
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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