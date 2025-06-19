"use client";

import { useState } from "react";
import CustomSvg from "./CustomSvg";

export default function Carousel({ slides = []}: { slides?: string[]}) {
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
                        <CustomSvg
                            index={index}
                            current={current} />
                    </button>
                ))}
            </div>
            <p className="absolute md:bottom-2/5 sm:bottom-8 left-10 text-white text-4xl md:text-6xl font-bold"><span
                style={{ color: '#F0B861' }}>25% discount</span><br /> all Paulo Coelho <br /> books!</p>
        </div>
    );
}