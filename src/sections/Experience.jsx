import React from "react";

const Experience = () => {
  return (
    <div className="h-fit flex flex-col justify-center p-[3rem] bg-[url(/blankk.png)]">
      <div className="experience-header flex items-center justify-center text-center md:justify-left text-[20px] md:text-[50px] w-[300px] mb-[4rem]">
        Education & Experience
      </div>
      <div className="experience text-black flex flex-wrap gap-[2rem] justify-center">
        <div className="w-[300px] h-[200px]">
          <div className="text-[17px] my-[10px]">2022</div>
          <div className="font-bold text-[20px] mb-[10px]">
            BACHELOR OF ENGINEERING
          </div>
          <div className="text-[17px]">University of Ilorin</div>
        </div>
        <div className="w-[300px] h-[200px]">
          <div className="text-[17px]">2020-2023</div>
          <div className="font-bold text-[20px]">CONSOLT</div>
          <div className="text-[17px]">Full Stack Developer</div>
        </div>
        <div className="w-[300px] h-[200px]">
          <div className="text-[17px]">2017 -2020</div>
          <div className="font-bold text-[20px]">MRAM STUDIOS</div>
          <div className="text-[17px]">Creative Manager</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
