import React from "react";
import photoalbum from "/images/dp.jpg";

const Pager = () => {
  return (
    <div className="w-full h-screen overflow-hidden md:h-screen relative bg-[#edf0f2] flex flex-col md:flex-row px-auto">
      {/* Omirin Adebayo Half */}
      <img
        src={photoalbum}
        alt=""
        className="absolute md:relative z-1 md:w-1/2 object-cover object-top"
      />

      {/* About Me half */}
      <div className="absolute sm:relative r-0 w-full h-full text-white md:text-black z-3 md:w-[50%] flex flex-col justify-center items-center text-center py-5 md:py-0">
        <div className="text-[48px]">&lt;/About Me&gt;</div>
        <p className="max-w-[370px] text-[14px] pt-[2rem] pb-[2rem] md:pb-[4rem]">
          My programming journey started with Python but I picked up a love for
          JavaScript along the way and transitioned to a JavaScript framework
          developer. I have extensive coding experience and I am comfortable
          with setting up and working with most libraries and frameworks for
          frontend development.
        </p>
        {/* <div className="aboutDownloads flex gap-[60px] text-white text-[11px]">
          <div className="bg-[#1b1f24] py-2 px-9 cursor-pointer hover:bg-violet-800 hover:scale-[1.2] transition ease-in-out duration-500">
            Resume
          </div>
          <div className="bg-[#1b1f24] py-2 px-9 cursor-pointer hover:bg-violet-800 hover:scale-[1.2] transition ease-in-out duration-500">
            Portfolio
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pager;
