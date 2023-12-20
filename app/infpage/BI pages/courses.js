'use client'
import React from "react"
import CoursesData from "@/app/data/coursesdata";
import CoursesList from "./courseslist";
import Last from "@/app/components/last";


export default function Projects() {

    return(
        <main id="projects" className="w-screen h-max flex flex-col justify-center items-center">
            <div className="w-[90vw] min-h-[100svh] flex flex-col justify-start items-center gap-4 pt-5">
                <h1 className="w-[90vw] flex text-2xl pb-4 font-medium">
                    Bachelor of Information Courses
                </h1>
                <div>
                    {CoursesData.map((CoursesData, index) => (
                        <div
                        data-aos="fade-up"
                        data-aos-duration="1000" 
                        data-aos-easing="ease-in-out"
                        data-aos-delay={`${index * 200}`}
                        data-aos-anchor={'#projects'}
                        key={CoursesData.projectId}>
                            <CoursesList 
                            imgUrl={CoursesData.imgUrl}
                            title={CoursesData.title}
                            desc={CoursesData.desc}
                            tags={CoursesData.tags}
                            projectId={CoursesData.projectId}
                            />
                        </div>
                        
                    ))}
                </div>
            </div>
            <Last />
        </main>
    )
}