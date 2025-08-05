"use client";
import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const list = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Technologies",
    value: "20",
    postfix: "+",
  },
  {
    metric: "Clients",
    value: "50",
    postfix: "+",
  },
];

const AchievementSections = () => {
  return (
    <div className="py-8 px-4  xl:gap-16 sm:py-16">
      <div className="border border-[#33353F] rounded-md py-8 px-17 flex flex-row items-center justify-around">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-4xl font-bold text-white flex flex-row">
                <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(item.value)}
                    locale="en-US"
                    className="text-white text-4cl font-bold"
                    config={((_, index)=>{
                        return {
                            mass: 1,
                            tension: 140 * (index + 1),
                            friction: 100,
                        }
                    })}
                />
                {item.postfix} 
            </h2>
            <p className="text-[#ADB7BE] text-base">{item.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSections;
