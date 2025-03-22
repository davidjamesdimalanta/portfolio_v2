'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useTheme } from 'next-themes';

export default function Navbar() {
    const [menuExpanded, setMenuExpanded] = useState(true);

    useEffect(() => {
      if (typeof document !== 'undefined') {
        if (!menuExpanded) {
          document.body.style.overflow = '';
        } else {
          document.body.style.overflow = '';
        }
      }
    }, [menuExpanded]);

    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-56 max-h-56">
        {/* Menu when collapsed - just the button */}
        {!menuExpanded && (
          <div className="fixed bottom-8 right-8 z-50">
            <button 
              onClick={() => setMenuExpanded(true)}
              className="w-14 h-14 border-[1px] border-dark bg-transparent backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                className="w-7 h-7 text-dark dark:text-gray-900"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        )}

        {/* Expanded Menu - includes links and close button */}
        {menuExpanded && (
          <div className=''>
            <div className="fixed max-w-64 max-h-64 bottom-4 right-4 z-50 bg-transparent backdrop-blur-md rounded-lg shadow-2xl p-4">
              
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="font-dmSans text-lg font-medium hover:text-accent dark:hover:text-accent-dark transition-colors"
                  onClick={() => setMenuExpanded(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/dejaBREW" 
                  className="font-dmSans text-lg hover:text-accent dark:hover:text-accent-dark transition-colors"
                  onClick={() => setMenuExpanded(false)}
                >
                  dejaBrew Case Study
                </Link>
                <Link 
                  href="/innovation-hub" 
                  className="font-dmSans text-lg hover:text-accent dark:hover:text-accent-dark transition-colors"
                  onClick={() => setMenuExpanded(false)}
                >
                  iHub Case Study
                </Link>
                <Link 
                  href="/JAV2025CV.pdf" 
                  target='_blank'
                  className="font-dmSans text-lg hover:text-accent dark:hover:text-accent-dark transition-colors"
                  onClick={() => setMenuExpanded(false)}
                >
                  CV
                </Link>
              </div>

              <div className="flex justify-end items-start mt-4">
                <button 
                  onClick={() => setMenuExpanded(false)}
                  className="w-14 h-14 border-[1px] border-dark bg-transparent rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    className="w-5 h-5 text-dark"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Background overlay */}
            <div 
              className="fixed inset-0 z-[49]" 
              onClick={() => setMenuExpanded(false)}
            />
          </div>
        )}
      </div>
    );
}
