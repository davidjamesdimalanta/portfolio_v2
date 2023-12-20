'use client'

import React from "react"
import FeatureList from "./featuredlist"
import featuredata from "../data/featuredata"

export default function Featured() {
    return(
        <main id="featured" className="w-screen h-80vh flex flex-col justify-start items-center gap-2 pb-24">
            <h1 className="flex w-[80vw] text-2xl pt-4 font-thin">Featured Projects</h1>
            <div>
            {featuredata.map((featuredata, index) => (
                        <div 
                        data-aos="fade-right" 
                        data-aos-duration="1000" 
                        data-aos-easing="ease-in-out"
                        data-aos-delay={`${index * 200}`}
                        className="pb-2">
                            <FeatureList 
                            imgUrl={featuredata.imgUrl}
                            title={featuredata.title}
                            desc={featuredata.desc}
                            tags={featuredata.tags}
                            width={featuredata.width}
                            height={featuredata.height}
                            gitLink={featuredata.gitLink}
                            webLink={featuredata.webLink}
                            key={featuredata.projectId}
                            />
                        </div>
                        
                    ))}
            </div>
        </main>
    )
}