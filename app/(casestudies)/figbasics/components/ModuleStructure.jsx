'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ModuleStructure() {
    // State to track which module section is active
    const [activeSection, setActiveSection] = useState(0);
    // State to handle image fade transition
    const [isImageFading, setIsImageFading] = useState(false);
    // State to store current image while transitioning
    const [currentImage, setCurrentImage] = useState(null);

    // Module section data with title, explanation, and corresponding image
    const sections = [
        {
            title: "Learning Section",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
            ),
            explanation: "Comprehensive instructional content with clear explanations, visual examples, and step-by-step guidance on key concepts and techniques.",
            imageSrc: "/figbasics/03. Shapes Basics.png",
            imageAlt: "Learning section example showing Figma shapes basics"
        },
        {
            title: "Exercise Section",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
            ),
            explanation: "Guided practice activities with clear instructions and constraints that help learners apply newly acquired skills in a structured environment.",
            imageSrc: "/figbasics/EXERCISE_ Shapes Basics.png", 
            imageAlt: "Exercise section example for practicing shape creation in Figma"
        },
        {
            title: "Sandbox Section",
            icon: (
                <svg width="313" height="307" viewBox="0 0 313 307" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path d="M117.501 46.5H29.5005L8.50049 214M8.50049 214L53.25 298.5H154H260.25L304.5 214M8.50049 214H304.5M304.5 214L291.5 109.5M70.5005 143L129.5 131L185 151L194 148.655M244.5 135.5L194 148.655M172.5 8L225 22.5M277.5 37L225 22.5M225 22.5L194 148.655" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


            ),
            explanation: "Open-ended creative space where students can experiment freely with the tools and techniques they've learned, all within the canvas.",
            imageSrc: "/figbasics/sandbox.png", 
            imageAlt: "Sandbox section showing an open creative space in Figma"
        }
    ];

    // Initialize current image on component mount
    useEffect(() => {
        setCurrentImage(sections[activeSection].imageSrc);
    }, []);

    // Handle smooth image transition when active section changes
    useEffect(() => {
        if (currentImage !== null) {
            // Start fade out
            setIsImageFading(true);
            
            // After fade out completes, change the image and fade in
            const timer = setTimeout(() => {
                setCurrentImage(sections[activeSection].imageSrc);
                setIsImageFading(false);
            }, 300); // Matching the CSS transition duration
            
            return () => clearTimeout(timer);
        }
    }, [activeSection]);

    return (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left side - Module section tabs */}
            <div className="space-y-6">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveSection(index)}
                        className={`p-6 rounded-lg transition-all duration-300 border cursor-pointer ${
                            activeSection === index 
                                ? 'border-primary bg-primary/10' 
                                : 'border-medium-light bg-light/30 hover:border-medium'
                        }`}
                    >
                        <h4 className={`text-xl font-semibold mb-3 flex items-center ${
                            activeSection === index ? 'text-primary' : ''
                        }`}>
                            {section.icon}
                            {section.title}
                        </h4>
                        
                        {/* Animated explanation with transition */}
                        <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                activeSection === index 
                                    ? 'max-h-32 opacity-100' 
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="mb-4">{section.explanation}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Right side - Images with transition */}
            <div className="space-y-6">
                <div className="relative h-[500px] w-full">
                    {currentImage && (
                        <Image
                            src={currentImage}
                            alt={sections[activeSection].imageAlt}
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
    );
} 