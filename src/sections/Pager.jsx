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
      <div className="absolute md:bg-[url(/blueee.png)] sm:relative r-0 w-full h-full text-white z-3 md:w-[50%] flex flex-col justify-center items-center text-center py-5 md:py-0">
        <div className="text-[48px]">&lt;/About Me&gt;</div>
        <p className="max-w-[370px] text-[18px] text-center md:text-justify pt-[2rem] pb-[2rem] md:pb-[4rem]">
          <div className="">
            My love for reading sparked my journey into content writing, where
            now I weave tales that once enchanted me. I have worked in different
            capacities for content agencies and youtube channels. That's not
            all!
          </div>
          <br />
          I'm also a programmer with over 5 years of practical experience using
          multiple technologies and frameworks. My programming journey started
          with me curiously studying Python but I picked up a love for
          JavaScript and its frameworks along the way and the rest is history.
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
