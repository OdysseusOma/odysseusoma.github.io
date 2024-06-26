import React from "react";

const Home = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="fullPage relative bg-white flex justify-center items-center">
      {/* hero text */}
      <div className="top-[10%] md:top-auto scale-50 md:scale-100 text-8xl herofont absolute flex flex-col text-center gap-y-[10rem] z-10">
        <h1>OMA'S</h1>
        <h1>PORTFOLIO</h1>
      </div>
      {/* hero background image */}
      <div className="top-[15%] md:top-auto scale-[0.60] md:scale-100 absolute codePng absolute">
        <img
          src="/heroimg.jpg"
          alt=""
          style={{ height: "300px", zIndex: "-1" }}
        />
      </div>
      {/* hero subtitle */}
      <div className="heroSubtitle text-1xl flex absolute bottom-auto md:bottom-20 top-[70%] md:top-auto">
        React Developer and Writer
      </div>
      {/* hero CTA */}
      <div className="heroCta absolute flex flex-col  md:right-0 bottom-10 gap-y-5 scale-[0.80] md:scale-auto">
        <a
          href="#"
          className="emailbtn bg-[#1c2947] px-[5rem] py-[0.5rem] cursor-pointer hover:bg-[#1b1f24] hover:scale-[1.1] text-white transition ease-in-out duration-500"
          onClick={handleScrollToBottom}
        >
          Email me
        </a>
        <div className="heroSocialIcons flex items-center justify-around">
          <a
            href="https://twitter.com/OdysseusOma"
            target="_blank"
            className="twitter h-6 w-6  hover:scale-[1.4] transition ease-in-out duration-500"
          >
            <img src="/twitter-svgrepo.svg" alt="tw" />
          </a>
          <a
            href="https://www.instagram.com/odyssey.of.oma/"
            target="_blank"
            className="instagram h-6 w-6  scale-[1.2] hover:scale-[1.6] transition ease-in-out duration-500"
          >
            <img src="/instagram-svgrepo.svg" alt="in" />
          </a>
          <a
            href="https://github.com/OdysseusOma"
            target="_blank"
            className="instagram h-6 w-6  hover:scale-[1.4] transition ease-in-out duration-500"
          >
            <img src="/github-svgrepo.svg" alt="gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/odysseusoma/"
            target="_blank"
            className="linkedIn h-6 w-6  hover:scale-[1.4] transition ease-in-out duration-500"
          >
            <img src="/linkedin-svgrepo.svg" alt="in" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
