'use client'
import React from 'react';
import { useEffect } from 'react';

export default function Video() {
  useEffect(() => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.add('hidden');
    }
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md border border-medium-light">
    <div className="relative w-full h-full">
      {/* Loading animation */}
      <div id="loading" className="absolute inset-0 flex items-center justify-center bg-light/50 z-10">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-medium-light border-t-primary rounded-full animate-spin mb-3"></div>
          <p className="text-medium font-medium">Loading video...</p>
        </div>
      </div>
      
      <video 
        autoPlay
        loop
        muted
        className="w-auto h-auto object-contain"
        poster="/figbasics/sandbox.png"
        onLoadedData={(e) => {
          // Hide the loading animation when video is ready
          document.getElementById('loading').classList.add('hidden');
        }}
      >
        <source src="/figbasics/show-hide demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  );
}

