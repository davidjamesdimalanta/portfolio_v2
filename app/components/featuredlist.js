'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import FeaturedData from "../data/featuredata"

export default function FeatureList({ imgUrl, title, desc, tags, width, height, gitLink, webLink , projectId}) {
    return(
        <div>
            <div className="flex flex-col h-max border-2 border-dark" key={FeaturedData.projectId}>
                <a className="relative flex h-auto p-8">
                    <Image 
                    src={imgUrl}
                    width={width}
                    height={height}
                    alt={desc}
                    className='rounded-t-md object-fill w-auto'
                    /> 
                </a>
                <div className="flex flex-col justify-start items-start p-8 h-auto gap-4">
                    <h2 className="text-3xl">{title}</h2>
                    <p>{desc}</p>
                    <Link href={webLink} id="underline" className="flex w-max h-max font-medium">View Project</Link>
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
    )
}