import React from "react";
import CarouselGallery from "@/components/CarouselGallery";

export default function Summary() {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold">dejaBREW</h1>
                <h2 className="text-2xl mb-6">Making Café Finding Easy</h2>
                <div className="mb-8">
                    <CarouselGallery 
                        images={[
                            {
                                src: "/mockups/appscreen.png",
                                alt: "dejaBREW app hero image showing the main interface",
                                width: 1200,
                                height: 600,
                                caption: "dejaBREW mobile application interface"
                            },
                            {
                                src: "/mockups/FeaturePath1.gif",
                                alt: "Animation showing cafe recommendation features",
                                width: 1200,
                                height: 600,
                                caption: "Personalized cafe recommendations based on preferences"
                            },
                            {
                                src: "/mockups/FeaturePath2.5.gif",
                                alt: "Animation showing detailed cafe information",
                                width: 1200,
                                height: 600,
                                caption: "Comprehensive cafe details in one place"
                            },
                            {
                                src: "/mockups/FeaturePath3.gif",
                                alt: "Animation showing review functionality",
                                width: 1200,
                                height: 600,
                                caption: "Review and discuss cafes with the community"
                            }
                        ]}
                        height={400}
                        className="rounded-lg overflow-hidden"
                    />
                </div>
                <p className="text-lg mb-4">
                    DejaBREW is a mobile application specifically tailored for students and young professionals who are passionate about exploring unique cafés. It&apos;s the perfect tool for those who love to discover new coffee spots.
                </p>
                <p className="text-lg mb-6">
                    It offers personalized café recommendations based on individual preferences and previous visits. Whether you&apos;re seeking a quiet spot for studying, a vibrant space for social gatherings, or a café with the best espresso in town, DejaBREW has you covered.
                </p>
                <a href="https://www.figma.com/proto/P3poQA9v7CbsnPmd0iaxGv/D%C3%A9jaBrew-MidFi?type=design&node-id=1-2&t=XjFEv3OY9KjYTj4O-1&scaling=scale-down&page-id=0%3A1&mode=design">
                    <button className="px-4 py-2 bg-medium hover:bg-medium-light text-white transition-colors duration-300 rounded-md">
                        View Figma Prototype
                    </button>
                </a>
            </div>

            {/* Project Overview */}
            <section className="mb-16">
            <h2 className="text-section text-xl font-medium mb-2">Project Overview</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="border-l-2 border-medium-light p-6">
                        <h3 className="font-semibold mb-3">Team</h3>
                        <p>Sehar Bajwa, Faiza Imam, Thomas Fox, Michael Fang, David James Dimalanta</p>
                    </div>
                    <div className="border-l-2 border-medium-light p-6">
                        <h3 className="font-semibold mb-3">My Role</h3>
                        <p>Led primary research & usability evaluations, assisted in ideation, and created mid-fi prototype wireframes</p>
                    </div>
                    <div className="border-l-2 border-medium-light p-6">
                        <h3 className="font-semibold mb-3">Project Details</h3>
                        <p><strong>Client:</strong> Course Project</p>
                        <p><strong>Platform:</strong> Mobile</p>
                        <p><strong>Sector:</strong> Cafés</p>
                    </div>
                </div>
            </section>

            {/* Methods & Tools */}
            <section className="mb-16">
                <h2 className="text-section text-xl font-medium mb-2">Methods & Tools</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-l-2 border-medium-light p-6">
                        <h3 className="font-semibold mb-3">Methodology</h3>
                        <p>Interviews, Surveys, Personas, As-is/To-be scenarios, Lean Evaluation, Usability Testing</p>
                    </div>
                    <div className="border-l-2 border-medium-light p-6">
                        <h3 className="font-semibold mb-3">Tools & Skills</h3>
                        <p><strong>Tools:</strong> Figma, Miro, Google Forms</p>
                        <p><strong>Skills Developed:</strong> UI Research, Usability Evaluations, Prototyping</p>
                    </div>
                </div>
            </section>
        </div>
    );
}