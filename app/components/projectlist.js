'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import projectdata from '../data/projectdata';


export default function ProjectList({ imgUrl, title, desc, tags, width, height, gitLink, webLink }) {
    const [show, setShow] = useState(true);
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
        <div className="w-[80vw] h-auto flex flex-col border-b-2 border-[#B2AC88] overflow-hidden" key={projectdata.projectId}>
            <div className="flex justify-between items-center py-2 hover:cursor-pointer" onClick={toggleShow}>
                <h1 className="font-thin text-3xl">
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
                className="transition-[max-height] duration-700 ease-in-out overflow-hidden">
                <div className="w-full h-auto flex flex-col md:flex-row-reverse justify-start md:justify-center items-center">
                    <div className="relative w-full md:w-1/2 flex justify-center md:justify-center items-center p-4">
                        <div 
                            className="absolute inset-0 bg-[#143306] w-auto h-auto opacity-30 z-20"
                        ></div>
                        <Image 
                            src={imgUrl}
                            width={width}
                            height={height}
                            alt={desc}
                            className='relative'
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start text-center md:text-start">
                        {desc}
                        <div className="py-10 flex flex-wrap gap-2 justify-center items-center md:justify-start">
                            {tags.map((tag, index) => (
                                <span key={tag} className="text-lg font-thin px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-2 pb-4 md:pb-0'>
                            <a href={gitLink} target="_blank" rel="noopener noreferrer">
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
                            <a href={webLink} target="_blank" rel="noopener noreferrer">
                                <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="currentColor" 
                                        className="w-8 h-8 cursor-pointer hover:stroke-[#FFFDD0]">
                                        <title>Web Link</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
