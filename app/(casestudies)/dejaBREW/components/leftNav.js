'use client'
import { useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';

export default function LeftNav() {
    const [activeSection, setActiveSection] = useState('problem-space');
    
    // Memoize navigation items to prevent unnecessary re-creation
    const navItems = useMemo(() => [
        { id: 'overview', label: 'Overview' },
        { id: 'problem-space', label: 'Problem Space' },
        { id: 'ideation', label: 'Ideation' },
        { id: 'prototyping', label: 'Prototyping' },
        { id: 'next-steps', label: 'Next Steps' },
    ], []);

    // Define a throttled state setter to prevent too many updates
    const throttledSetActiveSection = useCallback((function() {
        let lastCall = 0;
        return function(newSection) {
            const now = Date.now();
            if (now - lastCall >= 200) { // 200ms throttle
                setActiveSection(newSection);
                lastCall = now;
            }
        };
    })(), []);
    
    useEffect(() => {
        // Create a single observer instance
        const observerCallback = (entries) => {
            // Find the most visible section
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            
            if (visibleEntries.length > 0) {
                // Sort by visibility ratio and take the one with the highest ratio
                const mostVisible = visibleEntries.reduce((prev, current) => 
                    prev.intersectionRatio > current.intersectionRatio ? prev : current
                );
                
                throttledSetActiveSection(mostVisible.target.id);
            }
        };
        
        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '0px',
            threshold: [0.1, 0.2, 0.5], // Multiple thresholds for better accuracy
        });
        
        // Get sections once and cache them
        const sections = document.querySelectorAll('section[id]');
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Cleanup function
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [throttledSetActiveSection]); // Only re-create when throttledSetActiveSection changes
    
    return (
        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
            <div className="bg-white/80 dark:bg-dark/80 p-4 rounded-lg shadow-lg will-change-transform">
                <ul className="space-y-3">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link 
                                href={`#${item.id}`}
                                className={`
                                    flex items-center will-change-transform
                                    ${activeSection === item.id 
                                        ? 'font-bold text-accent dark:text-accent-dark border-l-4 border-accent dark:border-accent-dark pl-3' 
                                        : 'text-dark dark:text-snow hover:text-accent dark:hover:text-accent-dark border-l-4 border-transparent pl-3'}
                                `}
                                onClick={() => throttledSetActiveSection(item.id)}
                            >
                                <span className="text-sm whitespace-nowrap">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
} 