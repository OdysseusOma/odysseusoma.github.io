import React from "react";

const Experience = () => {
  return (
    <div className="h-fit flex flex-col justify-center p-[3rem] bg-[url(/blankk.png)]">
      {/* Experience title */}
      <div className="font-bold md:font-normal flex items-center mx-auto md:mx-0 justify-center text-center md:justify-left text-[20px] md:text-[50px] w-[300px] mb-[4rem]">
        Education & Experience
      </div>

      {/* Experience list */}
      <div className="experience text-black flex flex-wrap md:gap-[2rem] justify-center">
        {/* Education*/}
        <div className="w-fit mx-auto md:w-[300px] py-[2rem] md:py-0 md:h-[200px]">
          <div className="text-[17px] my-[10px]">2023</div>
          <div className="font-bold text-[20px] mb-[10px]">
            B.Eng Mechanical Engineering
          </div>
          <div className="text-[17px]">University of Ilorin</div>
        </div>
        {/* Vertical line */}
        <div className="w-[130px] h-[1px] mr-0 md:h-[130px] md:w-[1px] md:mr-[2rem] bg-black"></div>
        {/* Work history */}
        <div className="w-fit flex flex-wrap max-w-[60%]">
          {/* Experience 1 */}
          <div className="w-[200px] py-[2rem] md:py-0 md:h-[100px]">
            {/* <div className="text-[17px]">2020-2023</div> */}
            <div className="font-bold text-[20px]">CONSOLT</div>
            <div className="text-[17px]">Full Stack Developer</div>
          </div>

          {/* Experience 2 */}
          <div className="w-[200px] py-[2rem] md:py-0 md:h-[100px]">
            {/* <div className="text-[17px]">2017 -2020</div> */}
            <div className="font-bold text-[20px]">MRAM STUDIOS</div>
            <div className="text-[17px]">Creative Manager</div>
          </div>
          {/* Experience 2 */}
          <div className="w-[200px] py-[2rem] md:py-0 md:h-[100px]">
            {/* <div className="text-[17px]">2017 -2020</div> */}
            <div className="font-bold text-[20px]">Kitarific</div>
            <div className="text-[17px]">Front-end Developer</div>
          </div>
          {/* Experience 2 */}
          <div className="w-[200px] py-[2rem] md:py-0 md:h-[100px]">
            {/* <div className="text-[17px]">2017 -2020</div> */}
            <div className="font-bold text-[20px]">Media Gearheads</div>
            <div className="text-[17px]">Writer</div>
          </div>
          {/* Experience 2 */}
          <div className="w-[200px] py-[2rem] md:py-0 md:h-[100px]">
            {/* <div className="text-[17px]">2017 -2020</div> */}
            <div className="font-bold text-[20px]">Crime Room</div>
            <div className="text-[17px]">Writer</div>
          </div>
          {/* Experience 2 */}
          <div className="w-[200px] py-[2rem] md:py-0 md:h-[100px]">
            {/* <div className="text-[17px]">2017 -2020</div> */}
            <div className="font-bold text-[20px]">PROP44</div>
            <div className="text-[17px]">Full Stack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
