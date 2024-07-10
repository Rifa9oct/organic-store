"use client"

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Countup = () => {
    const [counterOn, setCounterOn] = useState(false);
    
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='flex flex-col md:flex-row items-center pb-10 lg:pb-0 gap-10 text-center'>
                <div className='lg:w-[300px]'>
                    {
                        counterOn &&
                        <h1 className="text-3xl mb-3 lg:text-[46px] font-bold">
                            <CountUp start={0} end={5000} duration={2} />+
                        </h1>
                    }
                    <h2 className="text-xl font-bold">Years of Services</h2>
                </div>
                <div className='lg:w-[300px]'>
                    {
                        counterOn &&
                        <h1 className="text-3xl mb-3 lg:text-[46px] font-bold">
                            <CountUp start={0} end={800} duration={2} />+
                        </h1>
                    }
                    <h2 className="text-xl font-bold">Curated Products</h2>
                </div>
                <div className='lg:w-[300px]'>
                    {
                        counterOn &&
                        <h1 className="text-3xl mb-3 lg:text-[46px] font-bold">
                            <CountUp start={0} end={40} duration={2} />+
                        </h1>
                    }
                    <h2 className="text-xl font-bold">Product Categories</h2>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Countup;