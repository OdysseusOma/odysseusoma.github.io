import React from "react";
import { useState } from "react";

const Skills = () => {
  const [value, setValue] = useState(80);
  // This function is called when the range slider changes
  //   const changeValue = (event) => {
  //     setValue(event.target.value);
  //   };
  return (
    <div className="bg-[#1B1F24] px-[3rem] h-fit lg:h-screen text-white flex flex-col md:flex-row w-full">
      <div className="skill-header w-full md:w-[30%] flex flex-col items-center justify-center text-center md:text-left">
        <div>
          <div className="skil-subtitle text-[15px]">WHAT CAN I DO</div>
          <div className="skill-title text-[46px]">Skills & Proficiencies</div>
        </div>
      </div>
      <div className="skill-tabs w-full md:w-[70%] flex flex-wrap gap-x-[2rem] md:gap-x-[10rem] my-[5rem] items-center justify-center">
        <div>
          <div className="skill">FRONTEND DEVELOPMENT</div>
          <div className="slider-container relative h-[15px] w-[200px] bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="flex flex-wrap w-[150px] gap-[1rem]">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Vue</p>
            <p>Angular</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div>
          <div className="skill">FRONTEND DEVELOPMENT</div>
          <div className="slider-container relative h-[15px] w-[200px] bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="flex flex-wrap w-[150px] gap-[1rem]">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Vue</p>
            <p>Angular</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div>
          <div className="skill">FRONTEND DEVELOPMENT</div>
          <div className="slider-container relative h-[15px] w-[200px] bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="flex flex-wrap w-[150px] gap-[1rem]">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Vue</p>
            <p>Angular</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div>
          <div className="skill">FRONTEND DEVELOPMENT</div>
          <div className="slider-container relative h-[15px] w-[200px] bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="flex flex-wrap w-[150px] gap-[1rem]">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Vue</p>
            <p>Angular</p>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
