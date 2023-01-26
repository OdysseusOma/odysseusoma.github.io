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
      <div className="skill-tabs text-[18px] w-full md:w-[70%] flex flex-wrap gap-y-[1rem] gap-x-[2rem] md:gap-x-[10rem] my-[5rem] justify-center">
        {/* Frontend developement */}
        <div className="flex flex-col gap-[0.5rem]">
          <div className="skill">FRONTEND DEVELOPMENT</div>
          <div className="slider-container relative h-[20px] w-full bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="grid gap-[1rem] grid-cols-3">
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Vue</p>
            <p>Angular</p>
            <p>JavaScript</p>
          </div>
        </div>

        {/* PRODUCT DESIGN */}
        <div className="flex flex-col gap-[0.5rem]">
          <div className="skill">PRODUCT DESIGN</div>
          <div className="slider-container relative h-[20px] w-full bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="grid gap-[1rem] grid-cols-3">
            <p>Figma</p>
            <p>Adobe XD</p>
            <p>Photoshop</p>
            <p>Illustrator</p>
          </div>
        </div>

        {/* BACKEND DEVELOPMENT */}
        <div className="flex flex-col gap-[0.5rem]">
          <div className="skill">BACKEND DEVELOPMENT</div>
          <div className="slider-container relative h-[20px] w-full bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="grid gap-[1rem] grid-cols-3">
            <p>Node JS</p>
            <p>MongoDB</p>
            <p>Express</p>
            <p>Git</p>
            <p>Python</p>
            <p>PHP</p>
            <p>API</p>
            <p>SQL</p>
            <p>JSON</p>
          </div>
        </div>

        {/* TECHNICAL WRITING */}
        <div className="flex flex-col gap-[0.5rem]">
          <div className="skill">TECHNICAL WRITING</div>
          <div className="slider-container relative h-[20px] w-full bg-[#57e4ff] rounded-full">
            <div className="slider w-[80%] bg-white h-full rounded-full"></div>
          </div>
          <div className="grid gap-[1rem] grid-cols-3">
            <p>Script</p>
            <p>Article</p>
            <p>Review</p>
            <p>Web Copy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
