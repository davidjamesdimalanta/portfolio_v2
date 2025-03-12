'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function BeforeAfterComparison() {
  const [leftPanelSize, setLeftPanelSize] = useState(50);
  const [rightPanelSize, setRightPanelSize] = useState(50);

  return (
    <div className="mb-8">
      <p className="text-xl mb-2"><strong>Use the slider to compare the before and after of the landing page.</strong></p>
      <ResizablePanelGroup 
        direction="horizontal" 
        className="min-h-[900px] rounded-lg border border-dark"
        onLayout={(sizes) => {
          setLeftPanelSize(sizes[0]);
          setRightPanelSize(sizes[1]);
        }}
      >
        <ResizablePanel defaultSize={50} minSize={0}>
          <div className="flex h-full flex-col">
            <div className="p-4 font-semibold bg-gray-50 border-b border-dark">Before</div>
            <div className="relative flex-1 overflow-hidden shadow-2xl transition-shadow duration-300 ease-in-out">
              <div 
                className="absolute w-[1200px] h-full transition-all duration-300 ease-in-out" 
                style={{ 
                  filter: leftPanelSize < 50 ? 'blur(2px) brightness(0.9)' : 'none',
                }}
              >
                <Image 
                  src="/ihub assets/Landing_Snapshot_old.png" 
                  alt="Innovation Hub website before redesign"
                  fill
                  className="object-cover object-left w-full"
                  style={{ maxWidth: 'none' }}
                />
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle 
          withHandle 
          className="bg-dark relative z-10"
        >
          <div className="absolute inset-y-0 -left-1 -right-1 flex items-center justify-center pointer-events-none">
            <div className="h-12 w-6 rounded-full bg-primary flex items-center justify-center shadow-md">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </ResizableHandle>
        <ResizablePanel defaultSize={50} minSize={0}>
          <div className="flex h-full flex-col">
            <div className="p-4 font-semibold bg-gray-50 border-b border-dark">After</div>
            <div className="relative flex-1 overflow-hidden shadow-2xl transition-shadow duration-300 ease-in-out">
              <div 
                className="absolute w-[1200px] h-full transition-all duration-300 ease-in-out" 
                style={{ 
                  filter: rightPanelSize < 50 ? 'blur(2px) brightness(0.9)' : 'none',
                }}
              >
                <Image 
                  src="/ihub assets/Landing_Snapshot_new.png" 
                  alt="Innovation Hub website after redesign"
                  fill
                  className="object-cover object-right w-full"
                  style={{ maxWidth: 'none' }}
                />
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
} 