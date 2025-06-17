"use client";

import { useState } from "react";

export default function Carousel({ slides = [] }: { slides?: string[] }) {
    const [current, setCurrent] = useState(0);

    const handleSelect = (index: number) => {
        setCurrent(index);
    };

    return (
        <div className="relative w-full overflow-hidden rounded-lg">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Slide ${idx}`}
                        className="w-full flex-shrink-0 object-cover"
                    />
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-2 w-full flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className="focus:outline-none"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill={index === current ? "#F97316" : "#CBD5E1"} // orange-500 or slate-300
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </button>
                ))}
            </div>
            <p className="absolute md:bottom-2/5 sm:bottom-8 left-10 text-white text-4xl md:text-6xl font-bold"><span
                style={{ color: '#F0B861' }}>25% discount</span><br /> all Paulo Coelho <br/> books!</p>
        </div>
    );
}