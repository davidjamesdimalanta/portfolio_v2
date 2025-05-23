'use client'

import React from "react"
import FeatureList from "./featuredlist"
import featuredata from "../data/featuredata"

export default function Featured() {
    return(
        <main id="featured" className="w-screen flex flex-col justify-center items-center gap-2 pb-24">
            <h1 className="flex w-[80vw] text-2xl pt-4 font-normal">Featured Projects and Case Studies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80vw] auto-rows-fr">
                {featuredata.map((featuredata, index) => (
                    <div 
                    key={featuredata.projectId}
                    className="h-full"
                    >
                        <FeatureList 
                        imgUrl={featuredata.imgUrl}
                        title={featuredata.title}
                        desc={featuredata.desc}
                        tags={featuredata.tags}
                        width={featuredata.width}
                        height={featuredata.height}
                        gitLink={featuredata.gitLink}
                        webLink={featuredata.webLink}
                        projectId={featuredata.projectId}
                        buttonText={featuredata.buttonText || "View Project"}
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}