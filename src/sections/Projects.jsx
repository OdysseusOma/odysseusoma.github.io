import React, { useState } from "react";
import Coding from "./Coding";
import Writing from "./Writing";

const Projects = () => {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="h-fit mt-0 md:mt-[3rem] m-[3rem]">
      <div className="flex justify-center items-center h-[40px] scale-[0.6] md:scale-[0.7] lg:scale-[1]">
        <div className="flex text-[12px] font-bold bg-[#1b1f24] rounded-[50px]">
          <p
            className={`px-[6rem] py-[1rem] rounded-[50px] cursor-pointer ${
              showComponent ? "bg-[#57e4ff]" : "bg-[#1b1f24] text-white"
            }`}
            onClick={() => setShowComponent(true)}
          >
            CODING
          </p>
          <p
            className={`px-[6rem] py-[1rem] rounded-[50px] cursor-pointer ${
              !showComponent ? "bg-[#57e4ff]" : "text-white rounded-[0px]"
            }`}
            onClick={() => setShowComponent(false)}
          >
            WRITING
          </p>
        </div>
      </div>

      {/* Coding page */}
      {showComponent ? <Coding /> : <Writing />}
    </div>
  );
};

export default Projects;
