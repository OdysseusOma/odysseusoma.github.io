import React from "react";
import DocImage from "../assets/pngegg.png";
import wriRes from "/Omirin Adebayo Writer.pdf";

const Writing = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[1rem] h-fit md:h-[10rem] mt-0 md:mt-[2rem]">
        <div className="font-bold h-[40px]">
          I'm the copywriter you never knew you needed
        </div>
        <div className="max-w-[50rem] text-center">
          I can write about nearly anything I love to familiarise myself by
          researching your industry before I get started. Thus, I am comfortable
          writing on any topic and industry. Wondering if your project is too
          technical or niche? Send me a message first and we can talk about it.
        </div>
        {/* <div>
          I am open to: Freelance A freelance relationship may be a better
          option to get the help you need if: a. Your current staff lacks the
          expertise to fulfill a new requirement b. You are not financially
          ready to hire employees c. Your needs are short-term 👉🏻 Project basis
          👉🏻 Remote working Contractors If you are looking for a more heavy
          loads of work, you can consider a contractor relationship We will draw
          up an agreement, including the expected timeframe for how long the
          project should last 👉🏻 Full time 👉🏻 Contract basis 👉🏻 Remote working
        </div> */}
      </div>

      {/* Niche Samples */}
      <div className="">
        <div className="flex text-[30px] justify-end mt-[1rem] mx-[4rem]">
          Niche samples
        </div>
        <div className="mt-[2rem] flex flex flex-wrap justify-center md:grid grid-cols-6 grid-rows-3 gap-[1rem]">
          {/* Project 1 */}
          <a
            href="https://docs.google.com/document/d/1-XAC9JNFVWralC90gVexctta-XB9Kq4dsFFX7sQtad8/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline col-start-1 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">True Crime</span>
                  <span className="max-w-[13rem] text-[13px]">
                    A Youtube documentary that showcases my ability for
                    storytelling while presenting factually acturate informatino
                    to viewres.
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 2 */}
          <a
            href="https://docs.google.com/document/d/1xCSJiy2dVgJHL51OhSEOsEk12DhC6ITO/edit?usp=drive_link&ouid=100470540127059577902&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline row-start-1 col-start-4 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white hover:scale-120">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Pet Guide</span>
                  <span className="max-w-[13rem] text-[13px]">
                    An insighful book with essential information on how to look
                    after the Weimaraner dog breed.
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 3 */}
          {/* <div className="h-[10rem] w-[25rem] row-start-2 col-start-2 row-start-2 bg-blue-400">
            <div className="flex justify-between">
              <div className="h-[10rem] w-[10rem] bg-yellow-200 rounded-[30px]"></div>
              <div className="flex flex-col items-center justify-center bg-red-400">
                <span className="font-bold">Optmial Commercial Agency</span>
                <span className="max-w-[13rem] text-[13px]">
                  Sample work can entice potential clients to reach out for more
                  of your work. Share them here.
                </span>
              </div>
            </div>
          </div> */}
          <a
            href="https://docs.google.com/document/d/1tXMSCjdViqnvi6nvTdHr3ZSf0h4l7NaJvgS2-I3AkGQ/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline row-start-2 col-start-2 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white hover:scale-120">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Finance</span>
                  <span className="max-w-[13rem] text-[13px]">
                    An analysis of the financial implication of hosting the
                    World Cup. Niche topics can be thoroughly discussed
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 4 */}
          <a
            href="https://docs.google.com/document/d/1jzNhaqlOOHSBsLMTvraZc3SNlbdufmIv/edit?usp=drive_link&ouid=100470540127059577902&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline row-start-2 col-start-5 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white hover:scale-120">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Tech</span>
                  <span className="max-w-[13rem] text-[13px]">
                    Long form User Guide for a product. This showcases my
                    ability to make diligent research on a topic
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 5 */}
          <a
            href="https://docs.google.com/document/d/1bzbhYvZGSD3gTW3VaNHLvw64oBmz6O1zgsF5_cPQiFo/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline row-start-3 col-start-3 transition ease-in-out delay-150 hover:scale-105"
          >
            <div className="h-[10rem] w-[25rem] relative overflow-hidden bg-opacity-40 bg-blur-lg backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl flex transition-transform transform bg-violet-300 hover:bg-[#1c2947] hover:text-white hover:scale-120">
              <div className="flex justify-between space-x-2 items-center">
                <div
                  id="docu-image"
                  className="h-[10rem] w-[10rem] rounded-[30px] overflow-hidden flex items-center"
                >
                  {/* The document PNG image */}
                  <img
                    src={DocImage}
                    alt="Document Image"
                    className="object-cover w-[70%] rounded-[30px] transition-transform transform hover:scale-120"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold">Health and Wellness</span>
                  <span className="max-w-[13rem] text-[13px]">
                    SEO optimized blog post to drive the right traffic to your
                    website. Articles are conversational while also ranking high
                    in search indexes
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href={wriRes}
          download="Resume"
          className="py-3 px-2 rounded-lg border border-black bg-opacity-40 bg-violet-300 hover:bg-[#1c2947] hover:text-white text-[16px]"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Writing;
