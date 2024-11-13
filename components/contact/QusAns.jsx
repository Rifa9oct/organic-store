"use client"

import Accordian from "./Accordian";
import { useState } from "react";

const QusAns = ({dict}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="font-poppins max-w-[1320px] mx-auto flex flex-col p-5 md:p-0 lg:flex-row justify-center lg:gap-16 mb-[120px]">
            <div>
                <Accordian
                    onActive={() => handleSetActiveIndex(1)}
                    title={dict.Qus1}
                    isActive={activeIndex === 1} >
                    {dict.Ans1}
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(2)}
                    title={dict.Qus2}
                    isActive={activeIndex === 2} >
                    {dict.Ans2}
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(3)}
                    title={dict.Qus3}
                    isActive={activeIndex === 3} >
                    {dict.Ans3}
                </Accordian>
            </div>
            <div>
                <Accordian
                    onActive={() => handleSetActiveIndex(4)}
                    title={dict.Qus4}
                    isActive={activeIndex === 4} >
                    {dict.Ans4}
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(5)}
                    title={dict.Qus5}
                    isActive={activeIndex === 5} >
                    {dict.Ans5}
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(6)}
                    title={dict.Qus6}
                    isActive={activeIndex === 6} >
                    {dict.Ans6}
                </Accordian>
            </div>
        </div>
    );
};

export default QusAns;