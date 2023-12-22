'use client'
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Evaluations() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return (
        <main id='evaluations'>
            <div className="w-full h-max flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 gap-2">
                <div className="col-span-1 row-span-1 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <h1 className="text-2xl md:text-3xl font-medium">
                        Positive Feedback:
                    </h1>
                    <ul className="w-auto h-full flex flex-col  gap-4 list-disc">
                        <li className="w-auto inline text-lg">
                            Users liked the user interface and features.
                        </li>
                        <li className="w-auto inline text-lg">
                            Users appreciated icons and the app&apos;s focus on café enthusiasts.
                        </li>
                        <li className="w-auto inline text-lg">
                            Users praised Instagram Reels integration and similar café suggestions.
                        </li>
                        <li className="w-auto inline text-lg">
                            Users liked the detailed coffee information (beans, machines) and social features in “Java Junction.”
                        </li>
                        <li className="w-auto inline text-lg">
                            Overall aesthetic and layout met expectations for a café-centric app.
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <h1 className="text-2xl md:text-3xl font-medium">
                        Areas for Improvement:
                    </h1>
                    <ul className="w-auto h-full flex flex-col  gap-4 list-disc">
                        <li className="w-auto inline text-lg">
                            Technical issues, particularly with the coffee info carousel on iPads.
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Suggestions for reordering content for better coherence (e.g., reviews before café suggestions).</span>
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Simplification and consistency in navigation and labeling.</span>
                        </li>
                        <li className="w-auto inline text-lg">
                            Incorporation of real-life images like chalkboard menus.
                        </li>
                        <li className="w-auto inline text-lg">
                            Preference for emphasizing bean information over machine details.
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Need for clearer icons and labels.</span>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col rounded-md shadow-sm border-[1px] bg-white border-gray-200 p-4 overflow-hidden relative gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
                    <h1 className="text-2xl md:text-3xl font-medium">
                        New Feature Suggestions:
                    </h1>
                    <ul className="w-auto h-full flex flex-col  gap-4 list-disc">
                        <li className="w-auto inline text-lg">
                            A &apos;Would Go Again&apos; button.
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Transit time indicators.</span>
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Integration of friends&apos; posts or activity.</span>
                        </li>
                        <li className="w-auto inline text-lg">
                            Interactive elements like hashtags and filters.
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Gamification elements (points system, badges for reviews).</span>
                        </li>
                        <li className="w-auto inline text-lg">
                            <span className="font-medium">Emphasis on inclusivity and accessibility features.</span>
                        </li>
                        <li className="w-auto inline text-lg">
                            Updates with more relevant content (coffee beans for sale, seating availability).
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
