import React from "react";

const Home = () => {
  return (
    <div className="fullPage relative bg-white flex justify-center items-center">
      {/* hero text */}
      <div className="text-8xl herofont absolute flex flex-col text-center gap-y-[10rem] z-10">
        <h1>OMA'S</h1>
        <h1>PORTFOLIO</h1>
      </div>
      {/* hero background image */}
      <div className="absolute codePng absolute">
        <img
          src="/public/heroimg.jpg"
          alt=""
          style={{ height: "300px", zIndex: "-1" }}
        />
      </div>
      {/* hero subtitle */}
      <div className="heroSubtitle text-1xl flex absolute bottom-20">
        React Developer and Writer
      </div>
      {/* hero CTA */}
      <div className="heroCta absolute flex flex-col right-0 bottom-10 gap-y-5">
        <a href="#" className="emailbtn bg-blue-400 px-[5rem] py-[0.5rem]">
          Email me
        </a>
        <div className="heroSocialIcons flex items-center justify-around">
          <a href="" className="twitter h-6 w-6">
            <img src="/public/twitter-svgrepo.svg" alt="" />
          </a>
          <a href="" className="instagram h-6 w-6">
            <img src="/public/github-svgrepo.svg" alt="" />
          </a>
          <a href="" className="linkedIn h-6 w-6">
            <img src="/public/linkedin-svgrepo.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
