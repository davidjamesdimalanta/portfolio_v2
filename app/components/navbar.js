'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';


const Navbar = () => {
    const [sideBar, showSideBar] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [renderNavbar, setRenderNavbar] = useState(false);

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

    const navbarAnimation = show ? 'animate-slideDown' : 'animate-slideUp';

    if (!renderNavbar) return null;

    return (
      <nav className={`fixed top-0 w-screen h-max bg-[#FFF9FB] flex justify-between items-center p-4 md:p-6 shadow-sm z-50 ${navbarAnimation}`}>
        <Link href={"/"}>
          <span className='font-dmSans text-2xl font-semibold'>David James</span>
        </Link>
            <div className='hidden md:flex flex-grow justify-end items-center gap-4'>
              <div>
                <Link href="/dejaBREW" className='hover:text-[#B2AC88] scroll-smooth'>
                  DejaBREW-Case Study
                </Link>
              </div>
              <a href='/JAV2025CV.pdf' target="_blank" rel="noopener noreferrer">
                <button>CV</button>
              </a> 
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
                <li><Link href='/dejaBREW' className='hover:text-[#B2AC88]'>DejaBREW Case Study</Link></li>
                <li><a href='/JAV2025CV.pdf' target="_blank" rel="noopener noreferrer" className='hover:text-[#B2AC88]'><button>CV</button></a></li>
              </ul>
            </div>
          </div>
          )}
      </nav>
    );
};

export default Navbar;
