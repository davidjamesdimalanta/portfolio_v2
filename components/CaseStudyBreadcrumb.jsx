'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CASE_STUDY_TITLES = {
  'wearable-ux': 'Wearable UX',
  'vs-code-mobile': 'VS Code Mobile',
  'innovation-hub': 'Innovation Hub',
  'dejaBREW': 'DejaBREW'
};

export default function CaseStudyBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  
  // Early return for homepage
  if (segments.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="p-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />
        
        {segments.map((segment, index) => {
          // Prepare the href for this segment
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          
          // Get a friendly name for the segment
          const segmentTitle = CASE_STUDY_TITLES[segment] || segment;
          
          // If it's the last segment, render it as the current page
          const isLastSegment = index === segments.length - 1;
          
          return (
            <React.Fragment key={segment}>
              <BreadcrumbItem>
                {isLastSegment ? (
                  <BreadcrumbPage>{segmentTitle}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{segmentTitle}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              
              {!isLastSegment && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
} 