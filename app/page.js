'use client'

import { useState, useEffect } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Featured from "./components/featured";
import Last from "./components/last";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({ 
      once: true,
    });

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-[#F7F4EC] flex justify-center items-center">
        <svg width="56.782" height="64.668" version="1.1" viewBox="0 0 6.028 6.527" xmlns="http://www.w3.org/2000/svg" className="animate-scalePulse">
            <g clipRule="evenodd" fill="#121314" fillRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision">
              <path className="UnoptimicedTransforms" transform="matrix(.01142 0 0 .01142 -2.884 -2.644)" d="m459.5 231.5c31.383 2.5782 60.024 32.691 55.617 65.125 0.11405 77.946 1.4078 156-0.85811 233.88-6.064 55.665-54.357 105.68-111.76 105.61-39.998 0.54715-80.003 0.50804-120-0.11725-13.389-14.401-34.478-46.081-25.391-59.471 49.095-0.22299 98.397 0.94676 147.35-1.9123 33.851-5.0332 52.652-38.996 55.023-70.465 1.4841-90.81 0.31863-181.78 0.0145-272.65z" fill="#121314"/>
              <path d="m6.0219 3.8293c-0.097211 0.95512-0.6938 1.8316-1.5356 2.2908-0.50651 0.27512-1.0934 0.44714-1.6735 0.38715 0.53784-0.12202 1.0692-0.42477 1.3361-0.92502 0.68931-0.41016 1.2084-1.1504 1.2295-1.9682 0.054784-1.0184-0.65388-2.0029-1.6146-2.3227-0.18736-0.039568-0.34849-0.083326-0.28872-0.3018v-0.4263c1.2298 0.20955 2.3277 1.2133 2.5071 2.4703 0.043021 0.26272 0.053432 0.53019 0.039591 0.79584z" clipRule="evenodd" fillRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" strokeWidth=".01142"/>
              <g strokeWidth=".01142">
              <path d="m1.5538 1.8868c-0.50049 0.38183-0.82777 0.97292-0.89076 1.5988-0.05644 0.074985-0.21447 0.015016-0.31349 0.03426h-0.33745c0.010978-0.53698 0.20968-1.0641 0.52532-1.496 0.11845-0.030636 0.23146-0.28423 0.36087-0.36658 0.075752-0.075752 0.1515-0.1515 0.22726-0.22726 0.11848-0.15943 0.55564-0.46847 0.73864-0.4347-0.035407 0.32248 0.18595 0.80779-0.31039 0.8915z"/>
              <path d="m3.7836 1.9195c0.27508 0.16853 0.37285 0.50631 0.33929 0.81224-0.0086809 0.58134 0.034851 1.1661-0.025576 1.745-0.11818 0.87966-0.92668 1.6324-1.8297 1.5975-0.36313-0.017418-0.80502 0.089023-1.0816-0.21433-0.2412-0.18461 0.2067-0.43341 0.3857-0.47614 0.44573-0.061066 0.94621 0.091897 1.3378-0.19984 0.40387-0.26264 0.59525-0.76082 0.55063-1.2302 0.0041642-0.71612 0.0054158-1.4323 0.003747-2.1484 0.11501 0.0047 0.22774 0.045082 0.31976 0.1142z"/>
              </g>
            </g>
        </svg>
      </div>
    );
  }

  return (
    <main className="flex flex-col justify-start items-center">
      <Landing data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" />
      <Featured />
      <About data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" />
      <Projects data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" />
      <Contact data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" />
      <Last />
    </main>
  );
}
