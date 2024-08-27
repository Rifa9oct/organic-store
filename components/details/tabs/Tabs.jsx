"use client"

import { useState } from "react";

const Tabs = ({ config }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div>
            <div className="relative flex mb-5 border-b-2 z-10">
                {
                    config.map((entry, index) => (
                        <div key={index}
                            className={`${activeTab === index ? "text-[#8BC34A] border-x-2 border-t-2 p-2 border-[#8BC34A] shadow shadow-[#fdfcfc]" : "p-2"} cursor-pointer font-bold`}
                            onClick={() => setActiveTab(index)}
                        >
                            {entry.header}
                        </div>
                    ))
                }
            </div>

            <div>
                {config[activeTab].component}
            </div>
        </div>
    );
};

export default Tabs;