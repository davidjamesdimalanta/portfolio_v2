'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import FeaturedData from "../data/featuredata"

export default function FeatureList({ imgUrl, title, desc, tags, width, height, gitLink, webLink , projectId}) {
    return(
        <div>
            <div className="flex flex-col md:flex-row-reverse w-[80vw] h-max shadow-lg rounded-lg border-2 border-[#B2AC88]" key={FeaturedData.projectId}>
                <a className="relative flex h-auto">
                    <Image 
                    src={imgUrl}
                    width={width}
                    height={height}
                    alt={desc}
                    className='rounded-t-md md:rounded-l-none md:rounded-tr-md md:rounded-br-md object-fill'
                    /> 
                </a>
                <div className="flex flex-col justify-center items-center md:items-start p-8 md:w-2/3 h-auto gap-2">
                    <h2 className="text-3xl text-center md:text-start">{title}</h2>
                    <p className="text-center md:text-start">{desc}</p>
                    <Link href={webLink} id="underline" className="flex w-max h-max justify-end text-center md:text-start font-medium">View Project</Link>
                    <div className="pt-5 flex flex-wrap gap-2 justify-center items-center md:justify-start">
                            {tags.map((tag, index) => (
                                <span key={tag} className="text-lg font-thin pr-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
}