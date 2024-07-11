"use client"

import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

const Accordian = ({ title, children, isActive, onActive }) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isActive]);

    return (
        <div className="mx-auto md:w-[455px] px-[30px] py-5 border-b-2">
            <div className="flex justify-between mb-3">
                <h3 className="font-bold">{title}</h3>
                <button
                    onClick={onActive}
                    className="text-2xl">
                    {
                        isActive ? <IoMdArrowDropup /> : <IoMdArrowDropright />
                    }
                </button>
            </div>
            <div
                ref={contentRef}
                style={{ height: height, transition: "height 600ms", overflow: "hidden" }}
            >
                <p className="text-gray-500 mb-6">{children}</p>
            </div>
        </div>
    );
};

export default Accordian;