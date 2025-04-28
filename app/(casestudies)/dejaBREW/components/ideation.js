export default function Ideation() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Café Finder</h3>
                <p className="mb-3">A café discovery app that helps users find cafés based on their preferences, such as ambiance, coffee quality, food options, and more.</p>
                <p>Users can filter cafés based on their preferences, view ratings and reviews, and get directions to the café of their choice.</p>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Café Companion</h3>
                <p className="mb-3">A café companion app that helps users find the perfect café for their needs, such as studying, working, or socializing.</p>
                <p>Users can filter cafés based on their needs, view ratings and reviews, and get directions to the café of their choice.</p>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Café Community</h3>
                <p className="mb-3">A café community app that helps users connect with other café-goers, share their experiences, and discover new cafés.</p>
                <p>Users can join café communities, share their experiences, and discover new cafés based on recommendations from other users.</p>
            </div>
        </div>
    );
}