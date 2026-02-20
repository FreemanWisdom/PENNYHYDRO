"use client";

import { useRef } from "react";
import Image from "next/image";
import { Section, SectionHeading } from "./UI";

const projectImages = [
  "/1 (1).jpg",
  "/1 (2).jpg",
  "/1 (3).jpg",
  "/1 (4).jpg",
  "/1 (5).jpg",
  "/1 (6).jpg",
  "/1 (7).jpg",
  "/1 (8).jpg",
  "/1 (9).jpg",
  "/1 (11).jpg",
  "/1 (12).jpg",
  "/1 (13).jpg",
  "/1 (14).jpg",
  "/1 (15).jpg",
  "/1 (16).jpg",
  "/1 (17).jpg",
  "/1 (18).jpg",
];

export default function ProjectsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);

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
            className="h-11 w-11 rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg"
            aria-label="Scroll projects left"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
          <button
            type="button"
            onClick={() => scrollProjects("right")}
            className="h-11 w-11 rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg"
            aria-label="Scroll projects right"
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projectImages.map((src, index) => (
            <div
              key={index}
              className="relative h-64 min-w-[85%] sm:min-w-[47%] lg:min-w-[31%] xl:min-w-[23%] overflow-hidden rounded-lg snap-start shadow-sm"
            >
              <Image
                src={src}
                alt={`Project Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 47vw, (max-width: 1280px) 31vw, 23vw"
              />
              <div className="absolute inset-0 bg-brand-dark/0 hover:bg-brand-dark/25 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
