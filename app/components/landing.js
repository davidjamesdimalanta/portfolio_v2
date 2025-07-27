export default function Landing() {
    return(
        <main id="landing" className="w-screen h-[80svh] flex justify-center items-center overflow-x-hidden">
            <div className="w-[80vw] h-[90svh] md:h-[70svh] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pt-24 md:pt-0">
                <div className="flex-1 flex flex-col justify-center items-start gap-2">
                    <h1 className="text-2xl">
                        Hello, my name is
                    </h1>
                    <span className="font-bold text-5xl md:text-7xl">
                        David James,
                    </span>
                    <h3 className="text-2xl md:text-3xl pb-6">
                        With a background in <span className="text-medium-light">front-end development </span>
                        and <span className="text-accent">UX/UI</span>, I make sure user-centered design informs the build process.
                    </h3>
                    <div className="flex flex-col w-max">
                        <a id="underline" href="/innovation-hub">Innovation Hub Website Redesign</a>
                    </div>
                    <div className="flex flex-col w-max">
                        <a id="underline-inverted" href="/dejaBREW">Cafe-Finding Case Study</a>
                    </div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-visible w-full h-full relative md:relative">
                    <div
                        className="
                            w-auto h-auto rounded-lg z-10
                            md:absolute md:w-[980px] md:left-0 md:top-1/2 md:-translate-y-1/2
                        "
                    >
                        <video 
                            className="w-full h-full object-cover rounded-lg"
                            autoPlay 
                            muted 
                            playsInline
                        >
                            <source src="/videos/projcts-reel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </main>
    )
}