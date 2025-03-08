'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import FeaturedData from "../data/featuredata"

export default function FeatureList({ imgUrl, title, desc, tags, width, height, gitLink, webLink, projectId, buttonText}) {
    return(
        <div className="h-full">
            <div className="flex flex-col h-full border-2 border-dark">
                <div className="relative flex p-4 aspect-[16/9] w-full">
                    <Image 
                    src={imgUrl}
                    width={width}
                    height={height}
                    alt={desc}
                    className='rounded-t-md object-contain w-full h-full'
                    /> 
                </div>
                <div className="flex flex-col justify-start items-start p-8 flex-grow">
                    <div>
                        <h2 className="text-3xl">{title}</h2>
                        <p className="mt-2">{desc}</p>
                    </div>
                    <div className="mt-2 pt-4">
                        <Link 
                            href={webLink} 
                            id="underline" 
                            className="flex w-max h-max font-medium" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {buttonText || "View Project"}
                        </Link>
                        <div className="pt-5 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={tag} className="text-lg font-medium pr-2 py-1">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}