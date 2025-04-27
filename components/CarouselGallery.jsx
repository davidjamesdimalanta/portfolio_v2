'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselGallery({ images, className = '', height = 500 }) {
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    api.on('select', onSelect);
    // Initial call to set the current index
    onSelect();
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback((index) => {
    api?.scrollTo(index);
  }, [api]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <Carousel 
        className="w-full"
        setApi={setApi}
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative" style={{ height: `${height}px` }}>
                <Image
                  src={image.src}
                  alt={image.alt || 'Gallery image'}
                  width={image.width || 1200}
                  height={image.height || 300}
                  className="rounded-lg w-full h-full"
                  style={{ objectFit: 'contain' }}
                  priority={index === 0}
                />
              </div>
              {image.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {image.caption}
                </p>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious 
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-none" 
              variant="outline"
            />
            <CarouselNext 
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-none" 
              variant="outline"
            />
          </>
        )}

        {/* Mobile Controls */}
        {images.length > 1 && (
          <div className="flex justify-center items-center gap-6 mt-4 md:hidden">
            {/* Mobile Previous Button */}
            <button 
              onClick={() => api?.scrollPrev()}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? 'bg-black w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Next Button */}
            <button 
              onClick={() => api?.scrollNext()}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Desktop Indicators */}
        {images.length > 1 && (
          <div className="hidden md:flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-black w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  );
} 