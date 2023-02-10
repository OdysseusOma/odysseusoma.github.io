import React from "react";

const Pager = () => {
  return (
    <div className="w-full h-fit md:h-screen relative bg-[#edf0f2] flex flex-col md:flex-row">
      {/* Omirin Adebayo Half */}
      <div className="md:w-[50%] flex flex-col justify-center items-center bg-[#1b1f24] py-5 md:py-0">
        <div className="h-[200px] w-[200px] bg-[#edf0f2]">image</div>
        <div className="text-[#57e4ff] text-center font-bold py-[2rem]">
          <div className="text-[28px]">&lt;OMIRIN ADEBAYO&gt;</div>
          <div className="text-[18px]">React Developer & Writer</div>
        </div>
        <div className="flex-wrap max-w-[250px] text-white">
          Hi, I'm Adebayo and my friends call me OMA. I am a Nigeria-based
          freelancer and I build functional websites and webapps with the best
          UI using React Libraries
        </div>
      </div>

      {/* About Me half */}
      <div className="md:w-[50%] flex flex-col justify-center items-center text-center py-5 md:py-0">
        <div className="text-[48px]">&lt;/About Me&gt;</div>
        <p className="max-w-[370px] text-[14px] pt-[2rem] pb-[2rem] md:pb-[4rem]">
          My programming journey started with Python but I picked up a love for
          JavaScript along the way and transitioned to a JavaScript framework
          developer. I have extensive coding experience and I am comfortable
          with setting up and working with most libraries and frameworks for
          frontend development.
        </p>
        <div className="aboutDownloads flex gap-[60px] text-white text-[11px]">
          <div className="bg-[#1b1f24] py-2 px-9 cursor-pointer hover:bg-blue-400 hover:scale-[1.2] hover:text-black transition ease-in-out duration-500">
            Resume
          </div>
          <div className="bg-[#1b1f24] py-2 px-9 cursor-pointer hover:bg-blue-400 hover:scale-[1.2] hover:text-black transition ease-in-out duration-500">
            Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pager;
