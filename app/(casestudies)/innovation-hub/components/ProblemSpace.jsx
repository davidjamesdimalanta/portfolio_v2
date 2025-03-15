'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProblemSpace() {
    // State to track which problem is active (0, 1, or 2)
    const [activeProblem, setActiveProblem] = useState(0);
    // State to handle image fade transition
    const [isImageFading, setIsImageFading] = useState(false);
    // State to store current image while transitioning
    const [currentImage, setCurrentImage] = useState(null);

    // Problem data with title, explanation, and corresponding image
    const problems = [
        {
            title: "Lack of Clarity",
            explanation: "Stakeholders couldn't understand what Innovation Hub was, despite reading the landing page. Content was overly complex and lacked a clear value proposition.",
            imageSrc: "/ihub assets/problem_space/lackofclarity.png", // Replace with actual image path
            imageAlt: "Screenshot showing lack of clarity in the original design"
        },
        {
            title: "Poor Space Utilization",
            explanation: "Excessive white space that didn't effectively communicate information. Important content was buried below the fold, leading to high bounce rates.",
            imageSrc: "/ihub assets/problem_space/poorspaceutil.png", // Replace with actual image path
            imageAlt: "Screenshot showing poor space utilization"
        },
        {
            title: "Unclear Impact",
            explanation: "Difficulty understanding the Hub's achievements and value to the university community. Metrics and success stories were absent from the main user flows.",
            imageSrc: "/ihub assets/problem_space/unclearimpact.png", // Replace with actual image path
            imageAlt: "Screenshot showing unclear impact presentation"
        }
    ];

    // Initialize current image on component mount
    useEffect(() => {
        setCurrentImage(problems[activeProblem].imageSrc);
    }, []);

    // Handle smooth image transition when active problem changes
    useEffect(() => {
        if (currentImage !== null) {
            // Start fade out
            setIsImageFading(true);
            
            // After fade out completes, change the image and fade in
            const timer = setTimeout(() => {
                setCurrentImage(problems[activeProblem].imageSrc);
                setIsImageFading(false);
            }, 300); // Matching the CSS transition duration
            
            return () => clearTimeout(timer);
        }
    }, [activeProblem]);

    return (
        <section className="mb-16 min-h-[600px]">
            <h2 className="text-3xl font-bold mb-6">Problem Space</h2>
            
            <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8">
                {/* Left side - Tabs */}
                <div className="md:w-1/2 flex flex-col gap-4 min-h-[450px] mt-8 md:mt-0">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveProblem(index)}
                            className={`text-left p-6 rounded-lg transition-all duration-300 border cursor-pointer ${
                                activeProblem === index 
                                    ? 'border-accent bg-gray-50' 
                                    : 'border-medium-light hover:border-medium'
                            }`}
                        >
                            <h3 className="text-xl font-semibold">{problem.title}</h3>
                            
                            {/* Animated explanation with transition */}
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeProblem === index 
                                        ? 'max-h-40 opacity-100 mt-4' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-medium">{problem.explanation}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Right side - Images with transition */}
                <div className="md:w-1/2 border border-medium-light rounded-lg p-4 flex items-center justify-center min-h-[450px]">
                    {/* Display image for the active problem with fade transition */}
                    <div className="relative w-full h-[300px]">
                        {currentImage && (
                            <Image
                                src={currentImage}
                                alt={problems[activeProblem].imageAlt}
                                fill
                                className={`object-contain transition-opacity duration-300 ease-in-out ${
                                    isImageFading ? 'opacity-0' : 'opacity-100'
                                }`}
                                priority
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
