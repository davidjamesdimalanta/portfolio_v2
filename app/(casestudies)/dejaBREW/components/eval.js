export default function Evaluations() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Positive Feedback</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li className="text-lg">Users liked the user interface and features.</li>
                    <li className="text-lg">Users appreciated icons and the app&apos;s focus on café enthusiasts.</li>
                    <li className="text-lg">Users praised Instagram Reels integration and similar café suggestions.</li>
                    <li className="text-lg">Users liked the detailed coffee information (beans, machines) and social features in &quot;Java Junction.&quot;</li>
                    <li className="text-lg">Overall aesthetic and layout met expectations for a café-centric app.</li>
                </ul>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Areas for Improvement</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li className="text-lg">Technical issues, particularly with the coffee info carousel on iPads.</li>
                    <li className="text-lg"><span className="font-medium">Suggestions for reordering content for better coherence (e.g., reviews before café suggestions).</span></li>
                    <li className="text-lg"><span className="font-medium">Simplification and consistency in navigation and labeling.</span></li>
                    <li className="text-lg">Incorporation of real-life images like chalkboard menus.</li>
                    <li className="text-lg">Preference for emphasizing bean information over machine details.</li>
                    <li className="text-lg"><span className="font-medium">Need for clearer icons and labels.</span></li>
                </ul>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">New Feature Suggestions</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li className="text-lg">A &apos;Would Go Again&apos; button.</li>
                    <li className="text-lg"><span className="font-medium">Transit time indicators.</span></li>
                    <li className="text-lg"><span className="font-medium">Integration of friends&apos; posts or activity.</span></li>
                    <li className="text-lg">Interactive elements like hashtags and filters.</li>
                    <li className="text-lg"><span className="font-medium">Gamification elements (points system, badges for reviews).</span></li>
                    <li className="text-lg"><span className="font-medium">Emphasis on inclusivity and accessibility features.</span></li>
                    <li className="text-lg">Updates with more relevant content (coffee beans for sale, seating availability).</li>
                </ul>
            </div>
        </div>
    );
}
