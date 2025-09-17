"use client";

import * as React from "react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Registra il plugin ScrollTrigger solo lato client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Animazione GSAP all'entrata
  useEffect(() => {
    if (!carouselRef.current) return;

    const animation = gsap.fromTo(
      carouselRef.current,
      { 
        opacity: 0,
        y: 100 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={carouselRef} className="w-full max-w-5xl mx-auto mt-16 px-20 relative">
      <Carousel className="w-full rounded-lg" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-0 shadow-none">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <div className="relative h-[550px] w-full rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border-0 shadow-lg z-30 focus:ring-0 focus:outline-none cursor-pointer" />
        <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 border-0 shadow-lg z-30 focus:ring-0 focus:outline-none cursor-pointer" />
      </Carousel>
    </div>
  );
}
