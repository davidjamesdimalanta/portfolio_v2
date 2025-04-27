'use client'
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function About() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsContainerRef = useRef(null);
    
    // Function to scroll to active tab
    const scrollToActiveTab = () => {
        if (!tabsContainerRef.current) return;
        
        const tabsContainer = tabsContainerRef.current;
        const activeTab = tabsContainer.children[activeTabIndex];
        
        // Only scroll if the container is overflowing
        if (tabsContainer.scrollWidth > tabsContainer.clientWidth) {
            const containerWidth = tabsContainer.clientWidth;
            const tabOffsetLeft = activeTab.offsetLeft;
            const tabWidth = activeTab.clientWidth;
            
            // Center the tab in the view when possible
            const scrollPosition = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
            
            tabsContainer.scrollTo({
                left: Math.max(0, scrollPosition),
                behavior: 'smooth'
            });
        }
    };
    
    // Scroll to active tab when it changes
    useEffect(() => {
        scrollToActiveTab();
    }, [activeTabIndex]);
    
    const jobs = [
        {
            company: "Innovation Hub",
            title: "Designer",
            period: "2024 - Present",
            url: "https://blogs.studentlife.utoronto.ca/innovationhub/",
            description: [
                "Redesigned and developed the Innovation Hub website on WordPress, connecting project partners with design services",
                "Delivered high-fidelity Figma prototypes and maintained the internal design system for consistency",
                "Spearheaded the WordPress migration project, ensuring a seamless transition of content and functionality",
                "Developed custom components using CSS and JavaScript to enhance user experience and site interactivity"
            ]
        },
        {
            company: "Global Spark",
            title: "Developer",
            period: "2023 - 2024",
            url: "https://globalspark.world",
            description: [
                "Developed the Social Impact Consulting Program page that connects students with consultants",
                "Implemented responsive design principles to ensure WCAG accessibility across all devices",
                "Utilized modern web technologies to create an engaging user experience for program participants"
            ]
        },
        {
            company: "Empire Health Systems",
            title: "Developer",
            period: "2023 - 2023",
            url: "https://empirehsi.com/",
            description: [
                "Designed and built a secure patient intake system with Express.js, MongoDB, and AWS S3 integration",
                "Implemented Google OAuth authentication with domain verification for healthcare staff",
                "Developed a solution that digitized manual processes, eliminating paperwork and improving data accuracy",
                "Created a HIPAA-compliant system for storing and accessing patient information and medical documentation"
            ]
        }
    ];

    return(
        <main id="about" className="max-w-[90vw] w-auto min-h-screen md:h-auto flex flex-col justify-start items-center p-4 md:p-8 py-16">
            <div className="w-full max-w-4xl flex flex-col justify-center items-start gap-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-medium pb-2">About Me</h2>
                        <div className="text-base md:text-lg mb-8">
                            <p className="mb-4">
                                Hey! my name is David James, and I am an MI UXD candidate in the {" "}  
                                <a 
                                    className="text-accent dark:text-accent-dark hover:underline" href="https://ischool.utoronto.ca/master-of-information/user-experience-design/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Faculty of Information
                                </a>{" "}
                                at UofT. What sets me apart is my unique blend of 
                                design thinking and technical expertise—I bridge the gap between user experience and front-end development, 
                                ensuring that what I build is both functional and intuitive.
                            </p>
                            <p className="mb-4">
                                I began my coding journey at the start of 2023 as a New Year&apos;s resolution to learn a new skill. 
                                Today, I am fortunate to have worked with a{" "}
                                <a 
                                    className="text-accent dark:text-accent-dark hover:underline" 
                                    href="https://globalspark.world" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    student-led non-profit
                                </a>, a{" "}
                                <a 
                                    className="text-accent dark:text-accent-dark hover:underline" 
                                    href="https://empirehsi.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    home health & hospice solutions provider
                                </a>, and a{" "}
                                <a 
                                    className="text-accent dark:text-accent-dark hover:underline" 
                                    href="https://blogs.studentlife.utoronto.ca/innovationhub/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    student-led design studio
                                </a>. Outside of work, I go to the gym, I read comics, and play video games.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-medium">
                            <Image 
                                src="/photo.png" 
                                alt="Profile Picture"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                
                <h2 className="text-2xl font-semibold border-b-2 border-medium pb-2">Where I&apos;ve Worked</h2>
                <div className="w-full flex flex-col md:flex-row gap-4">
                    <div 
                        ref={tabsContainerRef}
                        className="w-full md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide"
                    >
                        {jobs.map((job, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTabIndex(index)}
                                className={`px-4 py-2 text-left whitespace-nowrap md:whitespace-normal border-b-2 md:border-l-2 md:border-b-0 transition-all ${
                                    activeTabIndex === index 
                                        ? 'border-accent dark:border-accent-dark text-accent dark:text-accent-dark' 
                                        : 'border-medium-light hover:bg-snow hover:text-accent dark:hover:bg-accent-dark dark:hover:text-dark'
                                }`}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>
                    <div className="w-full md:w-3/4 p-4 border-l border-medium-light">
                        <h3 className="text-xl font-medium">
                            <span>{jobs[activeTabIndex].title}</span>
                            <span className="text-accent dark:text-accent-dark"> @ </span>
                            <a href={jobs[activeTabIndex].url} className="text-accent dark:text-accent-dark hover:underline" target="_blank" rel="noopener noreferrer">
                                {jobs[activeTabIndex].company}
                            </a>
                        </h3>
                        <p className="text-sm text-medium-light mb-4">{jobs[activeTabIndex].period}</p>
                        <ul className="list-disc pl-5 space-y-2">
                            {jobs[activeTabIndex].description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="w-full mt-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b-2 border-medium pb-2">Technologies I Work With</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>HTML</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>CSS</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>JavaScript</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Python</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>React</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Next.js</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Node.js</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Express.js</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>React Native</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>SQL</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>MongoDB</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>AWS SDK3</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>R</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Figma</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Framer</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>WordPress</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>Webflow</li>
                        <li className="flex items-center gap-2"><span className="text-accent dark:text-accent-dark">▹</span>WCAG</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}