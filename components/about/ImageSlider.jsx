"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const sliders = [1, 2, 3, 4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide % 4) + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='relative md:w-[450px] h-[500px] rounded-lg overflow-hidden'>
                <div className="w-[400%] h-full flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${(currentSlide - 1) * 25}%)` }}>
                    <div className="w-[25%] transition duration-[2000s]">
                        <Image src="/sliders/1.png" width={450} height={500} alt="banner" />
                    </div>
                    <div className="w-[25%] transition duration-[2000s]">
                        <Image src="/sliders/2.png" width={450} height={500} alt="banner" />
                    </div>
                    <div className="w-[25%] transition duration-[2000s]">
                        <Image src="/sliders/3.png" width={450} height={500} alt="banner" />
                    </div>
                    <div className="w-[25%] transition duration-[2000s]">
                        <Image src="/sliders/4.png" width={450} height={500} alt="banner" />
                    </div>
                </div>

                {/* Manual navigation */}
                <div className="absolute bottom-24 md:bottom-10 left-[130px] md:left-[160px] flex justify-center gap-6">
                    {
                        sliders.map(index => (
                            <button
                                key={index}
                                className={`border-2 border-teal-400 p-1 rounded-full cursor-pointer transition-all ${currentSlide === index ? 'bg-teal-400' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ImageSlider;
