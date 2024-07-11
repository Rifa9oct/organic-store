"use client"

import Accordian from "./Accordian";
import { useState } from "react";

const QusAns = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="flex flex-col p-5 md:p-0 lg:flex-row justify-between lg:mx-[430px] mb-[120px]">
            <div>
                <Accordian
                    onActive={() => handleSetActiveIndex(1)}
                    title="Pulvinar nostrud class cum facilis?"
                    isActive={activeIndex === 1} >
                    I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(2)}
                    title="Pulvinar nostrud class cum facilis?"
                    isActive={activeIndex === 2} >
                    I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(3)}
                    title="Pulvinar nostrud class cum facilis?"
                    isActive={activeIndex === 3} >
                    I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </Accordian>
            </div>
            <div>
                <Accordian
                    onActive={() => handleSetActiveIndex(4)}
                    title="Pulvinar nostrud class cum facilis?"
                    isActive={activeIndex === 4} >
                    I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(5)}
                    title="Pulvinar nostrud class cum facilis?"
                    isActive={activeIndex === 5} >
                    I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </Accordian>

                <Accordian
                    onActive={() => handleSetActiveIndex(6)}
                    title="Pulvinar nostrud class cum facilis?"
                    isActive={activeIndex === 6} >
                    I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                </Accordian>
            </div>
        </div>
    );
};

export default QusAns;