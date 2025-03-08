'use client'
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [sideBar, showSideBar] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [renderNavbar, setRenderNavbar] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      const timer = setTimeout(() => {
          setRenderNavbar(true); // Enable rendering after 3 seconds
      }, 2500);

      return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const controlNavbar = useCallback(() => {
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          if (window.scrollY > lastScrollY) {
            setShow(false);
          } else {
            setShow(true);
          }
          setLastScrollY(window.scrollY);
        }, 100);
      };
    }, [lastScrollY]); // Dependencies
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
      }
    }, [controlNavbar]);

    useEffect(() => {
      if (typeof document !== 'undefined') {
        if (sideBar) {
          document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
          document.body.style.overflow = ''; // Enable scrolling
        }
      }
    }, [sideBar]); // Dependency on sidebar state

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navbarAnimation = show ? 'animate-slideDown' : 'animate-slideUp';

    if (!renderNavbar) return null;

    return (
      <nav className={`fixed top-0 w-screen h-max bg-[#FFF9FB] dark:bg-[#46351D] dark:text-[#FFF9FB] flex justify-between items-center p-4 md:p-6 shadow-sm z-50 ${navbarAnimation}`}>
        <Link href={"/"}>
          <span className='font-dmSans text-2xl font-semibold'>David James</span>
        </Link>
        <div className='hidden md:flex flex-grow justify-end items-center gap-4'>
          <button 
            onClick={toggleTheme}
            className='flex items-center gap-2 hover:text-[#B2AC88] transition-colors'
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-8 h-8 max-h-fit md:hidden hover:cursor-pointer"
          onClick={() => showSideBar(!sideBar)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {sideBar && (
        <div className='md:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-end'>
        <div className='w-3/5 h-screen bg-[#F7F4EC] dark:bg-[#46351D] dark:text-[#FFF9FB] flex flex-col justify-start items-end p-6 gap-2 animate-slide'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-8 h-8 max-h-fit md:hidden"
            onClick={() => showSideBar(!sideBar)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <ul className='w-full h-auto flex flex-col items-end text-lg gap-4 pt-4'>
            <li>
              <button 
                onClick={toggleTheme}
                className='flex items-center gap-2 hover:text-[#B2AC88] transition-colors'
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <>
                    <span>Light Mode</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Dark Mode</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      )}
    </nav>
    );
}
