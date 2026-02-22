"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "./UI";
import { projectGalleryImages } from "@/lib/images";

export default function ProjectsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleSlides, setVisibleSlides] = useState<Set<number>>(
    () => new Set([0, 1, 2])
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSlides((currentVisibleSlides) => {
          const nextVisibleSlides = new Set(currentVisibleSlides);
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const slideIndex = Number(
              (entry.target as HTMLElement).dataset.slideIndex
            );
            if (Number.isFinite(slideIndex)) {
              nextVisibleSlides.add(slideIndex);
            }
          }
          return nextVisibleSlides;
        });
      },
      {
        root: track,
        rootMargin: "60% 0px",
        threshold: 0.01,
      }
    );

    slideRefs.current.forEach((slideRef) => {
      if (slideRef) observer.observe(slideRef);
    });

    return () => observer.disconnect();
  }, []);

  const scrollProjects = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    const slideWidth = trackRef.current.clientWidth * 0.85;
    trackRef.current.scrollBy({
      left: direction === "left" ? -slideWidth : slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <Section id="projects">
      <SectionHeading
        title="Our Recent Projects"
        subtitle="Operational Excellence"
        centered
      />
      <div className="relative">
        <div className="flex justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={() => scrollProjects("left")}
            className="h-11 w-11 rounded-full border border-brand-black bg-brand-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary hover:shadow-lg"
            aria-label="Scroll projects left"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
          <button
            type="button"
            onClick={() => scrollProjects("right")}
            className="h-11 w-11 rounded-full border border-brand-black bg-brand-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary hover:shadow-lg"
            aria-label="Scroll projects right"
          >
            <span aria-hidden="true">&gt;</span>
          </button>

          
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projectGalleryImages.map((image, index) => (
            <div
              key={index}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              data-slide-index={index}
              className="relative h-64 min-w-[85%] sm:min-w-[47%] lg:min-w-[31%] xl:min-w-[23%] overflow-hidden rounded-lg snap-start shadow-sm"
            >
              {visibleSlides.has(index) ? (
                <Image
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-slate-200" />
              )}
              <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
