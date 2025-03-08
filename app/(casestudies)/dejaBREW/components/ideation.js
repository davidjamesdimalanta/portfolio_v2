export default function Ideation() {
    return(
        <div id="ideas" className="w-screen h-max flex flex-col justify-center items-center gap-8 py-8">
            <h1 className="text-3xl font-medium">Ideation</h1>
            <div className="w-[90vw] md:w-[80vw] h-max flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 border-[1px] bg-white border-gray-200">
                    <h2 className="text-xl font-medium">Idea 1: Café Finder</h2>
                    <p className="text-sm">A café discovery app that helps users find cafés based on their preferences, such as ambiance, coffee quality, food options, and more.</p>
                    <p className="text-sm">Users can filter cafés based on their preferences, view ratings and reviews, and get directions to the café of their choice.</p>
                </div>
                <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 border-[1px] bg-white border-gray-200 md:gap-4">
                    <h2 className="text-xl font-medium">Idea 2: Café Companion</h2>
                    <p className="text-sm">A café companion app that helps users find the perfect café for their needs, such as studying, working, or socializing.</p>
                    <p className="text-sm">Users can filter cafés based on their needs, view ratings and reviews, and get directions to the café of their choice.</p>
                </div>
                <div className="w-full md:w-1/3 h-max flex flex-col gap-2 rounded p-4 border-[1px] bg-white border-gray-200 md:gap-4">
                    <h2 className="text-xl font-medium">Idea 3: Café Community</h2>
                    <p className="text-sm">A café community app that helps users connect with other café-goers, share their experiences, and discover new cafés.</p>
                    <p className="text-sm">Users can join café communities, share their experiences, and discover new cafés based on recommendations from other users.</p>
                </div>
            </div>
        </div>
    )
}