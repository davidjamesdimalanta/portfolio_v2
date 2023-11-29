'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function FeatureList({ imgUrl, title, desc, tags, width, height, gitLink, webLink }) {
    return(
        <div>
            <div className="flex flex-col md:flex-row w-[80vw] h-max shadow-lg rounded-lg border-2 border-[#B2AC88]">
                <a className="relative flex h-auto">
                    <Image 
                    src={imgUrl}
                    width={600}
                    height={600}
                    alt={desc}
                    className='rounded-t-md md:rounded-l-md md:rounded-tr-none object-fill'
                    /> 
                </a>
                <div className="flex flex-col justify-center items-end p-8 md:w-2/3 h-auto gap-2">
                    <h2 className="text-3xl text-center md:text-end">{title}</h2>
                    <p className="text-center md:text-end">{desc}</p>
                    <Link href={webLink} id="underline" className="flex h-max justify-end items-end">Visit Website</Link>
                </div>
            </div>
        </div>
    )
}