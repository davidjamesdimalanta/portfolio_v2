'use client'

import { useState, useRef, useEffect } from 'react';
import CoursesData from '@/app/data/coursesdata';


export default function CoursesList({ title, desc, tags, projectId }) {
    const [show, setShow] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px'); // Initialize with '0px'
    const contentRef = useRef(null);

    const toggleShow = () => {
        setShow(prevShow => !prevShow);
    };

    useEffect(() => {
        if (show && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('0px');
        }
    }, [show]);


    return (
        <div className="w-[85vw] h-auto flex flex-col border-b-2 border-[#B2AC88] overflow-hidden" key={CoursesData.projectId}>
            <div className="flex justify-between items-center py-2 hover:cursor-pointer" onClick={toggleShow}>
                <h1 className="font-thin text-3xl hover:text-[#B2AC88]">
                    {title}
                </h1>
                {!show ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 cursor-pointer ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                ) : (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                )}
            </div>
            <div 
                ref={contentRef}
                style={{ maxHeight: maxHeight }}
                className="transition-[max-height] duration-700 ease-in-out">
                <div className="w-full h-max flex flex-col justify-start md:justify-center items-start gap-2">
                    <h2 className='text-xl font-medium text-start'>
                        Course Description
                    </h2>
                    {desc}
                    <h2 className=' pt-4 text-xl font-medium'>
                            Course Learning Objectives
                    </h2>
                    <div className="w-full flex flex-col justify-between items-center md:items-start text-start pl-10">
                        <ul className="py-2 flex flex-col gap-2 justify-center items-start list-disc">
                            {tags.map((tag, index) => (
                                <li key={tag} className="text-lg px-2 py-1">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
