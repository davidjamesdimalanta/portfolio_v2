import projectdata from "../data/projectdata"
import Link from "next/link"

export default function ProjectMapper() {
    const designProjects = projectdata.filter(project => 
        project.projectType === 'design'
    );

    const developmentProjects = projectdata.filter(project => 
        project.projectType === 'development'
    );

    const ProjectCard = ({ project }) => (
        <Link href={project.webLink} className="block">
            <div className="flex flex-col h-full border-[1px] border-dark rounded-sm cursor-pointer">
                {project.imgUrl && (
                    <div className="w-auto h-auto overflow-hidden m-4 mb-0 rounded">
                        <img 
                            src={project.imgUrl} 
                            alt={project.title}
                            className="w-auto h-auto object-fit"
                        />
                    </div>
                )}
                <div className="flex flex-col justify-start items-start p-4 h-auto gap-4">
                    <h2 className="text-3xl">{project.title}</h2>
                    <p>{project.desc}</p>
                    <div className="pt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="text-lg font-medium pr-2 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <main className="w-screen h-max flex justify-center items-center">
            <div className="w-[80vw] h-auto flex flex-col justify-center items-center gap-8 pt-12">
                <h1 className="w-full text-2xl font-normal">
                    Projects by Category
                </h1>
                
                <section className="w-full">
                    <h2 className="text-xl font-medium mb-4">Design Projects</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {designProjects.map((project) => (
                            <ProjectCard key={project.projectId} project={project} />
                        ))}
                    </div>
                </section>

                <section className="w-full">
                    <h2 className="text-xl font-medium mb-4">Development Projects</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {developmentProjects.map((project) => (
                            <ProjectCard key={project.projectId} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}