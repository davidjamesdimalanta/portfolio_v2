'use client'
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
// import { useTheme } from 'next-themes';

export default function Navbar() {
    const [sideBar, showSideBar] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [renderNavbar, setRenderNavbar] = useState(false);
    // const { theme, setTheme } = useTheme();

    useEffect(() => {
      const timer = setTimeout(() => {
          setRenderNavbar(true); // Enable rendering after 3 seconds
      }, 2500);

      return () => clearTimeout(timer);
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
    }, [lastScrollY]);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
      }
    }, [controlNavbar]);

    useEffect(() => {
      if (typeof document !== 'undefined') {
        if (sideBar) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    }, [sideBar]);

    // const toggleTheme = () => {
    //   setTheme(theme === 'dark' ? 'light' : 'dark');
    // };

    const navbarAnimation = show ? 'animate-slideDown' : 'animate-slideUp';

    if (!renderNavbar) return null;

    return (
      <nav className={`fixed top-0 w-screen h-max bg-[#FFF9FB] flex justify-between items-center p-4 md:p-6 shadow-sm z-50 ${navbarAnimation}`}>
        <Link href={"/"}>
          <span className='font-dmSans text-2xl font-semibold'>Home</span>
        </Link>
        {/* Desktop menu - removed theme toggle */}
        <div className='hidden md:flex flex-grow justify-end items-center gap-4'>
          {/* Theme toggle button removed */}
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
          <div className='w-3/5 h-screen bg-[#F7F4EC] flex flex-col justify-start items-end p-6 gap-2 animate-slide'>
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
              {/* Mobile theme toggle removed */}
            </ul>
          </div>
        </div>
        )}
      </nav>
    );
}
